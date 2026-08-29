import LandingPage, { buildMetadata } from "@/components/landing/LandingPage"
import { getLandingPage } from "@/content/landing-pages"

const page = getLandingPage("affordable-website-design-small-business")

export const metadata = buildMetadata(page)

export default function Page() {
    return <LandingPage page={page} />
}
