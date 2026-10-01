import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/work",
  title: "Work",
  description: "One product of my own and three projects at Rezolve — explainable URL risk detection, queue control, member validation, and high-concurrency registration."
});

export default function Page() {
  return <WorkPage locale="en" />;
}
