export type LocalizedText = {
  en: string;
  fr: string;
};

export type Project = {
  slug: string;
  name: string;
  featured: boolean;
  industry: LocalizedText;
  image: string;
  url?: string;
  summary: LocalizedText;
  needs: { en: string[]; fr: string[] };
  solution: LocalizedText;
  features: { en: string[]; fr: string[] };
  /** Only list technologies that are verified for this specific build */
  technologies: string[];
  /** Non-framework deliverable highlights shown alongside or when stack is not disclosed */
  highlights: { en: string[]; fr: string[] };
  gallery: string[];
  isPlaceholderImage?: boolean;
};

// Note: Project thumbnails in `/public/projects/*.svg` are vector UI previews ready
// for live screenshot replacement in `/public/projects/`.
export const featuredProjects: Project[] = [
  {
    slug: "nutritionniste-agadir",
    name: "Nutritionniste Agadir",
    featured: true,
    industry: {
      en: "Healthcare Practice",
      fr: "Santé & Cabinet",
    },
    image: "/projects/nutritionniste-agadir.svg",
    url: "https://nutritionniste-agadir.com/",
    summary: {
      en: "A calm, trustworthy site for an Agadir nutrition clinic built to present consultations and simplify mobile bookings.",
      fr: "Un site rassurant pour un cabinet de nutrition à Agadir, pensé pour clarifier les consultations et faciliter les rendez-vous.",
    },
    needs: {
      en: [
        "Build immediate clinical trust for visiting patients",
        "Present nutrition services clearly without medical clutter",
        "Make booking inquiries fast from smartphones",
      ],
      fr: [
        "Inspirer confiance aux patients dès l'arrivée sur la page",
        "Présenter les accompagnements sans surcharge visuelle",
        "Simplifier la prise de rendez-vous depuis mobile",
      ],
    },
    solution: {
      en: "Structured a patient-first healthcare site with readable typography, clear service breakdown, and direct contact calls to action.",
      fr: "Conception d'un site centré patient avec typographie lisible, présentation claire des soins et prise de contact directe.",
    },
    features: {
      en: [
        "Patient-first landing structure",
        "Mobile-ready responsive layout",
        "Local healthcare SEO structure",
        "Direct consultation CTAs",
      ],
      fr: [
        "Architecture orientée prise de rendez-vous",
        "Interface fluide sur smartphone",
        "Structure SEO santé locale",
        "Boutons de contact directs",
      ],
    },
    technologies: [],
    highlights: {
      en: ["Healthcare UX", "Responsive Build", "Local SEO"],
      fr: ["UX Santé", "Site Responsive", "SEO Local"],
    },
    gallery: ["/projects/nutritionniste-agadir.svg"],
    isPlaceholderImage: true,
  },
  {
    slug: "customcar",
    name: "Customcar",
    featured: true,
    industry: {
      en: "Automotive Services",
      fr: "Services Automobiles",
    },
    image: "/projects/customcar.svg",
    url: "https://customcar-frontend.vercel.app/",
    summary: {
      en: "Sharp automotive platform built to showcase custom vehicle services and turn visitors into quote requests.",
      fr: "Site automobile contrasté conçu pour présenter les prestations sur mesure et générer des demandes de devis.",
    },
    needs: {
      en: [
        "Present automotive services with bold visual authority",
        "Work smoothly on phones while customers compare options",
        "Convert visits into fast quote inquiries",
      ],
      fr: [
        "Valoriser les prestations automobiles avec un rendu soigné",
        "Rester rapide et lisible sur mobile en déplacement",
        "Convertir les visites en demandes de devis rapides",
      ],
    },
    solution: {
      en: "Built a high-contrast storefront with clear service blocks, responsive spacing, and direct inquiry actions.",
      fr: "Développement d'une vitrine contrastée avec services structurés, affichage responsive et appels à l'action directs.",
    },
    features: {
      en: [
        "Bold automotive showcase",
        "Clear service breakdown",
        "Multi-device responsive layout",
        "Fast frontend rendering",
      ],
      fr: [
        "Vitrine automobile contrastée",
        "Présentation claire des prestations",
        "Affichage adapté multi-écrans",
        "Chargement frontend rapide",
      ],
    },
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
    highlights: {
      en: ["Automotive UI", "Quote Focused"],
      fr: ["Interface Auto", "Orienté Devis"],
    },
    gallery: ["/projects/customcar.svg"],
    isPlaceholderImage: true,
  },
  {
    slug: "eleva-design",
    name: "Eleva Design",
    featured: true,
    industry: {
      en: "Interior Architecture",
      fr: "Design d'Intérieur",
    },
    image: "/projects/eleva-design.svg",
    summary: {
      en: "Editorial studio showcase for an interior design firm, framing completed spaces, services, and bespoke project inquiries.",
      fr: "Vitrine éditoriale pour un studio de design d'intérieur, présentant réalisations, services et demandes de projet.",
    },
    needs: {
      en: [
        "Match an architectural interior aesthetic online",
        "Display curated spaces cleanly without heavy page clutter",
        "Guide homeowners and brands to submit project briefs",
      ],
      fr: [
        "Refléter une esthétique architecturale soignée en ligne",
        "Mettre en valeur les espaces avec sobriété et clarté",
        "Guider les clients vers l'envoi de leur cahier des charges",
      ],
    },
    solution: {
      en: "Crafted an editorial layout pairing open whitespace with visual project framing and a clean inquiry workflow.",
      fr: "Mise en page éditoriale associant larges respirations, galerie soignée et parcours de demande de devis fluide.",
    },
    features: {
      en: [
        "Editorial brand framing",
        "Curated portfolio layout",
        "Service & brief workflow",
        "Semantic SEO structure",
      ],
      fr: [
        "Présentation éditoriale de marque",
        "Galerie de projets structurée",
        "Parcours services et devis",
        "Structure sémantique SEO",
      ],
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: {
      en: ["Editorial Layout", "Studio Showcase"],
      fr: ["Direction Éditoriale", "Vitrine Studio"],
    },
    gallery: ["/projects/eleva-design.svg"],
    isPlaceholderImage: true,
  },
  {
    slug: "atlasquad",
    name: "AtlasQuad",
    featured: true,
    industry: {
      en: "Tourism & Excursions",
      fr: "Tourisme & Excursions",
    },
    image: "/projects/atlasquad.svg",
    url: "https://atlasquad.com/",
    summary: {
      en: "Booking-focused business site presenting quad excursions, clear tour packages, and direct mobile reservations.",
      fr: "Site professionnel conçu pour présenter les excursions en quad, détailler les formules et faciliter les réservations mobiles.",
    },
    needs: {
      en: [
        "Show tour packages clearly to international visitors",
        "Stay fast and readable on mobile data connections",
        "Keep booking inquiries one tap away",
      ],
      fr: [
        "Présenter les circuits clairement aux visiteurs internationaux",
        "Rester léger et rapide sur connexion mobile",
        "Rendre la réservation accessible en un geste",
      ],
    },
    solution: {
      en: "Delivered a brisk, mobile-friendly site organized around excursion cards, practical route details, and direct booking triggers.",
      fr: "Réalisation d'un site rapide structuré autour des formules phares, détails pratiques et boutons de réservation directs.",
    },
    features: {
      en: [
        "Clear tour & package cards",
        "Mobile traveler usability",
        "Direct booking inquiry links",
        "Fast edge deployment",
      ],
      fr: [
        "Cartes formules & circuits claires",
        "Navigation fluide sur smartphone",
        "Liens directs de réservation",
        "Hébergement edge rapide",
      ],
    },
    technologies: ["React", "Tailwind CSS", "Vercel"],
    highlights: {
      en: ["Tourism UX", "Fast Delivery"],
      fr: ["UX Tourisme", "Chargement Rapide"],
    },
    gallery: ["/projects/atlasquad.svg"],
    isPlaceholderImage: true,
  },
];

// Preserved secondary entries so existing `/realisations/[slug]` routes continue to resolve
export const additionalProjects: Project[] = [
  {
    slug: "dentalclinick",
    name: "DentalClinick",
    featured: false,
    industry: {
      en: "Healthcare / Dental",
      fr: "Santé & Dentaire",
    },
    image: "/projects/dentalclinick.svg",
    summary: {
      en: "Clean clinic concept structured to reassure patients, clarify dental care, and simplify appointment inquiries.",
      fr: "Concept pour cabinet dentaire conçu pour rassurer les patients, clarifier les soins et simplifier les rendez-vous.",
    },
    needs: {
      en: ["Clarify available treatments", "Build patient confidence", "Simplify contact flow"],
      fr: ["Clarifier les soins proposés", "Rassurer les visiteurs", "Simplifier la prise de rendez-vous"],
    },
    solution: {
      en: "Structured clinic overview with treatment sections, patient FAQ, and visible booking buttons.",
      fr: "Structure claire avec présentation du cabinet, soins, FAQ et boutons de contact accessibles.",
    },
    features: {
      en: ["Clinic overview", "Treatment breakdown", "Patient FAQ", "Responsive layout"],
      fr: ["Présentation cabinet", "Détail des soins", "FAQ patients", "Design responsive"],
    },
    technologies: ["WordPress", "Technical SEO", "Responsive Design"],
    highlights: {
      en: ["Healthcare Concept"],
      fr: ["Concept Santé"],
    },
    gallery: ["/projects/dentalclinick.svg"],
    isPlaceholderImage: true,
  },
  {
    slug: "decoazan",
    name: "DecoAzan",
    featured: false,
    industry: {
      en: "Decoration & Craft",
      fr: "Décoration & Artisanat",
    },
    image: "/projects/decoazan.svg",
    summary: {
      en: "Showcase site for a decor and craft studio highlighting collections and direct custom quote requests.",
      fr: "Vitrine pour une marque de décoration mettant en valeur ses collections et la demande de devis.",
    },
    needs: {
      en: ["Present handcrafted pieces", "Communicate style clearly", "Capture custom quote briefs"],
      fr: ["Présenter les créations", "Valoriser l'identité visuelle", "Recevoir des demandes de devis"],
    },
    solution: {
      en: "Clean showcase with curated collections, workshop story, and straightforward contact paths.",
      fr: "Vitrine épurée avec galeries de créations, présentation de l'atelier et contact rapide.",
    },
    features: {
      en: ["Collection showcase", "Product highlights", "Quote form flow", "Mobile responsive"],
      fr: ["Catalogue visuel", "Focus collections", "Formulaire de devis", "Affichage mobile"],
    },
    technologies: ["Next.js", "Tailwind CSS", "Local SEO"],
    highlights: {
      en: ["Craft Showcase"],
      fr: ["Vitrine Artisanat"],
    },
    gallery: ["/projects/decoazan.svg"],
    isPlaceholderImage: true,
  },
];

export const projects: Project[] = [...featuredProjects, ...additionalProjects];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
