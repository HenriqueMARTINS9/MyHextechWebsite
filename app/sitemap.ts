import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/mentions-legales", "/politique-de-confidentialite", "/conditions-generales"].map((path) => ({
    url: `${siteUrl}${path}`,
  }))
}
