/* eslint-disable @next/next/no-img-element */
/**
 * /industries/<slug>/ — shared template for the eight industry pages.
 * Redesigned 26 Sep 2026 on the service-page system (components/landing/ServiceKit.js).
 *
 * HONESTY (CLAUDE.md §1) — the parts of this page that exist because of it:
 * - "Our experience" section renders proof.kind exactly as recorded in
 *   content/industry-pages.js. 'none' says plainly that there is no client in
 *   this vertical; 'concept' labels the build as a concept; only 'client'
 *   shows work as client work.
 * - The old `stat` callout ("70%+ of healthcare searches happen on mobile"
 *   etc.) is gone. Every one of those numbers was unsourced.
 * - Prices resolve from content/pricing.js via the shared kit.
 */
import Layout from "@/components/layout/Layout"
import Breadcrumbs from "@/components/elements/Breadcrumbs"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CTA, SITE, INDUSTRY_ITEMS } from "@/content/site"
import { INDUSTRY_PAGES, getIndustryPage } from "@/content/industry-pages"
import { getCaseStudy } from "@/content/case-studies"
import { Icon, SVC_CSS, resolveValue, pricingCard, extraLine } from "@/components/landing/ServiceKit"

export async function generateStaticParams() {
    return INDUSTRY_PAGES.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }) {
    const { slug } = await params
    const p = getIndustryPage(slug)
    if (!p) return {}
    const canonical = p.canonicalTo || `/industries/${p.slug}/`
    return {
        // ABSOLUTE — root layout appends `| Build First Site` otherwise.
        title: { absolute: p.metaTitle },
        description: p.metaDescription,
        // canonicalTo defers to the matching commercial landing page where one
        // exists, rather than competing with ourselves.
        alternates: { canonical },
        openGraph: {
            title: p.metaTitle,
            description: p.metaDescription,
            url: `https://buildfirstsite.com${canonical}`,
            type: "website",
            locale: "en_AU",
        },
    }
}

const IND_ICON = {
    "/industries/healthcare/": "shield", "/industries/real-estate/": "home",
    "/industries/construction-trades/": "phone", "/industries/hospitality/": "calendar",
    "/industries/education/": "user", "/industries/retail-ecommerce/": "cart",
    "/industries/finance-legal/": "list", "/industries/startups-saas/": "bolt",
}

const IND_CSS = `
.ind-photo{border-radius:18px;overflow:hidden;box-shadow:0 30px 60px rgba(16,24,40,.12);margin:0}
.ind-photo img{width:100%;height:430px;object-fit:cover;display:block}
.ind-cap{font-size:13px;color:#667085;margin-top:8px}
.ind-journey{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1px solid #E4E7EC;border-radius:16px;overflow:hidden;background:#fff;margin-top:44px}
.ind-journey div{padding:22px 24px;border-right:1px solid #E4E7EC}
.ind-journey div:last-child{border-right:0}
.ind-journey small{display:block;color:#006D77;font-weight:700;font-size:13px;letter-spacing:.06em;text-transform:uppercase}
.ind-journey b{display:block;color:#101828;font-size:18px;margin-top:6px}
.ind-journey span{color:#667085;font-size:14.5px}
.ind-proof{border-radius:20px;border:1px solid #E4E7EC;background:#fff;padding:40px;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
.ind-proof.none{grid-template-columns:1fr;max-width:860px;margin:0 auto;text-align:center}
.ind-proof img{width:100%;height:300px;object-fit:cover;object-position:top;border-radius:14px;border:1px solid #E4E7EC;display:block;background:#fff}
.ind-proof-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px}
.ind-badge{display:inline-block;font-size:13px;font-weight:600;padding:6px 14px;border-radius:99px}
.ind-badge.client{background:#DBECE5;color:#00545C}
.ind-badge.concept{background:#FFF3EA;color:#B4461A}
.ind-badge.none{background:#F2F4F7;color:#344054}
@media(max-width:991px){.ind-journey{grid-template-columns:1fr 1fr}.ind-proof{grid-template-columns:1fr;padding:28px}.ind-photo img{height:300px}}
`

export default async function IndustryDetailPage({ params }) {
    const { slug } = await params
    const p = getIndustryPage(slug)
    if (!p) notFound()

    const url = `https://buildfirstsite.com${p.canonicalTo || `/industries/${p.slug}/`}`
    const proofWork = (p.proof?.slugs || []).map(getCaseStudy).filter(Boolean)
    const kind = p.proof?.kind || "none"
    const cards = (p.pricing || []).map(pricingCard).filter(Boolean)
    const extras = (p.pricingExtras || []).map(extraLine).filter(Boolean)
    const others = INDUSTRY_ITEMS.filter((i) => i.href !== `/industries/${p.slug}/`)

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `https://buildfirstsite.com/industries/${p.slug}/#service`,
            name: `${p.h1} ${p.h1Accent}`,
            serviceType: `${p.title} web development`,
            description: p.metaDescription,
            url,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: { "@type": "Country", name: "Australia" },
            audience: { "@type": "BusinessAudience", name: p.title },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "Industries", item: "https://buildfirstsite.com/industries/" },
                { "@type": "ListItem", position: 3, name: p.title, item: `https://buildfirstsite.com/industries/${p.slug}/` },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
    ]

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: SVC_CSS + IND_CSS }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="svc">
                {/* 1. HERO — copy left, industry photo right */}
                <section className="svc-hero">
                    <div className="container">
                        <Breadcrumbs items={[{ name: "Industries", href: "/industries/" }, { name: p.title }]} />
                        <div className="svc-hero-grid">
                            <div>
                                <span className="tag-1">{p.eyebrow}</span>
                                <h1>{p.h1} <span>{p.h1Accent}</span></h1>
                                <p className="svc-lead" style={{ marginTop: 22 }}>{p.hero}</p>
                                <div className="svc-ctas">
                                    <Link href={CTA.primary.href} className="btn btn-black icon-arrow-right-white">Get a fixed quote</Link>
                                    <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" data-loc={`industry-${p.slug}-hero`}
                                        className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">Book a free call</a>
                                </div>
                                <div className="svc-chips">
                                    {p.chips.map((c, i) => (
                                        <span className="svc-chip" key={i}>
                                            {c.pre ? `${c.pre} ` : ""}<b>{resolveValue(c.value)}</b>{c.post ? ` ${c.post}` : ""}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {p.contextImage && (
                                <figure className="ind-photo d-none d-lg-block">
                                    <img src={p.contextImage.src} alt={p.contextImage.alt} width={1400} height={930} fetchPriority="high" />
                                    <figcaption className="ind-cap">Illustrative photo · Unsplash</figcaption>
                                </figure>
                            )}
                        </div>
                        {p.journey?.length > 0 && (
                            <div className="ind-journey">
                                {p.journey.map((j, i) => (
                                    <div key={j.t}><small>Step {i + 1}</small><b>{j.t}</b><span>{j.s}</span></div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* 2. WHAT YOU NEED */}
                <section className="svc-sec">
                    <div className="container">
                        <div className="svc-center">
                            <h2 className="svc-h2">What {p.title.toLowerCase()} businesses need from a website</h2>
                            <p className="svc-lead">{p.intro}</p>
                        </div>
                        <div className="svc-cards">
                            {p.needs.map((n) => (
                                <div className="svc-card" key={n.title}>
                                    <div className="svc-ico"><Icon name={n.icon} /></div>
                                    <h3>{n.title}</h3>
                                    <p>{n.body}</p>
                                    {n.href && <Link href={n.href} className="svc-more">{n.link} →</Link>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. OUR EXPERIENCE — stated exactly as it is */}
                <section className="svc-sec svc-mint">
                    <div className="container">
                        <div className="svc-center" style={{ marginBottom: 44 }}>
                            <h2 className="svc-h2">Our experience in {p.title.toLowerCase()}</h2>
                        </div>
                        {kind === "none" || proofWork.length === 0 ? (
                            <div className="ind-proof none">
                                <div>
                                    <span className="ind-badge none">No {p.title.toLowerCase()} client yet</span>
                                    <p className="svc-lead" style={{ margin: "18px auto 0" }}>{p.proof?.note}</p>
                                    <div className="svc-inline-links">
                                        <Link href="/work/">See the work we have shipped</Link>
                                        <Link href="/about/">About us</Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="ind-proof">
                                <div>
                                    <span className={`ind-badge ${kind}`}>{kind === "concept" ? "Concept build, not client work" : "Client work"}</span>
                                    <p className="svc-lead" style={{ marginTop: 18 }}>{p.proof.note}</p>
                                    <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
                                        {proofWork.map((w) => (
                                            <Link key={w.slug} href={`/work/${w.slug}/`} className="btn btn-black icon-arrow-right-white">
                                                {kind === "concept" ? `See the ${w.name} concept` : `${w.name} case study`}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="ind-proof-grid">
                                    {proofWork.map((w) => (
                                        <Link key={w.slug} href={`/work/${w.slug}/`}>
                                            <img src={w.image} alt={`${w.name}${kind === "concept" ? " concept build" : " website"} by Build First Site`}
                                                width={1200} height={900} loading="lazy" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* 4. PRICING */}
                {cards.length > 0 && (
                    <section className="svc-pricing">
                        <div className="container">
                            <div className="svc-center">
                                <h2 className="svc-h2">Fixed AUD pricing for {p.title.toLowerCase()}</h2>
                                <p className="svc-lead">The price in your quote is the price you pay unless the scope changes.</p>
                            </div>
                            <div className="svc-tiers">
                                {cards.map((c) => (
                                    <div className={`svc-tier${c.featured ? " feat" : ""}`} key={c.key}>
                                        {c.featured && <span className="svc-badge">Most popular</span>}
                                        <h3>{c.name}</h3>
                                        <div className="scope">{c.scope}</div>
                                        <div className="svc-price">{c.price} <small>AUD{c.per ? ` ${c.per}` : ""}</small></div>
                                        <ul>{c.lines.map((l) => <li key={l}>{l}</li>)}</ul>
                                        {c.note && <p className="note">{c.note}</p>}
                                        <Link href={CTA.primary.href} className={`btn ${c.featured ? "btn-black" : "btn-default"} w-100 text-center`} style={{ justifyContent: "center" }}>Get a quote</Link>
                                    </div>
                                ))}
                            </div>
                            {extras.length > 0 && (
                                <div className="svc-extras">{extras.map((e) => <div key={e.label}><b>{e.value}</b>{e.label}</div>)}</div>
                            )}
                            <p className="svc-pnote">Prices exclude GST.
                                <Link href="/pricing/">All packages and add-ons →</Link>
                                <Link href="/how-much-does-a-website-cost-australia/">What a website costs →</Link>
                            </p>
                        </div>
                    </section>
                )}

                {/* 5. FAQ */}
                <section className="svc-sec">
                    <div className="container svc-faq">
                        <div>
                            <h2 className="svc-h2">{p.title} website questions</h2>
                            <p className="svc-lead" style={{ marginTop: 14 }}>
                                Something else? <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" data-loc={`industry-${p.slug}-faq`} style={{ color: "#006D77" }}>Book a free call</a> and ask the engineer directly.
                            </p>
                        </div>
                        <div>
                            {p.faqs.map((f, i) => (
                                <details key={f.q} open={i === 0}>
                                    <summary>{f.q}</summary>
                                    <p>{f.a}{f.href && <> <Link href={f.href} style={{ color: "#006D77" }}>{f.link} →</Link></>}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. GUIDES + OTHER INDUSTRIES */}
                <section className="svc-sec svc-mint">
                    <div className="container">
                        <div className="svc-center"><h2 className="svc-h2">Read before you decide</h2></div>
                        <div className="svc-guides">
                            {p.guides.map((g) => (
                                <Link className="svc-guide" key={g.href} href={g.href}><span>{g.tag}</span><h4>{g.title}</h4></Link>
                            ))}
                        </div>
                        <h3 className="svc-center" style={{ fontSize: 24, marginTop: 70 }}>Other industries</h3>
                        <div className="svc-others">
                            {others.map((o) => (
                                <Link className="svc-other" key={o.href} href={o.href}>
                                    <div className="svc-ico" style={{ margin: 0, flexShrink: 0 }}><Icon name={IND_ICON[o.href]} /></div>
                                    <div><h4>{o.label}</h4><p>{o.desc}</p></div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. CTA */}
                <section className="svc-sec">
                    <div className="container">
                        <div className="svc-cta">
                            <div>
                                <h2>Tell us about your {p.title.toLowerCase()} project</h2>
                                <p>You’ll get a written scope and fixed AUD quote within 24 hours, and you deal directly with the engineer who builds it.</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                <Link href={CTA.primary.href} className="svc-btn-white">Get a quote →</Link>
                                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" data-loc={`industry-${p.slug}-cta`} className="svc-btn-outline">Book a free call</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
