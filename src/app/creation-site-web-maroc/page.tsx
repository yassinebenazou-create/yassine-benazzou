import { LocalSeoPage } from "@/components/sections/local-seo-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Creation site web Maroc",
  description:
    "Creation de sites web professionnels au Maroc pour entreprises, independants et entrepreneurs: site vitrine, e-commerce, SEO technique et responsive.",
  path: "/creation-site-web-maroc",
});

export default function Page() {
  return (
    <LocalSeoPage
      location="Maroc"
      title="Creation de site web au Maroc"
      text="Une page nationale pour presenter vos services web aux entreprises marocaines, avec une structure SEO claire et des appels a l'action directs."
      highlights={["Positionnement national", "SEO technique", "Sites rapides et responsives"]}
    />
  );
}
