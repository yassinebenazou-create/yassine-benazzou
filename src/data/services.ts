import type { LocalizedText } from "@/data/projects";

export type ServiceIconKey =
  | "monitor"
  | "shopping"
  | "rocket"
  | "refresh"
  | "smartphone"
  | "shield";

export type Service = {
  slug: string;
  legacySlugs?: string[];
  number: string;
  title: LocalizedText;
  eyebrow: LocalizedText;
  description: LocalizedText;
  seoDescription: LocalizedText;
  benefits: { en: string[]; fr: string[] };
  features: { en: string[]; fr: string[] };
  icon: ServiceIconKey;
};

export const services: Service[] = [
  {
    slug: "business-website-development",
    legacySlugs: ["site-vitrine", "developpement-web"],
    number: "01",
    title: {
      en: "Business Website Development",
      fr: "Création de Site Internet Professionnel",
    },
    eyebrow: {
      en: "Credibility & Leads",
      fr: "Site Vitrine & Acquisition",
    },
    description: {
      en: "Custom business websites built with Next.js or WordPress to clarify your offer and bring qualified inquiries.",
      fr: "Création de site vitrine sur mesure avec Next.js ou WordPress pour rassurer vos clients et recevoir des demandes.",
    },
    seoDescription: {
      en: "Business website development in Morocco and worldwide. Custom Next.js or WordPress sites built for credibility, fast load speeds, and client leads.",
      fr: "Création de site internet professionnel au Maroc : sites vitrines sur mesure, rapides et optimisés SEO pour générer des prospects qualifiés.",
    },
    benefits: {
      en: ["Immediate buyer trust", "Clear contact paths", "Tailored brand system"],
      fr: ["Confiance immédiate", "Parcours contact direct", "Design sur mesure"],
    },
    features: {
      en: [
        "Custom UI/UX layout",
        "Conversion-focused copy structure",
        "Form & WhatsApp integration",
        "Fast Next.js or WordPress build",
        "Clean SEO heading hierarchy",
        "Mobile & desktop polish",
      ],
      fr: [
        "Architecture UI/UX sur mesure",
        "Structure orientée prise de contact",
        "Formulaire & bouton WhatsApp",
        "Développement Next.js ou WordPress",
        "Structure sémantique SEO",
        "Affichage soigné sur tous écrans",
      ],
    },
    icon: "monitor",
  },
  {
    slug: "ecommerce",
    legacySlugs: [],
    number: "02",
    title: {
      en: "E-commerce Stores",
      fr: "Création de Boutique E-commerce",
    },
    eyebrow: {
      en: "Online Revenue",
      fr: "Ventes en Ligne",
    },
    description: {
      en: "Streamlined online stores built for fast mobile browsing and confident checkout.",
      fr: "Des boutiques en ligne rapides conçues pour fluidifier l'achat sur mobile et rassurer vos clients.",
    },
    seoDescription: {
      en: "E-commerce website development for brands in Morocco and internationally. Clear product catalogs, mobile checkout, and WooCommerce or Next.js builds.",
      fr: "Développement de boutique e-commerce au Maroc : catalogue structuré, commande mobile fluide et intégration WooCommerce ou Next.js.",
    },
    benefits: {
      en: ["Frictionless checkout", "Clear catalog filters", "Simple stock control"],
      fr: ["Achat fluide sur mobile", "Catalogue clair et filtrable", "Gestion simple des stocks"],
    },
    features: {
      en: [
        "Product pages built to convert",
        "Clean cart & checkout flow",
        "Payment & shipping setup",
        "Order & inventory control",
        "E-commerce SEO basics",
        "WooCommerce or Next.js build",
      ],
      fr: [
        "Fiches produits structurées",
        "Panier et commande simplifiés",
        "Paiement et livraison configurés",
        "Suivi des commandes et stocks",
        "Bases SEO e-commerce",
        "Solution WooCommerce ou Next.js",
      ],
    },
    icon: "shopping",
  },
  {
    slug: "landing-page",
    legacySlugs: [],
    number: "03",
    title: {
      en: "Campaign Landing Pages",
      fr: "Design de Landing Page",
    },
    eyebrow: {
      en: "Launches & Ads",
      fr: "Campagnes & Lancements",
    },
    description: {
      en: "Focused single-page sites designed for ad campaigns and launches where every click matters.",
      fr: "Des pages dédiées à vos campagnes publicitaires et lancements pour convertir chaque visite en prospect.",
    },
    seoDescription: {
      en: "Professional landing page design built for ad campaigns and product launches. Fast loading, sharp messaging, and mobile-ready lead capture.",
      fr: "Création de landing page orientée conversion pour vos campagnes et lancements. Message clair, chargement rapide et formulaire mobile.",
    },
    benefits: {
      en: ["Sharp above-the-fold pitch", "Distraction-free flow", "Rapid load for paid ads"],
      fr: ["Accroche directe dès l'écran", "Parcours sans distraction", "Chargement rapide"],
    },
    features: {
      en: [
        "Clear offer framing",
        "Proof & FAQ pacing",
        "Lead form & direct CTAs",
        "Thumb-friendly mobile buttons",
        "Lightweight smooth motion",
        "Analytics event readiness",
      ],
      fr: [
        "Message d'offre limpide",
        "Rythme preuve & FAQ",
        "Formulaire & CTA visibles",
        "Boutons tactiles optimisés",
        "Animations légères",
        "Prête pour le suivi publicitaire",
      ],
    },
    icon: "rocket",
  },
  {
    slug: "website-redesign",
    legacySlugs: [],
    number: "04",
    title: {
      en: "Website Redesigns",
      fr: "Refonte de Site Web",
    },
    eyebrow: {
      en: "Modern Positioning",
      fr: "Modernisation & Clarté",
    },
    description: {
      en: "Rebuild a slow or dated site into a crisp platform that wins customer trust and more leads.",
      fr: "Remplacez un site lent ou daté par une vitrine claire qui inspire confiance et attire plus de clients.",
    },
    seoDescription: {
      en: "Professional website redesign service in Morocco. Modernize outdated sites for faster speed, cleaner mobile UX, and stronger search positioning.",
      fr: "Refonte de site internet professionnel au Maroc : modernisation du design, amélioration de la vitesse mobile et préservation du SEO.",
    },
    benefits: {
      en: ["Sharper brand impression", "Cleaner mobile UX", "Faster page speed"],
      fr: ["Image plus crédible", "Expérience mobile fluide", "Temps de chargement réduits"],
    },
    features: {
      en: [
        "Messaging & UX review",
        "Custom visual refresh",
        "Mobile responsiveness fix",
        "Speed & performance upgrade",
        "SEO link preservation",
        "Zero-downtime rollout",
      ],
      fr: [
        "Audit UX et clarté du message",
        "Nouvelle direction visuelle",
        "Refonte complète sur mobile",
        "Gain net en vitesse",
        "Préservation des liens SEO",
        "Mise en ligne sans coupure",
      ],
    },
    icon: "refresh",
  },
  {
    slug: "responsive-web-design",
    legacySlugs: ["wordpress"],
    number: "05",
    title: {
      en: "Responsive Web Design",
      fr: "Design Web Responsive",
    },
    eyebrow: {
      en: "Mobile to Desktop",
      fr: "Mobile & Desktop",
    },
    description: {
      en: "Precision interfaces engineered to read cleanly and work smoothly on every viewport size.",
      fr: "Des interfaces nettes pensées pour une lecture confortable sur smartphone, tablette et ordinateur.",
    },
    seoDescription: {
      en: "Responsive web design in Morocco and abroad. Mobile-first UI systems engineered for crisp readability, accessibility, and fast browsing.",
      fr: "Web designer freelance au Maroc spécialisé en design web responsive : interfaces mobiles fluides, contrastées et accessibles.",
    },
    benefits: {
      en: ["Consistent layout clarity", "Thumb-ready controls", "High visual contrast"],
      fr: ["Lisibilité constante", "Boutons adaptés au pouce", "Contraste visuel élevé"],
    },
    features: {
      en: [
        "Mobile-first grid system",
        "Strong typographic contrast",
        "Accessible touch targets",
        "Cross-browser QA",
        "Optimized media sizing",
        "Reusable React components",
      ],
      fr: [
        "Grille pensée mobile-first",
        "Contraste typographique affirmé",
        "Zones cliquables accessibles",
        "Vérification multi-navigateurs",
        "Médias allégés par écran",
        "Composants React réutilisables",
      ],
    },
    icon: "smartphone",
  },
  {
    slug: "maintenance-seo",
    legacySlugs: ["seo-performance"],
    number: "06",
    title: {
      en: "Website Maintenance & SEO",
      fr: "Maintenance Web & SEO",
    },
    eyebrow: {
      en: "Speed & Visibility",
      fr: "Stabilité & Google",
    },
    description: {
      en: "Technical upkeep and clean SEO structure so your site stays fast, safe, and searchable.",
      fr: "Suivi technique fiable et bases SEO propres pour garder un site rapide, sûr et visible sur Google.",
    },
    seoDescription: {
      en: "Website maintenance and technical SEO services in Morocco. Structured metadata, sitemap hygiene, speed tuning, and bilingual EN/FR search foundations.",
      fr: "Maintenance de site web et SEO technique au Maroc : balises structurées, sitemap, optimisation vitesse et suivi technique continu.",
    },
    benefits: {
      en: ["Stronger search hygiene", "Consistent uptime", "Bilingual EN / FR structure"],
      fr: ["Meilleure indexation Google", "Site fiable dans la durée", "Structure bilingue EN / FR"],
    },
    features: {
      en: [
        "Metadata & structured data",
        "Sitemap & robots hygiene",
        "Asset & speed tuning",
        "Content & page updates",
        "Dependency updates",
        "Bilingual EN / FR SEO",
      ],
      fr: [
        "Balises meta & données structurées",
        "Sitemap et indexation propres",
        "Optimisation vitesse et images",
        "Ajouts de contenus et pages",
        "Mises à jour de sécurité",
        "Structuration SEO EN / FR",
      ],
    },
    icon: "shield",
  },
];

export function getService(slug: string) {
  return services.find(
    (service) => service.slug === slug || service.legacySlugs?.includes(slug),
  );
}

export function getAllServiceSlugs(): string[] {
  return services.flatMap((service) => [service.slug, ...(service.legacySlugs ?? [])]);
}
