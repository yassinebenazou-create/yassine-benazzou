import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-balance text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080b]",
    "hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0",
    variant === "primary" &&
      "bg-emerald-400 text-slate-950 shadow-[0_12px_30px_-10px_rgba(52,211,153,0.55)] hover:bg-emerald-300",
    variant === "secondary" &&
      "border border-white/15 bg-white/[0.04] text-white hover:border-emerald-400/50 hover:bg-white/[0.08]",
    variant === "ghost" && "text-slate-200 hover:text-emerald-400",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-white/10 bg-[#07080b] pt-28 sm:pt-32">
      <Container className="py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="font-display text-balance text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.06]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            {text}
          </p>
          {children ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
