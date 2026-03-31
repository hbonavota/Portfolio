import { aboutPage, Locale } from "@/content/site";

import { Section } from "@/components/site/section";
import { SiteFrame } from "@/components/site/site-frame";

type AboutPageProps = {
  locale: Locale;
};

export function AboutPage({ locale }: AboutPageProps) {
  const content = aboutPage[locale];

  return (
    <SiteFrame locale={locale}>
      <Section
        eyebrow={locale === "en" ? "About" : "Sobre mí"}
        title={
          locale === "en"
            ? "Technical work with business sense."
            : "Trabajo técnico con sentido de negocio."
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
      </Section>
    </SiteFrame>
  );
}
