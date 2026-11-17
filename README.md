# Manual dos Padrinhos - Debora & Davi

Site estatico (HTML + CSS + JS puros, sem build). Basta publicar a pasta inteira.

- `index.html` - conteudo (secoes na ordem do PDF)
- `css/style.css` - cores em `:root` (--verde, --verde-fundo, --verde-pad), tamanhos e responsividade
- `js/main.js` - animacao de entrada ao rolar
- `assets/` - ilustracoes, QR Code e estampas

Rodar local: `python3 -m http.server 8000` e abrir http://localhost:8000
Publicar: enviar todos os arquivos para a raiz (ou subpasta) da hospedagem (ex.: public_html na Hostgator, Vercel, Netlify).
Ajustes comuns: verde da contracapa = `--verde-fundo` e `--verde-pad` (estampa) em css/style.css; monograma = `.capa .mono`.
