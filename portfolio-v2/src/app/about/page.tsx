import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/about",
  title: "About",
  description: "Software engineer who turns ambiguous needs into clear technical execution."
});

export default function Page() {
  return <AboutPage locale="en" />;
}
