"use client";

import { useEffect, useRef, useState } from "react";

import { Locale, navigation, recruiterAnchor } from "@/content/site";
import { getLocalizedPath } from "@/lib/i18n";

import { LanguageSwitcher } from "./language-switcher";
import { ViewTransitionLink as Link } from "./view-transition-link";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const items = navigation[locale];
  const homeHref = getLocalizedPath(locale, "home");
  const ctaHref = getLocalizedPath(locale, "contact");
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Close on resize past lg (1024px).
  useEffect(() => {
    if (!menuOpen) return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mql.matches) setMenuOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [menuOpen]);

  // Focus first link when drawer opens.
  useEffect(() => {
    if (menuOpen) firstLinkRef.current?.focus();
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/76 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-3.5 sm:gap-6 sm:px-8 lg:px-10 lg:py-4">
        <Link href={homeHref} className="group flex flex-col leading-none text-white">
          <span className="hidden sm:block text-[0.58rem] font-medium uppercase tracking-[0.28em] text-cyan-200/42 transition group-hover:text-cyan-200/58 sm:text-[0.62rem]">
            {recruiterAnchor[locale].locationShort}
          </span>
          <span className="mt-0 text-[0.96rem] font-semibold tracking-[-0.03em] text-white sm:mt-2 sm:text-[1.02rem]">
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
            {locale === "en" ? "Contact" : "Contacto"}
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={
              menuOpen
                ? locale === "en"
                  ? "Close menu"
                  : "Cerrar menú"
                : locale === "en"
                  ? "Open menu"
                  : "Abrir menú"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/76 transition hover:border-white/22 hover:text-white"
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div id="mobile-nav" className="border-t border-white/6 px-5 py-3 lg:hidden sm:px-8">
          <nav aria-label={locale === "en" ? "Primary" : "Principal"}>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              {items.map((item, idx) => (
                <li key={item.href}>
                  <Link
                    ref={idx === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-10 items-center justify-between rounded-full border border-white/8 bg-white/[0.03] px-4 py-2.5 transition hover:border-white/14 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="text-white/40">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
