'use client'
/**
 * PricingSelector — Agon split pricing layout.
 *
 * TYPOGRAPHY AND COLOUR COME FROM THE TEMPLATE. Use the Agon utility classes
 * (text-heading-*, text-body-*, color-gray-*, color-green-*, tag-1, bg-6,
 * btn-black) rather than hardcoding px sizes or hex values — that is what
 * made this component drift out of sync with the homepage.
 *
 * Template tokens worth knowing:
 *   text-heading-3      35px/38px bold      text-heading-5   22px/24px bold
 *   text-heading-4      28px/32px bold      text-body-text   16px/28px
 *   text-body-lead-large 24px/32px          text-body-small  13px/16px
 *   color-green-900     #006D77             color-green-500  #83C5BE
 *   color-gray-900      #101828             color-gray-500   #667085
 *   bg-6                #BEE1E6             border-radius    16px, buttons 50px
 *
 * The CSS below is layout only — flex, grid, spacing, states. No type sizes.
 */
import Link from "next/link"
import { useState } from "react"
import { BUILD_TIERS, ALWAYS_INCLUDED } from "@/content/pricing"

export default function PricingSelector() {
    const [active, setActive] = useState(1) // Business is the default
    const tier = BUILD_TIERS[active]

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: css }} />

            <div className="bfsp">
                <div className="bfsp-grid">

                    {/* ── LEFT: included in every package ── */}
                    <div className="bfsp-panel">
                        <span className="tag-1 bfsp-eyebrow">Included in every package</span>

                        <h3 className="text-heading-4 mt-25 mb-10 bfsp-white">{tier.name}</h3>
                        <p className="text-body-text mb-30 bfsp-muted">
                            {tier.scope} · {tier.tagline}
                        </p>

                        <ul className="bfsp-feats">
                            {ALWAYS_INCLUDED.map((f) => (
                                <li key={f}>
                                    <span className="text-body-text bfsp-white">{f}</span>
                                    <i className="bfsp-tick" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none"
                                            stroke="currentColor" strokeWidth="3.5"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </i>
                                </li>
                            ))}
                        </ul>

                        <div className="bfsp-foot">
                            <p className="text-body-small mb-20 bfsp-muted">
                                Delivery <span className="bfsp-white">{tier.delivery}</span>
                            </p>
                            <Link href="/contact/" className="btn btn-black bfsp-cta">
                                Get a quote for {tier.name}
                            </Link>
                        </div>
                    </div>

                    {/* ── RIGHT: pick your scope ── */}
                    <div className="bfsp-items" role="radiogroup" aria-label="Choose a package">
                        {BUILD_TIERS.map((t, i) => {
                            const sel = i === active
                            return (
                                <button
                                    key={t.id}
                                    type="button"
                                    role="radio"
                                    aria-checked={sel}
                                    onClick={() => setActive(i)}
                                    className={`bfsp-item${sel ? " is-sel" : ""}`}
                                >
                                    <span className="bfsp-radio" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
                                            stroke="currentColor" strokeWidth="4"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>

                                    <span className="bfsp-info">
                                        <span className="bfsp-row1">
                                            <span className="text-heading-5 bfsp-name">{t.name}</span>
                                            {t.tag && (
                                                <span className="tag-1 bg-6 color-green-900 bfsp-tag">{t.tag}</span>
                                            )}
                                        </span>
                                        <span className="text-body-small bfsp-scope">{t.scope}</span>
                                    </span>

                                    <span className="text-heading-4 bfsp-price">{t.priceLabel}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

/* Layout only — all type sizes and colours come from Agon utility classes. */
const css = `
.bfsp { --teal:#006D77; --mint:#83C5BE; --tint:#BEE1E6; --line:#E4E7EC;
  background:#fff; border-radius:16px; padding:24px;
  box-shadow:0 12px 40px rgba(16,24,40,.06); border:1px solid var(--line); }
.bfsp *, .bfsp *::before, .bfsp *::after { box-sizing:border-box; }

.bfsp-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:stretch; }
@media (max-width:991px){ .bfsp-grid{ grid-template-columns:1fr; } }

/* ── Left panel ── */
.bfsp-panel { background:var(--teal); border-radius:16px; padding:40px 32px;
  display:flex; flex-direction:column; }
.bfsp-white { color:#fff !important; }
.bfsp-muted { color:var(--tint) !important; }
.bfsp-eyebrow { background:rgba(255,255,255,.14) !important; color:#fff !important;
  padding:9px 20px; }

.bfsp-feats { list-style:none; padding:0; margin:0; flex-grow:1; width:100%; }
.bfsp-feats li { display:flex; align-items:center; justify-content:space-between; gap:18px;
  padding:14px 0; border-bottom:1px solid rgba(255,255,255,.14); }
.bfsp-feats li:last-child { border-bottom:none; }
.bfsp-tick { flex:0 0 auto; width:24px; height:24px; border-radius:50%;
  background:var(--mint); color:var(--teal);
  display:inline-flex; align-items:center; justify-content:center; }

.bfsp-foot { border-top:1px solid rgba(255,255,255,.2); padding-top:26px; margin-top:24px; }
.bfsp-cta { display:block; width:100%; text-align:center;
  background:var(--mint) !important; color:var(--teal) !important;
  padding:15px 24px; transition:background .18s ease; }
.bfsp-cta:hover { background:#9BD3CD !important; }

/* ── Right cards ── */
.bfsp-items { display:flex; flex-direction:column; gap:14px; }

.bfsp-item { display:flex; align-items:center; gap:18px; width:100%; text-align:left;
  background:#fff; border:1.5px solid var(--line); border-radius:16px;
  padding:24px 26px; margin:0; cursor:pointer; font:inherit; flex:1;
  transition:border-color .18s ease, background .18s ease, box-shadow .18s ease; }
.bfsp-item:hover { border-color:var(--mint); }
.bfsp-item.is-sel { background:var(--teal); border-color:var(--teal);
  box-shadow:0 12px 30px rgba(0,109,119,.24); }

.bfsp-radio { flex:0 0 auto; width:26px; height:26px; border-radius:50%;
  border:2px solid #D0D5DD; background:#fff; color:transparent;
  display:inline-flex; align-items:center; justify-content:center; transition:all .18s ease; }
.bfsp-item.is-sel .bfsp-radio { border-color:var(--mint); background:var(--mint); color:var(--teal); }

.bfsp-info { display:flex; flex-direction:column; gap:6px; flex-grow:1; min-width:0; }
.bfsp-row1 { display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
.bfsp-name { color:#101828; margin:0; }
.bfsp-item.is-sel .bfsp-name { color:#fff; }
.bfsp-scope { color:#667085; }
.bfsp-item.is-sel .bfsp-scope { color:var(--tint); }

.bfsp-tag { padding:6px 14px !important; font-size:12px !important; line-height:12px !important; }
.bfsp-item.is-sel .bfsp-tag { background:var(--mint) !important; color:var(--teal) !important; }

.bfsp-price { flex:0 0 auto; color:#101828; margin:0; white-space:nowrap; }
.bfsp-item.is-sel .bfsp-price { color:#fff; }

@media (max-width:575px){
  .bfsp { padding:14px; }
  .bfsp-panel { padding:30px 24px; }
  .bfsp-item { padding:18px 18px; gap:13px; }
  .bfsp-price { font-size:22px !important; line-height:26px !important; }
  .bfsp-name { font-size:18px !important; line-height:22px !important; }
}
`
