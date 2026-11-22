import { JsonLd } from "@/components/json-ld";
import { ServicesArchiveView } from "@/components/sections/services-views";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services Site Vitrine, E-commerce & Refonte",
  absoluteTitle: "Création Site Vitrine & E-commerce | Yassine Benazzou",
  description:
    "Services de création site vitrine, création site e-commerce Maroc & France, refonte site internet et SEO Next.js avec un développeur web freelance.",
  path: "/services",
  keywords: [
    "création site vitrine",
    "création site e-commerce",
    "refonte site internet",
    "création site vitrine Maroc",
    "création site e-commerce Maroc",
    "Website Development Morocco",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ])}
      />
      <ServicesArchiveView />
    </>
  );
}
