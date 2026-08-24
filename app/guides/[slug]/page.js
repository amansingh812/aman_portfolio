/**
 * Individual guide pages — /guides/<slug>/
 *
 * WHY THIS FILE EXISTS: content/guides.js and its getGuide() helper have been
 * in the repo since the guides section was built, and all four URLs sit in
 * public/sitemap.xml — but the route itself was never created during the Agon
 * rebuild. Every /guides/<slug>/ URL was returning nothing.
 *
 * That was not harmless. /guides/seo-for-small-business-australia/ was earning
 * 45 impressions in Search Console before it broke, and dead URLs in a sitemap
 * waste crawl budget on a domain where crawl budget is already the binding
 * constraint (see docs/GSC-FULL-AUDIT-AUG-2026.md §1.3).
 */

import Link from "next/link"
import { notFound } from "next/navigation"
import Layout from "@/components/layout/Layout"
import { SITE } from "@/content/site"
import { GUIDES, getGuide } from "@/content/guides"

export const dynamicParams = false

export function generateStaticParams() {
    return GUIDES.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const g = getGuide(slug)
    if (!g) return {}
    const url = `https://buildfirstsite.com/guides/${g.slug}/`
    return {
        // ABSOLUTE — the root layout already appends `| Build First Site`.
        title: { absolute: g.metaTitle || g.title },
        description: g.metaDescription || g.excerpt,
        keywords: g.keywords,
        alternates: { canonical: `/guides/${g.slug}/` },
        openGraph: {
            title: g.metaTitle || g.title,
            description: g.metaDescription || g.excerpt,
            url,
            type: "article",
            locale: "en_AU",
            images: [{ url: "/assets/imgs/og/default-og.png", width: 1200, height: 630 }],
        },
    }
}

export default async function GuidePage({ params }) {
    const { slug } = await params
    const g = getGuide(slug)
    if (!g) notFound()

    const url = `https://buildfirstsite.com/guides/${g.slug}/`

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: g.title,
            description: g.metaDescription || g.excerpt,
            datePublished: g.datePublished,
            dateModified: g.datePublished,
            inLanguage: "en-AU",
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: SITE.name, url: SITE.url },
            publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "Guides", item: "https://buildfirstsite.com/guides/" },
                { "@type": "ListItem", position: 3, name: g.title, item: url },
            ],
        },
    ]

    const others = GUIDES.filter((x) => x.slug !== g.slug).slice(0, 3)

    return (
        <Layout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className="section-box mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <span className="tag-1 bg-6 color-green-900">Guide</span>
                            <h1 className="text-heading-1 color-gray-900 mt-25 mb-20">{g.title}</h1>
                            <p className="text-body-text color-gray-500 mb-30">
                                {g.readingTime}
                                {g.datePublished && ` · Updated ${g.datePublished}`}
                            </p>
                            {(g.intro || []).map((p, i) => (
                                <p key={i} className="text-body-lead-large color-gray-600 mb-20">{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            {(g.sections || []).map((s, i) => (
                                <div key={i}>
                                    <h2 className="text-heading-3 color-gray-900 mt-40 mb-15">{s.heading}</h2>
                                    {(s.body || []).map((p, j) => (
                                        <p key={j} className="text-body-lead color-gray-600 mb-15">{p}</p>
                                    ))}
                                </div>
                            ))}

                            {g.takeaways?.length > 0 && (
                                <>
                                    <h2 className="text-heading-3 color-gray-900 mt-40 mb-15">Key takeaways</h2>
                                    <ul className="mb-30" style={{ paddingLeft: 20 }}>
                                        {g.takeaways.map((t, i) => (
                                            <li key={i} className="text-body-lead color-gray-600 mb-10">{t}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            <div className="mt-40 mb-20">
                                <p className="text-body-lead color-gray-600">
                                    Our prices are published rather than quoted after a call — see{" "}
                                    <Link href="/pricing/" className="color-green-900">all six packages</Link>,{" "}
                                    <Link href="/how-much-does-a-website-cost-australia/" className="color-green-900">
                                        what a website costs in Australia
                                    </Link>, or{" "}
                                    <Link href="/contact/" className="color-green-900">get a written quote</Link>{" "}
                                    within one business day.
                                </p>
                            </div>

                            {others.length > 0 && (
                                <div className="mt-30">
                                    <span className="text-body-text color-gray-500">More guides: </span>
                                    {others.map((o, i) => (
                                        <span key={o.slug}>
                                            <Link href={`/guides/${o.slug}/`} className="color-green-900">{o.title}</Link>
                                            {i < others.length - 1 && " · "}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="mt-40">
                                <Link href="/contact/" className="btn btn-black icon-arrow-right-white mr-15">
                                    Get a fixed quote
                                </Link>
                                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-default">
                                    Book a free call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
