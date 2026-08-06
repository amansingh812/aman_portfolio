/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout/Layout"
import ContactPageForm from "@/components/elements/ContactPageForm"
import Image from "next/image"
import Link from "next/link"
import { SITE } from "@/content/site"

export const metadata = {
    title: "Contact Us — Fixed AUD Quote in 24 Hours | Build First Site",
    description:
        "Tell us what you're building. We reply with a fixed AUD quote in one business day. Or book a free 30-minute call — no obligation.",
    alternates: { canonical: "/contact/" },
    openGraph: {
        title: "Contact Build First Site",
        description: "Get a fixed AUD quote in one business day, or book a free call.",
        url: "https://buildfirstsite.com/contact/",
    },
}

/* Three ways to reach us — email, Australia phone, WhatsApp / Calendly.
   No invented office addresses. Just the real contact points we use. */
const REACH = [
    {
        icon: "/assets/imgs/page/homepage2/icon-acquis.svg",
        title: "Email",
        lines: [
            "Best for detailed briefs, files or long-form questions.",
            SITE.email,
            "Reply within one business day.",
        ],
        action: `mailto:${SITE.email}`,
        actionLabel: "Send an email",
    },
    {
        icon: "/assets/imgs/page/homepage2/icon-active.svg",
        title: "Phone (Australia)",
        lines: [
            "Speak directly to our Australian contact.",
            SITE.phone,
            "AEST business hours, Mon–Fri.",
        ],
        action: `tel:${SITE.phone.replace(/\s+/g, "")}`,
        actionLabel: "Call now",
    },
    {
        icon: "/assets/imgs/page/homepage2/icon-retent.svg",
        title: "Book a call",
        lines: [
            "A free 30-minute call to discuss your project.",
            "No obligation, no sales pitch.",
            "Pick any time on the calendar.",
        ],
        action: SITE.calendly,
        actionLabel: "Book on Calendly",
        external: true,
    },
]

export default function ContactPage() {
    return (
        <Layout>

            {/* ── HERO ── */}
            <section className="section-box">
                <div className="banner-hero banner-breadcrums">
                    <div className="container text-center">
                        <h1 className="text-heading-2 color-gray-1000 mb-20">Contact Us</h1>
                        <p className="text-body-text color-gray-500">
                            Tell us what you&apos;re trying to build. We&apos;ll come back with a
                            <br className="d-lg-block d-none" />
                            written scope + fixed AUD price within one business day.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── PROJECT FORM SECTION ── */}
            <section className="section-box">
                <div className="container mb-20 mt-140">
                    <div className="bdrd-58 box-gray-100 icon-wave">
                        <div className="row">
                            <div className="col-lg-12 mb-60">
                                <span className="text-body-capitalized text-uppercase">Get a quote</span>
                                <h2 className="text-heading-3 color-gray-900 mt-10">Have a project in mind?</h2>
                                <p className="text-body-text color-gray-600 mt-20">
                                    The right build at the right price saves you months of headache.
                                    <br className="d-lg-block d-none" />
                                    Share your idea below — we&apos;ll turn it into a fixed AUD quote.
                                </p>
                            </div>

                            <div className="col-lg-4 mb-40">
                                <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                                    Build First Site
                                </h4>
                                <p className="text-body-text color-gray-600">
                                    Australia (local contact)
                                </p>
                                <p className="text-body-text color-gray-600">
                                    <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} style={{ color: 'inherit' }}>
                                        {SITE.phone}
                                    </a>
                                </p>
                                <p className="text-body-text color-gray-600">
                                    <a href={`mailto:${SITE.email}`} style={{ color: 'inherit' }}>
                                        {SITE.email}
                                    </a>
                                </p>
                                <p className="text-body-text color-gray-600 mt-15">
                                    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                                        style={{ color: 'inherit', fontWeight: 500 }}>
                                        WhatsApp us →
                                    </a>
                                </p>
                            </div>

                            <ContactPageForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THREE WAYS TO REACH US ── */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                            <h2 className="text-heading-1 color-gray-900 mb-20">Three ways to reach us</h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Prefer email, phone, or a quick call? Pick whatever suits you —
                                <br className="d-lg-block d-none" />
                                it&apos;s the same two people either way.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-100">
                    <div className="row">
                        {REACH.map((r) => (
                            <div className="col-lg-4 col-md-12 col-sm-12 mb-30" key={r.title}>
                                <div className="list-icons hover-up h-100">
                                    <div className="item-icon">
                                        <span className="icon-left">
                                            <Image
                                                width={0} height={0} sizes="100vw"
                                                style={{ width: "auto", height: "auto" }}
                                                src={r.icon}
                                                alt={r.title}
                                            />
                                        </span>
                                        <h4 className="text-heading-4">{r.title}</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">
                                            {r.lines.map((line, i) => (
                                                <span key={i}>
                                                    {line}
                                                    {i < r.lines.length - 1 && <br />}
                                                </span>
                                            ))}
                                        </p>
                                        <div className="mt-20">
                                            <a href={r.action}
                                                target={r.external ? "_blank" : undefined}
                                                rel={r.external ? "noopener noreferrer" : undefined}
                                                className="btn btn-link icon-arrow-right color-green-900 text-heading-6 p-0">
                                                {r.actionLabel}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHAT HAPPENS NEXT ── */}
            <section className="section-box mt-100 mb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <span className="tag-1 bg-6 color-green-900">What happens next</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20 mb-20">
                                Three steps, one business day
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-60">
                        {[
                            { n: "01", h: "We read your message", b: "Usually within a few hours, always within one business day." },
                            { n: "02", h: "We reply with a written quote", b: "Fixed AUD price, clear scope, delivery date. No hourly rates, no surprises." },
                            { n: "03", h: "You decide", b: "No pressure, no follow-up calls. Say yes and we start — say no and that's fine too." },
                        ].map((s) => (
                            <div className="col-lg-4 col-md-6 mb-30" key={s.n}>
                                <div className="text-center p-30">
                                    <span className="text-display-3 color-green-900">{s.n}</span>
                                    <h4 className="text-heading-4 mt-15">{s.h}</h4>
                                    <p className="text-body-text color-gray-600 mt-10">{s.b}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </Layout>
    )
}
