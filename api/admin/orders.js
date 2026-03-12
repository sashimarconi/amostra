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

function getGhostsPayCredentials() {
  const secretKey = readEnv(
    "NITRO_API_KEY",
    "NITRO_SECRET_KEY",
    "GHOSTSPAY_SECRET_KEY",
    "GHOSTSPAY_API_KEY",
    "ALLOWPAY_SECRET_KEY",
    "ALLOWPAY_API_KEY",
    "SPEEDPAG_PUBLIC_KEY",
  );
  const companyId = readEnv(
    "NITRO_COMPANY_ID",
    "NITRO_COMPANYID",
    "GHOSTSPAY_COMPANY_ID",
    "GHOSTSPAY_COMPANYID",
    "ALLOWPAY_COMPANY_ID",
    "ALLOWPAY_COMPANYID",
    "SPEEDPAG_SECRET_KEY",
  );
  return { secretKey, companyId };
}

function getAdminCredentials() {
  const username = process.env.ADMIN_USERNAME || "admin";
  const password = process.env.ADMIN_PASSWORD || "";
  return { username, password };
}

function parseBasicAuth(authorizationHeader) {
  if (!authorizationHeader || !authorizationHeader.startsWith("Basic ")) {
    return null;
  }

  try {
    const encoded = authorizationHeader.slice("Basic ".length);
    const decoded = Buffer.from(encoded, "base64").toString("utf8");
    const separatorIndex = decoded.indexOf(":");
    if (separatorIndex < 0) {
      return null;
    }

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

function isPaidStatus(status) {
  const value = (status || "").toString().toLowerCase();
  return value === "paid" || value === "approved" || value === "completed";
}

function isPendingStatus(status) {
  const value = (status || "").toString().toLowerCase();
  return value === "waiting_payment" || value === "pending";
}

function normalizeStatus(status) {
  const value = (status || "").toString().toLowerCase();
  if (isPaidStatus(value)) return "paid";
  if (value === "refunded" || value === "chargeback" || value === "chargedback") return "refund";
  if (value === "in_protest" || value === "in_analisys") return "med";
  if (value === "cancelled" || value === "canceled" || value === "refused" || value === "failed" || value === "expired") return "canceled";
  return "pending";
}

function safeJsonParse(value) {
  if (!value || typeof value !== "string") {
    return value || null;
  }
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function getTransactionsArray(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.data?.data)) return payload.data.data;
  if (Array.isArray(payload?.data?.items)) return payload.data.items;
  if (Array.isArray(payload?.data?.results)) return payload.data.results;
  if (Array.isArray(payload?.transactions)) return payload.transactions;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.results)) return payload.results;
  return [];
}

function normalizeTransaction(tx, abandonedAfterMinutes) {
  const data = tx?.data || tx || {};
  const rawStatus = data?.status || tx?.status || "";
  const status = normalizeStatus(rawStatus);
  const createdAt = data?.createdAt || tx?.createdAt || null;
  const paidAt = data?.paidAt || tx?.paidAt || null;
  const amount = Number(data?.amount ?? tx?.amount ?? 0);
  const customer = data?.customer || tx?.customer || {};
  const pix = data?.pix || tx?.pix || {};
  const now = Date.now();
  const createdMs = createdAt ? new Date(createdAt).getTime() : null;

  const isAbandoned =
    Boolean(createdMs) &&
    isPendingStatus(rawStatus) &&
    now - createdMs >= abandonedAfterMinutes * 60 * 1000;

  return {
    id: data?.id || tx?.id || tx?.objectId || null,
    externalRef: data?.externalRef || tx?.externalRef || null,
    status,
    rawStatus: rawStatus || "unknown",
    isPaid: isPaidStatus(rawStatus),
    isAbandoned,
    amount,
    amountFormatted: (amount / 100).toFixed(2),
    paymentMethod: data?.paymentMethod || tx?.paymentMethod || "PIX",
    createdAt,
    paidAt,
    postbackUrl: data?.postbackUrl || tx?.postbackUrl || null,
    pixCode:
      pix?.qrcode ||
      pix?.copyPaste ||
      tx?.pixCode ||
      tx?.pix_code ||
      tx?.qrcode ||
      null,
    pixExpirationDate: pix?.expirationDate || null,
    customer: {
      id: customer?.id || null,
      name: customer?.name || "",
      email: customer?.email || "",
      phone: customer?.phone || "",
      document:
        customer?.document?.number ||
        customer?.document ||
        "",
    },
    items: Array.isArray(data?.items) ? data.items : [],
    metadata: safeJsonParse(data?.metadata || tx?.metadata || null),
    secureUrl: data?.secureUrl || tx?.secureUrl || null,
    raw: tx,
  };
}

async function fetchTransactionsPage(auth, page, pageSize) {
  const response = await fetch(`${NITRO_BASE_URL}/transactions?page=${page}&limit=${pageSize}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${auth}`,
      Accept: "application/json",
    },
  });

  const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
    const message = payload?.message || payload?.error || "Erro ao listar vendas no Nitro Pagamentos";
    const error = new Error(message);
    error.status = response.status;
    error.details = payload;
    throw error;
  }

  return payload;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const credentials = parseBasicAuth(req.headers.authorization || "");
  const admin = getAdminCredentials();

  if (!admin.password) {
    return res.status(500).json({
      error: "ADMIN_PASSWORD nao configurado no servidor",
    });
  }

  const isAuthorized =
    credentials &&
    credentials.username === admin.username &&
    credentials.password === admin.password;

  if (!isAuthorized) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Admin"');
    return res.status(401).json({ error: "Nao autorizado" });
  }

  try {
    const { secretKey, companyId } = getGhostsPayCredentials();
    if (!secretKey || !companyId) {
      return res.status(500).json({
        error: "Credenciais Nitro Pagamentos nao configuradas no servidor",
      });
    }

    const auth = Buffer.from(`${secretKey}:${companyId}`).toString("base64");
    const abandonedAfterMinutes = Math.max(
      Number.parseInt(process.env.ABANDONED_AFTER_MINUTES || "30", 10) || 30,
      1,
    );

    const pageSize = 50;
    const maxPages = 5;
    const allTransactions = [];

    for (let page = 1; page <= maxPages; page += 1) {
      const payload = await fetchTransactionsPage(auth, page, pageSize);
      const pageItems = getTransactionsArray(payload);
      allTransactions.push(...pageItems);

      if (pageItems.length < pageSize) {
        break;
      }
    }

    const orders = allTransactions
      .map((tx) => normalizeTransaction(tx, abandonedAfterMinutes))
      .sort((a, b) => {
        const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return bTime - aTime;
      });

    const totals = orders.reduce(
      (acc, order) => {
        acc.total += 1;
        acc.revenue += order.isPaid ? order.amount : 0;
        if (order.isPaid) acc.paid += 1;
        if (order.status === "pending") acc.pending += 1;
        if (order.isAbandoned) acc.abandoned += 1;
        if (order.status === "canceled") acc.canceled += 1;
        if (order.status === "refund") acc.refund += 1;
        return acc;
      },
      {
        total: 0,
        paid: 0,
        pending: 0,
        abandoned: 0,
        canceled: 0,
        refund: 0,
        revenue: 0,
      },
    );

    return res.status(200).json({
      ok: true,
      fetchedAt: new Date().toISOString(),
      abandonedAfterMinutes,
      totals: {
        ...totals,
        revenueFormatted: (totals.revenue / 100).toFixed(2),
      },
      orders,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      error: error.message || "Erro interno ao listar pedidos",
      details: error.details || null,
    });
  }
}
