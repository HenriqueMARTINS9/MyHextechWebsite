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
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 hover:border-red-600/50 transition-all duration-300">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600/10 to-rose-700/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center flex-shrink-0">
                <Github className="h-5 w-5 text-red-400" />
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
              className="flex items-center justify-center sm:justify-start gap-2 text-sm text-red-400 hover:text-red-300 transition-colors whitespace-nowrap"
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
                  year="last"
                  colorScheme="dark"
                  theme={{ dark: ["#27272a", "#7f1d1d", "#b91c1c", "#ef4444", "#fca5a5"] }}
                  errorMessage={language === "en" ? "GitHub activity is temporarily unavailable." : "L'activité GitHub est temporairement indisponible."}
                  blockSize={14}
                  blockMargin={5}
                  fontSize={13}
                  showColorLegend={true}
                  showWeekdayLabels={true}
                  weekStart={1}
                  labels={{
                    totalCount: language === "en"
                      ? "{{count}} contributions over the last 12 months"
                      : "{{count}} contributions sur les 12 derniers mois",
                    months: language === "fr"
                      ? ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"]
                      : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    weekdays: language === "fr"
                      ? ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
                      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
