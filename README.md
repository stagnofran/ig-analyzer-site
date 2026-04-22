# IG Tracker — Landing Page

Landing page bilingüe (ES/EN) para promocionar la extensión [Instagram Follower Analyzer](https://chromewebstore.google.com/detail/instagram-follower-analyz/kajkpoibnpadpgfghmfaglepjcbgjfnj).

**Live**: https://stagnofran.github.io/ig-analyzer-site/

## Stack

- Vite + React + TypeScript
- styled-components
- react-i18next (ES / EN, persiste en localStorage, autodetecta `navigator.language`)
- Deploy automático a GitHub Pages vía GitHub Actions

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:5173/ig-analyzer-site/
npm run build
npm run preview
```

## Deploy

1. Push a `main` → GitHub Actions corre `.github/workflows/deploy.yml`.
2. En GitHub: **Settings → Pages → Source: GitHub Actions** (una sola vez).
3. URL pública queda en `https://stagnofran.github.io/ig-analyzer-site/`.

## Assets pendientes

Colocá estas imágenes en `public/screenshots/`:

- `results.png` — dashboard con stats y lista (la captura grande).
- `popup.png` — popup con "Sesión activa" y botón "Abrir Analyzer".
- `empty.png` — estado vacío con input de usuario.

Y en `public/`:

- `icon.png` — favicon (podés copiar `icons/icon128.png` del repo de la extensión).
- `og-image.png` — imagen 1200×630 para previews en redes (podés usar el banner promocional bilingüe).

## Estructura

```
src/
├── App.tsx
├── main.tsx
├── constants.ts          # URLs (Chrome Store, GitHub)
├── i18n/
│   ├── index.ts
│   └── locales/{es,en}.json
├── components/
│   ├── Header.tsx
│   ├── LangSwitcher.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Screenshots.tsx
│   ├── Testimonials.tsx
│   ├── Privacy.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   └── shared.ts         # Container, Section, GradientText, etc.
└── styles/
    ├── theme.ts          # tokens (colors, radii, gradients)
    ├── styled.d.ts       # tipado del theme para styled-components
    └── GlobalStyle.ts
```
