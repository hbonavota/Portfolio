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
      ? "Platforms, integrations, backend systems and product development."
      : "Plataformas, integraciones, sistemas backend y desarrollo de producto.";

  return (
    <footer className="border-t border-white/8 bg-slate-950/92">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.5fr_0.9fr_0.9fr] lg:gap-14 lg:px-10 lg:py-20">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/72">
            {locale === "en" ? "Hernán Bonavota" : "Hernán Bonavota"}
          </p>
          <h2 className="max-w-lg text-[1.72rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[1.86rem]">
            {locale === "en"
              ? "Software engineer for platforms, integrations and backend systems."
              : "Ingeniero de software para plataformas, integraciones y sistemas backend."}
          </h2>
          <p className="max-w-lg text-[0.95rem] leading-8 text-white/58">
            {locale === "en"
              ? "Open to roles, collaborations and technical conversations."
              : "Abierto a oportunidades, colaboraciones y conversaciones técnicas."}
          </p>
        </div>
        <div className="space-y-5 lg:pl-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
            {locale === "en" ? "Navigate" : "Navegación"}
          </p>
          <ul className="space-y-3.5 text-sm text-white/72">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5 lg:pl-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">{externalLabel}</p>
          <ul className="space-y-3.5 text-sm text-white/72">
            <li>
              <Link href={siteConfig.approvedLinks.linkedin} className="inline-flex transition hover:text-white">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href={siteConfig.approvedLinks.orbytia} className="inline-flex transition hover:text-white">
                Orbytia
              </Link>
            </li>
            <li>
              <Link href={siteConfig.approvedLinks.github} className="inline-flex transition hover:text-white">
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-2.5 px-5 py-5 text-[0.8rem] leading-6 text-white/38 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="max-w-3xl">{bottomLine}</p>
          <p className="text-[0.72rem] uppercase tracking-[0.16em] text-white/32">hbonavota.com</p>
        </div>
      </div>
    </footer>
  );
}
