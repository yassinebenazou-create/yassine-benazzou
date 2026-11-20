"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import type { Project } from "@/data/projects";

function ProjectCardBase({
  project,
  headingLevel = "h3",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
}) {
  const { language, content } = useLanguage();
  const labels = content.projects;
  const Heading = headingLevel;
  const tags =
    project.technologies.length > 0
      ? project.technologies
      : project.highlights[language];

  const coverContent = (
    <>
      <Image
        src={project.image}
        alt={`${project.name} — ${project.industry[language]}`}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
        unoptimized={project.image.endsWith(".svg")}
        className="object-cover object-top grayscale-[25%] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:grayscale-0"
      />

      {/* Category Pill */}
      <div className="absolute left-4 top-4 z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#07080b]/85 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-md">
          <span
            className={
              project.url
                ? "h-1.5 w-1.5 rounded-full bg-emerald-400"
                : "h-1.5 w-1.5 rounded-full bg-cyan-400"
            }
            aria-hidden="true"
          />
          {project.industry[language]}
        </span>
      </div>

      {/* Hover Dark Overlay + Animated Eye Icon & "View Live Website" */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center bg-[#07080b]/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden={!project.url}
      >
        <span className="inline-flex translate-y-2 items-center gap-2.5 rounded-full border border-emerald-400/50 bg-[#0d121a]/95 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_32px_-8px_rgba(0,0,0,0.85)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0">
          <Eye className="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
          <span>{project.url ? labels.viewLive : labels.caseDetails}</span>
        </span>
      </div>
    </>
  );

  return (
    <article className="studio-card neon-card-lift group flex h-full flex-col overflow-hidden rounded-[26px]">
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${labels.viewLive}: ${project.name}`}
          className="relative block aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#07080b] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400"
        >
          {coverContent}
        </a>
      ) : (
        <Link
          href={`/realisations/${project.slug}`}
          aria-label={`${labels.caseDetails}: ${project.name}`}
          className="relative block aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#07080b] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400"
        >
          {coverContent}
        </Link>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus-visible:underline"
            >
              <Heading className="font-display text-2xl font-bold tracking-tight text-white transition group-hover:text-emerald-300">
                {project.name}
              </Heading>
            </a>
          ) : (
            <Link
              href={`/realisations/${project.slug}`}
              className="focus:outline-none focus-visible:underline"
            >
              <Heading className="font-display text-2xl font-bold tracking-tight text-white transition group-hover:text-emerald-300">
                {project.name}
              </Heading>
            </Link>
          )}

          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${labels.viewLive}: ${project.name}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 text-slate-300 transition duration-200 group-hover:border-emerald-400/45 group-hover:text-emerald-300"
            >
              <Eye className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <p className="mt-3 max-w-md flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
          {project.summary[language]}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
            >
              <Eye className="h-4 w-4" />
              <span>{labels.viewLive}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="text-xs font-medium text-slate-400">
              {labels.studioShowcase}
            </span>
          )}

          <Link
            href={`/realisations/${project.slug}`}
            className="inline-flex min-h-10 items-center text-sm font-medium text-slate-200 transition hover:text-white"
          >
            {labels.caseDetails}
          </Link>
        </div>
      </div>
    </article>
  );
}

export const ProjectCard = memo(ProjectCardBase);
