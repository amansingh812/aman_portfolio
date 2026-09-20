import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { CTA, SERVICE_ITEMS } from "@/content/site";
import { INDUSTRY_PAGES, getIndustryPage } from "@/content/industry-pages";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return INDUSTRY_PAGES.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const p = getIndustryPage(slug);
    if (!p) return {};
    const canonical = p.canonicalTo || `/industries/${p.slug}/`
    return {
        // ABSOLUTE — the root layout applies `%s | Build First Site`. Left as
        // a plain string, all 8 industry titles rendered at 85-97 characters,
        // past the point Google truncates, and `startups-saas` (whose metaTitle
        // already ended in the brand) rendered it twice. This is the same fix
        // already applied to blog, guides and landing pages; industries were
        // missed.
        title: { absolute: p.metaTitle },
        description: p.metaDescription,
        // `canonicalTo` defers to the matching commercial landing page where
        // one exists — Google already treats these as duplicates and picks the
        // landing page, so we declare that rather than compete with ourselves.
        alternates: { canonical },
        // Without this block every industry page inherited the ROOT layout's
        // openGraph, so a shared link previewed as the generic site card and
        // carried `og:url = https://buildfirstsite.com/` — pointing at the
        // homepage rather than the page being shared. Verified live on
        // /industries/real-estate/ before fixing.
        //
        // og:url matches the canonical, not the request URL: where a page
        // defers via canonicalTo, the shared link should resolve to the page we
        // actually want ranked.
        openGraph: {
            title: p.metaTitle,
            description: p.metaDescription,
            url: `https://buildfirstsite.com${canonical}`,
            type: "website",
            locale: "en_AU",
        },
    };
}

export default async function IndustryDetailPage({ params }) {
    const { slug } = await params;
    const p = getIndustryPage(slug);
    if (!p) notFound();

    const related = SERVICE_ITEMS.filter((si) =>
        p.relatedServices?.some((rs) => si.label === rs)
    );

    return (
        <Layout>
            {/* Hero */}
            <section className="section-box">
                <div className="banner-hero banner-breadcrumbs">
                    <div className="container text-center">
                        <span className="tag-1">{p.title}</span>
                        <h1 className="text-display-2 mt-20">{p.hero}</h1>
                        <p className="text-body-lead-large color-gray-500 mt-20" style={{ maxWidth: 640, margin: '20px auto 0' }}>
                            {p.intro}
                        </p>
                        <div className="mt-40">
                            <Link href={CTA.primary.href} className="btn btn-black icon-arrow-right-white mr-10">
                                {CTA.primary.label}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stat callout */}
            {p.stat && (
                <section className="section-box mt-70">
                    <div className="container text-center">
                        <div className="card-grid-1 bg-5" style={{ padding: '30px', maxWidth: 600, margin: '0 auto' }}>
                            <p className="text-heading-3 color-green-900">{p.stat}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* What you need */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-heading-1 color-gray-900">What {p.title.toLowerCase()} businesses need</h2>
                        </div>
                    </div>
                    <div className="row mt-70">
                        {p.needs.map((n) => (
                            <div className="col-lg-4 col-md-6 mb-30" key={n.title}>
                                <div className="card-grid-1 bg-5 hover-up h-100">
                                    <h3 className="text-heading-4">{n.title}</h3>
                                    <p className="text-body-excerpt color-gray-600 mt-10">{n.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related services */}
            {related.length > 0 && (
                <section className="section-box section-green mt-100">
                    <div className="container pt-70 pb-70">
                        <h2 className="text-heading-2 color-gray-900 text-center">Related services</h2>
                        <div className="row mt-50 justify-content-center">
                            {related.map((rs) => (
                                <div className="col-lg-4 col-md-6 mb-30" key={rs.label}>
                                    <Link href={rs.href} className="card-grid-1 bg-5 hover-up d-block h-100 text-center" style={{ background: '#fff' }}>
                                        <span style={{ fontSize: 40 }}>{rs.icon}</span>
                                        <h3 className="text-heading-4 mt-15">{rs.label}</h3>
                                        <p className="text-body-text color-gray-600 mt-10">{rs.desc}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section-box mt-100">
                <div className="container text-center pb-70">
                    <h2 className="text-heading-1 color-gray-900">Let&apos;s build yours</h2>
                    <p className="text-body-lead-large color-gray-600 mt-20">
                        Tell us about your {p.title.toLowerCase()} project — we&apos;ll reply with a
                        fixed quote within 24 hours.
                    </p>
                    <div className="mt-40">
                        <Link href={CTA.primary.href} className="btn btn-black icon-arrow-right-white mr-10">
                            {CTA.primary.label}
                        </Link>
                        <a href={CTA.secondary.href} className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                            {CTA.secondary.label}
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
