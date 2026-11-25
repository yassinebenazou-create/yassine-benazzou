"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Check,
  Globe2,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { TubesBackground } from "@/components/TubesBackground";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { ButtonLink, Container, SectionHeader } from "@/components/ui";
import { siteConfig, whatsappUrl } from "@/config/site";
import { whyWorkWithMeItems } from "@/data/content";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const HomeBelowFold = dynamic(
  () => import("./home-below-fold").then((mod) => mod.HomeBelowFold),
  { ssr: true },
);

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <BenefitsBentoSection />
      <HomeBelowFold />
    </>
  );
}

function HeroSection() {
  const { language, content } = useLanguage();
  const h = content.hero;
  const headlineParts = h.headline.split(language === "fr" ? " pour " : " for ");

  return (
    <TubesBackground className="border-b border-white/10">
      <section
        id="home"
        className="hero-section relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
      >
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-400/12 px-3.5 py-1.5 text-xs font-medium text-emerald-300 md:bg-emerald-400/10 md:backdrop-blur">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="hidden h-full w-full rounded-full bg-emerald-400 opacity-75 md:absolute md:inline-flex md:motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  {h.available}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-slate-200 md:bg-white/[0.04] md:backdrop-blur">
                  <Globe2 className="h-3.5 w-3.5 text-emerald-400" />
                  {h.location}
                </span>
              </div>

              <p className="mt-7 text-xs font-semibold tracking-[0.08em] text-slate-300 sm:text-sm">
                {h.identity}
              </p>

              <h1 className="font-display mt-4 max-w-[13ch] text-balance text-[2.65rem] font-extrabold leading-[0.99] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.25rem]">
                {headlineParts.length === 2 ? (
                  <>
                    {headlineParts[0]}
                    <span className="hero-title-accent">
                      {language === "fr" ? " pour " : " for "}
                      {headlineParts[1]}
                    </span>
                  </>
                ) : (
                  h.headline
                )}
              </h1>

              <p className="mt-6 max-w-[34rem] text-pretty text-base leading-8 text-slate-300 sm:text-lg sm:leading-8">
                {h.description}
              </p>

              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <ButtonLink href="/#contact" variant="primary" className="min-h-13 w-full px-7 sm:w-auto">
                  {h.primaryCta}
                </ButtonLink>
                <ButtonLink href="/#projects" variant="secondary" className="min-h-13 w-full px-7 sm:w-auto">
                  {h.secondaryCta}
                </ButtonLink>
              </div>
            </div>

            <div className="md:animate-neon-float">
              <HeroVisual />
            </div>
          </div>

          <div className="mt-12 flex justify-center sm:mt-14">
            <a
              href="#projects"
              className="md:animate-scroll-bounce inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/12 bg-[#07080b]/35 px-4 text-xs font-medium text-slate-300 backdrop-blur-sm transition hover:border-emerald-400/45 hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>{language === "fr" ? "Voir les réalisations" : "Explore selected work"}</span>
            </a>
          </div>
        </Container>
      </section>
    </TubesBackground>
  );
}

function TrustBarSection() {
  const { content } = useLanguage();
  const t = content.trustBar;

  return (
    <section
      aria-label={t.label}
      className="border-y border-white/10 bg-[#0b0d12]/90 py-7 sm:py-8"
    >
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">
              {t.label}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-200">
              {t.marketsSummary}{" "}
              <span className="text-slate-500" aria-hidden="true">·</span>{" "}
              <Link href="/creation-site-web-maroc" className="text-emerald-300 underline-offset-4 hover:underline">
                Maroc
              </Link>{" "}
              <span className="text-slate-500" aria-hidden="true">/</span>{" "}
              <Link href="/creation-site-web-france" className="text-emerald-300 underline-offset-4 hover:underline">
                France
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/realisations/${project.slug}`}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/45 hover:text-white"
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    project.url ? "bg-emerald-400" : "bg-cyan-400",
                  )}
                  aria-hidden="true"
                />
                <span>{project.name}</span>
              </Link>
            ))}

            <a
              href={siteConfig.socials.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
            >
              <Star className="h-3.5 w-3.5" />
              <span>{t.reviewsCta}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BenefitsBentoSection() {
  const { language, content } = useLanguage();
  const b = content.benefits;
  const primaryService = services[0];
  const rowServices = services.slice(1, 4);

  return (
    <section
      id="services"
      className="cv-auto border-b border-white/10 bg-[#07080b] py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader eyebrow={b.eyebrow} title={b.title} text={b.subtitle} />
          <ButtonLink href="/services" variant="secondary" className="w-full shrink-0 sm:w-fit">
            {b.viewServicesCta}
          </ButtonLink>
        </div>

        {/* Clean Asymmetrical 12-Col Bento Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Bento Tile 1: Wide Feature Card */}
          <Reveal className="md:col-span-7">
            <article className="studio-card flex h-full flex-col justify-between rounded-[26px] p-7 sm:p-9">
              <div>
                <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {b.featuredTag}
                </span>

                <h3 className="font-display mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {primaryService.title[language]}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
                  {primaryService.description[language]}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {primaryService.benefits[language].map((benefit) => (
                    <li
                      key={benefit}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-200"
                    >
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <Link
                  href={`/services/${primaryService.slug}`}
                  className="inline-flex min-h-10 items-center text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                >
                  {content.services.explore}
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Bento Tile 2: Direct Collaboration */}
          <Reveal delay={0.05} className="md:col-span-5">
            <article className="studio-card flex h-full flex-col justify-between rounded-[26px] p-7 sm:p-9">
              <div>
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-medium text-emerald-300">
                    {language === "fr" ? "Approche directe" : "Direct collaboration"}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white">
                  {b.soloTitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  {b.soloDescription}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
                {whyWorkWithMeItems.slice(4, 6).map((item) => (
                  <div key={item.key}>
                    <p className="text-xs font-semibold text-white">
                      {item.title[language]}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* Bento Tile 3: Speed, Responsive & SEO */}
          <Reveal delay={0.08} className="md:col-span-5">
            <article className="studio-card flex h-full flex-col justify-between rounded-[26px] p-7 sm:p-9">
              <div>
                <div className="flex items-center gap-3 text-emerald-400">
                  <Smartphone className="h-5 w-5 text-cyan-300" />
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold tracking-tight text-white">
                  {b.speedTitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  {b.speedDescription}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                <Link
                  href="/services/responsive-web-design"
                  className="inline-flex min-h-10 items-center text-sm font-semibold text-slate-200 transition hover:text-emerald-300"
                >
                  {services[4].title[language]}
                </Link>
                <span className="self-center text-slate-400" aria-hidden="true">
                  ·
                </span>
                <Link
                  href="/services/maintenance-seo"
                  className="inline-flex min-h-10 items-center text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                >
                  {services[5].title[language]}
                </Link>
                <span className="self-center text-slate-400" aria-hidden="true">
                  ·
                </span>
                <Link
                  href="/tarifs"
                  className="inline-flex min-h-10 items-center text-sm font-semibold text-slate-200 transition hover:text-emerald-300"
                >
                  {language === "fr" ? "Tarifs & Devis" : "Pricing & Scope"}
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Bento Tile 4: Wide Action Services Showcase */}
          <Reveal delay={0.1} className="md:col-span-7">
            <article className="studio-card flex h-full flex-col justify-between rounded-[26px] p-7 sm:p-9">
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                  {b.commerceTitle}
                </h3>
                <p className="mt-2.5 max-w-xl text-base leading-relaxed text-slate-300">
                  {b.commerceDescription}
                </p>

                <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#080a0f]">
                  {rowServices.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="group flex min-h-14 items-center justify-between gap-4 px-5 py-3.5 transition hover:bg-white/[0.03]"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white transition group-hover:text-emerald-300">
                          {svc.title[language]}
                        </p>
                        <p className="truncate text-xs text-slate-400">
                          {svc.eyebrow[language]}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs font-medium text-emerald-400 opacity-80 transition group-hover:opacity-100">
                        {content.services.explore}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  const { content } = useLanguage();
  const c = content.contact;

  return (
    <section className="cv-auto border-t border-white/10 bg-[#07080b] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="studio-card rounded-[28px] p-8 sm:p-12 lg:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-medium text-emerald-400">
                {c.eyebrow}
              </p>
              <h2 className="font-display mt-3 text-balance text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                {c.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                {c.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/#contact" variant="primary" className="w-full">
                {content.nav.letsTalk}
              </ButtonLink>
              <ButtonLink
                href={whatsappUrl()}
                variant="secondary"
                external
                className="w-full"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
