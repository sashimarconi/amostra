# amostra

Projeto estático (HTML/CSS/JS) pronto para deploy na Vercel.

## Deploy

- GitHub: repositório com branch `main`
- Vercel: importar o repositório e manter as configurações padrão para projeto estático

## PIX (Ghosts Pay)

As rotas serverless em `api/create-pix.js` e `api/pix/status/[id].js` usam a API da Ghosts Pay.

Configure as variáveis de ambiente no projeto (ex.: Vercel):

- `GHOSTSPAY_SECRET_KEY`
- `GHOSTSPAY_COMPANY_ID`
- `GHOSTSPAY_BASE_URL` (opcional, padrao: `https://api.ghostspaysv2.com/functions/v1`)

Aliases aceitos para facilitar migracao (legado):

- `GHOSTSPAY_API_KEY` (alias de `GHOSTSPAY_SECRET_KEY`)
- `GHOSTSPAY_COMPANYID` (alias de `GHOSTSPAY_COMPANY_ID`)
- `ALLOWPAY_API_KEY` (alias de `ALLOWPAY_SECRET_KEY`)
- `ALLOWPAY_COMPANYID` (alias de `ALLOWPAY_COMPANY_ID`)

Compatibilidade legada (opcional):

- `SPEEDPAG_PUBLIC_KEY` (fallback para `ALLOWPAY_SECRET_KEY`)
- `SPEEDPAG_SECRET_KEY` (fallback para `ALLOWPAY_COMPANY_ID`)

## Painel Admin

URL do painel: `/admin`

O painel consome a rota `GET /api/admin/orders` e mostra:

- pedidos totais
- pedidos pagos
- pendentes
- carrinhos abandonados (pendente por tempo)
- cancelados
- receita
- codigo PIX por pedido
- dados do cliente

Variaveis de ambiente necessarias:

- `ADMIN_USERNAME` (ex.: `admin`)
- `ADMIN_PASSWORD` (obrigatorio)
- `ABANDONED_AFTER_MINUTES` (opcional, padrao: `30`)
