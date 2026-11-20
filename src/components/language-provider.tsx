"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "fr";

const STORAGE_KEY = "site-language";

export const languageOptions: {
  code: Language;
  label: string;
  name: string;
  htmlLang: string;
}[] = [
  { code: "en", label: "EN", name: "English", htmlLang: "en" },
  { code: "fr", label: "FR", name: "Français", htmlLang: "fr" },
];

export const translations = {
  en: {
    nav: {
      projects: "Work",
      services: "Services",
      process: "Process",
      faq: "FAQ",
      letsTalk: "Book a Project Call",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageAria: "Switch language",
    },
    hero: {
      available: "Available for freelance projects",
      location: "Morocco · Worldwide",
      identity: "Yassine Benazzou · Freelance Web Developer & Designer Morocco",
      headline: "Freelance Web Developer Building Business Websites in Morocco.",
      description:
        "I provide professional website design and Next.js development for small businesses and founders in Morocco and worldwide.",
      primaryCta: "Request a Website Quote",
      secondaryCta: "View Selected Projects",
      visual: {
        headerTitle: "Selected Client Builds",
        statusBadge: "Portfolio Preview",
        switchLabel: "Preview build",
        pillOne: "Next.js & React Code",
        pillTwo: "Responsive Web Design",
        pillThree: "EN / FR SEO Base",
      },
    },
    trustBar: {
      label: "Client projects & regional markets",
      marketsSummary: "Serving Casablanca, Agadir, El Jadida, Morocco & worldwide",
      reviewsCta: "Google Business Reviews",
    },
    benefits: {
      eyebrow: "Website Development Morocco",
      title: "Business Website Development & Professional Web Design.",
      subtitle:
        "Work directly with a freelance web developer and web designer across UI design, Next.js builds, and SEO.",
      viewServicesCta: "Explore All 6 Services",
      featuredTag: "Core Service",
      soloTitle: "Direct Freelance Developer, Zero Agency Layers",
      soloDescription:
        "No account managers between us. You collaborate directly with the developer designing and coding your website.",
      speedTitle: "Fast Mobile Speed & Clean SEO",
      speedDescription:
        "Responsive website design built for smartphones and desktops with structured metadata for search visibility.",
      commerceTitle: "Websites, Stores & Landing Pages",
      commerceDescription:
        "Custom business websites, online stores, or focused landing pages structured to turn visitors into inquiries.",
      stackTitle: "Technologies Used",
      stackDescription:
        "Next.js, React, TypeScript, Tailwind CSS, WordPress, WooCommerce, and Node.js.",
    },
    statement: {
      eyebrow: "Why Clear Design Matters",
      headline:
        "Most business websites lose visitors in five seconds because the message feels unclear. Professional website design earns trust fast and guides buyers to reach out.",
    },
    projects: {
      eyebrow: "Web Designer Morocco · Portfolio",
      title: "Website Development Projects in Morocco & Abroad.",
      subtitle:
        "Selected websites delivered for healthcare, e-commerce, automotive, tourism, and interior architecture businesses.",
      viewAll: "View Full Archive",
      viewLive: "View Live Website",
      caseDetails: "Read Project Breakdown",
      studioShowcase: "Studio Showcase",
      techLabel: "Focus & Stack",
      backToProjects: "Back to Work",
    },
    services: {
      eyebrow: "Services",
      title: "Website Development & Design Services in Morocco.",
      subtitle:
        "Business website development, e-commerce builds, redesigns, and technical SEO in English or French.",
      explore: "View Service Details",
      inquire: "Request a Quote",
      viewAll: "All Services",
    },
    about: {
      eyebrow: "Freelance Next.js Developer",
      title: "Yassine Benazzou — Freelance Full-Stack & Next.js Developer.",
      badge: "Based in El Jadida, Morocco · Worldwide",
      paragraphs: [
        "I help small businesses, clinics, local brands, and startups launch clear, fast websites built for real inquiries.",
        "Every build pairs clean visual design with Next.js, React, TypeScript, or WordPress engineering.",
      ],
      stackTitle: "Core Stack",
      moreAboutCta: "Read Full Profile",
      cta: "Book Your Discovery Call",
    },
    process: {
      eyebrow: "How It Works",
      title: "Three Clear Steps From Idea to Launch.",
      subtitle:
        "Defined milestones, staging previews, and direct communication at every stage.",
      cta: "Start Step 01",
      stepLabel: "Step",
    },
    testimonials: {
      eyebrow: "Client Work & Reviews",
      title: "Real Projects Built With Clear Scope.",
      subtitle:
        "Review live client builds below or check direct feedback on my Google Business page.",
      googleTitle: "Read or Leave Feedback on Google",
      googleDescription:
        "Worked with me on a website? Leave a review on Google to help other business owners.",
      googleButton: "Open Google Reviews",
      deliverableLabel: "Delivered Scope",
      liveBadge: "Live Site",
      showcaseBadge: "Studio Showcase",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common Questions on Website Development in Morocco.",
      subtitle:
        "Answers on process, mobile responsiveness, SEO structure, and bilingual EN / FR builds.",
      quickNote: "Prefer a quick chat? Ask your question directly on WhatsApp.",
      whatsappCta: "Message on WhatsApp",
    },
    contact: {
      eyebrow: "Start Your Project",
      title: "Work With a Freelance Web Developer Today.",
      subtitle:
        "Share your goals below and receive clear recommendations, timeline options, and a custom quote.",
      directTitle: "Direct Contact",
      directSubtitle: "Choose the channel that works best for your team.",
      placeholderTag: "Config placeholder",
      channels: {
        whatsapp: "WhatsApp",
        whatsappHint: "Quick chat or voice brief",
        email: "Email",
        emailHint: "Proposals & detailed scopes",
        linkedin: "LinkedIn",
        linkedinHint: "Connect professionally",
        instagram: "Instagram",
        instagramHint: "@yassine.benazzou",
      },
      marketsBanner: "Serving Morocco (Casablanca, Agadir, El Jadida), France, Belgium, Canada, UAE & worldwide.",
      form: {
        title: "Send Your Project Brief",
        fullName: "Full Name",
        fullNamePlaceholder: "Your full name",
        email: "Email Address",
        emailPlaceholder: "you@company.com",
        company: "Business / Company",
        companyOptional: "(optional)",
        companyPlaceholder: "Company or brand name",
        projectType: "Project Type",
        projectTypes: [
          "Business Website Development",
          "E-commerce Website Development",
          "Landing Page Design",
          "Website Redesign",
          "Responsive Web Design",
          "Website Maintenance & SEO",
          "Custom Web Project",
        ],
        budget: "Estimated Budget",
        budgetOptional: "(optional)",
        budgetOptions: [
          "Not decided yet",
          "Under $1,000 (or < 10,000 MAD)",
          "$1,000 – $2,500",
          "$2,500 – $5,000",
          "$5,000+",
        ],
        description: "Project Brief",
        descriptionPlaceholder:
          "Describe what your business offers, your main website goal, and any sites you admire...",
        submit: "Send Project Brief",
        submitting: "Sending brief...",
        validation: {
          nameRequired: "Please enter your full name.",
          emailInvalid: "Please enter a valid email address.",
          descriptionMin: "Please share a short project description (15+ characters).",
          genericError: "Something went wrong. Please retry or contact me directly.",
        },
        successTitle: "Brief Ready to Go",
        successNote:
          "Your inquiry is validated. Use the buttons below to send it directly via WhatsApp or email.",
        successDeliveredNote:
          "Your inquiry was sent successfully. I will reply with next steps shortly.",
        sendViaWhatsapp: "Send via WhatsApp",
        sendViaEmail: "Open Email App",
        sendAnother: "Send another brief",
      },
    },
    footer: {
      tagline:
        "Freelance web developer and web designer in Morocco building fast websites for businesses locally and abroad.",
      navigationTitle: "Studio",
      servicesTitle: "Services",
      locationsTitle: "Morocco Pages",
      rights: "All rights reserved.",
      builtBy: "Designed & coded by Yassine Benazzou.",
    },
    subpages: {
      homeCrumb: "Home",
      servicesCrumb: "Services",
      projectsCrumb: "Work",
      aboutCrumb: "About",
      contactCrumb: "Contact",
      wantSimilar: "Request a Similar Site",
      projectInfo: "Project Overview",
      sector: "Industry",
      technologies: "Technologies",
      deliverables: "Scope & Focus",
      clientNeeds: "Client Goals",
      proposedSolution: "How We Solved It",
      keyFeatures: "Key Deliverables",
      gallery: "Visual Preview",
      serviceDetailsEyebrow: "Included Scope",
      serviceDetailsTitle: "Built for Clarity, Speed, and Leads",
      serviceDetailsText:
        "Every project is scoped cleanly around your goals, content, and launch timeline.",
      faqEyebrow: "FAQ",
      faqTitle: "Common Questions",
      faqText: "Straightforward answers before starting your website.",
    },
  },
  fr: {
    nav: {
      projects: "Projets",
      services: "Services",
      process: "Méthode",
      faq: "FAQ",
      letsTalk: "Demander un Devis",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      languageAria: "Changer de langue",
    },
    hero: {
      available: "Disponible pour vos projets web",
      location: "Maroc · International",
      identity: "Yassine Benazzou · Développeur & Web Designer Freelance Maroc",
      headline: "Développeur Web Freelance : Sites Sur Mesure au Maroc.",
      description:
        "Création de site internet professionnel et développement Next.js pour PME et entrepreneurs au Maroc et à l'étranger.",
      primaryCta: "Demander un Devis Gratuit",
      secondaryCta: "Voir les Projets Clients",
      visual: {
        headerTitle: "Projets Clients Réalisés",
        statusBadge: "Aperçu Portfolio",
        switchLabel: "Aperçu projet",
        pillOne: "Code Next.js & React",
        pillTwo: "Design Responsive",
        pillThree: "Structure SEO EN / FR",
      },
    },
    trustBar: {
      label: "Projets livrés & villes accompagnées",
      marketsSummary: "Casablanca, Agadir, El Jadida, Maroc & international",
      reviewsCta: "Avis Google Business",
    },
    benefits: {
      eyebrow: "Création Site Web Maroc",
      title: "Création de Site Internet Professionnel & Sur Mesure.",
      subtitle:
        "Collaborez directement avec un développeur web freelance au Maroc, du design UI jusqu'à la mise en ligne.",
      viewServicesCta: "Voir les 6 Services",
      featuredTag: "Offre Principale",
      soloTitle: "Développeur Web Freelance, Sans Intermédiaire",
      soloDescription:
        "Échangez directement avec la personne qui conçoit le design, écrit le code et optimise votre SEO.",
      speedTitle: "Design Web Responsive & Bases SEO",
      speedDescription:
        "Sites pensés pour mobile et ordinateur avec une architecture technique propre pour le référencement Google.",
      commerceTitle: "Sites Vitrines, Boutiques & Landing Pages",
      commerceDescription:
        "Des sites web professionnels conçus pour clarifier votre offre et générer de vraies demandes clients.",
      stackTitle: "Technologies Utilisées",
      stackDescription:
        "Next.js, React, TypeScript, Tailwind CSS, WordPress, WooCommerce et Node.js.",
    },
    statement: {
      eyebrow: "L'Écart Décisif",
      headline:
        "Un site confus fait fuir vos visiteurs en cinq secondes. Une création de site internet professionnel rassure dès le premier regard et facilite le contact.",
    },
    projects: {
      eyebrow: "Web Designer Freelance Maroc",
      title: "Projets Web Livrés au Maroc et à l'International.",
      subtitle:
        "Réalisations web dans la santé, l'e-commerce, l'automobile, le tourisme et l'architecture d'intérieur.",
      viewAll: "Toutes les réalisations",
      viewLive: "Visiter le Site en Ligne",
      caseDetails: "Voir l'Étude Détaillée",
      studioShowcase: "Vitrine Studio",
      techLabel: "Focus & Stack",
      backToProjects: "Retour aux projets",
    },
    services: {
      eyebrow: "Services",
      title: "Services de Création de Site Web au Maroc.",
      subtitle:
        "Site vitrine, boutique e-commerce, refonte et maintenance SEO en français ou en anglais.",
      explore: "Détails du service",
      inquire: "Demander un devis",
      viewAll: "Tous les services",
    },
    about: {
      eyebrow: "Développeur Full Stack Freelance",
      title: "Yassine Benazzou — Développeur Full Stack Freelance au Maroc.",
      badge: "Basé à El Jadida, Maroc · International",
      paragraphs: [
        "J'accompagne PME, cabinets, commerces et fondateurs au Maroc pour créer des sites rapides et crédibles.",
        "Chaque projet associe direction visuelle soignée et développement Next.js, React, Laravel ou WordPress.",
      ],
      stackTitle: "Stack Technique",
      moreAboutCta: "Voir le Profil Complet",
      cta: "Réserver un Échange",
    },
    process: {
      eyebrow: "Méthode Simple",
      title: "Trois Étapes Claires Jusqu'à la Mise en Ligne.",
      subtitle:
        "Jalons précis, aperçus en cours de route et suivi réactif jusqu'au lancement.",
      cta: "Démarrer l'Étape 01",
      stepLabel: "Étape",
    },
    testimonials: {
      eyebrow: "Preuves & Avis Clients",
      title: "Des Réalisations Concrètes et Vérifiables.",
      subtitle:
        "Parcourez les sites clients livrés ou consultez les retours sur ma fiche Google Business.",
      googleTitle: "Consulter ou Laisser un Avis Google",
      googleDescription:
        "Vous avez travaillé avec moi ? Votre avis aide d'autres entrepreneurs marocains et internationaux.",
      googleButton: "Voir les Avis Google",
      deliverableLabel: "Périmètre Livré",
      liveBadge: "En Ligne",
      showcaseBadge: "Vitrine Studio",
    },
    faq: {
      eyebrow: "Questions Fréquentes",
      title: "Questions Fréquentes sur la Création de Site Web.",
      subtitle:
        "Méthode, compatibilité mobile, référencement SEO et sites bilingues expliqués simplement.",
      quickNote: "Une question rapide ? Écrivez-moi directement sur WhatsApp.",
      whatsappCta: "Écrire sur WhatsApp",
    },
    contact: {
      eyebrow: "Lancer Votre Projet",
      title: "Lancez Votre Projet Web Avec un Développeur Freelance.",
      subtitle:
        "Décrivez votre besoin ci-dessous pour recevoir des recommandations claires et un devis adapté.",
      directTitle: "Contacts Directs",
      directSubtitle: "Choisissez le canal le plus pratique pour vous.",
      placeholderTag: "Placeholder config",
      channels: {
        whatsapp: "WhatsApp",
        whatsappHint: "Échange rapide par message",
        email: "Email",
        emailHint: "Devis & briefs complets",
        linkedin: "LinkedIn",
        linkedinHint: "Réseau professionnel",
        instagram: "Instagram",
        instagramHint: "@yassine.benazzou",
      },
      marketsBanner: "Clients accompagnés au Maroc (Casablanca, Agadir, El Jadida), France, Belgique, Canada & EAU.",
      form: {
        title: "Envoyer Votre Brief Projet",
        fullName: "Nom complet",
        fullNamePlaceholder: "Votre nom et prénom",
        email: "Adresse email",
        emailPlaceholder: "vous@entreprise.com",
        company: "Entreprise / Marque",
        companyOptional: "(optionnel)",
        companyPlaceholder: "Nom de votre entreprise",
        projectType: "Type de projet",
        projectTypes: [
          "Création de Site Vitrine",
          "Boutique E-commerce",
          "Landing Page Campagne",
          "Refonte de Site Web",
          "Design Web Responsive",
          "Maintenance & SEO",
          "Projet Sur Mesure",
        ],
        budget: "Budget estimé",
        budgetOptional: "(optionnel)",
        budgetOptions: [
          "À définir ensemble",
          "Moins de 10 000 MAD / < 1 000 €",
          "1 000 € – 2 500 €",
          "2 500 € – 5 000 €",
          "5 000 € +",
        ],
        description: "Résumé du projet",
        descriptionPlaceholder:
          "Expliquez votre activité, l'objectif du site et quelques références que vous appréciez...",
        submit: "Envoyer le Brief Projet",
        submitting: "Envoi en cours...",
        validation: {
          nameRequired: "Veuillez indiquer votre nom complet.",
          emailInvalid: "Veuillez saisir une adresse email valide.",
          descriptionMin: "Merci d'écrire au moins 15 caractères sur votre projet.",
          genericError: "Une erreur est survenue. Réessayez ou contactez-moi directement.",
        },
        successTitle: "Brief Validé",
        successNote:
          "Votre demande est prête. Utilisez les boutons ci-dessous pour l'envoyer sur WhatsApp ou par email.",
        successDeliveredNote:
          "Votre demande a été transmise. Je reviens vers vous rapidement.",
        sendViaWhatsapp: "Envoyer via WhatsApp",
        sendViaEmail: "Ouvrir dans l'app Email",
        sendAnother: "Envoyer une autre demande",
      },
    },
    footer: {
      tagline:
        "Développeur web freelance au Maroc concevant des sites rapides et clairs pour attirer des clients.",
      navigationTitle: "Studio",
      servicesTitle: "Services",
      locationsTitle: "Pages Maroc",
      rights: "Tous droits réservés.",
      builtBy: "Conçu et codé par Yassine Benazzou.",
    },
    subpages: {
      homeCrumb: "Accueil",
      servicesCrumb: "Services",
      projectsCrumb: "Projets",
      aboutCrumb: "À propos",
      contactCrumb: "Contact",
      wantSimilar: "Demander un Site Similaire",
      projectInfo: "Aperçu du Projet",
      sector: "Secteur",
      technologies: "Technologies",
      deliverables: "Périmètre",
      clientNeeds: "Objectifs Client",
      proposedSolution: "Solution Apportée",
      keyFeatures: "Éléments Clés",
      gallery: "Aperçu Visuel",
      serviceDetailsEyebrow: "Périmètre Inclus",
      serviceDetailsTitle: "Clarté, Rapidité et Prise de Contact",
      serviceDetailsText:
        "Chaque prestation est cadrée précisément selon vos objectifs et vos délais.",
      faqEyebrow: "FAQ",
      faqTitle: "Questions Fréquentes",
      faqText: "Des réponses directes avant le démarrage de votre projet.",
    },
  },
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.cookie = `site_language=${nextLanguage}; path=/; max-age=31536000; SameSite=Lax`;
  };

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") {
      const timeout = window.setTimeout(() => setLanguageState(stored), 0);
      return () => window.clearTimeout(timeout);
    }
    return undefined;
  }, []);

  useEffect(() => {
    const option = languageOptions.find((item) => item.code === language) ?? languageOptions[0];
    document.documentElement.lang = option.htmlLang;
    document.documentElement.dir = "ltr";
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, content: translations[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
