import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, CalendarDays, ShieldCheck } from "lucide-react"

interface LegalPageLayoutProps {
  title: string
  description: string
  documentLabel: string
  currentPath: string
  children: ReactNode
}

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  { href: "/conditions-generales", label: "CGV et prestations" },
]

export function LegalPageLayout({
  title,
  description,
  documentLabel,
  currentPath,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-32 top-96 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <div className="container flex min-h-20 items-center justify-between gap-6 py-4">
          <Link href="/" className="text-xl font-bold" aria-label="Retour à l'accueil MyHextech">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">My</span>
            <span>Hextech</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au portfolio
          </Link>
        </div>
      </header>

      <div className="container relative z-10 py-16 sm:py-24">
        <article className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 shadow-2xl shadow-black/30 backdrop-blur-sm">
          <div className="border-b border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 px-6 py-10 sm:px-12 sm:py-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              {documentLabel}
            </div>
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
            <div className="mt-7 flex items-center gap-2 text-sm text-zinc-500">
              <CalendarDays className="h-4 w-4" />
              Dernière mise à jour : 10 août 2026
            </div>
          </div>

          <div className="legal-content space-y-12 px-6 py-10 text-zinc-300 sm:px-12 sm:py-14 [&_a]:font-medium [&_a]:text-cyan-400 [&_a]:underline-offset-4 [&_a:hover]:underline [&_address]:not-italic [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-white [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_li]:pl-1 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_p]:leading-8 [&_section]:space-y-4 [&_strong]:font-semibold [&_strong]:text-zinc-100 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2">
            {children}
          </div>
        </article>

        <nav aria-label="Documents juridiques" className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {legalLinks.map(({ href, label }) => {
            const isCurrent = href === currentPath

            return (
              <Link
                key={href}
                href={href}
                aria-current={isCurrent ? "page" : undefined}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  isCurrent
                    ? "border-blue-400/40 bg-blue-400/10 text-blue-300"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </main>
  )
}
