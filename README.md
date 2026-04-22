# cv-site

Personal CV / resume — static single-page site with RU/EN language toggle, dark mode and one-click PDF export.

**Live:** https://ghostuss.github.io/ *(after GitHub Pages is enabled)*

## Stack

- Vanilla HTML + CSS + JS (no build step)
- Google Fonts: Inter Tight, Inter, JetBrains Mono
- Design inspiration: minimal premium (Vercel / Linear / Stripe aesthetic)
- PDF export via native browser `window.print()` + dedicated print-CSS

## Editing content

All CV content lives in two files:

- `data/cv-ru.js` — Russian
- `data/cv-en.js` — English

Both files export a global (`window.CV_DATA_RU` / `window.CV_DATA_EN`) — edit the JSON-like object and reload the page.

## Structure

```
cv-site/
├── index.html          # skeleton
├── styles.css          # main styles
├── print.css           # A4 print/PDF styles
├── script.js           # render + toggles
├── data/
│   ├── cv-ru.js
│   └── cv-en.js
├── assets/
│   ├── photo.jpg       # profile photo (add your own)
│   └── favicon.svg
└── README.md
```

## Local development

Open `index.html` directly in a browser — it works via `file://`. For hot reload, use any static server:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Adding your photo

Place a square photo (recommended 500×500 px or larger) at:

```
assets/photo.jpg
```

The site automatically shows it in the hero section and the PDF export.

## Deploying to GitHub Pages

1. Create a public repository with the exact name `<your-username>.github.io` (e.g. `GhostuSs.github.io`).
2. Push this folder to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial CV site"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In the repo → Settings → Pages → Source: `main` / root — save.
4. After ~1 minute the site is live at `https://<your-username>.github.io/`.

## License

Content: personal; please don't reuse.
Code: feel free to fork the boilerplate.
