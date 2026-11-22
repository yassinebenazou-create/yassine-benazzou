import Link from "next/link";
import { CheckCircle2, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/home-sections";
import { ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { siteConfig, whatsappUrl } from "@/config/site";
import { services } from "@/data/services";
import { breadcrumbJsonLd, faqJsonLd, localServiceJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const regionalLinks = [
  { label: "Maroc", href: "/creation-site-web-maroc" },
  { label: "France", href: "/creation-site-web-france" },
  { label: "El Jadida", href: "/creation-site-web-el-jadida" },
  { label: "Casablanca", href: "/creation-site-web-casablanca" },
  { label: "Agadir", href: "/creation-site-web-agadir" },
];

export type LocalFaqItem = {
  question: string;
  answer: string;
};

export type LocalUseCase = {
  sector: string;
  need: string;
};

export function LocalSeoPage({
  location,
  areaServed,
  path,
  title,
  text,
  collaborationNote,
  approachTitle,
  approachText,
  highlights,
  serviceSlugs,
  localUseCases,
  relatedProject,
  faqs,
}: {
  location: string;
  areaServed: string;
  path: string;
  title: string;
  text: string;
  collaborationNote: string;
  approachTitle: string;
  approachText: string;
  highlights: string[];
  serviceSlugs: string[];
  localUseCases: LocalUseCase[];
  relatedProject?: {
    name: string;
    slug: string;
    note: string;
  };
  faqs: LocalFaqItem[];
}) {
  const breadcrumbs = [
    { name: "Accueil", href: "/" },
    { name: `Création site web ${location}`, href: path },
  ];

  const selectedServices = serviceSlugs
    .map((slug) => services.find((item) => item.slug === slug))
    .filter((item): item is (typeof services)[number] => Boolean(item));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd
        data={localServiceJsonLd({
          name: title,
          description: text,
          path,
          areaServed,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <PageHero eyebrow={`Développeur Web Freelance — ${location}`} title={title} text={text}>
        <ButtonLink href="/contact">
          Demander un devis
        </ButtonLink>
        <ButtonLink href={whatsappUrl()} external variant="secondary">
          <MessageCircle className="h-4 w-4 text-emerald-400" />
          <span>WhatsApp · {siteConfig.phone}</span>
        </ButtonLink>
      </PageHero>

      <section className="border-b border-white/10 bg-[#0b0d12] py-20 sm:py-24">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <SectionHeader
                eyebrow={collaborationNote}
                title={approachTitle}
                text={approachText}
              />

              {relatedProject ? (
                <div className="mt-8 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.06] p-5">
                  <p className="text-xs font-medium text-emerald-300">
                    Réalisation Portfolio
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {relatedProject.note}
                  </p>
                  <Link
                    href={`/realisations/${relatedProject.slug}`}
                    className="mt-3 inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    Voir le projet {relatedProject.name}
                  </Link>
                </div>
              ) : null}

              {/* Consistent Direct Contact & Base Strip */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#07080b] p-5">
                <p className="text-xs font-medium text-slate-400">
                  Coordonnées directes
                </p>
                <ul className="mt-3 space-y-2.5 text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>
                      Studio basé à {siteConfig.city}, Maroc · Projets à distance partout au Maroc
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                      className="font-medium text-white hover:text-emerald-300"
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Star className="h-4 w-4 shrink-0 text-emerald-400" />
                    <a
                      href={siteConfig.socials.googleReview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-200 underline underline-offset-4 hover:text-emerald-300"
                    >
                      Consulter ou laisser un avis Google
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((highlight, idx) => (
                  <div
                    key={highlight}
                    className={cn(
                      "studio-card flex items-start gap-3 rounded-[20px] p-6 text-base font-semibold text-white",
                      idx === 0 && "sm:col-span-2",
                    )}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#07080b] p-6 sm:p-7">
                <p className="text-xs font-medium text-emerald-400">
                  Besoins fréquents — {location}
                </p>
                <div className="mt-4 divide-y divide-white/10">
                  {localUseCases.map((item) => (
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
              eyebrow="Solutions Web"
              title={`Services recommandés pour ${location}`}
              text="Chaque projet est développé avec un code propre, une structure SEO claire et une compatibilité mobile soignée."
            />
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/devis" variant="primary" className="w-full shrink-0 sm:w-fit">
                Estimer mon budget (/devis)
              </ButtonLink>
              <ButtonLink href="/tarifs" variant="secondary" className="w-full shrink-0 sm:w-fit">
                Voir les formules & devis
              </ButtonLink>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
            {selectedServices.map((service, idx) => (
              <div
                key={service.slug}
                className={cn(
                  "studio-card flex flex-col justify-between rounded-[24px] p-7",
                  idx === 0 ? "md:col-span-12 lg:col-span-6" : "md:col-span-6 lg:col-span-3",
                )}
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Location-Specific FAQ Section */}
      <section className="border-b border-white/10 bg-[#0b0d12] py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
            <div>
              <SectionHeader
                eyebrow={`FAQ — ${location}`}
                title={`Questions fréquentes à ${location}`}
                text="Réponses directes sur les délais, la méthode de travail à distance ou sur place et la gestion du site."
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {regionalLinks
                  .filter((item) => item.href !== path)
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-white/12 bg-[#07080b] px-3.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-emerald-400/45 hover:text-emerald-300"
                    >
                      Création site web {item.label}
                    </Link>
                  ))}
              </div>
            </div>

            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
