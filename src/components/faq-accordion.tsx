"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-white/10 rounded-[24px] border border-white/12 bg-[#0e1117] shadow-[0_20px_50px_-28px_rgba(0,0,0,0.9)]">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            className="flex min-h-14 w-full items-center justify-between gap-6 px-5 py-5 text-left transition hover:bg-white/[0.03] sm:px-7"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-slate-300 transition duration-200",
                open === index && "rotate-180 text-emerald-400",
              )}
            />
          </button>
          <div
            className={cn(
              "grid overflow-hidden transition-all duration-300",
              open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="min-h-0">
              <p className="max-w-xl px-5 pb-6 text-sm leading-relaxed text-slate-300 sm:px-7 sm:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
