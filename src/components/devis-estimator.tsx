"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Check, Clock, Globe2, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import {
  calculateDevisEstimate,
  type EstimatorMarket,
  type EstimatorOptionKey,
  type EstimatorProjectType,
  type EstimatorScope,
  type EstimatorTimeline,
  formatMoneyRange,
  optionConfigs,
  projectTypeConfigs,
  scopeConfigs,
  timelineConfigs,
} from "@/data/devis";
import { cn } from "@/lib/utils";

const uiCopy = {
  fr: {
    marketLabel: "1. Marché & Devise",
    markets: [
      { id: "ma" as const, title: "Maroc (MAD)", hint: "Entreprises & projets basés au Maroc" },
      {
        id: "fr" as const,
        title: "France / International Remote (EUR)",
        hint: "Collaboration à distance depuis le Maroc",
      },
    ],
    typeLabel: "2. Type de projet",
    scopeLabel: "3. Volume & Envergure",
    optionsLabel: "4. Options complémentaires",
    timelineLabel: "5. Délai souhaité",
    resultEyebrow: "Estimation indicative",
    budgetHeading: "Fourchette budgétaire estimée",
    timelineHeading: "Délai de réalisation estimé",
    weeksUnit: "semaines",
    summaryHeading: "Récapitulatif de votre sélection",
    noOptions: "Aucune option additionnelle sélectionnée",
    cta: "Envoyer ce brief pour un devis précis",
    disclaimer:
      "Estimation indicative — devis définitif établi après échange sur votre besoin (appel ou message de cadrage, sans engagement).",
    baseNote:
      "Basé à El Jadida (Maroc) · Intervention locale au Maroc et 100 % à distance avec la France.",
  },
  en: {
    marketLabel: "1. Market & Currency",
    markets: [
      { id: "ma" as const, title: "Morocco (MAD)", hint: "Businesses & teams operating in Morocco" },
      {
        id: "fr" as const,
        title: "France / International Remote (EUR)",
        hint: "Remote execution from Morocco on EU-aligned hours",
      },
    ],
    typeLabel: "2. Project Type",
    scopeLabel: "3. Scope & Page Volume",
    optionsLabel: "4. Optional Features",
    timelineLabel: "5. Target Timeline",
    resultEyebrow: "Indicative estimate",
    budgetHeading: "Estimated Budget Range",
    timelineHeading: "Estimated Delivery Window",
    weeksUnit: "weeks",
    summaryHeading: "Selected Configuration",
    noOptions: "No extra add-on options selected",
    cta: "Send this brief for an exact quote",
    disclaimer:
      "Indicative range only — your exact quote is confirmed after a quick scoping call or brief review.",
    baseNote:
      "Based in El Jadida, Morocco · Working locally in Morocco and remotely with France clients.",
  },
} as const;

export function DevisEstimator() {
  const { language } = useLanguage();
  const t = uiCopy[language];

  const [market, setMarket] = useState<EstimatorMarket>("ma");
  const [projectType, setProjectType] = useState<EstimatorProjectType>("vitrine");
  const [scope, setScope] = useState<EstimatorScope>("small");
  const [options, setOptions] = useState<EstimatorOptionKey[]>(["seoPerf"]);
  const [timeline, setTimeline] = useState<EstimatorTimeline>("standard");

  const toggleOption = (key: EstimatorOptionKey) => {
    setOptions((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };

  const result = useMemo(
    () =>
      calculateDevisEstimate({
        market,
        projectType,
        scope,
        options,
        timeline,
      }),
    [market, projectType, scope, options, timeline],
  );

  const formattedBudget = formatMoneyRange(result.min, result.max, market);
  const deliveryWindow = `${result.minWeeks} – ${result.maxWeeks} ${t.weeksUnit}`;

  const contactHref = useMemo(() => {
    const selectedOptionLabels = result.selectedOptions.map((o) => o.label[language]);
    const lines =
      language === "fr"
        ? [
            `Demande de devis via simulateur (/devis)`,
            `- Marché / Devise : ${market === "ma" ? "Maroc (MAD)" : "France / Remote (EUR)"}`,
            `- Type de projet : ${result.typeCfg.label.fr}`,
            `- Volume : ${result.scopeCfg.label.fr}`,
            `- Options : ${selectedOptionLabels.length > 0 ? selectedOptionLabels.join(", ") : "Standard de base"}`,
            `- Délai souhaité : ${result.timelineCfg.label.fr}`,
            `- Estimation indicative affichée : ${formattedBudget} (${deliveryWindow})`,
            "",
            "Précisions sur mon activité et mes objectifs :",
          ]
        : [
            `Quote request via /devis estimator`,
            `- Market / Currency: ${market === "ma" ? "Morocco (MAD)" : "France / Remote (EUR)"}`,
            `- Project Type: ${result.typeCfg.label.en}`,
            `- Scope: ${result.scopeCfg.label.en}`,
            `- Options: ${selectedOptionLabels.length > 0 ? selectedOptionLabels.join(", ") : "Core scope"}`,
            `- Timeline: ${result.timelineCfg.label.en}`,
            `- Indicative Estimate: ${formattedBudget} (${deliveryWindow})`,
            "",
            "Additional details about my business & goals:",
          ];

    const params = new URLSearchParams({
      type: String(result.typeCfg.contactTypeIndex),
      budget: String(result.budgetIndex),
      brief: lines.join("\n"),
    });
    return `/contact?${params.toString()}#contact-form`;
  }, [language, market, result, formattedBudget, deliveryWindow]);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
      {/* Left Column: Controls */}
      <div className="space-y-8">
        {/* 1. Market & Currency */}
        <section aria-labelledby="devis-market-label" className="studio-card rounded-[24px] p-6 sm:p-7">
          <h2 id="devis-market-label" className="font-display text-lg font-bold text-white">
            {t.marketLabel}
          </h2>
          <div role="radiogroup" aria-labelledby="devis-market-label" className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.markets.map((item) => {
              const active = market === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setMarket(item.id)}
                  className={cn(
                    "flex flex-col items-start rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                    active
                      ? "border-emerald-400/70 bg-emerald-400/12 text-white"
                      : "border-white/10 bg-[#080b11] text-slate-300 hover:border-white/25 hover:text-white",
                  )}
                >
                  <span className="flex w-full items-center justify-between gap-2 text-sm font-semibold">
                    <span>{item.title}</span>
                    {active ? <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" /> : null}
                  </span>
                  <span className="mt-1 text-xs text-slate-400">{item.hint}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 2. Project Type */}
        <section aria-labelledby="devis-type-label" className="studio-card rounded-[24px] p-6 sm:p-7">
          <h2 id="devis-type-label" className="font-display text-lg font-bold text-white">
            {t.typeLabel}
          </h2>
          <div role="radiogroup" aria-labelledby="devis-type-label" className="mt-4 grid gap-3 sm:grid-cols-2">
            {projectTypeConfigs.map((item) => {
              const active = projectType === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setProjectType(item.id)}
                  className={cn(
                    "flex flex-col items-start rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                    active
                      ? "border-emerald-400/70 bg-emerald-400/12 text-white"
                      : "border-white/10 bg-[#080b11] text-slate-300 hover:border-white/25 hover:text-white",
                  )}
                >
                  <span className="flex w-full items-center justify-between gap-2 text-sm font-semibold">
                    <span>{item.label[language]}</span>
                    {active ? <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" /> : null}
                  </span>
                  <span className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {item.subtitle[language]}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 3. Scope / Size */}
        <section aria-labelledby="devis-scope-label" className="studio-card rounded-[24px] p-6 sm:p-7">
          <h2 id="devis-scope-label" className="font-display text-lg font-bold text-white">
            {t.scopeLabel}
          </h2>
          <div role="radiogroup" aria-labelledby="devis-scope-label" className="mt-4 grid gap-3">
            {scopeConfigs.map((item) => {
              const active = scope === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setScope(item.id)}
                  className={cn(
                    "flex items-start justify-between gap-4 rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                    active
                      ? "border-emerald-400/70 bg-emerald-400/12 text-white"
                      : "border-white/10 bg-[#080b11] text-slate-300 hover:border-white/25 hover:text-white",
                  )}
                >
                  <div>
                    <span className="block text-sm font-semibold">{item.label[language]}</span>
                    <span className="mt-1 block text-xs text-slate-400">{item.detail[language]}</span>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-emerald-300">
                    {item.pricing[market][0] === 0
                      ? language === "fr"
                        ? "Inclus"
                        : "Included"
                      : `+${formatMoneyRange(item.pricing[market][0], item.pricing[market][1], market)}`}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 4. Options */}
        <section aria-labelledby="devis-options-label" className="studio-card rounded-[24px] p-6 sm:p-7">
          <h2 id="devis-options-label" className="font-display text-lg font-bold text-white">
            {t.optionsLabel}
          </h2>
          <div className="mt-4 grid gap-3">
            {optionConfigs.map((opt) => {
              const checked = options.includes(opt.id);
              return (
                <label
                  key={opt.id}
                  className={cn(
                    "flex cursor-pointer items-start justify-between gap-4 rounded-2xl border p-4 transition focus-within:ring-2 focus-within:ring-emerald-400",
                    checked
                      ? "border-emerald-400/70 bg-emerald-400/12 text-white"
                      : "border-white/10 bg-[#080b11] text-slate-300 hover:border-white/25 hover:text-white",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleOption(opt.id)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-emerald-400"
                    />
                    <div>
                      <span className="block text-sm font-semibold">{opt.label[language]}</span>
                      <span className="mt-1 block text-xs text-slate-400">{opt.hint[language]}</span>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-emerald-300">
                    +{formatMoneyRange(opt.pricing[market][0], opt.pricing[market][1], market)}
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        {/* 5. Timeline */}
        <section aria-labelledby="devis-timeline-label" className="studio-card rounded-[24px] p-6 sm:p-7">
          <h2 id="devis-timeline-label" className="font-display text-lg font-bold text-white">
            {t.timelineLabel}
          </h2>
          <div role="radiogroup" aria-labelledby="devis-timeline-label" className="mt-4 grid gap-3 sm:grid-cols-2">
            {timelineConfigs.map((item) => {
              const active = timeline === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setTimeline(item.id)}
                  className={cn(
                    "flex flex-col items-start rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                    active
                      ? "border-emerald-400/70 bg-emerald-400/12 text-white"
                      : "border-white/10 bg-[#080b11] text-slate-300 hover:border-white/25 hover:text-white",
                  )}
                >
                  <span className="flex w-full items-center justify-between gap-2 text-sm font-semibold">
                    <span>{item.label[language]}</span>
                    {active ? <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" /> : null}
                  </span>
                  <span className="mt-1 text-xs text-slate-400">{item.detail[language]}</span>
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {/* Right Column: Live Result Summary Card */}
      <aside className="lg:sticky lg:top-28">
        <div
          aria-live="polite"
          className="rounded-[26px] border border-emerald-400/35 bg-[#0e1118] p-6 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.95)] sm:p-8"
        >
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>{t.resultEyebrow}</span>
          </div>

          <p className="mt-5 text-xs font-medium text-slate-400">{t.budgetHeading}</p>
          <p
            data-testid="devis-budget-result"
            className="font-display mt-1.5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            {formattedBudget}
          </p>

          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#070a0f] px-4 py-3 text-sm">
            <Clock className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
            <div>
              <span className="block text-xs text-slate-400">{t.timelineHeading}</span>
              <span data-testid="devis-timeline-result" className="font-semibold text-white">
                {deliveryWindow}
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs font-semibold text-slate-200">{t.summaryHeading}</p>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li className="flex items-center justify-between gap-2">
                <span>{result.typeCfg.label[language]}</span>
                <span className="text-slate-400">
                  {formatMoneyRange(result.typeCfg.pricing[market][0], result.typeCfg.pricing[market][1], market)}
                </span>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>{result.scopeCfg.label[language]}</span>
                <span className="text-slate-400">
                  {result.scopeCfg.pricing[market][0] === 0
                    ? language === "fr"
                      ? "Inclus"
                      : "Included"
                    : `+${formatMoneyRange(result.scopeCfg.pricing[market][0], result.scopeCfg.pricing[market][1], market)}`}
                </span>
              </li>
              {result.selectedOptions.length > 0 ? (
                result.selectedOptions.map((opt) => (
                  <li key={opt.id} className="flex items-center justify-between gap-2">
                    <span>+ {opt.label[language]}</span>
                    <span className="text-slate-400">
                      +{formatMoneyRange(opt.pricing[market][0], opt.pricing[market][1], market)}
                    </span>
                  </li>
                ))
              ) : (
                <li className="text-slate-400">{t.noOptions}</li>
              )}
              {timeline === "priority" ? (
                <li className="flex items-center justify-between gap-2 text-emerald-300">
                  <span>{result.timelineCfg.label[language]}</span>
                  <span>+25%</span>
                </li>
              ) : null}
            </ul>
          </div>

          <Link
            href={contactHref}
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-center text-sm font-semibold text-slate-950 shadow-[0_12px_30px_-10px_rgba(52,211,153,0.55)] transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span>{t.cta}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>

          <p className="mt-4 text-xs leading-relaxed text-slate-400">{t.disclaimer}</p>

          <div className="mt-5 flex items-start gap-2.5 border-t border-white/10 pt-4 text-xs leading-relaxed text-slate-400">
            <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
            <span>{t.baseNote}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
