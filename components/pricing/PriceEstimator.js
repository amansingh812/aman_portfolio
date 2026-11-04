"use client"
/**
 * Interactive price estimator for /pricing/ (Nov 2026).
 * Every figure is read from content/pricing.js (BUILD_TIERS, ADDONS, CARE_PLAN).
 * It shows a STARTING POINT, not a quote: the written estimate follows a short call.
 */
import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { BUILD_TIERS, ADDONS, CARE_PLAN } from "@/content/pricing"
import Icon from "./Icon"

const T = Object.fromEntries(BUILD_TIERS.map((t) => [t.id, t]))
const num = (s) => Number(String(s).replace(/[^0-9.]/g, "")) || 0
const A = Object.fromEntries(ADDONS.map((a) => [a.name, a]))
const aud = (n) => `$${Math.round(n).toLocaleString("en-AU")}`

const TYPES = [
    { id: "website", label: "Website", icon: "globe" },
    { id: "ecommerce", label: "Online store", icon: "cart" },
    { id: "application", label: "Web app / portal", icon: "layout" },
    { id: "custom-software", label: "Custom software", icon: "cog" },
]

/* Add-ons offered in the estimator. Names must match ADDONS in pricing.js. */
const EXTRAS = [
    { key: "Logo design", icon: "pen" },
    { key: "Copywriting", icon: "doc", perPage: true },
    { key: "Booking system", icon: "calendar" },
    { key: "AI chatbot", icon: "bot" },
    { key: "Multi-language", icon: "languages" },
    { key: "Migration from Wix/WP", icon: "truck" },
].filter((e) => A[e.key])

function tierFor(type, pages) {
    if (type !== "website") return T[type]
    if (pages <= 5) return T.starter
    if (pages <= 10) return T.business
    return T.unlimited
}

/* Smoothly animates a number toward its target. */
function useCountUp(target) {
    const [v, setV] = useState(target)
    const from = useRef(target)
    useEffect(() => {
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
        if (reduce) { setV(target); from.current = target; return }
        const start = performance.now(), a = from.current, d = 450
        let raf
        const step = (t) => {
            const k = Math.min(1, (t - start) / d), e = 1 - Math.pow(1 - k, 3)
            setV(a + (target - a) * e)
            if (k < 1) raf = requestAnimationFrame(step); else from.current = target
        }
        raf = requestAnimationFrame(step)
        return () => cancelAnimationFrame(raf)
    }, [target])
    return v
}

export default function PriceEstimator() {
    const [type, setType] = useState("website")
    const [pages, setPages] = useState(7)
    const [extras, setExtras] = useState({})
    const [care, setCare] = useState(false)

    const tier = tierFor(type, pages)
    const lines = useMemo(() => {
        const l = [{ label: `${tier.name} ${type === "website" ? `(${tier.scope})` : ""}`.trim(), value: tier.price }]
        EXTRAS.forEach((e) => {
            if (!extras[e.key]) return
            const p = num(A[e.key].price)
            l.push({ label: e.perPage ? `${e.key} × ${pages} pages` : e.key, value: e.perPage ? p * pages : p })
        })
        return l
    }, [tier, type, extras, pages])
    const total = lines.reduce((s, l) => s + l.value, 0)
    const shown = useCountUp(total)
    const pct = ((pages - 1) / 29) * 100
    const anyFrom = type === "custom-software" || EXTRAS.some((e) => extras[e.key] && /from/i.test(A[e.key].price))

    return (
        <div className="pe">
            <div className="pe-left">
                <fieldset className="pe-group">
                    <legend>1 · What are you building?</legend>
                    <div className="pe-types" role="radiogroup">
                        {TYPES.map((t) => (
                            <button key={t.id} type="button" role="radio" aria-checked={type === t.id}
                                className={type === t.id ? "on" : ""} onClick={() => setType(t.id)}>
                                <span className="pe-ti"><Icon name={t.icon} size={26} /></span>{t.label}
                            </button>
                        ))}
                    </div>
                </fieldset>

                <div className="pe-group">
                    <label htmlFor="pe-pages" className="pe-legend">
                        2 · How many pages? <strong>{pages}{pages === 30 ? "+" : ""}</strong>
                    </label>
                    <input id="pe-pages" type="range" min="1" max="30" value={pages}
                        onChange={(e) => setPages(Number(e.target.value))}
                        style={{ "--pct": `${pct}%` }} aria-valuetext={`${pages} pages`} />
                    <div className="pe-ticks" aria-hidden="true"><span>1</span><span>5</span><span>10</span><span>20</span><span>30+</span></div>
                    {type === "website" && (
                        <p className="pe-hint">
                            {pages <= 5 ? "Starter covers 3–5 pages." : pages <= 10 ? "Business covers up to 10 pages." : "Growth has no page cap."}
                        </p>
                    )}
                    {type !== "website" && <p className="pe-hint">Pages affect copywriting; the build is scoped on the call.</p>}
                </div>

                <fieldset className="pe-group">
                    <legend>3 · Anything extra?</legend>
                    <div className="pe-extras">
                        {EXTRAS.map((e) => (
                            <label key={e.key} className={`pe-chip${extras[e.key] ? " on" : ""}`}>
                                <input type="checkbox" checked={!!extras[e.key]}
                                    onChange={() => setExtras((x) => ({ ...x, [e.key]: !x[e.key] }))} />
                                <span className="pe-ci"><Icon name={e.icon} size={20} /></span>
                                <span><b>{e.key}</b><small>{A[e.key].price}</small></span>
                            </label>
                        ))}
                    </div>
                </fieldset>

                <label className={`pe-chip pe-care${care ? " on" : ""}`}>
                    <input type="checkbox" checked={care} onChange={() => setCare(!care)} />
                    <span className="pe-ci"><Icon name="shield" size={20} /></span>
                    <span><b>{CARE_PLAN.name} plan after launch</b><small>{CARE_PLAN.priceLabel}{CARE_PLAN.period} · hosting, updates, backups · optional</small></span>
                </label>
            </div>

            <div className="pe-right" aria-live="polite">
                <span className="pe-kicker">Estimated starting point</span>
                <div className="pe-total">{anyFrom && <small>from </small>}{aud(shown)}<small> AUD</small></div>
                {tier.payments && <p className="pe-inst">or {tier.payments} payments of about {aud(total / tier.payments)}</p>}
                {care && <p className="pe-inst">+ {CARE_PLAN.priceLabel}{CARE_PLAN.period} for {CARE_PLAN.name}</p>}
                <ul className="pe-lines">
                    {lines.map((l) => <li key={l.label}><span>{l.label}</span><span>{aud(l.value)}</span></li>)}
                </ul>
                <p className="pe-meta">Delivery {tier.delivery} · You own the code · GST not included</p>
                <Link href="/free-homepage-design/" className="pe-btn" data-event="pricing_estimator_cta" data-package={tier.id}>
                    Get my free homepage design →
                </Link>
                <p className="pe-note">A guide, not a quote. Your written estimate follows a short call and only changes if the scope does.</p>
            </div>
        </div>
    )
}
