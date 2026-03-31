import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/work",
  title: "Work",
  description: "Selected work across client projects, own products and experiments."
});

export default function Page() {
  return <WorkPage locale="en" />;
}
