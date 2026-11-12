/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/**
 * Home (/) — Build First Site homepage, v3.
 *
 * Section order (v4, 11 Nov 2026 — fewer sections, one job each):
 *   1. HERO              hire-a-developer statement, two CTAs, four entry paths, short answer
 *   2. PROMISE MARQUEE   replaces the tech-logo strip
 *   3. WHAT WE BUILD     BuildShowcase tabs (replaces Who-we-work-with, Automation, Services)
 *   4. PORTFOLIO         recent work with live links
 *   5. BENEFITS          how you grow with us
 *   6. HOW HIRING WORKS  ProcessFlow (animated), links to /pricing/
 *   7. CLIENT REVIEWS    hidden until REVIEWS has real quotes
 *   8. MEET THE ENGINEER
 *   9. FAQ
 *  10. START YOUR PROJECT inline form (the final CTA)
 *
 * PRICES: never hardcode a figure in this file. Import BUILD_TIERS and
 * RETAINER from content/pricing.js so the homepage, /pricing/ and every
 * service page always agree.
 *
 * DATES: use the helpers in lib/format.js (fmtDate) rather than calling
 * toLocaleDateString inline — that is how the blog pages drifted apart.
 *
 * HONESTY: no invented testimonials, no fake stats, spec builds NOT shown
 * on the homepage strip (they live in /work/ properly labelled).
 */
import Layout from "@/components/layout/Layout"
import Accordion from "@/components/elements/Accordion"
import ClientReviews from "@/components/slider/ClientReviews"
import ProjectThumb from "@/components/portfolio/ProjectThumb"
import Link from "next/link"
import Image from "next/image"
import ContactPageForm from "@/components/elements/ContactPageForm"
import PIcon from "@/components/pricing/Icon"
import ProcessFlow from "@/components/home/ProcessFlow"
import BuildShowcase from "@/components/home/BuildShowcase"
import fs from "node:fs"
import path from "node:path"

const has = (src) => fs.existsSync(path.join(process.cwd(), "public", src))
import { pick } from "@/components/blog/BlogContentV2"
import { CTA, SITE, REVIEWS, INDUSTRY_ITEMS } from "@/content/site"
import { CASE_STUDIES } from "@/content/case-studies"
import { BUILD_TIERS, AUTOMATION_OFFERS, FREE_DESIGN } from "@/content/pricing"
import { AutomationCard, AUTO_CSS, Icon } from "@/components/automation/AutomationUI"

export const metadata = {
    // ABSOLUTE — the root template would otherwise append the brand twice.
    // 11 Nov 2026: leads with the hire intent; "Australia" stays because the
    // homepage ranks for "website design australia" queries.
    title: { absolute: "Hire a Web Developer in Australia & Worldwide | Build First Site" },
    description:
        "Hire a web developer for your website, web app, online store or AI automation. Work directly with the engineer, see a free homepage design first, get a written estimate, and own the code. Australia and worldwide.",
    alternates: { canonical: "/" },
    openGraph: {
        title: "Hire a Web Developer — Websites, Apps & AI Automation | Build First Site",
        description: "Work directly with the engineer who builds your website, app or automation. Free homepage design first. You own the code.",
        url: "https://buildfirstsite.com/",
    },
}

/* ─── data ────────────────────────────────────────────────────────────── */



const SERVICES = [
    {
        title: "Web Development",
        icon: "/assets/imgs/page/services/1/icon-web.svg",
        body: "Responsive, fast and scalable websites and web applications built with modern technologies.",
        href: "/services/web-development/",
    },
    {
        title: "Mobile App Development",
        icon: "/assets/imgs/page/services/1/icon-product.svg",
        body: "iOS and Android apps from one codebase in Flutter or React Native — one build, both stores.",
        href: "/services/mobile-app-development/",
    },
    {
        title: "Custom Software Development",
        icon: "/assets/imgs/page/services/1/icon-build.svg",
        body: "Tailored software that automates processes and grows with your business.",
        href: "/services/custom-software/",
    },
    {
        title: "Marketing",
        icon: "/assets/imgs/page/services/1/icon-share.svg",
        body: "Digital marketing, SEO and paid campaigns that put your product in front of the right audience.",
        href: "/services/marketing-seo/",
    },
    {
        title: "AI & Automation",
        icon: "/assets/imgs/page/services/1/icon-business.svg",
        body: "AI-powered tools and automation that improve efficiency and cut manual work.",
        href: "/services/ai-automation/",
    },
    {
        title: "Maintenance & Support",
        icon: "/assets/imgs/page/services/1/icon-support.svg",
        body: "Ongoing support and maintenance to keep your systems running smoothly, month to month.",
        href: "/services/maintenance-support/",
    },
]

/* 6 real, shipped client projects — each live on its own domain */
const FEATURED_SLUGS = [
    "hs-race-gear",
    "mobile-armour",
    "autozenlyai",
    "marlow-vine",
    "swarom",
    "school-scout",
]
const PORTFOLIO = FEATURED_SLUGS.map((slug) =>
    CASE_STUDIES.find((cs) => cs.slug === slug)
).filter(Boolean)

/* ─── page ────────────────────────────────────────────────────────────── */

/* Hero floating cards read these — never hardcode the price or timeline. */

const starter = BUILD_TIERS.find((t) => t.id === 'starter')

export default function Home() {
    return (
        <Layout>

            {/* Layout-only styles for the pricing cards. Type sizes and
                colours come from the Agon utility classes above. */}
            <style dangerouslySetInnerHTML={{ __html: `
.home-price-card { position:relative; height:100%; display:flex; flex-direction:column;
  background:#fff; border:1.5px solid #E4E7EC; border-radius:16px; padding:34px 30px;
  transition:border-color .2s ease, box-shadow .2s ease, transform .2s ease; }
.home-price-card:hover { border-color:#83C5BE; transform:translateY(-4px);
  box-shadow:0 16px 40px rgba(0,109,119,.10); }
.home-price-card.is-featured { border:2px solid #006D77; box-shadow:0 16px 44px rgba(0,109,119,.14); }
.home-price-chip { position:absolute; top:-16px; left:30px; padding:7px 16px !important;
  font-size:12px !important; line-height:12px !important; }
.home-price-amt { display:flex; align-items:baseline;
  padding-bottom:22px; border-bottom:1px solid #E4E7EC; }
.home-price-btn { margin-top:auto; width:100%; text-align:center; }
.hp-hero{background:linear-gradient(180deg,#E6F3F5 0%,#fff 100%);padding:70px 0 50px}
.hp-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
.hp-hero h1{font-size:clamp(36px,5vw,64px);line-height:1.08;letter-spacing:-.02em;color:#101828;margin:18px 0 20px}
.hp-hero h1 span{color:#006D77}
.hp-chip{display:inline-block;background:#fff;border:1px solid #BEE1E6;color:#004349;font-weight:700;font-size:13px;letter-spacing:.05em;text-transform:uppercase;padding:7px 14px;border-radius:99px}
.hp-ticks{display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:22px;font-size:15px;color:#344054}
.hp-ticks span:before{content:"✓";color:#067647;font-weight:800;margin-right:6px}
.hp-heroimg img{width:100%;height:auto;border-radius:24px;border:1px solid #E4E7EC;box-shadow:0 30px 60px -32px rgba(16,24,40,.4)}
.hp-paths{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:40px}
.hp-path{display:flex;align-items:center;gap:10px;background:#fff;border:1.5px solid #E4E7EC;border-radius:14px;padding:14px 16px;font-weight:700;color:#101828;text-decoration:none;min-height:56px;transition:all .2s}
.hp-path:hover{border-color:#006D77;transform:translateY(-2px);color:#004349}
.hp-path i{font-style:normal;width:34px;height:34px;border-radius:10px;background:#E6F3F5;display:grid;place-items:center;flex:none}
.hp-answer{display:grid;grid-template-columns:auto 1fr;gap:20px;background:#004349;border-radius:18px;padding:28px 32px;margin-top:10px}
.hp-answer h2{font-size:14px;text-transform:uppercase;letter-spacing:.08em;color:#BEE1E6;margin:0 0 6px}
.hp-answer p{margin:0;color:#fff;font-size:19px;line-height:1.6}
.hp-head{max-width:720px;margin:0 auto 44px;text-align:center}
.hp-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;counter-reset:s}
.hp-step{background:#fff;border:1px solid #E4E7EC;border-radius:18px;padding:26px;position:relative}
.hp-step:before{counter-increment:s;content:"0" counter(s);display:grid;place-items:center;width:44px;height:44px;border-radius:12px;background:#006D77;color:#fff;font-weight:800;margin-bottom:16px}
.hp-step h3{font-size:19px;color:#101828;margin-bottom:8px}
.hp-step p{font-size:15px;color:#475467;margin:0}
.hp-step small{display:block;margin-top:12px;color:#005F68;font-weight:700}
.hp-who{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.hp-card{background:#fff;border:1px solid #E4E7EC;border-radius:18px;padding:26px;transition:transform .2s,box-shadow .2s}
.hp-card:hover{transform:translateY(-4px);box-shadow:0 20px 40px -26px rgba(0,67,73,.45)}
.hp-card h3{font-size:19px;color:#101828;margin:0 0 8px}
.hp-card p{font-size:15px;color:#475467;margin:0 0 12px}
.hp-card a{font-weight:700;color:#005F68}
.hp-eng{display:grid;grid-template-columns:.9fr 1.1fr;gap:44px;align-items:center;background:#F8FAFB;border:1px solid #E4E7EC;border-radius:24px;padding:44px}
.hp-eng img{width:100%;height:auto;border-radius:18px}
.hp-avatar{width:64px;height:64px;border-radius:50%;background:#006D77;color:#fff;display:grid;place-items:center;font-weight:800;font-size:22px}
.hp-prom{display:grid;grid-template-columns:1fr 1fr;gap:10px 20px;list-style:none;padding:0;margin:20px 0}
.hp-prom li{padding-left:26px;position:relative;font-size:16px;color:#344054}
.hp-prom li:before{content:"✓";position:absolute;left:0;color:#067647;font-weight:800}
.hp-start{background:linear-gradient(135deg,#004349,#006D77);border-radius:24px;padding:48px}
.hp-start h2,.hp-start .lead{color:#fff}
.hp-start .formbox{background:#fff;border-radius:18px;padding:28px}
@media(max-width:991px){.hp-hero-grid,.hp-eng{grid-template-columns:1fr}.hp-paths,.hp-steps{grid-template-columns:1fr 1fr}.hp-who{grid-template-columns:1fr}.hp-start{padding:28px 20px}.hp-eng{padding:26px}}
@media(max-width:560px){.hp-paths,.hp-steps,.hp-prom{grid-template-columns:1fr}.hp-answer{grid-template-columns:1fr;padding:22px}}
@media(prefers-reduced-motion:reduce){.hp-path,.hp-card{transition:none}}
.hp-mq{overflow:hidden;background:#101828;padding:18px 0;margin-top:10px}
.hp-mq-track{display:flex;width:max-content;animation:hpMq 38s linear infinite}
.hp-mq:hover .hp-mq-track{animation-play-state:paused}
.hp-mq ul{display:flex;list-style:none;margin:0;padding:0}
.hp-mq li{white-space:nowrap;color:#fff;font-weight:700;font-size:17px;padding:0 26px;display:flex;align-items:center;gap:26px}
.hp-mq li:after{content:"✦";color:#F5A66B}
@keyframes hpMq{to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){.hp-mq-track{animation:none;flex-wrap:wrap;width:auto}.hp-mq ul[aria-hidden=true]{display:none}.hp-mq ul{flex-wrap:wrap}}
.hero-float-card { background:#fff; border-radius:12px; box-shadow:0 47px 65px rgba(21,28,38,.1); }
.home-price-retainer { background:#F4FAFB; border:1px solid #BEE1E6; border-radius:16px;
  padding:32px 36px; display:flex; align-items:center; justify-content:space-between;
  gap:26px; flex-wrap:wrap; }
` }} />

            {/* ═══════════════ 1. HERO ═══════════════ */}
            {/* Layout and theme borrowed from the /industries/ hero
                (bg-service-2: centred copy, soft background, floating
                frames with the shape-2 float animation). Copy unchanged.

                The industries hero fills those frames with Agon template
                dashboards ("68K+ User Activated", "22 Projects Completed
                This Year"). On the homepage those would read as OUR stats,
                which is the §1 fake-metrics problem, so the frames here show
                real client sites instead — the same live screenshots the
                portfolio section already uses. */}
            <section id="home" className="hp-hero">
                <div className="container">
                    <div className="hp-hero-grid">
                        <div>
                            <span className="hp-chip">Web developer for hire · Australia &amp; worldwide</span>
                            <h1>Hire a web developer who <span>builds it with you, start to finish.</span></h1>
                            <p className="text-body-lead-large color-gray-600" style={{ maxWidth: 600 }}>
                                Websites, online stores, web apps and AI automation. You work directly with the
                                engineer who writes the code, you see your homepage designed before you pay,
                                and the finished product is yours.
                            </p>
                            <div className="mt-30">
                                <Link href="#start" data-event="cta_path_click" data-package="start-project"
                                    className="btn btn-black icon-arrow-right-white mr-10 mb-10">
                                    Start my project
                                </Link>
                                <a data-loc="home-hero" href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-default icon-arrow-right mb-10">
                                    Book a free call
                                </a>
                            </div>
                            <div className="hp-ticks">
                                <span>Free homepage design first</span>
                                <span>Written estimate, phase by phase</span>
                                <span>You own the code</span>
                            </div>
                        </div>
                        <div className="hp-heroimg">
                            <Image
                                src={pick("/assets/imgs/page/home/hero-desk.png", "/assets/imgs/page/services/1/banner.png")}
                                alt="A developer's desk with a laptop showing a business website, a code editor on a second screen and the site on a phone"
                                width={1200} height={900} sizes="(max-width: 991px) 100vw, 560px" priority
                            />
                        </div>
                    </div>

                    {/* What do you need built? Four entry paths. */}
                    <nav className="hp-paths" aria-label="What do you need built?">
                        <Link className="hp-path" href="/services/web-development/" data-event="cta_path_click" data-package="website"><i><PIcon size={18} name="globe" /></i>A business website</Link>
                        <Link className="hp-path" href="/ecommerce-development/" data-event="cta_path_click" data-package="store"><i><PIcon size={18} name="cart" /></i>An online store</Link>
                        <Link className="hp-path" href="/services/custom-software/" data-event="cta_path_click" data-package="app"><i><PIcon size={18} name="layout" /></i>A web app or portal</Link>
                        <Link className="hp-path" href="/services/ai-automation/" data-event="cta_path_click" data-package="automation"><i><PIcon size={18} name="bot" /></i>AI &amp; automation</Link>
                    </nav>

                    {/* AEO: the direct answer search and AI assistants quote. */}
                    <div className="hp-answer mt-40">
                        <div aria-hidden="true" style={{ fontSize: 28 }}>💡</div>
                        <div>
                            <h2>Short answer</h2>
                            <p>
                                Build First Site is a small web development studio you can hire to design and build
                                websites, online stores, web apps and AI automation. Clients work directly with the
                                engineer, see a free homepage design first, get a written estimate after a short call,
                                and own the code. We work with businesses in Australia and worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 2. PROMISE MARQUEE (replaces the tech-logo strip, 11 Nov 2026) ═══════════════ */}
            <div className="hp-mq" aria-label="What you get when you hire us">
                <div className="hp-mq-track">
                    {[0, 1].map((r) => (
                        <ul key={r} aria-hidden={r === 1}>
                            {["Free homepage design first", "You own the code", "Written estimate before you commit", "Direct access to the engineer", "No lock-in, no platform fees", "Built for Google and AI search", "Pay in instalments"].map((t) => <li key={t}>{t}</li>)}
                        </ul>
                    ))}
                </div>
            </div>

            {/* ═══════════════ 3. WHAT WE BUILD (one showcase replaces Who-we-work-with, Automation and Services) ═══════════════ */}
            <section className="section-box mt-80" id="services">
                <div className="container">
                    <div className="hp-head">
                        <span className="tag-1 bg-6 color-green-900">What we build</span>
                        <h2 className="text-heading-1 mt-20">Pick what you need. See how it works.</h2>
                    </div>
                    <BuildShowcase items={[
                        { id: "website", photo: has("/assets/imgs/page/home/tab-website.png") ? "/assets/imgs/page/home/tab-website.png" : null, tab: "Business website", title: "A website that brings in calls and enquiries", text: "Custom designed for your business, fast on phones, and set up to be found on Google.", points: ["Click-to-call, quote and booking forms", "SEO and Google Business Profile setup", "Edit it yourself, no developer needed"], goodFor: "trades, clinics, cafes, consultants, local services, and businesses replacing an old Wix or WordPress site", href: "/services/web-development/", cta: "Website development" },
                        { id: "store", photo: has("/assets/imgs/page/home/tab-store.png") ? "/assets/imgs/page/home/tab-store.png" : null, tab: "Online store", title: "A store you own, without platform fees", text: "Sell online with a fast storefront, secure Stripe checkout and your own admin dashboard.", points: ["Products, stock and orders in one place", "Only standard payment processing fees", "Your catalogue and customer data stay yours"], goodFor: "retailers, makers and brands moving off Shopify or marketplaces", href: "/ecommerce-development/", cta: "E-commerce development" },
                        { id: "app", photo: has("/assets/imgs/page/home/tab-app.png") ? "/assets/imgs/page/home/tab-app.png" : null, tab: "Web app or portal", title: "Software that replaces spreadsheets and manual work", text: "Customer portals, booking systems, dashboards and internal tools, built around how your business runs.", points: ["Logins, roles and secure data", "Turn an AI-built prototype into a real product", "iOS and Android apps in Flutter or React Native"], goodFor: "startups, founders and growing companies", href: "/services/custom-software/", cta: "Custom software" },
                        { id: "automation", photo: has("/assets/imgs/page/home/auto-reply.png") ? "/assets/imgs/page/home/auto-reply.png" : null, tab: "AI & automation", title: "Routine work that runs by itself", text: "Instant replies to new leads, automatic reports and AI chatbots, built on the tools you already use.", points: ["Every enquiry answered in seconds", "Data synced between your tools", "A free automation audit to find the best first step"], goodFor: "teams losing hours to follow-ups, data entry and reporting", href: "/services/ai-automation/", cta: "AI & automation" },
                    ]} />
                </div>
            </section>

            {/* ═══════════════ 6. PORTFOLIO STRIP ═══════════════ */}
            <section id="work" className="section-box mt-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <span className="tag-1 bg-6 color-green-900">Portfolio</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                Recent work
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Live products we&apos;ve designed, built and shipped — open to inspect.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-70">
                        {PORTFOLIO.map((p) => (
                            <div className="col-lg-4 col-md-6 mb-30" key={p.slug}>
                                <div className="hover-up h-100" style={{
                                    background: '#F1F4FB',
                                    borderRadius: 22,
                                    padding: 18,
                                }}>
                                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                                        style={{ display: 'block', borderRadius: 14, overflow: 'hidden' }}>
                                        <ProjectThumb
                                            slug={p.slug}
                                            remote={p.image}
                                            name={p.name}
                                            alt={`${p.name} — live website`}
                                        />
                                    </a>
                                    <div className="d-flex justify-content-between align-items-center mt-20"
                                        style={{ gap: 12 }}>
                                        <div style={{ minWidth: 0, flex: 1 }}>
                                            <h4 className="text-heading-5 color-gray-900 mb-0"
                                                style={{ lineHeight: 1.15 }}>{p.name}</h4>
                                            <p className="text-body-small color-gray-500 mt-5 mb-0">{p.industry}</p>
                                        </div>
                                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                background: '#101828', color: '#fff',
                                                borderRadius: 999, padding: '12px 18px',
                                                fontSize: 12, fontWeight: 700,
                                                display: 'inline-flex', alignItems: 'center',
                                                gap: 7, whiteSpace: 'nowrap',
                                                textDecoration: 'none', flexShrink: 0,
                                                letterSpacing: 0.3,
                                            }}>
                                            <span style={{
                                                width: 7, height: 7, borderRadius: '50%',
                                                background: '#22C55E', display: 'inline-block',
                                            }} />
                                            LIVE
                                        </a>
                                    </div>
                                    <div className="mt-15">
                                        <Link href={`/work/${p.slug}/`}
                                            style={{
                                                color: '#0F5E4E', fontWeight: 600,
                                                textDecoration: 'none', fontSize: 13,
                                            }}>
                                            Read the case study →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-40">
                        <Link href="/work/" className="btn btn-black icon-arrow-right-white">
                            See the full portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 3. BENEFITS — index-2 split layout ═══════════════ */}
            <section className="section-box">
                <div className="container mt-50">
                    <div className="row">
                        {/* Left — photo with floating chart card */}
                        <div className="col-lg-6 col-sm-12 block-img-we-do">
                            <div className="inner-image">
                                <Image
                                    className="bdrd-16 img-responsive"
                                    width={0} height={0} sizes="(max-width: 992px) 100vw, 50vw"
                                    style={{ width: "100%", height: "auto" }}
                                    src="/assets/imgs/page/homepage2/img-2.webp"
                                    alt="Two people reviewing website results on a whiteboard in a studio"
                                />
                            </div>
                        </div>

                        {/* Right — tag + heading + 3 icon-list items */}
                        <div className="col-lg-6 col-sm-12 block-we-do-2">
                            <span className="tag-1 bg-6 color-green-900">Growth without the chaos</span>
                            <h2 className="text-heading-1 mt-30">
                                How can you grow with us?
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-30">
                                Bring in better opportunities, turn more of them into customers,
                                and remove the busywork that makes growth feel heavy.
                            </p>
                            <div className="list-icons mt-50">
                                <div className="item-icon none-bd">
                                    <span className="icon-left">
                                        <Image width={0} height={0} sizes="100vw"
                                            style={{ width: "auto", height: "auto" }}
                                            src="/assets/imgs/page/homepage2/icon-work.svg"
                                            alt="The right customers find you"
                                        />
                                    </span>
                                    <h4 className="text-heading-4">The right customers find you</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Every good enquiry gets a clear next step, so interest turns into a conversation instead of stalling out.
                                    </p>
                                </div>
                                <div className="item-icon none-bd">
                                    <span className="icon-left">
                                        <Image width={0} height={0} sizes="100vw"
                                            style={{ width: "auto", height: "auto" }}
                                            src="/assets/imgs/page/homepage2/icon-design.svg"
                                            alt="Routine work happens without chasing"
                                        />
                                    </span>
                                    <h4 className="text-heading-4">Routine work runs itself</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Follow-ups, updates and admin happen in the background — nothing depends on you remembering to chase it.
                                    </p>
                                </div>
                                <div className="item-icon none-bd">
                                    <span className="icon-left">
                                        <Image width={0} height={0} sizes="100vw"
                                            style={{ width: "auto", height: "auto" }}
                                            src="/assets/imgs/page/homepage2/icon-advance.svg"
                                            alt="You can see what is actually working"
                                        />
                                    </span>
                                    <h4 className="text-heading-4">You see what's actually working</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">
                                        Clear visibility into what's driving results, so decisions are based on what's happening, not guesswork.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-40">
                                <Link href="/about/" className="btn btn-black icon-arrow-right-white">
                                    See your growth path
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 2b. HOW YOUR PROJECT STARTS (11 Nov 2026) ═══════════════ */}
            <section className="section-box mt-80" id="how-it-works">
                <div className="container">
                    <div className="hp-head">
                        <span className="tag-1 bg-6 color-green-900">How hiring us works</span>
                        <h2 className="text-heading-1 mt-20">From first message to launch in four steps</h2>
                        <p className="text-body-lead-large color-gray-600 mt-15">No jargon, no hourly billing, and nothing to pay until you have seen the design.</p>
                    </div>
                    <ProcessFlow steps={[
                        { title: "Tell us what you need", text: "Two lines are enough: what the business does and what the site or app should achieve.", when: "Day 1" },
                        { title: "See your homepage, free", text: "We design it with your real name and services, so you judge the work, not a pitch.", when: `About ${FREE_DESIGN.turnaround}` },
                        { title: "Get a written estimate", text: "Scope, timeline and cost, phase by phase, after a short call. It only changes if the scope does.", when: "After a short call" },
                        { title: "Build, review, launch", text: "You watch progress on a live link, then receive the code, domain and hosting in your name.", when: `Starter sites: ${starter.delivery}` },
                    ]} />
                    <p className="text-body-text color-gray-600 text-center mt-40">
                        Want a number first? <Link href="/pricing/" className="color-green-900" style={{ fontWeight: 700 }}>See typical starting prices and estimate yours →</Link>
                    </p>
                </div>
            </section>

            {/* ═══════════════ 7. CLIENT REVIEWS ═══════════════ */}
            {/* Whole section is skipped until REVIEWS in content/site.js has real,
                permissioned quotes — see CLAUDE.md §1. No heading without content
                behind it. */}
            {REVIEWS.length > 0 && (
                /* Tinted full-bleed band. Social proof is the scarcest asset on
                   this site, so the section gets its own background rather than
                   sitting in the same white flow as everything above it. */
                <section
                    className="section-box mt-100 pt-70 pb-70"
                    style={{ background: "#F8F5F0" }}
                >
                    <div className="container">
                        <div className="row align-items-end mb-50">
                            <div className="col-lg-8 col-sm-7">
                                <span className="tag-1 bg-6 color-green-900">Reviews</span>
                                <h2 className="text-heading-1 color-gray-900 mt-20 mb-10">
                                    What clients say
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mb-0">
                                    Unedited feedback from the businesses whose sites we built —
                                    every one live on its own domain, linked from the card.
                                </p>
                            </div>
                            <div className="col-lg-4 col-sm-5 text-sm-end mt-30 mt-sm-0">
                                <Link
                                    href="/work/"
                                    className="btn btn-link icon-arrow-right color-gray-900 text-heading-6"
                                >
                                    See the work behind them
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ClientReviews />
                    </div>
                </section>
            )}

            {/* ═══════════════ 8b. MEET THE ENGINEER (11 Nov 2026) ═══════════════
                No photo yet: CLAUDE.md requires Aman's REAL photo here, never
                stock or AI. Initials until he supplies one. */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="hp-eng">
                        <div>
                            <div className="d-flex align-items-center" style={{ gap: 14 }}>
                                <span className="hp-avatar" aria-hidden="true">AS</span>
                                <div><div className="text-heading-5 color-gray-900">Aman Singh</div><div className="text-body-small color-gray-500">Engineer, Build First Site</div></div>
                            </div>
                            <h2 className="text-heading-2 mt-25">You hire the person who writes your code</h2>
                        </div>
                        <div>
                            <p className="text-body-lead color-gray-700">
                                Hi, I'm Aman. I've spent seven years building web, mobile and AI software, including
                                enterprise fintech. When you hire Build First Site there is no sales team and no
                                hand-off: you talk to me about the build, and a local contact in Australia looks
                                after calls and paperwork.
                            </p>
                            <ul className="hp-prom">
                                <li>Custom built, never a template</li>
                                <li>You can edit the site yourself</li>
                                <li>Built for Google and AI search</li>
                                <li>Code, domain and hosting in your name</li>
                            </ul>
                            <Link href="/about/" className="btn btn-default icon-arrow-right">More about us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 9. FAQ ═══════════════ */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-40">
                            <span className="tag-1 bg-6 color-green-900">FAQ</span>
                            <h2 className="text-heading-1 mt-20">Frequently asked questions</h2>
                            <p className="text-body-lead color-gray-600 mt-30">
                                Everything most people ask before we start a project. Something else?
                                Send us a message — usually replied same day.
                            </p>
                            <div className="mt-40">
                                <Link href="/contact/" className="btn btn-black icon-arrow-right-white mr-15">
                                    Contact us
                                </Link>
                                <a data-loc="homepage" href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                                    Book a call
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <Accordion />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 9b. START YOUR PROJECT (inline form) ═══════════════ */}
            <section className="section-box mt-100 mb-100" id="start" style={{ scrollMarginTop: 100 }}>
                <div className="container">
                    <div className="hp-start">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-30">
                                <h2 className="text-heading-1">Start your project</h2>
                                <p className="text-body-lead-large lead mt-15" style={{ color: "#E6F3F5" }}>
                                    Tell us what you want built. We reply within one business day, then design
                                    your homepage free so you can see the work before deciding anything.
                                </p>
                                <p className="mt-20" style={{ color: "#E6F3F5" }}>
                                    Prefer to talk? <a data-loc="home-start" href={SITE.calendly} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontWeight: 700 }}>Book a free call</a> or <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontWeight: 700 }}>message us on WhatsApp</a>.
                                </p>
                            </div>
                            <div className="col-lg-7">
                                <div className="formbox"><div className="row">
                                    <ContactPageForm source="Homepage (start project form)" wrapperClass="col-lg-12" submitLabel="Start my project" />
                                </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
