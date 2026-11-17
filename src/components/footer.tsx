"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui";
import { navLinks, siteConfig, whatsappUrl } from "@/config/site";
import { services } from "@/data/services";

const locations = [
  { label: "Morocco", href: "/creation-site-web-maroc" },
  { label: "Casablanca", href: "/creation-site-web-casablanca" },
  { label: "Agadir", href: "/creation-site-web-agadir" },
  { label: "El Jadida", href: "/creation-site-web-el-jadida" },
];

export function Footer() {
  const { language, content } = useLanguage();
  const f = content.footer;

  const navLabels: Record<(typeof navLinks)[number]["key"], string> = {
    projects: content.nav.projects,
    services: content.nav.services,
    process: content.nav.process,
    faq: content.nav.faq,
  };

  return (
    <footer className="border-t border-white/10 bg-[#050608] text-slate-300">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_0.9fr]">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <BrandLogo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
              {f.tagline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.03] px-3.5 text-xs font-medium text-slate-200 transition hover:border-emerald-400/45 hover:text-white"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.03] px-3.5 text-xs font-medium text-slate-200 transition hover:border-emerald-400/45 hover:text-white"
              >
                <span>Instagram</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.socials.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.03] px-3.5 text-xs font-medium text-slate-200 transition hover:border-emerald-400/45 hover:text-white"
              >
                <span>Google Reviews</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {f.navigationTitle}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition hover:text-emerald-400"
                  >
                    {navLabels[link.key]}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/realisations" className="text-slate-300 transition hover:text-emerald-400">
                  {content.subpages.projectsCrumb}
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-slate-300 transition hover:text-emerald-400">
                  {content.subpages.aboutCrumb}
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-slate-300 transition hover:text-emerald-400">
                  {language === "fr" ? "Tarifs & Devis" : "Pricing & Scope"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 transition hover:text-emerald-400">
                  {content.subpages.contactCrumb}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {f.servicesTitle}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 transition hover:text-emerald-400"
                  >
                    {service.title[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {f.locationsTitle}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {locations.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="text-slate-300 transition hover:text-emerald-400"
                  >
                    {loc.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2.5 border-t border-white/10 pt-5 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="truncate">{siteConfig.email}</span>
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullBrand}. {f.rights}
          </p>
          <p>{f.builtBy}</p>
        </div>
      </Container>
    </footer>
  );
}
