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
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-3.5 sm:gap-6 sm:px-8 lg:px-10 lg:py-4">
        <Link href={homeHref} className="group flex flex-col leading-none text-white">
          <span className="text-[0.58rem] font-medium uppercase tracking-[0.28em] text-cyan-200/42 transition group-hover:text-cyan-200/58 sm:text-[0.62rem]">
            Software Engineer
          </span>
          <span className="mt-1.5 text-[0.96rem] font-semibold tracking-[-0.03em] text-white sm:mt-2 sm:text-[1.02rem]">
            Hernán Bonavota
          </span>
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
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
            className="rounded-full border border-cyan-300/18 bg-cyan-300/[0.08] px-4.5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/34 hover:bg-cyan-300/14"
          >
            {locale === "en" ? "Contact me" : "Contactar"}
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Link
            href={ctaHref}
            className="rounded-full border border-cyan-300/12 bg-cyan-300/[0.035] px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-cyan-100 sm:px-3.5 sm:text-[0.64rem]"
          >
            {locale === "en" ? "Contact" : "Contacto"}
          </Link>
        </div>
      </div>
      <div className="border-t border-white/6 px-5 py-3 lg:hidden sm:px-8">
        <nav aria-label={locale === "en" ? "Primary" : "Principal"}>
          <ul className="grid grid-cols-2 gap-2 text-sm text-white/72">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-2 text-center transition hover:border-white/14 hover:text-white"
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
