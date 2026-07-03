import { beautyImages, corpoImages, laserImages, visoImages } from "./images";

export type BlogArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  category: "Laser" | "Viso" | "Corpo" | "Beauty";
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  relatedService: {
    label: string;
    href: string;
  };
  tags: string[];
  takeaways: string[];
  sections: Array<{
    heading: string;
    body: string[];
    bullets?: string[];
  }>;
  faq?: Array<{
    q: string;
    a: string;
  }>;
  relatedSlugs: string[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "epilazione-laser-pavia",
    title: "Epilazione laser a Pavia: come capire se è il percorso giusto per te",
    seoTitle: "Epilazione Laser Pavia: percorso, sedute e consulenza | Mood",
    description:
      "Guida Mood all'epilazione laser a Pavia: quando iniziare, cosa aspettarsi, perché la consulenza è fondamentale e come preparare il percorso.",
    excerpt:
      "Una guida chiara per capire quando il laser ha senso, come si costruisce il percorso e perché non dovrebbe mai partire senza valutazione di pelle e pelo.",
    category: "Laser",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-03",
    readTime: "5 min",
    heroImage: laserImages.technology,
    heroAlt: "Ambiente professionale Mood dedicato ai percorsi di epilazione laser a Pavia",
    relatedService: { label: "Scopri il laser", href: "/laser" },
    tags: ["epilazione laser Pavia", "laser diodo", "consulenza laser"],
    takeaways: [
      "Il laser è un percorso progressivo, non una seduta isolata.",
      "Pelle, pelo, abitudini e stagionalità vanno valutati prima di iniziare.",
      "La consulenza serve a capire tempi, aspettative e indicazioni corrette per te.",
    ],
    sections: [
      {
        heading: "Il punto non è eliminare tutto subito",
        body: [
          "Quando si cerca epilazione laser a Pavia, spesso la prima domanda è: quanto ci mette a funzionare? La risposta seria è che dipende. Dipende dal tipo di pelo, dalla zona, dalla costanza del percorso, dalla fase di crescita e dalle caratteristiche della pelle.",
          "Da Mood preferiamo spiegare bene il percorso prima di iniziare. Il laser non è una promessa lampo: è una strategia progressiva per ridurre nel tempo peli superflui, ceretta, rasoio e irritazioni legate alla depilazione frequente.",
        ],
      },
      {
        heading: "Perché la consulenza viene prima della seduta",
        body: [
          "La tecnologia conta, ma non lavora da sola. Prima di impostare un trattamento laser è importante osservare pelle e pelo, capire le abitudini della persona e verificare se ci sono condizioni che richiedono attenzione o tempi diversi.",
          "Questo momento serve anche a chiarire le aspettative: quante sedute possono essere necessarie, quali zone trattare, come prepararsi e cosa evitare prima e dopo l'appuntamento.",
        ],
        bullets: [
          "valutazione della zona da trattare",
          "analisi di fototipo, pelo e sensibilità cutanea",
          "spiegazione del ciclo iniziale e degli eventuali mantenimenti",
          "indicazioni pratiche per arrivare preparata alla seduta",
        ],
      },
      {
        heading: "Quando conviene iniziare",
        body: [
          "Molte persone iniziano a pensarci prima dell'estate, ma il percorso laser si programma meglio con anticipo. Questo permette di lavorare con continuità, rispettare i tempi tra una seduta e l'altra e arrivare alla bella stagione con più libertà nella gestione quotidiana.",
          "Il momento giusto non è uguale per tutti. Se hai dubbi su sole, abbronzatura, ceretta o rasatura, la cosa migliore è parlarne prima: così eviti errori e costruisci un calendario realistico.",
        ],
      },
      {
        heading: "Cosa aspettarsi da Mood",
        body: [
          "Il nostro approccio è pratico: niente frasi miracolose, niente pacchetti venduti a occhi chiusi. Ti spieghiamo cosa può avere senso per te e, se il laser non è il percorso ideale in quel momento, te lo diciamo.",
          "L'obiettivo è farti sentire più libera nella quotidianità, con un percorso curato, progressivo e seguito nel tempo.",
        ],
      },
    ],
    faq: [
      {
        q: "Quante sedute servono per l'epilazione laser?",
        a: "Non esiste un numero identico per tutti. In consulenza valutiamo zona, tipo di pelo, pelle e obiettivo per costruire un ciclo realistico e personalizzato.",
      },
      {
        q: "Posso fare laser se mi sono appena abbronzata?",
        a: "L'abbronzatura va valutata con attenzione. Prima di fissare la seduta è meglio parlarne con il centro per ricevere indicazioni corrette sul tuo caso.",
      },
    ],
    relatedSlugs: ["trattamenti-corpo-pavia-drenaggio-cellulite", "pulizia-viso-pavia"],
  },
  {
    slug: "pulizia-viso-pavia",
    title: "Pulizia viso a Pavia: quando farla e cosa aspettarsi",
    seoTitle: "Pulizia Viso Pavia: quando farla e benefici realistici | Mood",
    description:
      "Quando fare una pulizia viso a Pavia, come prepararsi e perché da Mood parte sempre dall'ascolto della pelle e delle abitudini quotidiane.",
    excerpt:
      "La pulizia viso non è solo detersione profonda: è il primo modo per leggere la pelle, capire cosa le serve e impostare una routine più sensata.",
    category: "Viso",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-03",
    readTime: "4 min",
    heroImage: visoImages.featured[0],
    heroAlt: "Dettaglio pelle e trattamento viso Mood Beauty Lab a Pavia",
    relatedService: { label: "Trattamenti viso", href: "/viso" },
    tags: ["pulizia viso Pavia", "trattamenti viso", "skincare"],
    takeaways: [
      "La pulizia viso è utile quando la pelle appare spenta, impura o appesantita.",
      "Non dovrebbe essere uguale per tutti: sensibilità, routine e obiettivi cambiano il trattamento.",
      "È spesso il punto di partenza per costruire un percorso viso più completo.",
    ],
    sections: [
      {
        heading: "Non è un trattamento standard",
        body: [
          "Pulizia viso è una parola molto cercata, ma spesso viene immaginata come un trattamento sempre uguale. In realtà la pelle racconta cose diverse: impurità, disidratazione, sensibilità, texture irregolare, colorito spento o prodotti usati male nella routine quotidiana.",
          "Per questo da Mood la pulizia viso a Pavia non è un gesto automatico. È un momento per osservare la pelle e capire da dove partire.",
        ],
      },
      {
        heading: "Quando può essere utile",
        body: [
          "Può avere senso quando senti la pelle più pesante, noti pori più evidenti, impurità ricorrenti, lucidità eccessiva o un colorito meno fresco. Può essere utile anche quando vuoi iniziare un percorso viso e hai bisogno di una base più pulita e leggibile.",
          "La frequenza, però, non si decide a caso. Alcune pelli hanno bisogno di più delicatezza, altre di maggiore regolarità. La consulenza serve proprio a evitare trattamenti fatti per abitudine e non per reale necessità.",
        ],
      },
      {
        heading: "Come prepararsi",
        body: [
          "Arrivare con informazioni sincere aiuta molto: quali prodotti usi, se la pelle si arrossa facilmente, se ci sono trattamenti recenti, se stai usando attivi esfolianti o se hai una routine irregolare.",
          "Non serve presentarsi con una pelle perfetta. Serve raccontare cosa succede davvero nella quotidianità: è lì che spesso troviamo la chiave per migliorare comfort e luminosità.",
        ],
        bullets: [
          "porta con te i nomi dei prodotti che usi più spesso",
          "segnala sensibilità, rossori o fastidi recenti",
          "evita esperimenti aggressivi nei giorni immediatamente precedenti",
        ],
      },
      {
        heading: "Il dopo conta quanto il trattamento",
        body: [
          "Una buona pulizia viso non finisce quando esci dal centro. Le indicazioni per casa sono fondamentali: detersione, idratazione, protezione e prodotti coerenti con ciò che la pelle può tollerare davvero.",
          "La pelle migliora quando trattamento e routine parlano la stessa lingua. È questo che proviamo a costruire da Mood.",
        ],
      },
    ],
    faq: [
      {
        q: "Ogni quanto fare la pulizia viso?",
        a: "Dipende dalla pelle e dagli obiettivi. Non diamo una frequenza standard: la valutiamo in consulenza in base a sensibilità, impurità, routine e stagione.",
      },
      {
        q: "La pulizia viso va bene anche per pelli sensibili?",
        a: "Può essere adattata, ma la sensibilità va sempre valutata prima. L'approccio corretto è personalizzare manualità, prodotti e intensità.",
      },
    ],
    relatedSlugs: ["trattamenti-viso-macchie-luminosita-pavia", "epilazione-laser-pavia"],
  },
  {
    slug: "trattamenti-viso-macchie-luminosita-pavia",
    title: "Macchie, luminosità e texture: perché il percorso viso non è mai standard",
    seoTitle: "Trattamenti Viso Pavia per macchie, luminosità e texture | Mood",
    description:
      "Come scegliere un percorso viso a Pavia per macchie, luminosità e texture irregolare: valutazione, gradualità e routine coerente.",
    excerpt:
      "Macchie, colorito spento e texture irregolare non si affrontano con un trattamento scelto a caso: serve leggere la pelle e costruire continuità.",
    category: "Viso",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-03",
    readTime: "5 min",
    heroImage: visoImages.editorial,
    heroAlt: "Dettaglio professionale di trattamento viso Mood per luminosità e qualità della pelle",
    relatedService: { label: "Percorsi viso", href: "/viso" },
    tags: ["trattamenti viso Pavia", "macchie viso", "pelle luminosa"],
    takeaways: [
      "Macchie e luminosità richiedono gradualità e costanza.",
      "Il trattamento in cabina funziona meglio quando la routine casa è coerente.",
      "La pelle va accompagnata, non forzata.",
    ],
    sections: [
      {
        heading: "Il problema spesso non è uno solo",
        body: [
          "Quando una persona chiede un trattamento per le macchie, spesso non sta parlando solo di macchie. Racconta una pelle che sembra più spenta, una grana meno uniforme, segni post-imperfezione o zone che cambiano colore con sole, stress e routine non adatta.",
          "Per questo il percorso viso non può essere scelto guardando solo una parola. Serve capire la storia della pelle e il modo in cui reagisce.",
        ],
      },
      {
        heading: "Luminosità non significa pelle lucida",
        body: [
          "Una pelle luminosa non è una pelle coperta di glow artificiale. È una pelle che appare più uniforme, più fresca, più equilibrata. Per arrivarci possono servire trattamenti diversi: detersione profonda, esfoliazioni controllate, idratazione, protocolli illuminanti o percorsi pro-aging.",
          "La scelta dipende da quello che la pelle può sostenere in quel momento. Spingere troppo non è professionalità: è fretta.",
        ],
      },
      {
        heading: "Il ruolo della routine a casa",
        body: [
          "Il lavoro fatto in cabina ha bisogno di essere protetto. Se a casa usi prodotti troppo aggressivi, salti la protezione o cambi routine ogni settimana, la pelle fatica a trovare stabilità.",
          "Da Mood preferiamo indicazioni semplici, realistiche e sostenibili: meglio pochi gesti coerenti che dieci passaggi impossibili da mantenere.",
        ],
        bullets: [
          "detersione adatta alla pelle reale, non alla moda del momento",
          "idratazione coerente con sensibilità e stagione",
          "protezione e attenzione al sole quando il percorso lo richiede",
          "continuità prima di cambiare prodotto ogni settimana",
        ],
      },
      {
        heading: "Il percorso giusto è quello che la pelle riesce a seguire",
        body: [
          "Un trattamento viso ben scelto non deve farti sentire in guerra con la tua pelle. Deve aiutarti a comprenderla e accompagnarla, seduta dopo seduta, verso più equilibrio e qualità.",
          "È un lavoro di precisione, ma anche di ascolto. Ed è qui che il metodo Mood fa la differenza.",
        ],
      },
    ],
    relatedSlugs: ["pulizia-viso-pavia", "laminazione-ciglia-sopracciglia-pavia"],
  },
  {
    slug: "trattamenti-corpo-pavia-drenaggio-cellulite",
    title: "Trattamenti corpo a Pavia: drenaggio, cellulite e leggerezza senza promesse impossibili",
    seoTitle: "Trattamenti Corpo Pavia: drenaggio, cellulite e leggerezza | Mood",
    description:
      "Guida Mood ai trattamenti corpo a Pavia: come affrontare gonfiore, cellulite e pesantezza con percorsi realistici e personalizzati.",
    excerpt:
      "Parlare di corpo non significa vendere perfezione. Significa capire cosa ti fa sentire pesante, bloccata o poco a tuo agio e costruire un percorso realistico.",
    category: "Corpo",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-03",
    readTime: "5 min",
    heroImage: corpoImages.intro,
    heroAlt: "Ambiente trattamento corpo Mood Beauty Lab per drenaggio e benessere a Pavia",
    relatedService: { label: "Trattamenti corpo", href: "/corpo" },
    tags: ["trattamenti corpo Pavia", "drenaggio", "cellulite"],
    takeaways: [
      "Cellulite, gonfiore e pesantezza sono condizioni diverse e vanno lette separatamente.",
      "Il percorso migliore combina valutazione, manualità, tecnologia e continuità.",
      "L'obiettivo non è promettere perfezione, ma migliorare comfort e percezione del corpo.",
    ],
    sections: [
      {
        heading: "Prima di scegliere un trattamento, bisogna capire il corpo",
        body: [
          "La parola cellulite viene usata per tutto, ma non tutto è cellulite. A volte la persona sente gonfiore, altre volte pesantezza, ritenzione, tessuti poco tonici o semplicemente un corpo che cambia e non viene più vissuto con serenità.",
          "Per questo da Mood non partiamo dal nome del trattamento. Partiamo da come ti senti, da quello che osservi e da ciò che vuoi migliorare nella quotidianità.",
        ],
      },
      {
        heading: "Drenaggio e leggerezza: perché non sono solo estetica",
        body: [
          "Sentire le gambe pesanti o il corpo gonfio può influenzare il modo in cui ti muovi, ti vesti e ti percepisci. Un percorso corpo può aiutare a ritrovare una sensazione di maggiore leggerezza, soprattutto quando è costruito con continuità e con indicazioni realistiche.",
          "Manualità e tecnologie possono lavorare insieme, ma vanno scelte in base alla persona. Copiare il percorso di un'altra cliente non è mai una buona strategia.",
        ],
      },
      {
        heading: "Cellulite: niente guerra al corpo",
        body: [
          "La cellulite è una condizione molto comune. Non va raccontata come un difetto da cancellare a ogni costo, perché questo genera aspettative sbagliate e frustrazione. Va osservata, compresa e trattata con un approccio professionale, quando la persona desidera lavorarci.",
          "La differenza la fa la qualità del percorso: valutazione iniziale, costanza, trattamento adeguato, idratazione, movimento e abitudini sostenibili.",
        ],
        bullets: [
          "valutare gonfiore, tessuto e obiettivo",
          "scegliere manualità e tecnologie coerenti",
          "monitorare sensazioni e cambiamenti nel tempo",
          "evitare promesse estreme e prima/dopo decontestualizzati",
        ],
      },
      {
        heading: "Un percorso corpo serio è anche educativo",
        body: [
          "Ti aiutiamo a capire perché una zona risponde in un certo modo, cosa può migliorare e quali abitudini possono sostenere il lavoro fatto in cabina.",
          "Il risultato più importante non è inseguire un ideale astratto. È tornare a vivere il corpo con più confidenza, leggerezza e rispetto.",
        ],
      },
    ],
    relatedSlugs: ["epilazione-laser-pavia", "trattamenti-viso-macchie-luminosita-pavia"],
  },
  {
    slug: "laminazione-ciglia-sopracciglia-pavia",
    title: "Laminazione ciglia e sopracciglia a Pavia: naturale, curata, quotidiana",
    seoTitle: "Laminazione Ciglia e Sopracciglia Pavia | Mood Beauty Lab",
    description:
      "Cosa sapere sulla laminazione ciglia e sopracciglia a Pavia: effetto naturale, durata, manutenzione e quando sceglierla.",
    excerpt:
      "Un trattamento beauty pensato per valorizzare lo sguardo senza stravolgerlo: più ordine, più apertura, più facilità nella routine di tutti i giorni.",
    category: "Beauty",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-03",
    readTime: "4 min",
    heroImage: beautyImages.featured[0],
    heroAlt: "Dettaglio laminazione ciglia Mood Beauty Lab a Pavia",
    relatedService: { label: "Beauty", href: "/beauty" },
    tags: ["laminazione ciglia Pavia", "laminazione sopracciglia", "beauty Pavia"],
    takeaways: [
      "La laminazione valorizza il pelo naturale, non lo sostituisce.",
      "È ideale per chi cerca uno sguardo più ordinato senza effetto eccessivo.",
      "La consulenza aiuta a scegliere forma, intensità e manutenzione corretta.",
    ],
    sections: [
      {
        heading: "Il bello è quando non sembra costruito",
        body: [
          "La laminazione ciglia e sopracciglia piace perché semplifica la quotidianità. Lo sguardo appare più aperto, ordinato e curato, ma senza l'effetto di qualcosa applicato sopra.",
          "Da Mood il risultato deve rispettare il viso. Non cerchiamo sopracciglia tutte uguali o ciglia forzate: lavoriamo sul pelo naturale e sulla forma che valorizza davvero la persona.",
        ],
      },
      {
        heading: "Ciglia: più apertura, meno fatica al mattino",
        body: [
          "La laminazione ciglia aiuta a dare curvatura e definizione alle ciglia naturali. È una scelta interessante per chi vuole vedersi più in ordine senza ricorrere ogni giorno a piegaciglia o mascara pesante.",
          "Il trattamento va eseguito con attenzione, rispettando struttura e salute del pelo. Anche qui, personalizzare è fondamentale.",
        ],
      },
      {
        heading: "Sopracciglia: ordine, direzione e armonia",
        body: [
          "Le sopracciglia incorniciano il volto. Quando sono disordinate o difficili da gestire, la laminazione può aiutare a disciplinare il pelo e rendere la forma più leggibile.",
          "Non significa cambiare identità al viso. Significa rendere più armonioso ciò che c'è già.",
        ],
      },
      {
        heading: "Dopo il trattamento",
        body: [
          "Le indicazioni post trattamento sono semplici ma importanti: evitare di stressare la zona subito dopo, seguire le indicazioni ricevute e programmare il mantenimento in base alla risposta del pelo.",
          "Il risultato migliore è quello che si integra nella tua routine senza diventare un obbligo in più.",
        ],
      },
    ],
    relatedSlugs: ["trucco-permanente-pavia", "trattamenti-viso-macchie-luminosita-pavia"],
  },
  {
    slug: "trucco-permanente-pavia",
    title: "Trucco permanente a Pavia: sopracciglia, occhi e labbra con un risultato naturale",
    seoTitle: "Trucco Permanente Pavia: sopracciglia, occhi e labbra | Mood",
    description:
      "Come valutare un percorso di trucco permanente a Pavia: consulenza, progettazione, naturalezza e rispetto dei lineamenti.",
    excerpt:
      "Il PMU non dovrebbe cambiare il volto. Dovrebbe valorizzarlo con proporzioni, ascolto e un progetto pensato sulla persona.",
    category: "Beauty",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-03",
    readTime: "5 min",
    heroImage: beautyImages.pmuWide,
    heroAlt: "Set professionale Mood dedicato al trucco permanente a Pavia",
    relatedService: { label: "Trucco permanente", href: "/beauty" },
    tags: ["trucco permanente Pavia", "PMU Pavia", "sopracciglia labbra occhi"],
    takeaways: [
      "Il trucco permanente richiede progettazione, non improvvisazione.",
      "Forma, colore e intensità devono rispettare il viso e le abitudini della persona.",
      "La consulenza è il momento in cui si decide se e come procedere.",
    ],
    sections: [
      {
        heading: "Permanente non significa pesante",
        body: [
          "Il trucco permanente viene spesso immaginato come qualcosa di molto visibile. In realtà, quando è progettato bene, può essere elegante, naturale e coerente con i lineamenti.",
          "L'obiettivo non è svegliarsi con un viso diverso. È valorizzare sopracciglia, occhi o labbra in modo armonioso, riducendo piccoli gesti quotidiani senza perdere naturalezza.",
        ],
      },
      {
        heading: "La progettazione è tutto",
        body: [
          "Prima del trattamento si valutano forma, proporzioni, colore, pelle, abitudini e aspettative. È un lavoro di precisione: pochi millimetri cambiano l'equilibrio del volto.",
          "Per questo da Mood il PMU nasce da una consulenza dedicata. Si parla, si disegna, si valuta e solo dopo si decide il percorso.",
        ],
      },
      {
        heading: "Sopracciglia, occhi o labbra: cosa cambia",
        body: [
          "Le sopracciglia aiutano a definire l'espressione. Gli occhi possono essere valorizzati con un effetto più intenso o più delicato. Le labbra possono ritrovare definizione e armonia del contorno.",
          "Ogni zona richiede una lettura diversa. Non esiste una tecnica valida per tutti i volti, e non esiste un risultato bello se non è coerente con la persona che lo porta.",
        ],
      },
      {
        heading: "Un buon PMU si riconosce anche dal percorso",
        body: [
          "La cura non finisce con la seduta. Le indicazioni post trattamento, i tempi di guarigione e gli eventuali ritocchi fanno parte del risultato finale.",
          "Se stai valutando il trucco permanente a Pavia, il primo passo giusto è una consulenza dove poter fare domande, vedere possibilità realistiche e capire se è il momento adatto per te.",
        ],
      },
    ],
    faq: [
      {
        q: "Il trucco permanente è adatto a tutti?",
        a: "Non sempre. Prima si valutano pelle, aspettative, zona, abitudini e possibili controindicazioni. La consulenza serve anche a capire se rimandare o scegliere un'alternativa.",
      },
      {
        q: "Il risultato può essere naturale?",
        a: "Sì, se progettato con attenzione su lineamenti, colore e stile personale. Da Mood l'obiettivo è valorizzare, non trasformare.",
      },
    ],
    relatedSlugs: ["laminazione-ciglia-sopracciglia-pavia", "pulizia-viso-pavia"],
  },
];

export const featuredBlogArticles = blogArticles.slice(0, 3);

export const getBlogArticle = (slug: string) => blogArticles.find((article) => article.slug === slug);

export const getRelatedArticles = (article: BlogArticle) => {
  const explicit = article.relatedSlugs
    .map((slug) => getBlogArticle(slug))
    .filter((item): item is BlogArticle => Boolean(item));

  if (explicit.length >= 2) return explicit.slice(0, 3);

  return [
    ...explicit,
    ...blogArticles.filter((item) => item.slug !== article.slug && !explicit.some((related) => related.slug === item.slug)),
  ].slice(0, 3);
};

export const getBlogArticlesBySlugs = (slugs: string[]) =>
  slugs.map((slug) => getBlogArticle(slug)).filter((article): article is BlogArticle => Boolean(article));
