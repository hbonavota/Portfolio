import Link from "next/link";
import { notFound } from "next/navigation";

import { caseStudies, categoryLabels, Locale } from "@/content/site";

import { Section } from "@/components/site/section";
import { SiteFrame } from "@/components/site/site-frame";

type CaseStudyPageProps = {
  locale: Locale;
  slug: string;
};

export function CaseStudyPage({ locale, slug }: CaseStudyPageProps) {
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study || !study.pageRequired) {
    notFound();
  }

  return (
    <SiteFrame locale={locale}>
      <section className="space-y-8 lg:space-y-9">
        <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/56">
          {categoryLabels[study.category][locale]}
        </span>
        <div className="space-y-5 lg:space-y-6">
          <h1 className="max-w-5xl text-[3.15rem] font-semibold leading-[0.94] tracking-tight text-white sm:text-[4.3rem] lg:text-[5.15rem]">
            {study.title[locale]}
          </h1>
          <p className="text-[0.76rem] uppercase tracking-[0.32em] text-cyan-200/72">{study.strapline[locale]}</p>
          <p className="max-w-[43rem] text-[1.05rem] leading-8 text-white/66 sm:text-[1.15rem] sm:leading-9">
            {study.summary[locale]}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="surface-panel rounded-[1.9rem] p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
              {locale === "en" ? "Role" : "Rol"}
            </p>
            <p className="mt-4 text-base font-medium leading-7 text-white">{study.role[locale]}</p>
          </div>
          <div className="surface-panel rounded-[1.9rem] p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
              {locale === "en" ? "Type" : "Tipo"}
            </p>
            <p className="mt-4 text-base font-medium leading-7 text-white">{categoryLabels[study.category][locale]}</p>
          </div>
          {study.publicLinks.length > 0 ? (
            <div className="surface-panel rounded-[1.9rem] p-6 md:p-7 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
                {locale === "en" ? "Links" : "Enlaces"}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {study.publicLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-cyan-300/24 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/16"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <Section
        eyebrow={locale === "en" ? "Context" : "Contexto"}
        title={locale === "en" ? "Context" : "Contexto"}
      >
        <div className="max-w-4xl space-y-6 text-[1.02rem] leading-8 text-white/68">
          {study.overview[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={locale === "en" ? "Problem" : "Problema"}
        title={locale === "en" ? "Problem and constraints" : "Problema y restricciones"}
      >
        <div className="max-w-4xl space-y-6 text-[1.02rem] leading-8 text-white/68">
          {study.challenge[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={locale === "en" ? "Approach" : "Enfoque"}
        title={locale === "en" ? "Approach and technical decisions" : "Enfoque y decisiones técnicas"}
      >
        <div className="max-w-4xl space-y-6 text-[1.02rem] leading-8 text-white/68">
          {study.approach[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={locale === "en" ? "Challenges" : "Retos"}
        title={locale === "en" ? "Challenges" : "Retos"}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {study.highlights[locale].map((item) => (
            <div key={item} className="surface-panel rounded-[1.8rem] p-6 text-[0.98rem] leading-8 text-white/72 md:p-7">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={locale === "en" ? "Outcome" : "Resultado"}
        title={locale === "en" ? "Outcome" : "Resultado"}
      >
        <div className="max-w-4xl space-y-6 text-[1.02rem] leading-8 text-white/68">
          {study.outcome[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </SiteFrame>
  );
}
