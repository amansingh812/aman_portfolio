/**
 * /lovable-prototype-to-production/ — added 14 Oct 2026.
 * Why: the first client found via ChatGPT (James Corke) arrived with a Lovable
 * prototype, and ChatGPT's answer to "who can turn my Lovable prototype into a
 * real product in Australia" listed 5 studios with a page for exactly this.
 * Content lives in content/landing-pages.js; prices import from content/pricing.js.
 */
import LandingPage, { buildMetadata } from "@/components/landing/LandingPage"
import { getLandingPage } from "@/content/landing-pages"

const page = getLandingPage("lovable-prototype-to-production")

export const metadata = buildMetadata(page)

export default function Page() {
    return <LandingPage page={page} />
}
