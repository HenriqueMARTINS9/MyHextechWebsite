import type { Metadata } from "next"
import Portfolio from "@/components/portfolio"
import { profileStructuredData, siteDescription, siteTitle, siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "MyHextech",
    locale: "fr_FR",
    firstName: "Henrique",
    lastName: "MARTINS",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileStructuredData).replace(/</g, "\\u003c") }}
      />
      <Portfolio />
    </>
  )
}
