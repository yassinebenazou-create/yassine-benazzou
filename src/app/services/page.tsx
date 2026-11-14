import { JsonLd } from "@/components/json-ld";
import { ServicesArchiveView } from "@/components/sections/services-views";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Web Design & Development Services | Morocco & International",
  description:
    "Business website development, e-commerce websites, landing page design, website redesign, responsive design, and maintenance & SEO.",
  path: "/services",
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
