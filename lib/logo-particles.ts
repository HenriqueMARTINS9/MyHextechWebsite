interface PixelBuffer {
  width: number
  height: number
  data: ArrayLike<number>
}

export function sampleLogoParticles({ width, height, data }: PixelBuffer, step: number) {
  if (!Number.isInteger(step) || step < 1) throw new Error("Particle step must be a positive integer")
  const particles: { x: number; y: number; color: string }[] = []
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const offset = (y * width + x) * 4
      const [red, green, blue, alpha] = [data[offset], data[offset + 1], data[offset + 2], data[offset + 3]]
      // Ignore transparent margins and the faint glow outside the metal silhouette.
      if (alpha < 160 || Math.max(red, green, blue) < 24) continue
      particles.push({ x, y, color: `rgb(${red}, ${green}, ${blue})` })
    }
  }
  return particles
}
