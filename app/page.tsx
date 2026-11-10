import type { Metadata } from "next"
import Portfolio from "@/components/portfolio"
import { businessName, profileStructuredData, siteDescription, siteTitle, siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: businessName,
    locale: "fr_FR",
    firstName: "Henrique",
    lastName: "MARTINS",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
