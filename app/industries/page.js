/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import Image from "next/image"
import Link from "next/link"
import { SITE } from "@/content/site"

export const metadata = {
    title: "Industries We Build For — Web & App Development Australia | Build First Site",
    description:
        "Websites and apps built for Australian industries: healthcare, real estate, trades, hospitality, education, retail, finance and startups. Fixed AUD pricing.",
    alternates: { canonical: "/industries/" },
    openGraph: {
        title: "Industries — Build First Site",
        description: "Websites and apps built for Australian industries. Fixed AUD pricing.",
        url: "https://buildfirstsite.com/industries/",
    },
}

/**
 * Eight industry cards for the project section.
 * `image` points to /public/assets/imgs/page/industries/<slug>.png — right now
 * these are stylised placeholders; drop real renders in with the same
 * filename and the page picks them up automatically.
 *
 * Card colour rotates bg-2 / bg-6 / bg-9 / bg-5 to match the Agon palette.
 */
const INDUSTRIES = [
    {
        title: "Healthcare",
        blurb: "Clinics, telehealth portals, patient booking. HIPAA-ready workflows, integrated with your PMS.",
        href: "/industries/healthcare/",
        image: "/assets/imgs/page/industries/industry-healthcare.png",
        bg: "bg-2",
        bgInner: "bg-color-1",
    },
    {
        title: "Real Estate",
        blurb: "Property listings, agent sites, buyer portals. IDX-friendly, fast image loading, lead capture.",
        href: "/industries/real-estate/",
        image: "/assets/imgs/page/industries/industry-real-estate.png",
        bg: "bg-6",
        bgInner: "bg-color-2",
    },
    {
        title: "Construction & Trades",
        blurb: "Tradie sites, quote forms, job management. Built for phone-first traffic and fast enquiries.",
        href: "/industries/construction-trades/",
        image: "/assets/imgs/page/industries/industry-construction.png",
        bg: "bg-9",
        bgInner: "bg-color-1",
    },
    {
        title: "Hospitality",
        blurb: "Restaurants, cafés and hotels. Menus, reservations, direct-booking flows that cut third-party fees.",
        href: "/industries/hospitality/",
        image: "/assets/imgs/page/industries/industry-hospitality.png",
        bg: "bg-5",
        bgInner: "bg-color-2",
    },
    {
        title: "Education",
        blurb: "Schools, courses, LMS and student portals. Enrolment forms, course catalogues, payment gateways.",
        href: "/industries/education/",
        image: "/assets/imgs/page/industries/industry-education.png",
        bg: "bg-2",
        bgInner: "bg-color-1",
    },
    {
        title: "Retail & E-Commerce",
        blurb: "Online stores with Stripe payments, inventory management and no per-sale platform fees.",
        href: "/industries/retail-ecommerce/",
        image: "/assets/imgs/page/industries/industry-retail-ecommerce.png",
        bg: "bg-6",
        bgInner: "bg-color-2",
    },
    {
        title: "Finance & Legal",
        blurb: "Compliance-ready sites for regulated industries. Client portals, secure document upload, audit trails.",
        href: "/industries/finance-legal/",
        image: "/assets/imgs/page/industries/industry-finance-legal.png",
        bg: "bg-9",
        bgInner: "bg-color-1",
    },
    {
        title: "Startups & SaaS",
        blurb: "MVPs, SaaS products, growth-stage apps. Ship fast, iterate faster, scale when the traction comes.",
        href: "/industries/startups-saas/",
        image: "/assets/imgs/page/industries/industry-startups-saas.png",
        bg: "bg-5",
        bgInner: "bg-color-2",
    },
]

/* Value strip in the "What we offer" section */
const OFFERS = [
    { title: "Industry-aware design", body: "We start every project by studying the top 5 sites in your industry. What works, what fails, what's missing." },
    { title: "AUD fixed pricing", body: "You get a written quote before any work starts. It does not move unless the scope does." },
    { title: "Modern stack", body: "Next.js, React, Tailwind, Node — the same modern stack used by large tech companies." },
    { title: "You own the code", body: "Full repo, hosting, domain, every account — yours on completion. No vendor lock-in." },
]

export default function IndustriesPage() {
    return (
        <Layout>

            {/* ── HERO with animated floating dashboard mockups ── */}
            <section className="section-box">
                <div className="banner-hero bg-service-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <span className="tag-1 bg-6 color-green-900">Industries we build for</span>
                                <h1 className="text-display-2 mt-30">
                                    Websites built for<br className="d-lg-block d-none" />
                                    <span className="color-green-900">how your industry works</span>
                                </h1>
                                <p className="text-body-lead-large color-gray-500 mt-40">
                                    Healthcare needs bookings. Trades need quote forms. Real estate
                                    needs listings. Retail needs Stripe. We&apos;ve built for all of it —
                                    and we&apos;ll bring what we&apos;ve learned to yours.
                                </p>
                                <div className="mt-40 text-center">
                                    <Link href="/contact/" className="btn btn-black icon-arrow-right-white">
                                        Get a quote
                                    </Link>
                                    <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                        className="btn btn-link icon-triangle color-gray-900 ml-40">
                                        Book a free call
                                    </a>
                                </div>
                            </div>

                            {/* Animated dashboard mockup — the whole block floats via
                                `.shape-2` (hero-thumb-sm-animation, 4s alternate). */}
                            <div className="col-lg-12 d-none d-lg-block">
                                <div className="row">
                                    <div className="col-lg-2" />
                                    <div className="col-lg-8">
                                        <div className="banner-imgs">
                                            <div className="block-1 shape-2">
                                                <Image
                                                    width={0} height={0} sizes="100vw"
                                                    style={{ width: "auto", height: "auto" }}
                                                    src="/assets/imgs/page/services/2/banner2.png"
                                                    alt="User activation stats"
                                                />
                                            </div>
                                            <div className="block-2 shape-2">
                                                <Image
                                                    width={0} height={0} sizes="100vw"
                                                    style={{ width: "auto", height: "auto" }}
                                                    src="/assets/imgs/page/services/2/banner1.png"
                                                    alt="Sketch content tracker"
                                                />
                                            </div>
                                            <div className="block-3 shape-2">
                                                <Image
                                                    width={0} height={0} sizes="100vw"
                                                    style={{ width: "auto", height: "auto" }}
                                                    src="/assets/imgs/page/services/2/banner3.png"
                                                    alt="Business feed analytics"
                                                />
                                            </div>
                                            <Image
                                                width={0} height={0} sizes="100vw"
                                                style={{ width: "auto", height: "auto" }}
                                                src="/assets/imgs/page/services/1/banner.png"
                                                alt="Industry dashboard preview"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INDUSTRIES GRID (2 per row, mockup card style) ── */}
            <section className="section-box mt-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-1 col-12" />
                        <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                            <h2 className="text-heading-1 color-gray-900 mb-10">
                                Eight industries,<br className="d-lg-block d-none" />
                                one honest studio
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Click any industry to see how we approach it, what a typical build
                                looks like, and where AUD pricing lands.
                            </p>
                        </div>
                        <div className="col-lg-2 col-sm-1 col-12" />
                    </div>
                </div>

                <div className="container mt-90 mb-100">
                    <div className="row">
                        {INDUSTRIES.map((ind) => (
                            <div className="col-lg-6 col-sm-12 mb-30" key={ind.title}>
                                <Link href={ind.href} className="d-block" style={{ textDecoration: 'none' }}>
                                    <div className={`${ind.bg} box-square hover-up h-100`}>
                                        <h4 className="text-heading-4 color-gray-900 mb-15">{ind.title}</h4>
                                        <p className="text-body-text-md color-gray-600">{ind.blurb}</p>
                                        <div className="mt-20 mb-20">
                                            <span className="text-heading-6 color-green-900">
                                                See how we build for {ind.title.toLowerCase()} →
                                            </span>
                                        </div>
                                        <div className={`box-image-inner ${ind.bgInner}`}>
                                            <Image
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: "auto", height: "auto" }}
                                                src={ind.image}
                                                alt={`${ind.title} website mockup`}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHAT WE OFFER STRIP ── */}
            <section className="section-box">
                <div className="container mt-120">
                    <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                <h2 className="text-heading-1 color-gray-900">What every build gets</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    No matter the industry, four things stay the same. This is what
                                    you get with any Build First Site project.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>

                        <div className="container mt-70">
                            <div className="row">
                                {OFFERS.map((o) => (
                                    <div className="col-lg-6 col-sm-12 mb-40" key={o.title}>
                                        <div className="p-30">
                                            <h4 className="text-heading-4 icon-leaf">{o.title}</h4>
                                            <p className="text-body-text color-gray-600 mt-15">{o.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="section-box pt-140 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-40">
                            <h3 className="text-heading-1">Frequently asked questions</h3>
                            <p className="text-body-text color-gray-600 mt-30">
                                Common questions from businesses across every industry we build for.
                            </p>
                            <div className="row">
                                <div className="col-lg-12 mt-50">
                                    <h4 className="text-heading-6 icon-leaf">Not sure which fits?</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Book a 30-minute call. We&apos;ll listen, ask questions, and tell
                                        you honestly what your industry needs — even if it&apos;s not us.
                                    </p>
                                </div>
                                <div className="col-lg-12 mt-50">
                                    <h4 className="text-heading-6 icon-leaf">Don&apos;t see your industry?</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        These 8 are the ones we&apos;ve built for most. But we&apos;ve built for
                                        others too. Tell us what you do and we&apos;ll take it from there.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-60">
                                <Link href="/contact/" className="btn btn-black icon-arrow-right-white">
                                    Contact us
                                </Link>
                                <Link href="/services/" className="btn btn-link text-heading-6">
                                    See our services
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <Accordion />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="section-box overflow-visible mb-100">
                <div className="container mt-100">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="bg-6 box-newsletter position-relative">
                                <div className="row">
                                    <div className="col-lg-7 col-md-8">
                                        <span className="text-body-capitalized color-gray-500 text-uppercase">Your industry, our next build</span>
                                        <h4 className="text-heading-2 mb-10 mt-10">
                                            Ready to see what we&apos;d build for you?
                                        </h4>
                                        <p className="text-body-text color-gray-500">
                                            Tell us about your business — we&apos;ll come back with a
                                            written scope, an AUD price and a delivery date within
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
                                            <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                src="/assets/imgs/template/chart.png" alt="Analytics" />
                                        </div>
                                        <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
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
