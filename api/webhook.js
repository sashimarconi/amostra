export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      ok: true,
      endpoint: '/webhook',
      message: 'Webhook ativo. Envie POST com eventos da SpeedPag.'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed'
    });
  }

  let body = req.body || {};
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}');
    } catch {
      body = {};
    }
  }

  const txid = body.objectId || body?.data?.id || body.txid || body.id || null;
  const status = (body?.data?.status || body.status || '').toString().toLowerCase();

  return res.status(200).json({
    ok: true,
    received: true,
    txid,
    status,
    receivedAt: new Date().toISOString()
  });
}
