/**
 * /guides/ — Guides hub.
 *
 * WHY THIS FILE WAS REWRITTEN (21 Sep 2026)
 *
 * This route used to be one line:
 *
 *     export { default } from "../blog-1/page"
 *
 * — a re-export of the Agon template's demo blog grid, left in place as a
 * "temporary shell" during the rebuild and never replaced. It was live in
 * production, linked from the footer Resources column on EVERY page, and what
 * it actually rendered was:
 *
 *   - the heading "Our Blog" and the strapline "we strive to invent the most
 *     innovative technology that is used by both small enterprises and space
 *     enterprises"
 *   - nine identical placeholder cards ("We can blend colors multiple ways",
 *     "How To Blow Through Capital At An Incredible Rate")
 *   - lorem ipsum body copy on every card
 *   - a fictional author, "Jenny Wilson", dated August 25, 2022
 *   - a newsletter signup that does nothing
 *
 * Meanwhile the five real guides existed at /guides/<slug>/ and were reachable
 * only from other pages' inline links — the hub that was supposed to list them
 * listed nothing.
 *
 * Any prospect who clicked "Guides" in the footer — on any page of the site —
 * landed on placeholder text with a 2022 date. That is a page that loses a sale
 * on sight, and it was doing it sitewide. Fixing it is not cosmetic.
 *
 * This version renders the real GUIDES array. No placeholder content, no
 * invented authors, no dates we cannot stand behind.
 */
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Breadcrumbs from "@/components/elements/Breadcrumbs"
import { GUIDES } from "@/content/guides"

export const metadata = {
    title: { absolute: "Guides — Web Design & SEO Advice for Australian Business" },
    description:
        "How to hire a web developer, DIY builder vs custom, freelance rates in Australia, SEO fundamentals. No jargon, no sales pitch.",
    alternates: { canonical: "/guides/" },
    openGraph: {
        title: "Guides — Web Design & SEO Advice for Australian Business",
        description:
            "How to hire a web developer, DIY builder vs custom, freelance rates in Australia, SEO fundamentals. No jargon, no sales pitch.",
        url: "https://buildfirstsite.com/guides/",
        type: "website",
        locale: "en_AU",
    },
}

/**
 * ItemList so Google can see the hub as a collection pointing at the five
 * guides, rather than a page of links it has to infer structure from.
 */
const ITEM_LIST_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Build First Site guides",
    itemListElement: GUIDES.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: g.title,
        url: `https://buildfirstsite.com/guides/${g.slug}/`,
    })),
}

export default function GuidesHub() {
    return (
        <Layout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }}
            />

            <section className="section-box mt-50">
                <div className="container">
                    <Breadcrumbs items={[{ name: "Guides" }]} />
                    <div className="row mt-30">
                        <div className="col-lg-8">
                            <span className="tag-1 bg-6 color-green-900">Guides</span>
                            <h1 className="text-display-3 color-gray-900 mt-25">
                                Straight answers about building a website
                            </h1>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Written for Australian business owners who are deciding what to
                                build, who to hire and what it should cost. Every figure is in
                                AUD and every guide says plainly when the honest answer is that
                                you do not need us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-50 mb-50">
                <div className="container">
                    <div className="row">
                        {GUIDES.map((g) => (
                            <div className="col-lg-6 mb-30" key={g.slug}>
                                <div className="card-grid-style-3 h-100 p-25">
                                    <h2 className="text-heading-4 color-gray-900">
                                        <Link href={`/guides/${g.slug}/`} className="color-gray-900">
                                            {g.title}
                                        </Link>
                                    </h2>
                                    <p className="text-body-text color-gray-600 mt-15">{g.excerpt}</p>
                                    <div className="mt-20">
                                        {/* Reading time only. No author byline and no date —
                                            the old demo page invented both, and a made-up
                                            byline is exactly what CLAUDE.md §1 rules out. */}
                                        {g.readingTime && (
                                            <span className="text-body-text color-gray-500 mr-20">
                                                {g.readingTime}
                                            </span>
                                        )}
                                        <Link
                                            href={`/guides/${g.slug}/`}
                                            className="color-green-900 text-body-text"
                                        >
                                            Read the guide →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row mt-30">
                        <div className="col-lg-8">
                            <p className="text-body-text color-gray-600">
                                Looking for numbers rather than advice? The{" "}
                                <Link href="/pricing/" className="color-green-900">
                                    pricing page
                                </Link>{" "}
                                lists every package in AUD, and{" "}
                                <Link
                                    href="/how-much-does-a-website-cost-australia/"
                                    className="color-green-900"
                                >
                                    what a website costs in Australia
                                </Link>{" "}
                                covers the wider market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
