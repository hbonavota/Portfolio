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
      ? "Client work, products and experiments from real projects."
      : "Casos seleccionados entre productos, proyectos para clientes e iniciativas experimentales.";
  const description =
    locale === "en"
      ? "Each case makes clear what I built, what kind of work it is and the context it was built for."
      : "Cada caso público se presenta con alcance explícito, lenguaje profesional y una distinción clara entre autoría, propiedad y experimentación.";

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
