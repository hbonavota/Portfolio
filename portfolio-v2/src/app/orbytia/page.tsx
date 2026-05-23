import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/orbytia",
  title: "Orbytia",
  description: "Separate consulting context. Engineering portfolio is the main path."
});

export default function Page() {
  return <OrbytiaPage locale="en" />;
}
