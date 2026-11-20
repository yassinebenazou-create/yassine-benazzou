import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/home-sections";
import { ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { verifiedTechnologies, whyWorkWithMeItems, workProcessSteps } from "@/data/content";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Freelance Next.js & Full-Stack Developer",
  description:
    "Yassine Benazzou — freelance Next.js developer and full-stack web designer in Morocco building fast, responsive websites for growing businesses.",
  path: "/a-propos",
  keywords: [
    "Freelance Next.js Developer",
    "Développeur Full Stack freelance",
    "Développeur web au Maroc",
    "Web designer freelance Maroc",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "About", href: "/a-propos" },
        ])}
      />
      <PageHero
        eyebrow="Freelance Next.js Developer"
        title="Full-Stack & Next.js Web Developer in Morocco."
        text="I'm Yassine Benazzou, an independent web developer and web designer based in El Jadida serving businesses in Morocco and worldwide."
      >
        <ButtonLink href="/contact">
          Book a Discovery Call
        </ButtonLink>
        <ButtonLink href="/realisations" variant="secondary">
          Browse Selected Work
        </ButtonLink>
      </PageHero>

      <section className="border-b border-white/10 bg-[#0b0d12] py-24 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[#07080b] p-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
              <Image
                src="/profile/coveragence.png"
                alt="Yassine Benazzou — Freelance Web Developer"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Approach"
              title="Direct Execution Without Agency Bloat"
              text="Your site should explain what you offer in seconds, feel crisp on every phone, and convert trust into inquiries."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyWorkWithMeItems.slice(0, 4).map((item) => (
                <article key={item.key} className="studio-card rounded-2xl p-6">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <h2 className="font-display mt-3 text-lg font-bold text-white">
                    {item.title.en}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.description.en}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#07080b] py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <SectionHeader
                eyebrow="How We Work"
                title="Three Clear Steps From Idea to Launch"
                text="Simple communication backed by verified modern web technologies."
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {verifiedTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <ol className="divide-y divide-white/10 rounded-[26px] border border-white/12 bg-[#0e1117]">
              {workProcessSteps.map((step, index) => (
                <li key={step.step} className="p-6 sm:p-8">
                  <p className="text-xs font-medium text-emerald-400">
                    Step {index + 1}
                  </p>
                  <h3 className="font-display mt-1.5 text-xl font-bold text-white">
                    {step.title.en}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
                    {step.description.en}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
