/**
 * Home (/) — visual skeleton with template imagery.
 *
 * Structural placeholder for every homepage block from
 * docs/CONTENT-PLAN.md §20. Uses Agon's own demo imagery so the page has
 * proper visual weight during design review. Copy is filled in a separate
 * pass, per §28 decisions.
 *
 * ⚠ All /assets/imgs/... references are Agon DEMO imagery. Licensed for
 * demo/development only per the purchased template terms. MUST be replaced
 * with our own or properly-licensed stock before launch — see CONTENT-PLAN §29.
 *
 * Anchor IDs (#home, #services, #work, #pricing, #about, #guides, #contact)
 * match the nav in content/site.js so single-page scroll works alongside
 * the dedicated routes.
 */

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { CTA } from "@/content/site";

export const metadata = {
    title: "Build First Site — Web, App & AI Development for Australian Businesses",
    description:
        "Fixed AUD pricing, modern stack, full code ownership. Websites, apps, AI systems and custom software for Australian small businesses.",
    alternates: { canonical: "/" },
};

const SERVICES = [
    { title: "Business Websites",       icon: "/assets/imgs/page/homepage1/business-strategy.svg", body: "Multi-page sites for local businesses — fast, mobile-first, ready to rank.",              href: "/hire-website-builder/" },
    { title: "E-Commerce Development",  icon: "/assets/imgs/page/homepage1/market.svg",            body: "Custom stores with Stripe checkout, real inventory, no platform commission.",             href: "/ecommerce-development/" },
    { title: "AI Chatbots & Booking",   icon: "/assets/imgs/page/homepage1/consulting.svg",        body: "Assistants that qualify enquiries and book jobs straight into your calendar.",           href: "/ai-chatbot-development-australia/" },
    { title: "App Development",         icon: "/assets/imgs/page/homepage1/social.svg",            body: "Web apps, dashboards and cross-platform mobile — usually cheaper than you expect.",       href: "/app-development-australia/" },
    { title: "Custom Software",         icon: "/assets/imgs/page/homepage1/local.svg",             body: "Internal tools, admin portals, desktop apps — built around how you actually work.",     href: "/services/" },
    { title: "AI Web Development",      icon: "/assets/imgs/page/homepage1/cognity.svg",           body: "OpenAI, Claude and Gemini built into production apps, doing a specific job.",            href: "/ai-web-development/" },
];

const PROJECTS = [
    { title: "Client Project 01", tag: "E-commerce",    img: "/assets/imgs/page/homepage1/img-1-2.jpg", isConcept: false },
    { title: "Client Project 02", tag: "AI · Retail",   img: "/assets/imgs/page/homepage1/img-1-3.jpg", isConcept: false },
    { title: "Client Project 03", tag: "SaaS",          img: "/assets/imgs/page/homepage1/img-1-4.jpg", isConcept: false },
    { title: "Concept Build 01",  tag: "Real Estate",   img: "/assets/imgs/page/homepage1/img-1-5.jpg", isConcept: true  },
    { title: "Concept Build 02",  tag: "Trades",        img: "/assets/imgs/page/homepage1/img-1-6.jpg", isConcept: true  },
    { title: "Concept Build 03",  tag: "Hospitality",   img: "/assets/imgs/page/homepage2/img.png",     isConcept: true  },
];

const GUIDES = [
    { title: "How to Choose a Web Developer for Your Small Business",           img: "/assets/imgs/page/homepage1/img-news-1.png", tag: "Guide" },
    { title: "Website Builder vs Web Developer: Which Do You Actually Need?",   img: "/assets/imgs/page/homepage1/img-news-2.png", tag: "Guide" },
    { title: "Freelance Web Developer Rates in Australia",                      img: "/assets/imgs/page/homepage1/img-news-3.png", tag: "Guide" },
];

const PRICING = [
    { name: "Grow · Landing",     price: "AU$1,000+", time: "~2 weeks" },
    { name: "Grow · Business",    price: "AU$3,800+", time: "2–3 weeks" },
    { name: "Sell · E-Commerce",  price: "AU$5,000+", time: "4–6 weeks" },
    { name: "Build · App MVP",    price: "AU$6,500+", time: "6–8 weeks" },
    { name: "Automate · AI",      price: "AU$2,500+", time: "2–4 weeks" },
    { name: "Own · Custom SW",    price: "AU$8,000+", time: "Scoped" },
];

const LOGOS = [1, 2, 3, 4, 5, 6];

export default function Home() {
    return (
        <Layout>
            {/* ═══════════════ HERO */}
            <section id="home" className="section-box">
                <div className="banner-hero banner-1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <span className="tag-1">Web · App · AI · for Australia</span>
                                <h1 className="text-display-2 mt-20">
                                    Websites that bring
                                    <span className="color-green-900"> Australian businesses </span>
                                    more enquiries.
                                </h1>
                                <p className="text-body-lead-large color-gray-500 mt-30 pr-40">
                                    Fixed AUD pricing, modern stack, full code ownership. A small studio
                                    with a real local contact in Australia and a senior engineer who
                                    builds every project himself.
                                </p>
                                <p className="text-body-text color-gray-500 mt-20">
                                    Landing from AU$1,000 · Business from AU$3,800 · E-commerce from AU$5,000 · Apps from AU$6,500
                                </p>
                                <div className="mt-40">
                                    <Link href={CTA.primary.href} className="btn btn-black icon-arrow-right-white">
                                        {CTA.primary.label}
                                    </Link>
                                    <a href={CTA.secondary.href} className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                                        {CTA.secondary.label}
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                <Image
                                    width={520}
                                    height={520}
                                    className="img-responsive"
                                    src="/assets/imgs/page/homepage1/banner.png"
                                    alt="Web design and development studio"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CLIENT LOGO STRIP (placeholder — replace with real once ≥6 clients) */}
            <div className="section-box overflow-visible mt-70">
                <div className="container">
                    <div className="row justify-content-md-center align-items-center">
                        {LOGOS.map((n) => (
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center" key={n}>
                                <span className="item-logo box-hover-shadow hover-up d-inline-block">
                                    <Image
                                        width={100}
                                        height={40}
                                        alt={`Client logo ${n}`}
                                        src={`/assets/imgs/slider/logo/sample-logo-${n}.svg`}
                                    />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══════════════ PROBLEM */}
            <section className="section-box">
                <div className="container mt-100">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <span className="tag-1">The problem</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                Most small business websites quietly lose customers
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Not dramatically — they just sit there, slow on a phone, invisible on Google,
                                and impossible to update without paying someone.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-70">
                        {[
                            { n: "01", h: "Nobody can find it",     b: "Built to look nice, not to be found. No structured data, no local SEO, no pages for what your customers actually search." },
                            { n: "02", h: "It is slow on a phone",  b: "About two thirds of Australian traffic is mobile. A slow site loses most visitors before they see anything." },
                            { n: "03", h: "Enquiries go nowhere",   b: "A contact form buried at the bottom, no click-to-call, nothing that captures the 9pm visitor." },
                            { n: "04", h: "You are renting it",     b: "Monthly platform fees forever, design locked to a template, no way to move without starting again." },
                        ].map((p) => (
                            <div className="col-lg-6 col-sm-12 mb-40" key={p.n}>
                                <div className="d-flex">
                                    <span className="text-display-3 color-green-900 mr-30">{p.n}</span>
                                    <div>
                                        <h3 className="text-heading-3">{p.h}</h3>
                                        <p className="text-body-excerpt color-gray-600 mt-15">{p.b}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ SERVICES */}
            <section id="services" className="section-box">
                <div className="container mt-100">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <span className="tag-1">What we do</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                Everything a business needs to be found and booked
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Fixed prices in AUD, quoted in writing before anything starts.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-70">
                        {SERVICES.map((s) => (
                            <div className="col-lg-4 col-sm-6 col-12 mb-30" key={s.title}>
                                <Link href={s.href} className="card-grid-1 bg-5 hover-up d-block h-100">
                                    <div className="grid-1-img mb-20">
                                        <Image width={64} height={64} src={s.icon} alt={s.title} />
                                    </div>
                                    <h3 className="text-heading-3">{s.title}</h3>
                                    <p className="text-body-excerpt color-gray-600 mt-15">{s.body}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="row mt-30">
                        <div className="col-12 text-center">
                            {[
                                { label: "Tradies",     href: "/tradie-website-design/" },
                                { label: "Restaurants", href: "/restaurant-website-design/" },
                                { label: "Real Estate", href: "/real-estate-website-design/" },
                            ].map((i) => (
                                <Link key={i.href} href={i.href} className="btn btn-tag mr-10 mb-10">
                                    Industry: {i.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ SELECTED WORK */}
            <section id="work" className="section-box">
                <div className="container mt-100">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <span className="tag-1">Selected work</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                Projects built to do a job
                            </h2>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <Link href="/work/" className="btn btn-link icon-arrow-right color-gray-900">
                                All case studies
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-50">
                        {PROJECTS.map((p) => (
                            <div className="col-lg-4 col-sm-6 col-12 mb-30" key={p.title}>
                                <div className="card-grid-style-4 hover-up h-100">
                                    <div className="grid-4-img">
                                        <Image width={400} height={260} src={p.img} alt={p.title} />
                                    </div>
                                    <div className="pt-20">
                                        <span className="tag-dot">{p.tag}</span>
                                        {p.isConcept && (
                                            <span className="tag-1 ml-10">Concept build</span>
                                        )}
                                        <h3 className="text-heading-4 mt-15">{p.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ PROCESS */}
            <section className="section-box">
                <div className="container mt-100">
                    <div className="row">
                        <div className="col-lg-5">
                            <span className="tag-1">How it works</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                No surprises, at any point
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                A free call to understand what you need, a fixed AUD quote in 24 hours,
                                and a live staging link from the first week.
                            </p>
                            <div className="mt-40">
                                <Link href={CTA.primary.href} className="btn btn-black icon-arrow-right-white">
                                    Start a project
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            {[
                                { n: "01", h: "Free 30-min scoping call", b: "Understand your goal, your customers, and whether custom is even the right call for you." },
                                { n: "02", h: "Fixed AUD quote in 24h",   b: "Written scope, written price, explicit about what is and is not included." },
                                { n: "03", h: "Build in the open",        b: "Live staging link from week one, weekly demos, no month-long silences." },
                                { n: "04", h: "Launch and handover",      b: "Full repo + accounts on completion, 30 days support, no mandatory retainer." },
                            ].map((s) => (
                                <div className="mb-40" key={s.n}>
                                    <div className="line-bd-green mb-25" />
                                    <h4 className="text-heading-4">
                                        <span className="color-green-900 mr-15">{s.n}</span>{s.h}
                                    </h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">{s.b}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ PRICING */}
            <section id="pricing" className="section-box section-green mt-100">
                <div className="container pt-70 pb-70">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <span className="tag-1">Pricing</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                Published, fixed, in AUD
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Most agencies hide this behind &ldquo;contact us&rdquo;. Here is what things actually cost.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-50">
                        {PRICING.map((t) => (
                            <div className="col-lg-4 col-sm-6 col-12 mb-30" key={t.name}>
                                <div className="card-grid-1 bg-white h-100 p-30">
                                    <h3 className="text-heading-3">{t.name}</h3>
                                    <p className="text-display-3 color-green-900 mt-15">{t.price}</p>
                                    <p className="text-body-text color-gray-500 mt-5">{t.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row mt-20">
                        <div className="col-12 text-center">
                            <p className="text-body-text color-gray-600">
                                Every build: full code ownership · 30 days support · no mandatory retainer · live staging from week one
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ABOUT */}
            <section id="about" className="section-box">
                <div className="container mt-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Image
                                width={560}
                                height={420}
                                className="img-responsive bdrd-16"
                                src="/assets/imgs/page/homepage2/banner.png"
                                alt="A small studio, close to the work"
                            />
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <span className="tag-1">Who you are working with</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                A small studio. We answer the phone.
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Build First Site is a senior engineer building your project himself, plus
                                a real local contact in Australia for calls, quotes and paperwork.
                                Contractors are credited by name when the scope needs them.
                            </p>
                            <p className="text-body-excerpt color-gray-600 mt-20">
                                The engineering happens in India, the contact is in Australia, and the
                                price reflects it. Said plainly, because that structure is why the price works.
                            </p>
                            <div className="mt-30">
                                <Link href="/about/" className="btn btn-link icon-arrow-right color-gray-900">
                                    More about us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*
              Testimonials section is intentionally omitted from the visible page.
              Australian Consumer Law treats invented testimonials as misleading
              conduct — nothing renders until real, attributable client quotes
              exist. See CONTENT-PLAN §28.9.
            */}

            {/* ═══════════════ GUIDES */}
            <section id="guides" className="section-box">
                <div className="container mt-100">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <span className="tag-1">Guides</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                Practical writing, no jargon
                            </h2>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <Link href="/guides/" className="btn btn-link icon-arrow-right color-gray-900">
                                All guides
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-50">
                        {GUIDES.map((g) => (
                            <div className="col-lg-4 col-sm-12 mb-30" key={g.title}>
                                <div className="card-grid-style-4 hover-up h-100">
                                    <div className="grid-4-img">
                                        <Image width={400} height={220} src={g.img} alt={g.title} />
                                    </div>
                                    <div className="pt-20">
                                        <span className="tag-dot">{g.tag}</span>
                                        <h3 className="text-heading-4 mt-15">{g.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ OBJECTIONS / FAQ */}
            <section className="section-box">
                <div className="container mt-100">
                    <div className="row">
                        <div className="col-lg-4">
                            <span className="tag-1">Questions</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                The things people actually ask
                            </h2>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            {[
                                { q: "You are based in India — how does that work for me?", a: "Your contact is in Australia and works in your timezone. Engineering happens in India, which is why a business website costs AU$3,800 here rather than AU$10,000 at a Sydney agency. Live staging from week one, so nothing is taken on trust." },
                                { q: "What if I need changes after launch?",                 a: "Thirty days of support is included. After that, changes are quoted per piece — no mandatory retainer. You own the code, so you can also take it to any other developer." },
                                { q: "Do I really own the website?",                         a: "Yes. Full repo and every account transferred to you on completion. No lock-in, no subscription to us." },
                                { q: "How do I know the quote will not creep up?",           a: "Scope and price are agreed in writing before work starts. If you ask for something outside the agreed scope, we re-quote rather than quietly billing more hours." },
                                { q: "What if I only need something small?",                 a: "A single landing page starts at AU$1,000. If a DIY builder would serve you better, we will say so on the first call." },
                            ].map((f) => (
                                <details key={f.q} className="mb-15" style={{ borderTop: "1px solid var(--border-primary, #ececee)", padding: "22px 0" }}>
                                    <summary className="text-heading-4" style={{ cursor: "pointer", listStyle: "none" }}>
                                        {f.q}
                                    </summary>
                                    <p className="text-body-excerpt color-gray-600 mt-15">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CONTACT */}
            <section id="contact" className="section-box">
                <div className="container mt-100">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <span className="tag-1">Contact</span>
                            <h2 className="text-heading-1 color-gray-900 mt-20">
                                Tell us what you are trying to build
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                A fixed-price quote within 24 hours, and an honest answer if we think
                                there is a cheaper way to get you there.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-70">
                        <div className="col-lg-6 col-sm-12 mb-30">
                            <div className="card-grid-1 bg-5 h-100 p-30">
                                <h3 className="text-heading-3">Get a written quote</h3>
                                <p className="text-body-excerpt color-gray-600 mt-15">
                                    Short form: what you need, budget range, when you want it. We reply within 24 hours business time.
                                </p>
                                <div className="mt-30">
                                    <Link href="/contact/" className="btn btn-black icon-arrow-right-white">
                                        Start your quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 mb-30">
                            <div className="card-grid-1 bg-5 h-100 p-30">
                                <h3 className="text-heading-3">Book a 30-min call</h3>
                                <p className="text-body-excerpt color-gray-600 mt-15">
                                    Talk it through with the person who will build it. Free, no pitch.
                                </p>
                                <div className="mt-30">
                                    <a href={CTA.secondary.href} className="btn btn-black icon-arrow-right-white">
                                        Pick a time
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL CTA */}
            <section className="section-box section-green mt-100">
                <div className="container pt-70 pb-70 text-center">
                    <h2 className="text-heading-1 color-gray-900">
                        Ready to build something that earns its keep?
                    </h2>
                    <p className="text-body-lead-large color-gray-600 mt-20">
                        Fixed quote within 24 hours.
                    </p>
                    <div className="mt-40">
                        <Link href={CTA.primary.href} className="btn btn-black icon-arrow-right-white">
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
