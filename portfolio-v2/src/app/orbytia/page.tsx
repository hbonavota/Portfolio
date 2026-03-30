import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/orbytia",
  title: "Orbytia",
  description: "The ecosystem layer connecting public products, experiments and technical direction."
});

export default function Page() {
  return <OrbytiaPage locale="en" />;
}
