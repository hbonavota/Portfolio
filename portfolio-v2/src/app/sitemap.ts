import type { MetadataRoute } from "next";

import { caseStudies, siteConfig } from "@/content/site";

const staticPaths = [
  "/",
  "/work",
  "/about",
  "/orbytia",
  "/contact",
  "/es",
  "/es/trabajo",
  "/es/sobre-mi",
  "/es/orbytia",
  "/es/contacto"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPaths.map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date()
  }));

  const caseEntries = caseStudies.flatMap((study) => [
    {
      url: `${siteConfig.domain}/work/${study.slug}`,
      lastModified: new Date()
    },
    {
      url: `${siteConfig.domain}/es/trabajo/${study.slug}`,
      lastModified: new Date()
    }
  ]);

  return [...staticEntries, ...caseEntries];
}
