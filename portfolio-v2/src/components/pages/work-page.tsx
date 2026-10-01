import { caseStudies, categoryLabels, Locale, recruiterAnchor } from "@/content/site";

import { CaseCard } from "@/components/site/case-card";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { SiteFrame } from "@/components/site/site-frame";

type WorkPageProps = {
  locale: Locale;
};

const orderedSlugs = [
  "verifiko",
  "ticketing-queue-control",
  "member-validation-data-update",
  "high-concurrency-draw-flows"
];

export function WorkPage({ locale }: WorkPageProps) {
  const title =
    locale === "en"
      ? "Selected work: one product of my own and three projects at Rezolve."
      : "Trabajo seleccionado: un producto propio y tres proyectos en Rezolve.";

  const description = recruiterAnchor[locale].ndaLine;

  const categories = Object.entries(categoryLabels).filter(
    ([key]) => key === "product" || key === "client-work"
  );

  const studies = orderedSlugs
    .map((slug) => caseStudies.find((entry) => entry.slug === slug))
    .filter((study): study is NonNullable<typeof study> => Boolean(study));

  return (
    <SiteFrame locale={locale}>
      <Reveal>
      <Section
        eyebrow={locale === "en" ? "Selected work" : "Trabajo seleccionado"}
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
      </Reveal>
    </SiteFrame>
  );
}
