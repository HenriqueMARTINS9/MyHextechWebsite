"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const HERO_TEXT = "MyHextech"
const MIN_FONT_SIZE = 64
const MAX_FONT_SIZE = 108
const TEXT_WIDTH_RATIO = 0.82
const TEXT_HEIGHT_RATIO = 0.32

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let devicePixelRatio: number
    let animationFrameId: number
    const particlesArray: Particle[] = []

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))

      canvas.width = Math.round(width * devicePixelRatio)
      canvas.height = Math.round(height * devicePixelRatio)

      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    const getTextLayout = (layoutContext: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
      const maxTextWidth = canvasWidth * TEXT_WIDTH_RATIO
      const maxTextHeight = canvasHeight * TEXT_HEIGHT_RATIO
      let fontSize = Math.min(MAX_FONT_SIZE, Math.max(MIN_FONT_SIZE, Math.min(canvasWidth * 0.11, maxTextHeight)))

      layoutContext.font = `bold ${fontSize}px Arial`

      while (layoutContext.measureText(HERO_TEXT).width > maxTextWidth && fontSize > MIN_FONT_SIZE) {
        fontSize -= 2
        layoutContext.font = `bold ${fontSize}px Arial`
      }

      return {
        fontSize,
        particleStep: Math.max(6, Math.round(fontSize / 15)),
        particleScale: fontSize / MAX_FONT_SIZE,
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    })

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      distance: number

      constructor(x: number, y: number, particleScale: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = (Math.random() * 2.6 + 0.9) * particleScale
        this.density = Math.random() * 30 + 1
        this.distance = 0

        // Create a gradient from blue to cyan
        const hue = Math.random() * 60 + 200 // 200-260 range for blues and cyans
        this.color = `hsl(${hue}, 70%, 60%)`
      }

      update() {
        // Calculate distance between mouse and particle
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        const forceDirectionX = this.distance === 0 ? 0 : dx / this.distance
        const forceDirectionY = this.distance === 0 ? 0 : dy / this.distance

        const maxDistance = 100
        const force = (maxDistance - this.distance) / maxDistance

        if (this.distance < maxDistance) {
          const directionX = forceDirectionX * force * this.density
          const directionY = forceDirectionY * force * this.density

          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 10
          }
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    function init() {
      if (!canvas || !ctx) return
      particlesArray.length = 0

      const rect = canvas.getBoundingClientRect()
      const canvasWidth = Math.max(1, Math.floor(rect.width))
      const canvasHeight = Math.max(1, Math.floor(rect.height))
      const textCanvas = document.createElement("canvas")
      const textContext = textCanvas.getContext("2d")

      if (!textContext) return

      textCanvas.width = canvasWidth
      textCanvas.height = canvasHeight

      // Create text
      const { particleScale, particleStep } = getTextLayout(textContext, canvasWidth, canvasHeight)
      textContext.fillStyle = "white"
      textContext.textAlign = "center"
      textContext.textBaseline = "middle"
      textContext.fillText(HERO_TEXT, canvasWidth / 2, canvasHeight / 2)

      // Get image data
      const textCoordinates = textContext.getImageData(0, 0, canvasWidth, canvasHeight)

      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      // Create particles based on text pixels
      for (let y = 0; y < textCoordinates.height; y += particleStep) {
        for (let x = 0; x < textCoordinates.width; x += particleStep) {
          if (textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128) {
            const positionX = x
            const positionY = y
            particlesArray.push(new Particle(positionX, positionY, particleScale))
          }
        }
      }
    }

    init()

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return
      const rect = canvas.getBoundingClientRect()
      const canvasWidth = Math.max(1, Math.floor(rect.width))
      const canvasHeight = Math.max(1, Math.floor(rect.height))
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      // Draw connections
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()

        // Draw connections
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 30) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(120, 180, 255, ${0.2 - distance / 150})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    window.addEventListener("resize", init)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", init)
    }
  }, [])

  return (
    <motion.div
      className="w-full sm:h-[360px] md:h-[420px] xl:h-[460px] 2xl:h-[500px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
