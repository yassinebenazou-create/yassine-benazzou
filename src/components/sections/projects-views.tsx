"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useLanguage } from "@/components/language-provider";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/home-sections";
import { ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { additionalProjects, featuredProjects, type Project } from "@/data/projects";

export function ProjectsArchiveView() {
  const { language, content } = useLanguage();
  const p = content.projects;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        text={p.subtitle}
      >
        <ButtonLink href="/#contact">
          {content.subpages.wantSimilar}
        </ButtonLink>
      </PageHero>

      <section className="bg-[#0b0d12] py-24 sm:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <ProjectCard project={project} headingLevel="h2" />
              </Reveal>
            ))}
          </div>

          {additionalProjects.length > 0 ? (
            <div className="mt-20 border-t border-white/10 pt-16">
              <SectionHeader
                eyebrow={language === "fr" ? "Archives Concepts Studio" : "Additional Studio Concepts"}
                title={language === "fr" ? "Maquettes & Prototypes Sectoriels" : "Sector Concept Showcases"}
                text={
                  language === "fr"
                    ? "Concepts architecturés en interne pour illustrer d'autres secteurs."
                    : "Additional architectural concepts kept available for sector reference."
                }
              />
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {additionalProjects.map((project, index) => (
                  <Reveal key={project.slug} delay={index * 0.06}>
                    <ProjectCard project={project} headingLevel="h3" />
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

export function ProjectDetailView({ project }: { project: Project }) {
  const { language, content } = useLanguage();
  const sub = content.subpages;
  const labels = content.projects;
  const tags =
    project.technologies.length > 0
      ? project.technologies
      : project.highlights[language];

  const breadcrumbs = [
    { name: sub.homeCrumb, href: "/" },
    { name: sub.projectsCrumb, href: "/realisations" },
    { name: project.name, href: `/realisations/${project.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={project.industry[language]}
        title={project.name}
        text={project.summary[language]}
      >
        {project.url ? (
          <ButtonLink href={project.url} external variant="primary">
            <span>{labels.viewLive}</span>
            <ExternalLink className="h-4 w-4" />
          </ButtonLink>
        ) : null}
        <ButtonLink href="/#contact" variant="secondary">
          {sub.wantSimilar}
        </ButtonLink>
      </PageHero>

      <section className="bg-[#090c12] py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Breadcrumbs items={breadcrumbs} />
            <Link
              href="/realisations"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-emerald-400"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{labels.backToProjects}</span>
            </Link>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/12 bg-[#0d1118]">
            <Image
              src={project.image}
              alt={`${project.name} — ${project.industry[language]}`}
              fill
              preload
              sizes="100vw"
              unoptimized={project.image.endsWith(".svg")}
              className="object-cover"
            />
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="h-fit rounded-[24px] border border-white/10 bg-[#0d1118] p-6 sm:p-7">
              <h2 className="text-lg font-semibold text-white">{sub.projectInfo}</h2>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    {sub.sector}
                  </dt>
                  <dd className="mt-1.5 font-medium text-white">
                    {project.industry[language]}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    {project.technologies.length > 0 ? sub.technologies : sub.deliverables}
                  </dt>
                  <dd className="mt-2.5 flex flex-wrap gap-2">
                    {tags.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  <span>{labels.viewLive}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <p className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-slate-400">
                  {labels.studioShowcase}
                </p>
              )}
            </aside>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {sub.clientNeeds}
                </h2>
                <ul className="mt-5 grid gap-3">
                  {project.needs[language].map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-[#0d1118] px-5 py-4 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <SectionHeader
                eyebrow="Architecture"
                title={sub.proposedSolution}
                text={project.solution[language]}
              />

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {sub.keyFeatures}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.features[language].map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-[#0d1118] px-5 py-4 text-sm text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
