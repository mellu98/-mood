# Mood Beauty Lab

Sito statico per un centro di estetica avanzata e rigenerativa a Pavia, realizzato con Astro e Tailwind CSS.

## Stack

- Astro 5
- Tailwind CSS 4 via `@tailwindcss/vite`
- Output statico
- Font: Fraunces e Manrope da Google Fonts

## Comandi

```bash
npm run dev
npm run build
npm run preview
```

> Nota operativa: non committare `dist/`, `node_modules/`, `__MACOSX/`, `.DS_Store`, `materiale/` o `immagini mood/`.

## Struttura

- `src/data/site.ts` — dati globali: brand, contatti, indirizzo, social e navigazione.
- `src/data/treatments.ts` — trattamenti, team, tecnologie e prodotti. I prezzi non vengono mostrati.
- `src/data/images.ts` — registro immagini centralizzato.
- `src/components/` — componenti riutilizzabili.
- `src/layouts/BaseLayout.astro` — layout globale, SEO, header, footer e script condivisi.
- `src/pages/` — pagine pubbliche del sito.
- `public/images/` — immagini pubbliche usate dal sito.
- `public/materiale/brand.png` — logo/brand asset pubblico.

## Note editoriali

- I prezzi non devono essere pubblicati nel sito: il percorso viene costruito in consulenza.
- Le immagini sono mappate tramite `public/images/MANIFEST.txt`.
- Il form consulenza prepara un messaggio WhatsApp: l’utente deve inviarlo nella chat per completare la richiesta.
- Per modificare telefono, email, WhatsApp, indirizzo o social, partire sempre da `src/data/site.ts`.

## SEO

- Il dominio configurato è `https://moodbeautylab.it`.
- `BaseLayout.astro` genera canonical, Open Graph, Twitter card e JSON-LD `BeautySalon`.
- `public/robots.txt` e `public/sitemap.xml` sono statici: aggiornarli se cambiano le rotte.
