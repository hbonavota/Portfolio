import Link from "next/link";

import { Locale, navigation, siteConfig } from "@/content/site";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const items = navigation[locale];
  const externalLabel = locale === "en" ? "External" : "Externo";
  const bottomLine =
    locale === "en"
      ? "English-first portfolio with a complete Spanish version."
      : "Portfolio con inglés como idioma principal y versión completa en español.";

  return (
    <footer className="border-t border-white/8 bg-slate-950/92">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.5fr_0.9fr_0.9fr] lg:px-10 lg:py-20">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/72">
            {locale === "en" ? "Hernán Bonavota" : "Hernán Bonavota"}
          </p>
          <h2 className="max-w-xl text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white">
            {locale === "en"
              ? "Software, integrations and public-facing product work presented with clear scope and real authorship."
              : "Software, integraciones y trabajo de producto presentado con alcance claro y autoría real."}
          </h2>
          <p className="max-w-xl text-[0.98rem] leading-8 text-white/60">
            {locale === "en"
              ? "The portfolio stays intentionally selective: a small number of public cases, approved links and a clear distinction between products, client work and lab initiatives."
              : "El portfolio se mantiene intencionadamente selectivo: pocos casos públicos, enlaces aprobados y una distinción clara entre producto, client work e iniciativas de laboratorio."}
          </p>
        </div>
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
            {locale === "en" ? "Navigate" : "Navegación"}
          </p>
          <ul className="space-y-3.5 text-sm text-white/72">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">{externalLabel}</p>
          <ul className="space-y-3.5 text-sm text-white/72">
            <li>
              <Link href={siteConfig.approvedLinks.linkedin} className="transition hover:text-white">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href={siteConfig.approvedLinks.github} className="transition hover:text-white">
                GitHub
              </Link>
            </li>
            <li>
              <Link href={siteConfig.approvedLinks.verifiko} className="transition hover:text-white">
                Verifiko
              </Link>
            </li>
            <li>
              <Link href={siteConfig.approvedLinks.orbytia} className="transition hover:text-white">
                Orbytia
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-5 py-5 text-[0.76rem] uppercase tracking-[0.24em] text-white/38 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>{bottomLine}</p>
          <p>hbonavota.com</p>
        </div>
      </div>
    </footer>
  );
}
