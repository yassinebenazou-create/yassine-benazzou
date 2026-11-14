import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ServiceDetailView } from "@/components/sections/services-views";
import { getAllServiceSlugs, getService } from "@/data/services";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: `${service.title.en} | Yassine Benazzou`,
    description: service.description.en,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title.en, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <ServiceDetailView service={service} />
    </>
  );
}
