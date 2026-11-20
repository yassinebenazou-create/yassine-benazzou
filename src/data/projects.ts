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

export const featuredProjects: Project[] = [
  {
    slug: "nutritionniste-agadir",
    name: "Nutritionniste Agadir",
    featured: true,
    industry: {
      en: "Healthcare & Nutrition",
      fr: "Santé & Nutrition",
    },
    image: "/projects/nutritionniste-agadir.jpg",
    url: "https://nutritionniste-agadir.com/",
    summary: {
      en: "Healthcare website for dietician-nutritionist Imane Oulhint in Agadir, presenting personalized nutrition programs, consultations, and direct appointment booking.",
      fr: "Site santé pour la diététicienne-nutritionniste Imane Oulhint à Agadir, présentant les programmes nutritionnels, consultations et prise de rendez-vous.",
    },
    needs: {
      en: [
        "Build immediate clinical trust for visiting patients",
        "Present nutrition services and consultation process clearly",
        "Make appointment booking and WhatsApp inquiries fast on mobile",
      ],
      fr: [
        "Inspirer confiance aux patients dès l'arrivée sur la page",
        "Présenter clairement les accompagnements et consultations",
        "Simplifier la prise de rendez-vous et le contact WhatsApp sur mobile",
      ],
    },
    solution: {
      en: "Structured a calm, patient-first clinic website with clear service sections, multilingual support, patient FAQ, and direct booking calls to action.",
      fr: "Conception d'un site clinique centré patient avec sections de services claires, support multilingue, FAQ patients et boutons de prise de rendez-vous.",
    },
    features: {
      en: [
        "Consultation & services presentation",
        "Language switcher & patient FAQ",
        "Responsive mobile-first layout",
        "Direct WhatsApp & booking CTAs",
      ],
      fr: [
        "Présentation claire des consultations",
        "Sélecteur de langue et FAQ patients",
        "Design responsive mobile-first",
        "Boutons directs rendez-vous & WhatsApp",
      ],
    },
    technologies: [],
    highlights: {
      en: ["Healthcare UX", "Appointment Flow", "Local SEO"],
      fr: ["UX Santé", "Prise de Rendez-vous", "SEO Local"],
    },
    gallery: ["/projects/nutritionniste-agadir.jpg"],
    isPlaceholderImage: false,
  },
  {
    slug: "gostostore",
    name: "Gosto Store",
    featured: true,
    industry: {
      en: "E-commerce & Mobility",
      fr: "E-commerce & Mobilité",
    },
    image: "/projects/gostostore.jpg",
    url: "https://gostostore.online/",
    summary: {
      en: "Online store in Morocco specializing in electric bikes, electric motorcycles, scooters, strollers, and trampolines with catalog navigation and WhatsApp support.",
      fr: "Boutique e-commerce au Maroc dédiée aux motos, vélos, voitures électriques, trottinettes et loisirs, avec navigation par catégories et commande rapide.",
    },
    needs: {
      en: [
        "Organize diverse mobility product categories clearly for shoppers",
        "Highlight free delivery across Morocco and direct phone support",
        "Provide fast mobile shopping with cart, wishlist, and WhatsApp order help",
      ],
      fr: [
        "Structurer clairement les gammes de mobilité électrique",
        "Mettre en avant la livraison gratuite au Maroc et le support direct",
        "Fluidifier l'achat mobile avec panier, favoris et assistance WhatsApp",
      ],
    },
    solution: {
      en: "Built a bold dark-and-red e-commerce storefront featuring category mega-navigation, hero collection slides, wishlist/cart actions, and instant WhatsApp assistance.",
      fr: "Développement d'une boutique e-commerce contrastée avec navigation par catégories, vitrine hero, panier/favoris et assistance WhatsApp instantanée.",
    },
    features: {
      en: [
        "Multi-category e-commerce navigation",
        "Cart, wishlist & product search",
        "Hero showcase & direct order CTAs",
        "Mobile shopping & WhatsApp support",
      ],
      fr: [
        "Navigation e-commerce multi-catégories",
        "Panier, liste d'envies et recherche",
        "Slider vitrine et appels à l'action",
        "Ergonomie mobile et support WhatsApp",
      ],
    },
    technologies: [],
    highlights: {
      en: ["E-commerce UI", "Product Catalog", "Mobile Shopping"],
      fr: ["Interface E-commerce", "Catalogue Produits", "Achat Mobile"],
    },
    gallery: ["/projects/gostostore.jpg"],
    isPlaceholderImage: false,
  },
  {
    slug: "customcar",
    name: "Customcar",
    featured: true,
    industry: {
      en: "Automotive Performance",
      fr: "Performance Automobile",
    },
    image: "/projects/customcar.jpg",
    url: "https://customcar.ma/",
    summary: {
      en: "Premium automotive studio website showcasing ECU engine remapping and custom performance services with dark-luxury UI and direct WhatsApp contact.",
      fr: "Site vitrine automobile haut de gamme présentant la reprogrammation moteur sur mesure (ECU Performance) avec interface sombre et contact WhatsApp direct.",
    },
    needs: {
      en: [
        "Present ECU performance and custom auto services with strong visual authority",
        "Work cleanly on mobile while drivers compare services and book slots",
        "Turn visitor interest into direct WhatsApp and quote inquiries",
      ],
      fr: [
        "Valoriser la reprogrammation moteur et l'atelier auto avec un rendu premium",
        "Rester rapide et lisible sur mobile pour les propriétaires de véhicules",
        "Convertir les visites en prises de contact WhatsApp directes",
      ],
    },
    solution: {
      en: "Designed a dark high-contrast automotive platform featuring an interactive hero slider, clear service navigation, and prominent WhatsApp booking triggers.",
      fr: "Conception d'une vitrine automobile sombre à fort contraste avec slider interactif, navigation services claire et bouton WhatsApp visible dès l'en-tête.",
    },
    features: {
      en: [
        "Interactive hero showcase slider",
        "ECU & automotive services presentation",
        "Dark luxury responsive interface",
        "Header WhatsApp & inquiry actions",
      ],
      fr: [
        "Slider vitrine interactif",
        "Présentation des prestations ECU & auto",
        "Interface sombre responsive",
        "Contact WhatsApp direct en en-tête",
      ],
    },
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
    highlights: {
      en: ["Automotive UI", "Quote Focused"],
      fr: ["Interface Auto", "Orienté Devis"],
    },
    gallery: ["/projects/customcar.jpg"],
    isPlaceholderImage: false,
  },
  {
    slug: "atlasquad",
    name: "AtlasQuad",
    featured: true,
    industry: {
      en: "Tourism & Excursions",
      fr: "Tourisme & Excursions",
    },
    image: "/projects/atlasquad.jpg",
    url: "https://atlasquad.com/",
    summary: {
      en: "Excursion website for Atlas Quad Palmeraie in Marrakech, presenting quad biking, Can-Am, motocross, and camel rides with mobile booking access.",
      fr: "Site touristique pour Atlas Quad Palmeraie à Marrakech, présentant les sorties en quad, Can-Am, motocross et balades à dos de chameau avec réservation directe.",
    },
    needs: {
      en: [
        "Present Marrakech outdoor adventures clearly to international travelers",
        "Stay fast and readable on mobile connections on the go",
        "Keep phone and WhatsApp reservation inquiries one tap away",
      ],
      fr: [
        "Présenter les excursions à Marrakech aux voyageurs internationaux",
        "Offrir une navigation rapide et fluide sur smartphone",
        "Rendre la réservation par téléphone ou WhatsApp immédiate",
      ],
    },
    solution: {
      en: "Delivered a responsive English-first tourism showcase organized around clear tour offerings, service highlights, and direct phone and WhatsApp booking prompts.",
      fr: "Réalisation d'une vitrine touristique responsive structurée autour des formules phares, informations pratiques et accès direct par téléphone et WhatsApp.",
    },
    features: {
      en: [
        "Tour & excursion showcase",
        "Mobile traveler usability",
        "Direct phone & WhatsApp booking",
        "Fast edge deployment",
      ],
      fr: [
        "Présentation des circuits et formules",
        "Navigation fluide sur smartphone",
        "Réservation directe téléphone & WhatsApp",
        "Hébergement edge rapide",
      ],
    },
    technologies: ["React", "Tailwind CSS", "Vercel"],
    highlights: {
      en: ["Tourism UX", "Direct Booking"],
      fr: ["UX Tourisme", "Réservation Directe"],
    },
    gallery: ["/projects/atlasquad.jpg"],
    isPlaceholderImage: false,
  },
  {
    slug: "eleva-design",
    name: "Eleva Design",
    featured: true,
    industry: {
      en: "Interior Architecture",
      fr: "Architecture Intérieure",
    },
    image: "/projects/eleva-design.jpg",
    url: "https://elevadesign.ma/",
    summary: {
      en: "Editorial showcase website for interior and exterior architecture studio Eleva Design in Casablanca and Morocco, featuring project galleries and quote requests.",
      fr: "Vitrine éditoriale pour le studio d'architecture intérieure et extérieure Eleva Design à Casablanca et au Maroc, avec galerie de projets et demande de devis.",
    },
    needs: {
      en: [
        "Reflect a refined architectural and home decor aesthetic online",
        "Present residential and commercial realizations cleanly",
        "Guide prospective clients toward bespoke quote requests and WhatsApp contact",
      ],
      fr: [
        "Refléter une esthétique architecturale soignée en ligne",
        "Mettre en scène les projets et aménagements avec sobriété",
        "Orienter les prospects vers la demande de devis et WhatsApp",
      ],
    },
    solution: {
      en: "Built a refined architectural layout combining full-bleed project imagery, serif editorial typography, structured services, and a dedicated quote request path.",
      fr: "Création d'une mise en page éditoriale associant visuels plein écran, typographie raffinée, services structurés et parcours de demande de devis.",
    },
    features: {
      en: [
        "Full-bleed architectural hero",
        "Curated portfolio & project gallery",
        "Dedicated quote request workflow",
        "Direct WhatsApp contact integration",
      ],
      fr: [
        "Hero architectural plein écran",
        "Galerie de réalisations structurée",
        "Parcours dédié à la demande de devis",
        "Intégration contact WhatsApp direct",
      ],
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: {
      en: ["Editorial Layout", "Interior Design"],
      fr: ["Direction Éditoriale", "Design d'Intérieur"],
    },
    gallery: ["/projects/eleva-design.jpg"],
    isPlaceholderImage: false,
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
