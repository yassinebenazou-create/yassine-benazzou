import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400"
    >
      {items.map((item, index) => (
        <span key={item.href} className="inline-flex items-center gap-2">
          {index > 0 ? <ChevronRight className="h-4 w-4 text-slate-600" /> : null}
          <Link
            href={item.href}
            className="transition hover:text-emerald-400"
          >
            {item.name}
          </Link>
        </span>
      ))}
    </nav>
  );
}
