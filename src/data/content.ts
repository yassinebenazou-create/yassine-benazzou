export type WhyItem = {
  key: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
};

export const whyWorkWithMeItems: WhyItem[] = [
  {
    key: "design",
    title: {
      en: "Bespoke visual craft",
      fr: "Design sur mesure",
    },
    description: {
      en: "Clean layouts tailored to your business so you stand apart from lookalike templates.",
      fr: "Une interface soignée qui démarque votre entreprise des modèles standardisés dès le premier regard.",
    },
  },
  {
    key: "responsive",
    title: {
      en: "Responsive web design everywhere",
      fr: "Design web responsive",
    },
    description: {
      en: "Structured cleanly for mobile phones, tablets, and wide desktop screens so visitors browse comfortably.",
      fr: "Conçu pour smartphones, tablettes et grands écrans afin d'offrir une navigation claire partout.",
    },
  },
  {
    key: "performance",
    title: {
      en: "Built for fast load speeds",
      fr: "Chargement rapide",
    },
    description: {
      en: "Lean code and optimized assets keep pages snapping open and reduce visitor drop-off.",
      fr: "Code propre et médias optimisés pour des pages réactives qui retiennent vos visiteurs.",
    },
  },
  {
    key: "seo",
    title: {
      en: "Clean SEO foundations",
      fr: "Structure SEO propre",
    },
    description: {
      en: "Semantic HTML, crisp metadata, and clean sitemaps built to help search engines index you.",
      fr: "HTML sémantique, balises meta claires et sitemap inclus pour faciliter votre visibilité Google.",
    },
  },
  {
    key: "communication",
    title: {
      en: "Direct founder collaboration",
      fr: "Contact direct, sans intermédiaire",
    },
    description: {
      en: "You talk straight to the person designing and coding your site from scope to launch.",
      fr: "Vous échangez directement avec celui qui conçoit et code votre site, du cadrage au lancement.",
    },
  },
  {
    key: "tailored",
    title: {
      en: "Conversion-first flow",
      fr: "Parcours orienté demandes",
    },
    description: {
      en: "Every section and call to action guides visitors smoothly toward contacting your team.",
      fr: "Chaque bloc et bouton guide naturellement vos visiteurs vers la prise de contact.",
    },
  },
];

export type ProcessStep = {
  step: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
};

export const workProcessSteps: ProcessStep[] = [
  {
    step: "01",
    title: {
      en: "Scope & Strategy",
      fr: "Cadrage & Stratégie",
    },
    description: {
      en: "One focused call to align on your customers, page structure, and commercial goals.",
      fr: "Un échange ciblé pour définir vos clients, l'architecture du site et vos objectifs.",
    },
  },
  {
    step: "02",
    title: {
      en: "Design & Build",
      fr: "Design & Développement",
    },
    description: {
      en: "I craft your bespoke UI and build fast, responsive pages with live staging previews.",
      fr: "Création de l'interface sur mesure et développement responsive avec aperçus en direct.",
    },
  },
  {
    step: "03",
    title: {
      en: "Launch & Care",
      fr: "Lancement & Suivi",
    },
    description: {
      en: "Cross-device QA, domain deployment, SEO checks, and clean handover ready for leads.",
      fr: "Tests multi-écrans, mise en ligne, vérifications SEO et accompagnement post-lancement.",
    },
  },
];

// Verified technologies sourced directly from package.json and existing project configuration
export const verifiedTechnologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "WordPress",
  "WooCommerce",
  "Node.js",
  "Laravel",
  "MySQL",
  "MongoDB",
  "Git",
  "Vercel",
];

export const targetMarkets = {
  en: ["Morocco", "France", "Belgium", "Canada", "UAE", "Worldwide"],
  fr: ["Maroc", "France", "Belgique", "Canada", "Émirats Arabes Unis", "International"],
};
