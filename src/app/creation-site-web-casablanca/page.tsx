import { LocalSeoPage } from "@/components/sections/local-seo-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Création site internet Casablanca",
  absoluteTitle: "Création Site Internet Casablanca | Yassine Benazzou",
  description:
    "Création site internet Casablanca par un développeur web freelance : sites vitrines Next.js, refontes et boutiques e-commerce pour PME et startups.",
  path: "/creation-site-web-casablanca",
  locale: "fr_MA",
  keywords: [
    "création site internet Casablanca",
    "création site web Casablanca",
    "développeur Full Stack freelance",
    "développeur web freelance Maroc",
  ],
});

export default function Page() {
  return (
    <LocalSeoPage
      location="Casablanca"
      areaServed="Casablanca, Morocco"
      path="/creation-site-web-casablanca"
      title="Création de site internet à Casablanca"
      text="Accompagnement dédié aux PME, startups et équipes B2B de Casablanca souhaitant un site Next.js rapide, une refonte complète ou une landing page orientée conversion."
      collaborationNote="Axe El Jadida – Casablanca · Suivi Réactif"
      approachTitle="Des interfaces B2B et e-commerce taillées pour Casablanca"
      approachText="Depuis El Jadida, je collabore en interlocuteur direct (à distance ou sur rendez-vous sur l'axe Casablanca) avec des entreprises exigeantes qui recherchent rapidité et fiabilité."
      highlights={[
        "Refonte complète de sites vieillissants sans perte de liens ni de SEO",
        "Landing pages rapides conçues pour rentabiliser vos campagnes Meta et Google Ads",
        "Architecture React / Next.js ou e-commerce évolutive pour marques en croissance",
      ]}
      serviceSlugs={["website-redesign", "landing-page", "ecommerce"]}
      localUseCases={[
        {
          sector: "Startups & SaaS / B2B",
          need: "Clarifier une proposition de valeur complexe dès le premier écran et guider les prospects vers une demande de démo ou de devis.",
        },
        {
          sector: "PME établies en refonte",
          need: "Remplacer un ancien site lent ou non responsive sur mobile tout en conservant le référencement acquis.",
        },
        {
          sector: "Marques D2C & Retail",
          need: "Optimiser la vitesse des fiches produits et fluidifier la commande mobile pour limiter l'abandon de panier.",
        },
      ]}
      relatedProject={{
        name: "Customcar",
        slug: "customcar",
        note: "Exemple de vitrine contrastée développée avec Next.js et Tailwind CSS pour valoriser des prestations spécialisées et capter des devis.",
      }}
      faqs={[
        {
          question: "Comment travaillez-vous avec des clients basés à Casablanca ?",
          answer:
            "Le suivi se fait en direct par visioconférence, WhatsApp et liens de prévisualisation en temps réel, avec possibilité de rencontre sur l'axe Casablanca – El Jadida.",
        },
        {
          question: "Pouvez-vous refondre un site existant sans perdre notre référencement ?",
          answer:
            "Oui. Lors d'une refonte, les anciennes URLs, titres et redirections sont cartographiés avant la mise en ligne pour protéger votre historique Google.",
        },
        {
          question: "Créez-vous des landing pages dédiées à nos campagnes publicitaires ?",
          answer:
            "Oui. Nous concevons des pages rapides ciblées sur une offre précise, prêtes pour le trafic payant et la capture directe de prospects.",
        },
      ]}
    />
  );
}
