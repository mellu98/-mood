/**
 * Recensioni pubbliche selezionate dalla pagina Google Business di Mood Beauty Lab.
 * Fonte: Google Recensioni (testo, autore, stelle e data visibili pubblicamente).
 */

export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
}

export const homeReviews: Review[] = [
  {
    name: "Chiara Bandelloni",
    rating: 5,
    date: "1 mese fa",
    text: "Bravissime, gentili, super disponibili e i loro trattamenti sono un'autentica coccola, oltre che decisamente efficaci. Consigliate!",
  },
  {
    name: "Emanuela Alpigiani",
    rating: 5,
    date: "1 mese fa",
    text: "Mi sono trovata benissimo! Ottima pulizia e personale molto preparato e professionale! Lo consiglio vivamente!",
  },
  {
    name: "Aleksandar Gopev",
    rating: 5,
    date: "5 mesi fa",
    text: "Esperienza ottima, soffrivo di acne e sono andato da molti dermatologi ma il problema tornava sempre, ora dopo due mesi di questo trattamento, l’acne sta migliorando e i risultati si vedono molto. Il personale è ottimo e molto simpatiche.",
  },
  {
    name: "Giada Di Ciommo",
    rating: 5,
    date: "10 mesi fa",
    text: "Centro professionale e con tecnologie all’avanguardia. Giorgia, per me, una garanzia.",
  },
];

export const chiSiamoReviews: Review[] = [
  {
    name: "Gaiap1986",
    rating: 5,
    date: "8 mesi fa",
    text: "Vado in questo centro estetico da qualche anno ormai e mi trovo sempre benissimo! Vado ogni due mesi circa per sistemare le unghie dei piedi e il risultato è sempre perfetto. Lo staff è gentile, professionale e accogliente. L’ambiente è pulito e curato nei dettagli. Consigliatissimo!",
  },
  {
    name: "ari gr",
    rating: 5,
    date: "4 anni fa",
    text: "Trucco sposa. Mi sono affidata a loro per il trucco del giorno più importante della mia vita e le risceglierei senza alcun dubbio. Professionalità, cura del cliente, pulizia e attenzione, ecco alcune delle qualità che le contraddistinguono. Sono entrata anatroccolo e sono uscita principessa... consigliato al 100%.",
  },
  {
    name: "Sonia De Cillis",
    rating: 5,
    date: "3 anni fa",
    text: "Locale pulito e ben arredato! Personale preparato e professionale! Ho fatto laminazione ciglia e sopracciglia e mi è stato spiegato tutto passo passo in maniera molto puntuale e precisa. Il risultato ottimo e all’altezza delle aspettative :) grazie mille.",
  },
];
