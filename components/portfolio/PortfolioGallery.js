'use client'
/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Link from "next/link"

/**
 * ThemeForest-style portfolio gallery.
 * A tab bar filters the card grid by category. Each card is a large
 * project thumbnail with a title strip + a "LIVE DEMO" pill button
 * that opens the live URL in a new tab.
 */
const TABS = [
    { id: "all",       label: "All" },
    { id: "client",    label: "Real clients" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "saas",      label: "SaaS / AI" },
    { id: "trades",    label: "Trades" },
    { id: "realestate",label: "Real Estate" },
    { id: "hospo",     label: "Hospitality" },
]

/* Match each case-study slug to one or more filter buckets */
const CATEGORIES = {
    "hs-race-gear":     ["client", "ecommerce"],
    "mobile-armour":    ["client", "ecommerce"],
    "autozenlyai":      ["client", "saas"],
    "aurelia-estates":  ["realestate"],
    "harbour-plumbing": ["trades"],
    "marlow-vine":      ["hospo"],
    "banish-shoes":     ["client", "ecommerce"],
    "swarom":           ["client", "ecommerce"],
}

const REAL_CLIENT_SLUGS = ["hs-race-gear", "mobile-armour", "autozenlyai", "banish-shoes", "swarom"]

export default function PortfolioGallery({ projects }) {
    const [active, setActive] = useState("all")

    const filtered = projects.filter((p) => {
        if (active === "all") return true
        return (CATEGORIES[p.slug] || []).includes(active)
    })

    return (
        <>
            {/* ── FILTER TABS ── */}
            <div className="text-center mb-70" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                {TABS.map((t) => {
                    const isActive = active === t.id
                    return (
                        <button
                            key={t.id}
                            onClick={() => setActive(t.id)}
                            className={isActive ? "btn btn-black" : "btn btn-tag"}
                            style={{
                                padding: '12px 28px',
                                borderRadius: 999,
                                border: 'none',
                                cursor: 'pointer',
                                background: isActive ? '#101828' : '#F4E9DF',
                                color: isActive ? '#fff' : '#101828',
                                fontWeight: 600,
                                fontSize: 15,
                                transition: 'all .2s ease',
                            }}
                        >
                            {t.label}
                        </button>
                    )
                })}
            </div>

            {/* ── CARD GRID ── */}
            <div className="row">
                {filtered.map((p) => {
                    const isConcept = !REAL_CLIENT_SLUGS.includes(p.slug)
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-40" key={p.slug}>
                            <div
                                className="hover-up"
                                style={{
                                    background: '#F1F4FB',
                                    borderRadius: 22,
                                    padding: 18,
                                    position: 'relative',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                {/* Concept-build honesty badge */}
                                {isConcept && (
                                    <span
                                        className="tag-1 bg-6 color-green-900"
                                        style={{
                                            position: 'absolute', top: 32, left: 32, zIndex: 2,
                                            fontSize: 11, padding: '4px 10px',
                                        }}
                                    >
                                        Concept build
                                    </span>
                                )}

                                {/* Screenshot thumbnail */}
                                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                                    style={{ display: 'block', borderRadius: 14, overflow: 'hidden' }}>
                                    <img
                                        src={p.image}
                                        alt={`${p.name} — live website screenshot`}
                                        style={{
                                            width: '100%',
                                            height: 250,
                                            objectFit: 'cover',
                                            objectPosition: 'top center',
                                            display: 'block',
                                            background: '#fff',
                                        }}
                                        loading="lazy"
                                    />
                                </a>

                                {/* Title strip + LIVE DEMO button */}
                                <div
                                    className="d-flex justify-content-between align-items-center mt-20"
                                    style={{ gap: 12 }}
                                >
                                    <div style={{ minWidth: 0, flex: 1 }}>
                                        <h4 className="text-heading-5 color-gray-900 mb-0"
                                            style={{ lineHeight: 1.15 }}>
                                            {p.name}
                                        </h4>
                                        <p className="text-body-small color-gray-500 mt-5 mb-0">
                                            {p.industry}
                                        </p>
                                    </div>

                                    <a
                                        href={p.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            background: '#101828',
                                            color: '#fff',
                                            borderRadius: 999,
                                            padding: '12px 18px',
                                            fontSize: 12,
                                            fontWeight: 700,
                                            textAlign: 'center',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 7,
                                            whiteSpace: 'nowrap',
                                            textDecoration: 'none',
                                            flexShrink: 0,
                                            letterSpacing: 0.3,
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: 7, height: 7, borderRadius: '50%',
                                                background: '#22C55E', display: 'inline-block',
                                            }}
                                        />
                                        LIVE
                                    </a>
                                </div>

                                {/* Case study link */}
                                <div className="mt-15">
                                    <Link
                                        href={`/work/${p.slug}/`}
                                        style={{
                                            color: '#0F5E4E',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            fontSize: 13,
                                        }}
                                    >
                                        Read the case study →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
                <div className="text-center pt-40 pb-40">
                    <p className="text-body-lead color-gray-500">
                        Nothing in this category yet — try &ldquo;All&rdquo;.
                    </p>
                </div>
            )}
        </>
    )
}
