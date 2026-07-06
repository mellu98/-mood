/**
 * MOOD BEAUTY LAB — Trattamenti
 * Tutti i trattamenti dal price list 2026.
 * Nessun prezzo visibile — il percorso viene costruito in consulenza.
 */

export interface Treatment {
  name: string;
  description: string;
  tag?: string;
}

export interface TreatmentCategory {
  id: string;
  label: string;
  subtitle?: string;
  note?: string;
  treatments: Treatment[];
}

export const faceTechnologies = [
  "Microdermoabrasione",
  "Infrarosso",
  "Radiofrequenza",
  "Icoone viso",
  "Pressoterapia occhi",
  "Ultrasuono",
  "Ossigenoterapia",
  "Needling",
  "Dermaplaning",
];

export const bodyTechnologies = [
  {
    name: "Pressomassaggio",
    description:
      "Stimola la circolazione sanguigna e il drenaggio linfatico, aiutando a eliminare liquidi in eccesso, tossine e gonfiori.",
  },
  {
    name: "Icoone corpo",
    description:
      "Tecnologia rigenerante, tonificante e rilassante: drena liquidi in eccesso, scioglie le tensioni ed è indicata anche per gli sportivi post work-out.",
  },
  "Microdermoabrasione",
  {
    name: "Needling",
    description:
      "Biostimolazione cutanea per lavorare su qualità della pelle, smagliature, cicatrici e cellulite previa consulenza.",
  },
];

/* ================================================================ VISO */
export const visoCategories: TreatmentCategory[] = [
  {
    id: "starter",
    label: "Skin Test",
    treatments: [
      {
        name: "Skin Test Viso",
        description:
          "Analisi della pelle con tecnologie avanzate per individuare gli inestetismi e le esigenze della tua pelle. Creazione di una scheda personalizzata e consiglio del percorso più idoneo.",
        tag: "Gratuita con il primo trattamento",
      },
    ],
  },
  {
    id: "pulizie",
    label: "Pulizie Viso",
    treatments: [
      {
        name: "Pulizia Viso Base",
        description:
          "Trattamento di igiene viso, adatto alla preparazione della pelle pre-trattamenti specifici.",
      },
      {
        name: "Pure Skin",
        description:
          "Protocollo specifico di igiene e idratazione profonda del viso, adatto anche a pelli giovani e/o acneiche.",
      },
      {
        name: "Deep Mood",
        description:
          "Il nostro trattamento signature. Pulizia viso profonda con peeling + trattamento specifico personalizzato + sculp massage.",
        tag: "Signature",
      },
      {
        name: "Deep Mood Man",
        description:
          "Pulizia viso profonda con peeling + focus zona barba.",
      },
    ],
  },
  {
    id: "beauty-boost",
    label: "Beauty Boost",
    subtitle:
      "Aggiunte specifiche, abbinate al trattamento di base, per potenziarne performance e risultato.",
    treatments: [
      {
        name: "+ Microdermo",
        description:
          "Trattamento di esfoliazione profonda che stimola i tessuti, illuminando e uniformando l'incarnato. Ideale anche come preparazione ai trattamenti con tecnologia.",
      },
      {
        name: "+ Make Up Mood",
        description:
          "Make-up leggero e naturale dopo il trattamento viso, realizzato con prodotti specifici e delicati, ideali per la pelle appena trattata.",
      },
      {
        name: "+ Focus Eyez on Me",
        description:
          "Trattamento aggiuntivo specifico per borse e occhiaie: drenante, illuminante, schiarente, per sgonfiare e liftare la zona contorno occhi.",
      },
      {
        name: "+ Manual Lifting Massage",
        description: "Massaggio viso manuale rimpolpante e liftante.",
      },
      {
        name: "+ Eyes Dren",
        description:
          "Pressomassaggio drenante e decongestionante dedicato alla zona del contorno occhi.",
      },
    ],
  },
  {
    id: "face-experience",
    label: "Face Experience",
    subtitle:
      "Trattamenti completi e combinati, studiati per risultati evidenti già dalla prima seduta.",
    treatments: [
      {
        name: "Purify",
        description:
          "Trattamento viso con esfoliazione con microdermoabrasione, igiene viso profonda con peeling + trattamento con prodotti specifici e personalizzati.",
      },
      {
        name: "ICOONE Viso",
        description:
          "Trattamento viso con tecnologia specifica: effetto lifting, anti-age, drenante.",
      },
      {
        name: "Lumi Skin",
        description:
          "Trattamento viso alle vitamine: illuminante, rimpolpante, schiarente.",
      },
      {
        name: "Under Skin Spicule",
        description:
          "Trattamento di bio-needling viso: rigenerativo, biostimolante, anti-age.",
      },
      {
        name: "Skin Test Needling",
        description:
          "Analisi con tecnologie avanzate per individuare gli inestetismi specifici, test dei prodotti e creazione di scheda personalizzata.",
        tag: "Obbligatorio pre-trattamento",
      },
      {
        name: "Needling",
        description:
          "Trattamento biostimolante idratante e illuminante, ideale per pori dilatati e rughe superficiali.",
      },
    ],
  },
  {
    id: "special-focus-face",
    label: "Special",
    treatments: [
      {
        name: "All Eyez on Me",
        description:
          "Trattamento specifico occhi con tecnologia Hi-Light per drenare, illuminare, sgonfiare e liftare la zona contorno occhi. Maschera + tecnologia.",
      },
      {
        name: "Botox Skin Express",
        description: "Trattamento idratante rimpolpante intensivo.",
      },
      {
        name: "Glow Skin Express",
        description: "Trattamento illuminante anti-age.",
      },
    ],
  },
];

/* ================================================================ CORPO */
export const corpoCategories: TreatmentCategory[] = [
  {
    id: "body-experience",
    label: "Body Experience",
    subtitle: "Percorsi manuali dedicati a leggerezza, benessere e relax profondo.",
    treatments: [
      {
        name: "Total Body",
        description:
          "Massaggio total body relax, distensivo, che scioglie le tensioni muscolari, ripristina l'equilibrio psicofisico e favorisce il rilassamento profondo.",
      },
      {
        name: "Lux Ritual Mood Relax",
        description:
          "Massaggio total body distensivo e rilassante con olio caldo, focus su viso, mani, piedi e cuoio capelluto. Scioglie le tensioni muscolari, ripristina l'equilibrio psicofisico e favorisce il rilassamento profondo. Comprensivo di aperitivo.",
        tag: "Rituale 90'",
      },
      {
        name: "Soul Massage",
        description:
          "Massaggio decontratturante, relax, decongestionante. Focus schiena (35').",
      },
      {
        name: "Manual Dren",
        description:
          "Massaggio specifico gambe defaticante, anticellulite, tonificante e drenante.",
        tag: "35'",
      },
      {
        name: "Complete Dren",
        description:
          "Massaggio specifico per detossinare tutto l'organismo, drenare e riattivare la circolazione. Ideale per contrastare gambe pesanti e ristagno di liquidi.",
        tag: "50'",
      },
    ],
  },
  {
    id: "body-technology",
    label: "Body Technology",
    subtitle: "Tecnologie corpo integrate in percorsi personalizzati.",
    treatments: [
      {
        name: "ICOONE Laser Body Lift Up",
        description:
          "Trattamento drenante, detossinante, rassodante e lift-up. Ideale per contrastare cellulite e ritenzione idrica, migliorando tonicità e leggerezza.",
      },
      {
        name: "ICOONE Massage",
        description:
          "Trattamento con tecnologia rigenerante, tonificante e rilassante. Drena i liquidi in eccesso e scioglie le tensioni. Indicato anche per gli sportivi post work-out. Richiede tutina personale riutilizzabile.",
      },
      {
        name: "No Cell Good Vibes",
        description:
          "Trattamento specifico gambe: drenante, detossinante e rassodante. Aiuta a contrastare cellulite e ritenzione idrica, migliorando tonicità, leggerezza e aspetto a buccia d'arancia.",
      },
      {
        name: "Pressomassaggio",
        description:
          "Trattamento che stimola la circolazione sanguigna e il drenaggio linfatico, aiutando a eliminare liquidi in eccesso, tossine e gonfiori.",
      },
    ],
  },
  {
    id: "needling-body",
    label: "Needling Body",
    subtitle: "Biostimolazione cutanea: stimola collagene, elastina e acido ialuronico.",
    treatments: [
      {
        name: "Skin Test Needling Body",
        description:
          "Analisi con tecnologie avanzate per individuare gli inestetismi specifici, test dei prodotti e creazione di scheda personalizzata.",
        tag: "Obbligatorio pre-trattamento",
      },
      {
        name: "Goodbye Cellulite & Smagliature",
        description:
          "Trattamento di biostimolazione per trattare in modo efficace inestetismi come smagliature, cicatrici e cellulite.",
      },
    ],
    note: "Previa consulenza, le nostre tecnologie e trattamenti corpo possono essere eseguiti anche in gravidanza.",
  },
];

/* ================================================================ BEAUTY */
export const beautyCategories: TreatmentCategory[] = [
  {
    id: "special-focus",
    label: "Sguardo & Sopracciglia",
    treatments: [
      {
        name: "Perfect Brows",
        description:
          "Architettura delle sopracciglia: disegno, epilazione e tintura.",
      },
      {
        name: "Laminazione Sopracciglia",
        description: "Trattamento di messa in piega, nutrimento e tintura delle sopracciglia.",
      },
      {
        name: "Laminazione Ciglia",
        description: "Trattamento di curvatura, nutrimento e tintura delle ciglia.",
      },
    ],
  },
  {
    id: "pmu",
    label: "Trucco Permanente",
    subtitle: "A cura di Giorgia, PMU Artist.",
    treatments: [
      {
        name: "Consulenza Trucco Permanente",
        description:
          "Valutazione iniziale, disegno preparatorio sul viso per visualizzare il risultato, accurato skin test.",
        tag: "Consulenza dedicata",
      },
      {
        name: "Trucco Permanente",
        description:
          "Sopracciglia, occhi o labbra. Ogni tatuaggio viene studiato in modo personalizzato per creare risultati naturali e armoniosi. Prima seduta, con rinforzo dopo 40 giorni.",
      },
    ],
  },
  {
    id: "makeup",
    label: "Make-Up",
    treatments: [
      {
        name: "Make Up Day",
        description: "Trucco leggero e naturale, perfetto per il giorno.",
      },
      {
        name: "Make Up Special Event / Night",
        description:
          "Trucco sofisticato e intenso, ideale per occasioni speciali e serate.",
      },
      {
        name: "Self Make Up",
        description:
          "Lezione di trucco per imparare a valorizzare il viso con tecniche semplici e replicabili in autonomia.",
      },
    ],
  },
  {
    id: "nails",
    label: "Nails",
    subtitle: "Mani e piedi curati con la massima attenzione e rigorosi standard di igiene.",
    treatments: [
      {
        name: "Dry Manicure",
        description: "Idratazione e lucidatura con tecnica giapponese.",
      },
      {
        name: "Manicure Semipermanente",
        description: "Durata massima 20 giorni.",
      },
      {
        name: "Rimozione Semipermanente Mani",
        description: "Rimozione del prodotto comprensiva di manicure e reidratazione unghie.",
      },
      {
        name: "Copertura Unghia Naturale",
        description: "Comprensiva di maschera idratante.",
      },
      {
        name: "Copertura Correttiva Unghia Naturale",
        description: "Comprensiva di maschera idratante.",
      },
      {
        name: "Ricostruzione Unghie",
        description:
          "Include manicure e maschera mani idratante. Varia in base alla lunghezza e alle ore di lavoro.",
      },
      {
        name: "Nail Art / Baby Boomer / French",
        description: "Dettagli e personalizzazioni.",
      },
    ],
  },
  {
    id: "pedicure",
    label: "Pedicure",
    treatments: [
      {
        name: "Pedicure",
        description: "Cura estetica completa dei piedi.",
      },
      {
        name: "Pedicure Avanzato",
        description: "Trattamento approfondito per il benessere dei piedi.",
      },
      {
        name: "Pedicure Semipermanente",
        description: "Pedicure con copertura semipermanente.",
      },
      {
        name: "Pedicure Avanzato Semipermanente",
        description: "Il nostro trattamento pedicure più completo con semipermanente.",
      },
      {
        name: "Ricostruzione Unghie Piedi",
        description: "Ricostruzione dedicata alle unghie dei piedi, studiata in base alle esigenze dell'unghia naturale.",
      },
      {
        name: "Rimozione Semipermanente",
        description: "Rimozione semipermanente, pedicure estetico e reidratazione unghie.",
      },
    ],
  },
];

/* ================================================================ LASER */
export const laserZones = [
  "Gambe", "Ascelle", "Inguine", "Braccia", "Schiena",
  "Petto", "Viso", "Linea alba", "Capezzoli", "Piedi", "Glutei",
];

export const laserFaq = [
  {
    q: "Fa male?",
    a: "Il Laser Diodo 808 è progettato per offrire il massimo comfort. Durante la consulenza valutiamo la tua soglia di sensibilità e personalizziamo i parametri. La maggior parte delle clienti descrive la sensazione come un leggero calore.",
  },
  {
    q: "Posso farlo d'estate?",
    a: "Durante la consulenza valutiamo il tuo fototipo e l'esposizione solare. Alcune zone e alcuni fototipi permettono di continuare il percorso anche in estate, altre richiedono maggiore attenzione. Costruiamo insieme il piano giusto per te.",
  },
  {
    q: "Quante sedute servono?",
    a: "Il ciclo iniziale è di circa 10-12 sedute, ma ogni percorso viene personalizzato in base alle caratteristiche della pelle e del pelo. Il nostro obiettivo è accompagnarti verso una progressiva e duratura riduzione dei peli superflui in modo sicuro ed efficace.",
  },
  {
    q: "Posso fare il laser se ho la pelle sensibile?",
    a: "Sì. La tecnologia Diodo 808 è tra le più sicure ed evolute nel settore. Durante la consulenza analizziamo la tua pelle e impostiamo i parametri più adatti per garantire efficacia e sicurezza.",
  },
  {
    q: "Anche gli uomini possono farlo?",
    a: "Assolutamente. Da Mood accogliamo donne e uomini, con percorsi personalizzati per ogni esigenza.",
  },
  {
    q: "Posso trattare le zone più intime?",
    a: "Da Mood non esistono zone strane o imbarazzanti. Esiste solo l'obiettivo di farti stare bene con il tuo corpo. Trattiamo tutte le zone con la massima discrezione e professionalità.",
  },
];

/* ================================================================ TECNOLOGIE */
export const technologies = [
  {
    name: "ICOONE",
    description:
      "Microstimolazioni meccaniche per drenaggio, cellulite, tonicità e benessere dei tessuti. Disponibile per viso e corpo.",
  },
  {
    name: "Radiofrequenza",
    description:
      "Per accompagnare il naturale processo di pro-aging e stimolare la produzione di collagene.",
  },
  {
    name: "Microdermoabrasione",
    description:
      "Esfoliazione profonda per rinnovare e illuminare la pelle.",
  },
  {
    name: "Ultrasuoni",
    description: "Per una detersione profonda e un'azione profonda sui tessuti.",
  },
  {
    name: "Ossigenoterapia",
    description: "Per donare freschezza e idratazione alla pelle.",
  },
  {
    name: "Pressoterapia occhi",
    description: "Per regalare leggerezza allo sguardo e drenare il contorno occhi.",
  },
  {
    name: "Needling",
    description:
      "Biostimolazione per attivare i naturali processi di rigenerazione della pelle.",
  },
  {
    name: "Laser Diodo 808",
    description:
      "Una delle tecnologie più evolute nel settore dell'epilazione estetica.",
  },
];

/* ================================================================ TEAM */
export const team = [
  {
    name: "Giorgia",
    role: "Founder · Estetista · PMU Artist",
    bio: "Se oggi esiste Mood, è perché Giorgia ha sempre immaginato un modo diverso di vivere la bellezza. La sua passione per il mondo dell'estetica l'ha portata, negli anni, a investire costantemente nella formazione e nella ricerca delle migliori tecniche, tecnologie e prodotti. Come PMU Artist e professionista dell'estetica avanzata, ama creare percorsi personalizzati e accompagnare ogni cliente nel raggiungimento dei propri obiettivi.",
  },
  {
    name: "Lisa",
    role: "Beauty Specialist · Estetista Qualificata",
    bio: "Per Lisa prendersi cura delle persone significa dedicare attenzione ai dettagli, ascoltare le esigenze di ogni cliente e creare un'esperienza fatta di professionalità e benessere. La formazione continua è una parte fondamentale del suo percorso professionale. Accompagna ogni cliente con delicatezza e competenza, trasformando ogni appuntamento in un momento dedicato a sé stessi.",
  },
  {
    name: "Irene",
    role: "Client Experience & Store Manager",
    bio: "Irene è il primo sorriso che ti accoglie da Mood e la persona che si occupa di rendere speciale la tua esperienza fin dal primo contatto. Con attenzione, organizzazione e disponibilità, segue la gestione del centro e accompagna le clienti nella scelta del percorso più adatto. Perché per Irene ogni dettaglio conta e il benessere inizia molto prima del trattamento.",
  },
];

/* ================================================================ PRODOTTI */
export const products = [
  {
    name: "Glow-In Cleanser",
    category: "Detergente",
    description:
      "Olio-gel detergente e struccante viso. Idrata, nutre, lenisce e deterge la pelle rimuovendo trucco, sebo e impurità. Con olio di girasole, vitamina E, camomilla e tiglio.",
  },
  {
    name: "Moonlight Cleanser",
    category: "Detergente",
    description:
      "Detergente in gel a pH fisiologico, delicato e rinfrescante. Adatto a tutti i tipi di pelle. Arricchito con camomilla, calendula e tiglio dalle proprietà addolcenti e protettrici.",
  },
  {
    name: "White Scrub",
    category: "Esfoliante",
    description:
      "Scrub crema esfoliante viso con silice, olio di cocco, rosa mosqueta e burro di karité. Rimuove delicatamente le impurità preservando la barriera idrolipidica.",
  },
  {
    name: "A-Tomic Shine",
    category: "Tonico",
    description:
      "Lozione tonificante delicata con acido ialuronico a triplice peso molecolare, estratto di tè verde e fiordaliso. Ripristina l'equilibrio idrolipidico dopo la detersione. Senza alcol.",
  },
  {
    name: "Moonlight Cream SPF 50",
    category: "Anti-age · Solare",
    description:
      "Crema viso con filtro solare SPF 50 per viso, labbra, collo e decolleté. Protegge dal sole donando luminosità. Con acido ialuronico e aloe bio.",
  },
  {
    name: "Hydra Potion",
    category: "Siero",
    description:
      "Siero booster uniformante con acido ialuronico e vitamina C. Aiuta a sostenere idratazione, luminosità e uniformità dell'incarnato nella routine quotidiana.",
  },
  {
    name: "Star Cream",
    category: "Anti-age",
    description:
      "Crema viso con ginseng, ginkgo biloba, vitamina C e aloe vera bio. Combatte i primi segni di invecchiamento garantendo idratazione prolungata.",
  },
  {
    name: "Brilliant Potion",
    category: "Siero",
    description:
      "Siero concentrato per pelli con macchie e discromie cutanee. Con acido kojico, azelaico e arbutina per un'azione schiarente, uniti ad acido ialuronico e camomilla.",
  },
  {
    name: "Velvet Skin",
    category: "Corpo",
    description:
      "Crema corpo ritardante ricrescita peli con oli essenziali puri e burro di karité. Lascia la pelle setosa e prolunga i risultati dell'epilazione.",
  },
  {
    name: "Fairy Cream",
    category: "Lenitiva",
    description:
      "Burro-crema naturale con pantenolo, olio di macadamia, jojoba e avocado. Per la cura del tatuaggio e delle pelli molto secche. Cicatrizzante e lenitiva.",
  },
  {
    name: "Shiny Mask",
    category: "Maschera",
    description:
      "Maschera post-peeling con effetto fresco lenitivo immediato. Bisabololo, pantenolo, olio di macadamia e jojoba per pelli sensibili o post-trattamento.",
  },
  {
    name: "Filler Mask",
    category: "Maschera",
    description:
      "Maschera viso in tessuto all'acido ialuronico e peptidi. Reidrata, nutre e ravviva la luminosità con effetto rimpolpante botox-like.",
  },
  {
    name: "That’so All In One Hair Spray Oil",
    category: "Solari capelli",
    description:
      "Olio spray solare per capelli. Aiuta a proteggere e valorizzare la fibra durante l'esposizione, con un gesto pratico da portare in beauty routine o in vacanza.",
  },
  {
    name: "That’so All In One Tan Accelerator",
    category: "Acceleratore solare",
    description:
      "Spray acceleratore di abbronzatura pensato per stimolare il naturale processo di melanina e accompagnare un colorito più uniforme e intenso.",
  },
  {
    name: "That’so All In One SPF 20/30/50+",
    category: "Protezione solare",
    description:
      "Protezione solare progressiva SPF 20/30/50+ per i primi periodi di esposizione. Una formula spray pratica per vivere il sole con più consapevolezza.",
  },
  {
    name: "Terra Hedera 104",
    category: "Bon Parfumeur · Extrait",
    description:
      "Verde floreale con galbano, lentisco e cardamomo; cuore di giacinto, gelsomino e incenso, fondo di patchouli, ambra e vetiver.",
  },
  {
    name: "Nappa Tuberosa 107",
    category: "Bon Parfumeur · Extrait",
    description:
      "Tuberosa coriacea dove bergamotto e zafferano aprono un cuore di tuberosa e ylang ylang, su fondo di cuoio scamosciato, papiro e patchouli.",
  },
  {
    name: "Marbre Rouge 303",
    category: "Bon Parfumeur · Extrait",
    description:
      "Balsamo piccante: cardamomo, pink berries e peperoncino incontrano ylang ylang, patchouli e balsamo di Tolu su fondo ambrato e muschiato.",
  },
  {
    name: "Myrrh Shadow 403",
    category: "Bon Parfumeur · Extrait",
    description:
      "Resine balsamiche con arancia amara e pompelmo, cuore speziato di basilico, cannella e pepe di Timur, fondo di cedro, mirra, benzoino e vaniglia.",
  },
  {
    name: "Iris Cartagena 502",
    category: "Bon Parfumeur · Extrait",
    description:
      "Gourmand secco con rum, cacao e mandarino petitgrain; cuore di iris, sandalo, vaniglia e cedro, fondo legnoso con vetiver e caffè.",
  },
  {
    name: "Bois Narcotique Intense 602",
    category: "Bon Parfumeur · Extrait",
    description:
      "Legno intenso con incenso, pepe nero e pink berries; cuore speziato-legnoso con cedro, mela verde e neroli, fondo di patchouli, vetiver e muschio.",
  },
  {
    name: "Cuir Sahib 603",
    category: "Bon Parfumeur · Extrait",
    description:
      "Cuoio tonka con limone, noce moscata e violetta; cuore di incenso, cipresso e salvia sclarea, fondo cuoio, fava tonka e patchouli.",
  },
  {
    name: "Oud Ilam 903",
    category: "Bon Parfumeur · Extrait",
    description:
      "Oud piccante con coriandolo, bacche di Timur e zafferano; cuore di iris e patchouli, fondo muschiato con sandalo e oud.",
  },
];
