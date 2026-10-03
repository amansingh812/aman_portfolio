/* eslint-disable react/no-unescaped-entities */
/**
 * /services/ai-automation/ — the AI & Automation hub (Sprint 2, 4 Oct 2026).
 *
 * A dedicated route (it wins over app/services/[slug]/), built from the
 * approved demo docs/AUTOMATION-PAGE-DEMO.html. Content: content/automation.js.
 * Prices: AUTOMATION_OFFERS in content/pricing.js — never hardcode one here.
 * Same URL as before, so existing rankings and links carry over.
 *
 * Primary keyword: "ai automation agency". Schema: Service (with offers),
 * BreadcrumbList, FAQPage, HowTo — all describing visible content.
 *
 * HONESTY: no automation testimonials or results (we have none yet). Proof is
 * our own working contact-form automation and real AI client work.
 */
import Layout from "@/components/layout/Layout"
import Breadcrumbs from "@/components/elements/Breadcrumbs"
import Link from "next/link"
import { SITE } from "@/content/site"
import { AUTOMATION_HUB as H } from "@/content/automation"
import { AUTOMATION_OFFERS } from "@/content/pricing"
import { Icon } from "@/components/landing/ServiceKit"
import { AutomationCard, AUTO_CSS } from "@/components/automation/AutomationUI"

const URL = `https://buildfirstsite.com${H.path}`

export const metadata = {
    title: { absolute: H.metaTitle },
    description: H.metaDescription,
    keywords: ["ai automation agency", "small business automation", "business automation services australia", "automation consultant", "workflow automation"],
    alternates: { canonical: H.path },
    openGraph: { title: H.metaTitle, description: H.metaDescription, url: URL, type: "website", locale: "en_AU" },
    twitter: { card: "summary_large_image", title: H.metaTitle, description: H.metaDescription },
}


/* Layout only; typography from Agon classes. Dark bands use navy #101828. */
const css = `
.au-hero { background:radial-gradient(1100px 480px at 85% 0%, rgba(0,109,119,.45), transparent 60%), #101828; padding:40px 0 90px; }
.au-hero .crumbs a, .au-hero .crumbs span { color:#98A2B3 !important; }
.au-hero-grid { display:grid; grid-template-columns:1.1fr .9fr; gap:56px; align-items:center; margin-top:30px; }
@media (max-width:991px){ .au-hero-grid{ grid-template-columns:1fr; } }
.au-white { color:#fff !important; } .au-mint { color:#83C5BE !important; } .au-muted { color:#D0D5DD !important; } .au-dim { color:#98A2B3 !important; }
.au-eyebrow { background:rgba(131,197,190,.15) !important; color:#83C5BE !important; }
.au-ghost { background:transparent !important; color:#fff !important; border:1.5px solid rgba(255,255,255,.35) !important; }
.au-feed { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.1); border-radius:20px; padding:22px; }
.au-feed-h { display:flex; justify-content:space-between; font-size:12.5px; color:#98A2B3; margin-bottom:14px; }
.au-live::before { content:""; display:inline-block; width:8px; height:8px; border-radius:50%; background:#32D583; margin-right:7px; animation:au-pulse 1.6s infinite; }
.au-ev { display:flex; gap:14px; align-items:center; background:#fff; border-radius:14px; padding:13px 16px; margin-bottom:10px; opacity:0; transform:translateY(8px); animation:au-in .5s forwards; }
.au-ev:nth-child(2){animation-delay:.4s} .au-ev:nth-child(3){animation-delay:1.1s} .au-ev:nth-child(4){animation-delay:1.8s} .au-ev:nth-child(5){animation-delay:2.5s} .au-ev:nth-child(6){animation-delay:3.2s}
@media (prefers-reduced-motion:reduce){ .au-ev{ animation:none; opacity:1; transform:none; } .au-live::before{ animation:none; } }
.au-ic { width:38px; height:38px; border-radius:10px; display:grid; place-items:center; flex:0 0 auto; }
.au-ic svg, .au-card-ic svg { width:20px; height:20px; fill:none; stroke:#006D77; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
.au-ok { margin-left:auto; font-size:12px; font-weight:600; color:#067647; background:#ECFDF3; padding:4px 10px; border-radius:50px; white-space:nowrap; }
@keyframes au-in { to { opacity:1; transform:none; } } @keyframes au-pulse { 50% { opacity:.35; } }
.au-tools { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; }
.au-chip { font-size:14px; padding:8px 16px; border:1px solid #E4E7EC; border-radius:50px; background:#fff; color:#101828; }
.au-grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
@media (max-width:991px){ .au-grid3{ grid-template-columns:1fr 1fr; } } @media (max-width:620px){ .au-grid3{ grid-template-columns:1fr; } }
.au-card { background:#fff; border:1px solid #E4E7EC; border-radius:16px; padding:30px; height:100%; display:flex; flex-direction:column; scroll-margin-top:110px; }
.au-card-ic { width:44px; height:44px; border-radius:12px; background:#F4FAFB; display:grid; place-items:center; margin-bottom:18px; }
.au-incl { list-style:none; padding:0; margin:14px 0 0; }
.au-incl li { position:relative; padding:5px 0 5px 22px; font-size:14px; color:#475467; }
.au-incl li::before { content:"✓"; position:absolute; left:0; color:#006D77; font-weight:800; }
.au-price { margin-top:auto; padding-top:16px; border-top:1px dashed #E4E7EC; }
.au-free { background:#006D77; border-color:#006D77; }
.au-dark { background:#101828; }
.au-pgrid { display:grid; grid-template-columns:1fr 1fr; gap:30px; align-items:start; }
@media (max-width:860px){ .au-pgrid{ grid-template-columns:1fr; } }
.au-tl { list-style:none; padding:0; margin:0; }
.au-tl li { display:flex; gap:16px; padding:16px 0; border-bottom:1px solid rgba(255,255,255,.1); }
.au-tl .t { font-weight:700; color:#83C5BE; min-width:72px; }
.au-try { background:rgba(131,197,190,.12); border:1px solid rgba(131,197,190,.3); border-radius:14px; padding:22px; }
.au-n { width:44px; height:44px; border-radius:50%; background:#006D77; color:#fff; display:grid; place-items:center; font-weight:700; margin-bottom:18px; }
.au-faq { border-bottom:1px solid #E4E7EC; padding:26px 0; }
.au-cta { background:#006D77; border-radius:16px; padding:60px 40px; text-align:center; }
`

export default function AutomationHubPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${URL}#service`,
            name: "AI and business automation",
            serviceType: "Business process automation",
            description: H.metaDescription,
            url: URL,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: { "@type": "Country", name: "Australia" },
            // No prices: automation is quote-only (content/pricing.js).
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Automations",
                itemListElement: AUTOMATION_OFFERS.map((o) => ({
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: o.name, description: o.outcome, url: `https://buildfirstsite.com${o.href}` },
                })),
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://buildfirstsite.com/services/" },
                { "@type": "ListItem", position: 3, name: "AI & Automation", item: URL },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How we automate a small business",
            step: H.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body })),
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: H.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
    ]

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: AUTO_CSS + css }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* 1. HERO */}
            <section className="au-hero">
                <div className="container">
                    <div className="crumbs">
                        <Breadcrumbs items={[{ name: "Services", href: "/services/" }, { name: "AI & Automation" }]} />
                    </div>
                    <div className="au-hero-grid">
                        <div>
                            <span className="tag-1 au-eyebrow">{H.eyebrow}</span>
                            <h1 className="text-display-3 au-white mt-25 mb-20">
                                {H.h1} <span className="au-mint">{H.h1Accent}</span>
                            </h1>
                            <p className="text-body-lead-large au-muted mb-30">{H.lead}</p>
                            <Link href="/free-automation-audit/" data-event="automation_audit_cta" data-package="hub-hero"
                                className="btn btn-black icon-arrow-right-white mr-10 mb-10" style={{ background: "#D9541A", borderColor: "#D9541A" }}>
                                Get my free automation audit
                            </Link>
                            <a href="#what" className="btn au-ghost mb-10">See what we automate</a>
                            <p className="text-body-small au-dim mt-25 mb-0">
                                {H.assurances.join(" · ")} · Fixed price after a free audit
                            </p>
                        </div>
                        <div className="au-feed" aria-label="Example of automations running for a small business">
                            <div className="au-feed-h"><span className="au-live">Automations running</span><span>Example</span></div>
                            {H.feed.map((e) => (
                                <div key={e.title} className="au-ev">
                                    <span className="au-ic" style={{ background: e.bg }}><Icon name={e.icon} /></span>
                                    <span>
                                        <b className="d-block" style={{ fontSize: 14.5, color: "#101828" }}>{e.title}</b>
                                        <small style={{ color: "#667085" }}>{e.sub}</small>
                                    </span>
                                    <span className="au-ok">{e.tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TOOLS */}
            <section className="section-box pt-40 pb-40" style={{ borderBottom: "1px solid #E4E7EC" }}>
                <div className="container text-center">
                    <p className="text-body-small color-gray-500 mb-15" style={{ letterSpacing: ".08em", textTransform: "uppercase" }}>
                        Built on tools you already use
                    </p>
                    <div className="au-tools">{H.tools.map((t) => <span key={t} className="au-chip">{t}</span>)}</div>
                </div>
            </section>

            {/* 3. PAIN */}
            <section className="section-box pt-90 pb-90" style={{ background: "#F4FAFB" }}>
                <div className="container">
                    <div className="row"><div className="col-lg-8 mx-auto text-center mb-50">
                        <h2 className="text-heading-2 color-gray-900">You're doing jobs a system should do</h2>
                        <p className="text-body-lead-large color-gray-600 mt-15">What we hear from Australian small business owners, almost word for word.</p>
                    </div></div>
                    <div className="au-grid3">
                        {H.pains.map((p) => (
                            <div key={p.title} className="au-card">
                                <span className="au-card-ic"><Icon name={p.icon} /></span>
                                <h3 className="text-heading-5 color-gray-900 mb-10">{p.title}</h3>
                                <p className="text-body-text color-gray-600 mb-0">{p.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-heading-6 color-green-900 text-center mt-40 mb-0">
                        That's the gap we fill: we set it up, test it, and watch it for you.
                    </p>
                </div>
            </section>

            {/* 4. WHAT WE AUTOMATE (with prices) */}
            <section className="section-box pt-90" id="what">
                <div className="container">
                    <div className="row"><div className="col-lg-8 mx-auto text-center mb-50">
                        <span className="tag-1 bg-6 color-green-900">What we automate</span>
                        <h2 className="text-heading-2 color-gray-900 mt-20">Small systems that save you hours every week</h2>
                        <p className="text-body-lead-large color-gray-600 mt-15">
                            Each one has its own page explaining how it works. The free audit tells you which to do first, with a fixed price.
                        </p>
                    </div></div>
                    <div className="au-grid3">
                        {AUTOMATION_OFFERS.map((o) => (
                            <div key={o.id} id={o.id} style={{ scrollMarginTop: 110 }}>
                                <AutomationCard offer={o} loc="hub" />
                            </div>
                        ))}
                        <div className="au-card au-free">
                            <span className="au-card-ic" style={{ background: "rgba(255,255,255,.14)" }}><Icon name="sparkle" /></span>
                            <h3 className="text-heading-5 au-white mb-10">Free automation audit</h3>
                            <p className="text-body-text mb-20" style={{ color: "#BEE1E6" }}>
                                Not sure where to start? Answer four questions and get a written map of the
                                three automations that would save you the most time, with a fixed price for each.
                            </p>
                            <Link href="/free-automation-audit/" data-event="automation_audit_cta" data-package="hub-card"
                                className="btn mt-auto" style={{ background: "#83C5BE", color: "#006D77", alignSelf: "flex-start" }}>
                                Start the audit
                            </Link>
                        </div>
                    </div>
                    <p className="text-body-small color-gray-500 text-center mt-30">
                        Fixed AUD quote before we start · You own every account and workflow ·
                        Optional Care plan keeps it running ·
                        Bigger builds: <Link href="/services/custom-software/" className="color-green-900">custom software</Link>
                    </p>
                </div>
            </section>

            {/* 5. PROOF: TRY IT ON US */}
            <section className="section-box mt-90 pt-90 pb-90 au-dark">
                <div className="container">
                    <div className="row"><div className="col-lg-8 mx-auto text-center mb-50">
                        <span className="tag-1 au-eyebrow">Proof you can test</span>
                        <h2 className="text-heading-2 au-white mt-20">{H.proof.title}</h2>
                        <p className="text-body-lead-large au-dim mt-15">{H.proof.lead}</p>
                    </div></div>
                    <div className="au-pgrid">
                        <ul className="au-tl">
                            {H.proof.timeline.map((s) => (
                                <li key={s.title}>
                                    <span className="t">{s.t}</span>
                                    <span><b className="au-white d-block">{s.title}</b><span className="au-muted">{s.body}</span></span>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <div className="au-try mb-20">
                                <p className="au-muted mb-15">
                                    <b className="au-white">Try it now:</b> fill in the form on our contact page and watch your inbox.
                                </p>
                                <Link href="/contact/" className="btn" style={{ background: "#83C5BE", color: "#006D77" }}>Send us a test message</Link>
                            </div>
                            <p className="au-dim mb-0">
                                AI work for clients:{" "}
                                <Link href={H.proof.clientWork.href} className="au-mint">{H.proof.clientWork.label}</Link>, {H.proof.clientWork.note}.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. STEPS */}
            <section className="section-box pt-90">
                <div className="container">
                    <div className="row"><div className="col-lg-8 mx-auto text-center mb-50">
                        <h2 className="text-heading-2 color-gray-900">Three steps, then you stop doing it by hand</h2>
                    </div></div>
                    <div className="au-grid3">
                        {H.steps.map((s, i) => (
                            <div key={s.title} className="au-card">
                                <div className="au-n">{i + 1}</div>
                                <h3 className="text-heading-5 color-gray-900 mb-10">{s.title}</h3>
                                <p className="text-body-text color-gray-600 mb-0">{s.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="section-box pt-90">
                <div className="container">
                    <div className="row"><div className="col-lg-8 mx-auto">
                        <h2 className="text-heading-2 color-gray-900 text-center mb-30">Automation questions</h2>
                        {H.faqs.map((f) => (
                            <div key={f.q} className="au-faq">
                                <h3 className="text-heading-6 color-gray-900 mb-10">{f.q}</h3>
                                <p className="text-body-text color-gray-600 mb-0">{f.a}</p>
                            </div>
                        ))}
                        <div className="mt-40">
                            <p className="text-body-small color-gray-500 mb-10">Keep exploring</p>
                            {H.related.map((r) => (
                                <Link key={r.href} href={r.href} className="au-chip d-inline-block mr-10 mb-10">
                                    <span className="color-green-900">{r.tag}</span> · {r.title}
                                </Link>
                            ))}
                        </div>
                    </div></div>
                </div>
            </section>

            {/* 8. CTA */}
            <section className="section-box mt-90 mb-100">
                <div className="container">
                    <div className="au-cta">
                        <h2 className="text-heading-2 au-white mb-15">Stop being the copy-paste between your apps</h2>
                        <p className="text-body-lead-large mb-30" style={{ color: "#BEE1E6" }}>
                            Start with the free audit, or talk to the engineer who will build it.
                        </p>
                        <Link href="/free-automation-audit/" data-event="automation_audit_cta" data-package="hub-cta"
                            className="btn mr-10 mb-10" style={{ background: "#83C5BE", color: "#006D77" }}>
                            Get my free automation audit
                        </Link>
                        <a data-loc="automation-hub" href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-default mb-10">
                            Book a free call
                        </a>
                        <p className="text-body-small mt-20 mb-0" style={{ color: "#BEE1E6" }}>
                            Your day-to-day contact is in Australia · Fixed AUD quotes · Month to month
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
