"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function TopHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">My</span>
            <span className="text-white">Hextech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Language toggle and social links */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-2">
              <Link href="https://github.com/HenriqueMARTINS9" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/henrique-martins9/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:henrique.mar@outlook.fr">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800"
                >
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>

            {/* Resume Button */}
            <Link href="https://www.linkedin.com/in/henrique-martins9/" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0"
              >
                {t("nav.resume")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
