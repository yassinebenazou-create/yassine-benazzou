export type LocalizedText = {
  en: string;
  fr: string;
};

export type TechnicalHighlight = {
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  name: string;
  featured: boolean;
  projectType: LocalizedText;
  role: LocalizedText;
  industry: LocalizedText;
  metaTitle: string;
  seoDescription: string;
  image: string;
  url?: string;
  summary: LocalizedText;
  context: LocalizedText;
  needs: { en: string[]; fr: string[] };
  solution: LocalizedText;
  technicalHighlights: {
    en: TechnicalHighlight[];
    fr: TechnicalHighlight[];
  };
  features: { en: string[]; fr: string[] };
  deliverables: { en: string[]; fr: string[] };
  /** Only list technologies that are verified for this specific build */
  technologies: string[];
  /** Non-framework deliverable highlights shown alongside or when stack is not disclosed */
  highlights: { en: string[]; fr: string[] };
  gallery: string[];
  relatedServiceSlug: string;
  relatedSlugs: string[];
  isPlaceholderImage?: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "nutritionniste-agadir",
    name: "Nutritionniste Agadir",
    featured: true,
    projectType: {
      en: "Healthcare Business Website",
      fr: "Site Vitrine Santé",
    },
    role: {
      en: "Web Design, UX Structure & Development",
      fr: "Design Web, Architecture UX & Développement",
    },
    industry: {
      en: "Healthcare & Nutrition",
      fr: "Santé & Nutrition",
    },
    metaTitle: "Nutritionniste Agadir — Case Study | Yassine Benazzou",
    seoDescription:
      "Case study for Nutritionniste Agadir: mobile-first healthcare website for dietician Imane Oulhint with bilingual UX, patient FAQ, and WhatsApp booking.",
    image: "/projects/nutritionniste-agadir.jpg",
    url: "https://nutritionniste-agadir.com/",
    summary: {
      en: "Healthcare website for dietician-nutritionist Imane Oulhint in Agadir, presenting personalized nutrition programs, consultations, and direct appointment booking.",
      fr: "Site santé pour la diététicienne-nutritionniste Imane Oulhint à Agadir, présentant les programmes nutritionnels, consultations et prise de rendez-vous.",
    },
    context: {
      en: "Patients looking for a dietician in Agadir typically browse from their phone and need immediate reassurance about qualifications, consultation steps, and how to book. The website needed to present clinical services calmly while making direct appointment inquiries effortless.",
      fr: "Les patients qui recherchent une diététicienne à Agadir consultent majoritairement sur smartphone et cherchent rapidement des informations claires sur le déroulement des consultations. Le site devait inspirer une confiance immédiate et simplifier la prise de rendez-vous.",
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
    technicalHighlights: {
      en: [
        {
          title: "Patient-first visual hierarchy",
          detail: "Clean typography, balanced spacing, and clear consultation breakdown designed for reassuring readability on mobile and desktop.",
        },
        {
          title: "Direct appointment & WhatsApp flow",
          detail: "Prominent header and hero booking buttons paired with one-tap WhatsApp access to shorten the path from first visit to appointment request.",
        },
        {
          title: "Multilingual navigation & patient FAQ",
          detail: "Structured language selector and common patient questions to answer practical consultation inquiries upfront.",
        },
        {
          title: "Local SEO page structure",
          detail: "Semantic headings and Agadir service framing organized to help local patients identify the practice clearly.",
        },
      ],
      fr: [
        {
          title: "Hiérarchie visuelle rassurante",
          detail: "Typographie lisible, mise en page aérée et présentation structurée des consultations adaptées à la lecture mobile et ordinateur.",
        },
        {
          title: "Parcours rendez-vous & WhatsApp direct",
          detail: "Boutons de prise de rendez-vous visibles dès l'en-tête et accès WhatsApp en un clic pour faciliter le premier contact patient.",
        },
        {
          title: "Interface multilingue & FAQ patients",
          detail: "Sélecteur de langue et section FAQ dédiée pour répondre directement aux questions pratiques avant la consultation.",
        },
        {
          title: "Structure pensée pour le SEO local",
          detail: "Balisage sémantique propre et présentation claire du cabinet à Agadir pour orienter les recherches locales.",
        },
      ],
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
    deliverables: {
      en: [
        "Responsive multi-section healthcare website live at nutritionniste-agadir.com",
        "Clear consultation flow, patient FAQ, and multilingual switcher",
        "Direct appointment CTA and WhatsApp integration tested across viewports",
      ],
      fr: [
        "Site vitrine santé responsive en ligne sur nutritionniste-agadir.com",
        "Présentation structurée des soins, FAQ patients et sélecteur de langue",
        "Boutons de prise de rendez-vous et contact WhatsApp vérifiés mobile/desktop",
      ],
    },
    technologies: [],
    highlights: {
      en: ["Healthcare UX", "Appointment Flow", "Local SEO"],
      fr: ["UX Santé", "Prise de Rendez-vous", "SEO Local"],
    },
    gallery: ["/projects/nutritionniste-agadir.jpg"],
    relatedServiceSlug: "business-website-development",
    relatedSlugs: ["eleva-design", "atlasquad", "customcar"],
    isPlaceholderImage: false,
  },
  {
    slug: "gostostore",
    name: "Gosto Store",
    featured: true,
    projectType: {
      en: "E-commerce Storefront",
      fr: "Boutique E-commerce",
    },
    role: {
      en: "E-commerce UI Design & Storefront Build",
      fr: "Design E-commerce & Intégration Boutique",
    },
    industry: {
      en: "E-commerce & Mobility",
      fr: "E-commerce & Mobilité",
    },
    metaTitle: "Gosto Store — E-commerce Case Study | Yassine Benazzou",
    seoDescription:
      "Case study for Gosto Store: dark-contrast e-commerce platform in Morocco for electric mobility with category navigation, cart, wishlist, and WhatsApp help.",
    image: "/projects/gostostore.jpg",
    url: "https://gostostore.online/",
    summary: {
      en: "Online store in Morocco specializing in electric bikes, electric motorcycles, scooters, strollers, and trampolines with catalog navigation and WhatsApp support.",
      fr: "Boutique e-commerce au Maroc dédiée aux motos, vélos, voitures électriques, trottinettes et loisirs, avec navigation par catégories et commande rapide.",
    },
    context: {
      en: "Selling diverse physical mobility products across Morocco requires clear category discovery, immediate reassurance on nationwide delivery, and quick human assistance for buyers comparing technical specs on mobile.",
      fr: "Vendre des gammes variées de mobilité électrique partout au Maroc demande un catalogue immédiatement lisible, une mise en avant claire de la livraison et un support direct pour accompagner les acheteurs sur mobile.",
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
    technicalHighlights: {
      en: [
        {
          title: "Structured multi-category navigation",
          detail: "Dedicated header taxonomy covering electric motorcycles, e-bikes, scooters, kids' electric vehicles, strollers, and trampolines.",
        },
        {
          title: "High-contrast storefront UI",
          detail: "Dark editorial product framing with strong red action triggers that keep product silhouettes and order CTAs immediately scannable.",
        },
        {
          title: "Search, wishlist & cart accessibility",
          detail: "Persistent shopping controls paired with a top reassurance bar displaying Morocco delivery terms and direct phone support.",
        },
        {
          title: "WhatsApp-assisted ordering",
          detail: "Floating WhatsApp shortcut allowing shoppers to ask pre-purchase questions directly from product or collection pages.",
        },
      ],
      fr: [
        {
          title: "Navigation catalogue multi-catégories",
          detail: "Menu structuré par familles de produits (motos, vélos, voitures électriques, trottinettes, poussettes et trampolines) pour accéder vite aux fiches.",
        },
        {
          title: "Interface marchande à fort contraste",
          detail: "Mise en scène sombre et appels à l'action contrastés pour faire ressortir les visuels produits et guider vers la commande.",
        },
        {
          title: "Recherche, favoris & panier accessibles",
          detail: "Outils e-commerce regroupés dans l'en-tête avec bandeau d'information sur la livraison au Maroc et le numéro direct.",
        },
        {
          title: "Assistance commande via WhatsApp",
          detail: "Bouton WhatsApp intégré pour lever rapidement les doutes sur les modèles ou la livraison depuis smartphone.",
        },
      ],
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
    deliverables: {
      en: [
        "Live multi-category e-commerce store at gostostore.online",
        "Catalog navigation, hero collection switcher, search, wishlist, and cart UI",
        "Mobile shopping layout with direct phone and WhatsApp order assistance",
      ],
      fr: [
        "Boutique e-commerce en ligne sur gostostore.online",
        "Architecture multi-catégories, recherche, favoris, panier et vitrine hero",
        "Expérience mobile et support commande direct par téléphone et WhatsApp",
      ],
    },
    technologies: [],
    highlights: {
      en: ["E-commerce UI", "Product Catalog", "Mobile Shopping"],
      fr: ["Interface E-commerce", "Catalogue Produits", "Achat Mobile"],
    },
    gallery: ["/projects/gostostore.jpg"],
    relatedServiceSlug: "ecommerce",
    relatedSlugs: ["customcar", "eleva-design", "nutritionniste-agadir"],
    isPlaceholderImage: false,
  },
  {
    slug: "customcar",
    name: "Customcar",
    featured: true,
    projectType: {
      en: "Next.js Showcase Website",
      fr: "Site Vitrine Next.js",
    },
    role: {
      en: "Next.js Front-End Development & UI Design",
      fr: "Développement Next.js & Design UI",
    },
    industry: {
      en: "Automotive Performance",
      fr: "Performance Automobile",
    },
    metaTitle: "Customcar — Next.js Automotive Case Study | Yassine B.",
    seoDescription:
      "Case study for Customcar: dark automotive performance showcase built with Next.js and Tailwind CSS featuring an interactive slider and WhatsApp booking.",
    image: "/projects/customcar.jpg",
    url: "https://customcar.ma/",
    summary: {
      en: "Premium automotive studio website showcasing ECU engine remapping and custom performance services with dark-luxury UI and direct WhatsApp contact.",
      fr: "Site vitrine automobile haut de gamme présentant la reprogrammation moteur sur mesure (ECU Performance) avec interface sombre et contact WhatsApp direct.",
    },
    context: {
      en: "An automotive performance specialist offering ECU remapping and custom upgrades needs a visual presence that reflects technical precision while letting vehicle owners ask for compatibility and quotes immediately from their phone.",
      fr: "Un atelier spécialisé en reprogrammation moteur (ECU) et préparation automobile a besoin d'une vitrine à la hauteur de son exigence technique, tout en permettant aux conducteurs de demander rapidement un devis sur mobile.",
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
    technicalHighlights: {
      en: [
        {
          title: "Next.js & Tailwind CSS architecture",
          detail: "Component-driven Next.js build styled with Tailwind CSS for clean layout responsiveness, sharp visual hierarchy, and maintainability.",
        },
        {
          title: "Interactive hero service slider",
          detail: "Multi-slide hero presentation highlighting core ECU performance and automotive offerings right above the fold.",
        },
        {
          title: "Persistent header WhatsApp conversion path",
          detail: "Direct WhatsApp phone action integrated in the top navigation bar so drivers can inquire about their vehicle model in one tap.",
        },
        {
          title: "Responsive dark-mode UI system",
          detail: "High-contrast typography and spacing calibrated for crisp readability across mobile, tablet, and desktop screens.",
        },
      ],
      fr: [
        {
          title: "Architecture Next.js & Tailwind CSS",
          detail: "Développement modulaire sous Next.js et Tailwind CSS offrant une interface réactive, maintenable et cohérente sur chaque écran.",
        },
        {
          title: "Slider hero interactif dédié aux prestations",
          detail: "Mise en valeur immédiate de la cartographie moteur et des services spécialisés dès le premier écran.",
        },
        {
          title: "Bouton WhatsApp intégré en en-tête",
          detail: "Accès direct au numéro WhatsApp dans la barre de navigation pour accélérer les demandes de devis par modèle de véhicule.",
        },
        {
          title: "Direction visuelle sombre à fort contraste",
          detail: "Typographie affirmée et contrastes soignés garantissant une lecture confortable sur smartphone comme sur grand écran.",
        },
      ],
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
    deliverables: {
      en: [
        "Live Next.js & Tailwind CSS website at customcar.ma",
        "Interactive hero showcase, structured services & works sections",
        "Responsive mobile-to-desktop layout with direct WhatsApp contact triggers",
      ],
      fr: [
        "Site vitrine Next.js & Tailwind CSS en ligne sur customcar.ma",
        "Slider hero interactif et sections structurées services / réalisations",
        "Interface responsive complète avec accès contact WhatsApp immédiat",
      ],
    },
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
    highlights: {
      en: ["Automotive UI", "Quote Focused"],
      fr: ["Interface Auto", "Orienté Devis"],
    },
    gallery: ["/projects/customcar.jpg"],
    relatedServiceSlug: "business-website-development",
    relatedSlugs: ["eleva-design", "gostostore", "atlasquad"],
    isPlaceholderImage: false,
  },
  {
    slug: "atlasquad",
    name: "AtlasQuad",
    featured: true,
    projectType: {
      en: "Tourism & Booking Showcase",
      fr: "Site Vitrine Tourisme",
    },
    role: {
      en: "React Front-End Development & UI Design",
      fr: "Développement React & Design UI",
    },
    industry: {
      en: "Tourism & Excursions",
      fr: "Tourisme & Excursions",
    },
    metaTitle: "AtlasQuad — React Tourism Case Study | Yassine Benazzou",
    seoDescription:
      "Case study for AtlasQuad Palmeraie in Marrakech: fast React and Tailwind CSS excursion site deployed on Vercel with direct phone and WhatsApp booking.",
    image: "/projects/atlasquad.jpg",
    url: "https://atlasquad.com/",
    summary: {
      en: "Excursion website for Atlas Quad Palmeraie in Marrakech, presenting quad biking, Can-Am, motocross, and camel rides with mobile booking access.",
      fr: "Site touristique pour Atlas Quad Palmeraie à Marrakech, présentant les sorties en quad, Can-Am, motocross et balades à dos de chameau avec réservation directe.",
    },
    context: {
      en: "Travelers searching for Marrakech desert and palm-grove excursions compare operators on mobile connections while planning trips or already in the city. The site needed clear tour framing and instant phone/WhatsApp reservation access.",
      fr: "Les voyageurs qui préparent une excursion à Marrakech comparent les prestataires depuis leur téléphone, souvent sur connexion mobile. Le site devait présenter clairement les activités et rendre la réservation immédiate.",
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
    technicalHighlights: {
      en: [
        {
          title: "React, Tailwind CSS & Vercel deployment",
          detail: "Lightweight React front-end built with Tailwind CSS and served via Vercel's global edge network for snappy loading across international visitor regions.",
        },
        {
          title: "International traveler-friendly layout",
          detail: "Clear English-first copy, direct tour navigation (Home, Tours, Services, Contact, About Us), and high-contrast hero imagery.",
        },
        {
          title: "One-tap phone & WhatsApp reservation access",
          detail: "Header phone CTA paired with a persistent WhatsApp inquiry button so travelers can confirm availability without friction.",
        },
        {
          title: "Clean mobile responsiveness",
          detail: "Touch-ready layout adapting cleanly from small smartphone screens to desktop viewports.",
        },
      ],
      fr: [
        {
          title: "Stack React, Tailwind CSS & hébergement Vercel",
          detail: "Front-end React léger stylé avec Tailwind CSS et déployé sur le réseau edge Vercel pour un affichage rapide à l'international.",
        },
        {
          title: "Structure adaptée aux voyageurs internationaux",
          detail: "Contenu orienté clientèle internationale, navigation directe vers les circuits et visuel hero immersif.",
        },
        {
          title: "Réservation rapide par téléphone et WhatsApp",
          detail: "Numéro cliquable dans l'en-tête et accès WhatsApp visible en permanence pour faciliter la confirmation des créneaux.",
        },
        {
          title: "Ergonomie mobile soignée",
          detail: "Mise en page pensée pour les écrans tactiles afin de consulter les circuits confortablement en déplacement.",
        },
      ],
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
    deliverables: {
      en: [
        "Live React & Tailwind CSS website deployed on Vercel at atlasquad.com",
        "Structured tours, services, and about sections tailored for travelers",
        "Mobile-ready direct phone and WhatsApp booking triggers",
      ],
      fr: [
        "Site React & Tailwind CSS en ligne sur Vercel via atlasquad.com",
        "Présentation claire des circuits, activités et informations pratiques",
        "Boutons directs téléphone et WhatsApp testés sur mobile et ordinateur",
      ],
    },
    technologies: ["React", "Tailwind CSS", "Vercel"],
    highlights: {
      en: ["Tourism UX", "Direct Booking"],
      fr: ["UX Tourisme", "Réservation Directe"],
    },
    gallery: ["/projects/atlasquad.jpg"],
    relatedServiceSlug: "responsive-web-design",
    relatedSlugs: ["nutritionniste-agadir", "eleva-design", "customcar"],
    isPlaceholderImage: false,
  },
  {
    slug: "eleva-design",
    name: "Eleva Design",
    featured: true,
    projectType: {
      en: "Next.js Editorial Website",
      fr: "Site Vitrine Éditorial Next.js",
    },
    role: {
      en: "Next.js TypeScript Development & Editorial UI",
      fr: "Développement Next.js TypeScript & Direction UI",
    },
    industry: {
      en: "Interior Architecture",
      fr: "Architecture Intérieure",
    },
    metaTitle: "Eleva Design — Architecture Case Study | Yassine B.",
    seoDescription:
      "Case study for Eleva Design: Next.js, TypeScript, and Tailwind CSS architectural showcase in Morocco with editorial typography, galleries, and quote flow.",
    image: "/projects/eleva-design.jpg",
    url: "https://elevadesign.ma/",
    summary: {
      en: "Editorial showcase website for interior and exterior architecture studio Eleva Design in Casablanca and Morocco, featuring project galleries and quote requests.",
      fr: "Vitrine éditoriale pour le studio d'architecture intérieure et extérieure Eleva Design à Casablanca et au Maroc, avec galerie de projets et demande de devis.",
    },
    context: {
      en: "An interior and exterior architecture studio wins client trust through visual restraint, photography presentation, and clarity of execution. Eleva Design needed an editorial website capable of framing residential and commercial work cleanly while guiding prospects to a quote request.",
      fr: "Un studio d'architecture intérieure et extérieure convainc par la sobriété de sa mise en scène, la qualité visuelle de ses réalisations et la clarté de son accompagnement. Eleva Design avait besoin d'une vitrine éditoriale structurée autour de ses projets et de la demande de devis.",
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
    technicalHighlights: {
      en: [
        {
          title: "Next.js, TypeScript & Tailwind CSS codebase",
          detail: "Type-safe Next.js front-end structured for clean component reuse across project showcases, service views, and quote intake.",
        },
        {
          title: "Editorial visual framing",
          detail: "Full-bleed architectural hero imagery paired with serif display typography and uncluttered spacing that lets project photography lead.",
        },
        {
          title: "Curated realizations & services architecture",
          detail: "Clear navigation separating Projects, Realizations, About, Services, and Quote Requests so visitors browse naturally.",
        },
        {
          title: "Direct quote & WhatsApp conversion flow",
          detail: "Dedicated quote entry point in the navigation complemented by quick WhatsApp access on mobile and desktop.",
        },
      ],
      fr: [
        {
          title: "Base technique Next.js, TypeScript & Tailwind CSS",
          detail: "Architecture typée et modulaire sous Next.js facilitant la cohérence entre galeries de projets, services et formulaires.",
        },
        {
          title: "Mise en scène éditoriale soignée",
          detail: "Visuels architecturaux plein écran associés à une typographie serif élégante mettant les réalisations au premier plan.",
        },
        {
          title: "Navigation structurée par parcours client",
          detail: "Rubriques claires (Projets, Nos Réalisations, À Propos, Services, Demande de Devis) facilitant la découverte de l'offre.",
        },
        {
          title: "Double canal demande de devis & WhatsApp",
          detail: "Accès direct à la demande de devis depuis le menu principal et bouton WhatsApp intégré pour les échanges rapides.",
        },
      ],
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
    deliverables: {
      en: [
        "Live Next.js & TypeScript architectural site at elevadesign.ma",
        "Editorial hero, project galleries, structured services, and quote request page",
        "Responsive multi-device experience with direct WhatsApp contact option",
      ],
      fr: [
        "Site éditorial Next.js & TypeScript en ligne sur elevadesign.ma",
        "Hero plein écran, galeries de réalisations, services et page demande de devis",
        "Interface responsive multi-écrans avec accès WhatsApp direct",
      ],
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: {
      en: ["Editorial Layout", "Interior Design"],
      fr: ["Direction Éditoriale", "Design d'Intérieur"],
    },
    gallery: ["/projects/eleva-design.jpg"],
    relatedServiceSlug: "business-website-development",
    relatedSlugs: ["customcar", "nutritionniste-agadir", "gostostore"],
    isPlaceholderImage: false,
  },
];

// Preserved secondary entries so existing `/realisations/[slug]` routes continue to resolve
export const additionalProjects: Project[] = [
  {
    slug: "dentalclinick",
    name: "DentalClinick",
    featured: false,
    projectType: {
      en: "Studio Healthcare Concept",
      fr: "Concept Studio Santé",
    },
    role: {
      en: "Concept Architecture & WordPress SEO Blueprint",
      fr: "Architecture Concept & Structure WordPress SEO",
    },
    industry: {
      en: "Healthcare / Dental",
      fr: "Santé & Dentaire",
    },
    metaTitle: "DentalClinick — Studio Concept Study | Yassine Benazzou",
    seoDescription:
      "Studio concept case study for DentalClinick: structured WordPress clinic blueprint with treatment breakdowns, patient FAQ, and responsive booking layout.",
    image: "/projects/dentalclinick.svg",
    summary: {
      en: "Clean clinic concept structured to reassure patients, clarify dental care, and simplify appointment inquiries.",
      fr: "Concept pour cabinet dentaire conçu pour rassurer les patients, clarifier les soins et simplifier les rendez-vous.",
    },
    context: {
      en: "Created as an internal sector concept demonstrating how a dental practice website can organize treatments, hygiene reassurance, and appointment booking cleanly without cluttered medical jargon.",
      fr: "Conçu comme concept sectoriel interne pour illustrer comment un cabinet dentaire peut structurer ses soins, rassurer les patients et fluidifier la prise de rendez-vous sans surcharge visuelle.",
    },
    needs: {
      en: ["Clarify available treatments", "Build patient confidence", "Simplify contact flow"],
      fr: ["Clarifier les soins proposés", "Rassurer les visiteurs", "Simplifier la prise de rendez-vous"],
    },
    solution: {
      en: "Structured clinic overview with treatment sections, patient FAQ, and visible booking buttons.",
      fr: "Structure claire avec présentation du cabinet, soins, FAQ et boutons de contact accessibles.",
    },
    technicalHighlights: {
      en: [
        {
          title: "WordPress content-ready blueprint",
          detail: "Modular section layout conceived for clinic teams who want straightforward editing of care pages and hours.",
        },
        {
          title: "Technical SEO heading hierarchy",
          detail: "Logical page architecture organizing dental treatments, FAQs, and contact details for clean search indexation.",
        },
        {
          title: "Responsive appointment prompts",
          detail: "Accessible call-to-action placement calibrated for mobile visitors searching for urgent or routine appointments.",
        },
      ],
      fr: [
        {
          title: "Structure pensée pour WordPress",
          detail: "Découpage modulaire permettant à un cabinet de mettre à jour ses soins et horaires simplement.",
        },
        {
          title: "Hiérarchie SEO technique claire",
          detail: "Organisation sémantique des pages soins, FAQ patients et coordonnées pour faciliter l'indexation locale.",
        },
        {
          title: "Boutons de rendez-vous accessibles sur mobile",
          detail: "Appels à l'action visibles dès les premiers écrans pour simplifier la prise de contact depuis smartphone.",
        },
      ],
    },
    features: {
      en: ["Clinic overview", "Treatment breakdown", "Patient FAQ", "Responsive layout"],
      fr: ["Présentation cabinet", "Détail des soins", "FAQ patients", "Design responsive"],
    },
    deliverables: {
      en: [
        "Reference clinic wireframes & treatment section architecture (studio concept)",
        "Patient FAQ structure and mobile-first contact flow",
      ],
      fr: [
        "Architecture de référence et découpage des soins (concept studio)",
        "Structure FAQ patients et parcours de prise de rendez-vous mobile-first",
      ],
    },
    technologies: ["WordPress", "Technical SEO", "Responsive Design"],
    highlights: {
      en: ["Healthcare Concept"],
      fr: ["Concept Santé"],
    },
    gallery: ["/projects/dentalclinick.svg"],
    relatedServiceSlug: "business-website-development",
    relatedSlugs: ["nutritionniste-agadir", "decoazan"],
    isPlaceholderImage: true,
  },
  {
    slug: "decoazan",
    name: "DecoAzan",
    featured: false,
    projectType: {
      en: "Studio Showcase Concept",
      fr: "Concept Vitrine Studio",
    },
    role: {
      en: "Concept UI & Next.js Local SEO Blueprint",
      fr: "Direction UI & Structure Next.js SEO Local",
    },
    industry: {
      en: "Decoration & Craft",
      fr: "Décoration & Artisanat",
    },
    metaTitle: "DecoAzan — Craft Showcase Concept | Yassine Benazzou",
    seoDescription:
      "Studio concept case study for DecoAzan: Next.js and Tailwind CSS decor showcase blueprint highlighting collections, workshop story, and custom quote flow.",
    image: "/projects/decoazan.svg",
    summary: {
      en: "Showcase site concept for a decor and craft studio highlighting collections and direct custom quote requests.",
      fr: "Concept vitrine pour une marque de décoration mettant en valeur ses collections et la demande de devis.",
    },
    context: {
      en: "Built as an internal portfolio concept showing how an artisan decor brand can present handcrafted collections visually and route bespoke inquiries cleanly without running a heavy e-commerce backend.",
      fr: "Conçu comme concept vitrine interne pour illustrer comment une marque d'artisanat et de décoration peut valoriser ses pièces sur mesure et capter des demandes de devis sans boutique complexe.",
    },
    needs: {
      en: ["Present handcrafted pieces", "Communicate style clearly", "Capture custom quote briefs"],
      fr: ["Présenter les créations", "Valoriser l'identité visuelle", "Recevoir des demandes de devis"],
    },
    solution: {
      en: "Clean showcase with curated collections, workshop story, and straightforward contact paths.",
      fr: "Vitrine épurée avec galeries de créations, présentation de l'atelier et contact rapide.",
    },
    technicalHighlights: {
      en: [
        {
          title: "Next.js & Tailwind CSS gallery structure",
          detail: "Clean collection grid blueprint optimized for fast browsing of handcrafted pieces across mobile and desktop.",
        },
        {
          title: "Local SEO & craft storytelling layout",
          detail: "Dedicated workshop story and collection framing designed for organic discovery.",
        },
        {
          title: "Direct custom quote path",
          detail: "Streamlined brief entry for clients requesting made-to-measure dimensions or materials.",
        },
      ],
      fr: [
        {
          title: "Structure galerie Next.js & Tailwind CSS",
          detail: "Grille épurée pensée pour parcourir rapidement les collections sur mobile comme sur ordinateur.",
        },
        {
          title: "Mise en valeur atelier & SEO local",
          detail: "Section dédiée au savoir-faire et aux collections pour renforcer la crédibilité organique.",
        },
        {
          title: "Parcours demande de devis sur mesure",
          detail: "Formulaire ciblé pour les clients souhaitant commander des pièces ou dimensions personnalisées.",
        },
      ],
    },
    features: {
      en: ["Collection showcase", "Product highlights", "Quote form flow", "Mobile responsive"],
      fr: ["Catalogue visuel", "Focus collections", "Formulaire de devis", "Affichage mobile"],
    },
    deliverables: {
      en: [
        "Reference decor showcase layout and collection architecture (studio concept)",
        "Responsive craft storytelling and quote request blueprint",
      ],
      fr: [
        "Maquette vitrine décoration et architecture collections (concept studio)",
        "Parcours présentation atelier et demande de devis responsive",
      ],
    },
    technologies: ["Next.js", "Tailwind CSS", "Local SEO"],
    highlights: {
      en: ["Craft Showcase"],
      fr: ["Vitrine Artisanat"],
    },
    gallery: ["/projects/decoazan.svg"],
    relatedServiceSlug: "responsive-web-design",
    relatedSlugs: ["eleva-design", "dentalclinick"],
    isPlaceholderImage: true,
  },
];

export const projects: Project[] = [...featuredProjects, ...additionalProjects];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
