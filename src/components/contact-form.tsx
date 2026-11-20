"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  projectTypeIndex: number;
  budgetIndex: number;
  description: string;
  website: string; // honeypot
};

type SubmittedSummary = {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  description: string;
};

type FieldErrors = Partial<
  Record<"fullName" | "email" | "description" | "form", string>
>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const { content } = useLanguage();
  const formCopy = content.contact.form;

  const [values, setValues] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    projectTypeIndex: 0,
    budgetIndex: 0,
    description: "",
    website: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [deliveredVia, setDeliveredVia] = useState<
    "webhook" | "resend" | "prepared"
  >("prepared");
  const [submittedBrief, setSubmittedBrief] = useState<SubmittedSummary | null>(
    null,
  );

  const selectedProjectType =
    formCopy.projectTypes[values.projectTypeIndex] ?? formCopy.projectTypes[0];
  const selectedBudget =
    values.budgetIndex > 0
      ? formCopy.budgetOptions[values.budgetIndex] ?? ""
      : "";

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!values.fullName.trim()) {
      next.fullName = formCopy.validation.nameRequired;
    }
    if (!EMAIL_PATTERN.test(values.email.trim())) {
      next.email = formCopy.validation.emailInvalid;
    }
    if (values.description.trim().length < 15) {
      next.description = formCopy.validation.descriptionMin;
    }
    return next;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    const payload: SubmittedSummary = {
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      projectType: selectedProjectType,
      budget: selectedBudget,
      description: values.description.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          website: values.website,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        deliveredVia?: "webhook" | "resend" | "prepared";
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setErrors({ form: data.error || formCopy.validation.genericError });
        setStatus("error");
        return;
      }

      setSubmittedBrief(payload);
      setDeliveredVia(data.deliveredVia ?? "prepared");
      setStatus("success");
    } catch {
      setErrors({ form: formCopy.validation.genericError });
      setStatus("error");
    }
  };

  const handleReset = () => {
    setValues({
      fullName: "",
      email: "",
      company: "",
      projectTypeIndex: 0,
      budgetIndex: 0,
      description: "",
      website: "",
    });
    setErrors({});
    setStatus("idle");
    setSubmittedBrief(null);
  };

  if (status === "success" && submittedBrief) {
    const summaryText = [
      `Name: ${submittedBrief.fullName}`,
      `Email: ${submittedBrief.email}`,
      submittedBrief.company ? `Business: ${submittedBrief.company}` : null,
      `Project Type: ${submittedBrief.projectType}`,
      submittedBrief.budget ? `Budget: ${submittedBrief.budget}` : null,
      `Description: ${submittedBrief.description}`,
    ]
      .filter(Boolean)
      .join("\n");

    const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `Project Inquiry — ${submittedBrief.projectType}`,
    )}&body=${encodeURIComponent(summaryText)}`;

    return (
      <div className="rounded-[28px] border border-emerald-400/25 bg-[#0d131c] p-7 sm:p-9">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-emerald-400/30 bg-emerald-400/15 text-emerald-300">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
          {formCopy.successTitle}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
          {deliveredVia === "prepared"
            ? formCopy.successNote
            : formCopy.successDeliveredNote}
        </p>

        <div className="mt-6 whitespace-pre-wrap rounded-2xl border border-white/10 bg-[#080b11] p-4 font-mono text-xs leading-6 text-slate-300">
          {summaryText}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl(summaryText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{formCopy.sendViaWhatsapp}</span>
          </a>
          <a
            href={mailtoHref}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:border-emerald-400/50 hover:bg-white/[0.08]"
          >
            <Mail className="h-4 w-4" />
            <span>{formCopy.sendViaEmail}</span>
          </a>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="mt-5 text-sm font-medium text-slate-400 underline underline-offset-4 transition hover:text-white"
        >
          {formCopy.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[26px] border border-white/12 bg-[#0e1117] p-5 shadow-[0_24px_65px_-28px_rgba(0,0,0,0.9)] sm:p-8"
    >
      <h3 className="font-display text-2xl font-bold tracking-tight text-white">
        {formCopy.title}
      </h3>

      {errors.form ? (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
          <span>{errors.form}</span>
        </div>
      ) : null}

      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-field">Website</label>
        <input
          id="website-field"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, website: e.target.value }))
          }
        />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-slate-200"
          >
            {formCopy.fullName} <span className="text-emerald-400">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder={formCopy.fullNamePlaceholder}
            value={values.fullName}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, fullName: e.target.value }));
              if (errors.fullName)
                setErrors((prev) => ({ ...prev, fullName: undefined }));
            }}
            aria-invalid={Boolean(errors.fullName)}
            className={cn(
              "mt-2 w-full rounded-xl border bg-[#070a0f] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:outline-none focus:ring-2",
              errors.fullName
                ? "border-rose-500/60 focus:border-rose-400 focus:ring-rose-400/20"
                : "border-white/12 focus:border-emerald-400/70 focus:ring-emerald-400/20",
            )}
          />
          {errors.fullName ? (
            <p className="mt-1.5 text-xs text-rose-400">{errors.fullName}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-200"
          >
            {formCopy.email} <span className="text-emerald-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={formCopy.emailPlaceholder}
            value={values.email}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, email: e.target.value }));
              if (errors.email)
                setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            aria-invalid={Boolean(errors.email)}
            className={cn(
              "mt-2 w-full rounded-xl border bg-[#070a0f] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:outline-none focus:ring-2",
              errors.email
                ? "border-rose-500/60 focus:border-rose-400 focus:ring-rose-400/20"
                : "border-white/12 focus:border-emerald-400/70 focus:ring-emerald-400/20",
            )}
          />
          {errors.email ? (
            <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-slate-200"
          >
            {formCopy.company}{" "}
            <span className="text-xs font-normal text-slate-500">
              {formCopy.companyOptional}
            </span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={formCopy.companyPlaceholder}
            value={values.company}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, company: e.target.value }))
            }
            className="mt-2 w-full rounded-xl border border-white/12 bg-[#070a0f] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-emerald-400/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
          />
        </div>

        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-slate-200"
          >
            {formCopy.projectType}
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectTypeIndex}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                projectTypeIndex: Number(e.target.value),
              }))
            }
            className="mt-2 w-full rounded-xl border border-white/12 bg-[#070a0f] px-4 py-3 text-sm text-white transition focus:border-emerald-400/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
          >
            {formCopy.projectTypes.map((option, idx) => (
              <option
                key={option}
                value={idx}
                className="bg-[#0d1118] text-white"
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-slate-200"
          >
            {formCopy.budget}{" "}
            <span className="text-xs font-normal text-slate-500">
              {formCopy.budgetOptional}
            </span>
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budgetIndex}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                budgetIndex: Number(e.target.value),
              }))
            }
            className="mt-2 w-full rounded-xl border border-white/12 bg-[#070a0f] px-4 py-3 text-sm text-white transition focus:border-emerald-400/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
          >
            {formCopy.budgetOptions.map((option, idx) => (
              <option
                key={option}
                value={idx}
                className="bg-[#0d1118] text-white"
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-slate-200"
          >
            {formCopy.description} <span className="text-emerald-400">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            placeholder={formCopy.descriptionPlaceholder}
            value={values.description}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, description: e.target.value }));
              if (errors.description)
                setErrors((prev) => ({ ...prev, description: undefined }));
            }}
            aria-invalid={Boolean(errors.description)}
            className={cn(
              "mt-2 w-full resize-y rounded-xl border bg-[#070a0f] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:outline-none focus:ring-2",
              errors.description
                ? "border-rose-500/60 focus:border-rose-400 focus:ring-rose-400/20"
                : "border-white/12 focus:border-emerald-400/70 focus:ring-emerald-400/20",
            )}
          />
          {errors.description ? (
            <p className="mt-1.5 text-xs text-rose-400">{errors.description}</p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_-10px_rgba(52,211,153,0.55)] transition hover:-translate-y-0.5 hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-65 motion-reduce:hover:translate-y-0"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>{formCopy.submitting}</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>{formCopy.submit}</span>
          </>
        )}
      </button>
    </form>
  );
}
