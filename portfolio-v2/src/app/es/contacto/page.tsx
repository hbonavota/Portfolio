import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/contacto",
  title: "Contacto",
  description: "Vía directa de contacto para oportunidades de ingeniería y conversaciones técnicas."
});

export default function Page() {
  return <ContactPage locale="es" />;
}
