import { LocalSeoPage } from "@/components/sections/local-seo-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Creation site web El Jadida",
  description:
    "Developpeur web freelance a El Jadida pour creation de site vitrine, e-commerce, WordPress, Next.js et optimisation SEO locale.",
  path: "/creation-site-web-el-jadida",
});

export default function Page() {
  return (
    <LocalSeoPage
      location="El Jadida"
      title="Creation de site web a El Jadida"
      text="Une page locale dediee aux entreprises et professionnels d'El Jadida qui veulent ameliorer leur presence en ligne et faciliter les demandes de contact."
      highlights={["Ancrage local", "Contact direct", "Pages services et contact optimisees"]}
    />
  );
}
