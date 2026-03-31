import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/work",
  title: "Work",
  description: "Short descriptions of client work, product work and selected exploration."
});

export default function Page() {
  return <WorkPage locale="en" />;
}
