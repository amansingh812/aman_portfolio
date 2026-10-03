/* eslint-disable react/no-unescaped-entities */
/**
 * /pricing/ — the highest-intent page on the site.
 *
 * Every figure comes from content/pricing.js. Do not hardcode a price here.
 *
 * STRUCTURE (rebuilt 6 Oct 2026, Sprint 1 — see docs/DEV-PLAN-2026-10.md).
 * The page is a qualification-and-confidence page, in the order a buyer's
 * questions arrive:
 *   1. What does it cost?          headline + "most projects $800–$3,500"
 *   2. What do I get?              three packages, included list first
 *   3. Which one fits me?          "best suited to" on each card
 *   4. Bigger than a website?      custom projects with published "from" figures
 *   5. What about after launch?    Care $79 / Care + SEO $250
 *   6. What happens next?          three steps to a fixed written price
 *   7. Why is this low-risk?       free design · fixed quote · you own it
 *   8. FAQ, then CTA
 *
 * Trust objections (timezone, no reviews) were moved to /about/ (ABOUT_FAQS):
 * raising them here introduced doubts before the buyer had them.
 *
 * TYPOGRAPHY AND COLOUR COME FROM THE TEMPLATE (Agon classes): text-heading-*,
 * text-body-*, color-gray-*, color-green-900, tag-1, bg-6, btn-black, btn-default.
 *
 * TRACKING: links carry data-event / data-package; ConversionTracker sends
 * them to GA4 (pricing_package_click, free_design_request).
 */
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { SITE } from "@/content/site"
import {
    PRIMARY_TIERS, CUSTOM_PROJECTS, PUBLIC_TIERS, MONTHLY_PLANS, TYPICAL_RANGE,
    PRICING_FAQS, NEGOTIABLE_NOTE, FREE_DESIGN, instalmentLabel,
} from "@/content/pricing"

export const metadata = {
    title: "Small Business Website Design Packages | From $800",
    description:
        `Website pricing without the guesswork: most projects ${TYPICAL_RANGE.label} AUD. Starter $800, Business $1,900, Growth $3,500, fixed written quote, free homepage design first, and you own the code.`,
    keywords: [
        "website design packages australia",
        "website pricing australia",
        "how much does a website cost australia",
        "small business website packages",
        "website maintenance plans australia",
    ],
    alternates: { canonical: "/pricing/" },
    openGraph: {
        title: "Small Business Website Design Packages Australia",
        description: `Most projects ${TYPICAL_RANGE.label}. Fixed written quote before you commit, and a free homepage design first.`,
        url: "https://buildfirstsite.com/pricing/",
        type: "website",
    },
}

/* Layout only. Type sizes and colours come from Agon utility classes. */
const css = `
.pr-range { display:inline-flex; gap:10px; align-items:baseline; background:#F4FAFB;
  border:1px solid #BEE1E6; border-radius:50px; padding:12px 26px; }
.pr-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; align-items:stretch; }
@media (max-width:991px){ .pr-cards{ grid-template-columns:1fr; } }
.pr-card { position:relative; display:flex; flex-direction:column; background:#fff;
  border:1.5px solid #E4E7EC; border-radius:16px; padding:34px 30px; }
.pr-card.feat { border:2px solid #006D77; box-shadow:0 16px 44px rgba(0,109,119,.14); }
.pr-badge { position:absolute; top:-14px; left:30px; padding:6px 14px !important;
  font-size:12px !important; line-height:12px !important; }
.pr-incl { list-style:none; padding:0; margin:0 0 22px; }
.pr-incl li { position:relative; padding:6px 0 6px 26px; }
.pr-incl li::before { content:""; position:absolute; left:0; top:11px; width:16px; height:16px;
  border-radius:50%; background:#BEE1E6 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23006D77' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E") center/9px no-repeat; }
.pr-best { background:#F4FAFB; border-radius:12px; padding:12px 14px; margin-bottom:22px; }
.pr-price { margin-top:auto; border-top:1px dashed #E4E7EC; padding-top:20px; margin-bottom:20px; }
.pr-custom { display:grid; grid-template-columns:1.1fr 1fr; gap:30px; background:#101828;
  border-radius:16px; padding:44px 40px; align-items:center; }
@media (max-width:860px){ .pr-custom{ grid-template-columns:1fr; } }
.pr-custom-list { list-style:none; padding:0; margin:0; }
.pr-custom-list li { display:flex; justify-content:space-between; gap:16px; padding:14px 0;
  border-bottom:1px solid rgba(255,255,255,.12); }
.pr-custom-list li:last-child { border-bottom:none; }
.pr-month { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
@media (max-width:860px){ .pr-month{ grid-template-columns:1fr; } }
.pr-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
@media (max-width:860px){ .pr-steps{ grid-template-columns:1fr; } }
.pr-step-n { width:44px; height:44px; border-radius:50%; background:#006D77; color:#fff;
  display:grid; place-items:center; font-weight:700; margin-bottom:18px; }
.pr-risk { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
@media (max-width:860px){ .pr-risk{ grid-template-columns:1fr; } }
.pr-box { background:#fff; border:1px solid #E4E7EC; border-radius:16px; padding:30px; height:100%; }
.bfs-white { color:#fff !important; }
.bfs-tint { color:#BEE1E6 !important; }
.bfs-mint-btn { background:#83C5BE !important; color:#006D77 !important; }
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
            serviceType: "Website design and development",
            provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
            areaServed: { "@type": "Country", name: "Australia" },
            offers: [...PUBLIC_TIERS, ...MONTHLY_PLANS].map((t) => ({
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

            {/* ══ 1. WHAT DOES IT COST? ══ */}
            <section className="section-box mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto text-center">
                            <span className="tag-1 bg-6 color-green-900">Pricing</span>
                            <h1 className="text-heading-1 color-gray-900 mt-25 mb-20">
                                Website pricing without the guesswork
                            </h1>
                            <div className="pr-range mb-25">
                                <span className="text-body-text color-gray-600">Most projects</span>
                                <span className="text-heading-4 color-green-900">{TYPICAL_RANGE.label}</span>
                                <span className="text-body-small color-gray-500">AUD</span>
                            </div>
                            <p className="text-body-lead-large color-gray-600 mb-50">
                                The exact price depends on the size of the site. Every package includes
                                the essentials, and you get a fixed written scope and price before
                                any work begins.
                            </p>
                        </div>
                    </div>

                    {/* ══ 2–3. WHAT DO I GET + WHICH FITS ══ */}
                    <div className="row">
                        <div className="col-lg-11 mx-auto">
                            <div className="pr-cards">
                                {PRIMARY_TIERS.map((t) => (
                                    <div key={t.id} className={`pr-card${t.featured ? " feat" : ""}`}>
                                        {t.tag && (
                                            <span className="tag-1 bg-6 color-green-900 pr-badge">{t.tag}</span>
                                        )}
                                        <h2 className="text-heading-4 color-gray-900 mb-5">{t.name}</h2>
                                        <p className="text-body-text color-gray-600 mb-20">{t.tagline}</p>

                                        <span className="text-body-small color-gray-500 mb-10">What's included</span>
                                        <ul className="pr-incl">
                                            {t.includes.map((i) => (
                                                <li key={i} className="text-body-text color-gray-900">{i}</li>
                                            ))}
                                        </ul>

                                        <div className="pr-best">
                                            <span className="text-body-small color-gray-500 d-block mb-5">Best suited to</span>
                                            <span className="text-body-small color-gray-900">{t.bestFor}</span>
                                        </div>

                                        <div className="pr-price">
                                            <span className="text-body-small color-gray-500">From</span>
                                            <div>
                                                <span className="text-heading-2 color-green-900">{t.priceLabel}</span>
                                                <span className="text-body-small color-gray-500 ml-5">AUD</span>
                                            </div>
                                            <p className="text-body-small color-gray-600 mt-5 mb-0">
                                                {instalmentLabel(t) && <>or {instalmentLabel(t)} · </>}
                                                Delivery {t.delivery}
                                            </p>
                                            <p className="text-body-small color-green-900 mt-5 mb-0">
                                                Fixed written quote before you commit
                                            </p>
                                        </div>

                                        <Link
                                            href="/free-homepage-design/"
                                            data-event="pricing_package_click"
                                            data-package={t.id}
                                            className={`btn ${t.featured ? "btn-black" : "btn-default"} w-100 text-center`}
                                            style={{ justifyContent: "center" }}
                                        >
                                            Start with a free homepage design
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <p className="text-body-small color-gray-500 text-center mt-30">
                                All prices AUD · GST not included · Hosting included for year one ·
                                Starter and up payable in 4 instalments
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 4. CUSTOM PROJECTS ══ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 mx-auto">
                            <div className="pr-custom">
                                <div>
                                    <span className="tag-1" style={{ background: "rgba(131,197,190,.15)", color: "#83C5BE" }}>
                                        Custom projects
                                    </span>
                                    <h2 className="text-heading-2 bfs-white mt-20 mb-15">Need more than a website?</h2>
                                    <p className="text-body-text bfs-tint mb-30">
                                        Online stores, booking systems, customer portals, CRM integrations,
                                        AI features and custom software. We work out what you need, recommend
                                        the simplest solution, and give you a fixed project price.
                                    </p>
                                    <Link href="/contact/" data-event="pricing_package_click" data-package="custom"
                                        className="btn btn-black bfs-mint-btn">
                                        Discuss my project
                                    </Link>
                                </div>
                                <ul className="pr-custom-list">
                                    {CUSTOM_PROJECTS.map((t) => (
                                        <li key={t.id}>
                                            <span>
                                                <span className="text-heading-6 bfs-white d-block">{t.name}</span>
                                                <span className="text-body-small bfs-tint">{t.tagline}</span>
                                            </span>
                                            <span className="text-heading-6 bfs-white" style={{ whiteSpace: "nowrap" }}>
                                                {/^from/i.test(t.priceLabel) ? t.priceLabel : `from ${t.priceLabel}`}
                                            </span>
                                        </li>
                                    ))}
                                    <li>
                                        <span className="text-body-small bfs-tint">Automation and AI for your business</span>
                                        <Link href="/services/ai-automation/" className="text-body-small bfs-white">
                                            See automation →
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 5. AFTER LAUNCH ══ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="tag-1 bg-6 color-green-900">After launch</span>
                            <h2 className="text-heading-2 color-gray-900 mt-25 mb-20">Two monthly plans. Both optional.</h2>
                            <p className="text-body-lead-large color-gray-600 mb-50">
                                Care keeps the site hosted, updated and backed up. Care + SEO adds the
                                monthly work that moves you up Google. Cancel either with 30 days notice.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="pr-month">
                                {MONTHLY_PLANS.map((p) => (
                                    <div key={p.id} className="pr-box">
                                        <h3 className="text-heading-4 color-gray-900 mb-5">{p.name}</h3>
                                        <p className="text-body-text color-gray-600 mb-20">{p.tagline}</p>
                                        <ul className="pr-incl">
                                            {p.features.slice(0, 6).map((f) => (
                                                <li key={f} className="text-body-text color-gray-900">{f}</li>
                                            ))}
                                        </ul>
                                        <span className="text-heading-3 color-green-900">{p.priceLabel}</span>
                                        <span className="text-body-text color-gray-500">{p.period}</span>
                                        <p className="text-body-small color-gray-500 mt-10 mb-0">{p.note}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 6. WHAT HAPPENS NEXT ══ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="tag-1 bg-6 color-green-900">What happens next</span>
                            <h2 className="text-heading-2 color-gray-900 mt-25 mb-50">From first message to a fixed price</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="pr-steps">
                                <div className="pr-box">
                                    <div className="pr-step-n">1</div>
                                    <h3 className="text-heading-5 color-gray-900 mb-10">Tell us about the business</h3>
                                    <p className="text-body-text color-gray-600 mb-0">
                                        What you do, what the site should achieve, roughly how many pages.
                                        A short form or a free call, whichever you prefer.
                                    </p>
                                </div>
                                <div className="pr-box">
                                    <div className="pr-step-n">2</div>
                                    <h3 className="text-heading-5 color-gray-900 mb-10">See your homepage, free</h3>
                                    <p className="text-body-text color-gray-600 mb-0">
                                        We design your homepage with your real name and services, usually
                                        within {FREE_DESIGN.turnaround}, so you can judge the work first.
                                    </p>
                                </div>
                                <div className="pr-box">
                                    <div className="pr-step-n">3</div>
                                    <h3 className="text-heading-5 color-gray-900 mb-10">Get a fixed written price</h3>
                                    <p className="text-body-text color-gray-600 mb-0">
                                        Recommended scope, one fixed AUD figure and a delivery date. It only
                                        changes if you ask for something new.
                                    </p>
                                </div>
                            </div>
                            <p className="text-body-text color-gray-600 text-center mt-30">{NEGOTIABLE_NOTE}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 7. WHY IT'S LOW-RISK ══ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="tag-1 bg-6 color-green-900">Low risk</span>
                            <h2 className="text-heading-2 color-gray-900 mt-25 mb-50">No surprises, by design</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="pr-risk">
                                <div className="pr-box">
                                    <h3 className="text-heading-5 color-gray-900 mb-10">See it before you pay</h3>
                                    <p className="text-body-text color-gray-600 mb-0">
                                        Your homepage design is free. If you don't love it, you walk away and
                                        pay nothing.
                                    </p>
                                </div>
                                <div className="pr-box">
                                    <h3 className="text-heading-5 color-gray-900 mb-10">One fixed price</h3>
                                    <p className="text-body-text color-gray-600 mb-0">
                                        No hourly billing. The quote is in writing and does not move unless
                                        the scope does.
                                    </p>
                                </div>
                                <div className="pr-box">
                                    <h3 className="text-heading-5 color-gray-900 mb-10">You own everything</h3>
                                    <p className="text-body-text color-gray-600 mb-0">
                                        Code, domain and hosting in your name. No lock-in, no platform you
                                        can't leave.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 8. FAQ ══ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="tag-1 bg-6 color-green-900">FAQ</span>
                            <h2 className="text-heading-2 color-gray-900 mt-25 mb-50">Pricing questions</h2>
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
                            <p className="text-body-small color-gray-500 mt-30">
                                Questions about who we are, where we work or why we have no reviews yet
                                are answered on the <Link href="/about/" className="color-green-900">about page</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="section-box mt-100 mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="bfs-cta-box">
                                <h2 className="text-heading-2 bfs-white mb-20">See your homepage before you pay</h2>
                                <p className="text-body-lead-large bfs-tint"
                                    style={{ maxWidth: 640, margin: "0 auto 40px" }}>
                                    {FREE_DESIGN.promise}
                                </p>
                                <Link href="/free-homepage-design/" data-event="free_design_cta" data-package="pricing-cta"
                                    className="btn btn-black bfs-mint-btn mr-15">
                                    Get my free homepage design
                                </Link>
                                <a data-loc="pricing-page" href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-default">
                                    Book a free call
                                </a>
                                <p className="text-body-small bfs-tint mt-40 mb-0">
                                    Related:{" "}
                                    <Link href="/how-much-does-a-website-cost-australia/" className="bfs-tint">
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
