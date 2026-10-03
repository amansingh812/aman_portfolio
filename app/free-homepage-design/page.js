/* eslint-disable react/no-unescaped-entities */
/**
 * /free-homepage-design/ — the risk-reversal offer as its own page (Sprint 1,
 * 6 Oct 2026). Built to be the ad landing page and the target of every
 * "free homepage design" CTA on the site.
 *
 * HONESTY (CLAUDE.md §1): what the client receives is a DESIGN of their
 * homepage, not a working site. Never call it a "demo site" or "free website".
 * The turnaround comes from FREE_DESIGN in content/pricing.js.
 *
 * Primary keyword: "free homepage design" / "free website design mockup".
 * /website-design-quote/ owns "website design quote"; do not compete with it.
 */
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ContactPageForm from "@/components/elements/ContactPageForm"
import { SITE } from "@/content/site"
import { FREE_DESIGN, TYPICAL_RANGE, PRIMARY_TIERS } from "@/content/pricing"

const URL = "https://buildfirstsite.com/free-homepage-design/"

export const metadata = {
    title: { absolute: "Free Homepage Design Before You Pay | Build First Site" },
    description:
        `See your homepage designed free, with your real business name and services, usually within ${FREE_DESIGN.turnaround}. Pay only if you go ahead. Fixed AUD quote, you own the code.`,
    alternates: { canonical: "/free-homepage-design/" },
    openGraph: {
        title: "See your homepage designed free, before you pay",
        description: FREE_DESIGN.promise,
        url: URL,
        type: "website",
    },
}

const STEPS = [
    { t: "Tell us about the business", b: "What you do, who you serve, and what the website should help with. Two minutes, no call needed." },
    { t: `See your homepage in ${FREE_DESIGN.turnaround}`, b: "A design of your homepage using your real business name, services and photos (or good placeholders if you don't have any yet)." },
    { t: "Decide, with no pressure", b: "Love it? We send a fixed written price and a delivery date. Not for you? You walk away and owe nothing." },
]

const YOU_GET = [
    "A homepage design for your actual business, not a template preview",
    "Your services, your suburbs, your call to action",
    "Desktop and mobile views",
    "A short note on the pages we'd recommend and why",
    "A fixed AUD price if you want to go ahead",
]

const FAQS = [
    { q: "Is it actually free?", a: "Yes. There is no deposit, no card and no obligation. We do it because seeing the work on your own business is the fastest way for you to decide whether we're the right fit." },
    { q: "Is this a working website?", a: "No. It is a design of your homepage: what it will look like and say. The build starts only if you decide to go ahead, after you have a fixed written price." },
    { q: `How long does it take?`, a: `Usually ${FREE_DESIGN.turnaround} from when we have the details we need. If we need anything else, we'll ask in one message rather than a back-and-forth.` },
    { q: "What does the full website cost?", a: `Most projects are ${TYPICAL_RANGE.label} AUD. ${PRIMARY_TIERS.map((t) => `${t.name} (${t.scope}) from ${t.priceLabel}`).join(", ")}. The exact figure depends on the size of the site, and you get it in writing before anything starts.` },
    { q: "Do I own the website if I go ahead?", a: "Yes. The code, domain and hosting are in your name. No proprietary platform, no lock-in." },
    { q: "Why would you do this for free?", a: "Because it's the honest way to sell a website. You judge real work instead of a sales pitch, and we only build for people who already like what they've seen." },
]

const css = `
.fd-hero { background:#F4FAFB; border-radius:24px; padding:70px 50px; }
@media (max-width:767px){ .fd-hero{ padding:44px 22px; } }
.fd-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
@media (max-width:860px){ .fd-steps{ grid-template-columns:1fr; } }
.fd-box { background:#fff; border:1px solid #E4E7EC; border-radius:16px; padding:30px; height:100%; }
.fd-n { width:44px; height:44px; border-radius:50%; background:#006D77; color:#fff; display:grid;
  place-items:center; font-weight:700; margin-bottom:18px; }
.fd-list { list-style:none; padding:0; margin:0; }
.fd-list li { position:relative; padding:9px 0 9px 30px; }
.fd-list li::before { content:"✓"; position:absolute; left:0; top:8px; color:#006D77; font-weight:800; }
.fd-form { background:#fff; border:1px solid #E4E7EC; border-radius:20px; padding:36px 30px;
  box-shadow:0 20px 50px rgba(16,24,40,.07); }
.fd-faq { border-bottom:1px solid #E4E7EC; padding:26px 0; }
`

export default function FreeHomepageDesignPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "Free homepage design", item: URL },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Free homepage design",
            serviceType: "Website homepage design",
            provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
            areaServed: { "@type": "Country", name: "Australia" },
            offers: { "@type": "Offer", price: 0, priceCurrency: "AUD", url: URL },
        },
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to get a free homepage design",
            step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.b })),
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
    ]

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* HERO + FORM */}
            <section className="section-box mt-50" id="get-started">
                <div className="container">
                    <div className="fd-hero">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-40">
                                <span className="tag-1 bg-6 color-green-900">Free · no obligation</span>
                                <h1 className="text-heading-1 color-gray-900 mt-25 mb-20">
                                    See your homepage designed free, before you pay
                                </h1>
                                <p className="text-body-lead-large color-gray-600 mb-30">
                                    Tell us about your business and we'll design your homepage, usually
                                    within {FREE_DESIGN.turnaround}. If you love it, you get a fixed price.
                                    If not, you walk away and owe nothing.
                                </p>
                                <ul className="fd-list">
                                    <li className="text-body-text color-gray-900">No deposit, no card, no obligation</li>
                                    <li className="text-body-text color-gray-900">Designed for your real business, not a template</li>
                                    <li className="text-body-text color-gray-900">Most full projects {TYPICAL_RANGE.label} AUD, fixed in writing</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="fd-form">
                                    <h2 className="text-heading-4 color-gray-900 mb-20">Get my free homepage design</h2>
                                    <div className="row">
                                        <ContactPageForm
                                            source="Free homepage design"
                                            variant="free-design"
                                            wrapperClass="col-lg-12"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="tag-1 bg-6 color-green-900">How it works</span>
                            <h2 className="text-heading-2 color-gray-900 mt-25 mb-50">Three steps, no pressure</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="fd-steps">
                                {STEPS.map((s, i) => (
                                    <div key={s.t} className="fd-box">
                                        <div className="fd-n">{i + 1}</div>
                                        <h3 className="text-heading-5 color-gray-900 mb-10">{s.t}</h3>
                                        <p className="text-body-text color-gray-600 mb-0">{s.b}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT YOU GET + PROOF */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mx-auto mb-40">
                            <span className="tag-1 bg-6 color-green-900">What you get</span>
                            <h2 className="text-heading-2 color-gray-900 mt-25 mb-25">Real work on your business</h2>
                            <ul className="fd-list">
                                {YOU_GET.map((y) => <li key={y} className="text-body-text color-gray-900">{y}</li>)}
                            </ul>
                        </div>
                        <div className="col-lg-5 mx-auto">
                            <div className="fd-box">
                                <h3 className="text-heading-5 color-gray-900 mb-10">Judge us on live work</h3>
                                <p className="text-body-text color-gray-600 mb-20">
                                    These are live sites we built for real clients. Open them on your
                                    phone and check how fast they load.
                                </p>
                                <ul className="fd-list mb-20">
                                    <li><Link href="/work/hs-race-gear/" className="color-green-900">HS Race Gear</Link> <span className="color-gray-500 text-body-small">· online store</span></li>
                                    <li><Link href="/work/mobile-armour/" className="color-green-900">Mobile Armour</Link> <span className="color-gray-500 text-body-small">· online store</span></li>
                                    <li><Link href="/work/autozenlyai/" className="color-green-900">Autozenly AI</Link> <span className="color-gray-500 text-body-small">· AI web app</span></li>
                                </ul>
                                <Link href="/work/" className="btn btn-default icon-arrow-right">See all our work</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2 className="text-heading-2 color-gray-900 mb-30 text-center">Questions</h2>
                            {FAQS.map((f) => (
                                <div key={f.q} className="fd-faq">
                                    <h3 className="text-heading-6 color-gray-900 mb-10">{f.q}</h3>
                                    <p className="text-body-text color-gray-600 mb-0">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-box mt-100 mb-100">
                <div className="container text-center">
                    <h2 className="text-heading-2 color-gray-900 mb-20">Ready to see it?</h2>
                    <p className="text-body-lead-large color-gray-600 mb-30">{FREE_DESIGN.promise}</p>
                    <a href="#get-started" className="btn btn-black icon-arrow-right-white mr-10 mb-10">Get my free homepage design</a>
                    <a data-loc="free-design-page" href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                        className="btn btn-default mb-10">Book a free call instead</a>
                    <p className="text-body-small color-gray-500 mt-25">
                        Related: <Link href="/pricing/" className="color-green-900">pricing</Link>{" · "}
                        <Link href="/how-much-does-a-website-cost-australia/" className="color-green-900">what a website costs</Link>{" · "}
                        <Link href="/website-design-quote/" className="color-green-900">get a website quote</Link>
                    </p>
                </div>
            </section>
        </Layout>
    )
}
