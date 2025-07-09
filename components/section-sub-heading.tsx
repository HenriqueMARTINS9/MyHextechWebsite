"use client"

import { motion } from "framer-motion"

interface SectionSubHeadingProps {
  title: string
}

export function SectionSubHeading({ title }: SectionSubHeadingProps) {
  return (
    <div className="text-center space-y-4">
      <motion.h3
        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>

      <motion.div
        className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-6"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </div>
  )
}
