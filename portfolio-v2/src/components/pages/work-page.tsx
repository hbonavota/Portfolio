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
      ? "Projects, scope and role."
      : "Proyectos, alcance y papel.";
  const description =
    locale === "en"
      ? "Client projects, product work and exploratory work, explained with clear scope and role."
      : "Trabajo para clientes, producto y exploración, explicados con claridad en alcance y papel.";

  return (
    <SiteFrame locale={locale}>
      <Section
        eyebrow={locale === "en" ? "Work" : "Trabajo"}
        title={title}
        description={description}
      >
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <span
              key={key}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/52 sm:px-4 sm:py-2 sm:text-[0.68rem]"
            >
              {label[locale]}
            </span>
          ))}
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseCard key={study.slug} locale={locale} study={study} />
          ))}
        </div>
      </Section>
    </SiteFrame>
  );
}
