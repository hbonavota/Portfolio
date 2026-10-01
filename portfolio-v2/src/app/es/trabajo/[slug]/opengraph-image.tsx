import { caseStudies } from "@/content/site";
import { ogAlt, ogContentType, ogImageResponse, ogSize, siteOgImage } from "@/lib/og-card";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);
  if (!study) return siteOgImage("es");
  return ogImageResponse({ heading: study.title.es, body: study.summary.es, clampBody: true });
}
