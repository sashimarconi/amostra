# amostra

Projeto estático (HTML/CSS/JS) pronto para deploy na Vercel.

## Deploy

- GitHub: repositório com branch `main`
- Vercel: importar o repositório e manter as configurações padrão para projeto estático

## PIX (Nitro Pagamentos)

As rotas serverless em `api/create-pix.js` e `api/pix/status/[id].js` usam a API do Nitro Pagamentos.

Configure as variáveis de ambiente no projeto (ex.: Vercel):

- `NITRO_API_KEY` (ou `NITRO_SECRET_KEY`)
- `NITRO_COMPANY_ID` (ou `NITRO_COMPANYID`)
- `NITRO_BASE_URL` (opcional, padrao: `https://api.nitropagamento.app`)

Aliases aceitos para facilitar migracao (legado):

- `GHOSTSPAY_API_KEY` (alias de `NITRO_API_KEY`)
- `GHOSTSPAY_COMPANYID` (alias de `NITRO_COMPANY_ID`)
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
