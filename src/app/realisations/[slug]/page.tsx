import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ProjectDetailView } from "@/components/sections/projects-views";
import { getProject, projects } from "@/data/projects";
import { breadcrumbJsonLd, caseStudyJsonLd, createMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: `${project.name} | ${project.industry.en}`,
    absoluteTitle: project.metaTitle,
    description: project.seoDescription,
    path: `/realisations/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/realisations" },
    { name: project.name, href: `/realisations/${project.slug}` },
  ];

  const schemaKeywords =
    project.technologies.length > 0 ? project.technologies : project.highlights.en;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd
        data={caseStudyJsonLd({
          name: `${project.name} — ${project.projectType.en}`,
          description: project.seoDescription,
          path: `/realisations/${project.slug}`,
          image: project.image,
          genre: project.industry.en,
          keywords: schemaKeywords,
          liveUrl: project.url,
        })}
      />
      <ProjectDetailView project={project} />
    </>
  );
}
