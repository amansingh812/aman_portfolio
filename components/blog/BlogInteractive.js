"use client"
/* Client-side pieces of the new blog format: reading progress, TOC highlight,
   tabs and checklist. Everything renders server-side first; JS only enhances. */
import { useEffect, useState } from "react"

export function ReadingProgress() {
    const [w, setW] = useState(0)
    useEffect(() => {
        const on = () => {
            const h = document.documentElement
            setW((h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100)
        }
        addEventListener("scroll", on, { passive: true })
        return () => removeEventListener("scroll", on)
    }, [])
    return <div className="bp-progress" style={{ width: `${w}%` }} aria-hidden="true" />
}

export function Toc({ items }) {
    const [on, setOn] = useState(items[0]?.id)
    useEffect(() => {
        const io = new IntersectionObserver(
            (es) => es.forEach((e) => e.isIntersecting && setOn(e.target.id)),
            { rootMargin: "-20% 0px -70% 0px" }
        )
        items.forEach((i) => { const el = document.getElementById(i.id); el && io.observe(el) })
        return () => io.disconnect()
    }, [items])
    return (
        <nav className="bp-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
                {items.map((i) => (
                    <li key={i.id}><a href={`#${i.id}`} className={on === i.id ? "on" : ""}>{i.text}</a></li>
                ))}
            </ol>
        </nav>
    )
}

export function Tabs({ id, tabs }) {
    const [sel, setSel] = useState(0)
    const key = (e, i) => {
        if (e.key === "ArrowRight") setSel((i + 1) % tabs.length)
        if (e.key === "ArrowLeft") setSel((i - 1 + tabs.length) % tabs.length)
    }
    return (
        <div className="bp-tabs">
            <div className="bp-tablist" role="tablist">
                {tabs.map((t, i) => (
                    <button key={i} role="tab" id={`${id}-t${i}`} aria-controls={`${id}-p${i}`}
                        aria-selected={sel === i} tabIndex={sel === i ? 0 : -1}
                        onClick={() => setSel(i)} onKeyDown={(e) => key(e, i)}>{t.label}</button>
                ))}
            </div>
            {tabs.map((t, i) => (
                <div key={i} className="bp-tabpanel" role="tabpanel" id={`${id}-p${i}`}
                    aria-labelledby={`${id}-t${i}`} hidden={sel !== i}
                    dangerouslySetInnerHTML={{ __html: t.html }} />
            ))}
        </div>
    )
}

export function Checklist({ title, items, doneText }) {
    const [done, setDone] = useState(() => items.map(() => false))
    const n = done.filter(Boolean).length
    const pct = Math.round((n / items.length) * 100)
    return (
        <div className="bp-check">
            <div className="bp-check-top"><h3>{title}</h3><span><strong style={{ color: "var(--teal-dd)" }}>{pct}%</strong> done</span></div>
            <div className="bp-bar" aria-hidden="true"><i style={{ width: `${pct}%` }} /></div>
            {items.map((it, i) => (
                <label key={i} className={`bp-item${done[i] ? " done" : ""}`}>
                    <input type="checkbox" checked={done[i]}
                        onChange={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))} />
                    <span><span className="t">{it.t}</span><span className="w">{it.w}</span></span>
                    {it.e && <span className="e">{it.e}</span>}
                </label>
            ))}
            {pct === 100 && doneText && <p role="status" style={{ marginTop: 14, color: "#067647", fontWeight: 700 }}>{doneText}</p>}
        </div>
    )
}
