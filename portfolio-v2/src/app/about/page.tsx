import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/about",
  title: "About",
  description: "Software engineer and product engineer focused on integrations, production systems and business-oriented software delivery."
});

export default function Page() {
  return <AboutPage locale="en" />;
}
