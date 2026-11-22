import Link from "next/link";
import { CheckCircle2, Globe2, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/home-sections";
import { ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { siteConfig, whatsappUrl } from "@/config/site";
import { services } from "@/data/services";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, localServiceJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Développeur Web Freelance France",
  absoluteTitle: "Développeur Web Freelance France | Yassine Benazzou",
  description:
    "Développeur web freelance Next.js travaillant à distance pour les PME en France : création site internet France, refonte, performance web et SEO technique.",
  path: "/creation-site-web-france",
  locale: "fr_FR",
  keywords: [
    "développeur web freelance France",
    "création site internet France",
    "développeur web freelance pour PME",
    "création site web professionnel",
    "freelance développeur Next.js",
  ],
});

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Développeur Web Freelance France", href: "/creation-site-web-france" },
];

const francePillars = [
  {
    title: "Collaboration fluide sur des horaires alignés",
    text: "Basé à El Jadida au Maroc (0 à 1 heure d'écart avec la France selon la saison), je travaille en direct avec vos équipes par visioconférence et lien de prévisualisation continu.",
  },
  {
    title: "Exigence Core Web Vitals & SEO Google France",
    text: "Chaque site vitrine, landing page ou refonte Next.js vise des temps de chargement rapides sur mobile, un HTML sémantique propre et zéro dépendance superflue.",
  },
  {
    title: "Interlocuteur unique du design au déploiement",
    text: "Pas d'intermédiaire commercial : vous échangez directement avec le développeur Full Stack qui conçoit l'interface, écrit le code TypeScript/React et prépare la mise en ligne.",
  },
];

const franceUseCases = [
  {
    sector: "PME & Cabinets de conseil en France",
    need: "Remplacer un site vitrine daté par une présentation claire de votre expertise, structurée pour convertir les décideurs B2B.",
  },
  {
    sector: "Startups & Éditeurs SaaS",
    need: "Déployer des pages marketing et landing pages Next.js ultra-rapides pour vos lancements produit et campagnes d'acquisition.",
  },
  {
    sector: "Marques D2C & Boutiques en ligne",
    need: "Optimiser le parcours produit mobile, la vitesse d'affichage et le référencement naturel sous Next.js ou WooCommerce.",
  },
];

const franceFaqs = [
  {
    question: "Comment travaille un développeur web freelance basé au Maroc avec une PME en France ?",
    answer:
      "Basé à El Jadida (0 à 1 heure d'écart selon la saison), je pilote le projet en français par visioconférence avec un lien de prévisualisation continu jusqu'à la mise en production.",
  },
  {
    question: "Disposez-vous d'un bureau physique en France ?",
    answer:
      "Non — mon studio indépendant est basé à El Jadida, au Maroc, et j'accompagne les entreprises en France 100 % à distance sur les horaires de bureau européens.",
  },
  {
    question: "Pourquoi choisir Next.js pour une création de site internet professionnel en France ?",
    answer:
      "Next.js délivre des pages pré-rendues rapides sur mobile et desktop, conformes aux exigences Core Web Vitals de Google et plus sûres qu'un empilement de plugins.",
  },
  {
    question: "Pouvez-vous reprendre ou refondre un site WordPress ou React existant sans perte SEO ?",
    answer:
      "Oui. Avant toute refonte de site internet, les URLs indexées, balises meta et redirections nécessaires sont vérifiées pour préserver votre visibilité Google.",
  },
];

const selectedSlugs = ["business-website-development", "website-redesign", "landing-page"];

export default function FranceLandingPage() {
  const selectedServices = selectedSlugs
    .map((slug) => services.find((item) => item.slug === slug))
    .filter((item): item is (typeof services)[number] => Boolean(item));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd
        data={localServiceJsonLd({
          name: "Développeur Web Freelance France — Création Site Internet",
          description:
            "Création de site vitrine, refonte Next.js et e-commerce à distance pour entreprises et startups en France.",
          path: "/creation-site-web-france",
          areaServed: "France",
        })}
      />
      <JsonLd data={faqJsonLd(franceFaqs)} />

      <PageHero
        eyebrow="France · Développeur Freelance à Distance"
        title="Développeur Web Freelance France & Création de Site Internet."
        text="Création de site web professionnel, site vitrine Next.js et refonte pour PME en France, réalisés à distance depuis le Maroc en interlocuteur direct."
      >
        <ButtonLink href="/contact">
          Demander un devis
        </ButtonLink>
        <ButtonLink href={whatsappUrl("Bonjour Yassine, je souhaite discuter d'un projet web pour la France.")} external variant="secondary">
          <MessageCircle className="h-4 w-4 text-emerald-400" />
          <span>WhatsApp Direct</span>
        </ButtonLink>
      </PageHero>

      <section className="border-b border-white/10 bg-[#0b0d12] py-20 sm:py-24">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <SectionHeader
                eyebrow="Partenaire Technique Indépendant"
                title="Exécution Next.js & Design Web Sur Mesure en Interlocuteur Direct"
                text="Que vous lanciez un nouveau produit ou souhaitiez moderniser un site vitrine existant, chaque décision privilégie la clarté éditoriale, la rapidité mobile et l'indexation Google."
              />

              <div className="mt-8 rounded-2xl border border-white/10 bg-[#07080b] p-5 text-sm text-slate-200">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Globe2 className="h-4 w-4 text-emerald-400" />
                  <span>Transparence géographique & organisation</span>
                </div>
                <p className="mt-2 leading-relaxed text-slate-300">
                  Studio indépendant basé à {siteConfig.city}, {siteConfig.country}. Accompagnement
                  100 % à distance des entreprises partout en France sur horaires compatibles Europe
                  de l&apos;Ouest, sans bureau physique en France.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {francePillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className={`studio-card rounded-[20px] p-6 ${idx === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <div>
                        <h2 className="font-display text-lg font-bold text-white">
                          {pillar.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                          {pillar.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#07080b] p-6 sm:p-7">
                <p className="text-xs font-medium text-emerald-400">
                  Cas d&apos;usage courants en France
                </p>
                <div className="mt-4 divide-y divide-white/10">
                  {franceUseCases.map((item) => (
                    <div key={item.sector} className="py-3.5 first:pt-0 last:pb-0">
                      <p className="font-display text-base font-bold text-white">
                        {item.sector}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">
                        {item.need}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#07080b] py-20 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Prestations Phares"
              title="Services Adaptés aux Entreprises en France"
              text="Chaque projet inclut un code TypeScript propre, l'optimisation Core Web Vitals et la préparation SEO."
            />
            <ButtonLink href="/realisations" variant="secondary" className="w-full shrink-0 sm:w-fit">
              Voir les réalisations clients
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {selectedServices.map((service) => (
              <article
                key={service.slug}
                className="studio-card flex flex-col justify-between rounded-[24px] p-7"
              >
                <div>
                  <h2 className="font-display text-xl font-bold text-white">
                    {service.title.fr}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.description.fr}
                  </p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex min-h-10 items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  Découvrir ce service
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#0b0d12] py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
            <SectionHeader
              eyebrow="FAQ — France"
              title="Questions Fréquentes sur la Collaboration"
              text="Organisation à distance, facturation, refonte sans perte SEO et délais d'exécution."
            />
            <FaqAccordion items={franceFaqs} />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
