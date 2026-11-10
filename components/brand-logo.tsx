import Image from "next/image"

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap align-middle">
      <Image
        src="/images/myhextech-logo-small.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-contain"
      />
      <span className={compact ? "sr-only lg:not-sr-only" : undefined}>
        <span className="text-white">My</span><span className="text-red-400">Hextech</span>
      </span>
    </span>
  )
}
