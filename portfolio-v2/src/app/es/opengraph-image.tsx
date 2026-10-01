import { ImageResponse } from "next/og";

export const alt = "Hernán Bonavota — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
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
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: "-0.03em" }}>
            Hernán Bonavota
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 600,
              color: "#67e9f9",
              marginTop: 18,
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "rgba(235,242,255,0.72)",
              maxWidth: 940,
              lineHeight: 1.3,
              marginTop: 28,
            }}
          >
            Ticketing, pagos y seguridad de aplicaciones en plataformas de alto tráfico
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "#67e9f9" }}>
          hbonavota.com
        </div>
      </div>
    ),
    { ...size }
  );
}
