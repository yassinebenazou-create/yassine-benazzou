import { JsonLd } from "@/components/json-ld";
import { HomeSections } from "@/components/sections/home-sections";
import { faqItems } from "@/data/faq";
import { createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Freelance Web & Next.js Developer",
  absoluteTitle: "Freelance Web & Next.js Developer | Yassine Benazzou",
  description:
    "Freelance web and Next.js developer building custom business websites, SaaS marketing sites, and e-commerce platforms for Morocco, France, and worldwide.",
  path: "/",
  keywords: [
    "développeur web freelance",
    "développeur Next.js freelance",
    "freelance développeur web",
    "freelance Next.js pour projet professionnel",
    "Freelance Web Developer",
    "Freelance Next.js Developer",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={faqJsonLd(
          faqItems.map((item) => ({
            question: item.question.en,
            answer: item.answer.en,
          })),
        )}
      />
      <HomeSections />
    </>
  );
}
