import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FinalCta } from "@/components/sections/home-sections";
import { ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function LocalSeoPage({
  location,
  title,
  text,
  highlights,
}: {
  location: string;
  title: string;
  text: string;
  highlights: string[];
}) {
  return (
    <>
      <PageHero eyebrow={`SEO Local — ${location}`} title={title} text={text}>
        <ButtonLink href="/#contact">
          <span>Demander un devis</span>
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </PageHero>

      <section className="border-b border-white/10 bg-[#0b0d12] py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Accompagnement"
            title={`Création de site web adaptée à ${location}`}
            text="Conception sur mesure pour les entreprises qui veulent inspirer confiance dès les premières secondes."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight, idx) => (
              <div
                key={highlight}
                className={cn(
                  "studio-card flex items-center rounded-[20px] p-6 text-base font-semibold text-white",
                  idx === 0 && "sm:col-span-2",
                )}
              >
                {highlight}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#07080b] py-24 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Solutions"
            title={`Services web disponibles pour ${location}`}
            text="Site vitrine, boutique e-commerce, landing page ou refonte complète."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
            {services.slice(0, 3).map((service, idx) => (
              <div
                key={service.slug}
                className={cn(
                  "studio-card flex flex-col justify-between rounded-[24px] p-7",
                  idx === 0 ? "md:col-span-12 lg:col-span-6" : "md:col-span-6 lg:col-span-3",
                )}
              >
                <div>
                  <p className="font-mono text-xs text-emerald-400">{service.number}</p>
                  <h2 className="font-display mt-3 text-xl font-bold text-white">
                    {service.title.fr}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.description.fr}
                  </p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Découvrir</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
