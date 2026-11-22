"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Layers } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useLanguage } from "@/components/language-provider";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/home-sections";
import { ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { additionalProjects, featuredProjects, getProject, type Project } from "@/data/projects";
import { getService } from "@/data/services";

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
        <ButtonLink href="/devis">
          {language === "fr" ? "Estimer un projet similaire" : "Estimate a Similar Project"}
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
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

const caseCopy = {
  en: {
    contextEyebrow: "Context & Challenge",
    contextTitle: "What the Project Needed to Solve",
    objectivesLabel: "Key Objectives",
    solutionEyebrow: "Technical Solution & Architecture",
    deliverablesTitle: "Delivered Scope",
    roleLabel: "Role",
    typeLabel: "Project Type",
    relatedServiceLabel: "Related Service",
    similarEyebrow: "Have a Similar Project?",
    similarTitle: "Build a Clear, Fast Website for Your Business.",
    similarText:
      "Based in El Jadida, Morocco — collaborating directly with clients across Morocco and remotely with teams in France. Start with an instant indicative budget range or send your brief directly.",
    estimateCta: "Estimate My Project (/devis)",
    contactCta: "Contact Directly",
    relatedEyebrow: "Continue Exploring",
    relatedTitle: "Related Case Studies",
    viewCase: "Read Case Study",
    visualLabel: "Visual Showcase",
  },
  fr: {
    contextEyebrow: "Contexte & Enjeux",
    contextTitle: "Ce que le Projet Devait Résoudre",
    objectivesLabel: "Objectifs Clés",
    solutionEyebrow: "Solution Technique & Architecture",
    deliverablesTitle: "Périmètre Livré",
    roleLabel: "Rôle",
    typeLabel: "Type de Projet",
    relatedServiceLabel: "Service Associé",
    similarEyebrow: "Vous avez un projet similaire ?",
    similarTitle: "Concevez un Site Rapide et Fiable Pour Votre Activité.",
    similarText:
      "Basé à El Jadida (Maroc), j'accompagne les entreprises au Maroc et 100 % à distance en France. Obtenez une estimation indicative ou envoyez directement votre brief.",
    estimateCta: "Estimer mon projet (/devis)",
    contactCta: "Discuter de mon projet",
    relatedEyebrow: "Explorer d'autres études",
    relatedTitle: "Études de Cas Similaires",
    viewCase: "Voir l'étude de cas",
    visualLabel: "Aperçu Visuel",
  },
} as const;

export function ProjectDetailView({ project }: { project: Project }) {
  const { language, content } = useLanguage();
  const sub = content.subpages;
  const labels = content.projects;
  const copy = caseCopy[language];

  const tags =
    project.technologies.length > 0
      ? project.technologies
      : project.highlights[language];
  const relatedService = getService(project.relatedServiceSlug);
  const relatedProjects = project.relatedSlugs
    .map((slug) => getProject(slug))
    .filter((item): item is Project => Boolean(item));

  const breadcrumbs = [
    { name: sub.homeCrumb, href: "/" },
    { name: sub.projectsCrumb, href: "/realisations" },
    { name: project.name, href: `/realisations/${project.slug}` },
  ];

  const imageAlt =
    language === "fr"
      ? `Capture d'écran du projet ${project.name} (${project.projectType.fr} — ${project.industry.fr})`
      : `Website screenshot for ${project.name} (${project.projectType.en} — ${project.industry.en})`;

  return (
    <>
      <PageHero
        eyebrow={`${project.projectType[language]} · ${project.industry[language]}`}
        title={project.name}
        text={project.summary[language]}
      >
        {project.url ? (
          <ButtonLink href={project.url} external variant="primary">
            <span>{labels.viewLive}</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        ) : null}
        <ButtonLink href="/devis" variant={project.url ? "secondary" : "primary"}>
          {copy.estimateCta}
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          {copy.contactCta}
        </ButtonLink>
      </PageHero>

      <section className="border-b border-white/10 bg-[#090c12] py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Breadcrumbs items={breadcrumbs} />
            <Link
              href="/realisations"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-emerald-400"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>{labels.backToProjects}</span>
            </Link>
          </div>

          {/* 1. Visual Showcase */}
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/12 bg-[#0d1118]">
              <Image
                src={project.image}
                alt={imageAlt}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 1152px"
                unoptimized={project.image.endsWith(".svg")}
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span>
                {copy.visualLabel} — {project.name} ({project.projectType[language]})
              </span>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-emerald-400 hover:text-emerald-300"
                >
                  <span>{project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              ) : (
                <span>{labels.studioShowcase}</span>
              )}
            </figcaption>
          </figure>

          {/* 2. Context, Challenge, Technical Solution & Deliverables */}
          <div className="mt-14 grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="h-fit rounded-[24px] border border-white/10 bg-[#0d1118] p-6 sm:p-7 lg:sticky lg:top-28">
              <h2 className="font-display text-lg font-bold text-white">{sub.projectInfo}</h2>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    {copy.typeLabel}
                  </dt>
                  <dd className="mt-1.5 font-medium text-white">
                    {project.projectType[language]}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    {copy.roleLabel}
                  </dt>
                  <dd className="mt-1.5 font-medium text-white">
                    {project.role[language]}
                  </dd>
                </div>
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
                {relatedService ? (
                  <div className="border-t border-white/10 pt-4">
                    <dt className="font-mono text-xs uppercase tracking-wider text-slate-400">
                      {copy.relatedServiceLabel}
                    </dt>
                    <dd className="mt-1.5">
                      <Link
                        href={`/services/${relatedService.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                      >
                        <span>{relatedService.title[language]}</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </dd>
                  </div>
                ) : null}
              </dl>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  <span>{labels.viewLive}</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <p className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-slate-400">
                  {labels.studioShowcase}
                </p>
              )}
            </aside>

            <div className="space-y-12">
              {/* Context & Challenge */}
              <div className="rounded-[24px] border border-white/10 bg-[#0d1118] p-6 sm:p-8">
                <p className="text-xs font-medium text-emerald-400">{copy.contextEyebrow}</p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white">
                  {copy.contextTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  {project.context[language]}
                </p>

                <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {copy.objectivesLabel}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {project.needs[language].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200 sm:text-base"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Solution & Architecture */}
              <div>
                <SectionHeader
                  eyebrow={copy.solutionEyebrow}
                  title={sub.proposedSolution}
                  text={project.solution[language]}
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.technicalHighlights[language].map((item) => (
                    <div
                      key={item.title}
                      className="studio-card rounded-2xl p-5 sm:p-6"
                    >
                      <div className="flex items-center gap-2 text-emerald-400">
                        <Layers className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <h3 className="font-display text-base font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features & Delivered Scope */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-[#0d1118] p-6">
                  <h2 className="font-display text-xl font-bold text-white">
                    {sub.keyFeatures}
                  </h2>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                    {project.features[language].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-[#0d1118] p-6">
                  <h2 className="font-display text-xl font-bold text-white">
                    {copy.deliverablesTitle}
                  </h2>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                    {project.deliverables[language].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Conversion Block -> /devis & /contact */}
          <div className="mt-16 rounded-[26px] border border-emerald-400/25 bg-emerald-400/[0.05] p-7 sm:p-10">
            <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs font-medium text-emerald-400">{copy.similarEyebrow}</p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {copy.similarTitle}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {copy.similarText}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href="/devis" variant="primary" className="w-full">
                  {copy.estimateCta}
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" className="w-full">
                  {copy.contactCta}
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* 4. Related Case Studies */}
          {relatedProjects.length > 0 ? (
            <div className="mt-16 border-t border-white/10 pt-14">
              <SectionHeader
                eyebrow={copy.relatedEyebrow}
                title={copy.relatedTitle}
              />
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/realisations/${related.slug}`}
                    className="studio-card group flex flex-col justify-between rounded-2xl p-6"
                  >
                    <div>
                      <p className="text-xs font-medium text-emerald-400">
                        {related.projectType[language]}
                      </p>
                      <h3 className="font-display mt-2 text-xl font-bold text-white transition group-hover:text-emerald-300">
                        {related.name}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-300">
                        {related.summary[language]}
                      </p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <span>{copy.viewCase}</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
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
