'use client'
import { useState } from "react"

const FAQS = [
    {
        q: "How much does a website cost?",
        a: "We publish fixed prices in AUD upfront: landing pages from $600, business websites from $2,000, e-commerce from $4,000, and custom web apps from $8,000. You get a written quote before any work starts — it does not move unless the scope changes."
    },
    {
        q: "Who actually builds my website?",
        a: "Aman, the engineer, builds everything. He works directly with you (or through your local Australian contact). There are no layers, no subcontractors, no agency hand-offs — you speak to the person writing the code."
    },
    {
        q: "How do I communicate if the developer is in India?",
        a: "Most communication is async (email or project chat) with video calls when needed. Our Australian contact handles calls and meetings in your timezone. In practice, most clients find response times faster than dealing with a local agency."
    },
    {
        q: "Do I own the website after it is built?",
        a: "Yes. Full code repository, domain, hosting accounts — everything is handed over on completion. There is no ongoing subscription to us unless you choose our maintenance plan."
    },
    {
        q: "How long does a website take to build?",
        a: "A landing page takes 3–5 days. A business website typically takes 2–4 weeks. An e-commerce store takes 4–6 weeks. A custom web app takes 6–12 weeks. You will see a live staging link from week one."
    },
    {
        q: "What technology do you use?",
        a: "We build primarily with Next.js, React, Tailwind CSS, and Node.js — the same modern stack used by large tech companies. For e-commerce we integrate Stripe. For AI features we use OpenAI, Claude, or Google Gemini APIs."
    },
    {
        q: "Do you offer ongoing support after launch?",
        a: "Every project includes 30 days of post-launch support. After that, you can choose our monthly maintenance plan (from $150/month) covering updates, backups, monitoring, and minor changes."
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