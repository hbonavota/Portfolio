import Link from "next/link";

import { contactPage, Locale, siteConfig } from "@/content/site";

import { Section } from "@/components/site/section";
import { SiteFrame } from "@/components/site/site-frame";

type ContactPageProps = {
  locale: Locale;
};

export function ContactPage({ locale }: ContactPageProps) {
  const content = contactPage[locale];
  const links = [
    { label: "LinkedIn", href: siteConfig.approvedLinks.linkedin },
    { label: "GitHub", href: siteConfig.approvedLinks.github },
    { label: "Orbytia", href: siteConfig.approvedLinks.orbytia },
    { label: "Verifiko", href: siteConfig.approvedLinks.verifiko }
  ];

  return (
    <SiteFrame locale={locale}>
      <Section
        eyebrow={locale === "en" ? "Contact" : "Contacto"}
        title={content.title}
        description={content.description}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface-panel flex h-full min-h-[13rem] flex-col justify-between p-7 transition hover:border-cyan-200/28 hover:bg-white/[0.06] md:p-8"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/44">
                {locale === "en" ? "Public link" : "Enlace público"}
              </p>
              <div className="mt-8 flex items-end justify-between gap-4">
                <h2 className="text-[1.55rem] font-semibold tracking-[-0.04em] text-white">{item.label}</h2>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/62">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </SiteFrame>
  );
}
