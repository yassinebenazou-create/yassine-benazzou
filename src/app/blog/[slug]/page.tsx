import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/home-sections";
import { ButtonLink, Container, PageHero } from "@/components/ui";
import { blogArticles, getBlogArticle } from "@/data/articles";
import { articleJsonLd, breadcrumbJsonLd, createMetadata, faqJsonLd } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.title,
    absoluteTitle: article.metaTitle,
    description: article.seoDescription,
    path: `/blog/${article.slug}`,
    locale: "fr_FR",
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default async function BlogArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Accueil", href: "/" },
    { name: "Guides & Blog", href: "/blog" },
    { name: article.title, href: `/blog/${article.slug}` },
  ];

  const relatedArticles = (article.relatedSlugs ?? [])
    .map((relatedSlug) => getBlogArticle(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd
        data={articleJsonLd({
          headline: article.title,
          description: article.seoDescription,
          path: `/blog/${article.slug}`,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          inLanguage: "fr",
        })}
      />
      {article.faqs && article.faqs.length > 0 ? (
        <JsonLd data={faqJsonLd(article.faqs)} />
      ) : null}

      <PageHero
        eyebrow={article.category}
        title={article.title}
        text={article.intro}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs text-slate-300">
          <Clock className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
          <span>
            Lecture {article.readingTime} · Mis à jour le {article.updatedAt} · Par Yassine Benazzou
          </span>
        </div>
      </PageHero>

      <article className="bg-[#0b0d12] py-16 sm:py-20">
        <Container className="max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Breadcrumbs items={breadcrumbs} />
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-emerald-400"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Tous les guides</span>
            </Link>
          </div>

          <div className="space-y-10">
            {article.sections.map((section) => (
              <section
                key={section.heading}
                className="rounded-[24px] border border-white/10 bg-[#0e1117] p-6 sm:p-8"
              >
                <h2 className="font-display text-2xl font-bold tracking-tight text-white">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.subheadings && section.subheadings.length > 0 ? (
                  <div className="mt-6 space-y-5 border-t border-white/10 pt-5">
                    {section.subheadings.map((sub) => (
                      <div key={sub.title}>
                        <h3 className="font-display text-lg font-semibold text-white">
                          {sub.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.table ? (
                  <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-[#080a0f]">
                    <table className="w-full border-collapse text-left text-sm">
                      {section.table.caption ? (
                        <caption className="sr-only">{section.table.caption}</caption>
                      ) : null}
                      <thead>
                        <tr className="border-b border-white/10 bg-white/[0.03] text-xs font-semibold text-emerald-300">
                          {section.table.headers.map((header) => (
                            <th key={header} scope="col" className="px-4 py-3">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10 text-slate-200">
                        {section.table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, idx) => (
                              <td
                                key={`${row[0]}-${idx}`}
                                className={
                                  idx === 0
                                    ? "px-4 py-3.5 font-semibold text-white"
                                    : "px-4 py-3.5 text-slate-300"
                                }
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5 text-sm leading-relaxed text-slate-200 sm:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {article.faqs && article.faqs.length > 0 ? (
            <section className="mt-12 rounded-[24px] border border-white/10 bg-[#0e1117] p-6 sm:p-8">
              <p className="text-xs font-medium text-emerald-400">Questions fréquentes</p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white">
                Points clés à retenir avant de démarrer
              </h2>
              <div className="mt-6">
                <FaqAccordion items={article.faqs} />
              </div>
            </section>
          ) : null}

          <aside className="mt-12 grid gap-6 rounded-[24px] border border-emerald-400/20 bg-emerald-400/[0.04] p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <p className="text-xs font-medium text-emerald-400">Service associé</p>
              <Link
                href={`/services/${article.relatedServiceSlug}`}
                className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-white transition hover:text-emerald-300"
              >
                <span>{article.relatedServiceLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <Link
                  href={article.relatedLandingHref}
                  className="font-medium text-emerald-300 underline underline-offset-4 transition hover:text-emerald-200"
                >
                  {article.relatedLandingLabel}
                </Link>
                <Link
                  href="/creation-site-web-france"
                  className="font-medium text-slate-300 underline underline-offset-4 transition hover:text-emerald-300"
                >
                  Freelance France
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-emerald-400">Passer à l&apos;action</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <ButtonLink href={article.secondaryLandingHref} variant="secondary" className="min-h-10 px-4 text-xs">
                  {article.secondaryLandingLabel}
                </ButtonLink>
                <ButtonLink href="/contact" className="min-h-10 px-4 text-xs">
                  Demander un devis
                </ButtonLink>
              </div>
            </div>
          </aside>

          {relatedArticles.length > 0 ? (
            <section className="mt-12 border-t border-white/10 pt-10">
              <p className="text-xs font-medium text-emerald-400">À lire aussi</p>
              <h2 className="font-display mt-2 text-2xl font-bold text-white">
                Guides complémentaires
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="studio-card group flex flex-col justify-between rounded-2xl p-5"
                  >
                    <div>
                      <p className="text-xs font-medium text-emerald-400">{related.category}</p>
                      <p className="font-display mt-2 text-lg font-bold text-white transition group-hover:text-emerald-300">
                        {related.title}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <span>Lire le guide</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </Container>
      </article>

      <FinalCta />
    </>
  );
}
