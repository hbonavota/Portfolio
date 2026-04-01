import Link from "next/link";

import { Locale, orbytiaPage, siteConfig } from "@/content/site";

import { Section } from "@/components/site/section";
import { SiteFrame } from "@/components/site/site-frame";

type OrbytiaPageProps = {
  locale: Locale;
};

export function OrbytiaPage({ locale }: OrbytiaPageProps) {
  const content = orbytiaPage[locale];

  return (
    <SiteFrame locale={locale}>
      <Section
        eyebrow="Orbytia"
        title={
          locale === "en"
            ? "Secondary consulting context for selected client work."
            : "Contexto secundario de consultoría para parte del trabajo con clientes."
        }
        description={content.intro}
      >
        <div className="grid gap-6 xl:grid-cols-3">
          {content.sections.map((section) => (
            <div key={section.title} className="surface-panel flex h-full flex-col gap-5 p-7 md:p-8">
              <h2 className="max-w-[18rem] text-xl font-semibold tracking-[-0.03em] text-white md:text-[1.45rem]">
                {section.title}
              </h2>
              <p className="max-w-[34rem] text-[1.02rem] leading-8 text-white/70">{section.body}</p>
            </div>
          ))}
        </div>
        <div className="surface-accent rounded-[2rem] p-7 md:p-8">
          <p className="max-w-[42rem] text-[0.98rem] leading-7 text-white/74">
            {locale === "en"
              ? "Relevant links if you are looking for service context rather than the main portfolio."
              : "Enlaces relevantes si buscas contexto de servicios y no el portfolio principal."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={siteConfig.approvedLinks.orbytia}
              className="rounded-full border border-cyan-300/24 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/35 hover:bg-white/[0.06]"
            >
              Orbytia
            </Link>
            <Link
              href={siteConfig.approvedLinks.verifiko}
              className="rounded-full border border-cyan-300/24 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/35 hover:bg-white/[0.06]"
            >
              Verifiko
            </Link>
          </div>
        </div>
      </Section>
    </SiteFrame>
  );
}
