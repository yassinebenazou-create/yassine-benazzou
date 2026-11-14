import { JsonLd } from "@/components/json-ld";
import { HomeSections } from "@/components/sections/home-sections";
import { faqItems } from "@/data/faq";
import { createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Yassine Benazzou | Freelance Web Developer & Designer in Morocco",
  description:
    "I design and develop modern, fast, conversion-focused websites for businesses in Morocco, France, Belgium, Canada, UAE, and worldwide.",
  path: "/",
  keywords: [
    "Freelance Web Developer Morocco",
    "Website Designer Morocco",
    "Création Site Web Maroc",
    "Développeur Web Freelance",
    "Website Development for Small Businesses",
    "Freelance Web Designer",
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
