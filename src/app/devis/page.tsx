import { JsonLd } from "@/components/json-ld";
import { DevisPageView } from "@/components/sections/devis-view";
import { devisFaqs } from "@/data/devis";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Devis Création Site Web Maroc & France",
  absoluteTitle: "Devis Création Site Web Maroc & France | Yassine Benazzou",
  description:
    "Estimez votre budget en MAD (Maroc) ou EUR (France à distance) : simulateur de devis création site web vitrine, e-commerce ou Next.js avec délais indicatifs.",
  path: "/devis",
  locale: "fr_FR",
  keywords: [
    "devis création site web Maroc",
    "estimer prix site web",
    "tarif création site web Maroc",
    "prix création site web",
    "simulateur devis site internet",
  ],
});

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Simulateur de Devis", href: "/devis" },
];

export default function DevisPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Simulateur de Devis Création Site Web (Maroc & France)",
          description:
            "Outil d'estimation indicative pour la création de site vitrine, boutique e-commerce, refonte et application Next.js au Maroc (MAD) et en France à distance (EUR).",
          path: "/devis",
        })}
      />
      <JsonLd data={faqJsonLd(devisFaqs.fr)} />
      <DevisPageView />
    </>
  );
}
