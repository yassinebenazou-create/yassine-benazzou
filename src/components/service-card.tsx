"use client";

import Link from "next/link";
import {
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

export function ServiceCard({
  service,
  headingLevel = "h3",
}: {
  service: Service;
  headingLevel?: "h2" | "h3";
}) {
  const { language, content } = useLanguage();
  const Icon = icons[service.icon];
  const Heading = headingLevel;

  return (
    <article className="studio-card group flex h-full flex-col rounded-[24px] p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <Icon className="h-5 w-5 shrink-0 text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
        <p className="text-xs font-medium text-emerald-300">
          {service.eyebrow[language]}
        </p>
      </div>

      <Heading className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
        {service.title[language]}
      </Heading>
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
        className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
      >
        {content.services.explore}
      </Link>
    </article>
  );
}
