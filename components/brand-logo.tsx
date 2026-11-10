import Image from "next/image"
import { businessName } from "@/lib/site"

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
      <span className={compact ? "sr-only" : "text-white"}>{businessName}</span>
    </span>
  )
}
