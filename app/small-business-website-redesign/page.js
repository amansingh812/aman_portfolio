import LandingPage, { buildMetadata } from "@/components/landing/LandingPage"
import { getLandingPage } from "@/content/landing-pages"

const page = getLandingPage("small-business-website-redesign")

export const metadata = buildMetadata(page)

export default function Page() {
    return <LandingPage page={page} />
}
