const GHOSTSPAY_BASE_URL = "https://api.ghostspaysv2.com/functions/v1";

function getCredentials() {
  const secretKey = process.env.GHOSTSPAY_SECRET_KEY || "";
  const companyId = process.env.GHOSTSPAY_COMPANY_ID || "";
  return { secretKey, companyId };
}

function buildOrigin(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}`;
}

function extractPixCode(payload) {
  return (
    payload?.pixCode ||
    payload?.pix_code ||
    payload?.pix?.code ||
    payload?.pix?.copyPaste ||
    payload?.pix?.payload ||
    payload?.payment?.pix?.code ||
    payload?.transaction?.pix?.code ||
    ""
  );
}

function extractTxid(payload) {
  return (
    payload?.txid ||
    payload?.id ||
    payload?.transactionId ||
    payload?.payment?.id ||
    payload?.transaction?.id ||
    ""
  );
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount, description, customer, metadata } = req.body || {};

    if (!amount || !customer?.name || !customer?.email) {
      return res.status(400).json({
        error: "Campos obrigatórios ausentes",
      });
    }

    const { secretKey, companyId } = getCredentials();
    if (!secretKey || !companyId) {
      return res.status(500).json({
        error: "Credenciais GhostsPay não configuradas no servidor",
      });
    }
    const auth = Buffer.from(`${secretKey}:${companyId}`).toString("base64");

    const payload = {
      amount,
      description: description || "Pagamento",
      paymentMethod: "PIX",
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.cellphone || customer.phone || "",
        document: customer.taxId || customer.cpf || "",
      },
      items: [
        {
          title: description || "Pagamento",
          unitPrice: amount,
          quantity: 1,
          externalRef: "checkout",
        },
      ],
      postbackUrl: `${buildOrigin(req)}/webhook`,
      metadata: metadata || {},
      pix: {},
    };

    const ghostResponse = await fetch(`${GHOSTSPAY_BASE_URL}/transactions`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await ghostResponse.json().catch(() => ({}));

    if (!ghostResponse.ok) {
      return res.status(ghostResponse.status).json({
        error: responseData?.message || responseData?.error || "Erro ao criar pagamento na GhostsPay",
        details: responseData,
      });
    }

    const pixCode = extractPixCode(responseData);
    const txid = extractTxid(responseData);

    if (!pixCode || !txid) {
      return res.status(500).json({
        error: "Resposta inválida da GhostsPay",
        details: responseData,
      });
    }

    return res.status(200).json({
      pix_code: pixCode,
      pixCode,
      txid,
      id: txid,
      raw: responseData,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno ao criar pagamento",
      message: error?.message || "Unknown error",
    });
  }
}
