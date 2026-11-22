export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
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
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "combien-coute-creation-site-web-maroc",
    title: "Combien coûte la création d'un site web au Maroc ?",
    seoDescription:
      "Comprendre ce qui détermine le budget d'un site web au Maroc : site vitrine, boutique e-commerce, Next.js vs WordPress et critères à vérifier avant de signer un devis.",
    category: "Budget & Cadrage · Maroc",
    publishedAt: "2026-11-22",
    updatedAt: "2026-11-22",
    readingTime: "3 min",
    intro:
      "Comparer deux devis de création de site internet au Maroc uniquement sur le prix final mène souvent à des surprises : template peu personnalisé, lenteur sur mobile ou absence de bases SEO. Le coût réel dépend surtout du périmètre fonctionnel et du niveau d'accompagnement.",
    sections: [
      {
        heading: "1. Les trois grands types de projets web",
        paragraphs: [
          "Un site vitrine d'entreprise vise à présenter vos services clairement, inspirer confiance et déclencher des demandes via formulaire ou WhatsApp. C'est la base la plus adaptée aux cabinets, artisans, PME et sociétés de services.",
          "Une boutique e-commerce ajoute la gestion d'un catalogue, des fiches produits, du panier, des modes de paiement ou de livraison à la livraison et du suivi des commandes. Une application ou vitrine bilingue sur mesure (FR/EN) implique quant à elle un travail supplémentaire de structure et d'intégration.",
        ],
      },
      {
        heading: "2. Ce qui fait varier le devis d'un développeur web freelance",
        paragraphs: [
          "Au-delà du nombre de pages, plusieurs critères concrets expliquent l'écart entre une installation rapide et un site conçu pour durer :",
        ],
        bullets: [
          "Architecture technique : développement sur mesure Next.js / React pour la performance ou CMS WordPress / WooCommerce pour l'autonomie éditoriale",
          "Design UI et responsive : maquette pensée pour smartphone dès le départ plutôt qu'un thème générique non adapté",
          "Rédaction et structuration : organisation claire des titres, preuves clients et appels à l'action",
          "SEO technique de base : balises title/meta uniques, données structurées, sitemap.xml et optimisation des images",
        ],
      },
      {
        heading: "3. Éviter les coûts cachés après la mise en ligne",
        paragraphs: [
          "Avant de valider un prestataire à El Jadida, Casablanca, Agadir ou ailleurs au Maroc, vérifiez toujours à qui appartient le nom de domaine et l'hébergement, si le code source ou l'accès administrateur vous est remis, et comment sont gérées les futures mises à jour.",
        ],
      },
    ],
    relatedServiceSlug: "business-website-development",
    relatedServiceLabel: "Découvrir l'offre Création de Site Internet",
    relatedLandingHref: "/tarifs",
    relatedLandingLabel: "Voir les formules & devis sur mesure",
  },
  {
    slug: "site-vitrine-ou-ecommerce-lequel-choisir",
    title: "Site vitrine ou site e-commerce : lequel choisir pour votre activité ?",
    seoDescription:
      "Guide pratique pour choisir entre un site vitrine et une boutique e-commerce au Maroc et en France selon votre cycle de vente et votre logistique.",
    category: "Stratégie Web · Maroc & France",
    publishedAt: "2026-11-22",
    updatedAt: "2026-11-22",
    readingTime: "3 min",
    intro:
      "Lancer une boutique en ligne complète quand vos clients ont d'abord besoin d'un devis alourdit inutilement le projet. Inversement, se limiter à un formulaire quand vos produits peuvent s'acheter directement freine vos ventes.",
    sections: [
      {
        heading: "Quand privilégier un site vitrine orienté devis",
        paragraphs: [
          "Le site vitrine est le meilleur choix lorsque votre prestation dépend d'un besoin spécifique, d'un rendez-vous ou d'un accompagnement : santé, architecture d'intérieur, B2B, services automobiles ou tourisme sur mesure.",
        ],
        bullets: [
          "Objectif principal : qualifier les prospects et faciliter l'appel, l'email ou le message WhatsApp",
          "Contenu clé : présentation claire des services, réalisations concrètes, FAQ et preuves de sérieux",
          "Maintenance allégée sans gestion quotidienne de stocks ni retours colis",
        ],
      },
      {
        heading: "Quand investir dans un vrai site e-commerce",
        paragraphs: [
          "La boutique e-commerce devient pertinente dès que vous proposez des références standardisées avec prix fixes, variantes (taille, couleur, capacité) et expédition organisée.",
        ],
        bullets: [
          "Catalogue filtrable et recherche rapide sur mobile",
          "Panier simple et tunnel de commande sans friction",
          "Suivi des stocks et fiches produits structurées pour Google",
        ],
      },
      {
        heading: "L'approche hybride : commencer vitrine puis évoluer",
        paragraphs: [
          "Si vous lancez une nouvelle marque, il est souvent judicieux de démarrer avec une vitrine rapide présentant vos produits phares et un canal de commande directe, puis d'ajouter un catalogue e-commerce complet une fois la demande validée.",
        ],
      },
    ],
    relatedServiceSlug: "ecommerce",
    relatedServiceLabel: "Explorer le service Boutique E-commerce",
    relatedLandingHref: "/creation-site-web-maroc",
    relatedLandingLabel: "Création de site web au Maroc",
  },
  {
    slug: "pourquoi-choisir-nextjs-pour-site-web",
    title: "Pourquoi choisir Next.js pour un site web d'entreprise rapide et SEO-friendly ?",
    seoDescription:
      "Avantages concrets de Next.js face aux solutions classiques : temps de chargement mobile, Core Web Vitals, rendu serveur pour Google et flexibilité UI.",
    category: "Architecture & Performance",
    publishedAt: "2026-11-22",
    updatedAt: "2026-11-22",
    readingTime: "3 min",
    intro:
      "Le choix technique influence directement l'expérience mobile de vos visiteurs et la facilité avec laquelle Google explore vos pages. Voici pourquoi Next.js s'impose souvent pour les sites d'entreprise et vitrines exigeantes en France comme au Maroc.",
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
        heading: "3. Next.js ou WordPress : rester honnête sur le besoin",
        paragraphs: [
          "WordPress garde tout son sens si une équipe marketing doit publier plusieurs articles par semaine en totale autonomie via un back-office familier. Next.js excelle lorsque la priorité va au design sur mesure, à la sécurité sans plugins lourds et à la vitesse d'exécution.",
        ],
      },
    ],
    relatedServiceSlug: "maintenance-seo",
    relatedServiceLabel: "Voir le service Maintenance & SEO Technique",
    relatedLandingHref: "/creation-site-web-france",
    relatedLandingLabel: "Accompagnement Développeur Freelance France",
  },
  {
    slug: "comment-choisir-developpeur-web-freelance",
    title: "Comment choisir un développeur web freelance fiable pour votre projet ?",
    seoDescription:
      "Les critères concrets pour évaluer un développeur web indépendant en France ou au Maroc : réalisations en ligne, performance réelle, clarté du périmètre et propriété du site.",
    category: "Conseils Clients · France & Maroc",
    publishedAt: "2026-11-22",
    updatedAt: "2026-11-22",
    readingTime: "3 min",
    intro:
      "Travailler directement avec un développeur freelance évite les intermédiaires d'agence et accélère les échanges. Encore faut-il vérifier les bons signaux avant de confier l'image de votre entreprise.",
    sections: [
      {
        heading: "Vérifier des sites réellement en ligne, pas seulement des maquettes",
        paragraphs: [
          "Testez plusieurs projets livrés directement sur votre téléphone. Un vrai site en production révèle immédiatement si la mise en page reste propre, si les boutons fonctionnent et si la navigation charge sans lenteur.",
        ],
      },
      {
        heading: "Poser quatre questions techniques avant de démarrer",
        paragraphs: [
          "Un développeur sérieux saura vous répondre simplement sans jargon inutile :",
        ],
        bullets: [
          "Le nom de domaine et l'hébergement seront-ils enregistrés à votre nom ?",
          "Le site inclut-il un sitemap, des balises meta uniques et un affichage responsive vérifié ?",
          "Comment fonctionne la prise en charge des corrections et évolutions après le lancement ?",
          "Quelles étapes et quels livrables jalonnent le projet entre le brief initial et la mise en ligne ?",
        ],
      },
      {
        heading: "Privilégier la transparence sur le périmètre et le suivi",
        paragraphs: [
          "Un devis clair précise exactement les pages incluses, le délai estimé, les responsabilités de chacun (textes, visuels, intégration) et le canal de suivi direct durant la réalisation.",
        ],
      },
    ],
    relatedServiceSlug: "website-redesign",
    relatedServiceLabel: "Découvrir le service Refonte de Site Web",
    relatedLandingHref: "/contact",
    relatedLandingLabel: "Échanger directement sur votre projet",
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
