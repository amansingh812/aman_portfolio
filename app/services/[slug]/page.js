import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { CTA, SERVICE_ITEMS } from "@/content/site";
import { SERVICE_PAGES, getServicePage } from "@/content/service-pages";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const s = getServicePage(slug);
    if (!s) return {};
    return {
        title: s.metaTitle,
        description: s.metaDescription,
        alternates: { canonical: `/services/${s.slug}/` },
    };
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const s = getServicePage(slug);
    if (!s) notFound();

    const otherServices = SERVICE_ITEMS.filter(
        (si) => !si.href.includes(s.slug)
    ).slice(0, 3);

    return (
        <Layout>
            {/* Hero */}
            <section className="section-box">
                <div className="banner-hero banner-breadcrumbs">
                    <div className="container text-center">
                        <span className="tag-1">{s.title}</span>
                        <h1 className="text-display-2 mt-20">{s.hero}</h1>
                        <p className="text-body-lead-large color-gray-500 mt-20" style={{ maxWidth: 640, margin: '20px auto 0' }}>
                            {s.intro}
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
                </div>
            </section>

            {/* Capabilities */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-heading-1 color-gray-900">What we deliver</h2>
                        </div>
                    </div>
                    <div className="row mt-70">
                        {s.capabilities.map((c) => (
                            <div className="col-lg-4 col-md-6 mb-30" key={c.title}>
                                <div className="card-grid-1 bg-5 hover-up h-100">
                                    <h3 className="text-heading-4">{c.title}</h3>
                                    <p className="text-body-excerpt color-gray-600 mt-10">{c.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            {s.pricing && s.pricing.length > 0 && (
                <section className="section-box section-green mt-100">
                    <div className="container pt-70 pb-70">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-heading-1 color-gray-900">Pricing</h2>
                                <p className="text-body-lead-large color-gray-600 mt-15">
                                    Fixed AUD prices. No surprises.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-70 justify-content-center">
                            {s.pricing.map((p) => (
                                <div className="col-lg-4 col-md-6 mb-30" key={p.tier}>
                                    <div className="card-grid-1 bg-5 hover-up h-100 text-center" style={{ padding: '40px 30px', background: '#fff' }}>
                                        <h3 className="text-heading-4">{p.tier}</h3>
                                        <p className="text-display-3 color-green-900 mt-15">{p.price}</p>
                                        <p className="text-body-text color-gray-500 mt-10">{p.timeline}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ */}
            {s.faqs && s.faqs.length > 0 && (
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <h2 className="text-heading-1 color-gray-900">FAQ</h2>
                            </div>
                            <div className="col-lg-7 offset-lg-1">
                                {s.faqs.map((f) => (
                                    <details key={f.q} className="mb-15" style={{ borderTop: '1px solid #ececee', padding: '22px 0' }}>
                                        <summary className="text-heading-4" style={{ cursor: 'pointer', listStyle: 'none' }}>{f.q}</summary>
                                        <p className="text-body-excerpt color-gray-600 mt-15">{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Other services */}
            <section className="section-box mt-100">
                <div className="container">
                    <h2 className="text-heading-2 color-gray-900 text-center">Other services</h2>
                    <div className="row mt-50 justify-content-center">
                        {otherServices.map((os) => (
                            <div className="col-lg-4 col-md-6 mb-30" key={os.label}>
                                <Link href={os.href} className="card-grid-1 bg-5 hover-up d-block h-100 text-center">
                                    <span style={{ fontSize: 40 }}>{os.icon}</span>
                                    <h3 className="text-heading-4 mt-15">{os.label}</h3>
                                    <p className="text-body-text color-gray-600 mt-10">{os.desc}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-box section-green mt-100">
                <div className="container pt-70 pb-70 text-center">
                    <h2 className="text-heading-1 color-gray-900">Ready to start?</h2>
                    <p className="text-body-lead-large color-gray-600 mt-20">
                        Tell us what you need — fixed quote within 24 hours.
                    </p>
                    <div className="mt-40">
                        <Link href={CTA.primary.href} className="btn btn-black icon-arrow-right-white mr-10">
                            {CTA.primary.label}
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
