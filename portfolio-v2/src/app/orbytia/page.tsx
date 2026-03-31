import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/orbytia",
  title: "Orbytia",
  description: "Software consulting, automation, applied AI and digital solutions."
});

export default function Page() {
  return <OrbytiaPage locale="en" />;
}
