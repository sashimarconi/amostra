const GHOSTSPAY_BASE_URL = "https://api.ghostspaysv2.com/functions/v1";

function getCredentials() {
  const secretKey = process.env.GHOSTSPAY_SECRET_KEY || "";
  const companyId = process.env.GHOSTSPAY_COMPANY_ID || "";
  return { secretKey, companyId };
}

function mapStatus(rawStatus) {
  const status = (rawStatus || "").toString().toLowerCase();
  if (["paid", "approved", "succeeded", "success", "completed"].includes(status)) {
    return "paid";
  }
  if (["refund", "refunded", "chargeback"].includes(status)) {
    return "refund";
  }
  if (["canceled", "cancelled", "declined", "failed", "refused"].includes(status)) {
    return "canceled";
  }
  if (["med"].includes(status)) {
    return "med";
  }
  return "pending";
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "txid/id é obrigatório" });
    }

    const { secretKey, companyId } = getCredentials();
    if (!secretKey || !companyId) {
      return res.status(500).json({
        error: "Credenciais GhostsPay não configuradas no servidor",
      });
    }
    const auth = Buffer.from(`${secretKey}:${companyId}`).toString("base64");

    const response = await fetch(`${GHOSTSPAY_BASE_URL}/transactions/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: "application/json",
      },
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      return res.status(response.status).json({
        error: payload?.message || payload?.error || "Erro ao consultar transação",
        details: payload,
      });
    }

    const rawStatus =
      payload?.status ||
      payload?.transaction?.status ||
      payload?.payment?.status ||
      payload?.data?.status ||
      "";

    const normalizedStatus = mapStatus(rawStatus);
    const paidAt =
      payload?.paidAt ||
      payload?.approvedAt ||
      payload?.payment?.paidAt ||
      payload?.transaction?.paidAt ||
      (normalizedStatus === "paid" ? new Date().toISOString() : null);

    return res.status(200).json({
      status: normalizedStatus,
      paidAt,
      txid: id,
      rawStatus,
      raw: payload,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno ao consultar status",
      message: error?.message || "Unknown error",
    });
  }
}
