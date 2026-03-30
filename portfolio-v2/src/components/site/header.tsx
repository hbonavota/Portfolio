import Link from "next/link";

import { Locale, navigation } from "@/content/site";
import { getLocalizedPath } from "@/lib/i18n";

import { LanguageSwitcher } from "./language-switcher";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const items = navigation[locale];
  const homeHref = getLocalizedPath(locale, "home");
  const ctaHref = getLocalizedPath(locale, "contact");

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/76 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-4 sm:gap-6 sm:px-8 lg:px-10">
        <Link href={homeHref} className="group flex flex-col leading-none text-white">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-cyan-200/68 transition group-hover:text-cyan-100">
            Software Engineer
          </span>
          <span className="mt-2 text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white sm:text-sm">
            Hernán Bonavota
          </span>
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          <nav aria-label={locale === "en" ? "Primary" : "Principal"}>
            <ul className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] p-1.5 text-sm text-white/70">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher />
          <Link
            href={ctaHref}
            className="rounded-full border border-cyan-300/24 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/16"
          >
            {locale === "en" ? "Get in touch" : "Contactar"}
          </Link>
        </div>
        <div className="flex items-center gap-2.5 lg:hidden">
          <LanguageSwitcher />
          <Link
            href={ctaHref}
            className="rounded-full border border-cyan-300/18 bg-cyan-300/[0.06] px-3.5 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-cyan-100 sm:px-4 sm:text-[0.68rem]"
          >
            {locale === "en" ? "Contact" : "Contacto"}
          </Link>
        </div>
      </div>
      <div className="border-t border-white/6 px-5 py-3.5 lg:hidden sm:px-8">
        <nav aria-label={locale === "en" ? "Primary" : "Principal"}>
          <ul className="grid grid-cols-2 gap-2 text-sm text-white/72">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] px-4 py-2.5 text-center transition hover:border-white/14 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
