/**
 * /squarespace-vs-custom-website/ — comparison landing page.
 *
 * Created 2026-08-08 to fill a URL that was already linked from the footer
 * and listed in sitemap.xml but had no page behind it (a 404 on every page
 * of the site). Content lives in content/landing-pages.js.
 */
import LandingPage, { buildMetadata } from "@/components/landing/LandingPage"
import { getLandingPage } from "@/content/landing-pages"

const page = getLandingPage("squarespace-vs-custom-website")

export const metadata = buildMetadata(page)

export default function Page() {
    return <LandingPage page={page} />
}
