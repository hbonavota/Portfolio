import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/orbytia",
  title: "Orbytia",
  description: "Secondary consulting context for selected client work in software, automation and applied AI."
});

export default function Page() {
  return <OrbytiaPage locale="en" />;
}
