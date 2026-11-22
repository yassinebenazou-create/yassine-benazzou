import { LocalSeoPage } from "@/components/sections/local-seo-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Création site web Maroc",
  absoluteTitle: "Création Site Web Maroc | Développeur Web Freelance",
  description:
    "Création site web pour entreprise au Maroc avec un développeur web freelance : vitrine Next.js, e-commerce et devis création site web Maroc sur mesure.",
  path: "/creation-site-web-maroc",
  locale: "fr_MA",
  keywords: [
    "création site web Maroc",
    "développeur web freelance Maroc",
    "freelance création site web Maroc",
    "devis création site web Maroc",
    "création site web pour entreprise au Maroc",
  ],
});

export default function Page() {
  return (
    <LocalSeoPage
      location="Maroc"
      areaServed="Morocco"
      path="/creation-site-web-maroc"
      title="Création de Site Web au Maroc par un Développeur Freelance"
      text="Freelance création site web Maroc basé à El Jadida : création de site web pour entreprise au Maroc sous Next.js ou WordPress, avec devis clair et suivi direct."
      collaborationNote="Accompagnement National · Maroc"
      approachTitle="Un développeur Full Stack freelance pour vos projets au Maroc"
      approachText="Travaillez en direct avec un interlocuteur unique, sans couches commerciales, pour concevoir un site rapide, lisible sur mobile et structuré pour Google."
      highlights={[
        "Développement Next.js, React, TypeScript ou WordPress selon votre autonomie",
        "Architecture bilingue français / anglais adaptée au marché marocain et export",
        "Intégration directe WhatsApp (+212 7 02 73 62 93) et formulaire qualifié",
      ]}
      serviceSlugs={["business-website-development", "ecommerce", "maintenance-seo"]}
      localUseCases={[
        {
          sector: "PME & Sociétés de services",
          need: "Présenter clairement l'expertise de l'entreprise, rassurer les décideurs et capter des demandes de devis.",
        },
        {
          sector: "Boutiques & Marques E-commerce",
          need: "Structurer un catalogue clair avec tunnel de commande mobile fluide sous WooCommerce ou Next.js.",
        },
        {
          sector: "Entreprises export & B2B",
          need: "Disposer d'une vitrine bilingue FR/EN rapide et crédible pour convaincre en Europe, au Canada ou aux EAU.",
        },
      ]}
      faqs={[
        {
          question: "Comment se déroule la création d'un site web au Maroc à distance ?",
          answer:
            "Nous cadrons vos besoins par téléphone, visioconférence ou WhatsApp, puis vous suivez l'avancement sur un lien de prévisualisation jusqu'à la mise en ligne.",
        },
        {
          question: "Quelle technologie choisir au Maroc : Next.js ou WordPress ?",
          answer:
            "Next.js est idéal pour la vitesse, le SEO technique et une interface sur mesure. WordPress ou WooCommerce convient si vous préférez publier vos pages vous-même.",
        },
        {
          question: "Le site peut-il fonctionner en français et en anglais ?",
          answer:
            "Oui. Tous nos projets peuvent intégrer une interface bilingue français / anglais adaptée aux entreprises marocaines et internationales.",
        },
      ]}
    />
  );
}
