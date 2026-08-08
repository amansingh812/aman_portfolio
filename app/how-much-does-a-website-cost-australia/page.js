/**
 * /how-much-does-a-website-cost-australia/ — MIGRATED from public/how-much-does-a-website-cost-australia/index.html
 * on 2026-08-08. The static file was deleted; next.config.mjs uses
 * `beforeFiles` rewrites, so leaving it would have shadowed this route.
 *
 * URL is unchanged, which is what preserves the existing rankings.
 * Content lives in content/landing-pages.js; rendering and schema come from
 * components/landing/LandingPage.js. Prices import from content/pricing.js.
 */
import LandingPage, { buildMetadata } from "@/components/landing/LandingPage"
import { getLandingPage } from "@/content/landing-pages"

const page = getLandingPage("how-much-does-a-website-cost-australia")

export const metadata = buildMetadata(page)

export default function Page() {
    return <LandingPage page={page} />
}
