"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { GitHubCalendar } from "react-github-calendar"
import { useLanguage } from "@/contexts/language-context"

interface GitHubContributionsProps {
  username: string
}

export function GitHubContributions({ username }: GitHubContributionsProps) {
  const { language } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 hover:border-blue-500/50 transition-all duration-300">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center flex-shrink-0">
                <Github className="h-5 w-5 text-blue-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-white">
                  {language === "en" ? "GitHub Contributions" : "Contributions GitHub"}
                </h3>
                <p className="text-sm text-zinc-400 truncate">@{username}</p>
              </div>
            </div>
            <Link
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap"
            >
              <span>{language === "en" ? "View Profile" : "Voir le Profil"}</span>
              <ExternalLink className="h-4 w-4 flex-shrink-0" />
            </Link>
          </div>

          <div className="w-full overflow-hidden">
            <div className="overflow-x-auto overflow-y-hidden pb-2" style={{ width: "100%" }}>
              <div className="github-calendar-wrapper" style={{ minWidth: "600px", display: "inline-block" }}>
                <GitHubCalendar
                  username={username}
                  year={2025}
                  colorScheme="dark"
                  blockSize={14}
                  blockMargin={5}
                  fontSize={13}
                  hideColorLegend={false}
                  showWeekdayLabels={true}
                  weekStart={1}
                  labels={{
                    totalCount: language === "en"
                      ? "{{count}} contributions in 2025"
                      : "{{count}} contributions en 2025",
                    legend: {
                      less: language === "en" ? "Less" : "Moins",
                      more: language === "en" ? "More" : "Plus",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
