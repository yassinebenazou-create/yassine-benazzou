import { LocalSeoPage } from "@/components/sections/local-seo-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Creation site web Agadir",
  description:
    "Developpeur web freelance pour creation de site web a Agadir: site vitrine, WordPress, e-commerce, responsive design et SEO local.",
  path: "/creation-site-web-agadir",
});

export default function Page() {
  return (
    <LocalSeoPage
      location="Agadir"
      title="Creation de site web a Agadir"
      text="Une page locale pour les activites a Agadir, avec une approche claire: presenter vos offres, rassurer les visiteurs et encourager le contact."
      highlights={["Tourisme et services", "Experience mobile", "WhatsApp et demande de devis"]}
    />
  );
}
