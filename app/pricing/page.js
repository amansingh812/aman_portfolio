/* eslint-disable react/no-unescaped-entities */
/**
 * /pricing/ — the highest-intent page on the site.
 *
 * Every figure comes from content/pricing.js. Do not hardcode a price here.
 *
 * REDESIGN 4 Nov 2026: hero image + short answer, interactive estimator
 * (components/pricing/PriceEstimator.js), comparison table, icon steps.
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
import Image from "next/image"
import fs from "node:fs"
import path from "node:path"
import Icon from "@/components/pricing/Icon"
import PriceEstimator from "@/components/pricing/PriceEstimator"
import { SITE } from "@/content/site"
import {
    PRIMARY_TIERS, CUSTOM_PROJECTS, PUBLIC_TIERS, MONTHLY_PLANS, TYPICAL_RANGE,
    PRICING_FAQS, NEGOTIABLE_NOTE, FREE_DESIGN, instalmentLabel, ALWAYS_INCLUDED,
} from "@/content/pricing"

export const metadata = {
    title: "Small Business Website Design Packages | From $800",
    description:
        `Website pricing without the guesswork: most projects ${TYPICAL_RANGE.label} AUD. Starter $800, Business $1,900, Growth $3,500, a written estimate after a short call, free homepage design first, and you own the code.`,
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
        description: `Most projects ${TYPICAL_RANGE.label}. A written estimate before you commit, and a free homepage design first.`,
        url: "https://buildfirstsite.com/pricing/",
        type: "website",
    },
}

/* Layout only. */
const css = `
.pp{--t:#006D77;--td:#004349;--m:#E6F3F5;--m2:#BEE1E6;--ink:#101828;--i2:#344054;--mu:#667085;--ln:#E4E7EC;--bg:#F8FAFB}
.pp-hero{background:linear-gradient(180deg,var(--m) 0%,#fff 100%);padding:60px 0 40px}
.pp-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
@media(max-width:991px){.pp-hero-grid{grid-template-columns:1fr}}
.pp-hero h1{font-size:clamp(34px,4.4vw,54px);line-height:1.12;letter-spacing:-.02em;color:var(--ink);margin:18px 0}
.pp-answer{background:#fff;border-left:4px solid var(--t);border-radius:12px;padding:16px 20px;font-size:17px;line-height:1.6;color:var(--i2);box-shadow:0 8px 24px -18px rgba(16,24,40,.4)}
.pp-answer b{color:var(--ink)}
.pp-range{display:inline-flex;gap:10px;align-items:baseline;background:#fff;border:1px solid var(--m2);border-radius:50px;padding:10px 22px;margin:22px 0}
.pp-trust{display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:22px;font-size:15px;color:var(--i2)}
.pp-trust span:before{content:"✓";color:#067647;font-weight:800;margin-right:6px}
.pp-heroimg img{width:100%;height:auto;border-radius:22px;border:1px solid var(--ln);box-shadow:0 24px 48px -28px rgba(16,24,40,.35)}
.pp-nav{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--ln)}
.pp-nav ul{display:flex;gap:6px;overflow-x:auto;list-style:none;margin:0;padding:10px 0}
.pp-nav a{display:block;white-space:nowrap;padding:8px 14px;border-radius:99px;font-size:14px;font-weight:700;color:var(--i2);text-decoration:none}
.pp-nav a:hover{background:var(--m);color:var(--td)}
.pp-sec{padding:80px 0 0;scroll-margin-top:70px}
.pp-head{max-width:720px;margin:0 auto 40px;text-align:center}
.pp-head h2{font-size:clamp(28px,3vw,40px);color:var(--ink);margin:16px 0 12px;line-height:1.2}
.pp-head p{font-size:18px;color:var(--mu);margin:0}
.pp-kick{display:inline-block;background:var(--m);color:var(--td);font-weight:700;font-size:13px;letter-spacing:.06em;text-transform:uppercase;padding:6px 14px;border-radius:99px}
/* estimator */
.pe{display:grid;grid-template-columns:1.25fr .9fr;gap:28px;background:#fff;border:1px solid var(--ln);border-radius:24px;padding:30px;box-shadow:0 30px 60px -40px rgba(0,67,73,.45)}
@media(max-width:991px){.pe{grid-template-columns:1fr;padding:20px}}
.pe-group{border:0;padding:0;margin:0 0 26px}
.pe-group legend,.pe-legend{display:flex;justify-content:space-between;width:100%;font-weight:800;color:var(--ink);font-size:17px;margin-bottom:12px}
.pe-legend strong{color:var(--t);font-size:22px}
.pe-types{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
@media(max-width:640px){.pe-types{grid-template-columns:1fr 1fr}}
.pe-types button{display:flex;flex-direction:column;align-items:center;gap:6px;min-height:84px;border:2px solid var(--ln);background:#fff;border-radius:14px;font:inherit;font-size:14px;font-weight:700;color:var(--i2);cursor:pointer;transition:all .2s}

.pe-types button.on{border-color:var(--t);background:var(--m);color:var(--td);transform:translateY(-2px)}
.pe input[type=range]{width:100%;height:10px;-webkit-appearance:none;appearance:none;border-radius:99px;background:linear-gradient(90deg,var(--t) var(--pct),var(--ln) var(--pct));outline-offset:6px}
.pe input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:30px;height:30px;border-radius:50%;background:#fff;border:4px solid var(--t);box-shadow:0 4px 12px rgba(0,109,119,.35);cursor:grab}
.pe input[type=range]::-moz-range-thumb{width:24px;height:24px;border-radius:50%;background:#fff;border:4px solid var(--t);cursor:grab}
.pe-ticks{display:flex;justify-content:space-between;font-size:12px;color:var(--mu);margin-top:8px}
.pe-hint{font-size:14px;color:var(--td);background:var(--m);border-radius:8px;padding:8px 12px;margin:12px 0 0}
.pe-extras{display:grid;grid-template-columns:1fr 1fr;gap:10px}
@media(max-width:640px){.pe-extras{grid-template-columns:1fr}}
.pe-chip{display:grid;grid-template-columns:auto 26px 1fr;gap:10px;align-items:center;border:2px solid var(--ln);border-radius:12px;padding:10px 12px;cursor:pointer;transition:all .2s;min-height:52px}
.pe-chip input{width:18px;height:18px;accent-color:var(--t)}
.pe-chip b{display:block;font-size:14px;color:var(--ink)}.pe-chip small{font-size:12px;color:var(--mu)}
.pe-chip.on{border-color:var(--t);background:var(--m)}
.pe-right{background:linear-gradient(160deg,var(--td),var(--t));border-radius:18px;padding:28px;color:#fff;display:flex;flex-direction:column;position:sticky;top:80px;align-self:start}
.pe-kicker{font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:var(--m2);font-weight:700}
.pe-total{font-size:clamp(40px,5vw,56px);font-weight:800;line-height:1.1;margin:6px 0;color:#fff;font-variant-numeric:tabular-nums}
.pe-total small{font-size:16px;font-weight:600;color:var(--m2)}
.pe-inst{margin:0 0 4px;color:var(--m);font-size:15px}
.pe-lines{list-style:none;padding:14px 0;margin:14px 0;border-top:1px solid rgba(255,255,255,.2);border-bottom:1px solid rgba(255,255,255,.2)}
.pe-lines li{display:flex;justify-content:space-between;gap:12px;font-size:15px;padding:4px 0;color:#fff}
.pe-meta{font-size:13px;color:var(--m2);margin:0 0 16px}
.pp .pe-btn{display:flex;justify-content:center;align-items:center;min-height:52px;border-radius:12px;background:#fff;color:var(--td);font-weight:800;text-decoration:none}
.pe-note{font-size:13px;color:var(--m);margin:12px 0 0;line-height:1.5}
/* cards */
.pr-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:stretch}
@media(max-width:991px){.pr-cards{grid-template-columns:1fr}}
.pr-card{position:relative;display:flex;flex-direction:column;background:#fff;border:1.5px solid var(--ln);border-radius:20px;padding:32px 28px;transition:transform .2s,box-shadow .2s}
.pr-card:hover{transform:translateY(-4px);box-shadow:0 20px 40px -24px rgba(0,67,73,.4)}
.pr-card.feat{border:2px solid var(--t);box-shadow:0 18px 44px rgba(0,109,119,.16)}
.pr-ico{width:52px;height:52px;border-radius:14px;background:var(--m);color:var(--t);display:grid;place-items:center;margin-bottom:16px}
.pr-card.feat .pr-ico{background:var(--t);color:#fff}
.pp-risk .pr-ico{color:#067647}
.pp-nav a{display:inline-flex!important;align-items:center;gap:6px}
.pp-nav .bfs-ico{color:var(--t)}
.pe-ti{width:46px;height:46px;border-radius:12px;background:var(--m);color:var(--t);display:grid;place-items:center;transition:all .2s}
.pe-types button.on .pe-ti{background:var(--t);color:#fff}
.pe-ci{width:26px;height:26px;color:var(--t);display:grid;place-items:center}
.pr-badge{position:absolute;top:-14px;left:28px;background:var(--t);color:#fff;font-size:12px;font-weight:800;padding:6px 14px;border-radius:99px}
.pr-incl{list-style:none;padding:0;margin:0 0 20px}
.pr-incl li{position:relative;padding:6px 0 6px 28px;font-size:15px;color:var(--ink)}
.pr-incl li:before{content:"✓";position:absolute;left:0;top:6px;width:20px;height:20px;border-radius:50%;background:var(--m2);color:var(--td);font-size:12px;font-weight:800;display:grid;place-items:center}
.pr-best{background:var(--bg);border-radius:12px;padding:12px 14px;margin-bottom:20px;font-size:14px}
.pr-price{margin-top:auto;border-top:1px dashed var(--ln);padding-top:18px;margin-bottom:18px}
/* compare */
.pp-cmp{border:1px solid var(--ln);border-radius:18px;overflow:auto}
.pp-cmp table{width:100%;border-collapse:collapse;min-width:640px;font-size:15px}
.pp-cmp th{background:var(--td);color:#fff;padding:16px;text-align:center}
.pp-cmp th:first-child,.pp-cmp td:first-child{text-align:left}
.pp-cmp td{padding:14px 16px;border-top:1px solid var(--ln);text-align:center;color:var(--i2)}
.pp-cmp tr:nth-child(even) td{background:var(--bg)}
.pp-cmp .y{color:#067647;font-weight:800}
.pp-cmp .feat{background:rgba(0,109,119,.06)!important}
/* custom */
.pr-custom{display:grid;grid-template-columns:1.1fr 1fr;gap:30px;background:#101828;border-radius:24px;padding:44px 40px;align-items:center}
@media(max-width:860px){.pr-custom{grid-template-columns:1fr;padding:28px}}
.pr-custom-list{list-style:none;padding:0;margin:0}
.pr-custom-list li{display:flex;justify-content:space-between;gap:16px;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.12)}
.pr-custom-list li:last-child{border-bottom:none}
.bfs-white{color:#fff!important}.bfs-tint{color:#E6F3F5!important}
.bfs-mint-btn{background:#83C5BE!important;color:#004349!important}
.pr-month{display:grid;grid-template-columns:1fr 1fr;gap:24px}
@media(max-width:860px){.pr-month{grid-template-columns:1fr}}
.pr-box{background:#fff;border:1px solid var(--ln);border-radius:20px;padding:30px;height:100%}
.pp-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;position:relative}
.pp-steps:before{content:"";position:absolute;top:34px;left:16%;right:16%;height:2px;background:repeating-linear-gradient(90deg,var(--m2) 0 8px,transparent 8px 14px)}
@media(max-width:860px){.pp-steps{grid-template-columns:1fr}.pp-steps:before{display:none}}
.pp-step{position:relative;text-align:center;padding:0 10px}
.pp-step .n{width:68px;height:68px;border-radius:50%;background:#fff;border:3px solid var(--t);display:grid;place-items:center;color:var(--t);margin:0 auto 16px}
.pp-step h3{font-size:19px;color:var(--ink);margin-bottom:8px}
.pp-step p{font-size:15px;color:var(--mu)}
.pp-risk{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:860px){.pp-risk{grid-template-columns:1fr}}
.pp-risk .pr-box{text-align:left}
.pp-risk .pr-ico{background:#ECFDF3}
.pp details{border:1px solid var(--ln);border-radius:14px;margin-bottom:10px;background:#fff}
.pp summary{cursor:pointer;list-style:none;padding:18px 52px 18px 20px;font-weight:700;color:var(--ink);position:relative;font-size:17px}
.pp summary::-webkit-details-marker{display:none}
.pp summary:after{content:"+";position:absolute;right:20px;top:14px;font-size:24px;color:var(--t)}
.pp details[open] summary:after{content:"\\2013"}
.pp details p{padding:0 20px 18px;margin:0;font-size:16px;color:var(--i2)}
.bfs-cta-box{background:linear-gradient(135deg,var(--td),var(--t));border-radius:24px;padding:64px 48px;text-align:center}
@media(prefers-reduced-motion:reduce){.pp *{transition:none!important}}
`

const HERO_IMG = "/assets/imgs/page/landing/pricing-hero.png"
const heroSrc = fs.existsSync(path.join(process.cwd(), "public", HERO_IMG))
    ? HERO_IMG : "/assets/imgs/page/landing/how-much-does-a-website-cost-australia.webp"
const ICONS = { starter: "rocket", business: "building", unlimited: "trend" }

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
            <div className="pp">

            {/* ══ HERO ══ */}
            <header className="pp-hero">
                <div className="container">
                    <div className="pp-hero-grid">
                        <div>
                            <span className="pp-kick">Pricing · AUD</span>
                            <h1>Website pricing without the guesswork</h1>
                            <p className="pp-answer">
                                <b>Short answer:</b> most small business websites we build cost {TYPICAL_RANGE.label} AUD.
                                Starter {PRIMARY_TIERS[0].priceLabel} for 3–5 pages, Business {PRIMARY_TIERS[1].priceLabel} for up to 10,
                                Growth {PRIMARY_TIERS[2].priceLabel} for bigger sites. You see your homepage designed free, then get a written estimate.
                            </p>
                            <div className="pp-range">
                                <span className="text-body-text color-gray-600">Most projects</span>
                                <span className="text-heading-4 color-green-900">{TYPICAL_RANGE.label}</span>
                            </div>
                            <div>
                                <a href="#estimate" className="btn btn-black mr-15">Estimate my price</a>
                                <Link href="/free-homepage-design/" data-event="free_design_cta" data-package="pricing-hero" className="btn btn-default">Free homepage design</Link>
                            </div>
                            <div className="pp-trust"><span>Free design first</span><span>Pay in 4 instalments</span><span>You own the code</span></div>
                        </div>
                        <div className="pp-heroimg">
                            <Image src={heroSrc} alt="Illustration of three website packages of increasing size, a price slider and a written estimate" width={1200} height={675} sizes="(max-width: 991px) 100vw, 560px" priority />
                        </div>
                    </div>
                </div>
            </header>

            <nav className="pp-nav" aria-label="On this page">
                <div className="container">
                    <ul>
                        <li><a href="#estimate"><Icon name="sparkle" size={16} /> Estimate</a></li>
                        <li><a href="#packages"><Icon name="box" size={16} /> Packages</a></li>
                        <li><a href="#compare"><Icon name="scale" size={16} /> Compare</a></li>
                        <li><a href="#custom"><Icon name="puzzle" size={16} /> Custom projects</a></li>
                        <li><a href="#monthly"><Icon name="shield" size={16} /> After launch</a></li>
                        <li><a href="#process"><Icon name="map" size={16} /> How it works</a></li>
                        <li><a href="#faq"><Icon name="help" size={16} /> FAQ</a></li>
                    </ul>
                </div>
            </nav>

            {/* ══ ESTIMATOR ══ */}
            <section id="estimate" className="pp-sec">
                <div className="container">
                    <div className="pp-head">
                        <span className="pp-kick">Price estimator</span>
                        <h2>What would your site cost?</h2>
                        <p>Pick what you are building, slide to the number of pages and add extras. The total updates as you go.</p>
                    </div>
                    <div className="row"><div className="col-lg-11 mx-auto"><PriceEstimator /></div></div>
                </div>
            </section>

            {/* ══ PACKAGES ══ */}
            <section id="packages" className="pp-sec">
                <div className="container">
                    <div className="pp-head">
                        <span className="pp-kick">Packages</span>
                        <h2>Three packages, priced by size</h2>
                        <p>Every package includes the essentials. The difference is how many pages and how much structure your business needs.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-11 mx-auto">
                            <div className="pr-cards">
                                {PRIMARY_TIERS.map((t) => (
                                    <div key={t.id} className={`pr-card${t.featured ? " feat" : ""}`}>
                                        {t.tag && <span className="pr-badge">{t.tag}</span>}
                                        <div className="pr-ico" aria-hidden="true"><Icon name={ICONS[t.id] || "globe"} size={26} /></div>
                                        <h3 className="text-heading-4 color-gray-900 mb-5">{t.name}</h3>
                                        <p className="text-body-text color-gray-600 mb-20">{t.tagline}</p>
                                        <ul className="pr-incl">{t.includes.map((i) => <li key={i}>{i}</li>)}</ul>
                                        <div className="pr-best"><span className="color-gray-500 d-block mb-5">Best suited to</span><span className="color-gray-900">{t.bestFor}</span></div>
                                        <div className="pr-price">
                                            <span className="text-body-small color-gray-500">From</span>
                                            <div><span className="text-heading-2 color-green-900">{t.priceLabel}</span><span className="text-body-small color-gray-500 ml-5">AUD</span></div>
                                            <p className="text-body-small color-gray-600 mt-5 mb-0">{instalmentLabel(t) && <>or {instalmentLabel(t)} · </>}Delivery {t.delivery}</p>
                                            <p className="text-body-small color-green-900 mt-5 mb-0">Written estimate before you commit</p>
                                        </div>
                                        <Link href="/free-homepage-design/" data-event="pricing_package_click" data-package={t.id}
                                            className={`btn ${t.featured ? "btn-black" : "btn-default"} w-100 text-center`} style={{ justifyContent: "center" }}>
                                            Start with a free homepage design
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <p className="text-body-small color-gray-500 text-center mt-30">All prices AUD · GST not included · Starter and up payable in 4 instalments</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ COMPARE ══ */}
            <section id="compare" className="pp-sec">
                <div className="container">
                    <div className="pp-head">
                        <span className="pp-kick">Compare</span>
                        <h2>Side by side</h2>
                        <p>No feature is held back to make a cheaper package look worse.</p>
                    </div>
                    <div className="row"><div className="col-lg-10 mx-auto">
                        <div className="pp-cmp">
                            <table>
                                <thead><tr><th scope="col">What you get</th>{PRIMARY_TIERS.map((t) => <th key={t.id} scope="col">{t.name}</th>)}</tr></thead>
                                <tbody>
                                    <tr><td>Size</td>{PRIMARY_TIERS.map((t) => <td key={t.id} className={t.featured ? "feat" : ""}>{t.scope}</td>)}</tr>
                                    <tr><td>Typical delivery</td>{PRIMARY_TIERS.map((t) => <td key={t.id} className={t.featured ? "feat" : ""}>{t.delivery}</td>)}</tr>
                                    {ALWAYS_INCLUDED.map((f) => (
                                        <tr key={f}><td>{f}</td>{PRIMARY_TIERS.map((t) => <td key={t.id} className={`y${t.featured ? " feat" : ""}`} aria-label="Included">✓</td>)}</tr>
                                    ))}
                                    <tr><td>Starting price</td>{PRIMARY_TIERS.map((t) => <td key={t.id} className={t.featured ? "feat" : ""}><strong className="color-green-900">{t.priceLabel}</strong></td>)}</tr>
                                    <tr><td>Instalments</td>{PRIMARY_TIERS.map((t) => <td key={t.id} className={t.featured ? "feat" : ""}>{instalmentLabel(t)}</td>)}</tr>
                                </tbody>
                            </table>
                        </div>
                    </div></div>
                </div>
            </section>

            {/* ══ CUSTOM PROJECTS ══ */}
            <section id="custom" className="pp-sec">
                <div className="container"><div className="row"><div className="col-lg-11 mx-auto">
                    <div className="pr-custom">
                        <div>
                            <span className="tag-1" style={{ background: "rgba(131,197,190,.15)", color: "#83C5BE" }}>Custom projects</span>
                            <h2 className="text-heading-2 bfs-white mt-20 mb-15">Need more than a website?</h2>
                            <p className="text-body-text bfs-tint mb-30">
                                Online stores, booking systems, customer portals, CRM integrations, AI features and custom software.
                                We recommend the simplest solution and send a written estimate, phase by phase.
                            </p>
                            <Link href="/contact/" data-event="pricing_package_click" data-package="custom" className="btn btn-black bfs-mint-btn">Discuss my project</Link>
                        </div>
                        <ul className="pr-custom-list">
                            {CUSTOM_PROJECTS.map((t) => (
                                <li key={t.id}>
                                    <span><span className="text-heading-6 bfs-white d-block">{t.name}</span><span className="text-body-small bfs-tint">{t.tagline}</span></span>
                                    <span className="text-heading-6 bfs-white" style={{ whiteSpace: "nowrap" }}>{/^from/i.test(t.priceLabel) ? t.priceLabel : `from ${t.priceLabel}`}</span>
                                </li>
                            ))}
                            <li><span className="text-body-small bfs-tint">Automation and AI for your business</span><Link href="/services/ai-automation/" className="text-body-small bfs-white">See automation →</Link></li>
                        </ul>
                    </div>
                </div></div></div>
            </section>

            {/* ══ AFTER LAUNCH ══ */}
            <section id="monthly" className="pp-sec">
                <div className="container">
                    <div className="pp-head">
                        <span className="pp-kick">After launch</span>
                        <h2>Two monthly plans. Both optional.</h2>
                        <p>Care keeps the site hosted, updated and backed up. Care + SEO adds the monthly work that moves you up Google.</p>
                    </div>
                    <div className="row"><div className="col-lg-10 mx-auto">
                        <div className="pr-month">
                            {MONTHLY_PLANS.map((p, i) => (
                                <div key={p.id} className="pr-box">
                                    <div className="pr-ico" aria-hidden="true"><Icon name={i === 0 ? "shield" : "chart"} size={26} /></div>
                                    <h3 className="text-heading-4 color-gray-900 mb-5">{p.name}</h3>
                                    <p className="text-body-text color-gray-600 mb-20">{p.tagline}</p>
                                    <ul className="pr-incl">{p.features.slice(0, 6).map((f) => <li key={f}>{f}</li>)}</ul>
                                    <span className="text-heading-3 color-green-900">{p.priceLabel}</span>
                                    <span className="text-body-text color-gray-500">{p.period}</span>
                                    <p className="text-body-small color-gray-500 mt-10 mb-0">{p.note}</p>
                                </div>
                            ))}
                        </div>
                    </div></div>
                </div>
            </section>

            {/* ══ HOW IT WORKS ══ */}
            <section id="process" className="pp-sec">
                <div className="container">
                    <div className="pp-head">
                        <span className="pp-kick">How it works</span>
                        <h2>From first message to a written estimate</h2>
                    </div>
                    <div className="row"><div className="col-lg-10 mx-auto">
                        <div className="pp-steps">
                            <div className="pp-step"><div className="n"><Icon name="chat" size={30} /></div><h3>1 · Tell us about the business</h3><p>What you do, what the site should achieve, roughly how many pages. A short form or a free call.</p></div>
                            <div className="pp-step"><div className="n"><Icon name="palette" size={30} /></div><h3>2 · See your homepage, free</h3><p>Designed with your real name and services, usually within {FREE_DESIGN.turnaround}.</p></div>
                            <div className="pp-step"><div className="n"><Icon name="doc" size={30} /></div><h3>3 · Get a written estimate</h3><p>Scope, an AUD estimate broken into phases, and a delivery date. It only changes if you ask for something new.</p></div>
                        </div>
                        <p className="text-body-text color-gray-600 text-center mt-30">{NEGOTIABLE_NOTE}</p>
                    </div></div>
                </div>
            </section>

            {/* ══ LOW RISK ══ */}
            <section className="pp-sec">
                <div className="container">
                    <div className="pp-head"><span className="pp-kick">Low risk</span><h2>No surprises, by design</h2></div>
                    <div className="row"><div className="col-lg-10 mx-auto">
                        <div className="pp-risk">
                            <div className="pr-box"><div className="pr-ico"><Icon name="eye" size={26} /></div><h3 className="text-heading-5 color-gray-900 mb-10">See it before you pay</h3><p className="text-body-text color-gray-600 mb-0">Your homepage design is free. If you don't love it, you walk away and pay nothing.</p></div>
                            <div className="pr-box"><div className="pr-ico"><Icon name="receipt" size={26} /></div><h3 className="text-heading-5 color-gray-900 mb-10">A clear written estimate</h3><p className="text-body-text color-gray-600 mb-0">No hourly billing. The estimate is in writing and only changes if the scope does.</p></div>
                            <div className="pr-box"><div className="pr-ico"><Icon name="key" size={26} /></div><h3 className="text-heading-5 color-gray-900 mb-10">You own everything</h3><p className="text-body-text color-gray-600 mb-0">Code, domain and hosting in your name. No lock-in, no platform you can't leave.</p></div>
                        </div>
                    </div></div>
                </div>
            </section>

            {/* ══ FAQ ══ */}
            <section id="faq" className="pp-sec">
                <div className="container">
                    <div className="pp-head"><span className="pp-kick">FAQ</span><h2>Pricing questions</h2></div>
                    <div className="row"><div className="col-lg-9 mx-auto">
                        {PRICING_FAQS.map((f, i) => (
                            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
                        ))}
                        <p className="text-body-small color-gray-500 mt-30">
                            Questions about who we are, where we work or why we have only a few reviews so far
                            are answered on the <Link href="/about/" className="color-green-900">about page</Link>.
                        </p>
                    </div></div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="pp-sec mb-100">
                <div className="container"><div className="row"><div className="col-lg-10 mx-auto">
                    <div className="bfs-cta-box">
                        <h2 className="text-heading-2 bfs-white mb-20">See your homepage before you pay</h2>
                        <p className="text-body-lead-large bfs-tint" style={{ maxWidth: 640, margin: "0 auto 40px" }}>{FREE_DESIGN.promise}</p>
                        <Link href="/free-homepage-design/" data-event="free_design_cta" data-package="pricing-cta" className="btn btn-black bfs-mint-btn mr-15">Get my free homepage design</Link>
                        <a data-loc="pricing-page" href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-default">Book a free call</a>
                        <p className="text-body-small bfs-tint mt-40 mb-0">
                            Related:{" "}
                            <Link href="/how-much-does-a-website-cost-australia/" className="bfs-tint">what a website costs in Australia</Link>{" · "}
                            <Link href="/hire-website-builder/" className="bfs-tint">hire someone to build a website</Link>{" · "}
                            <Link href="/work/" className="bfs-tint">our work</Link>
                        </p>
                    </div>
                </div></div></div>
            </section>
            </div>
        </Layout>
    )
}
