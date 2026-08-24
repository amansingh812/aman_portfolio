/**
 * /website-speed-checker/ — free tool, and our primary link asset.
 *
 * ⚠️  WHY THIS FILE IS A SERVER COMPONENT
 *     Client components ('use client') CANNOT export `metadata`. The tool UI
 *     needs client-side state, so it lives in SpeedCheckerClient.js and this
 *     server component wraps it purely to emit metadata.
 *
 *     Before this split the page had no metadata at all, so it inherited the
 *     root layout's canonical of "/" — actively telling Google the tool was a
 *     duplicate of the homepage and should not be indexed. Do not merge these
 *     two files back together.
 *
 *     Note: the root layout applies a `%s | Build First Site` title template,
 *     so the brand is NOT repeated here.
 */
import SpeedCheckerClient from "./SpeedCheckerClient"

export const metadata = {
    title: "Free Website Speed Checker",
    description:
        "Free website speed test using Google's Lighthouse engine. Check your Core Web Vitals — LCP, TBT and CLS — on mobile and desktop. No signup, shareable results.",
    keywords: [
        "website speed checker",
        "website speed test australia",
        "core web vitals checker",
        "free page speed test",
        "lighthouse speed test",
    ],
    alternates: { canonical: "/website-speed-checker/" },
    openGraph: {
        title: "Free Website Speed Checker (Core Web Vitals)",
        description:
            "Free website speed test using Google's Lighthouse engine. Check your Core Web Vitals on mobile and desktop. No signup required.",
        url: "https://buildfirstsite.com/website-speed-checker/",
        type: "website",
        locale: "en_AU",
    },
    robots: { index: true, follow: true },
}

export default function Page() {
    return <SpeedCheckerClient />
}
