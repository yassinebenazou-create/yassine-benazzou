import { LocalSeoPage } from "@/components/sections/local-seo-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Création site web El Jadida",
  absoluteTitle: "Création Site Web El Jadida | Yassine Benazzou",
  description:
    "Création site web El Jadida par un développeur freelance sur place : site vitrine, boutique e-commerce, design responsive et rendez-vous direct.",
  path: "/creation-site-web-el-jadida",
  locale: "fr_MA",
  keywords: [
    "Création site web El Jadida",
    "Développeur web freelance Maroc",
    "Développeur web au Maroc",
    "Création site internet professionnel",
  ],
});

export default function Page() {
  return (
    <LocalSeoPage
      location="El Jadida"
      areaServed="El Jadida, Morocco"
      path="/creation-site-web-el-jadida"
      title="Création de site web à El Jadida"
      text="Basé à El Jadida, j'aide les entreprises locales, cabinets et commerçants à lancer un site web rapide qui transforme leur visibilité locale en vrais contacts."
      collaborationNote="Studio Basé à El Jadida · Proximité Directe"
      approachTitle="Votre développeur web de proximité à El Jadida"
      approachText="Passer d'une simple page Instagram ou Facebook à un site web professionnel permet aux clients d'El Jadida et de la région de vous trouver sur Google et de vous contacter facilement."
      highlights={[
        "Rencontres directes possibles à El Jadida et suivi rapide par WhatsApp",
        "Site vitrine clair pour commerces, cabinets, restaurants et services locaux",
        "Structure technique SEO adaptée aux recherches locales à El Jadida",
      ]}
      serviceSlugs={["business-website-development", "responsive-web-design", "maintenance-seo"]}
      localUseCases={[
        {
          sector: "Cabinets médicaux & professions libérales",
          need: "Inspirer confiance aux patients d'El Jadida avec des horaires clairs, une présentation des soins et un accès direct à la prise de rendez-vous.",
        },
        {
          sector: "Restaurants, cafés & commerces locaux",
          need: "Offrir une vitrine mobile immédiate avec menu ou catalogue, localisation et bouton WhatsApp en un clic.",
        },
        {
          sector: "Artisans, BTP & prestataires Doukkala",
          need: "Remplacer le bouche-à-oreille uniquement hors ligne par un site crédible capable de recevoir des demandes de devis.",
        },
      ]}
      faqs={[
        {
          question: "Pouvons-nous nous rencontrer directement à El Jadida pour discuter du projet ?",
          answer:
            "Oui. Comme le studio est basé à El Jadida, nous pouvons organiser un rendez-vous sur place pour cadrer votre projet avant le démarrage.",
        },
        {
          question: "J'ai déjà une page Instagram ou Facebook, pourquoi créer un site web ?",
          answer:
            "Les réseaux sociaux dépendent d'un algorithme et ne ressortent pas bien sur Google. Un site vous appartient et capte les clients qui cherchent vos services sur Google.",
        },
        {
          question: "Assurez-vous la maintenance technique après la mise en ligne ?",
          answer:
            "Oui. Je reste disponible pour les mises à jour de contenu, l'ajout de nouvelles pages et le suivi technique dans la durée.",
        },
      ]}
    />
  );
}
