import { JsonLd } from "@/components/json-ld";
import { HomeSections } from "@/components/sections/home-sections";
import { faqItems } from "@/data/faq";
import { createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Freelance Web Developer Morocco",
  absoluteTitle: "Freelance Web Developer Morocco | Yassine Benazzou",
  description:
    "Freelance web developer and web designer in Morocco building Next.js websites, business sites, and e-commerce platforms for local and global clients.",
  path: "/",
  keywords: [
    "Freelance Web Developer Morocco",
    "Web Developer Morocco",
    "Web Designer Morocco",
    "Website Development Morocco",
    "Freelance Next.js Developer",
    "Développeur web freelance Maroc",
    "Création site web Maroc",
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
