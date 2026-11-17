"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/home-sections";
import { ServiceCard } from "@/components/service-card";
import { ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { services, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesArchiveView() {
  const { content } = useLanguage();
  const s = content.services;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} text={s.subtitle}>
        <ButtonLink href="/#contact">
          <span>{s.inquire}</span>
          <ArrowUpRight className="h-4 w-4" />
        </ButtonLink>
      </PageHero>

      <section className="bg-[#0b0d12] py-24 sm:py-28">
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
          <span>{content.services.inquire}</span>
          <ArrowUpRight className="h-4 w-4" />
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
