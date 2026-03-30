"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeFromPath, switchLocalePath } from "@/lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const alternate = switchLocalePath(pathname);

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-[0.68rem]"
      aria-label="Language switcher"
    >
      <span
        className={`rounded-full px-2.5 py-1.5 transition sm:px-3 ${locale === "en" ? "bg-white text-slate-950" : "text-white/68"}`}
      >
        EN
      </span>
      <Link
        href={alternate}
        className={`rounded-full px-2.5 py-1.5 transition hover:text-white sm:px-3 ${locale === "es" ? "bg-white text-slate-950" : "text-white/68"}`}
        hrefLang={locale === "en" ? "es" : "en"}
      >
        ES
      </Link>
    </div>
  );
}
