import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/work",
  title: "Work",
  description: "Selected case studies across client projects, product work and exploratory projects."
});

export default function Page() {
  return <WorkPage locale="en" />;
}
