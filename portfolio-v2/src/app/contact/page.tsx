import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/contact",
  title: "Contact",
  description: "LinkedIn for roles. GitHub for code. CV on request."
});

export default function Page() {
  return <ContactPage locale="en" />;
}
