import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCta } from "@/components/sections/home-sections";
import { Container, PageHero, SectionHeader } from "@/components/ui";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

const upcomingTopics = [
  "How to structure homepage messaging before writing a single line of code",
  "Essential SEO fundamentals for small businesses targeting Morocco and Europe",
  "Choosing between a custom business website and a full e-commerce store",
];

export const metadata = createMetadata({
  title: "Insights & Web Strategy | Yassine Benazzou",
  description:
    "Upcoming practical guides on high-converting business websites, mobile speed, and SEO foundations.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical Guides on Web Design & SEO"
        text="Short field notes on conversion messaging, mobile usability, and technical search hygiene."
      />
      <section className="bg-[#0b0d12] py-24 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Upcoming"
            title="Planned Topics"
            text="New articles are in progress. Reach out directly if you need advice on an upcoming launch."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
            {upcomingTopics.map((topic, index) => (
              <article
                key={topic}
                className={cn(
                  "studio-card flex flex-col justify-between rounded-[24px] p-7",
                  index === 0 ? "md:col-span-12" : "md:col-span-6",
                )}
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    Upcoming Note
                  </p>
                  <h2 className="font-display mt-3 max-w-2xl text-xl font-bold leading-snug text-white sm:text-2xl">
                    {topic}
                  </h2>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                >
                  <span>Ask about this topic</span>
                  <ArrowUpRight className="h-4 w-4" />
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
