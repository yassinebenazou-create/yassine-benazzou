import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/home-sections";
import { Container, PageHero, SectionHeader } from "@/components/ui";
import { blogArticles } from "@/data/articles";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Guides Web, Prix & SEO Maroc / France",
  absoluteTitle: "Guides Web, Prix & SEO Maroc / France | Yassine Benazzou",
  description:
    "Guides pratiques pour PME au Maroc et en France : prix création site web Maroc, taux horaire développeur freelance, Next.js vs WordPress et site vitrine.",
  path: "/blog",
  locale: "fr_FR",
  keywords: [
    "prix création site web Maroc",
    "tarif création site web Maroc",
    "taux horaire développeur web freelance",
    "combien coûte un site internet professionnel",
  ],
});

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Guides & Blog", href: "/blog" },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero
        eyebrow="Ressources & Guides Pratiques"
        title="Guides Web, Performance & SEO pour Entreprises"
        text="Des réponses concrètes et sans jargon pour préparer votre création de site vitrine, boutique e-commerce ou refonte au Maroc et en France."
      />
      <section className="bg-[#0b0d12] py-20 sm:py-24">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <SectionHeader
            eyebrow="Articles Publiés"
            title="Préparer Votre Projet Web Avant le Premier Devis"
            text="Chaque guide traite une décision réelle rencontrée par les PME, cabinets et fondateurs."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {blogArticles.map((article) => (
              <article
                key={article.slug}
                className="studio-card flex h-full flex-col justify-between rounded-[24px] p-7 sm:p-8"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                    <span className="font-medium text-emerald-400">{article.category}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {article.readingTime} · {article.updatedAt}
                    </span>
                  </div>
                  <Link href={`/blog/${article.slug}`} className="group block">
                    <h2 className="font-display mt-3 text-xl font-bold leading-snug text-white transition group-hover:text-emerald-300 sm:text-2xl">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {article.intro}
                  </p>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                >
                  <span>Lire le guide complet</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
