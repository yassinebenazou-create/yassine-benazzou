import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/home-sections";
import { ButtonLink, Container, PageHero } from "@/components/ui";
import { pricingPlans } from "@/data/pricing";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Business Website Pricing & Custom Quotes",
  description:
    "Custom website development pricing in Morocco and abroad for business sites, e-commerce stores, and bilingual web platforms.",
  path: "/tarifs",
  keywords: [
    "Business Website Development",
    "Website Development Morocco",
    "Création site web Maroc",
  ],
});

export default function PricingPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/tarifs" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero
        eyebrow="Investment & Scope"
        title="Custom Quotes Matched to Your Scope"
        text="Every engagement starts with a discovery call so deliverables, timeline, and pricing stay transparent from day one."
      >
        <ButtonLink href="/contact">
          Request Your Project Quote
        </ButtonLink>
      </PageHero>

      <section className="bg-[#0b0d12] py-20 sm:py-24">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          {/* Asymmetrical Bento Pricing Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {pricingPlans.map((plan, index) => (
              <article
                key={plan.name}
                className={cn(
                  "studio-card relative flex h-full flex-col rounded-[26px] p-7 sm:p-9",
                  index === 1
                    ? "border-emerald-400/45 lg:col-span-12"
                    : "lg:col-span-6",
                  index === 1 && "lg:order-first",
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    {plan.recommended ? (
                      <span className="mb-3 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                        Recommended for Growth
                      </span>
                    ) : null}
                    <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {plan.name}
                    </h2>
                  </div>
                  <p className="text-base font-semibold text-emerald-400">
                    {plan.price}
                  </p>
                </div>

                <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
                  {plan.description}
                </p>

                <ul
                  className={cn(
                    "mt-7 flex-1 gap-3 border-t border-white/10 pt-6 text-sm text-slate-200",
                    index === 1 ? "grid sm:grid-cols-2 lg:grid-cols-3" : "space-y-3",
                  )}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink href="/contact" className="mt-8 w-full sm:w-fit">
                  Request Quote for {plan.name}
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
