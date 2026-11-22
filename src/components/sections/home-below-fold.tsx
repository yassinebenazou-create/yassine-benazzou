"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, MessageCircle, Star } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { InstagramIcon, LinkedinIcon } from "@/components/social-icons";
import { ButtonLink, Container, SectionHeader } from "@/components/ui";
import { siteConfig, whatsappUrl } from "@/config/site";
import { targetMarkets, verifiedTechnologies, workProcessSteps } from "@/data/content";
import { faqItems } from "@/data/faq";
import { featuredProjects } from "@/data/projects";
import { verifiedTestimonials } from "@/data/testimonials";

const FaqAccordion = dynamic(
  () => import("@/components/faq-accordion").then((mod) => mod.FaqAccordion),
  { ssr: true },
);

const ContactForm = dynamic(
  () => import("@/components/contact-form").then((mod) => mod.ContactForm),
  { ssr: true },
);

export function HomeBelowFold() {
  return (
    <>
      <StatementAndProjectsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
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
      className="cv-auto border-b border-white/10 bg-[#0b0d12] py-24 sm:py-28 lg:py-32"
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
                  loading="lazy"
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
      className="cv-auto border-b border-white/10 bg-[#07080b] py-24 sm:py-28 lg:py-32"
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
              <li key={step.step} className="border-l-2 border-l-transparent p-6 transition hover:border-l-emerald-400 sm:p-9">
                <Reveal delay={index * 0.05}>
                  <p className="text-xs font-medium text-emerald-400">
                    {pr.stepLabel} {index + 1}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {step.title[language]}
                  </h3>
                  <p className="mt-2.5 max-w-lg text-base leading-relaxed text-slate-300">
                    {step.description[language]}
                  </p>
                </Reveal>
              </li>
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
      className="cv-auto border-b border-white/10 bg-[#0b0d12] py-24 sm:py-28 lg:py-32"
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
      className="cv-auto border-b border-white/10 bg-[#07080b] py-24 sm:py-28 lg:py-32"
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
  ].filter((item) => !item.isPlaceholder);

  return (
    <section
      id="contact"
      className="cv-auto relative overflow-hidden bg-[#0b0d12] py-24 sm:py-28 lg:py-32"
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
