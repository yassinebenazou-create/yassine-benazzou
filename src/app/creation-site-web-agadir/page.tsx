import { LocalSeoPage } from "@/components/sections/local-seo-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Création site web Agadir",
  absoluteTitle: "Création Site Web Agadir | Yassine Benazzou",
  description:
    "Création site web Agadir pour tourisme, santé et services : sites bilingues FR/EN rapides sur mobile et structurés pour capter vos demandes.",
  path: "/creation-site-web-agadir",
  locale: "fr_MA",
  keywords: [
    "Création site web Agadir",
    "Développeur web au Maroc",
    "Web designer freelance Maroc",
    "Création site internet professionnel",
  ],
});

export default function Page() {
  return (
    <LocalSeoPage
      location="Agadir"
      areaServed="Agadir, Morocco"
      path="/creation-site-web-agadir"
      title="Création de site web à Agadir"
      text="Création de sites internet professionnels pour les activités d'Agadir : cabinets de santé, opérateurs touristiques, hôtellerie et commerces accueillant une clientèle internationale."
      collaborationNote="Accompagnement à Distance · Agadir & Souss-Massa"
      approachTitle="Sites rapides et bilingues pour la clientèle d'Agadir"
      approachText="À Agadir, beaucoup de visiteurs consultent depuis un smartphone en déplacement ou cherchent depuis l'étranger : votre site doit charger vite, parler français et anglais, et ouvrir WhatsApp en un clic."
      highlights={[
        "Expérience mobile légère pensée pour les voyageurs sur réseau 4G",
        "Sites bilingues français / anglais pour visiteurs locaux et touristes européens",
        "Boutons d'action clairs pour réservations, devis et consultations",
      ]}
      serviceSlugs={["business-website-development", "landing-page", "responsive-web-design"]}
      localUseCases={[
        {
          sector: "Tourisme, excursions & activités de plein air",
          need: "Présenter les formules, tarifs ou circuits de manière limpide pour déclencher la réservation directe depuis smartphone.",
        },
        {
          sector: "Cabinets médicaux & praticiens de santé",
          need: "Rassurer les patients avec une mise en page épurée, la liste claire des consultations et un accès direct au rendez-vous.",
        },
        {
          sector: "Restauration & hébergement",
          need: "Mettre en avant l'identité du lieu avec des pages rapides et un contact immédiat sans intermédiaires coûteux.",
        },
      ]}
      relatedProject={{
        name: "Nutritionniste Agadir",
        slug: "nutritionniste-agadir",
        note: "Projet réel réalisé à Agadir : structuration d'un site santé sobre et mobile-first pour simplifier les prises de contact patients.",
      }}
      relatedGuide={{
        title: "Guide : Création site web hôtel & riad",
        href: "/blog/creation-site-web-hotel",
      }}
      faqs={[
        {
          question: "Comment gérez-vous un projet à Agadir depuis El Jadida ?",
          answer:
            "Tout le processus — cadrage, validation des maquettes, tests sur lien de staging et mise en ligne — se déroule à distance avec des échanges directs par téléphone et WhatsApp.",
        },
        {
          question: "Pouvez-vous créer un site en français et en anglais pour les touristes à Agadir ?",
          answer:
            "Oui. C'est l'un des atouts principaux de notre architecture : présenter vos offres dans les deux langues sans alourdir la navigation.",
        },
        {
          question: "Le site facilite-t-il les réservations via WhatsApp ?",
          answer:
            "Oui. Nous intégrons des boutons WhatsApp contextuels et des formulaires simples pensés pour les utilisateurs sur smartphone.",
        },
      ]}
    />
  );
}
