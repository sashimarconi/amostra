const GHOSTSPAY_BASE_URL =
  process.env.GHOSTSPAY_BASE_URL ||
  process.env.ALLOWPAY_BASE_URL ||
  "https://api.ghostspaysv2.com/functions/v1";

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
  const secretKey = readEnv(
    "GHOSTSPAY_SECRET_KEY",
    "GHOSTSPAY_API_KEY",
    "ALLOWPAY_SECRET_KEY",
    "ALLOWPAY_API_KEY",
    "SPEEDPAG_PUBLIC_KEY",
  );
  const companyId = readEnv(
    "GHOSTSPAY_COMPANY_ID",
    "GHOSTSPAY_COMPANYID",
    "ALLOWPAY_COMPANY_ID",
    "ALLOWPAY_COMPANYID",
    "SPEEDPAG_SECRET_KEY",
  );
  return { secretKey, companyId };
}

function buildOrigin(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}`;
}

function extractPixCode(payload) {
  return (
    payload?.data?.pix?.qrcode ||
    payload?.pixCode ||
    payload?.pix_code ||
    payload?.qrCode ||
    payload?.qrcode ||
    payload?.pix?.code ||
    payload?.pix?.qrcode ||
    payload?.pix?.copyPaste ||
    payload?.pix?.payload ||
    payload?.payment?.pix?.code ||
    payload?.payment?.pix?.qrcode ||
    payload?.transaction?.pix?.code ||
    payload?.transaction?.pix?.qrcode ||
    ""
  );
}

function extractTxid(payload) {
  return (
    payload?.data?.id ||
    payload?.txid ||
    payload?.id ||
    payload?.transactionId ||
    payload?.payment?.id ||
    payload?.transaction?.id ||
    ""
  );
}

function normalizeMetadata(metadata) {
  if (!metadata) {
    return undefined;
  }
  if (typeof metadata === "string") {
    return metadata;
  }
  try {
    return JSON.stringify(metadata);
  } catch {
    return undefined;
  }
}

function normalizePaymentMethod(value) {
  const method = (value || "").toString().toUpperCase();
  return method || "PIX";
}

function buildShipping(customer) {
  return {
    neighborhood: customer?.neighborhood || "Centro",
    zipCode: customer?.zipCode || customer?.zipcode || "00000000",
    city: customer?.city || "Sao Paulo",
    complement: customer?.complement || "",
    streetNumber: customer?.streetNumber || customer?.number || "0",
    street: customer?.street || customer?.address || "Nao informado",
    state: customer?.state || "SP",
  };
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
        error: "Credenciais Ghosts Pay nao configuradas no servidor",
      });
    }
    const auth = Buffer.from(`${secretKey}:${companyId}`).toString("base64");

    const paymentMethod = normalizePaymentMethod(req.body?.paymentMethod);

    const payload = {
      amount,
      paymentMethod,
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.cellphone || customer.phone || "",
        document: customer.taxId || customer.cpf || "",
      },
      shipping: buildShipping(customer),
      items: [
        {
          title: description || "Pagamento",
          unitPrice: amount,
          quantity: 1,
          externalRef: "checkout",
        },
      ],
      postbackUrl: `${buildOrigin(req)}/webhook`,
      metadata: normalizeMetadata(metadata),
      pix: {},
    };

    const gatewayResponse = await fetch(`${GHOSTSPAY_BASE_URL}/transactions`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await gatewayResponse.json().catch(() => ({}));

    if (!gatewayResponse.ok) {
      return res.status(gatewayResponse.status).json({
        error: responseData?.message || responseData?.error || "Erro ao criar pagamento na Ghosts Pay",
        details: responseData,
      });
    }

    const pixCode = extractPixCode(responseData);
    const txid = extractTxid(responseData);

    if (!pixCode || !txid) {
      return res.status(500).json({
        error: "Resposta invalida da Ghosts Pay",
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
