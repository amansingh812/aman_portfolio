/* eslint-disable react/no-danger */
/**
 * New blog body renderer (Nov 2026). Used when a post in blog-content.js has
 * `format: "v2"`. Supports every old block type plus:
 * cards, stats, callout, compare, tabs, checklist, timeline, cta.
 * h2 blocks get numbered, anchored headings (feeds the TOC) and an optional `oneline`.
 */
import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import Link from "next/link"
import { Tabs, Checklist } from "./BlogInteractive"

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 48)

export function tocFrom(blocks) {
    return (blocks || []).filter((b) => b.type === "h2").map((b) => ({ id: b.id || slugify(b.text), text: b.toc || b.text }))
}

/* Use `src` if the file exists in /public, else `fallback` (lets copy ship before images do). */
export const pick = (src, fallback) =>
    src && fs.existsSync(path.join(process.cwd(), "public", src)) ? src : (fallback || src)

const H = ({ html, as: As = "span", ...p }) => <As {...p} dangerouslySetInnerHTML={{ __html: html }} />

export default function BlogContentV2({ blocks }) {
    if (!blocks?.length) return null
    let n = 0
    return (
        <>
            {blocks.map((b, i) => {
                switch (b.type) {
                    case "h2": {
                        n += 1
                        return (
                            <div key={i}>
                                <div className="bp-h2" id={b.id || slugify(b.text)}>
                                    <span className="bp-num" aria-hidden="true">{String(n).padStart(2, "0")}</span>
                                    <h2>{b.text}</h2>
                                </div>
                                {b.oneline && <p className="bp-oneline"><b>In one line:</b> {b.oneline}</p>}
                            </div>
                        )
                    }
                    case "h3": return <h3 key={i} className="bp-h3">{b.text}</h3>
                    case "p": return <H key={i} as="p" html={b.html} />
                    case "ul":
                    case "ol": {
                        const L = b.type
                        return <L key={i} className="bp-list">{b.items.map((it, j) => <H key={j} as="li" html={it} />)}</L>
                    }
                    case "table":
                        return (
                            <div key={i} className="bp-tbl">
                                <table>
                                    <thead><tr>{b.headers.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>
                                    <tbody>
                                        {b.rows.map((row, r) => (
                                            <tr key={r}>{row.map((c, k) => <H key={k} as="td" data-l={b.headers[k]} html={String(c)} />)}</tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    case "faq":
                        return (
                            <details key={i} open={b.open}>
                                <summary>{b.q}</summary>
                                <p>{b.a}</p>
                            </details>
                        )
                    case "image":
                        return (
                            <figure key={i}>
                                <Image src={pick(b.src, b.fallback)} alt={b.alt} width={b.width || 1200} height={b.height || 675}
                                    sizes="(max-width: 768px) 100vw, 740px" loading="lazy"
                                    style={{ width: "100%", height: "auto", borderRadius: 16 }} />
                                {b.caption && <figcaption>{b.caption}</figcaption>}
                            </figure>
                        )
                    case "quote":
                        return <div key={i} className="bp-callout note"><span aria-hidden="true">❝</span><p>{b.text}</p></div>
                    case "cards":
                        return (
                            <div key={i} className={`bp-cards${b.cols === 2 ? " c2" : ""}`}>
                                {b.items.map((c, j) => (
                                    <div key={j} className="bp-card">
                                        {c.icon && <div className="bp-ci" aria-hidden="true" style={c.tone === "bad" ? { background: "#FEF3F2" } : undefined}>{c.icon}</div>}
                                        <h3>{c.title}</h3>
                                        <H as="p" html={c.text} />
                                        {c.tag && <span className={`bp-tag${c.tagMuted ? " muted" : ""}`}>{c.tag}</span>}
                                    </div>
                                ))}
                            </div>
                        )
                    case "stats":
                        return (
                            <div key={i} className="bp-stats">
                                {b.items.map((s, j) => <div key={j} className="bp-stat"><div className="big">{s.value}</div><div className="lbl">{s.label}</div></div>)}
                            </div>
                        )
                    case "callout": {
                        const icon = { tip: "✅", warn: "⚠️", note: "🧭" }[b.tone || "note"]
                        return (
                            <div key={i} className={`bp-callout ${b.tone || "note"}`}>
                                <span aria-hidden="true">{icon}</span>
                                <p>{b.title && <strong>{b.title}</strong>}<H html={b.html} /></p>
                            </div>
                        )
                    }
                    case "compare":
                        return (
                            <div key={i} className="bp-compare">
                                {[["bad", "✗", b.bad], ["good", "✓", b.good]].map(([k, m, col]) => (
                                    <div key={k} className={`bp-col ${k}`}>
                                        <h3>{col.title}</h3>
                                        <ul>{col.items.map((it, j) => <li key={j}><span aria-hidden="true">{m}</span><H html={it} /></li>)}</ul>
                                    </div>
                                ))}
                            </div>
                        )
                    case "tabs": return <Tabs key={i} id={`tabs-${i}`} tabs={b.tabs} />
                    case "checklist": return <Checklist key={i} title={b.title} items={b.items} doneText={b.doneText} />
                    case "timeline":
                        return (
                            <div key={i} className="bp-timeline">
                                {b.items.map((s, j) => <div key={j} className="bp-step"><b>{s.when}</b><span>{s.text}</span></div>)}
                            </div>
                        )
                    case "cta":
                        return (
                            <div key={i} className="bp-mid">
                                <div><h3>{b.title}</h3><p>{b.text}</p></div>
                                <Link className="bp-btn bp-btn-w" href={b.href} data-event="free_design_cta" data-package="blog-mid">{b.button}</Link>
                            </div>
                        )
                    default: return null
                }
            })}
        </>
    )
}
