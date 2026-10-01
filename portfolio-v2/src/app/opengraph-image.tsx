import { ogAlt, ogContentType, ogSize, siteOgImage } from "@/lib/og-card";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return siteOgImage("en");
}
