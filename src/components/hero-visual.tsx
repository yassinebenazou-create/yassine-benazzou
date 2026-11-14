"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { featuredProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function HeroVisual() {
  const { language, content } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const visual = content.hero.visual;
  const activeProject = featuredProjects[activeIndex] ?? featuredProjects[0];

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[#0e1118] shadow-[0_28px_75px_-30px_rgba(0,0,0,0.95)]">
        {/* Top Window Chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 font-mono text-xs text-slate-300">
              {visual.headerTitle}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {visual.statusBadge}
          </span>
        </div>

        {/* Selected Client Build Switcher */}
        <div
          className="flex gap-1.5 overflow-x-auto border-b border-white/[0.07] bg-[#0a0c12] px-4 py-2.5"
          role="tablist"
          aria-label={visual.switchLabel}
        >
          {featuredProjects.map((project, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={project.slug}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                  active
                    ? "bg-white text-slate-950"
                    : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:text-white",
                )}
              >
                {project.name}
              </button>
            );
          })}
        </div>

        {/* Live Project Preview Screen */}
        <div className="p-4 sm:p-5">
          <Link
            href={`/realisations/${activeProject.slug}`}
            className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#07080b]"
          >
            <Image
              src={activeProject.image}
              alt={`${activeProject.name} — ${activeProject.industry[language]}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 44vw"
              unoptimized={activeProject.image.endsWith(".svg")}
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </Link>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-emerald-300">
                {activeProject.industry[language]}
              </p>
              <h2 className="mt-0.5 font-display text-lg font-bold tracking-tight text-white">
                {activeProject.name}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {activeProject.url ? (
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
                >
                  <span>{content.projects.viewLive}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <Link
                  href={`/realisations/${activeProject.slug}`}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 text-xs font-semibold text-white transition hover:border-emerald-400/45"
                >
                  <span>{content.projects.caseDetails}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
            {[visual.pillOne, visual.pillTwo, visual.pillThree].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-200"
              >
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
