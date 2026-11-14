import { Mail, MessageCircle } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/social-icons";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { siteConfig, whatsappUrl } from "@/config/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Yassine Benazzou | Start Your Website Project",
  description:
    "Have a website project in mind? Contact Yassine Benazzou via the project brief form, WhatsApp, email, LinkedIn, or Instagram.",
  path: "/contact",
});

export default function ContactPage() {
  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: siteConfig.phone,
      href: whatsappUrl(),
      external: true,
      placeholder: siteConfig.isWhatsappPlaceholder,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
      placeholder: siteConfig.isEmailPlaceholder,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "Yassine Benazzou",
      href: siteConfig.socials.linkedin,
      external: true,
      placeholder: false,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: "@yssnn_eweb",
      href: siteConfig.socials.instagram,
      external: true,
      placeholder: false,
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Ready for a Website That Wins Clients?"
        text="Share your goals and business details. Serving clients in Morocco, France, Belgium, Canada, UAE, and worldwide."
      >
        <ButtonLink href={whatsappUrl()} external className="w-full sm:w-auto">
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </ButtonLink>
        <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary" external className="w-full sm:w-auto">
          <Mail className="h-4 w-4" />
          <span>Email</span>
        </ButtonLink>
      </PageHero>

      <section className="bg-[#0b0d12] py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Direct Channels"
              title="Let's Discuss Your Website"
              text="Direct collaboration with clear communication from discovery to launch."
            />
            <div className="mt-8 grid gap-4">
              {channels.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="studio-card flex items-center gap-4 rounded-2xl p-5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-semibold text-white">
                        {item.value}
                      </span>
                    </span>
                    {item.placeholder ? (
                      <span className="rounded-md border border-amber-400/25 bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] text-amber-300">
                        Config placeholder
                      </span>
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
