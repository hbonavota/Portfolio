import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/work",
  title: "Work",
  description: "Case studies on backend systems, integrations, validation, and concurrency."
});

export default function Page() {
  return <WorkPage locale="en" />;
}
