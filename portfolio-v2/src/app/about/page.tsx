import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/about",
  title: "About",
  description: "Freelance software engineer focused on integrations, production systems and maintainable delivery."
});

export default function Page() {
  return <AboutPage locale="en" />;
}
