# Mood Beauty Lab — Sito Centro Estetica

## Stack
- **Astro 5** (static output)
- **Tailwind CSS 4** (via @tailwindcss/vite)
- Fonts: Fraunces (serif/display), Manrope (sans/body) via Google Fonts

## Commands
- `npm run dev` — dev server su http://localhost:4321
- `npm run build` — build statico in `dist/`
- `npm run preview` — preview del build

## Brand
- Navy: `#050f38`
- Magenta: `#e10198`
- Blush (rosa soft): `#feebf4`
- Rose: `#f391cc`

## Struttura
- `src/data/site.ts` — config sito (nome, contatti, nav)
- `src/data/treatments.ts` — trattamenti, team, prodotti, tecnologie (NESSUN prezzo)
- `src/components/` — componenti riutilizzabili
- `src/pages/` — 8 pagine: index, chi-siamo, viso, corpo, laser, beauty, shop, contatti

## Note
- I prezzi NON sono mai mostrati — il percorso si costruisce in consulenza
- Immagini: placeholder puliti da sostituire con foto reali
- Recensioni: placeholder da sostituire con contenuti veri
- Form consulenza: invia via mailto (configurare backend o Formspree se necessario)
