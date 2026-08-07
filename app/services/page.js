/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout/Layout"
import Image from "next/image"
import Link from "next/link"
import { SITE } from "@/content/site"

export const metadata = {
    title: "Our Services — Web, Apps, AI & Custom Software | Build First Site",
    description:
        "Everything we build for Australian businesses — websites, mobile apps, custom software, marketing, AI automation and ongoing support. Fixed AUD pricing.",
    alternates: { canonical: "/services/" },
    openGraph: {
        title: "Our Services | Build First Site",
        description: "Web, mobile, AI and custom software for Australian businesses. Fixed AUD pricing.",
        url: "https://buildfirstsite.com/services/",
    },
}

/**
 * Six services with the icon from the Agon services/1 template
 * mapped to each. Each card links to its dedicated /services/<slug>/ page.
 */
const SERVICES = [
    {
        title: "Web Development",
        icon: "/assets/imgs/page/services/1/icon-web.svg",
        body: "Responsive, fast websites and web apps on a modern Next.js / React stack. Sites from AU$800.",
        href: "/services/web-development/",
    },
    {
        title: "Mobile App Development",
        icon: "/assets/imgs/page/services/1/icon-product.svg",
        body: "Cross-platform iOS + Android apps from a single React Native codebase — one build, two stores.",
        href: "/services/mobile-app-development/",
    },
    {
        title: "Custom Software",
        icon: "/assets/imgs/page/services/1/icon-build.svg",
        body: "Dashboards, client portals, booking systems and internal tools. The software that replaces a spreadsheet.",
        href: "/services/custom-software/",
    },
    {
        title: "Marketing & SEO",
        icon: "/assets/imgs/page/services/1/icon-share.svg",
        body: "Local SEO, Google Business Profile, content strategy and technical SEO — get found in Australian search.",
        href: "/services/marketing-seo/",
    },
    {
        title: "AI & Automation",
        icon: "/assets/imgs/page/services/1/icon-business.svg",
        body: "AI chatbots, lead qualification, workflow automation and content generation — built on OpenAI, Claude and Gemini.",
        href: "/services/ai-automation/",
    },
    {
        title: "Maintenance & Support",
        icon: "/assets/imgs/page/services/1/icon-support.svg",
        body: "Updates, monitoring, backups, security patches and content changes. From AU$250/month, no long lock-in.",
        href: "/services/maintenance-support/",
    },
]

export default function ServicesPage() {
    return (
        <Layout>

            {/* ── HERO ── */}
            <section className="section-box">
                <div className="banner-hero bg-service-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 box-banner-left">
                                <h1 className="text-display-3 mt-30">
                                    Everything we build,<br className="d-lg-block d-none" />
                                    in one place
                                </h1>
                                <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                    Websites, mobile apps, custom software, AI systems and ongoing
                                    support — delivered by a two-person studio with fixed AUD
                                    pricing and no agency layers between you and the code.
                                </p>
                                <div className="mt-40">
                                    <Link href="/contact/" className="btn btn-black shape-square icon-arrow-right-white">
                                        Get a quote
                                    </Link>
                                    <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                        className="btn btn-link icon-triangle color-gray-900 ml-40">
                                        Book a free call
                                    </a>
                                </div>
                                <div className="row mt-50">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="list-icons">
                                            <div className="item-icon none-bd">
                                                <span className="icon-left">
                                                    <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                        src="/assets/imgs/page/about/2/icon-project-done.svg" alt="Fixed pricing" />
                                                </span>
                                                <h4 className="text-heading-4">
                                                    <span className="text-heading-3 color-green-900">AUD</span>
                                                </h4>
                                                <p className="text-body-text color-gray-500">Fixed prices upfront</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="list-icons">
                                            <div className="item-icon none-bd">
                                                <span className="icon-left">
                                                    <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                        src="/assets/imgs/page/about/2/icon-officer.svg" alt="Code ownership" />
                                                </span>
                                                <h4 className="text-heading-4">
                                                    <span className="text-heading-3 color-green-900">100%</span>
                                                </h4>
                                                <p className="text-body-text color-gray-500">You own the code</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                <div className="banner-imgs">
                                    <div className="block-1 shape-2">
                                        <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                            src="/assets/imgs/page/services/1/banner-2.png" alt="Build First Site services" />
                                    </div>
                                    <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                        src="/assets/imgs/page/services/1/banner.png" alt="Build First Site services" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES GRID — click any card to open the dedicated page ── */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-12">
                            <div className="text-start mb-25">
                                <span className="tag-1 bg-6 color-green-900">What we do</span>
                            </div>
                            <h2 className="text-heading-2 color-gray-900 mb-50">
                                Six things we do,<br className="d-lg-block d-none" />
                                done properly
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container mt-20">
                    <div className="row">
                        {SERVICES.map((s) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-40" key={s.title}>
                                <Link href={s.href} className="card-service-link d-block h-100" style={{ textDecoration: 'none' }}>
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
                </div>
            </section>

            {/* ── BUILT EXCLUSIVELY FOR YOU ── */}
            <section className="section-box">
                <div className="container mt-70">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mb-30">
                            <span className="tag-1 bg-6 color-green-900">Built exclusively for you</span>
                            <h3 className="text-heading-1 mt-30">
                                From the big picture to every tiny detail, we&apos;ve got you covered.
                            </h3>
                            <p className="text-body-lead-large color-gray-600 mt-30">
                                Whether you need a landing page in a week or a full SaaS product in
                                three months, the same person builds it end-to-end. Fewer hand-offs,
                                faster changes, and a codebase you can hand to any developer on the
                                planet when the time comes.
                            </p>
                            <div className="line-bd-green mt-50" />
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                    <h4 className="text-heading-6 icon-leaf">Fixed AUD pricing</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        A written quote before any work starts. It does not move unless the scope does.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                    <h4 className="text-heading-6 icon-leaf">Modern stack</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Next.js, React, Tailwind, Node — the same tools used by large tech companies.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                    <h4 className="text-heading-6 icon-leaf">Full code handover</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Repo, hosting, domain, every account — yours on completion. No lock-in.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                    <h4 className="text-heading-6 icon-leaf">Direct line to the builder</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        No account managers relaying messages. You talk to the person writing the code.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 block-we-do">
                            <div className="inner-image">
                                <Image
                                    width={0} height={0} sizes="100vw"
                                    style={{ width: "auto", height: "auto" }}
                                    className="bdrd-16 img-responsive"
                                    src="/assets/imgs/page/homepage2/img-built.png"
                                    alt="Build First Site workflow"
                                />
                                <div className="block-image-bottom">
                                    <Image
                                        width={0} height={0} sizes="100vw"
                                        style={{ width: "auto", height: "auto" }}
                                        className="bdrd-16 img-responsive"
                                        src="/assets/imgs/page/homepage2/img-built-2.png"
                                        alt="Build First Site delivery"
                                    />
                                </div>
                            </div>
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
                                        <span className="text-body-capitalized color-gray-500 text-uppercase">Ready when you are</span>
                                        <h4 className="text-heading-2 mb-10 mt-10">
                                            Not sure which service you need?
                                        </h4>
                                        <p className="text-body-text color-gray-500">
                                            Book a free 30-minute call. We&apos;ll listen to what you&apos;re
                                            trying to do and tell you honestly which service fits — or
                                            whether a DIY builder would actually serve you better.
                                        </p>
                                        <div className="mt-30">
                                            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                                className="btn btn-black icon-arrow-right-white mr-15">
                                                Book a free call
                                            </a>
                                            <Link href="/contact/" className="btn btn-link icon-arrow-right color-gray-900">
                                                Send a message
                                            </Link>
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
