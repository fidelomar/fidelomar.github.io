import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt =
  "Fidel Omar García - Ingeniero de Software | .NET, SQL Server, APIs e Integraciones";

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
          padding: "64px 80px",
          backgroundColor: "#0a192f",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(45, 212, 191, 0.12) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(56, 189, 248, 0.08) 0%, transparent 50%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#f8fafc",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#0d213f",
              border: "1.5px solid #2dd4bf",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "22px",
              letterSpacing: "1px",
            }}
          >
            FG
          </div>
          <span
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              letterSpacing: "0.5px",
            }}
          >
            fidelomar.github.io
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 800,
              margin: 0,
              color: "#f8fafc",
              letterSpacing: "-0.5px",
            }}
          >
            Fidel Omar García
          </h1>
          <p
            style={{
              fontSize: "30px",
              fontWeight: 600,
              margin: 0,
              color: "#2dd4bf",
            }}
          >
            Ingeniero de Software
          </p>
          <p
            style={{
              fontSize: "24px",
              margin: 0,
              color: "#cbd5e1",
            }}
          >
            .NET · SQL Server · APIs · Integraciones
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #1e293b",
            paddingTop: "24px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "#94a3b8",
            }}
          >
            Desarrollo asistido por IA bajo supervisión humana
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
