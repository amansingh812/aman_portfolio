/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout/Layout"
import PortfolioGallery from "@/components/portfolio/PortfolioGallery"
import Link from "next/link"
import Image from "next/image"
import { CASE_STUDIES } from "@/content/case-studies"
import { SITE } from "@/content/site"

export const metadata = {
    title: "Portfolio — Our Work",
    description:
        "Live client sites and concept builds: e-commerce, AI SaaS, real estate, hospitality and tradie websites, built by a two-person studio for Australian businesses.",
    alternates: { canonical: "/work/" },
    openGraph: {
        title: "Portfolio | Build First Site",
        description: "Live client projects and concept builds — every one open to inspect.",
        url: "https://buildfirstsite.com/work/",
    },
}

export default function WorkPage() {
    return (
        <Layout>

            {/* ── HERO — ThemeForest-style eyebrow + big headline ── */}
            <section className="section-box">
                <div className="banner-hero" style={{ padding: '90px 0 40px', background: '#E7F1FA' }}>
                    <div className="container text-center">
                        <span className="text-body-lead-large color-orange"
                            style={{ color: '#E96A3D', fontWeight: 600 }}>
                            Portfolio
                        </span>
                        <h1 className="text-display-2 mt-15" style={{ color: '#0F5E4E' }}>
                            Creative Projects
                        </h1>
                        <p className="text-body-lead-large color-gray-600 mt-30"
                            style={{ maxWidth: 720, margin: '30px auto 0' }}>
                            Real client sites and concept builds — every one is live and open
                            to inspect. Click any <strong>LIVE DEMO</strong> button to see the
                            site running in a new tab.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── GALLERY GRID (client component) ── */}
            <section className="section-box mt-70">
                <div className="container">
                    <PortfolioGallery projects={CASE_STUDIES} />
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="section-box overflow-visible mb-100 mt-70">
                <div className="container mt-100">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="bg-6 box-newsletter position-relative">
                                <div className="row">
                                    <div className="col-lg-7 col-md-8">
                                        <span className="text-body-capitalized color-gray-500 text-uppercase">
                                            Ready when you are
                                        </span>
                                        <h4 className="text-heading-2 mb-10 mt-10">
                                            Want your project on this page next?
                                        </h4>
                                        <p className="text-body-text color-gray-500">
                                            Tell us what you&apos;re building. We&apos;ll come back with a
                                            written scope + AUD price within one business day.
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
