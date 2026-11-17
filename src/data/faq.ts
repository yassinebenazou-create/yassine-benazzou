export type FaqItem = {
  question: { en: string; fr: string };
  answer: { en: string; fr: string };
};

export const faqItems: FaqItem[] = [
  {
    question: {
      en: "How do I start a website project with a freelance web developer in Morocco?",
      fr: "Comment démarrer une création de site web au Maroc avec vous ?",
    },
    answer: {
      en: "Send a short brief below or message me on WhatsApp. We review your goals on a quick call and align on scope before starting.",
      fr: "Envoyez un message ci-dessous ou contactez-moi sur WhatsApp. Nous validons vos objectifs et le périmètre avant de démarrer.",
    },
  },
  {
    question: {
      en: "Do you work with clients in Casablanca, Agadir, El Jadida, and internationally?",
      fr: "Travaillez-vous à Casablanca, Agadir, El Jadida et à l'international ?",
    },
    answer: {
      en: "Yes. Based in El Jadida, I work across Morocco (Casablanca, Agadir, Rabat, Marrakech) as well as France, Belgium, Canada, the UAE, and worldwide.",
      fr: "Oui. Basé à El Jadida, j'interviens partout au Maroc (Casablanca, Agadir, Rabat, Marrakech) ainsi qu'en France, Belgique, Canada et aux Émirats.",
    },
  },
  {
    question: {
      en: "Do you build custom Next.js websites or WordPress business sites?",
      fr: "Développez-vous sous Next.js sur mesure ou sous WordPress ?",
    },
    answer: {
      en: "Both. I recommend Next.js and React for high-speed custom platforms and WordPress or WooCommerce when self-managed content editing is the priority.",
      fr: "Les deux. Je recommande Next.js et React pour des sites rapides sur mesure, et WordPress ou WooCommerce lorsque vous souhaitez gérer le contenu en autonomie.",
    },
  },
  {
    question: {
      en: "Are responsive design and technical SEO foundations included?",
      fr: "Le design responsive et le SEO technique sont-ils inclus ?",
    },
    answer: {
      en: "Yes. Every site is structured for mobile and desktop viewports with semantic headings, clean metadata, Open Graph tags, and sitemap setup.",
      fr: "Oui. Chaque site est conçu pour mobile et ordinateur avec balisage sémantique, métadonnées propres, Open Graph et sitemap configuré.",
    },
  },
  {
    question: {
      en: "Can my website run in both English and French?",
      fr: "Puis-je avoir un site bilingue français et anglais ?",
    },
    answer: {
      en: "Yes. Bilingual English and French architecture allows you to present your services clearly to both Moroccan and international clients.",
      fr: "Oui. Une structure bilingue français / anglais permet de vous adresser efficacement à votre clientèle marocaine et internationale.",
    },
  },
];
