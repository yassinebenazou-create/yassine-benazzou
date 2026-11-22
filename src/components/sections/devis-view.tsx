"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { DevisEstimator } from "@/components/devis-estimator";
import { FaqAccordion } from "@/components/faq-accordion";
import { useLanguage } from "@/components/language-provider";
import { FinalCta } from "@/components/sections/home-sections";
import { ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { devisFaqs } from "@/data/devis";

const copy = {
  fr: {
    eyebrow: "Simulateur de Devis · MAD & EUR",
    title: "Estimez le Budget & le Délai de Votre Projet Web.",
    text: "Sélectionnez votre marché (Maroc ou France à distance), le type de site et vos options pour obtenir une estimation indicative avant de transmettre votre brief.",
    crumbHome: "Accueil",
    crumbCurrent: "Simulateur de Devis",
    faqEyebrow: "FAQ — Estimation & Devis",
    faqTitle: "Questions Fréquentes sur le Cadrage & les Tarifs",
    faqText:
      "Comprendre le passage de l'estimation indicative au devis ferme pour le Maroc et la France.",
    moroccoCta: "Création site web Maroc",
    franceCta: "Freelance France (remote)",
  },
  en: {
    eyebrow: "Quote & Budget Estimator · MAD & EUR",
    title: "Estimate Your Website Budget & Timeline.",
    text: "Choose your market (Morocco or France/Remote), project type, and options to get a transparent indicative range before sending your brief.",
    crumbHome: "Home",
    crumbCurrent: "Quote Estimator",
    faqEyebrow: "FAQ — Estimates & Quotes",
    faqTitle: "Common Questions on Scoping & Pricing",
    faqText:
      "How indicative estimates turn into a clear fixed quote for Morocco and remote international projects.",
    moroccoCta: "Morocco Web Services",
    franceCta: "France Remote Services",
  },
} as const;

export function DevisPageView() {
  const { language } = useLanguage();
  const c = copy[language];
  const breadcrumbs = [
    { name: c.crumbHome, href: "/" },
    { name: c.crumbCurrent, href: "/devis" },
  ];

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} text={c.text} />

      <section className="border-b border-white/10 bg-[#0b0d12] py-16 sm:py-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <DevisEstimator />
        </Container>
      </section>

      <section className="bg-[#07080b] py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
            <div>
              <SectionHeader
                eyebrow={c.faqEyebrow}
                title={c.faqTitle}
                text={c.faqText}
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/creation-site-web-maroc" variant="secondary">
                  {c.moroccoCta}
                </ButtonLink>
                <ButtonLink href="/creation-site-web-france" variant="secondary">
                  {c.franceCta}
                </ButtonLink>
              </div>
            </div>
            <FaqAccordion items={devisFaqs[language]} />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
