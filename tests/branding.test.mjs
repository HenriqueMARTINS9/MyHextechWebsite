import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { profileStructuredData, siteUrl } from "../lib/site.ts"

test("brand assets have fixed square dimensions and preserve transparency", () => {
  const assets = [
    ["images/myhextech-logo.png", 1254],
    ["images/myhextech-logo-small.png", 160],
    ["images/myhextech-logo-512.png", 512],
    ["favicon-48.png", 48],
    ["apple-touch-icon.png", 180],
  ]
  for (const [path, size] of assets) {
    const data = readFileSync(new URL(`../public/${path}`, import.meta.url))
    assert.equal(data.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", path)
    assert.equal(data.readUInt32BE(16), size, path)
    assert.equal(data.readUInt32BE(20), size, path)
    assert.equal(data[25], 6, `${path}: RGBA`)
  }
})

test("the fallback favicon embeds the same new logo as the PNG icon", () => {
  const ico = readFileSync(new URL("../public/favicon.ico", import.meta.url))
  const png = readFileSync(new URL("../public/favicon-48.png", import.meta.url))
  assert.equal(ico.readUInt16LE(0), 0)
  assert.equal(ico.readUInt16LE(2), 1)
  assert.equal(ico.readUInt16LE(4), 1)
  assert.equal(ico[6], 48)
  assert.equal(ico[7], 48)
  assert.equal(ico.readUInt32LE(14), png.length)
  assert.deepEqual(ico.subarray(ico.readUInt32LE(18)), png)
})

test("organization structured data uses the actual published brand asset", () => {
  const business = profileStructuredData["@graph"].find((entity) => entity["@type"] === "Organization")
  assert.equal(business.logo["@type"], "ImageObject")
  assert.equal(business.logo.url, `${siteUrl}/images/myhextech-logo-512.png`)
  assert.equal(business.logo.width, 512)
  assert.equal(business.logo.height, 512)
})
