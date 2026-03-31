import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/about",
  title: "About",
  description: "Software engineer who translates business needs into clear technical work."
});

export default function Page() {
  return <AboutPage locale="en" />;
}
