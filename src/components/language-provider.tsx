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
      services: "Benefits",
      process: "Process",
      faq: "FAQ",
      letsTalk: "Book a Project Call",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageAria: "Switch language",
    },
    hero: {
      available: "Available for new projects",
      location: "Morocco · Worldwide",
      identity: "Yassine Benazzou · Independent Web Studio",
      headline: "Websites That Win Clients for Growing Businesses.",
      description:
        "I design and code fast, custom sites for small companies and founders ready to turn traffic into inquiries.",
      primaryCta: "Request a Project Quote",
      secondaryCta: "Browse Client Work",
      visual: {
        headerTitle: "Featured Client Builds",
        statusBadge: "Live Production",
        switchLabel: "Preview build",
        pillOne: "Custom UI & Code",
        pillTwo: "360px+ Mobile Ready",
        pillThree: "EN / FR SEO Base",
      },
    },
    trustBar: {
      label: "Recent launches & international clients",
      marketsSummary: "Serving Morocco, France, Belgium, Canada & UAE",
      reviewsCta: "Verified Google Profile",
    },
    benefits: {
      eyebrow: "Core Benefits",
      title: "Built to Earn Trust and Convert Traffic.",
      subtitle:
        "You work straight with one senior builder across design, code, speed, and bilingual SEO.",
      viewServicesCta: "Explore All 6 Services",
      featuredTag: "Primary Focus",
      soloTitle: "Direct Solo Execution, Zero Agency Bloat",
      soloDescription:
        "No account managers or handoff gaps. You talk directly with the designer building your site.",
      speedTitle: "Fast Mobile Speed & Clean SEO",
      speedDescription:
        "Tuned for smartphones from 360px up with clean markup so Google indexes every page.",
      commerceTitle: "Websites & Stores Built for Action",
      commerceDescription:
        "Clear offer framing, online checkout, or focused landing pages shaped around buyer intent.",
      stackTitle: "Verified Technologies",
      stackDescription:
        "Next.js, React, TypeScript, Tailwind CSS, WordPress, WooCommerce, and Node.js.",
    },
    statement: {
      eyebrow: "The Difference",
      headline:
        "Most business sites lose buyers in five seconds because they feel generic. Yours should look credible right away and make reaching out effortless.",
    },
    projects: {
      eyebrow: "Selected Work",
      title: "Real Websites Shipped for Real Businesses.",
      subtitle:
        "Live client sites across healthcare, automotive, interior design, and tourism.",
      viewAll: "View Full Archive",
      viewLive: "Visit Live Website",
      caseDetails: "Read Project Breakdown",
      studioShowcase: "Studio Showcase",
      techLabel: "Focus & Stack",
      backToProjects: "Back to Work",
    },
    services: {
      eyebrow: "Services",
      title: "Focused Web Services for Growing Companies.",
      subtitle:
        "Clean positioning, rapid speed, and structured conversion flow in English or French.",
      explore: "Service Scope",
      inquire: "Request a Quote",
      viewAll: "All Services",
    },
    about: {
      eyebrow: "Meet Your Builder",
      title: "Yassine Benazzou — Independent Web Developer & Designer.",
      badge: "Based in El Jadida, Morocco · Worldwide",
      paragraphs: [
        "I build sharp, reliable websites for small companies, founders, clinics, stores, and service brands.",
        "Every project combines intentional visual craft with clean Next.js or WordPress engineering built to last.",
      ],
      stackTitle: "Core Stack",
      cta: "Book Your Discovery Call",
    },
    process: {
      eyebrow: "How It Works",
      title: "Three Simple Steps From Call to Launch.",
      subtitle:
        "Clear milestones, open staging previews, and zero guesswork along the way.",
      cta: "Start Step 01",
      stepLabel: "Step",
    },
    testimonials: {
      eyebrow: "Client Proof & Feedback",
      title: "Proof Grounded in Shipped Client Work.",
      subtitle:
        "Every website on this page links to real deliverables, supported by direct client feedback on Google.",
      googleTitle: "Read or Leave Feedback on Google",
      googleDescription:
        "Worked with me recently? Your review helps new founders decide with confidence.",
      googleButton: "Open Google Reviews",
      deliverableLabel: "Delivered Scope",
      liveBadge: "Live Site",
      showcaseBadge: "Studio Concept",
    },
    faq: {
      eyebrow: "Questions",
      title: "Clear Answers Before You Book.",
      subtitle:
        "Everything you need to know about process, timelines, SEO, and bilingual builds.",
      quickNote: "Prefer messaging directly? Ask a quick question on WhatsApp anytime.",
      whatsappCta: "Ask on WhatsApp",
    },
    contact: {
      eyebrow: "Start Your Project",
      title: "Ready for a Website That Wins Clients?",
      subtitle:
        "Share your goals below and I will reply with scope recommendations and a clear next step.",
      directTitle: "Direct Contact",
      directSubtitle: "Reach out directly on the channel that works best for you.",
      placeholderTag: "Config placeholder",
      channels: {
        whatsapp: "WhatsApp",
        whatsappHint: "Quick voice or chat brief",
        email: "Email",
        emailHint: "Proposals & detailed scopes",
        linkedin: "LinkedIn",
        linkedinHint: "Connect professionally",
        instagram: "Instagram",
        instagramHint: "@yssnn_eweb",
      },
      marketsBanner: "Accepting projects across Morocco, France, Belgium, Canada, UAE & worldwide.",
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
          "E-commerce Store",
          "Campaign Landing Page",
          "Website Redesign",
          "Responsive UI System",
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
          "Share what your business sells, what your site should achieve, and any sites you like...",
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
          "Your inquiry has been validated. Use the buttons below to dispatch it directly via WhatsApp or email.",
        successDeliveredNote:
          "Your inquiry was sent successfully. I will reply with next steps shortly.",
        sendViaWhatsapp: "Send via WhatsApp",
        sendViaEmail: "Open Email App",
        sendAnother: "Send another brief",
      },
    },
    footer: {
      tagline:
        "Independent web design and development studio helping businesses win customers online.",
      navigationTitle: "Studio",
      servicesTitle: "Services",
      locationsTitle: "Markets",
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
        "Every build is scoped clearly around your goals and timeline.",
      faqEyebrow: "FAQ",
      faqTitle: "Common Questions",
      faqText: "Straightforward answers before starting your project.",
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
      available: "Disponible pour vos projets",
      location: "Maroc · International",
      identity: "Yassine Benazzou · Studio Web Indépendant",
      headline: "Des Sites Web Qui Attirent Vos Futurs Clients.",
      description:
        "Je conçois et code des sites rapides et sur mesure pour PME et dirigeants prêts à convertir leurs visites.",
      primaryCta: "Demander un Devis Projet",
      secondaryCta: "Voir les Projets Clients",
      visual: {
        headerTitle: "Projets Clients Livrés",
        statusBadge: "En Ligne",
        switchLabel: "Aperçu projet",
        pillOne: "Design & Code Sur Mesure",
        pillTwo: "Mobile dès 360px",
        pillThree: "SEO Bilingue EN / FR",
      },
    },
    trustBar: {
      label: "Lancements récents & clientèle internationale",
      marketsSummary: "Maroc, France, Belgique, Canada & Émirats",
      reviewsCta: "Profil Google Vérifié",
    },
    benefits: {
      eyebrow: "Pourquoi Travailler Ensemble",
      title: "Pensés pour Convaincre et Convertir.",
      subtitle:
        "Un seul interlocuteur du design au code, pour un site rapide, crédible et structuré SEO.",
      viewServicesCta: "Voir les 6 Services",
      featuredTag: "Axe Principal",
      soloTitle: "Exécution Directe, Sans Intermédiaire",
      soloDescription:
        "Aucun chef de projet écran entre nous. Vous échangez avec la personne qui conçoit votre site.",
      speedTitle: "Vitesse Mobile & Bases SEO Propres",
      speedDescription:
        "Calibré pour smartphones dès 360px avec un balisage propre pour l'indexation Google.",
      commerceTitle: "Sites Vitrines, Boutiques & Landing Pages",
      commerceDescription:
        "Message clair, paiement fluide ou pages dédiées à vos campagnes publicitaires.",
      stackTitle: "Technologies Maîtrisées",
      stackDescription:
        "Next.js, React, TypeScript, Tailwind CSS, WordPress, WooCommerce et Node.js.",
    },
    statement: {
      eyebrow: "L'Écart Décisif",
      headline:
        "Un site générique fait fuir vos prospects en cinq secondes. Le vôtre doit inspirer confiance dès le premier regard et faciliter le contact.",
    },
    projects: {
      eyebrow: "Projets Sélectionnés",
      title: "Des Sites Réels Livrés à Nos Clients.",
      subtitle:
        "Réalisations en ligne dans la santé, l'automobile, l'architecture d'intérieur et le tourisme.",
      viewAll: "Toutes les réalisations",
      viewLive: "Visiter le Site en Ligne",
      caseDetails: "Voir l'Étude Détaillée",
      studioShowcase: "Vitrine Studio",
      techLabel: "Focus & Stack",
      backToProjects: "Retour aux projets",
    },
    services: {
      eyebrow: "Services",
      title: "Prestations Web Orientées Résultats.",
      subtitle:
        "Positionnement net, temps de chargement rapides et parcours clairs en français ou anglais.",
      explore: "Détails du service",
      inquire: "Demander un devis",
      viewAll: "Tous les services",
    },
    about: {
      eyebrow: "Votre Partenaire Studio",
      title: "Yassine Benazzou — Développeur & Designer Web.",
      badge: "Basé à El Jadida, Maroc · International",
      paragraphs: [
        "J'accompagne PME, fondateurs, cabinets médicaux, boutiques et services ambitieux avec des sites fiables.",
        "Chaque réalisation unit direction artistique soignée et ingénierie Next.js ou WordPress durable.",
      ],
      stackTitle: "Stack Technique",
      cta: "Réserver un Échange",
    },
    process: {
      eyebrow: "Méthode Simple",
      title: "Trois Étapes Claires Jusqu'au Lancement.",
      subtitle:
        "Jalons définis, aperçus en direct et zéro mauvaise surprise en cours de route.",
      cta: "Démarrer l'Étape 01",
      stepLabel: "Étape",
    },
    testimonials: {
      eyebrow: "Preuves & Avis Clients",
      title: "Des Preuves Appuyées sur de Vrais Lancements.",
      subtitle:
        "Chaque réalisation renvoie vers un projet réel, complété par notre page d'avis Google.",
      googleTitle: "Consulter ou Déposer un Avis Google",
      googleDescription:
        "Vous avez collaboré avec moi ? Votre retour aide d'autres entrepreneurs à avancer sereinement.",
      googleButton: "Voir les Avis Google",
      deliverableLabel: "Périmètre Livré",
      liveBadge: "En Ligne",
      showcaseBadge: "Concept Studio",
    },
    faq: {
      eyebrow: "Questions Fréquentes",
      title: "Réponses Claires Avant de Démarrer.",
      subtitle:
        "Méthode, délais, référencement Google et sites bilingues expliqués simplement.",
      quickNote: "Une question rapide ? Écrivez-moi directement sur WhatsApp.",
      whatsappCta: "Écrire sur WhatsApp",
    },
    contact: {
      eyebrow: "Lancer Votre Projet",
      title: "Prêt pour un Site Qui Génère des Clients ?",
      subtitle:
        "Décrivez votre besoin ci-dessous et recevez une réponse claire sur les prochaines étapes.",
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
        instagramHint: "@yssnn_eweb",
      },
      marketsBanner: "Clients accompagnés au Maroc, France, Belgique, Canada, EAU et à l'international.",
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
          "Développement de Site Vitrine",
          "Boutique E-commerce",
          "Landing Page Campagne",
          "Refonte de Site Web",
          "Interface Responsive",
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
          "Expliquez votre activité, l'objectif principal du site et quelques exemples appréciés...",
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
        "Studio web indépendant concevant des sites rapides et clairs pour développer votre clientèle.",
      navigationTitle: "Studio",
      servicesTitle: "Services",
      locationsTitle: "Marchés",
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
        "Chaque prestation est cadrée précisément selon vos objectifs et délais.",
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
