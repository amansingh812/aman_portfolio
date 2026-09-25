/* eslint-disable @next/next/no-img-element */
/**
 * /services/<slug>/ — shared template for all six service pages.
 * Redesigned 26 Sep 2026 from the approved demo
 * (docs/SERVICE-PAGE-REDESIGN-DEMO.html, spec docs/SERVICE-PAGE-REDESIGN.md).
 *
 * WHAT CHANGED AND WHY
 * - Pricing band: the old version put dark text on the #006D77 teal
 *   ("Fixed AUD prices. No surprises." at roughly 1.3:1 contrast, a WCAG
 *   fail). Headings on teal are now white; cards stay white.
 * - Emoji icons replaced with inline SVG line icons (ICONS below).
 * - Every price is resolved from content/pricing.js at render time. The data
 *   file only holds references, so a price change can't leave these pages
 *   quoting an old figure.
 * - ~12–25 contextual internal links per page (capabilities, process,
 *   outcomes, pricing, compare, FAQ, guides, cities, other services).
 *   The old pages linked out to three siblings and nothing else.
 * - JSON-LD: Service + BreadcrumbList + FAQPage, all describing content that
 *   is visible on the page.
 *
 * HONESTY (CLAUDE.md §1): client screenshots are real sites. Concept builds
 * are labelled "Concept build" wherever they appear. No invented metrics.
 */
import Layout from "@/components/layout/Layout"
import Breadcrumbs from "@/components/elements/Breadcrumbs"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CTA, SITE, SERVICE_ITEMS } from "@/content/site"
import { SERVICE_PAGES, getServicePage, CITY_LINKS } from "@/content/service-pages"
import { getCaseStudy } from "@/content/case-studies"
import { Icon, SVC_CSS as CSS, resolveValue, pricingCard, extraLine } from "@/components/landing/ServiceKit"

export async function generateStaticParams() {
    return SERVICE_PAGES.map((s) => ({ slug: s.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }) {
    const { slug } = await params
    const s = getServicePage(slug)
    if (!s) return {}
    const canonical = `/services/${s.slug}/`
    return {
        // ABSOLUTE — the root layout applies `%s | Build First Site`; left as a
        // plain string it appended the brand a second time.
        title: { absolute: s.metaTitle },
        description: s.metaDescription,
        alternates: { canonical },
        openGraph: {
            title: s.metaTitle,
            description: s.metaDescription,
            url: `https://buildfirstsite.com${canonical}`,
            type: "website",
            locale: "en_AU",
        },
    }
}

/* ── Concept builds (CLAUDE.md §1: must be labelled wherever shown) ── */
const CONCEPT_SLUGS = new Set(["harbour-plumbing", "marlow-vine", "aurelia-estates"])

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params
    const s = getServicePage(slug)
    if (!s) notFound()

    const url = `https://buildfirstsite.com/services/${s.slug}/`
    const hero = s.heroShot ? getCaseStudy(s.heroShot) : null
    const heroIsConcept = hero && CONCEPT_SLUGS.has(hero.slug)
    const cs = s.caseStudy ? getCaseStudy(s.caseStudy) : null
    const csIsConcept = cs && CONCEPT_SLUGS.has(cs.slug)
    const cards = (s.pricing || []).map(pricingCard).filter(Boolean)
    const extras = (s.pricingExtras || []).map(extraLine).filter(Boolean)
    const others = SERVICE_ITEMS.filter((si) => !si.href.includes(`/${s.slug}/`))
    const realClients = ["hs-race-gear", "mobile-armour", "autozenlyai"].map(getCaseStudy).filter(Boolean)
    const hostOf = (u) => { try { return new URL(u).host.replace(/^www\./, "") } catch { return "" } }

    /* ── Structured data — describes only what is visible on this page ── */
    const lowPrice = cards.map((c) => parseInt(String(c.price).replace(/[^0-9]/g, ""), 10)).filter((n) => n > 0)
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: s.h1,
            serviceType: s.title,
            description: s.metaDescription,
            url,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: { "@type": "Country", name: "Australia" },
            ...(lowPrice.length ? {
                offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "AUD",
                    lowPrice: Math.min(...lowPrice),
                    offerCount: cards.length,
                },
            } : {}),
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://buildfirstsite.com/services/" },
                { "@type": "ListItem", position: 3, name: s.title, item: url },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
    ]

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="svc">
                {/* 1. HERO */}
                <section className="svc-hero">
                    <div className="container">
                        <Breadcrumbs items={[{ name: "Services", href: "/services/" }, { name: s.title }]} />
                        <div className="svc-hero-grid">
                            <div>
                                <span className="tag-1">{s.eyebrow}</span>
                                <h1>{s.h1} <span>{s.h1Accent}</span></h1>
                                <p className="svc-lead" style={{ marginTop: 22 }}>{s.hero}</p>
                                <div className="svc-ctas">
                                    <Link href={CTA.primary.href} className="btn btn-black icon-arrow-right-white">
                                        Get a fixed quote
                                    </Link>
                                    <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" data-loc={`service-${s.slug}-hero`}
                                        className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                                        Book a free call
                                    </a>
                                </div>
                                <div className="svc-chips">
                                    {s.chips.map((c, i) => (
                                        <span className="svc-chip" key={i}>
                                            {c.pre ? `${c.pre} ` : ""}<b>{resolveValue(c.value)}</b>{c.post ? ` ${c.post}` : ""}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {hero && (
                                <div className="d-none d-lg-block" style={{ position: "relative" }}>
                                    <Link href={`/work/${hero.slug}/`} className="svc-browser d-block" aria-label={`${hero.name} case study`}>
                                        <div className="bar"><i /><i /><i /><span>{hostOf(hero.liveUrl)}</span></div>
                                        <img src={hero.image} alt={`${hero.name} website${heroIsConcept ? " (concept build)" : ""} built by Build First Site`}
                                            width={1200} height={900} fetchPriority="high" />
                                    </Link>
                                    <div className="svc-floater">
                                        <b>{heroIsConcept ? "Concept build" : "Live client build"}</b><br />
                                        <span style={{ color: "#667085" }}>{hero.name} · {hero.industry}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* 2. PROOF STRIP — real clients only */}
                <div className="svc-proof">
                    <div className="container row-in">
                        <span>Live sites we’ve designed and built:</span>
                        {realClients.map((c) => (
                            <Link key={c.slug} href={`/work/${c.slug}/`} className="client">{c.name}</Link>
                        ))}
                        <Link href="/work/" style={{ color: "#006D77", fontWeight: 500 }}>See all work →</Link>
                    </div>
                </div>

                {/* 3. WHAT WE BUILD */}
                <section className="svc-sec">
                    <div className="container">
                        <div className="svc-center">
                            <h2 className="svc-h2">What we build</h2>
                            <p className="svc-lead">{s.intro}</p>
                        </div>
                        <div className="svc-cards">
                            {s.capabilities.map((c) => (
                                <div className="svc-card" key={c.title}>
                                    <div className="svc-ico"><Icon name={c.icon} /></div>
                                    <h3>{c.title}</h3>
                                    <p>{c.body}</p>
                                    {c.href && <Link href={c.href} className="svc-more">{c.link} →</Link>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. PROCESS */}
                <section className="svc-sec svc-mint">
                    <div className="container svc-split">
                        {cs ? (
                            <Link href={`/work/${cs.slug}/`} className="svc-photo d-block">
                                <img src={cs.image} alt={`${cs.name} ${csIsConcept ? "concept build" : "website"} by Build First Site`}
                                    width={1200} height={900} loading="lazy" />
                            </Link>
                        ) : hero ? (
                            <Link href={`/work/${hero.slug}/`} className="svc-photo d-block">
                                <img src={hero.image} alt={`${hero.name} website built by Build First Site`}
                                    width={1200} height={900} loading="lazy" />
                            </Link>
                        ) : <div />}
                        <div>
                            <h2 className="svc-h2">{s.processTitle}</h2>
                            <p className="svc-lead" style={{ marginTop: 14 }}>{s.processLead}</p>
                            <div className="svc-steps">
                                {s.process.map((p, i) => (
                                    <div className="svc-step" key={p.title}>
                                        <div className="n">{i + 1}</div>
                                        <div><h4>{p.title}</h4><p>{p.body}</p></div>
                                    </div>
                                ))}
                            </div>
                            {s.processLink && (
                                <p style={{ marginTop: 20 }}>
                                    <Link href={s.processLink.href} className="svc-more">{s.processLink.label} →</Link>
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* 5. OUTCOMES — business result first, tech in small print */}
                <section className="svc-sec">
                    <div className="container">
                        <div className="svc-center">
                            <h2 className="svc-h2">What you get, not just what we use</h2>
                            <p className="svc-lead">Every technical choice is there for a business reason.</p>
                        </div>
                        <div className="svc-outs">
                            {s.outcomes.map((o) => (
                                <div className="svc-out" key={o.title}>
                                    <h4>{o.title}</h4>
                                    <p>{o.body}</p>
                                    <span className="tech">
                                        {o.href ? <Link href={o.href} style={{ color: "#006D77" }}>{o.link} →</Link> : o.tech}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {s.outcomeLinks && (
                            <p className="svc-inline-links">
                                Comparing options?
                                {s.outcomeLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
                            </p>
                        )}
                    </div>
                </section>

                {/* 6. PRICING — white headings on teal (was a contrast fail) */}
                {cards.length > 0 && (
                    <section className="svc-pricing">
                        <div className="container">
                            <div className="svc-center">
                                <h2 className="svc-h2">Fixed AUD pricing</h2>
                                <p className="svc-lead">No hourly billing and no surprises. The price in your quote is the price you pay unless the scope changes.</p>
                            </div>
                            <div className="svc-tiers" style={cards.length === 1 ? { maxWidth: 520, marginInline: "auto" } : undefined}>
                                {cards.map((c) => (
                                    <div className={`svc-tier${c.featured ? " feat" : ""}`} key={c.key}>
                                        {c.featured && <span className="svc-badge">Most popular</span>}
                                        <h3>{c.name}</h3>
                                        <div className="scope">{c.scope}</div>
                                        <div className="svc-price">{c.price} <small>AUD{c.per ? ` ${c.per}` : ""}</small></div>
                                        <ul>{c.lines.map((l) => <li key={l}>{l}</li>)}</ul>
                                        {c.note && <p className="note">{c.note}</p>}
                                        <Link href={CTA.primary.href} className={`btn ${c.featured ? "btn-black" : "btn-default"} w-100 text-center`}
                                            style={{ justifyContent: "center" }}>
                                            Get a quote
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            {extras.length > 0 && (
                                <div className="svc-extras">
                                    {extras.map((e) => <div key={e.label}><b>{e.value}</b>{e.label}</div>)}
                                </div>
                            )}
                            <p className="svc-pnote">
                                Prices exclude GST.{s.pricingNote ? ` ${s.pricingNote}` : ""}
                                {(s.pricingLinks || []).map((l) => <Link key={l.href} href={l.href}>{l.label} →</Link>)}
                            </p>
                        </div>
                    </section>
                )}

                {/* 7. CASE STUDY */}
                {cs && (
                    <section className="svc-sec">
                        <div className="container">
                            <div className="svc-case">
                                <div className="shot">
                                    <img src={cs.image} alt={`${cs.name} homepage`} width={1200} height={900} loading="lazy" />
                                </div>
                                <div className="txt">
                                    {csIsConcept
                                        ? <span className="svc-concept">Concept build, not client work</span>
                                        : <span className="tag-1">Case study</span>}
                                    <h2 style={{ fontSize: 30, lineHeight: 1.25, marginTop: 18 }}>{cs.name}: {cs.tagline}</h2>
                                    <p style={{ color: "#475467", marginTop: 14, lineHeight: 1.7 }}>{cs.metaDescription}</p>
                                    <div className="svc-tags">{(cs.services || []).map((t) => <span key={t}>{t}</span>)}</div>
                                    <Link href={`/work/${cs.slug}/`} className="btn btn-black icon-arrow-right-white">
                                        {csIsConcept ? "See the concept build" : "Read the case study"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 8. COMPARE */}
                {s.compare && (
                    <section className="svc-sec svc-mint">
                        <div className="container">
                            <div className="svc-center">
                                <h2 className="svc-h2">{s.compare.title}</h2>
                                <p className="svc-lead">{s.compare.lead}</p>
                            </div>
                            <div className="svc-table-wrap">
                                <table className="svc-table">
                                    <thead><tr><th scope="col"><span className="visually-hidden">Criteria</span></th>{s.compare.cols.map((c) => <th scope="col" key={c}>{c}</th>)}</tr></thead>
                                    <tbody>
                                        {s.compare.rows.map((r) => (
                                            <tr key={r[0]}>
                                                <th scope="row" style={{ background: "#fff", fontWeight: 500 }}>{r[0]}</th>
                                                {r.slice(1).map((cell, i) => <td key={i} className={i === 0 ? "us" : undefined}>{resolveValue(cell)}</td>)}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {s.compare.links && (
                                <p className="svc-inline-links">
                                    {s.compare.links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
                                </p>
                            )}
                        </div>
                    </section>
                )}

                {/* 9. FAQ — visible, and the source of the FAQPage schema */}
                <section className="svc-sec">
                    <div className="container svc-faq">
                        <div>
                            <h2 className="svc-h2">Questions people ask before hiring us</h2>
                            <p className="svc-lead" style={{ marginTop: 14 }}>
                                Can’t see yours? <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" data-loc={`service-${s.slug}-faq`} style={{ color: "#006D77" }}>Book a free call</a> and ask the engineer directly.
                            </p>
                        </div>
                        <div>
                            {s.faqs.map((f, i) => (
                                <details key={f.q} open={i === 0}>
                                    <summary>{f.q}</summary>
                                    <p>{f.a}{f.href && <> <Link href={f.href} style={{ color: "#006D77" }}>{f.link} →</Link></>}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. GUIDES + CITIES + OTHER SERVICES */}
                <section className="svc-sec svc-mint">
                    <div className="container">
                        <div className="svc-center"><h2 className="svc-h2">Read before you decide</h2></div>
                        <div className="svc-guides">
                            {s.guides.map((g) => (
                                <Link className="svc-guide" key={g.href} href={g.href}>
                                    <span>{g.tag}</span><h4>{g.title}</h4>
                                </Link>
                            ))}
                        </div>
                        {s.cities && (
                            <div className="svc-cities">
                                {CITY_LINKS.map((c) => <Link key={c.href} href={c.href}>Web design {c.label}</Link>)}
                            </div>
                        )}
                        <h3 className="svc-center" style={{ fontSize: 24, marginTop: 70 }}>Other services</h3>
                        <div className="svc-others">
                            {others.map((o) => {
                                const iconName = { "/services/web-development/": "monitor", "/services/mobile-app-development/": "phone", "/services/custom-software/": "grid", "/services/marketing-seo/": "chart", "/services/ai-automation/": "sparkle", "/services/maintenance-support/": "shield" }[o.href]
                                return (
                                    <Link className="svc-other" key={o.href} href={o.href}>
                                        <div className="svc-ico" style={{ margin: 0, flexShrink: 0 }}><Icon name={iconName} /></div>
                                        <div><h4>{o.label}</h4><p>{o.desc}</p></div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* 11. CTA */}
                <section className="svc-sec">
                    <div className="container">
                        <div className="svc-cta">
                            <div>
                                <h2>Get a fixed quote within 24 hours</h2>
                                <p>Tell us what you need. You’ll get a written scope and AUD price, and you deal directly with the engineer who builds it.</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                <Link href={CTA.primary.href} className="svc-btn-white">Get a quote →</Link>
                                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" data-loc={`service-${s.slug}-cta`} className="svc-btn-outline">Book a free call</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
