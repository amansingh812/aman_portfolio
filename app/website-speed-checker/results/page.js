/**
 * /website-speed-checker/results/ — shareable scan output.
 *
 * ⚠️  NOINDEX, FOLLOW — deliberate and important.
 *     Every scan produces a near-identical results URL. Indexed, they would
 *     flood the index with thin duplicate pages and dilute the tool page that
 *     we actually want ranking. `follow` is kept so link equity from anyone
 *     sharing a result still flows back to the tool.
 *
 *     Server component wrapper: client components cannot export `metadata`.
 */
import ResultsClient from "./ResultsClient"

export const metadata = {
    title: "Speed Test Results",
    description:
        "Your website speed and Core Web Vitals results, measured with Google's Lighthouse engine.",
    alternates: { canonical: "/website-speed-checker/" },
    robots: { index: false, follow: true },
}

export default function Page() {
    return <ResultsClient />
}
