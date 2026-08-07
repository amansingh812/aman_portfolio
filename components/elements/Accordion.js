'use client'
import { useState } from "react"

const FAQS = [
    {
        q: "How much does a website cost?",
        a: "We publish our prices upfront, in AUD, before you make any commitment. Three to five page sites from $800, up to ten pages $1,900, unlimited pages $3,500, e-commerce and applications $4,500, and custom software from $5,000. You get a written quote that doesn't move unless the scope does — no hourly billing surprises at the end."
    },
    {
        q: "What makes you different from other Australian web agencies?",
        a: "Most agencies in Australia quote $10,000–$50,000 for work we do at a fraction of that, then hide behind account managers and slow turnarounds. We publish fixed prices, build on a modern Next.js stack instead of patching old WordPress sites, and you deal directly with the person building your project — not a middleman relaying messages to an offshore team."
    },
    {
        q: "Will I actually own my website?",
        a: "Yes — fully. You get the complete code repository, your domain, your hosting account, and every third-party login. Nothing is held back. If you ever want to move to another developer or agency, you can hand them the codebase and they can pick up exactly where we left off. No platform lock-in, no forced subscriptions."
    },
    {
        q: "How long does a build take?",
        a: "Landing page: 3–5 days. Business website: 2–4 weeks. E-commerce store: 4–6 weeks. Custom web app: 6–12 weeks. You'll see a live staging link from week one so you can follow along and give feedback as it's built — not just see a finished product at the end."
    },
    {
        q: "Do you build on WordPress or something more modern?",
        a: "We build on Next.js and React — the same stack used by large Australian tech companies. WordPress is fine for simple blogs, but it comes with security patches every other week, performance ceilings, and plugins that break. Our builds are faster, more secure, and easier to hand over cleanly. If you specifically need WordPress, we can discuss it."
    },
    {
        q: "Can you help with SEO and marketing too?",
        a: "Yes. We offer local SEO, Google Business Profile setup, technical SEO, and content strategy as standalone services or bundled with your build. Most agencies sell you a site and leave the SEO as an afterthought — we wire it in from the start (page speed, schema, sitemap, meta) so you're not paying a second agency to fix what should have been right the first time."
    },
    {
        q: "Do you work with businesses across Australia?",
        a: "We work with businesses across Sydney, Melbourne, Brisbane, Perth, Adelaide and beyond. All client calls happen in Australian business hours, invoices are in AUD, and we understand the local market — the way Australians search, what they trust, and what converts."
    },
    {
        q: "What happens after my website launches?",
        a: "Every project includes 30 days of post-launch support at no extra cost. After that, our Care + SEO plan ($250/month) covers security updates, backups, uptime monitoring, and small content changes. No long lock-in — cancel any month."
    },
]

function Accordion() {
    const [activeKey, setActiveKey] = useState(1)

    const toggle = (key) => setActiveKey(activeKey === key ? null : key)

    return (
        <div className="accordion" id="accordionFAQ">
            {FAQS.map((item, i) => {
                const key = i + 1
                const isOpen = activeKey === key
                return (
                    <div className="accordion-item" key={key}>
                        <h2 className="accordion-header" onClick={() => toggle(key)}>
                            <button className={`accordion-button text-heading-5${isOpen ? '' : ' collapsed'}`}>
                                {item.q}
                            </button>
                        </h2>
                        <div className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}>
                            <div className="accordion-body">{item.a}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion
