import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { businessName, personName } from "@/lib/site"

export const alt = `${businessName} - ${personName}, développeur full-stack freelance`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/myhextech-logo-512.png"))

  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: 80, background: "#18181b", color: "#fafafa", borderLeft: "16px solid #dc2626" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 80, fontWeight: 700 }}>
          <img src={`data:image/png;base64,${logo.toString("base64")}`} alt="" width={108} height={108} />
          <span>{businessName}</span>
        </div>
        <div style={{ fontSize: 42, marginTop: 28 }}>{personName}</div>
        <div style={{ fontSize: 30, color: "#d4d4d8", marginTop: 20 }}>Développeur full-stack freelance</div>
        <div style={{ fontSize: 26, color: "#fca5a5", marginTop: 36 }}>Web · Mobile · Intelligence artificielle · 3D</div>
        <div style={{ fontSize: 24, color: "#a1a1aa", marginTop: 30 }}>www.myhextech.com</div>
      </div>
    ),
    size,
  )
}
