import { JsonLd } from "@/components/json-ld";
import { ProjectsArchiveView } from "@/components/sections/projects-views";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Selected Projects | Web Design & Development Portfolio",
  description:
    "Explore selected websites crafted by Yassine Benazzou: Nutritionniste Agadir, Customcar, Eleva Design, and AtlasQuad.",
  path: "/realisations",
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
