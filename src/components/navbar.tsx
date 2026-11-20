"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { NAV_UNDERLINE_COLORS } from "@/components/shared/constants";
import { navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 14);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const labels: Record<(typeof navLinks)[number]["key"], string> = {
    projects: content.nav.projects,
    services: content.nav.services,
    process: content.nav.process,
    faq: content.nav.faq,
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-white/10 bg-[#07080b]/92 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl"
          : "border-transparent bg-[#07080b]/70 backdrop-blur-md",
      )}
    >
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:gap-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          onClick={() => setOpen(false)}
        >
          <BrandLogo />
        </Link>

        {/* Simplified 4-link navigation with expanding neon hover underlines */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">
          {navLinks.map((link, index) => {
            const isSubActive =
              (link.key === "services" && pathname.startsWith("/services")) ||
              (link.key === "projects" && pathname.startsWith("/realisations"));
            const underlineColor = NAV_UNDERLINE_COLORS[index % NAV_UNDERLINE_COLORS.length];

            return (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  "group relative rounded-full px-4 py-2 text-sm font-medium transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                  isSubActive
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/[0.05] hover:text-white",
                )}
              >
                <span>{labels[link.key]}</span>
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: underlineColor }}
                  className="absolute bottom-1 left-4 right-4 h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </Link>
            );
          })}
        </div>

        {/* Language toggle + 1 Primary Action Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/#contact"
            className="group inline-flex min-h-11 items-center gap-1.5 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_28px_-10px_rgba(52,211,153,0.6)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-emerald-300 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span>{content.nav.letsTalk}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={open ? content.nav.closeMenu : content.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:border-emerald-400/50"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "grid overflow-hidden border-t border-white/10 bg-[#090b10]/98 transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-5 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-between rounded-2xl border border-transparent px-4 text-base font-medium text-slate-200 transition hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
              >
                <span>{labels[link.key]}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </Link>
            ))}
            <div className="mt-3 border-t border-white/10 pt-3">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                <span>{content.nav.letsTalk}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
