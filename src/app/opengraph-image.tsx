import { ImageResponse } from "next/og";

export const alt = "Yassine Benazzou — Freelance Web Developer & Web Designer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#07090d",
          padding: "64px 72px",
          color: "#f8fafc",
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.22), transparent 45%), radial-gradient(circle at 15% 85%, rgba(34, 211, 238, 0.14), transparent 40%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#052e16",
                fontWeight: 800,
                fontSize: "20px",
              }}
            >
              YB
            </div>
            <span style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.02em" }}>
              YASSINE.
            </span>
          </div>
          <span
            style={{
              fontSize: "16px",
              color: "#6ee7b7",
              border: "1px solid rgba(52, 211, 153, 0.35)",
              borderRadius: "999px",
              padding: "8px 18px",
            }}
          >
            Available for projects · Morocco &amp; Worldwide
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "960px" }}>
          <div style={{ fontSize: "58px", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            I Build Digital Experiences That Drive Business Growth.
          </div>
          <div style={{ fontSize: "24px", color: "#94a3b8", lineHeight: 1.45 }}>
            Freelance Web Developer &amp; Web Designer — Next.js, React, E-commerce &amp; SEO.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#cbd5e1",
          }}
        >
          <span>Yassine Benazzou</span>
          <span style={{ color: "#34d399" }}>Morocco · France · Belgium · Canada · UAE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
