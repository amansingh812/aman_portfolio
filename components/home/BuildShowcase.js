"use client"
/**
 * "What we build" showcase (homepage, Nov 2026).
 * One section replaces three (Who we work with, AI & Automation, Services):
 * pill tabs on top, text on the left, a looping mini-scene on the right.
 * Text for every tab is server-rendered (hidden panels stay in the HTML).
 */
import { useState } from "react"
import Link from "next/link"
import ProjectThumb from "@/components/portfolio/ProjectThumb"

const CSS = `
.bs-tabs{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:28px}
.bs-tab{min-height:48px;padding:0 22px;border-radius:99px;border:1.5px solid #E4E7EC;background:#fff;font:inherit;font-weight:700;color:#475467;cursor:pointer;transition:all .25s}
.bs-tab:hover{border-color:#006D77;color:#004349}
.bs-tab[aria-selected=true]{background:#101828;border-color:#101828;color:#fff}
.bs-card{display:grid;grid-template-columns:1fr 1.1fr;gap:40px;align-items:center;background:#F8FAFB;border:1px solid #E4E7EC;border-radius:28px;padding:44px}
.bs-card[hidden]{display:none}
.bs-card h3{font-size:clamp(26px,3vw,36px);line-height:1.15;color:#101828;margin:0 0 14px}
.bs-card p{font-size:17px;color:#475467;margin:0 0 16px}
.bs-list{list-style:none;padding:0;margin:0 0 18px}
.bs-list li{padding:6px 0 6px 28px;position:relative;color:#344054}
.bs-list li:before{content:"✓";position:absolute;left:0;color:#067647;font-weight:800}
.bs-for{font-size:14px;color:#667085;margin-bottom:22px}
.bs-for b{color:#344054}
.bs-stage{position:relative;aspect-ratio:4/3;border-radius:22px;background:linear-gradient(145deg,#E6F3F5,#fff 60%,#FFF4EC);border:1px solid #E4E7EC;overflow:hidden;display:grid;place-items:center;padding:7%}
.bs-win{width:100%;background:#fff;border-radius:14px;box-shadow:0 22px 44px -22px rgba(16,24,40,.35);overflow:hidden;animation:bsRise .6s both}
.bs-bar{display:flex;gap:6px;padding:9px 12px;background:#F2F4F7}
.bs-bar b{width:8px;height:8px;border-radius:50%;background:#D0D5DD}
.bs-pad{padding:16px}
.bs-shot{width:100%;border-radius:14px;overflow:hidden;background:#fff;box-shadow:0 22px 44px -22px rgba(16,24,40,.45);animation:bsRise .6s both}
.bs-shot img{display:block;width:100%;height:auto}
.bs-cap{position:absolute;left:0;right:0;bottom:0;padding:8px 14px;font-size:12px;color:#fff;background:linear-gradient(transparent,rgba(16,24,40,.8));text-align:left}
.bs-stage.photo{padding:0}.bs-stage.photo .bs-shot{border-radius:0;height:100%}.bs-stage.photo img{height:100%;object-fit:cover}
.bs-l{height:9px;border-radius:5px;background:#EAECF0;margin-top:8px}
.bs-toast{position:absolute;right:6%;top:10%;background:#101828;color:#fff;font-size:13px;font-weight:700;padding:10px 14px;border-radius:12px;animation:bsToast 4s infinite}
.bs-toast.b{top:auto;bottom:10%;right:auto;left:6%;background:#fff;color:#067647;border:1px solid #ABEFC6;animation-delay:2s}
.bs-prod{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.bs-prod div{border-radius:10px;background:#E6F3F5;height:70px;position:relative}
.bs-prod div:nth-child(2){background:#FFF4EC;animation:bsPick 4s infinite}
.bs-bars{display:flex;align-items:flex-end;gap:10px;height:90px;margin-top:10px}
.bs-bars i{flex:1;border-radius:6px 6px 0 0;background:#006D77;transform-origin:bottom;animation:bsGrow 3.5s infinite}
.bs-bars i:nth-child(2n){background:#83C5BE}
.bs-flow{display:flex;align-items:center;justify-content:space-between;width:100%;position:relative}
.bs-node{width:27%;background:#fff;border:1.5px solid #BEE1E6;border-radius:14px;padding:14px 8px;text-align:center;font-size:13px;font-weight:700;color:#004349;z-index:1;animation:bsNode 4.5s infinite}
.bs-node span{display:block;font-size:22px;margin-bottom:4px}
.bs-flow:before{content:"";position:absolute;left:10%;right:10%;top:50%;height:3px;background:repeating-linear-gradient(90deg,#83C5BE 0 8px,transparent 8px 14px)}
.bs-flow:after{content:"";position:absolute;top:calc(50% - 6px);left:10%;width:14px;height:14px;border-radius:50%;background:#F26B1D;animation:bsRun 4.5s infinite linear}
@keyframes bsRise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes bsToast{0%,10%{opacity:0;transform:translateY(8px)}18%,70%{opacity:1;transform:none}80%,100%{opacity:0}}
@keyframes bsPick{0%,30%{transform:none;box-shadow:none}45%,75%{transform:translateY(-6px);box-shadow:0 10px 20px -8px rgba(242,107,29,.6)}100%{transform:none}}
@keyframes bsGrow{0%{transform:scaleY(.2)}40%,85%{transform:scaleY(1)}100%{transform:scaleY(.2)}}
@keyframes bsRun{0%{left:10%}100%{left:88%}}
@keyframes bsNode{0%,100%{border-color:#BEE1E6}50%{border-color:#006D77;box-shadow:0 8px 18px -10px rgba(0,109,119,.6)}}
@media(max-width:991px){.bs-card{grid-template-columns:1fr;padding:24px;gap:24px}.bs-card>div:last-child{order:-1}}
@media(prefers-reduced-motion:reduce){.bs-card *,.bs-card *:before,.bs-card *:after{animation:none!important}.bs-toast{opacity:1}}
`

const TOASTS = {
    website: ["📞 New call from your site", "✓ Enquiry form received"],
    store: ["🛒 Added to cart", "✓ Payment received"],
    app: ["👤 New user signed up", "✓ Report generated"],
    automation: ["⚡ Replied in seconds", "✓ Saved to CRM"],
}

/* Real image when the item has one: a client-site screenshot (shot) or a photo. */
function Visual({ it }) {
    const [a, b] = TOASTS[it.id] || []
    if (it.shot) return (<>
        <div className="bs-shot"><div className="bs-bar"><b /><b /><b /></div>
            <ProjectThumb slug={it.shot.slug} remote={it.shot.remote} name={it.shot.name} alt={`${it.shot.name} website screenshot`} aspect="16 / 10" />
        </div>
        <span className="bs-toast">{a}</span><span className="bs-toast b">{b}</span>
    </>)
    if (it.photo) return (<>
        <div className="bs-shot"><img src={it.photo} alt="" loading="lazy" /></div>
        <span className="bs-toast">{a}</span><span className="bs-toast b">{b}</span>
    </>)
    return <Scene kind={it.id} />
}

function Scene({ kind }) {
    if (kind === "website") return (<>
        <div className="bs-win"><div className="bs-bar"><b /><b /><b /></div><div className="bs-pad">
            <div className="bs-l" style={{ width: "42%", height: 13, background: "#006D77" }} />
            <div className="bs-l" style={{ width: "82%" }} /><div className="bs-l" style={{ width: "64%" }} />
            <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                <div className="bs-l" style={{ width: 92, height: 28, background: "#101828", margin: 0 }} />
                <div className="bs-l" style={{ width: 92, height: 28, margin: 0 }} />
            </div>
        </div></div>
        <span className="bs-toast">📞 New call from your site</span>
        <span className="bs-toast b">✓ Enquiry form received</span>
    </>)
    if (kind === "store") return (<>
        <div className="bs-win"><div className="bs-bar"><b /><b /><b /></div><div className="bs-pad">
            <div className="bs-prod"><div /><div /><div /></div>
            <div className="bs-l" style={{ width: "50%" }} />
            <div className="bs-l" style={{ width: 110, height: 28, background: "#101828" }} />
        </div></div>
        <span className="bs-toast">🛒 Added to cart</span>
        <span className="bs-toast b">✓ Payment received</span>
    </>)
    if (kind === "app") return (
        <div className="bs-win"><div className="bs-bar"><b /><b /><b /></div><div className="bs-pad">
            <div className="bs-l" style={{ width: "36%", height: 12, background: "#101828" }} />
            <div className="bs-bars">{[.5, .8, .6, 1, .7, .9].map((h, k) => <i key={k} style={{ height: `${h * 100}%`, animationDelay: `${k * .12}s` }} />)}</div>
            <div className="bs-l" style={{ width: "90%" }} /><div className="bs-l" style={{ width: "70%" }} />
        </div></div>)
    return (
        <div className="bs-flow">
            <div className="bs-node"><span>📝</span>Enquiry</div>
            <div className="bs-node" style={{ animationDelay: "1.5s" }}><span>🤖</span>Instant reply</div>
            <div className="bs-node" style={{ animationDelay: "3s" }}><span>📇</span>Saved to CRM</div>
        </div>)
}

export default function BuildShowcase({ items }) {
    const [sel, setSel] = useState(0)
    const key = (e, i) => {
        if (e.key === "ArrowRight") setSel((i + 1) % items.length)
        if (e.key === "ArrowLeft") setSel((i - 1 + items.length) % items.length)
    }
    return (
        <div>
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            <div className="bs-tabs" role="tablist" aria-label="What we build">
                {items.map((it, i) => (
                    <button key={it.id} role="tab" id={`bs-t-${it.id}`} aria-controls={`bs-p-${it.id}`} aria-selected={sel === i}
                        tabIndex={sel === i ? 0 : -1} className="bs-tab" onClick={() => setSel(i)} onKeyDown={(e) => key(e, i)}>{it.tab}</button>
                ))}
            </div>
            {items.map((it, i) => (
                <div key={it.id} className="bs-card" role="tabpanel" id={`bs-p-${it.id}`} aria-labelledby={`bs-t-${it.id}`} hidden={sel !== i}>
                    <div>
                        <h3>{it.title}</h3>
                        <p>{it.text}</p>
                        <ul className="bs-list">{it.points.map((p) => <li key={p}>{p}</li>)}</ul>
                        <div className="bs-for"><b>Good for:</b> {it.goodFor}</div>
                        <Link href={it.href} className="btn btn-black icon-arrow-right-white mr-10 mb-10" data-event="cta_path_click" data-package={it.id}>{it.cta}</Link>
                        <Link href="#start" className="btn btn-default mb-10">Start my project</Link>
                    </div>
                    <div>
                        <div className={`bs-stage${it.photo && !it.shot ? " photo" : ""}`} aria-hidden="true">{sel === i && <Visual it={it} />}</div>
                        {it.shot && <p className="text-body-small color-gray-500 mt-10 mb-0 text-center">Live client site: <Link href={`/work/${it.shot.slug}/`} className="color-green-900">{it.shot.name} →</Link></p>}
                    </div>
                </div>
            ))}
        </div>
    )
}
