"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { whatsappUrl } from "@/config/site";

export function FloatingContact() {
  const { language } = useLanguage();
  const label =
    language === "fr"
      ? "Discuter sur WhatsApp"
      : "Chat on WhatsApp";

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/35 bg-[#0c121a]/95 text-emerald-400 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.75)] md:bg-[#0c121a]/90 md:backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-400 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:h-13 sm:w-13"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
