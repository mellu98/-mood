/**
 * MOOD BEAUTY LAB ? Registro immagini curato
 * ----------------------------------------------------------------
 * La gallery originale ? conservata in `public/images/gallery/` come
 * `mood-01.jpg` ... `mood-91.jpg`.
 *
 * Questo file non ? pi? una mappatura sequenziale: ogni slot ? stato
 * verificato visivamente e assegnato in base al contenuto della sezione.
 * Gli asset in `/images/curated/` sono immagini studio generate/curate per
 * coprire sezioni dove la gallery reale non aveva una foto professionale
 * o coerente con il copy.
 */

const g = (n: number) => `/images/gallery/mood-${String(n).padStart(2, "0")}.jpg`;
const c = (file: string) => `/images/curated/${file}`;
const p = (file: string) => `/images/products/${file}`;

/** Totale immagini disponibili in /images/gallery/ */
export const TOTAL_IMAGES = 91;

/** Pool generico solo come fallback: non usare per sezioni editoriali curate. */
export const galleryPool = Array.from({ length: TOTAL_IMAGES }, (_, i) => g(i + 1));
export const galleryAt = (i: number) => galleryPool[i % TOTAL_IMAGES];

/* ================================================================
   HOME (index.astro)
   ================================================================ */
export const homeImages = {
  /** Risultati / prima-dopo reali legati a pelle e viso. */
  primaDopo: [g(1), g(13), g(40)],

  /** Card servizi: asset coerenti con ogni area, non pi? immagini sequenziali. */
  serviceCards: {
    viso: c("skin-treatment-studio.webp"),
    corpo: c("body-treatment-studio.webp"),
    laser: c("laser-studio.webp"),
    beauty: c("pmu-studio.webp"),
  },

  /** Preview prodotti reali, con label/prodotto coerenti. */
  productPreview: [
    p("mood-glow-in-cleanser-professional.jpg"),
    p("mood-moonlight-cleanser-professional.jpg"),
    p("mood-white-scrub-professional.jpg"),
    p("mood-dark-scrub-professional.jpg"),
  ],
};

/* ================================================================
   CHI SIAMO (chi-siamo.astro)
   ================================================================ */
export const teamImages = {
  /** Foto reali del team/centro: evitiamo risultati trattamento o prodotti. */
  members: [g(37), g(34), g(91)],
};

/* ================================================================
   VISO (viso.astro)
   ================================================================ */
export const visoImages = {
  /** Asset studio professionale per il concetto di analisi/trattamento viso. */
  proAging: c("skin-treatment-studio.webp"),
  /** Dettaglio pelle reale, pi? coerente del precedente packshot prodotto. */
  editorial: g(54),
  /** Trattamenti/risultati viso coerenti con Deep Mood, Lumi Skin e Needling. */
  featured: [g(1), g(15), c("skin-treatment-studio.webp")],
};

/* ================================================================
   CORPO (corpo.astro)
   ================================================================ */
export const corpoImages = {
  /** Asset studio body/wellness quando non esiste foto reale coerente in gallery. */
  intro: c("body-treatment-studio.webp"),
  detail: c("body-treatment-studio.webp"),
  /** Evitiamo packshot/prodotti casuali: immagini coerenti con body/benessere. */
  featured: [c("body-treatment-studio.webp"), g(57), c("body-treatment-studio.webp")],
};

/* ================================================================
   LASER (laser.astro)
   ================================================================ */
export const laserImages = {
  /** Asset studio generico e pulito per tecnologia di epilazione laser. */
  technology: c("laser-studio.webp"),
  /** Immagini reali legate a zone laser/epilazione, non prodotti skincare. */
  primaDopo: [g(70), g(71), g(32)],
  method: c("laser-studio.webp"),
};

/* ================================================================
   BEAUTY (beauty.astro)
   ================================================================ */
export const beautyImages = {
  /** PMU ? sopracciglia, occhi, labbra: immagini finalmente coerenti. */
  pmuAreas: [g(29), g(23), g(41)],
  /** Asset studio PMU pulito: niente ascelle o prodotti skincare fuori contesto. */
  pmuWide: c("pmu-studio.webp"),
  /** Laminazione ciglia, sopracciglia e nails. */
  featured: [g(3), g(63), g(49)],
};

/* ================================================================
   SHOP (shop.astro) ? prodotti Mood Cosmetics
   ================================================================ */
export const shopImages: Record<string, string> = {
  "Glow-In Cleanser": p("mood-glow-in-cleanser-professional.jpg"),
  "Moonlight Cleanser": p("mood-moonlight-cleanser-professional.jpg"),
  "White Scrub": p("mood-white-scrub-professional.jpg"),
  "Dark Scrub": p("mood-dark-scrub-professional.jpg"),
  "A-Tomic Shine": p("mood-a-tomic-shine-professional.jpg"),
  "Moonlight Cream SPF 50": p("mood-moonlight-cream-spf50-professional.jpg"),
  "Star Cream": p("mood-star-cream-professional.jpg"),
  "Brilliant Potion": p("mood-brilliant-potion-professional.jpg"),
  "Velvet Skin": p("mood-velvet-skin-professional.jpg"),
  "Fairy Cream": p("mood-fairy-cream-professional.jpg"),
  "Shiny Mask": p("mood-shiny-mask-professional.jpg"),
  "Filler Mask": p("mood-filler-mask-professional.jpg"),
};

/** Fallback generico se un prodotto non ? mappato. */
export const shopFallback = g(84);
