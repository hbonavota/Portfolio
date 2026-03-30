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
    locale: "es",
    pathname: `/es/trabajo/${slug}`,
    title: study ? study.title.es : "Caso",
    description: study ? study.summary.es : "Caso público seleccionado."
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudyPage locale="es" slug={slug} />;
}
