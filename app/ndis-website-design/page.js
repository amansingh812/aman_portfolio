/**
 * /ndis-website-design/ — NDIS provider website design hub page.
 * Targets "ndis website" (5,000/mo, Low competition).
 * Cluster content: blog/ndis-website-cost/ · blog/ndis-website-accessibility-checklist/
 * · blog/seo-for-ndis-providers/ all link here.
 * Content in content/landing-pages.js.
 */
import LandingPage, { buildMetadata } from "@/components/landing/LandingPage"
import { getLandingPage } from "@/content/landing-pages"

const page = getLandingPage("ndis-website-design")

export const metadata = buildMetadata(page)

export default function Page() {
  return <LandingPage page={page} />
}
