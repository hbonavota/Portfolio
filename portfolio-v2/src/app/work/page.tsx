import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/work",
  title: "Work",
  description: "Selected case studies across products, client work, ecosystem initiatives and experimental lab work."
});

export default function Page() {
  return <WorkPage locale="en" />;
}
