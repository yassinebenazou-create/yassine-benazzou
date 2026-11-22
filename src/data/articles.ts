export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  seoDescription: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  intro: string;
  sections: BlogSection[];
  relatedServiceSlug: string;
  relatedServiceLabel: string;
  relatedLandingHref: string;
  relatedLandingLabel: string;
  secondaryLandingHref: string;
  secondaryLandingLabel: string;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "combien-coute-creation-site-web-maroc",
    title: "Combien coûte la création d'un site web au Maroc ?",
    metaTitle: "Prix Création Site Web Maroc | Yassine Benazzou",
    seoDescription:
      "Comprendre le prix création site web Maroc et tarif création site web Maroc : Next.js ou WordPress, critères techniques et devis création site web Maroc.",
    category: "Budget & Cadrage · Maroc",
    publishedAt: "2026-11-22",
    updatedAt: "2026-11-22",
    readingTime: "3 min",
    intro:
      "Évaluer le prix d'une création de site web au Maroc uniquement sur le montant le plus bas conduit souvent à des blocages : modèle figé, lenteur sur smartphone ou absence de bases SEO. Le tarif réel dépend surtout du périmètre fonctionnel, de la technologie choisie et du suivi.",
    sections: [
      {
        heading: "1. Les trois grands types de projets web au Maroc",
        paragraphs: [
          "Un site vitrine d'entreprise vise à présenter vos services clairement, inspirer confiance et déclencher des demandes via formulaire ou WhatsApp. C'est le format le plus adapté aux cabinets, PME, artisans et sociétés de services.",
          "Une boutique e-commerce ajoute la gestion d'un catalogue, des fiches produits, du panier et du suivi des commandes. Une vitrine bilingue FR/EN sur mesure implique quant à elle une structure et une intégration éditoriale dédiées.",
        ],
      },
      {
        heading: "2. Ce qui influence le tarif d'une création de site web au Maroc",
        paragraphs: [
          "Au-delà du nombre de pages, plusieurs éléments concrets expliquent les écarts entre un simple template et un site conçu pour durer :",
        ],
        bullets: [
          "Architecture technique : développement sur mesure Next.js / React pour la vitesse et le SEO, ou CMS WordPress / WooCommerce pour l'autonomie éditoriale",
          "Design UI et responsive : interface pensée pour mobile dès la conception plutôt qu'un thème standardisé peu lisible",
          "Structuration des messages : hiérarchie claire des titres, preuves clients et appels à l'action",
          "SEO technique de base : balises title et meta uniques, données structurées, sitemap.xml et optimisation des images",
        ],
      },
      {
        heading: "3. Pourquoi les solutions ultra-économiques coûtent souvent plus cher à terme",
        paragraphs: [
          "Un site bâclé sur un modèle pré-construit ou surchargé d'extensions s'avère difficile à faire évoluer, peine à se charger sur 4G et oblige fréquemment à financer une refonte complète quelques mois plus tard. Mieux vaut partir d'un devis création site web Maroc clair, proportionné à vos objectifs réels.",
          "Avant de valider un prestataire à El Jadida, Casablanca, Agadir ou ailleurs au Maroc, vérifiez toujours à qui appartient le nom de domaine et l'hébergement, si les accès complets vous sont remis et comment sont encadrées les évolutions futures.",
        ],
      },
    ],
    relatedServiceSlug: "business-website-development",
    relatedServiceLabel: "Découvrir l'offre Création de Site Internet",
    relatedLandingHref: "/creation-site-web-maroc",
    relatedLandingLabel: "Création site web Maroc",
    secondaryLandingHref: "/devis",
    secondaryLandingLabel: "Estimer votre budget (/devis)",
  },
  {
    slug: "site-vitrine-ou-ecommerce-lequel-choisir",
    title: "Site vitrine ou site e-commerce : lequel choisir pour votre activité ?",
    metaTitle: "Site Vitrine ou E-commerce | Yassine Benazzou",
    seoDescription:
      "Guide pratique pour choisir entre création site vitrine et création site e-commerce au Maroc ou en France selon votre cycle de vente et logistique.",
    category: "Stratégie Web · Maroc & France",
    publishedAt: "2026-11-22",
    updatedAt: "2026-11-22",
    readingTime: "3 min",
    intro:
      "Lancer une boutique en ligne complète quand vos clients ont d'abord besoin d'un devis alourdit inutilement le projet. Inversement, se limiter à un formulaire quand vos produits peuvent s'acheter directement freine vos ventes.",
    sections: [
      {
        heading: "Quand privilégier la création d'un site vitrine",
        paragraphs: [
          "Le site vitrine reste le meilleur choix lorsque votre prestation dépend d'un besoin précis, d'un rendez-vous ou d'une étude sur mesure : santé, architecture d'intérieur, services B2B, préparation automobile ou tourisme.",
        ],
        bullets: [
          "Objectif principal : qualifier les prospects et faciliter le contact par formulaire, appel ou WhatsApp",
          "Contenu clé : présentation claire des services, réalisations vérifiables, FAQ et preuves concrètes",
          "Maintenance allégée sans gestion quotidienne de stocks ni logistique colis",
        ],
      },
      {
        heading: "Quand investir dans un site e-commerce complet",
        paragraphs: [
          "La boutique e-commerce devient pertinente dès que vous proposez des références standardisées avec prix fixes, variantes (taille, couleur, capacité) et expédition structurée.",
        ],
        bullets: [
          "Catalogue filtrable et recherche rapide sur mobile",
          "Panier simple et tunnel de commande sans friction",
          "Suivi des stocks et fiches produits structurées pour les moteurs de recherche",
        ],
      },
      {
        heading: "L'approche progressive : vitrine puis boutique",
        paragraphs: [
          "Pour une nouvelle marque au Maroc ou en France, démarrer avec une vitrine rapide présentant vos offres phares et un canal de commande directe permet de valider la demande avant d'ajouter un module e-commerce complet.",
        ],
      },
    ],
    relatedServiceSlug: "ecommerce",
    relatedServiceLabel: "Explorer le service Boutique E-commerce",
    relatedLandingHref: "/creation-site-web-maroc",
    relatedLandingLabel: "Création site web Maroc",
    secondaryLandingHref: "/creation-site-web-france",
    secondaryLandingLabel: "Développeur web freelance France",
  },
  {
    slug: "pourquoi-choisir-nextjs-pour-site-web",
    title: "Pourquoi choisir Next.js pour un site web d'entreprise rapide et SEO-friendly ?",
    metaTitle: "Pourquoi Choisir Next.js SEO | Yassine Benazzou",
    seoDescription:
      "Avantages concrets d'un développeur Next.js freelance : temps de chargement mobile, Core Web Vitals, rendu serveur pour Google et comparaison WordPress.",
    category: "Architecture & Performance",
    publishedAt: "2026-11-22",
    updatedAt: "2026-11-22",
    readingTime: "3 min",
    intro:
      "Le choix technique influence directement l'expérience mobile de vos visiteurs et la facilité avec laquelle Google explore vos pages. Voici pourquoi Next.js s'impose souvent pour les sites professionnels en France comme au Maroc.",
    sections: [
      {
        heading: "1. Des pages servies en HTML prêt à l'indexation",
        paragraphs: [
          "Contrairement à une application React purement côté client, Next.js génère des pages statiques ou rendues côté serveur. Dès la première requête, Googlebot reçoit le titre, les balises meta, les données structurées Schema.org et le contenu complet.",
        ],
      },
      {
        heading: "2. Core Web Vitals et expérience sur réseau mobile",
        paragraphs: [
          "Entre la conversion automatique des images en formats modernes (AVIF/WebP), le découpage intelligent du JavaScript et le contrôle fin des polices, Next.js permet d'atteindre des chargements rapides même sur une connexion 4G moyenne.",
        ],
      },
      {
        heading: "3. Next.js ou WordPress : choisir selon le besoin réel",
        paragraphs: [
          "WordPress garde tout son sens si une équipe marketing doit publier plusieurs articles par semaine en totale autonomie via un back-office familier. Next.js excelle lorsque la priorité va au design sur mesure, à la sécurité sans empilement d'extensions et à la vitesse d'exécution.",
        ],
      },
    ],
    relatedServiceSlug: "maintenance-seo",
    relatedServiceLabel: "Voir le service Maintenance & SEO Technique",
    relatedLandingHref: "/creation-site-web-france",
    relatedLandingLabel: "Développeur freelance France",
    secondaryLandingHref: "/services",
    secondaryLandingLabel: "Tous les services web",
  },
  {
    slug: "comment-choisir-developpeur-web-freelance",
    title: "Comment choisir un développeur web freelance et combien coûte un site professionnel ?",
    metaTitle: "Tarif & Développeur Freelance | Yassine Benazzou",
    seoDescription:
      "Comment évaluer un développeur web freelance, comparer le taux horaire développeur web freelance au forfait et savoir combien coûte un site internet.",
    category: "Conseils & Tarifs · France & Maroc",
    publishedAt: "2026-11-22",
    updatedAt: "2026-11-22",
    readingTime: "3 min",
    intro:
      "Travailler directement avec un développeur web freelance évite les intermédiaires et accélère chaque validation. Encore faut-il comprendre comment sont structurés les tarifs et quels points techniques vérifier avant de confier votre projet.",
    sections: [
      {
        heading: "1. Taux horaire, TJM ou forfait : combien coûte un site internet professionnel ?",
        paragraphs: [
          "En France comme à l'international, deux modes de facturation coexistent : le taux horaire (ou tarif journalier moyen) adapté aux missions évolutives ou au renfort technique React / Next.js, et le devis au forfait calé sur des livrables précis pour un site vitrine ou une refonte.",
          "Combien coûte un site internet professionnel au final ? Le budget suit directement l'ampleur réelle du projet : architecture de l'information, niveau de design sur mesure, nombre de gabarits de pages, intégration bilingue et exigences de performance.",
        ],
      },
      {
        heading: "2. Vérifier des sites réellement en ligne avant de décider",
        paragraphs: [
          "Testez plusieurs réalisations publiées directement sur votre smartphone. Un vrai site en production montre immédiatement si la mise en page reste lisible, si les formulaires répondent vite et si les images chargent proprement.",
        ],
      },
      {
        heading: "3. Quatre questions essentielles à poser avant le devis",
        paragraphs: [
          "Un développeur indépendant transparent répond clairement sans jargon inutile :",
        ],
        bullets: [
          "Le nom de domaine et l'hébergement sont-ils enregistrés directement au nom de votre entreprise ?",
          "Le périmètre inclut-il sitemap.xml, balises meta uniques et responsive vérifié mobile/desktop ?",
          "Travaillez-vous au forfait par jalons validés ou au taux horaire développeur web freelance pour les évolutions ?",
          "Comment s'organise la prise en charge technique et la maintenance après la mise en ligne ?",
        ],
      },
    ],
    relatedServiceSlug: "website-redesign",
    relatedServiceLabel: "Découvrir le service Refonte de Site Web",
    relatedLandingHref: "/creation-site-web-france",
    relatedLandingLabel: "Développeur web freelance France",
    secondaryLandingHref: "/devis",
    secondaryLandingLabel: "Simulateur de devis (MAD / EUR)",
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
