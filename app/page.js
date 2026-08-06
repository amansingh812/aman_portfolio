/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/**
 * Home (/) — Build First Site homepage, v3.
 *
 * Restructured to match the wireframe anatomy the user shared:
 *   1. HERO             — powerful statement + primary CTA + animated mockup
 *   2. TECH STACK strip — social proof via the modern stack we ship with
 *   3. BENEFITS (3)     — Fixed AUD · Modern stack · You own the code
 *   4. INDUSTRIES TEASER
 *   5. SERVICES (6)     — end-to-end offer, links to individual service pages
 *   6. PORTFOLIO (3)    — 3 recent projects with LIVE DEMO buttons
 *   7. CLIENT REVIEWS    — empty until real quotes exist (see content/site.js REVIEWS)
 *   8. FAQ              — Accordion (existing component)
 *   9. FINAL CTA        — big rounded panel, Get a quote + Book a call
 *
 * HONESTY: no invented testimonials, no fake stats, spec builds NOT shown
 * on the homepage strip (they live in /work/ properly labelled).
 */
import Layout from "@/components/layout/Layout"
import Accordion from "@/components/elements/Accordion"
import TechStack from "@/components/home/TechStack"
import ClientReviews from "@/components/slider/ClientReviews"
import Link from "next/link"
import Image from "next/image"
import { CTA, SITE, REVIEWS } from "@/content/site"
import { CASE_STUDIES } from "@/content/case-studies"

export const metadata = {
    title: "Build First Site — Web, App & AI Development for Australian Businesses",
    description:
        "Websites, apps and AI systems built for Australian businesses. Fixed AUD pricing from $600, modern Next.js stack, full code ownership. A two-person studio.",
    alternates: { canonical: "/" },
    openGraph: {
        title: "Build First Site — Fixed AUD Prices, Modern Stack",
        description: "Websites, apps and AI systems. Fixed AUD prices. You own the code.",
        url: "https://buildfirstsite.com/",
    },
}

/* ─── data ────────────────────────────────────────────────────────────── */



const SERVICES = [
    {
        title: "Web Development",
        icon: "/assets/imgs/page/services/1/icon-web.svg",
        body: "Responsive, fast and scalable websites and web applications built with modern technologies.",
        href: "/services/web-development/",
    },
    {
        title: "Mobile App Development",
        icon: "/assets/imgs/page/services/1/icon-product.svg",
        body: "Native iOS and Android apps from one Flutter codebase — one build, both stores.",
        href: "/services/mobile-app-development/",
    },
    {
        title: "Custom Software Development",
        icon: "/assets/imgs/page/services/1/icon-build.svg",
        body: "Tailored software that automates processes and grows with your business.",
        href: "/services/custom-software/",
    },
    {
        title: "Marketing",
        icon: "/assets/imgs/page/services/1/icon-share.svg",
        body: "Digital marketing, SEO and paid campaigns that put your product in front of the right audience.",
        href: "/services/marketing-seo/",
    },
    {
        title: "AI & Automation",
        icon: "/assets/imgs/page/services/1/icon-business.svg",
        body: "AI-powered tools and automation that improve efficiency and cut manual work.",
        href: "/services/ai-automation/",
    },
    {
        title: "Maintenance & Support",
        icon: "/assets/imgs/page/services/1/icon-support.svg",
        body: "Ongoing support and maintenance to keep your systems running smoothly. From AU$150/month.",
        href: "/services/maintenance-support/",
    },
]

/* Only the 3 real, shipped client projects — spec builds live in /work/ */
const PORTFOLIO = CASE_STUDIES.filter((cs) =>
    ["hs-race-gear", "mobile-armour", "autozenlyai"].includes(cs.slug)
)

/* ─── page ────────────────────────────────────────────────────────────── */

export default function Home() {
    return (
        <Layout>

            {/* ═══════════════ 1. HERO ═══════════════ */}
            <section id="home" className="section-box">
                <div className="banner-hero banner-1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <span className="tag-1">Accepting new projects — Q3 2026</span>
                                <h1 className="text-display-2 mt-20">
                                    Sites that launch. Apps that scale.
                                    <span className="color-green-900"> Built for Australian businesses.</span>
                                </h1>
                                <p className="text-body-lead-large color-gray-500 mt-30 pr-40">
                                    Websites, apps and AI-powered tools for Australian businesses —
                                    from first quote to ongoing support.
                                </p>
                                <p className="text-body-excerpt color-gray-600 mt-15">
                                    Fixed AUD pricing · Modern Next.js stack · Cross-platform iOS + Android
                                </p>
                                <div className="mt-40">
                                    <Link href="/contact/" className="btn btn-black icon-arrow-right-white mr-10">
                                        Get a quote
                                    </Link>
                                    <Link href="/work/" className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                                        See our work
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                <Image
                                    width={520}
                                    height={520}
                                    className="img-responsive shape-2"
                                    src="/assets/imgs/page/homepage1/banner.png"
                                    alt="Web design and development studio"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 2. TECH STACK TRUST STRIP ═══════════════ */}
            <TechStack />

            {/* ═══════════════ 3. BENEFITS — index-2 split layout ═══════════════ */}
            <section className="section-box">
                <div className="container mt-50">
                    <div className="row">
                        {/* Left — photo with floating chart card */}
                        <div className="col-lg-6 col-sm-12 block-img-we-do">
                            <div className="inner-image">
                                <Image
                                    className="bdrd-16 img-responsive"
                                    width={0} height={0} sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    src="/assets/imgs/page/homepage2/img-2.png"
                                    alt="Build First Site — web development studio at work"
                                />
                                <div className="block-chart">
                                    <Image width={0} height={0} sizes="100vw"
                                        style={{ width: "auto", height: "auto" }}
                                        src="/assets/imgs/page/homepage2/chart.png"
                                        alt="Project growth chart"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right — tag + heading + 3 icon-list items */}
                        <div className="col-lg-6 col-sm-12 block-we-do-2">
                            <span className="tag-1 bg-6 color-green-900">Growth without the chaos</span>
                            <h2 className="text-heading-1 mt-30">
                                How can you grow with us?
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-30">
                                Bring in better opportunities, turn more of them into customers,
                                and remove the busywork that makes growth feel heavy.
                            </p>
                            <div className="list-icons mt-50">
                                <div className="item-icon none-bd">
                                    <span className="icon-left">
                                        <Image width={0} height={0} sizes="100vw"
                                            style={{ width: "auto", height: "auto" }}
                                            src="/assets/imgs/page/homepage2/icon-work.svg"
                                            alt="The right customers find you"
                                        />
                                    </span>
                                    <h4 className="text-heading-4">The right customers find you</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Every good enquiry gets a clear next step, so interest turns into a conversation instead of stalling out.
                                    </p>
                                </div>
                                <div className="item-icon none-bd">
                                    <span className="icon-left">
                                        <Image width={0} height={0} sizes="100vw"
                                            style={{ width: "auto", height: "auto" }}
                                            src="/assets/imgs/page/homepage2/icon-design.svg"
                                            alt="Routine work happens without chasing"
                                        />
                                    </span>
                                    <h4 className="text-heading-4">Routine work runs itself</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Follow-ups, updates and admin happen in the background — nothing depends on you remembering to chase it.
                                    </p>
                                </div>
                                <div className="item-icon none-bd">
                                    <span className="icon-left">
                                        <Image width={0} height={0} sizes="100vw"
                                            style={{ width: "auto", height: "auto" }}
                                            src="/assets/imgs/page/homepage2/icon-advance.svg"
                                            alt="You can see what is actually working"
                                        />
                                    </span>
                                    <h4 className="text-heading-4">You see what's actually working</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Clear visibility into what's driving results, so decisions are based on what's happening, not guesswork.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-40">
                                <Link href="/about/" className="btn btn-black icon-arrow-right-white">
                                    See your growth path
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 4. INDUSTRIES TEASER ═══════════════ */}
            <section className="section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-1 col-12" />
                        <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                            <span className="tag-1 bg-6 color-green-900">Industries</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20 mb-10">
                                Built for your industry
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                We've built sites for tradies, e-commerce brands, real estate agents, hospitality venues and more.
                                Every build comes with industry-specific content and conversion patterns baked in.
                            </p>
                        </div>
                        <div className="col-lg-2 col-sm-1 col-12" />
                    </div>
                </div>
                <div className="container mt-70 mb-lg-50">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mb-30">
                            <Link href="/industries/finance-legal/" className="text-decoration-none">
                                <div className="bg-2 box-square hover-up" style={{ overflow: 'hidden' }}>
                                    <h4 className="text-heading-4 color-gray-900 mb-15">
                                        Finance &amp; Legal
                                    </h4>
                                    <p className="text-body-text-md color-gray-600">
                                        Professional sites for accountants, financial advisers, mortgage brokers and law firms — trust-first design that converts.
                                    </p>
                                    <div className="box-image-inner bg-color-1">
                                        <Image
                                            width={0} height={0} sizes="100vw"
                                            style={{ width: "100%", height: "auto" }}
                                            src="/assets/imgs/page/industries/industry-finance-legal.png"
                                            alt="Finance and legal website design Australia"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-sm-12 mb-30">
                            <Link href="/industries/hospitality/" className="text-decoration-none">
                                <div className="bg-6 box-square hover-up" style={{ overflow: 'hidden' }}>
                                    <h4 className="text-heading-4 color-gray-900 mb-15">
                                        Hospitality
                                    </h4>
                                    <p className="text-body-text-md color-gray-600">
                                        Restaurant, café, bar and venue sites built to drive bookings and walk-ins — with menus, reservations and Google Maps integration.
                                    </p>
                                    <div className="box-image-inner bg-color-2">
                                        <Image
                                            width={0} height={0} sizes="100vw"
                                            style={{ width: "100%", height: "auto" }}
                                            src="/assets/imgs/page/industries/industry-hospitality.png"
                                            alt="Hospitality and restaurant website design Australia"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center mt-40 mb-20">
                        <Link href="/industries/" className="btn btn-black icon-arrow-right-white">
                            Explore all industries
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 5. SERVICES ═══════════════ */}
            <section id="services" className="section-box mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-12">
                            <div className="text-start mb-25">
                                <span className="tag-1 bg-6 color-green-900">Services</span>
                            </div>
                            <h2 className="text-heading-2 color-gray-900 mb-20">
                                End-to-end delivery by<br className="d-lg-block d-none" />
                                professional developers
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mb-30" style={{ maxWidth: 620 }}>
                                Direct, coordinated delivery to design, build, launch and support your
                                work across web, mobile, marketing and AI.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-20">
                    <div className="row">
                        {SERVICES.map((s) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-40" key={s.title}>
                                <Link href={s.href} className="d-block h-100" style={{ textDecoration: 'none' }}>
                                    <div className="list-icons">
                                        <div className="item-icon none-bd">
                                            <span className="icon-left">
                                                <Image
                                                    width={0} height={0} sizes="100vw"
                                                    style={{ width: "auto", height: "auto" }}
                                                    src={s.icon}
                                                    alt={s.title}
                                                />
                                            </span>
                                            <h4 className="text-heading-6 color-gray-900">{s.title}</h4>
                                            <p className="text-body-text color-gray-600 mt-15">{s.body}</p>
                                            <span className="text-heading-6 color-green-900 mt-15 d-inline-block">
                                                Learn more →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-start mt-10 mb-20">
                        <Link href="/services/" className="btn btn-black icon-arrow-right-white">
                            See all services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 6. PORTFOLIO STRIP ═══════════════ */}
            <section id="work" className="section-box mt-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <span className="tag-1 bg-6 color-green-900">Portfolio</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                Recent work
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Products we&apos;ve designed, built and shipped for Australian businesses.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-70">
                        {PORTFOLIO.map((p) => (
                            <div className="col-lg-4 col-md-6 mb-30" key={p.slug}>
                                <div className="hover-up h-100" style={{
                                    background: '#F1F4FB',
                                    borderRadius: 22,
                                    padding: 18,
                                }}>
                                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                                        style={{ display: 'block', borderRadius: 14, overflow: 'hidden' }}>
                                        <img
                                            src={p.image}
                                            alt={`${p.name} — live website`}
                                            style={{
                                                width: '100%', height: 220,
                                                objectFit: 'cover', objectPosition: 'top center',
                                                display: 'block', background: '#fff',
                                            }}
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="d-flex justify-content-between align-items-center mt-20"
                                        style={{ gap: 12 }}>
                                        <div style={{ minWidth: 0, flex: 1 }}>
                                            <h4 className="text-heading-5 color-gray-900 mb-0"
                                                style={{ lineHeight: 1.15 }}>{p.name}</h4>
                                            <p className="text-body-small color-gray-500 mt-5 mb-0">{p.industry}</p>
                                        </div>
                                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                background: '#101828', color: '#fff',
                                                borderRadius: 999, padding: '12px 18px',
                                                fontSize: 12, fontWeight: 700,
                                                display: 'inline-flex', alignItems: 'center',
                                                gap: 7, whiteSpace: 'nowrap',
                                                textDecoration: 'none', flexShrink: 0,
                                                letterSpacing: 0.3,
                                            }}>
                                            <span style={{
                                                width: 7, height: 7, borderRadius: '50%',
                                                background: '#22C55E', display: 'inline-block',
                                            }} />
                                            LIVE
                                        </a>
                                    </div>
                                    <div className="mt-15">
                                        <Link href={`/work/${p.slug}/`}
                                            style={{
                                                color: '#0F5E4E', fontWeight: 600,
                                                textDecoration: 'none', fontSize: 13,
                                            }}>
                                            Read the case study →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-40">
                        <Link href="/work/" className="btn btn-black icon-arrow-right-white">
                            See the full portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 7. CLIENT REVIEWS ═══════════════ */}
            {/* Whole section is skipped until REVIEWS in content/site.js has real,
                permissioned quotes — see CLAUDE.md §1. No heading without content
                behind it. */}
            {REVIEWS.length > 0 && (
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <span className="tag-1 bg-6 color-green-900">Reviews</span>
                                <h2 className="text-heading-1 color-gray-900 mt-20 mb-10">
                                    What clients say
                                </h2>
                                <p className="text-body-lead-large color-gray-600">
                                    Real feedback from Australian businesses we&apos;ve built for.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <ClientReviews />
                    </div>
                </section>
            )}

            {/* ═══════════════ 8. FAQ ═══════════════ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-40">
                            <span className="tag-1 bg-6 color-green-900">FAQ</span>
                            <h2 className="text-heading-1 mt-20">Frequently asked questions</h2>
                            <p className="text-body-lead color-gray-600 mt-30">
                                Everything most people ask before we start a project. Something else?
                                Send us a message — usually replied same day.
                            </p>
                            <div className="mt-40">
                                <Link href="/contact/" className="btn btn-black icon-arrow-right-white mr-15">
                                    Contact us
                                </Link>
                                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                                    Book a call
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <Accordion />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 9. FINAL CTA ═══════════════ */}
            <section className="section-box overflow-visible mt-100 mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="bg-6 box-newsletter position-relative">
                                <div className="row">
                                    <div className="col-lg-7 col-md-8">
                                        <span className="text-body-capitalized color-gray-500 text-uppercase">
                                            Ready when you are
                                        </span>
                                        <h4 className="text-heading-2 mb-10 mt-10">
                                            Ready to build?
                                        </h4>
                                        <p className="text-body-text color-gray-500">
                                            Tell us what you&apos;re trying to build — we&apos;ll come back with
                                            a written scope, an AUD price and a delivery date within
                                            one business day.
                                        </p>
                                        <div className="mt-30">
                                            <Link href="/contact/" className="btn btn-black icon-arrow-right-white mr-15">
                                                Get a quote
                                            </Link>
                                            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                                className="btn btn-link icon-arrow-right color-gray-900">
                                                Book a free call
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-4 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                        <div className="block-chart shape-1">
                                            <Image width={0} height={0} sizes="100vw"
                                                style={{ width: "auto", height: "auto" }}
                                                src="/assets/imgs/template/chart.png" alt="Analytics" />
                                        </div>
                                        <Image width={0} height={0} sizes="100vw"
                                            style={{ width: "auto", height: "auto" }}
                                            className="img-responsive img-newsletter"
                                            src="/assets/imgs/template/img-newsletter.png" alt="Book a call" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
