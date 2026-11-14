import { LocalSeoPage } from "@/components/sections/local-seo-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Creation site web Casablanca",
  description:
    "Creation de sites web professionnels a Casablanca: sites vitrines, e-commerce, landing pages, SEO technique et developpement React Next.js.",
  path: "/creation-site-web-casablanca",
});

export default function Page() {
  return (
    <LocalSeoPage
      location="Casablanca"
      title="Creation de site web a Casablanca"
      text="Une page preparee pour cibler les entreprises casablancaises avec un contenu unique, oriente credibilite, conversion et SEO local."
      highlights={["Marche concurrentiel", "Presentation premium", "Structure orientee conversion"]}
    />
  );
}
