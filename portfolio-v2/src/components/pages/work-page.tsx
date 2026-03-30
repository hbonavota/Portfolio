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
      ? "Selected case studies across products, client work and experimental initiatives."
      : "Casos seleccionados entre productos, trabajo para clientes e iniciativas experimentales.";
  const description =
    locale === "en"
      ? "Every public case is framed with explicit scope, professional language and a clear distinction between authorship, ownership and experimentation."
      : "Cada caso público se presenta con alcance explícito, lenguaje profesional y una distinción clara entre autoría, propiedad y experimentación.";

    return (
    <SiteFrame locale={locale}>
      <Section
        eyebrow={locale === "en" ? "Work" : "Trabajo"}
        title={title}
        description={description}
      >
        <div className="flex flex-wrap gap-3">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <span
              key={key}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/56"
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
