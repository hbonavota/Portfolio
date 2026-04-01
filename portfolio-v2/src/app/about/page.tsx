import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/about",
  title: "About",
  description: "Software engineer working across client requirements, technical decisions and end-to-end delivery."
});

export default function Page() {
  return <AboutPage locale="en" />;
}
