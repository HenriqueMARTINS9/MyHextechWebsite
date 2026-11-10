"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getProjectCount, isFeaturedTechnology } from "@/lib/project-technologies"

interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  const { language } = useLanguage()
  const projectCount = getProjectCount(name)
  const isFrequentlyUsed = isFeaturedTechnology(name)
  const starLabel = language === "fr"
    ? `Parmi les plus utilisés : ${projectCount} projets présentés`
    : `Frequently used: ${projectCount} featured projects`
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative rounded-lg bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-4 sm:p-6 h-full transition-all duration-300 hover:border-red-600/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600/10 to-rose-700/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex min-h-8 items-center justify-center gap-2">
          <span className="min-w-0 break-words text-center font-medium text-base sm:text-lg">{name}</span>
          {isFrequentlyUsed && (
            <span tabIndex={0} aria-label={starLabel} className="group/star relative shrink-0 text-amber-400">
              <Star aria-hidden="true" className="h-4 w-4 fill-current" />
              <span role="tooltip" className="pointer-events-none absolute right-0 bottom-full z-20 mb-2 hidden w-36 rounded bg-zinc-950 p-2 text-center text-xs text-zinc-100 shadow-lg group-hover/star:block group-focus/star:block">
                {starLabel}
              </span>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
