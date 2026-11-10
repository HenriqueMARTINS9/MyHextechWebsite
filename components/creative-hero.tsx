"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { sampleLogoParticles } from "@/lib/logo-particles"

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isReady, setIsReady] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return

    const logo = new window.Image()
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    let disposed = false
    let width = 0
    let height = 0
    let particles: { x: number; y: number; baseX: number; baseY: number; color: string; radius: number; phase: number }[] = []
    const pointer = { x: 0, y: 0, active: false }

    function draw(time: number) {
      if (!context) return
      context.clearRect(0, 0, width, height)
      for (const particle of particles) {
        const motion = reducedMotion.matches ? 0 : 1
        const targetX = particle.baseX + Math.sin(time * 0.0007 + particle.phase) * 0.8 * motion
        const targetY = particle.baseY + Math.cos(time * 0.0006 + particle.phase) * 0.8 * motion
        particle.x += (targetX - particle.x) * 0.08
        particle.y += (targetY - particle.y) * 0.08
        if (pointer.active && motion) {
          const dx = particle.x - pointer.x
          const dy = particle.y - pointer.y
          const distance = Math.hypot(dx, dy)
          if (distance > 0 && distance < 85) {
            const force = (1 - distance / 85) * 5
            particle.x += (dx / distance) * force
            particle.y += (dy / distance) * force
          }
        }
        context.beginPath()
        context.fillStyle = particle.color
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fill()
      }
    }

    function animate(time: number) {
      draw(time)
      frame = requestAnimationFrame(animate)
    }

    function initialize() {
      if (disposed || !canvas || !context || !logo.naturalWidth) return
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.round(rect.width))
      height = Math.max(1, Math.round(rect.height))
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const mask = document.createElement("canvas")
      mask.width = width
      mask.height = height
      const maskContext = mask.getContext("2d", { willReadFrequently: true })
      if (!maskContext) return
      const scale = Math.min(width / logo.naturalWidth, height / logo.naturalHeight) * 0.94
      const logoWidth = logo.naturalWidth * scale
      const logoHeight = logo.naturalHeight * scale
      maskContext.drawImage(logo, (width - logoWidth) / 2, (height - logoHeight) / 2, logoWidth, logoHeight)
      const step = Math.max(5, Math.ceil(Math.sqrt(width * height / 4000)))
      particles = sampleLogoParticles(maskContext.getImageData(0, 0, width, height), step).map((point) => ({
        ...point,
        baseX: point.x,
        baseY: point.y,
        radius: step * (0.17 + Math.random() * 0.11),
        phase: Math.random() * Math.PI * 2,
      }))
      draw(0)
      setIsReady(particles.length > 0)
    }

    const movePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = true
    }
    const resetPointer = () => { pointer.active = false }
    const syncMotion = () => {
      cancelAnimationFrame(frame)
      if (reducedMotion.matches) {
        for (const particle of particles) {
          particle.x = particle.baseX
          particle.y = particle.baseY
        }
        draw(0)
      } else frame = requestAnimationFrame(animate)
    }
    const resizeObserver = new ResizeObserver(initialize)
    resizeObserver.observe(canvas)
    canvas.addEventListener("pointermove", movePointer)
    canvas.addEventListener("pointerleave", resetPointer)
    reducedMotion.addEventListener("change", syncMotion)
    logo.onload = () => {
      if (disposed) return
      initialize()
      syncMotion()
    }
    logo.src = "/images/myhextech-logo-512.png"

    return () => {
      disposed = true
      logo.onload = null
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      canvas.removeEventListener("pointermove", movePointer)
      canvas.removeEventListener("pointerleave", resetPointer)
      reducedMotion.removeEventListener("change", syncMotion)
    }
  }, [])

  return (
    <div
      role="img"
      aria-label={language === "fr" ? "Logo MyHextech en nuage de points, M argenté et H rouge" : "MyHextech particle logo, silver M and red H"}
      className="relative h-[320px] w-full sm:h-[360px] md:h-[420px] xl:h-[460px] 2xl:h-[500px]"
    >
      <img
        src="/images/myhextech-logo-512.png"
        alt=""
        aria-hidden="true"
        width={512}
        height={512}
        className={`absolute inset-0 h-full w-full object-contain ${isReady ? "invisible" : "visible"}`}
      />
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 block h-full w-full" />
    </div>
  )
}
