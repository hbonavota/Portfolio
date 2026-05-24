import { aboutPage, Locale, recruiterAnchor, stack } from "@/content/site";

import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { SiteFrame } from "@/components/site/site-frame";

type AboutPageProps = {
  locale: Locale;
};

export function AboutPage({ locale }: AboutPageProps) {
  const content = aboutPage[locale];
  const anchor = recruiterAnchor[locale];

  return (
    <SiteFrame locale={locale}>
      <Reveal>
      <Section
        eyebrow={locale === "en" ? "About" : "Sobre mí"}
        title={
          locale === "en"
            ? "How I work across client needs, technical decisions and delivery."
            : "Cómo trabajo entre necesidades de clientes, decisiones técnicas y entregas."
        }
        description={content.intro}
      >
        <div className="grid gap-6 xl:grid-cols-3">
          {content.sections.map((section) => (
            <div key={section.title} className="surface-panel flex h-full flex-col gap-5 p-5 sm:p-7 md:p-8">
              <h2 className="max-w-[18rem] text-xl font-semibold tracking-[-0.03em] text-white md:text-[1.45rem]">
                {section.title}
              </h2>
              <p className="max-w-[34rem] text-[1.02rem] leading-7 text-white/70 sm:leading-8">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="surface-panel rounded-[2rem] p-5 sm:p-7 md:p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/72">
            {locale === "en" ? "Stack" : "Stack"}
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[0.78rem] font-medium text-white/76"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="surface-panel rounded-[1.8rem] p-5 sm:p-6 md:p-7">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-white/48">
              {locale === "en" ? "Experience" : "Experiencia"}
            </p>
            <p className="mt-4 text-[0.96rem] leading-7 text-white/78">{anchor.years}</p>
          </div>
          <div className="surface-panel rounded-[1.8rem] p-5 sm:p-6 md:p-7">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-white/48">
              {locale === "en" ? "Location" : "Ubicación"}
            </p>
            <p className="mt-4 text-[0.96rem] leading-7 text-white/78">{anchor.location}</p>
          </div>
          <div className="surface-panel rounded-[1.8rem] p-5 sm:p-6 md:p-7">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-white/48">
              {locale === "en" ? "Availability" : "Disponibilidad"}
            </p>
            <p className="mt-4 text-[0.96rem] leading-7 text-white/78">{anchor.availability}</p>
          </div>
        </div>

        <p className="max-w-[42rem] text-[0.85rem] leading-7 text-white/50">{content.background}</p>
      </Section>
      </Reveal>
    </SiteFrame>
  );
}
