import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/work",
  title: "Work",
  description: "Case studies on ticketing, member validation, concurrency control and product work."
});

export default function Page() {
  return <WorkPage locale="en" />;
}
