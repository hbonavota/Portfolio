import { caseStudies, categoryLabels, Locale } from "@/content/site";

import { CaseCard } from "@/components/site/case-card";
import { Section } from "@/components/site/section";
import { SiteFrame } from "@/components/site/site-frame";

type WorkPageProps = {
  locale: Locale;
};

export function WorkPage({ locale }: WorkPageProps) {
  const title =
    locale === "en"
      ? "Production systems, integrations, and technical decisions."
      : "Sistemas en producción, integraciones y decisiones técnicas.";

  const description =
    locale === "en"
      ? "Case studies from real work across ticketing, validation, concurrency, and product engineering."
      : "Casos basados en trabajo real en ticketing, validación, concurrencia e ingeniería de producto.";

  const categories =
    Object.entries(categoryLabels).filter(([key]) => key !== "ecosystem");

  const studies = [
    ...caseStudies.filter((study) => study.category === "client-work"),
    ...caseStudies.filter((study) => study.slug === "verifiko")
  ];

  return (
    <SiteFrame locale={locale}>
      <Section
        eyebrow={locale === "en" ? "Selected work" : "Experiencia seleccionada"}
        title={title}
        description={description}
      >
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {categories.map(([key, label]) => (
            <span
              key={key}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/52 sm:px-4 sm:py-2 sm:text-[0.68rem]"
            >
              {label[locale]}
            </span>
          ))}
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {studies.map((study) => (
            <CaseCard key={study.slug} locale={locale} study={study} />
          ))}
        </div>
      </Section>
    </SiteFrame>
  );
}
