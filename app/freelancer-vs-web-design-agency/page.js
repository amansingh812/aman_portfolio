import LandingPage, { buildMetadata } from "@/components/landing/LandingPage"
import { getLandingPage } from "@/content/landing-pages"

const page = getLandingPage("freelancer-vs-web-design-agency")
export const metadata = buildMetadata(page)
export default function Page() {
  return <LandingPage page={page} />
}
