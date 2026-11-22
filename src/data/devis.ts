export type EstimatorMarket = "ma" | "fr";
export type EstimatorProjectType = "vitrine" | "ecommerce" | "webapp" | "redesign";
export type EstimatorScope = "small" | "medium" | "advanced";
export type EstimatorTimeline = "standard" | "priority";
export type EstimatorOptionKey =
  | "seoPerf"
  | "bilingual"
  | "cmsBlog"
  | "apiCustom"
  | "bookingContact";

export type PriceRange = {
  ma: [number, number];
  fr: [number, number];
  weeks: [number, number];
};

export const projectTypeConfigs: {
  id: EstimatorProjectType;
  contactTypeIndex: number;
  label: { fr: string; en: string };
  subtitle: { fr: string; en: string };
  pricing: PriceRange;
}[] = [
  {
    id: "vitrine",
    contactTypeIndex: 0,
    label: { fr: "Site Vitrine", en: "Business Website" },
    subtitle: {
      fr: "Présentation claire, crédibilité et capture de prospects",
      en: "Clear service positioning, credibility, and lead capture",
    },
    pricing: { ma: [4500, 7500], fr: [950, 1600], weeks: [2, 3] },
  },
  {
    id: "ecommerce",
    contactTypeIndex: 1,
    label: { fr: "Site E-commerce", en: "E-commerce Store" },
    subtitle: {
      fr: "Catalogue produits, panier et tunnel de commande mobile",
      en: "Product catalog, cart, and streamlined mobile checkout",
    },
    pricing: { ma: [8000, 14000], fr: [1800, 3200], weeks: [3, 5] },
  },
  {
    id: "webapp",
    contactTypeIndex: 6,
    label: { fr: "Application Web Next.js Sur-mesure", en: "Custom Next.js Web App" },
    subtitle: {
      fr: "Architecture React/Next.js avancée, espace client ou logique métier",
      en: "Bespoke React/Next.js build, custom flows, or interactive tools",
    },
    pricing: { ma: [12000, 22000], fr: [2500, 4800], weeks: [4, 7] },
  },
  {
    id: "redesign",
    contactTypeIndex: 3,
    label: { fr: "Refonte de site existant", en: "Website Redesign" },
    subtitle: {
      fr: "Modernisation UI/mobile, refonte de structure et préservation SEO",
      en: "Modern UI overhaul, speed upgrade, and SEO URL preservation",
    },
    pricing: { ma: [4000, 7000], fr: [850, 1500], weeks: [2, 3] },
  },
];

export const scopeConfigs: {
  id: EstimatorScope;
  label: { fr: string; en: string };
  detail: { fr: string; en: string };
  pricing: PriceRange;
}[] = [
  {
    id: "small",
    label: { fr: "Essentiel (1–5 pages)", en: "Small (1–5 pages)" },
    detail: {
      fr: "Structure focalisée sur votre offre principale et prise de contact",
      en: "Focused layout centered on core offer and direct contact",
    },
    pricing: { ma: [0, 0], fr: [0, 0], weeks: [0, 0] },
  },
  {
    id: "medium",
    label: { fr: "Intermédiaire (6–12 pages)", en: "Medium (6–12 pages)" },
    detail: {
      fr: "Plusieurs pages services, études de cas et pages locales dédiées",
      en: "Multiple service pages, case studies, or regional sections",
    },
    pricing: { ma: [2000, 3500], fr: [450, 800], weeks: [1, 2] },
  },
  {
    id: "advanced",
    label: {
      fr: "Avancé (pages sur mesure + CMS / blog)",
      en: "Advanced (custom pages + CMS / blog)",
    },
    detail: {
      fr: "Gabarits personnalisés complets avec gestion de contenus éditoriaux",
      en: "Full custom page system with structured editorial content engine",
    },
    pricing: { ma: [4500, 7500], fr: [1000, 1800], weeks: [2, 3] },
  },
];

export const optionConfigs: {
  id: EstimatorOptionKey;
  label: { fr: string; en: string };
  hint: { fr: string; en: string };
  pricing: PriceRange;
}[] = [
  {
    id: "seoPerf",
    label: { fr: "Optimisation SEO & Performance", en: "SEO & Performance setup" },
    hint: {
      fr: "Balises techniques, données structurées Schema.org, images AVIF/WebP et Core Web Vitals",
      en: "Technical metadata, Schema.org JSON-LD, AVIF/WebP, and Core Web Vitals tuning",
    },
    pricing: { ma: [1200, 2000], fr: [250, 450], weeks: [0.5, 1] },
  },
  {
    id: "bilingual",
    label: { fr: "Site bilingue EN / FR", en: "Bilingual EN / FR" },
    hint: {
      fr: "Interface et contenus structurés en français et en anglais",
      en: "Interface, routing, and content structured in both English and French",
    },
    pricing: { ma: [1800, 3000], fr: [400, 700], weeks: [1, 1] },
  },
  {
    id: "cmsBlog",
    label: { fr: "Gestion CMS / Blog", en: "CMS / Blog management" },
    hint: {
      fr: "Publication autonome d'articles, études de cas ou actualités",
      en: "Self-managed workflow for articles, case studies, or updates",
    },
    pricing: { ma: [1500, 2500], fr: [350, 600], weeks: [0.5, 1] },
  },
  {
    id: "apiCustom",
    label: {
      fr: "Fonctionnalités interactives / intégration API",
      en: "Custom interactive features / API integration",
    },
    hint: {
      fr: "Simulateur, filtres dynamiques, CRM ou connecteur tiers",
      en: "Calculators, dynamic filters, CRM webhooks, or external API sync",
    },
    pricing: { ma: [2500, 4500], fr: [600, 1100], weeks: [1, 2] },
  },
  {
    id: "bookingContact",
    label: {
      fr: "Réservation ou automatisation de contact",
      en: "Booking or contact automation",
    },
    hint: {
      fr: "Prise de rendez-vous, routage WhatsApp contextuel ou notifications email",
      en: "Appointment scheduling links, contextual WhatsApp routing, or automated alerts",
    },
    pricing: { ma: [1000, 1800], fr: [220, 400], weeks: [0.5, 0.5] },
  },
];

export const timelineConfigs: {
  id: EstimatorTimeline;
  multiplier: number;
  label: { fr: string; en: string };
  detail: { fr: string; en: string };
}[] = [
  {
    id: "standard",
    multiplier: 1,
    label: { fr: "Standard", en: "Standard" },
    detail: {
      fr: "Planning normal avec validations par jalons",
      en: "Balanced schedule with staged client reviews",
    },
  },
  {
    id: "priority",
    multiplier: 1.25,
    label: { fr: "Prioritaire / Urgent (+25%)", en: "Priority / Urgent (+25%)" },
    detail: {
      fr: "Créneau dédié pour accélérer la livraison",
      en: "Dedicated sprint slot to shorten delivery time",
    },
  },
];

function roundPrice(value: number, market: EstimatorMarket) {
  const step = market === "ma" ? 100 : 50;
  return Math.round(value / step) * step;
}

export function calculateDevisEstimate(input: {
  market: EstimatorMarket;
  projectType: EstimatorProjectType;
  scope: EstimatorScope;
  options: EstimatorOptionKey[];
  timeline: EstimatorTimeline;
}) {
  const typeCfg = projectTypeConfigs.find((t) => t.id === input.projectType) ?? projectTypeConfigs[0];
  const scopeCfg = scopeConfigs.find((s) => s.id === input.scope) ?? scopeConfigs[0];
  const timelineCfg = timelineConfigs.find((t) => t.id === input.timeline) ?? timelineConfigs[0];
  const selectedOptions = optionConfigs.filter((opt) => input.options.includes(opt.id));

  let min = typeCfg.pricing[input.market][0] + scopeCfg.pricing[input.market][0];
  let max = typeCfg.pricing[input.market][1] + scopeCfg.pricing[input.market][1];
  let minWeeks = typeCfg.pricing.weeks[0] + scopeCfg.pricing.weeks[0];
  let maxWeeks = typeCfg.pricing.weeks[1] + scopeCfg.pricing.weeks[1];

  for (const opt of selectedOptions) {
    min += opt.pricing[input.market][0];
    max += opt.pricing[input.market][1];
    minWeeks += opt.pricing.weeks[0];
    maxWeeks += opt.pricing.weeks[1];
  }

  min = roundPrice(min * timelineCfg.multiplier, input.market);
  max = roundPrice(max * timelineCfg.multiplier, input.market);

  if (input.timeline === "priority") {
    minWeeks = Math.max(1, Math.round(minWeeks * 0.7));
    maxWeeks = Math.max(minWeeks + 1, Math.round(maxWeeks * 0.75));
  } else {
    minWeeks = Math.max(1, Math.floor(minWeeks));
    maxWeeks = Math.max(minWeeks + 1, Math.ceil(maxWeeks));
  }

  // Approximate budget bracket index matching ContactForm budgetOptions (1..4)
  const midPoint = (min + max) / 2;
  let budgetIndex = 1;
  if (input.market === "ma") {
    if (midPoint >= 50000) budgetIndex = 4;
    else if (midPoint >= 25000) budgetIndex = 3;
    else if (midPoint >= 10000) budgetIndex = 2;
    else budgetIndex = 1;
  } else {
    if (midPoint >= 5000) budgetIndex = 4;
    else if (midPoint >= 2500) budgetIndex = 3;
    else if (midPoint >= 1000) budgetIndex = 2;
    else budgetIndex = 1;
  }

  return {
    typeCfg,
    scopeCfg,
    timelineCfg,
    selectedOptions,
    min,
    max,
    minWeeks,
    maxWeeks,
    budgetIndex,
  };
}

export function formatMoneyRange(min: number, max: number, market: EstimatorMarket) {
  const fmt = (n: number) =>
    new Intl.NumberFormat(market === "ma" ? "fr-MA" : "fr-FR").format(n).replace(/\u202f/g, " ");
  return market === "ma" ? `${fmt(min)} – ${fmt(max)} MAD` : `${fmt(min)} € – ${fmt(max)} €`;
}

export const devisFaqs = {
  fr: [
    {
      question: "Ces montants constituent-ils un devis définitif ?",
      answer:
        "Non. Ce simulateur fournit une fourchette indicative pour cadrer votre budget. Un devis précis et ferme est établi après un premier échange (message ou appel de cadrage) sur vos contenus, maquettes et besoins exacts.",
    },
    {
      question: "Comment s'organise la facturation entre le Maroc (MAD) et la France (EUR) ?",
      answer:
        "Je suis basé à El Jadida au Maroc et je collabore directement avec les entreprises au Maroc (devis en MAD) ainsi qu'à distance avec les clients basés en France ou à l'international (devis en EUR, sur horaires alignés).",
    },
    {
      question: "Que couvrent généralement les délais affichés ?",
      answer:
        "Les semaines indiquées incluent le design de l'interface, le développement Next.js ou WordPress, les tests responsive mobile/desktop et les réglages SEO de base, hors délais de validation ou de rédaction des textes clients.",
    },
    {
      question: "Resterai-je propriétaire de mon site et de mon nom de domaine ?",
      answer:
        "Oui, à 100 %. Le nom de domaine, l'hébergement et les accès complets ou dépôts de code restent enregistrés directement au nom de votre entreprise.",
    },
  ],
  en: [
    {
      question: "Is this estimate a binding final quote?",
      answer:
        "No. The estimator gives an indicative budget and timeline range so you can plan your scope. A fixed quote is sent only after reviewing your exact pages, copy readiness, and integrations on a brief call or message.",
    },
    {
      question: "How do Morocco (MAD) and France / international (EUR) projects work?",
      answer:
        "I am based in El Jadida, Morocco, working locally across Morocco (quoted in MAD) and remotely with clients in France and abroad (quoted in EUR) with aligned business-hour communication and staging links.",
    },
    {
      question: "What is included in the estimated delivery window?",
      answer:
        "The week estimate covers UI layout, Next.js or WordPress implementation, responsive QA across mobile and desktop, and technical SEO setup, assuming timely feedback and content delivery.",
    },
    {
      question: "Do I keep full ownership of my domain and code?",
      answer:
        "Yes. Your domain name, hosting account, and website codebase or admin credentials belong entirely to your business.",
    },
  ],
};
