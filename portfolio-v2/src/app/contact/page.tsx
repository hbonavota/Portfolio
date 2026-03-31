import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/contact",
  title: "Contact",
  description: "Best way to start a project conversation about software, automation or systems."
});

export default function Page() {
  return <ContactPage locale="en" />;
}
