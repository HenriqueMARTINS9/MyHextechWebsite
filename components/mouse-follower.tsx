"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Main cursor - glowing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
      >
        <div className="relative">
          {/* Outer glow */}
          <motion.div
            className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-sm"
            animate={{
              scale: isClicking ? 1.5 : 1,
              opacity: isClicking ? 0.8 : 0.6,
            }}
            transition={{ duration: 0.1 }}
          />

          {/* Inner core */}
          <motion.div
            className="relative w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
            animate={{
              scale: isClicking ? 0.8 : 1,
            }}
            transition={{ duration: 0.1 }}
          >
            {/* Inner highlight */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </div>
      </motion.div>

      {/* Trailing particles */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-blue-400/40 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 15, stiffness: 200, mass: 0.8 }}
      />

      <motion.div
        className="fixed top-0 left-0 w-0.5 h-0.5 rounded-full bg-cyan-400/30 pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 1,
          y: mousePosition.y - 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 10, stiffness: 150, mass: 1.2 }}
      />
    </>
  )
}
