import { blogArticles, type BlogArticle } from "./blog";
import { shopImages } from "./images";
import { site } from "./site";
import { laserFaq, products } from "./treatments";

export const seoBaseUrl = "https://moodbeautylab.it";
export const businessId = `${seoBaseUrl}/#mood-beauty-lab`;

export const seoPages = {
  home: {
    title: "Centro Estetico Pavia | Viso, Corpo, Laser e Beauty | Mood Beauty Lab",
    description:
      "Mood Beauty Lab è un centro estetico avanzato a Pavia: trattamenti viso, corpo, epilazione laser, beauty e consulenze personalizzate dal 2016.",
  },
  chiSiamo: {
    title: "Mood Beauty Lab Pavia | Team e Metodo del Centro Estetico",
    description:
      "Scopri il team di Mood Beauty Lab a Pavia: estetica avanzata, ascolto, consulenze personalizzate e percorsi su misura per viso, corpo, laser e beauty.",
  },
  viso: {
    title: "Trattamenti Viso Pavia | Pulizia Viso, Needling e Pro-Aging | Mood",
    description:
      "Trattamenti viso personalizzati a Pavia: pulizia viso, protocolli illuminanti, needling, pro-aging e tecnologie avanzate per la qualità della pelle.",
  },
  corpo: {
    title: "Trattamenti Corpo Pavia | Drenaggio, Cellulite e ICOONE | Mood",
    description:
      "Trattamenti corpo a Pavia per leggerezza, drenaggio, cellulite, tonicità e benessere: massaggi, ICOONE e percorsi personalizzati Mood Beauty Lab.",
  },
  laser: {
    title: "Epilazione Laser Pavia | Laser Diodo 808 | Mood Beauty Lab",
    description:
      "Epilazione laser a Pavia con Laser Diodo 808: percorsi progressivi e personalizzati per ridurre peli, rasoi, cerette e irritazioni.",
  },
  beauty: {
    title: "Beauty Pavia | Laminazione Ciglia, PMU, Nails e Make-Up | Mood",
    description:
      "Trattamenti beauty a Pavia: laminazione ciglia e sopracciglia, trucco permanente, nails e make-up per valorizzare i dettagli con eleganza.",
  },
  shop: {
    title: "Shop Beauty Pavia | Skincare, Solari That’so e Profumi | Mood",
    description:
      "Scopri lo shop selezionato da Mood Beauty Lab a Pavia: skincare Mood Cosmetics, solari That’so e profumi Bon Parfumeur per la routine a casa.",
  },
  blog: {
    title: "Blog Estetica Pavia | Guide Viso, Corpo, Laser e Beauty | Mood",
    description:
      "Guide pratiche Mood Beauty Lab su trattamenti viso, corpo, epilazione laser e beauty a Pavia: consigli realistici per scegliere il percorso giusto.",
  },
  contatti: {
    title: "Contatti e Prenotazioni | Centro Estetico Pavia | Mood Beauty Lab",
    description: `Prenota una consulenza da Mood Beauty Lab a Pavia: ${site.address.street}, telefono ${site.phone}. Trattamenti viso, corpo, laser e beauty su appuntamento.`,
  },
} as const;

const localServiceArea = {
  "@type": "City",
  name: site.address.city,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: site.address.region,
  },
};

const providerRef = {
  "@type": "BeautySalon",
  "@id": businessId,
};

export const serviceSchema = ({
  slug,
  name,
  description,
  serviceType,
  keywords,
}: {
  slug: string;
  name: string;
  description: string;
  serviceType: string;
  keywords: string[];
}) => ({
  "@type": "Service",
  "@id": `${seoBaseUrl}/${slug}/#service`,
  name,
  description,
  serviceType,
  provider: providerRef,
  areaServed: localServiceArea,
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${seoBaseUrl}/${slug}/`,
    servicePhone: site.phoneE164,
  },
  keywords,
});

export const serviceSchemas = {
  viso: serviceSchema({
    slug: "viso",
    name: "Trattamenti viso personalizzati a Pavia",
    description:
      "Pulizia viso, trattamenti illuminanti, needling, pro-aging e tecnologie avanzate per la qualità della pelle.",
    serviceType: "Trattamenti viso",
    keywords: ["trattamenti viso Pavia", "pulizia viso Pavia", "needling Pavia", "pro-aging Pavia"],
  }),
  corpo: serviceSchema({
    slug: "corpo",
    name: "Trattamenti corpo personalizzati a Pavia",
    description:
      "Percorsi corpo per drenaggio, cellulite, tonicità, benessere e massaggi con tecnologie e manualità professionali.",
    serviceType: "Trattamenti corpo",
    keywords: ["trattamenti corpo Pavia", "massaggio drenante Pavia", "cellulite Pavia", "ICOONE Pavia"],
  }),
  laser: serviceSchema({
    slug: "laser",
    name: "Epilazione laser a Pavia con Laser Diodo 808",
    description:
      "Percorsi di epilazione laser progressiva e personalizzata per ridurre peli, cerette, rasoi e irritazioni.",
    serviceType: "Epilazione laser",
    keywords: ["epilazione laser Pavia", "laser diodo Pavia", "laser peli Pavia"],
  }),
  beauty: serviceSchema({
    slug: "beauty",
    name: "Trattamenti beauty a Pavia",
    description:
      "Laminazione ciglia e sopracciglia, trucco permanente, nails e make-up per valorizzare sguardo, viso e mani.",
    serviceType: "Beauty",
    keywords: ["laminazione ciglia Pavia", "trucco permanente Pavia", "nails Pavia", "make up Pavia"],
  }),
};

export const laserFaqSchema = {
  "@type": "FAQPage",
  "@id": `${seoBaseUrl}/laser/#faq`,
  mainEntity: laserFaq.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const shopProductBrand = (product: (typeof products)[number]) => {
  if (product.name.startsWith("That’so")) return "That’so";
  if (product.category.includes("Bon Parfumeur")) return "Bon Parfumeur";
  return "Mood Cosmetics";
};

export const shopItemListSchema = {
  "@type": "ItemList",
  "@id": `${seoBaseUrl}/shop/#prodotti`,
  name: "Shop Mood Beauty Lab: skincare, solari e profumi",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      category: product.category,
      description: product.description,
      brand: {
        "@type": "Brand",
        name: shopProductBrand(product),
      },
      image: new URL(shopImages[product.name] ?? "/materiale/brand.png", seoBaseUrl).toString(),
    },
  })),
};

const articleImageUrl = (article: BlogArticle) => new URL(article.heroImage, seoBaseUrl).toString();
const articleUrl = (article: BlogArticle) => `${seoBaseUrl}/blog/${article.slug}/`;

export const blogIndexSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${seoBaseUrl}/blog/#blog`,
  name: "Mood Journal",
  description: seoPages.blog.description,
  url: `${seoBaseUrl}/blog/`,
  inLanguage: "it-IT",
  publisher: {
    "@id": businessId,
  },
  blogPost: blogArticles.map((article) => ({
    "@type": "BlogPosting",
    "@id": `${articleUrl(article)}#article`,
    headline: article.title,
    description: article.description,
    url: articleUrl(article),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    image: articleImageUrl(article),
    author: {
      "@type": "Organization",
      name: site.name,
      url: seoBaseUrl,
    },
  })),
};

export const blogPostingSchema = (article: BlogArticle) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${articleUrl(article)}#article`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": articleUrl(article),
  },
  headline: article.title,
  alternativeHeadline: article.seoTitle,
  description: article.description,
  image: {
    "@type": "ImageObject",
    url: articleImageUrl(article),
  },
  datePublished: article.publishedAt,
  dateModified: article.updatedAt,
  inLanguage: "it-IT",
  articleSection: article.category,
  keywords: article.tags,
  author: {
    "@type": "Organization",
    name: site.name,
    url: seoBaseUrl,
  },
  publisher: {
    "@type": "Organization",
    "@id": businessId,
    name: site.name,
    logo: {
      "@type": "ImageObject",
      url: `${seoBaseUrl}/materiale/mood-beauty-lab-logo-definitivo.png`,
    },
  },
  about: {
    "@id": businessId,
  },
});

export const blogFaqSchema = (article: BlogArticle) =>
  article.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${articleUrl(article)}#faq`,
        mainEntity: article.faq.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }
    : null;
