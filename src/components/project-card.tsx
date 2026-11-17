"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import type { Project } from "@/data/projects";

export function ProjectCard({
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

  return (
    <article className="studio-card group flex h-full flex-col overflow-hidden rounded-[26px]">
      <Link
        href={`/realisations/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#07080b]"
      >
        <Image
          src={project.image}
          alt={`${project.name} — ${project.industry[language]}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={project.image.endsWith(".svg")}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4">
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
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <Link
            href={`/realisations/${project.slug}`}
            className="focus:outline-none focus-visible:underline"
          >
            <Heading className="font-display text-2xl font-bold tracking-tight text-white transition group-hover:text-emerald-300">
              {project.name}
            </Heading>
          </Link>
          <Link
            href={`/realisations/${project.slug}`}
            aria-label={`${labels.caseDetails}: ${project.name}`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.03] text-slate-300 transition duration-200 group-hover:border-emerald-400/45 group-hover:text-emerald-300"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
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
              <span>{labels.viewLive}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
              {labels.studioShowcase}
            </span>
          )}

          <Link
            href={`/realisations/${project.slug}`}
            className="inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-slate-200 transition hover:text-white"
          >
            <span>{labels.caseDetails}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
