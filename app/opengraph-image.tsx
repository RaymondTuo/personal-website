import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

// Satori can't resolve next/font, so the display face is read off disk.
// Latin only: Instrument Serif has no CJK coverage, so keep this card English.
const instrumentSerif = fs.readFileSync(
  path.join(process.cwd(), "app", "fonts", "InstrumentSerif-Regular.ttf"),
);

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
          padding: "72px",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 88% 8%, rgba(225,6,0,0.28) 0%, rgba(225,6,0,0) 52%), linear-gradient(to bottom, #050505 0%, #111111 100%)",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#a1a1aa",
          }}
        >
          Pittsburgh&nbsp;&nbsp;/&nbsp;&nbsp;CMU Tepper MSBA &rsquo;26
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Instrument Serif",
            fontSize: 82,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            maxWidth: "960px",
          }}
        >
          I make the number trustworthy — and the story impossible to ignore.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              width: "140px",
              height: "4px",
              backgroundColor: "#e10600",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: 28,
            }}
          >
            <span style={{ fontFamily: "Instrument Serif", fontSize: 38 }}>
              {site.name}
            </span>
            <span style={{ color: "#3f3f46" }}>/</span>
            <span style={{ color: "#a1a1aa" }}>{site.role}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: instrumentSerif,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
