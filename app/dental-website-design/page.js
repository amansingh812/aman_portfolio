/**
 * /dental-website-design/ — Dental practice website design.
 * Targets "dental web design australia" (500/mo, Medium, $32.57 CPC — clean Tier 2 gap).
 * Content in content/landing-pages.js.
 */
import LandingPage, { buildMetadata } from "@/components/landing/LandingPage"
import { getLandingPage } from "@/content/landing-pages"

const page = getLandingPage("dental-website-design")

export const metadata = buildMetadata(page)

export default function Page() {
  return <LandingPage page={page} />
}
