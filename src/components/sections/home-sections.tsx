"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroVisual } from "@/components/hero-visual";
import { TubesBackground } from "@/components/TubesBackground";
import { useLanguage } from "@/components/language-provider";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { InstagramIcon, LinkedinIcon } from "@/components/social-icons";
import { ButtonLink, Container, SectionHeader } from "@/components/ui";
import { siteConfig, whatsappUrl } from "@/config/site";
import {
  targetMarkets,
  verifiedTechnologies,
  whyWorkWithMeItems,
  workProcessSteps,
} from "@/data/content";
import { faqItems } from "@/data/faq";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import { verifiedTestimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <BenefitsBentoSection />
      <StatementAndProjectsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

function HeroSection() {
  const { language, content } = useLanguage();
  const h = content.hero;

  return (
    <TubesBackground className="border-b border-white/10">
      <section
        id="home"
        className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
      >
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  {h.available}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-200 backdrop-blur">
                  <Globe2 className="h-3.5 w-3.5 text-emerald-400" />
                  {h.location}
                </span>
              </div>

              <p className="mt-7 text-sm font-medium text-slate-300">
                {h.identity}
              </p>

              <h1 className="font-display mt-3 text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.03]">
                {h.headline}
              </h1>

              <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
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

          <div className="mt-14 flex justify-center">
            <a
              href="#projects"
              aria-label={language === "fr" ? "Défiler vers les projets" : "Scroll to projects"}
              className="animate-scroll-bounce inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-emerald-400/45 hover:text-white"
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
      className="border-y border-white/10 bg-[#0b0d12] py-8 sm:py-10"
    >
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">
              {t.label}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-200">
              {t.marketsSummary}
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
      className="border-b border-white/10 bg-[#07080b] py-24 sm:py-28 lg:py-32"
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

function StatementAndProjectsSection() {
  const { content } = useLanguage();
  const p = content.projects;
  const st = content.statement;
  const a = content.about;

  return (
    <section
      id="projects"
      className="border-b border-white/10 bg-[#0b0d12] py-24 sm:py-28 lg:py-32"
    >
      <Container>
        {/* Bold Full-Width Statement */}
        <Reveal>
          <div className="rounded-[28px] border border-white/12 bg-[#07080b] p-8 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] sm:p-12 lg:p-16">
            <p className="text-xs font-medium text-emerald-400">
              {st.eyebrow}
            </p>
            <p className="font-display mt-4 max-w-5xl text-balance text-2xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
              {st.headline}
            </p>
          </div>
        </Reveal>

        {/* Responsive Bento Project Grid */}
        <div className="mt-20 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader eyebrow={p.eyebrow} title={p.title} text={p.subtitle} />
          <ButtonLink href="/realisations" variant="secondary" className="w-full shrink-0 sm:w-fit">
            {p.viewAll}
          </ButtonLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-6">
          {featuredProjects.map((project, index) => {
            const spanClass =
              index < 2
                ? "md:col-span-3"
                : index < 4
                  ? "md:col-span-3 lg:col-span-2"
                  : "md:col-span-6 lg:col-span-2";

            return (
              <Reveal key={project.slug} delay={index * 0.05} className={spanClass}>
                <ProjectCard project={project} headingLevel="h3" />
              </Reveal>
            );
          })}
        </div>

        {/* Asymmetrical Founder & Stack Block */}
        <div
          id="about"
          className="mt-20 grid items-center gap-10 border-t border-white/10 pt-16 lg:grid-cols-12 lg:gap-14"
        >
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[#07080b] p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                <Image
                  src="/profile/coveragence.png"
                  alt="Yassine Benazzou — Independent Web Developer & Designer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-2 px-3 pb-1.5 pt-3.5 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  {a.badge}
                </span>
                <span className="font-medium text-emerald-400">{siteConfig.city}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <SectionHeader eyebrow={a.eyebrow} title={a.title} />
            <div className="mt-5 max-w-xl space-y-3 text-base leading-relaxed text-slate-300">
              {a.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7">
              <p className="text-xs font-medium text-slate-400">
                {a.stackTitle}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {verifiedTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-[#07080b] px-3 py-1 font-mono text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/#contact" variant="primary" className="w-full sm:w-auto">
                {a.cta}
              </ButtonLink>
              <ButtonLink href="/a-propos" variant="secondary" className="w-full sm:w-auto">
                {a.moreAboutCta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function HowItWorksSection() {
  const { language, content } = useLanguage();
  const pr = content.process;

  return (
    <section
      id="process"
      className="border-b border-white/10 bg-[#07080b] py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeader
                eyebrow={pr.eyebrow}
                title={pr.title}
                text={pr.subtitle}
              />
              <div className="mt-8">
                <ButtonLink href="/#contact" variant="primary" className="w-full sm:w-auto">
                  {pr.cta}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <ol className="divide-y divide-white/10 rounded-[26px] border border-white/12 bg-[#0e1117] shadow-[0_20px_50px_-28px_rgba(0,0,0,0.9)]">
            {workProcessSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.05}>
                <li className="border-l-2 border-l-transparent p-6 transition hover:border-l-emerald-400 sm:p-9">
                  <p className="text-xs font-medium text-emerald-400">
                    {pr.stepLabel} {index + 1}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {step.title[language]}
                  </h3>
                  <p className="mt-2.5 max-w-lg text-base leading-relaxed text-slate-300">
                    {step.description[language]}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function TestimonialsSection() {
  const { language, content } = useLanguage();
  const tm = content.testimonials;

  return (
    <section
      id="testimonials"
      className="border-b border-white/10 bg-[#0b0d12] py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <SectionHeader
              eyebrow={tm.eyebrow}
              title={tm.title}
              text={tm.subtitle}
            />

            <div className="studio-card mt-8 rounded-[24px] p-6 sm:p-7">
              <div className="flex items-center gap-2 text-emerald-400">
                <Star className="h-4 w-4 fill-emerald-400" />
                <span className="text-xs font-medium text-emerald-300">
                  Google Profile
                </span>
              </div>
              <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-white">
                {tm.googleTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {tm.googleDescription}
              </p>
              <ButtonLink
                href={siteConfig.socials.googleReview}
                external
                variant="secondary"
                className="mt-5 w-full"
              >
                <span>{tm.googleButton}</span>
                <ExternalLink className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            {verifiedTestimonials.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {verifiedTestimonials.map((item) => (
                  <blockquote
                    key={item.id}
                    className="studio-card flex flex-col justify-between rounded-[24px] p-6 sm:p-7"
                  >
                    <p className="text-base leading-relaxed text-slate-200">
                      &ldquo;{item.quote[language]}&rdquo;
                    </p>
                    <footer className="mt-6 border-t border-white/10 pt-4">
                      <p className="font-display text-sm font-bold text-white">
                        {item.author}
                      </p>
                      <p className="text-xs text-slate-400">
                        {item.role[language]} · {item.company}
                      </p>
                    </footer>
                  </blockquote>
                ))}
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.04}>
                  <article className="studio-card flex h-full flex-col justify-between rounded-[22px] p-6">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-emerald-400">
                          {project.industry[language]}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                          {project.url ? tm.liveBadge : tm.showcaseBadge}
                        </span>
                      </div>

                      <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-white">
                        {project.name}
                      </h3>

                      <p className="mt-2 text-xs font-medium text-slate-400">
                        {tm.deliverableLabel}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                        {project.solution[language]}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                      <Link
                        href={`/realisations/${project.slug}`}
                        className="text-xs font-semibold text-slate-200 transition hover:text-emerald-300"
                      >
                        {content.projects.caseDetails}
                      </Link>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 transition hover:text-emerald-300"
                        >
                          <span>{content.projects.viewLive}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  const { language, content } = useLanguage();
  const f = content.faq;
  const localizedFaq = faqItems.map((item) => ({
    question: item.question[language],
    answer: item.answer[language],
  }));

  return (
    <section
      id="faq"
      className="border-b border-white/10 bg-[#07080b] py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={f.eyebrow}
              title={f.title}
              text={f.subtitle}
            />
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0e1117] p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                {f.quickNote}
              </p>
              <ButtonLink
                href={whatsappUrl()}
                external
                variant="secondary"
                className="mt-4 w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>{f.whatsappCta}</span>
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <FaqAccordion items={localizedFaq} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactSection() {
  const { language, content } = useLanguage();
  const c = content.contact;
  const markets = targetMarkets[language];

  const channels = [
    {
      key: "whatsapp",
      label: c.channels.whatsapp,
      hint: c.channels.whatsappHint,
      value: siteConfig.phone,
      href: whatsappUrl(),
      icon: MessageCircle,
      isPlaceholder: siteConfig.isWhatsappPlaceholder,
      external: true,
    },
    {
      key: "email",
      label: c.channels.email,
      hint: c.channels.emailHint,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      isPlaceholder: siteConfig.isEmailPlaceholder,
      external: false,
    },
    {
      key: "linkedin",
      label: c.channels.linkedin,
      hint: c.channels.linkedinHint,
      value: "Yassine Benazzou",
      href: siteConfig.socials.linkedin,
      icon: LinkedinIcon,
      isPlaceholder: false,
      external: true,
    },
    {
      key: "instagram",
      label: c.channels.instagram,
      hint: c.channels.instagramHint,
      value: "@yassine.benazzou",
      href: siteConfig.socials.instagram,
      icon: InstagramIcon,
      isPlaceholder: false,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0d12] py-24 sm:py-28 lg:py-32"
    >
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.44fr_0.56fr] lg:gap-16">
          <Reveal>
            <div>
              <SectionHeader
                eyebrow={c.eyebrow}
                title={c.title}
                text={c.subtitle}
              />

              <div className="mt-7 flex flex-wrap gap-2">
                {markets.map((market) => (
                  <span
                    key={market}
                    className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs font-medium text-emerald-200"
                  >
                    {market}
                  </span>
                ))}
              </div>

              <div className="mt-9">
                <h3 className="text-xs font-semibold text-slate-300">
                  {c.directTitle}
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">{c.directSubtitle}</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {channels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <a
                        key={channel.key}
                        href={channel.href}
                        target={channel.external ? "_blank" : undefined}
                        rel={channel.external ? "noopener noreferrer" : undefined}
                        className="studio-card group flex min-h-14 flex-col justify-between gap-2 rounded-2xl p-4"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                            <Icon className="h-4 w-4 text-emerald-400" />
                            <span>{channel.label}</span>
                          </span>
                          {channel.external ? (
                            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400 transition group-hover:text-emerald-300" />
                          ) : null}
                        </div>
                        <span className="block truncate text-xs text-slate-300">
                          {channel.value}
                        </span>
                        {channel.isPlaceholder ? (
                          <span className="w-fit rounded-md border border-amber-400/25 bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
                            {c.placeholderTag}
                          </span>
                        ) : (
                          <span className="block text-[11px] text-slate-400">
                            {channel.hint}
                          </span>
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <ContactForm />
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
    <section className="border-t border-white/10 bg-[#07080b] py-20 sm:py-24 lg:py-28">
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
