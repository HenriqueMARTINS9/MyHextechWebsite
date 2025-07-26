import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: "MyHextech",
  description: "Created by Henrique MARTINS",
  generator: "Henrique MARTINS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
