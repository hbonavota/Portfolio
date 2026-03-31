import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/content/site";

import { CaseStudyPage } from "@/components/pages/case-study-page";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  return buildMetadata({
    locale: "en",
    pathname: `/work/${slug}`,
    title: study ? study.title.en : "Case Study",
    description: study ? study.summary.en : "Selected case study."
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudyPage locale="en" slug={slug} />;
}
