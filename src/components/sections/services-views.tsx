"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/home-sections";
import { ServiceCard } from "@/components/service-card";
import { ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { featuredProjects } from "@/data/projects";
import { services, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesArchiveView() {
  const { language, content } = useLanguage();
  const s = content.services;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} text={s.subtitle}>
        <ButtonLink href="/contact">
          {s.inquire}
        </ButtonLink>
      </PageHero>

      <section className="border-b border-white/10 bg-[#0b0d12] py-24 sm:py-28">
        <Container>
          {/* Asymmetrical Bento spans breaking 3-column repetition */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {services.map((service, index) => {
              const spanClass =
                index === 0 || index === 3 || index === 4
                  ? "md:col-span-7"
                  : "md:col-span-5";

              return (
                <Reveal key={service.slug} delay={index * 0.04} className={spanClass}>
                  <ServiceCard service={service} headingLevel="h2" />
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 grid gap-6 border-t border-white/10 pt-14 lg:grid-cols-2">
            <div className="studio-card rounded-[24px] p-7">
              <p className="text-xs font-medium text-emerald-400">
                {language === "fr" ? "Marchés accompagnés" : "Regional Focus"}
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold text-white">
                {language === "fr"
                  ? "Développement web pour le Maroc et la France"
                  : "Web development for Morocco & France"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {language === "fr"
                  ? "Découvrez les prestations adaptées aux entreprises basées au Maroc ou à la collaboration à distance avec les PME en France."
                  : "Explore dedicated pages tailored for businesses in Morocco and remote B2B teams in France."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/creation-site-web-maroc" variant="secondary">
                  {language === "fr" ? "Création site web Maroc" : "Morocco Web Services"}
                </ButtonLink>
                <ButtonLink href="/creation-site-web-france" variant="secondary">
                  {language === "fr" ? "Développeur freelance France" : "France Remote Services"}
                </ButtonLink>
                <ButtonLink href="/contact" variant="primary">
                  {language === "fr" ? "Demander un devis" : "Request a Quote"}
                </ButtonLink>
              </div>
            </div>

            <div className="studio-card rounded-[24px] p-7">
              <p className="text-xs font-medium text-emerald-400">
                {language === "fr" ? "Exemples réalisés" : "Selected Case Studies"}
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold text-white">
                {language === "fr"
                  ? "Projets vitrines, e-commerce et refontes en ligne"
                  : "Live showcase, e-commerce & redesign builds"}
              </h2>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {featuredProjects.slice(0, 4).map((project) => (
                  <Link
                    key={project.slug}
                    href={`/realisations/${project.slug}`}
                    className="rounded-xl border border-white/10 bg-[#080a0f] px-4 py-3 text-sm text-slate-200 transition hover:border-emerald-400/40 hover:text-white"
                  >
                    <span className="block font-semibold text-white">{project.name}</span>
                    <span className="block text-xs text-slate-400">
                      {project.industry[language]}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

export function ServiceDetailView({ service }: { service: Service }) {
  const { language, content } = useLanguage();
  const sub = content.subpages;

  const breadcrumbs = [
    { name: sub.homeCrumb, href: "/" },
    { name: sub.servicesCrumb, href: "/services" },
    { name: service.title[language], href: `/services/${service.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow[language]}
        title={service.title[language]}
        text={service.description[language]}
      >
        <ButtonLink href="/#contact">
          {content.services.inquire}
        </ButtonLink>
      </PageHero>

      <section className="bg-[#0b0d12] py-20 sm:py-24">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader
              eyebrow={sub.serviceDetailsEyebrow}
              title={sub.serviceDetailsTitle}
              text={sub.serviceDetailsText}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {service.features[language].map((feature, idx) => (
                <div
                  key={feature}
                  className={cn(
                    "studio-card rounded-2xl p-6",
                    idx === 0 && "sm:col-span-2",
                  )}
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <p className="mt-4 text-base font-semibold text-white">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
