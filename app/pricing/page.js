/* eslint-disable react/no-unescaped-entities */
/**
 * /pricing/ — the highest-intent page on the site.
 *
 * Every figure comes from content/pricing.js. Do not hardcode a price here.
 *
 * TYPOGRAPHY AND COLOUR COME FROM THE TEMPLATE. This page uses the same
 * section pattern as the homepage so the two match:
 *
 *   <section className="section-box mt-100">
 *     <div className="container">
 *       <span className="tag-1 bg-6 color-green-900">Label</span>
 *       <h2 className="text-heading-2 color-gray-900">Heading</h2>
 *       <p className="text-body-lead-large color-gray-600">Lead</p>
 *
 * Do not introduce hardcoded px font sizes or hex colours. The Agon tokens:
 *   text-heading-1 56px · -2 42px · -3 35px · -4 28px · -5 22px · -6 18px
 *   text-body-lead-large 24px · text-body-text 16px · text-body-small 13px
 *   color-green-900 #006D77 · color-green-500 #83C5BE · bg-6 #BEE1E6
 *   btn-black (dark pill) · btn-default (light pill) · radius 16px
 *
 * STRUCTURE: selector · scope table · monthly · FAQ · CTA
 *
 * REMOVED DELIBERATELY — do not reinstate without a reason:
 *   · Competitor comparison table — sent ready-to-buy visitors off to
 *     research Aussify and Havealook. It lives in the blog post instead.
 *   · Per-tier feature matrix — every package includes every feature, so
 *     the grid was identical down every column.
 *   · "Why us" pillars and Add-ons grid — pushed the price down the page.
 *     VALUE_PILLARS and ADDONS remain in content/pricing.js for reuse.
 */
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import PricingSelector from "@/components/elements/PricingSelector"
import { SITE } from "@/content/site"
import { BUILD_TIERS, RETAINER, PRICING_FAQS, NEGOTIABLE_NOTE } from "@/content/pricing"

export const metadata = {
    title: "Website Pricing Australia — Fixed AUD Prices From $800",
    description:
        "Fixed AUD pricing by scope: 3–5 pages $800, up to 10 pages $1,900, unlimited $3,500, e-commerce and apps $4,500, custom software from $5,000. Care + SEO $250/month. You own the code.",
    keywords: [
        "website pricing australia",
        "how much does a website cost australia",
        "web design prices australia",
        "website maintenance plans australia",
        "custom software pricing australia",
    ],
    alternates: { canonical: "/pricing/" },
    openGraph: {
        title: "Website Pricing Australia — Fixed AUD Prices From $800",
        description:
            "Priced by scope, not by features. Every package includes a CMS, SEO, schema and full code ownership.",
        url: "https://buildfirstsite.com/pricing/",
        type: "website",
    },
}

/* Layout only. Type sizes and colours come from Agon utility classes. */
const css = `
.bfs-tbl-wrap { overflow-x:auto; }
.bfs-tbl { width:100%; min-width:640px; border-collapse:collapse; }
.bfs-tbl th { text-align:left; padding:16px; border-bottom:2px solid #101828; }
.bfs-tbl td { padding:20px 16px; border-bottom:1px solid #E4E7EC; vertical-align:middle; }
.bfs-tbl tr.hi td { background:#F4FAFB; }
.bfs-tbl .num { text-align:right; white-space:nowrap; }

.bfs-note { background:#F4FAFB; border:1px solid #BEE1E6; border-radius:16px;
  padding:36px 40px; display:flex; gap:30px; align-items:center; flex-wrap:wrap; }

.bfs-ret { display:grid; grid-template-columns:1fr 1.3fr; border:1px solid #E4E7EC;
  border-radius:16px; overflow:hidden; background:#fff; }
@media (max-width:860px){ .bfs-ret{ grid-template-columns:1fr; } }
.bfs-ret-l { background:#006D77; padding:44px 38px; display:flex;
  flex-direction:column; justify-content:center; }
.bfs-ret-r { padding:44px 38px; }
.bfs-ret-list { list-style:none; padding:0; margin:0; column-count:2; column-gap:32px; }
@media (max-width:620px){ .bfs-ret-list{ column-count:1; } }
.bfs-ret-list li { position:relative; padding-left:28px; margin-bottom:14px;
  break-inside:avoid; }
.bfs-ret-list li::before { content:""; position:absolute; left:0; top:7px;
  width:17px; height:17px; border-radius:50%; background:#BEE1E6
  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23006D77' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E") center/10px no-repeat; }
.bfs-white { color:#fff !important; }
.bfs-tint { color:#BEE1E6 !important; }
.bfs-mint-btn { background:#83C5BE !important; color:#006D77 !important; }
.bfs-mint-btn:hover { background:#9BD3CD !important; }

.bfs-faq-item { border-bottom:1px solid #E4E7EC; padding:30px 0; }
.bfs-cta-box { background:#006D77; border-radius:16px; padding:64px 48px; text-align:center; }
`

export default function PricingPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "Pricing", item: "https://buildfirstsite.com/pricing/" },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: PRICING_FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web design, development and custom software",
            provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
            areaServed: { "@type": "Country", name: "Australia" },
            offers: [...BUILD_TIERS, RETAINER].map((t) => ({
                "@type": "Offer",
                name: t.name,
                description: t.tagline,
                price: t.price,
                priceCurrency: "AUD",
                url: "https://buildfirstsite.com/pricing/",
            })),
        },
    ]

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ══ 1. SELECTOR ══ */}
            <section className="section-box mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="tag-1 bg-6 color-green-900">Pricing</span>
                            <h1 className="text-heading-1 color-gray-900 mt-25 mb-20">
                                Priced by size,<br className="d-lg-block d-none" /> not by features
                            </h1>
                            <p className="text-body-lead-large color-gray-600 mb-50">
                                Every package includes everything — CMS, SEO, schema, analytics
                                and full code ownership. The only thing that changes the price
                                is how big the build is.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-11 mx-auto">
                            <PricingSelector />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="text-body-small color-gray-500 mt-30">
                                All prices AUD · GST not included · Hosting included for year one
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 2. SCOPE TABLE ══ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="tag-1 bg-6 color-green-900">Packages</span>
                            <h2 className="text-heading-2 color-gray-900 mt-25 mb-20">
                                All six, side by side
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mb-50">
                                Same build quality, same inclusions. Pick the size that matches
                                what you need.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="bfs-tbl-wrap">
                                <table className="bfs-tbl">
                                    <thead>
                                        <tr>
                                            <th className="text-body-lead color-gray-900">Package</th>
                                            <th className="text-body-lead color-gray-900">Scope</th>
                                            <th className="text-body-lead color-gray-900">Delivery</th>
                                            <th className="text-body-lead color-gray-900 num">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {BUILD_TIERS.map((t) => (
                                            <tr key={t.id} className={t.featured ? "hi" : ""}>
                                                <td>
                                                    <span className="text-heading-6 color-gray-900">{t.name}</span>
                                                    {t.featured && (
                                                        <span className="tag-1 bg-6 color-green-900 ml-10"
                                                            style={{ padding: "6px 14px", fontSize: 12, lineHeight: "12px" }}>
                                                            Most popular
                                                        </span>
                                                    )}
                                                    <p className="text-body-small color-gray-500 mt-5 mb-0">
                                                        {t.tagline}
                                                    </p>
                                                </td>
                                                <td className="text-body-text color-gray-600">{t.scope}</td>
                                                <td className="text-body-text color-gray-600">{t.delivery}</td>
                                                <td className="num">
                                                    <span className="text-heading-5 color-green-900">{t.priceLabel}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Negotiable note */}
                            <div className="bfs-note mt-50">
                                <div style={{ flex: "1 1 420px" }}>
                                    <h3 className="text-heading-5 color-gray-900 mb-15">
                                        Somewhere between two packages?
                                    </h3>
                                    <p className="text-body-text color-gray-600 mb-0">
                                        {NEGOTIABLE_NOTE}
                                    </p>
                                </div>
                                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-black icon-arrow-right-white">
                                    Book a free call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 3. MONTHLY ══ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="tag-1 bg-6 color-green-900">Monthly</span>
                            <h2 className="text-heading-2 color-gray-900 mt-25 mb-20">
                                One plan. Not four tiers.
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mb-50">
                                Competitors run three or four SEO tiers. We run one, because a
                                two-person studio should promise one thing it can genuinely
                                deliver every month rather than four it cannot.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="bfs-ret">
                                <div className="bfs-ret-l">
                                    <span className="text-body-small bfs-tint">ONGOING</span>
                                    <h3 className="text-heading-3 bfs-white mt-15 mb-15">{RETAINER.name}</h3>
                                    <p className="text-body-text bfs-tint mb-25">{RETAINER.tagline}</p>

                                    <div className="mb-20">
                                        <span className="text-heading-1 bfs-white">{RETAINER.priceLabel}</span>
                                        <span className="text-body-text bfs-tint">{RETAINER.period}</span>
                                    </div>

                                    <p className="text-body-small bfs-tint mb-30">{RETAINER.note}</p>

                                    <Link href="/contact/" className="btn btn-black bfs-mint-btn">
                                        Add Care + SEO
                                    </Link>
                                </div>

                                <div className="bfs-ret-r">
                                    <h4 className="text-heading-6 color-gray-900 mb-30">
                                        What you get every month
                                    </h4>
                                    <ul className="bfs-ret-list">
                                        {RETAINER.features.map((f, i) => (
                                            <li key={i} className="text-body-text color-gray-600">{f}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 4. FAQ ══ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="tag-1 bg-6 color-green-900">FAQ</span>
                            <h2 className="text-heading-2 color-gray-900 mt-25 mb-50">
                                Pricing questions
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            {PRICING_FAQS.map((f, i) => (
                                <div className="bfs-faq-item" key={i}>
                                    <h3 className="text-heading-6 color-gray-900 mb-15">{f.q}</h3>
                                    <p className="text-body-text color-gray-600 mb-0">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 5. CTA ══ */}
            <section className="section-box mt-100 mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="bfs-cta-box">
                                <h2 className="text-heading-2 bfs-white mb-20">
                                    Let&apos;s talk about the business, not the website
                                </h2>
                                <p className="text-body-lead-large bfs-tint mb-40"
                                    style={{ maxWidth: 640, margin: "0 auto 40px" }}>
                                    Tell us what the business needs to do and we will send back a
                                    written scope with a fixed AUD price within one business day.
                                </p>
                                <Link href="/contact/" className="btn btn-black bfs-mint-btn mr-15">
                                    Get a fixed quote
                                </Link>
                                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-default">
                                    Book a free call
                                </a>
                                <p className="text-body-small bfs-tint mt-40 mb-0">
                                    Related:{" "}
                                    <Link href="/blog/website-cost-australia/" className="bfs-tint">
                                        what a website costs in Australia
                                    </Link>{" · "}
                                    <Link href="/services/" className="bfs-tint">what we build</Link>{" · "}
                                    <Link href="/work/" className="bfs-tint">our work</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
