/* eslint-disable react/no-unescaped-entities */
/**
 * LandingPage — shared renderer for every page in content/landing-pages.js.
 *
 * This is the replacement for the standalone HTML under public/<slug>/.
 * Because it wraps <Layout>, every page rendered here gets the real Header
 * (with NAV dropdowns), the real Footer, and the Agon design system for free.
 * No page-level header, footer, font import or colour definition belongs here.
 *
 * TYPOGRAPHY AND COLOUR COME FROM THE TEMPLATE. Use the Agon utility classes
 * (text-heading-*, text-body-*, color-gray-*, color-green-*, tag-1, bg-6,
 * btn-black) — never hardcoded px sizes or hex values.
 *
 * PRICES ARE IMPORTED from content/pricing.js, never copied. That is the whole
 * point of the migration: change pricing.js once and every page updates.
 *
 * Body content renders through BlogContent so landing pages and blog posts
 * share one content model — h2/h3/p/ul/ol/table/quote/faq.
 */
import Layout from "@/components/layout/Layout"
import BlogContent from "@/components/blog/BlogContent"
import Image from "next/image"
import Breadcrumbs from "@/components/elements/Breadcrumbs"
import Link from "next/link"
import { SITE, NAP } from "@/content/site"
import { BUILD_TIERS, RETAINER } from "@/content/pricing"

export function buildMetadata(page) {
    if (!page) return {}
    const url = `https://buildfirstsite.com/${page.slug}/`
    return {
        // ABSOLUTE title — deliberately bypasses the root `%s | Build First Site`
        // template. That suffix costs 19 characters of a ~60-character SERP
        // budget to promote a brand nobody is searching for yet. Those
        // characters are worth more spent on the keyword. Revisit once we have
        // brand search volume worth capturing.
        title: { absolute: page.metaTitle },
        description: page.metaDescription,
        alternates: { canonical: `/${page.slug}/` },
        openGraph: {
            title: page.metaTitle,
            description: page.metaDescription,
            url,
            type: "website",
            locale: "en_AU",
            // Falls back to the site-wide OG card when a page has no hero of
            // its own, so a shared link is never a blank preview.
            images: [
                {
                    url: page.image || "/assets/imgs/og/default-og.webp",
                    width: 1200,
                    height: 630,
                    alt: page.imageAlt || page.h1 || page.metaTitle,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: page.metaTitle,
            description: page.metaDescription,
            images: [page.image || "/assets/imgs/og/default-og.webp"],
        },
        // Local-search signal for city landing pages — set page.geo to emit.
        ...(page.geo && {
            other: {
                "geo.region": page.geo.region,
                "geo.placename": page.geo.placename,
                "geo.position": `${page.geo.latitude};${page.geo.longitude}`,
                ICBM: `${page.geo.latitude}, ${page.geo.longitude}`,
            },
        }),
    }
}

export default function LandingPage({ page }) {
    const url = `https://buildfirstsite.com/${page.slug}/`

    /* Only the tiers this page cares about, pulled live from pricing.js */
    const tiers = page.priceTiers?.length
        ? BUILD_TIERS.filter((t) => page.priceTiers.includes(t.id))
        : []

    const faqs = (page.body || []).filter((b) => b.type === "faq")

    // ARTICLE vs SERVICE — these need different property sets.
    //
    // Until 21 Sep 2026 this emitted `@type: page.schemaType` with the SERVICE
    // shape underneath it regardless. So the four pages declaring
    // `schemaType: 'Article'` output an Article carrying name/provider/
    // areaServed and NO headline, datePublished, dateModified or author —
    // every property Google actually requires. Verified in the live DOM:
    // `datePublished: MISSING`. An invalid Article cannot produce a rich
    // result and cannot put a date in the SERP, which matters because every
    // page-one competitor for our cost queries is date-stamped and we were
    // the only undated result (docs/COST-PAGE-DEEP-DIVE-2026-09-18.md §3).
    const isArticle = page.schemaType === "Article"
    const published = page.datePublished || "2026-08-08"
    const modified = page.lastUpdated || published

    const jsonLd = [
        isArticle
            ? {
                "@context": "https://schema.org",
                "@type": "Article",
                headline: page.metaTitle,
                description: page.metaDescription,
                url,
                mainEntityOfPage: { "@type": "WebPage", "@id": url },
                datePublished: published,
                dateModified: modified,
                author: { "@type": "Organization", name: "Build First Site", url: "https://buildfirstsite.com/" },
                publisher: { "@id": "https://buildfirstsite.com/#organization" },
                inLanguage: "en-AU",
                ...(page.image && { image: `https://buildfirstsite.com${page.image}` }),
            }
            : {
            "@context": "https://schema.org",
            "@type": page.schemaType || "Service",
            name: page.metaTitle,
            description: page.metaDescription,
            url,
            // One business entity, declared only on /web-design-melbourne/.
            provider: { "@id": "https://buildfirstsite.com/#localbusiness" },
            areaServed: page.areaServed || { "@type": "Country", name: "Australia" },
            inLanguage: "en-AU",
            ...(page.image && { image: `https://buildfirstsite.com${page.image}` }),
            ...(tiers.length && {
                offers: {
                    "@type": "Offer",
                    priceCurrency: "AUD",
                    price: Math.min(...tiers.map((t) => t.price)),
                    url: "https://buildfirstsite.com/pricing/",
                    availability: "https://schema.org/InStock",
                },
            }),
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: page.breadcrumb || page.metaTitle, item: url },
            ],
        },
    ]

    /*
     * ONE business entity, declared ONLY when page.localBusiness is true —
     * currently only /web-design-melbourne/, our single verified GBP location.
     * Built from content/site.js NAP so the GBP-synced facts (geo, hours,
     * service areas) live in exactly one place. Every other landing page's
     * `Service` block above points at this @id rather than declaring its own.
     */
    if (page.localBusiness) {
        jsonLd.unshift({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://buildfirstsite.com/#localbusiness",
            name: NAP.businessName,
            url: SITE.url,
            telephone: NAP.phoneE164,
            email: NAP.email,
            description: page.metaDescription,
            priceRange: "$$",
            currenciesAccepted: "AUD",
            paymentAccepted: "Credit Card, Bank Transfer, PayPal, Stripe",
            inLanguage: "en-AU",
            geo: {
                "@type": "GeoCoordinates",
                latitude: NAP.geo.latitude,
                longitude: NAP.geo.longitude,
            },
            areaServed: NAP.serviceAreas.map((name) => ({ "@type": "City", name })),
            openingHoursSpecification: NAP.openingHours.map((h) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: h.days,
                opens: h.opens,
                closes: h.closes,
            })),
            sameAs: Object.values(SITE.social),
        })
    }

    /* Emitted only when real Q&As exist — an empty FAQPage is a schema error. */
    if (faqs.length) {
        jsonLd.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        })
    }

    return (
        <Layout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ── HERO ── */}
            <section className="section-box mt-70">
                <div className="container">
                    <div className="row">
                        <div className={page.image ? "col-lg-7" : "col-lg-9"}>
                            {/* Same trail as the BreadcrumbList JSON-LD above —
                                keep them in sync or the markup describes
                                something the user cannot see. */}
                            <Breadcrumbs items={[{ name: page.breadcrumb || page.metaTitle }]} />
                            <span className="tag-1 bg-6 color-green-900">{page.eyebrow}</span>
                            <h1 className="text-heading-1 color-gray-900 mt-25 mb-20">{page.h1}</h1>
                            <p className="text-body-lead-large color-gray-600 mb-20">{page.lead}</p>
                            {/* Visible date on guide-style pages. The schema
                                carries dateModified, but a date a reader can
                                see is the point: every page-one competitor for
                                these queries shows one, and on a pricing page
                                "is this still current?" is the first thing a
                                reader needs answered. Rendered from the same
                                value the schema uses so they can't drift. */}
                            {isArticle && (
                                <p className="text-body-text color-gray-500 mb-40">
                                    Last updated{" "}
                                    <time dateTime={modified}>
                                        {new Date(modified).toLocaleDateString("en-AU", {
                                            day: "numeric", month: "long", year: "numeric",
                                        })}
                                    </time>
                                </p>
                            )}
                            <Link href="/contact/" className="btn btn-black icon-arrow-right-white mr-15">
                                Get a fixed quote
                            </Link>
                            <a data-loc="landing-page" href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                className="btn btn-default">
                                Book a free call
                            </a>
                        </div>
                        {/* ONE hero image. There were two of these blocks until
                            21 Sep 2026 — a later edit added a second copy rather
                            than editing the first, so every landing page with art
                            rendered the same image twice on desktop, once beside
                            the heading and once below the CTAs.

                            The survivor is the one carrying `priority` (this is
                            the LCP element) and it no longer hides below lg, so
                            phones get the art too. Renders only when the page
                            defines an image, so pages without art keep the wide
                            text layout instead of an empty column. */}
                        {page.image && (
                            <div className="col-lg-5">
                                <Image
                                    src={page.image}
                                    alt={page.imageAlt || page.h1}
                                    width={1200}
                                    height={675}
                                    sizes="(max-width: 992px) 100vw, 480px"
                                    style={{ width: "100%", height: "auto", borderRadius: 16, marginTop: 25 }}
                                    priority
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── PRICING (live from content/pricing.js) ── */}
            {tiers.length > 0 && (
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <span className="tag-1 bg-6 color-green-900">Pricing</span>
                                <h2 className="text-heading-2 color-gray-900 mt-25 mb-30">
                                    Fixed prices, published
                                </h2>
                                <div className="table-responsive">
                                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                        <thead>
                                            <tr style={{ borderBottom: "2px solid #004E56" }}>
                                                <th className="text-body-lead color-gray-900" style={{ padding: 16, textAlign: "left" }}>Package</th>
                                                <th className="text-body-lead color-gray-900" style={{ padding: 16, textAlign: "left" }}>Scope</th>
                                                <th className="text-body-lead color-gray-900" style={{ padding: 16, textAlign: "left" }}>Delivery</th>
                                                <th className="text-body-lead color-gray-900" style={{ padding: 16, textAlign: "right" }}>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tiers.map((t) => (
                                                <tr key={t.id} style={{ borderBottom: "1px solid #E4E7EC" }}>
                                                    <td style={{ padding: 18 }}>
                                                        <span className="text-heading-6 color-gray-900">{t.name}</span>
                                                        <p className="text-body-small color-gray-500 mb-0 mt-5">{t.tagline}</p>
                                                    </td>
                                                    <td className="text-body-text color-gray-600" style={{ padding: 18 }}>{t.scope}</td>
                                                    <td className="text-body-text color-gray-600" style={{ padding: 18 }}>{t.delivery}</td>
                                                    <td style={{ padding: 18, textAlign: "right" }}>
                                                        <span className="text-heading-5 color-green-900">{t.priceLabel}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-body-text color-gray-600 mt-25">
                                    Ongoing <strong>{RETAINER.name} is {RETAINER.priceLabel}{RETAINER.period}</strong> —
                                    optional, cancel with 30 days notice.{" "}
                                    <Link href="/pricing/" className="color-green-900">See all pricing →</Link>
                                </p>
                                <p className="text-body-small color-gray-500">
                                    All prices AUD · GST not included · You own the code
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── BODY ── */}
            <section className="section-box mt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="single-detail">
                                <BlogContent blocks={page.body} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── RELATED ── */}
            {page.related?.length > 0 && (
                <section className="section-box mt-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <p className="text-body-small color-gray-500">
                                    Related:{" "}
                                    {page.related.map((r, i) => (
                                        <span key={r.href}>
                                            {i > 0 && " · "}
                                            <Link href={r.href} className="color-green-900">{r.label}</Link>
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── CTA ── */}
            <section className="section-box mt-80 mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div style={{ background: "#006D77", borderRadius: 16, padding: "56px 44px", textAlign: "center" }}>
                                <h2 className="text-heading-2 mb-20" style={{ color: "#fff" }}>
                                    Get a fixed price
                                </h2>
                                <p className="text-body-lead-large mb-40"
                                    style={{ color: "#BEE1E6", maxWidth: 620, margin: "0 auto 40px" }}>
                                    Tell us what the business needs to do and we will send back a written
                                    scope with a fixed AUD price within one business day.
                                </p>
                                <Link href="/contact/" className="btn btn-black mr-15"
                                    style={{ background: "#83C5BE", color: "#004E56" }}>
                                    Get a fixed quote
                                </Link>
                                <a data-loc="landing-page" href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-default">
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
