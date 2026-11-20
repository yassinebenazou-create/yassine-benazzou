import { JsonLd } from "@/components/json-ld";
import { ProjectsArchiveView } from "@/components/sections/projects-views";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Web Design Projects & Portfolio Morocco",
  description:
    "Selected websites built by a freelance web designer in Morocco: Nutritionniste Agadir, Gosto Store, Customcar, AtlasQuad, and Eleva Design.",
  path: "/realisations",
  keywords: [
    "Web Designer Morocco",
    "Freelance Web Developer Morocco",
    "Website Development Morocco",
  ],
});

export default function RealisationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Projects", href: "/realisations" },
        ])}
      />
      <ProjectsArchiveView />
    </>
  );
}
