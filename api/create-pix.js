const SPEEDPAG_BASE_URL = "https://api.speedpag.com/v1";

function getCredentials() {
  const publicKey = process.env.SPEEDPAG_PUBLIC_KEY || "";
  const secretKey = process.env.SPEEDPAG_SECRET_KEY || "";
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
        error: "Credenciais SpeedPag não configuradas no servidor",
      });
    }
    const auth = Buffer.from(`${publicKey}:${secretKey}`).toString("base64");

    const payload = {
      amount,
      paymentMethod: "pix",
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.cellphone || customer.phone || "",
        document: {
          type: "cpf",
          number: customer.taxId || customer.cpf || "",
        },
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
      metadata: normalizeMetadata(metadata),
      pix: {},
    };

    const speedpagResponse = await fetch(`${SPEEDPAG_BASE_URL}/transactions`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await speedpagResponse.json().catch(() => ({}));

    if (!speedpagResponse.ok) {
      return res.status(speedpagResponse.status).json({
        error: responseData?.message || responseData?.error || "Erro ao criar pagamento na SpeedPag",
        details: responseData,
      });
    }

    const pixCode = extractPixCode(responseData);
    const txid = extractTxid(responseData);

    if (!pixCode || !txid) {
      return res.status(500).json({
        error: "Resposta inválida da SpeedPag",
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
