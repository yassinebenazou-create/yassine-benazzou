import { JsonLd } from "@/components/json-ld";
import { ServicesArchiveView } from "@/components/sections/services-views";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Website Development & Design Morocco",
  description:
    "Business website development, professional website design, e-commerce builds, landing pages, and technical SEO in Morocco and internationally.",
  path: "/services",
  keywords: [
    "Website Development Morocco",
    "Business Website Development",
    "Professional Website Design",
    "Création site internet professionnel",
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
