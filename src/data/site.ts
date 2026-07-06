/**
 * MOOD BEAUTY LAB — Site Configuration
 * Tutti i dati reali del centro, nessun contenuto fake.
 */

// Anni di esperienza calcolati dinamicamente dall'anno di apertura.
// Se l'anno corrente è minore di `since` (caso limite), ritorna 0.
const yearsOfExperience = Math.max(0, new Date().getFullYear() - 2016);

export const site = {
  name: "Mood Beauty Lab",
  tagline: "In the mood to love yourself",
  description:
    `Centro di estetica avanzata a Pavia. Trattamenti viso, corpo, laser e beauty personalizzati. Consulenze ad hoc, tecnologie all'avanguardia, oltre ${yearsOfExperience} anni di esperienza.`,
  phone: "348 758 2333",
  phoneE164: "+393487582333",
  phoneHref: "tel:+393487582333",
  whatsappHref: "https://wa.me/393487582333",
  email: "info@moodbeautylab.it",
  address: {
    street: "Via San Paolo 5g",
    city: "Pavia",
    region: "Lombardia",
    cap: "27100",
    country: "Italia",
  },
  mapsUrl: "https://maps.google.com/?q=Via+San+Paolo+5g+Pavia",
  openingHours: [
    { day: "Lunedì", label: "9.00 – 19.00", opens: "09:00", closes: "19:00", schemaDay: "Monday" },
    { day: "Martedì", label: "9.00 – 19.00", opens: "09:00", closes: "19:00", schemaDay: "Tuesday" },
    { day: "Mercoledì", label: "10.30 – 19.30", opens: "10:30", closes: "19:30", schemaDay: "Wednesday" },
    { day: "Giovedì", label: "9.30 – 19.30", opens: "09:30", closes: "19:30", schemaDay: "Thursday" },
    { day: "Venerdì", label: "9.30 – 19.30", opens: "09:30", closes: "19:30", schemaDay: "Friday" },
    { day: "Sabato", label: "9.00 – 15.30", opens: "09:00", closes: "15:30", schemaDay: "Saturday" },
    { day: "Domenica", label: "Chiuso", closed: true, schemaDay: "Sunday" },
  ],
  social: {
    instagram: "https://instagram.com/moodbeautylab",
    facebook: "",
    tiktok: "",
  },
  since: 2016,
  /** Anni di esperienza — calcolado dinámicamente. No hardcodear. */
  experience: yearsOfExperience,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Viso", href: "/viso" },
  { label: "Corpo", href: "/corpo" },
  { label: "Laser", href: "/laser" },
  { label: "Beauty", href: "/beauty" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Contatti", href: "/contatti" },
] as const;
