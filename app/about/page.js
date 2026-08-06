/* eslint-disable @next/next/no-img-element */
import Accordion from "@/components/elements/Accordion"
import AboutContactForm from "@/components/elements/AboutContactForm"
import Layout from "@/components/layout/Layout"
import Image from "next/image"
import Link from "next/link"
import { CTA, SITE } from "@/content/site"
import { BLOG_POSTS } from "@/content/blog"

export const metadata = {
    title: "About Us — Two-Person Studio Building for Australia | Build First Site",
    description:
        "An engineer in India, a local contact in Australia. Direct access to the person writing your code, fixed AUD pricing, no agency layers. See how we work.",
    alternates: { canonical: "/about/" },
    openGraph: {
        title: "About Build First Site — A Two-Person Web Studio",
        description: "Fixed prices in AUD, modern Next.js builds, you own the code. Meet the studio.",
        url: "https://buildfirstsite.com/about/",
    },
}

export default function AboutPage() {
    const posts = BLOG_POSTS.slice(0, 3)

    return (
        <Layout>

            {/* ── 1. HERO ── */}
            <section className="section-box">
                <div className="banner-hero bg-about-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 box-banner-left">
                                <span className="tag-1 bg-6 color-green-900">Who we are &amp; what you get</span>
                                <h1 className="text-display-3 mt-30">
                                    Two people.<br />
                                    One studio.<br />
                                    Built for Australia.
                                </h1>
                                <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                    An engineer in India who builds everything, and a local contact
                                    in Australia who handles calls and paperwork. No layers, no
                                    middlemen — fixed prices in AUD and you own the code.
                                </p>
                                <div className="mt-40">
                                    <Link href="/work/" className="btn btn-black shape-square icon-arrow-right-white">
                                        See our work
                                    </Link>
                                    <Link href="/contact/" className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">
                                        Contact us
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="banner-imgs">
                                    <div className="block-1 shape-2">
                                        <Image
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: "auto", height: "auto" }}
                                            src="/assets/imgs/page/about/2/banner.png"
                                            alt="Build First Site — web development studio"
                                        />
                                    </div>
                                    <div className="float-end col-lg-6 mt-90">
                                        <div className="list-icons mt-50">
                                            <div className="item-icon none-bd">
                                                <span className="icon-left">
                                                    <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                        src="/assets/imgs/page/about/2/icon-project-done.svg" alt="Fixed pricing icon" />
                                                </span>
                                                <h4 className="text-heading-4">
                                                    <span className="text-heading-3 color-green-900">AUD</span>
                                                </h4>
                                                <p className="text-body-text color-gray-500">Fixed prices upfront</p>
                                            </div>
                                            <div className="item-icon none-bd">
                                                <span className="icon-left">
                                                    <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                        src="/assets/imgs/page/about/2/icon-officer.svg" alt="Code ownership icon" />
                                                </span>
                                                <h4 className="text-heading-4">
                                                    <span className="text-heading-3 color-green-900">100%</span>
                                                </h4>
                                                <p className="text-body-text color-gray-500">You own the code</p>
                                            </div>
                                            <div className="item-icon none-bd">
                                                <span className="icon-left">
                                                    <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                        src="/assets/imgs/page/about/2/icon-constant.svg" alt="Direct access icon" />
                                                </span>
                                                <h4 className="text-heading-4">
                                                    <span className="text-heading-3 color-green-900">1:1</span>
                                                </h4>
                                                <p className="text-body-text color-gray-500">Direct access to the builder</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. HOW IT WORKS ── */}
            <section className="section-box mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-sm-1 col-12" />
                        <div className="col-lg-10 col-sm-10 col-12 text-center">
                            <div className="text-center mb-20"><span className="tag-1">How it works</span></div>
                            <h2 className="text-display-3 color-gray-900 mb-60">
                                From first call to<br className="d-lg-block d-none" />live website
                            </h2>
                        </div>
                        <div className="col-lg-1 col-sm-1 col-12" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-sm-12 col-12" />
                        <div className="col-lg-10 col-sm-12 col-12">
                            <ul className="list-steps">
                                <li className="icon-asset1">
                                    <div className="text-center block-step">
                                        <div className="mb-30">
                                            <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                src="/assets/imgs/page/about/2/icon-start-plan.svg" alt="Free call" />
                                        </div>
                                        <h3 className="text-heading-5 mb-10">Free Call</h3>
                                        <p className="text-body-text color-gray-500">30 min — understand your goals</p>
                                    </div>
                                </li>
                                <li className="icon-asset2">
                                    <div className="text-center block-step">
                                        <div className="mb-30">
                                            <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                src="/assets/imgs/page/about/2/icon-connect.svg" alt="Fixed quote" />
                                        </div>
                                        <h3 className="text-heading-5 mb-10">Fixed Quote</h3>
                                        <p className="text-body-text color-gray-500">Written scope + AUD price in 24 h</p>
                                    </div>
                                </li>
                                <li className="icon-asset3">
                                    <div className="text-center block-step bg-5">
                                        <div className="mb-30">
                                            <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                src="/assets/imgs/page/about/2/icon-match.svg" alt="Build in the open" />
                                        </div>
                                        <h3 className="text-heading-5 mb-10">Build Open</h3>
                                        <p className="text-body-text color-gray-500">Live staging link from week one</p>
                                    </div>
                                </li>
                                <li className="icon-asset4">
                                    <div className="text-center block-step bg-5">
                                        <div className="mb-30">
                                            <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                src="/assets/imgs/page/about/2/icon-complete.svg" alt="Review and feedback" />
                                        </div>
                                        <h3 className="text-heading-5 mb-10">Review</h3>
                                        <p className="text-body-text color-gray-500">Feedback rounds until it is right</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-center block-step bg-9">
                                        <div className="mb-30">
                                            <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                src="/assets/imgs/page/about/2/icon-review.svg" alt="Launch and handover" />
                                        </div>
                                        <h3 className="text-heading-5 mb-10">Launch</h3>
                                        <p className="text-body-text color-gray-500">Deploy + hand over everything</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-1 col-sm-12 col-12" />
                    </div>
                </div>
            </section>

            {/* ── 3. GREEN SECTION — Our approach ── */}
            <section className="section-box mt-100 bg-green-900 pt-90 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-12 block-gallery-1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                        className="img-responsive mb-10"
                                        src="/assets/imgs/page/about/2/img-2.png" alt="Build First Site team at work" />
                                    <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                        className="img-responsive"
                                        src="/assets/imgs/page/about/2/img-3.png" alt="Code on screen" />
                                </div>
                                <div className="col-lg-6">
                                    <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                        className="img-responsive"
                                        src="/assets/imgs/page/about/2/img-1.png" alt="Website design process" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-12 block-pl">
                            <h2 className="text-heading-1 color-white mb-30 mt-20">
                                Our honest approach to working together
                            </h2>
                            <p className="text-inter-lg">
                                Most offshore studios present as local agencies — inflated team
                                pages, impossible statistics, and an account manager standing
                                between you and the code. We do the opposite: publish our prices,
                                introduce you to the engineer, and hand over everything when we
                                are done. Being verifiably real is the differentiator.
                            </p>
                            <div className="mt-30">
                                <Link href="/work/" className="btn btn-black text-body-text">
                                    See our portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. BLOG — Latest articles ── */}
            <section className="section-box">
                <div className="container mt-100">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3 className="text-heading-1 mb-10">Latest from the blog</h3>
                            <p className="text-body-lead-large color-gray-600">Practical advice for Australian small businesses</p>
                        </div>
                        <div className="col-lg-4 text-lg-end text-start pt-30">
                            <Link href="/blog/" className="btn btn-black icon-arrow-right-white">View all posts</Link>
                        </div>
                    </div>
                </div>
                <div className="container mt-90">
                    <div className="row">
                        {posts.map((post, i) => (
                            <div className="col-lg-4 col-sm-12 pr-30" key={post.slug}>
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">{post.category}</span>
                                    <Link href={post.href} className="text-heading-4">{post.title}</Link>
                                    <div className={`grid-4-img${i === 2 ? ' color-bg-4' : ''}`}>
                                        <Link href={post.href}>
                                            <Image
                                                width={0} height={0} sizes="100vw"
                                                style={{ width: "100%", height: "auto" }}
                                                src={`/assets/imgs/page/homepage1/img-news-${i + 1}.png`}
                                                alt={post.title}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. FAQ ── */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-1 col-12" />
                        <div className="col-lg-8 col-sm-10 col-12 text-center">
                            <h2 className="text-heading-1 color-gray-900">Frequently asked questions</h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Common questions about working with Build First Site
                            </p>
                        </div>
                        <div className="col-lg-2 col-sm-1 col-12" />
                    </div>
                </div>
                <div className="container mt-70">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-4 mb-50">
                                    <h4 className="text-heading-6 icon-leaf">Fixed pricing</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        A written AUD quote before any work starts. No surprises.
                                    </p>
                                </div>
                                <div className="col-lg-4 mb-50">
                                    <h4 className="text-heading-6 icon-leaf">You own the code</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Full repo and every account handed over on launch. No lock-in.
                                    </p>
                                </div>
                                <div className="col-lg-4 mb-50">
                                    <h4 className="text-heading-6 icon-leaf">Local AU contact</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Calls and meetings in your timezone. The builder is one message away.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt-50">
                                    <Accordion />
                                    <div className="mt-100 text-center">
                                        <Link href="/contact/" className="btn btn-green-900 icon-arrow-right-white text-heading-6 color-white">
                                            Get a quote
                                        </Link>
                                        <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                            className="btn btn-link text-heading-6">
                                            Book a free call
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                    </div>
                </div>
            </section>

            {/* ── 6. CONTACT FORM ── */}
            <section className="section-box box-gray-100 mt-120 mb-20">
                <div className="container">
                    <div className="icon-wave">
                        <div className="row">
                            <div className="col-lg-12 mb-60">
                                <span className="text-body-capitalized text-uppercase">Contact us</span>
                                <h2 className="text-heading-3 color-gray-900 mt-10">Have a project in mind?</h2>
                                <p className="text-body-text color-gray-600 mt-20">
                                    Tell us what you need — we will reply within one business day.
                                </p>
                            </div>
                            <div className="col-lg-4 mb-40">
                                <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Build First Site</h4>
                                <p className="text-body-text color-gray-600">Australia (local contact)</p>
                                <p className="text-body-text color-gray-600">{SITE.phone}</p>
                                <p className="text-body-text color-gray-600">{SITE.email}</p>
                            </div>
                            <AboutContactForm />
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
