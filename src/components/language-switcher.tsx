"use client";

import { languageOptions, useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, content } = useLanguage();

  return (
    <div
      role="group"
      aria-label={content.nav.languageAria}
      className={cn(
        "inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] p-1 backdrop-blur",
        compact && "w-full justify-between",
      )}
    >
      {languageOptions.map((option) => {
        const active = language === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-pressed={active}
            className={cn(
              "rounded-full font-mono text-xs font-semibold tracking-wider transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
              compact ? "flex-1 py-2.5" : "px-3 py-1.5",
              active
                ? "bg-emerald-400 text-slate-950 shadow-sm"
                : "text-slate-300 hover:text-white",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
