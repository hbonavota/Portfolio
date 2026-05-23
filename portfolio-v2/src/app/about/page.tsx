import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/about",
  title: "About",
  description: "How I work end-to-end at Rezolve — from the discovery call to the AWS box."
});

export default function Page() {
  return <AboutPage locale="en" />;
}
