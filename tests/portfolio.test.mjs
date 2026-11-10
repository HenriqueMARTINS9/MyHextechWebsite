import assert from "node:assert/strict"
import test from "node:test"
import { getProjectCount, isFeaturedTechnology, projectTechnologies } from "../lib/project-technologies.ts"
import { profileStructuredData, siteUrl, socialProfiles } from "../lib/site.ts"

test("featured skills are based on distinct displayed projects", () => {
  const expected = { React: 6, "Next.js": 3, TypeScript: 5, "Tailwind CSS": 4, AWS: 3, "Node.js": 2, Firebase: 2 }
  for (const [technology, count] of Object.entries(expected)) {
    assert.equal(getProjectCount(technology), count, technology)
  }
})

test("AWS services count at most once per project", () => {
  assert.equal(getProjectCount("AWS"), 3)
  assert.equal(getProjectCount("AWS S3"), 3)
  assert.equal(getProjectCount("S3"), 3)
})

test("Supabase is featured in all four confirmed client projects", () => {
  assert.equal(getProjectCount("Supabase"), 4)
  for (const project of ["miaParis", "textileSnap", "pointJaponVoyage", "wearevents"]) {
    assert.ok(projectTechnologies[project].includes("Supabase"))
  }
  assert.equal(isFeaturedTechnology("Supabase"), true)
  assert.equal(isFeaturedTechnology("supabase"), true)
  assert.equal(isFeaturedTechnology("React"), true)
  assert.equal(isFeaturedTechnology("WordPress"), false)
})

test("matching is case insensitive and does not infer unlisted technologies", () => {
  assert.equal(getProjectCount("flutterflow"), 1)
  assert.equal(getProjectCount("WebFlow"), 1)
  assert.equal(getProjectCount("Python"), 1)
  assert.equal(getProjectCount("WordPress"), 0)
  assert.equal(getProjectCount("unknown"), 0)
})

test("SEO is listed for Wearevents and featured across two projects", () => {
  assert.ok(projectTechnologies.wearevents.includes("SEO"))
  assert.equal(getProjectCount("SEO"), 2)
  assert.equal(isFeaturedTechnology("SEO"), true)
})

test("every project has a nonempty, deduplicated technology list", () => {
  assert.equal(Object.keys(projectTechnologies).length, 13)
  for (const tags of Object.values(projectTechnologies)) {
    assert.ok(tags.length > 0)
    assert.equal(tags.length, new Set(tags).size)
  }
})

test("structured data identifies the profile and its owner consistently", () => {
  const data = JSON.parse(JSON.stringify(profileStructuredData))
  assert.equal(data["@context"], "https://schema.org")
  const entities = new Map(data["@graph"].map((entity) => [entity["@id"], entity]))
  const person = entities.get(`${siteUrl}/#henrique-martins`)
  const page = entities.get(`${siteUrl}/#profile`)
  assert.equal(person["@type"], "Person")
  assert.equal(person.name, "Henrique MARTINS")
  assert.deepEqual(person.sameAs, socialProfiles)
  assert.equal(page.mainEntity["@id"], person["@id"])
  assert.ok(entities.has(person.worksFor["@id"]))
  assert.ok(entities.has(page.isPartOf["@id"]))
  assert.equal(page.url, `${siteUrl}/`)
})
