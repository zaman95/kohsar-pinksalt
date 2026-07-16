import { ImageResponse } from "next/og";
import { COMPANY } from "@/lib/constants";

export const runtime = "edge";
export const alt = "Kohsar Saltworks — Wholesale Himalayan Pink Salt Manufacturer & Exporter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(120deg, #1F2937 0%, #3B4452 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 40, background: "#E9B7A5", borderRadius: 8, transform: "rotate(45deg)" }} />
          <div style={{ display: "flex", flexDirection: "column", color: "#FAF9F7" }}>
            <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: 4 }}>KOHSAR</span>
            <span style={{ fontSize: 13, letterSpacing: 6, color: "#E9B7A5" }}>SALTWORKS</span>
          </div>
        </div>
        <div style={{ marginTop: 48, fontSize: 52, fontWeight: 800, color: "#FAF9F7", maxWidth: 900, lineHeight: 1.15 }}>
          Premium Himalayan Pink Salt, straight from the source in Pakistan.
        </div>
        <div style={{ marginTop: 28, fontSize: 24, color: "#E7DDD5" }}>{COMPANY.tagline}</div>
      </div>
    ),
    { ...size }
  );
}
