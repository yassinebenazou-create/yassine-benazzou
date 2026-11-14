export type FaqItem = {
  question: { en: string; fr: string };
  answer: { en: string; fr: string };
};

export const faqItems: FaqItem[] = [
  {
    question: {
      en: "How do we start a project?",
      fr: "Comment démarrer un projet ensemble ?",
    },
    answer: {
      en: "Send a short brief below or message me on WhatsApp. We review your goals on a quick call and agree on scope before starting.",
      fr: "Envoyez un message ci-dessous ou contactez-moi sur WhatsApp. Nous validons vos objectifs et le périmètre avant de démarrer.",
    },
  },
  {
    question: {
      en: "Do you work outside Morocco?",
      fr: "Travaillez-vous aussi à l'international ?",
    },
    answer: {
      en: "Yes. I am based in Morocco and work directly with companies across France, Belgium, Canada, the UAE, and worldwide.",
      fr: "Oui. Je suis basé au Maroc et j'accompagne des entreprises en France, Belgique, Canada, aux Émirats et partout ailleurs.",
    },
  },
  {
    question: {
      en: "Will the site look great on mobile phones?",
      fr: "Le site sera-t-il adapté aux smartphones ?",
    },
    answer: {
      en: "Every page is built mobile-first with large touch-friendly buttons, crisp typography, and zero horizontal scrolling from 360px up.",
      fr: "Chaque page est conçue mobile-first avec des boutons larges, une typographie lisible et zéro débordement dès 360px.",
    },
  },
  {
    question: {
      en: "Are SEO foundations and speed built in?",
      fr: "Le SEO technique et la vitesse sont-ils inclus ?",
    },
    answer: {
      en: "Yes. Semantic headings, clean metadata, Open Graph cards, sitemap, and optimized media ship with every build.",
      fr: "Oui. Balises sémantiques, métadonnées, Open Graph, sitemap et médias optimisés sont intégrés dès la base.",
    },
  },
  {
    question: {
      en: "Can my site run in both English and French?",
      fr: "Puis-je avoir un site bilingue français et anglais ?",
    },
    answer: {
      en: "Yes. Bilingual English and French architecture comes naturally so you can serve both local and international buyers.",
      fr: "Oui. Je structure des sites bilingues anglais / français adaptés à votre clientèle locale et internationale.",
    },
  },
];
