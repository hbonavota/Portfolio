import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/orbytia",
  title: "Orbytia",
  description: "Structure for my own products and experiments, separate from client work."
});

export default function Page() {
  return <OrbytiaPage locale="en" />;
}
