import { ImageResponse } from "next/og";
import type { CSSProperties } from "react";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = "Hernán Bonavota — Software Engineer";

type Locale = "en" | "es";

const siteTagline: Record<Locale, string> = {
  en: "High-traffic ticketing, payments and application security",
  es: "Ticketing, pagos y seguridad de aplicaciones en plataformas de alto tráfico",
};

type OgCardProps = {
  heading: string;
  accentLine?: string;
  body: string;
  clampBody?: boolean;
};

// Satori does not honor -webkit-line-clamp here, so clamp the text to roughly
// two lines at this font size/width with an ellipsis before rendering.
function clampToTwoLines(text: string, max = 108) {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}

function OgCard({ heading, accentLine, body, clampBody }: OgCardProps) {
  const displayBody = clampBody ? clampToTwoLines(body) : body;
  const bodyStyle: CSSProperties = {
    display: "flex",
    overflow: "hidden",
    fontSize: 34,
    color: "rgba(235,242,255,0.72)",
    maxWidth: 940,
    lineHeight: 1.3,
    marginTop: 28,
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "88px 96px",
        background: "linear-gradient(135deg, #07111f 0%, #050b16 100%)",
        color: "#ebf2ff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 132,
          height: 6,
          borderRadius: 999,
          background: "#22d3ee",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: 1010,
          }}
        >
          {heading}
        </div>
        {accentLine ? (
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 600,
              color: "#67e9f9",
              marginTop: 18,
            }}
          >
            {accentLine}
          </div>
        ) : null}
        <div style={bodyStyle}>{displayBody}</div>
      </div>
      <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "#67e9f9" }}>
        hbonavota.com
      </div>
    </div>
  );
}

export function ogImageResponse(props: OgCardProps) {
  return new ImageResponse(<OgCard {...props} />, { ...ogSize });
}

export function siteOgImage(locale: Locale) {
  return ogImageResponse({
    heading: "Hernán Bonavota",
    accentLine: "Software Engineer",
    body: siteTagline[locale],
  });
}
