"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeFromPath, switchLocalePath } from "@/lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const alternate = switchLocalePath(pathname);
  const currentPath = pathname || "/";
  const activeClass = "rounded-full bg-white px-2.5 py-1.5 text-slate-950 transition sm:px-3";
  const inactiveClass =
    "rounded-full px-2.5 py-1.5 text-white/64 transition hover:bg-white/[0.06] hover:text-white sm:px-3";
  const labels = {
    en: {
      current: "English",
      alternate: "Switch to Spanish",
      aria: "Language selector",
      selfLabel: "Current language: English",
      otherLabel: "Switch to Spanish"
    },
    es: {
      current: "Español",
      alternate: "Cambiar a inglés",
      aria: "Selector de idioma",
      selfLabel: "Idioma actual: español",
      otherLabel: "Cambiar a inglés"
    }
  } as const;
  const copy = labels[locale];

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/68 sm:text-[0.68rem]"
      aria-label={copy.aria}
    >
      {locale === "en" ? (
        <>
          <Link
            href={currentPath}
            className={activeClass}
            lang="en"
            hrefLang="en"
            title={copy.selfLabel}
            aria-label={copy.selfLabel}
            aria-current="page"
          >
            EN
          </Link>
          <Link
            href={alternate}
            className={inactiveClass}
            hrefLang="es"
            lang="es"
            title={copy.otherLabel}
            aria-label={copy.otherLabel}
          >
            ES
          </Link>
        </>
      ) : (
        <>
          <Link
            href={alternate}
            className={inactiveClass}
            hrefLang="en"
            lang="en"
            title={copy.otherLabel}
            aria-label={copy.otherLabel}
          >
            EN
          </Link>
          <Link
            href={currentPath}
            className={activeClass}
            lang="es"
            hrefLang="es"
            title={copy.selfLabel}
            aria-label={copy.selfLabel}
            aria-current="page"
          >
            ES
          </Link>
        </>
      )}
    </div>
  );
}
