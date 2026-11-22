"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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
    <footer className="cv-auto border-t border-white/10 bg-[#050608] text-slate-300">
      <Container className="py-16 sm:py-20">
        {/* Top Tier: Studio Identity & Direct Contact vs. Grouped Index */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <Link
                href="/"
                className="inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <BrandLogo />
              </Link>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
                {f.tagline}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <span>{siteConfig.city}, {siteConfig.country}</span>
                </span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>{siteConfig.phone}</span>
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center rounded-full border border-white/12 bg-white/[0.03] px-4 text-xs font-medium text-slate-200 transition hover:border-emerald-400/45 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center rounded-full border border-white/12 bg-white/[0.03] px-4 text-xs font-medium text-slate-200 transition hover:border-emerald-400/45 hover:text-white"
              >
                Instagram
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center rounded-full border border-white/12 bg-white/[0.03] px-4 text-xs font-medium text-slate-200 transition hover:border-emerald-400/45 hover:text-white"
              >
                Facebook
              </a>
              <a
                href={siteConfig.socials.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 text-xs font-medium text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
              >
                Google Reviews
              </a>
            </div>
          </div>

          {/* Right: Structured Two-Column Directory + Regional Strip */}
          <div className="flex flex-col justify-between gap-8 rounded-[24px] border border-white/10 bg-[#090b10] p-6 sm:p-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-white">{f.navigationTitle}</p>
                <ul className="mt-4 space-y-2.5 text-sm">
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
                <p className="text-xs font-semibold text-white">{f.servicesTitle}</p>
                <ul className="mt-4 space-y-2.5 text-sm">
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
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="text-xs font-medium text-slate-400">{f.locationsTitle}</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
                  >
                    {loc.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullBrand}. {f.rights}
          </p>
          <p>{f.builtBy}</p>
        </div>
      </Container>
    </footer>
  );
}
