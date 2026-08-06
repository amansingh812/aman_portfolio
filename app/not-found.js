/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout/Layout"
import Image from "next/image"
import Link from "next/link"

/**
 * Global 404 handler.
 * Uses the Agon 404 template. Renders inside <Layout> so the header, footer
 * and dropdowns stay usable — critical because most 404 visits are typos.
 */
export const metadata = {
    title: "Page not found (404) | Build First Site",
    description: "The page you're looking for doesn't exist. Head back to the homepage or explore our services and case studies.",
    robots: { index: false, follow: false },
}

const QUICK_LINKS = [
    { label: "Homepage",   href: "/" },
    { label: "Services",   href: "/services/" },
    { label: "Industries", href: "/industries/" },
    { label: "Portfolio",  href: "/work/" },
    { label: "Blog",       href: "/blog/" },
    { label: "Contact",    href: "/contact/" },
]

export default function NotFound() {
    return (
        <Layout>
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mt-40">
                            <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "auto", height: "auto", maxWidth: 640, margin: "0 auto" }}
                                className="img-responsive"
                                src="/assets/imgs/template/404.png"
                                alt="Page not found"
                            />
                            <h2 className="text-heading-1 color-gray-900 mb-20 mt-50">
                                Whoops! That page doesn&apos;t exist.
                            </h2>
                            <p className="text-heading-5 color-gray-600 mt-30 mb-50">
                                The page you requested could not be found — it may have moved,
                                been renamed, or never existed.
                            </p>

                            {/* Quick links so 99% of typos still land somewhere useful */}
                            <div className="mb-50">
                                {QUICK_LINKS.map((l) => (
                                    <Link key={l.href} href={l.href} className="btn btn-tag mr-10 mb-10">
                                        {l.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="text-center mb-100">
                                <Link href="/" className="btn btn-black icon-arrow-left mr-15">
                                    Back to homepage
                                </Link>
                                <Link href="/contact/" className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
