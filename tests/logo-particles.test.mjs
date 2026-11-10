import assert from "node:assert/strict"
import test from "node:test"
import { sampleLogoParticles } from "../lib/logo-particles.ts"

test("particles follow visible logo pixels and keep silver and red colors", () => {
  const image = {
    width: 3,
    height: 2,
    data: new Uint8ClampedArray([
      0, 0, 0, 0, 220, 225, 235, 255, 230, 15, 25, 255,
      255, 0, 0, 50, 2, 2, 2, 255, 190, 20, 30, 255,
    ]),
  }
  assert.deepEqual(sampleLogoParticles(image, 1), [
    { x: 1, y: 0, color: "rgb(220, 225, 235)" },
    { x: 2, y: 0, color: "rgb(230, 15, 25)" },
    { x: 2, y: 1, color: "rgb(190, 20, 30)" },
  ])
})

test("sampling respects spacing and never fills transparent negative space", () => {
  const data = new Uint8ClampedArray(4 * 4 * 4).fill(255)
  assert.deepEqual(sampleLogoParticles({ data, width: 4, height: 4 }, 2).map(({ x, y }) => [x, y]), [
    [0, 0], [2, 0], [0, 2], [2, 2],
  ])
  assert.deepEqual(sampleLogoParticles({ data: new Uint8ClampedArray(64), width: 4, height: 4 }, 1), [])
})

test("invalid spacing cannot cause an infinite sampling loop", () => {
  for (const step of [0, -1, 0.5, Number.NaN]) {
    assert.throws(() => sampleLogoParticles({ data: [], width: 0, height: 0 }, step), /positive integer/)
  }
})
