import Link from "next/link";

import { caseStudies, homeContent, Locale, professionalExperience, siteConfig } from "@/content/site";

import { CaseCard } from "@/components/site/case-card";
import { Section } from "@/components/site/section";
import { SiteFrame } from "@/components/site/site-frame";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = homeContent[locale];
  const featured = caseStudies.filter((study) => study.featured && study.category === "client-work");

  return (
    <SiteFrame locale={locale}>
      <div className="space-y-18 lg:space-y-20">
        <section className="max-w-4xl space-y-6 lg:space-y-7">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-cyan-200/72">
            {content.hero.eyebrow}
          </p>
          <div className="space-y-5 lg:space-y-6">
            <h1 className="max-w-4xl text-[3rem] font-semibold leading-[0.96] tracking-tight text-white sm:text-[3.9rem] lg:text-[4.65rem]">
              {content.hero.title}
            </h1>
            <p className="max-w-[38rem] text-[1rem] leading-7 text-white/68 sm:text-[1.08rem] sm:leading-8">
              {content.hero.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-0.5">
            <Link
              href={content.hero.primaryCta.href}
              className="rounded-full border border-cyan-300/24 bg-cyan-300/10 px-5.5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/16 sm:px-6 sm:py-3.5"
            >
              {content.hero.primaryCta.label}
            </Link>
            <Link
              href={content.hero.secondaryCta.href}
              className="rounded-full border border-white/10 px-5.5 py-3 text-sm font-semibold text-white/84 transition hover:border-white/22 hover:text-white sm:px-6 sm:py-3.5"
            >
              {content.hero.secondaryCta.label}
            </Link>
          </div>
        </section>

        <Section
          id="selected-work"
          eyebrow={content.selectedWork.eyebrow}
          title={content.selectedWork.title}
        >
          <div className="grid gap-6 xl:grid-cols-2">
            {featured.map((study) => (
              <CaseCard key={study.slug} locale={locale} study={study} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow={content.experience.eyebrow}
          title={content.experience.title}
        >
          <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="surface-panel-strong rounded-[2.2rem] p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">Rezolve</p>
              <h3 className="mt-5 text-[1.8rem] font-semibold text-white md:text-[1.95rem]">
                {professionalExperience.role[locale]}
              </h3>
              <p className="mt-5 text-[0.98rem] leading-8 text-white/66">{professionalExperience.summary[locale]}</p>
            </div>
            <div className="grid gap-5">
              <div className="surface-panel rounded-[2.2rem] p-7 md:p-8">
                <ul className="space-y-4 text-[0.98rem] leading-8 text-white/68">
                  {professionalExperience.notes[locale].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 rounded-full bg-cyan-200" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={siteConfig.approvedLinks.linkedin}
                className="surface-panel flex min-h-[8.5rem] flex-col justify-between rounded-[2rem] p-6 transition hover:border-cyan-200/30 hover:text-cyan-100 md:p-7"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                  {content.contact.eyebrow}
                </p>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-[1.4rem] font-semibold tracking-[-0.04em] text-white md:text-[1.5rem]">
                      LinkedIn
                    </h3>
                    <p className="max-w-md text-sm leading-7 text-white/62">{content.contact.description}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/56">
                    ↗
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </SiteFrame>
  );
}
