const NITRO_BASE_URL =
  process.env.NITRO_BASE_URL ||
  process.env.GHOSTSPAY_BASE_URL ||
  process.env.ALLOWPAY_BASE_URL ||
  "https://api.nitropagamento.app";

function readEnv(...keys) {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return "";
}

function getCredentials() {
  const publicKey = readEnv(
    "NITRO_PUBLIC_KEY",
    "NITRO_API_KEY",
    "GHOSTSPAY_API_KEY",
    "SPEEDPAG_PUBLIC_KEY",
  );
  const secretKey = readEnv(
    "NITRO_SECRET_KEY",
    "NITRO_API_SECRET",
    "GHOSTSPAY_SECRET_KEY",
    "ALLOWPAY_SECRET_KEY",
    "ALLOWPAY_API_KEY",
    "SPEEDPAG_SECRET_KEY",
  );
  return { publicKey, secretKey };
}

function mapStatus(rawStatus) {
  const status = (rawStatus || "").toString().toLowerCase();
  if (["paid", "approved", "completed", "pago"].includes(status)) {
    return "paid";
  }
  if (["refund", "refunded", "chargedback", "chargeback", "reembolsado", "reembolsada"].includes(status)) {
    return "refund";
  }
  if (["canceled", "cancelled", "declined", "failed", "refused", "expired", "cancelado", "cancelada"].includes(status)) {
    return "canceled";
  }
  if (["med", "in_protest", "in_analisys"].includes(status)) {
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

    const { publicKey, secretKey } = getCredentials();
    if (!publicKey || !secretKey) {
      return res.status(500).json({
        error: "Credenciais Nitro Pagamentos nao configuradas no servidor",
      });
    }
    const auth = Buffer.from(`${publicKey}:${secretKey}`).toString("base64");

    const response = await fetch(`${NITRO_BASE_URL}/transactions/${id}`, {
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
      payload?.data?.status ||
      payload?.status ||
      payload?.data?.transaction?.status ||
      payload?.transaction?.status ||
      payload?.payment?.status ||
      "";

    const normalizedStatus = mapStatus(rawStatus);
    const paidAt =
      payload?.data?.paidAt ||
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
