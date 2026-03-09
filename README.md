# amostra

Projeto estático (HTML/CSS/JS) pronto para deploy na Vercel.

## Deploy

- GitHub: repositório com branch `main`
- Vercel: importar o repositório e manter as configurações padrão para projeto estático

## PIX (SpeedPag)

As rotas serverless em `api/create-pix.js` e `api/pix/status/[id].js` usam a API da SpeedPag.

Configure as variáveis de ambiente no projeto (ex.: Vercel):

- `SPEEDPAG_PUBLIC_KEY`
- `SPEEDPAG_SECRET_KEY`
