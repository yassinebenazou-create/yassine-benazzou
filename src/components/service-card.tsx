"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MonitorSmartphone,
  RefreshCw,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import type { Service, ServiceIconKey } from "@/data/services";

const icons: Record<ServiceIconKey, typeof MonitorSmartphone> = {
  monitor: MonitorSmartphone,
  shopping: ShoppingBag,
  rocket: Rocket,
  refresh: RefreshCw,
  smartphone: Smartphone,
  shield: ShieldCheck,
};

export function ServiceCard({ service }: { service: Service }) {
  const { language, content } = useLanguage();
  const Icon = icons[service.icon];

  return (
    <article className="studio-card group flex h-full flex-col rounded-[24px] p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300 transition duration-200 group-hover:scale-105 group-hover:border-emerald-400/45">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-xs text-slate-400 transition group-hover:text-emerald-400">
          {service.number}
        </span>
      </div>

      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-300/90">
        {service.eyebrow[language]}
      </p>
      <h3 className="font-display mt-2.5 text-xl font-bold tracking-tight text-white sm:text-2xl">
        {service.title[language]}
      </h3>
      <p className="mt-3 max-w-md flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
        {service.description[language]}
      </p>

      <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm text-slate-200">
        {service.benefits[language].map((benefit) => (
          <li key={benefit} className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
      >
        <span>{content.services.explore}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}
