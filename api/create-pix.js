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

function buildOrigin(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}`;
}

function extractPixCode(payload) {
  return (
    payload?.data?.pix?.qrcode ||
    payload?.data?.pix_code ||
    payload?.data?.pix_qr_code ||
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
  const method = (value || "").toString().toLowerCase();
  return method || "pix";
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

    const { publicKey, secretKey } = getCredentials();
    if (!publicKey || !secretKey) {
      return res.status(500).json({
        error: "Credenciais Nitro Pagamentos nao configuradas no servidor",
      });
    }
    const auth = Buffer.from(`${publicKey}:${secretKey}`).toString("base64");

    const paymentMethod = normalizePaymentMethod(req.body?.paymentMethod);

    // Normalize amount: detect if frontend sent cents (e.g. 2136) or reais (e.g. 21.36)
    const rawAmount = Number(amount || 0);
    let amountReais = 0;
    let amountCents = 0;
    if (Number.isFinite(rawAmount)) {
      if (rawAmount >= 1000) {
        // very likely cents (e.g. 2136 -> R$21.36)
        amountCents = Math.round(rawAmount);
        amountReais = amountCents / 100;
      } else {
        // treat as reais (e.g. 21.36)
        amountReais = rawAmount;
        amountCents = Math.round(amountReais * 100);
      }
    }

    const payload = {
      amount: amountReais,
      payment_method: paymentMethod,
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
          unitPrice: amountCents,
          quantity: 1,
          tangible: false,
        },
      ],
      postbackUrl: `${buildOrigin(req)}/webhook`,
      metadata: normalizeMetadata(metadata),
      tracking: req.body?.tracking || undefined,
    };

    const gatewayResponse = await fetch(`${NITRO_BASE_URL}/transactions`, {
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
        error: responseData?.message || responseData?.error || "Erro ao criar pagamento na Nitro Pagamentos",
        statusCode: gatewayResponse.status,
        details: responseData,
        debug: {
          sent: { amountReais, amountCents, payment_method: paymentMethod },
        },
      });
    }

    const pixCode = extractPixCode(responseData);
    const txid = extractTxid(responseData);

    if (!pixCode || !txid) {
      return res.status(500).json({
        error: "Resposta invalida da Nitro Pagamentos",
        details: responseData,
      });
    }

    return res.status(200).json({
      pix_code: pixCode,
      pixCode,
      txid,
      id: txid,
      raw: responseData,
      debug: { amountReais, amountCents },
    });
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno ao criar pagamento",
      message: error?.message || "Unknown error",
    });
  }
}
