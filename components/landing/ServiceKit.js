/**
 * Shared UI kit for the service and industry templates (26 Sep 2026).
 * One stylesheet + one icon set so /services/<slug>/ and
 * /industries/<slug>/ can't drift apart visually.
 * Classes are prefixed `svc-`; theme = Chivo/Noto Sans, #006D77, #DBECE5,
 * navy #101828 for dark bands. No emoji icons.
 */
import { BUILD_TIERS, RETAINER, ADDONS, PLATFORM_PRICES } from "@/content/pricing"
/* ── Inline SVG line icons (no emoji — they render differently per device) ── */
export const ICONS = {
    monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
    home: <><path d="M4 20V10l8-6 8 6v10z" /><path d="M9 20v-6h6v6" /></>,
    cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.5 12h11L21 7H6" /></>,
    grid: <><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></>,
    edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>,
    bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />,
    phone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
    download: <><path d="M12 3v12M7 10l5 5 5-5" /><path d="M5 21h14" /></>,
    server: <><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></>,
    bell: <><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21h4" /></>,
    wifi: <><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" /><path d="M12 19.5h.01" /></>,
    sparkle: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    flow: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M6 9v4a2 2 0 0 0 2 2h7" /></>,
    link: <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>,
    chart: <><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></>,
    pin: <><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></>,
    list: <><path d="M9 6h12M9 12h12M9 18h12" /><path d="M4 6h.01M4 12h.01M4 18h.01" /></>,
    chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />,
    filter: <path d="M3 5h18l-7 8v6l-4 2v-8z" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
    shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
    refresh: <><path d="M20 12a8 8 0 1 1-2.3-5.7" /><path d="M20 4v5h-5" /></>,
}
export function Icon({ name }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {ICONS[name] || ICONS.sparkle}
        </svg>
    )
}

export const SVC_CSS = `
.svc{color:#344054}
.svc h1,.svc h2,.svc h3,.svc h4{color:#101828}
.svc-sec{padding:96px 0}
.svc-h2{font-size:40px;line-height:1.2}
.svc-lead{font-size:19px;line-height:1.7;color:#475467;max-width:720px}
.svc-center{text-align:center}.svc-center .svc-lead{margin:14px auto 0}
.svc-mint{background:#EEF6F2}
.svc-hero{background:linear-gradient(180deg,#EEF6F2,#fff);padding:30px 0 90px}
.svc-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center;margin-top:18px}
.svc-hero h1{font-size:50px;line-height:1.15;margin-top:20px}
.svc-hero h1 span{color:#006D77}
.svc-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}
.svc-chip{background:#fff;border:1px solid #E4E7EC;border-radius:99px;padding:7px 14px;font-size:14px;color:#101828}
.svc-chip b{color:#006D77}
.svc-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}
.svc-browser{background:#fff;border-radius:14px;box-shadow:0 40px 70px rgba(16,24,40,.14);overflow:hidden;border:1px solid #E4E7EC}
.svc-browser .bar{height:34px;background:#F2F4F7;display:flex;align-items:center;gap:6px;padding:0 12px}
.svc-browser .bar i{width:10px;height:10px;border-radius:50%;background:#D0D5DD;display:block}
.svc-browser .bar span{margin-left:10px;font-size:12px;color:#667085;background:#fff;border-radius:6px;padding:3px 10px}
.svc-browser img{display:block;width:100%;height:360px;object-fit:cover;object-position:top;background:#fff}
.svc-floater{position:absolute;left:-24px;bottom:-24px;background:#fff;border-radius:12px;box-shadow:0 24px 48px rgba(16,24,40,.14);padding:14px 18px;font-size:14px;line-height:1.5}
.svc-floater b{color:#101828}
.svc-proof{padding:26px 0;border-top:1px solid #E4E7EC;border-bottom:1px solid #E4E7EC}
.svc-proof .row-in{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:34px;font-size:14px;color:#667085}
.svc-proof a.client{font-weight:700;color:#101828;font-size:18px}
.svc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:56px}
.svc-card{border:1px solid #E4E7EC;border-radius:16px;padding:30px;background:#fff;display:flex;flex-direction:column;transition:transform .2s,box-shadow .2s,border-color .2s}
.svc-card:hover{border-color:#006D77;transform:translateY(-3px);box-shadow:0 18px 40px rgba(0,109,119,.08)}
.svc-ico{width:48px;height:48px;border-radius:12px;background:#DBECE5;display:flex;align-items:center;justify-content:center;margin-bottom:18px}
.svc-ico svg{width:24px;height:24px;stroke:#006D77;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.svc-card h3{font-size:21px}
.svc-card p{margin:10px 0 16px;font-size:16px;line-height:1.65;color:#475467;flex:1}
.svc-more{font-weight:500;font-size:15px;color:#006D77}
.svc-split{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.svc-photo{border-radius:18px;overflow:hidden;box-shadow:0 30px 60px rgba(16,24,40,.12);border:1px solid #E4E7EC;background:#fff}
.svc-photo img{width:100%;display:block;height:460px;object-fit:cover;object-position:top}
.svc-steps{margin-top:26px}
.svc-step{display:grid;grid-template-columns:44px 1fr;gap:16px;padding:18px 0;border-bottom:1px solid #E4E7EC}
.svc-step .n{width:44px;height:44px;border-radius:50%;background:#006D77;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center}
.svc-step h4{font-size:18px}.svc-step p{margin:4px 0 0;font-size:15.5px;line-height:1.6;color:#475467}
.svc-outs{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:48px}
.svc-out{background:#fff;border:1px solid #E4E7EC;border-radius:14px;padding:26px}
.svc-out h4{font-size:18px;margin-bottom:6px}.svc-out p{font-size:15px;line-height:1.6;margin:0;color:#475467}
.svc-out .tech{display:block;margin-top:12px;font-size:13px;color:#667085}
.svc-inline-links{text-align:center;margin-top:28px;font-size:15.5px}
.svc-inline-links a{color:#006D77;margin:0 6px}
.svc-pricing{background:#006D77;padding:96px 0}
.svc-pricing .svc-h2{color:#fff}.svc-pricing .svc-lead{color:#D6EEEC}
.svc-tiers{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:22px;margin-top:56px}
.svc-tier{background:#fff;border-radius:18px;padding:34px 30px;position:relative;display:flex;flex-direction:column}
.svc-tier.feat{outline:3px solid #FFB38A}
.svc-badge{position:absolute;top:-14px;left:30px;background:#D9541A;color:#fff;font-size:13px;font-weight:700;padding:5px 12px;border-radius:99px}
.svc-tier h3{font-size:22px}.svc-tier .scope{font-size:15px;color:#667085}
.svc-price{font-size:44px;font-weight:700;color:#101828;margin:14px 0 0;line-height:1.1}
.svc-price small{font-size:15px;color:#667085;font-weight:400}
.svc-tier ul{list-style:none;padding:0;margin:20px 0 26px;font-size:15px;flex:1}
.svc-tier li{padding:6px 0 6px 26px;position:relative;line-height:1.5}
.svc-tier li:before{content:"";position:absolute;left:0;top:12px;width:14px;height:8px;border-left:2px solid #006D77;border-bottom:2px solid #006D77;transform:rotate(-45deg)}
.svc-tier .note{font-size:13px;color:#667085;margin:-12px 0 18px}
.svc-extras{margin-top:40px;background:rgba(255,255,255,.08);border-radius:16px;padding:24px 28px;display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;font-size:14.5px;color:#D6EEEC}
.svc-extras b{display:block;color:#fff;font-size:17px}
.svc-pnote{text-align:center;margin-top:28px;font-size:15px;color:#D6EEEC}
.svc-pnote a{color:#fff;text-decoration:underline;margin:0 6px}
.svc-case{display:grid;grid-template-columns:1.1fr .9fr;border:1px solid #E4E7EC;border-radius:20px;overflow:hidden;background:#fff}
.svc-case .shot img{width:100%;height:100%;min-height:380px;object-fit:cover;object-position:top;display:block;background:#fff}
.svc-case .txt{padding:44px}
.svc-tags{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 24px}
.svc-tags span{background:#DBECE5;color:#00545C;font-size:13px;padding:5px 11px;border-radius:8px}
.svc-concept{display:inline-block;background:#FFF3EA;color:#B4461A;font-size:13px;font-weight:600;padding:5px 12px;border-radius:99px}
.svc-table-wrap{overflow-x:auto;margin-top:44px}
.svc-table{width:100%;min-width:640px;border-collapse:separate;border-spacing:0;border:1px solid #E4E7EC;border-radius:14px;overflow:hidden;font-size:15.5px;background:#fff}
.svc-table th,.svc-table td{padding:16px 20px;text-align:left;border-bottom:1px solid #E4E7EC}
.svc-table th{background:#F9FAFB;color:#101828}
.svc-table td.us{background:#EEF6F2;color:#101828;font-weight:500}
.svc-table tr:last-child td{border-bottom:0}
.svc-faq{display:grid;grid-template-columns:.8fr 1.2fr;gap:64px}
.svc-faq details{border-bottom:1px solid #E4E7EC;padding:22px 0}
.svc-faq summary{font-weight:700;font-size:19px;color:#101828;cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:20px}
.svc-faq summary::-webkit-details-marker{display:none}
.svc-faq summary::after{content:"+";color:#006D77;font-size:24px;line-height:1}
.svc-faq details[open] summary::after{content:"–"}
.svc-faq details p{margin:12px 0 0;color:#475467;line-height:1.7}
.svc-guides{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:44px}
.svc-guide{border-radius:14px;background:#fff;border:1px solid #E4E7EC;padding:24px;display:block;transition:border-color .2s}
.svc-guide:hover{border-color:#006D77}
.svc-guide span{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#006D77;font-weight:700}
.svc-guide h4{font-size:17.5px;margin:10px 0 0;line-height:1.35}
.svc-cities{margin-top:36px;display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
.svc-cities a{border:1px solid #D0D5DD;border-radius:99px;padding:8px 16px;font-size:14.5px;color:#101828;background:#fff}
.svc-others{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:40px}
.svc-other{border:1px solid #E4E7EC;border-radius:14px;padding:22px;display:flex;gap:14px;align-items:flex-start;background:#fff}
.svc-other:hover{border-color:#006D77}
.svc-other h4{font-size:16.5px}.svc-other p{font-size:14px;color:#667085;margin:4px 0 0;line-height:1.5}
.svc-cta{background:#101828;border-radius:24px;padding:64px;display:grid;grid-template-columns:1.3fr .7fr;gap:40px;align-items:center}
.svc-cta h2{color:#fff;font-size:38px}.svc-cta p{color:#C3CAD5;margin:14px 0 0;font-size:17px;line-height:1.7}
.svc-btn-white{background:#fff;color:#00545C;border-radius:10px;padding:15px 26px;font-weight:700;text-align:center;display:block}
.svc-btn-outline{color:#fff;border:1.5px solid rgba(255,255,255,.6);border-radius:10px;padding:14px 26px;font-weight:700;text-align:center;display:block}
@media(max-width:991px){
 .svc-hero-grid,.svc-split,.svc-case,.svc-faq,.svc-cta{grid-template-columns:1fr}
 .svc-cards,.svc-outs,.svc-guides{grid-template-columns:1fr 1fr}
 .svc-hero h1{font-size:38px}.svc-h2{font-size:30px}.svc-sec,.svc-pricing{padding:70px 0}
 .svc-floater{display:none}.svc-photo img{height:320px}.svc-cta{padding:40px}
}
@media(max-width:575px){.svc-cards,.svc-outs,.svc-guides{grid-template-columns:1fr}.svc-hero h1{font-size:32px}}
`


/* ── Price resolution: everything comes from content/pricing.js ── */
const tierById = (id) => BUILD_TIERS.find((t) => t.id === id)
const addonByName = (n) => ADDONS.find((a) => a.name === n)
const retainerLabel = `${RETAINER.priceLabel}${RETAINER.period}`

export function resolveValue(v) {
    if (v == null) return ""
    if (typeof v === "string") return v
    if (v.retainer) return retainerLabel
    if (v.addon) return addonByName(v.addon)?.price ?? ""
    if (v.platform) {
        const p = PLATFORM_PRICES[v.platform]
        return p ? `$${p.min}–${p.max}${v.suffix || ""}` : ""
    }
    if (v.tier) {
        const t = tierById(v.tier)
        return t ? `${v.prefix || ""}${t[v.field || "priceLabel"]}${v.suffix || ""}` : ""
    }
    return ""
}

/* A pricing reference → a card model */
export function pricingCard(ref) {
    if (ref.retainer) {
        return {
            key: "retainer", name: RETAINER.name, scope: "Monthly plan",
            price: RETAINER.priceLabel, per: RETAINER.period,
            lines: RETAINER.features.slice(0, 6), note: RETAINER.note,
        }
    }
    if (ref.addon) {
        const a = addonByName(ref.addon)
        if (!a) return null
        return { key: a.name, name: a.name, scope: "Add-on", price: a.price, lines: [a.note, "Fixed quote before we start", "You own the result"] }
    }
    const t = tierById(ref.tier)
    if (!t) return null
    return {
        key: t.id, name: t.name, scope: t.scope, price: t.priceLabel, featured: t.featured,
        lines: [
            t.delivery === "Scoped per project" ? "Timeline scoped per project" : `Typical delivery: ${t.delivery}`,
            t.tagline,
            "SEO and structured data built in",
            "You own the code",
        ],
    }
}

export function extraLine(ref) {
    if (ref.retainer) return { value: retainerLabel, label: `${RETAINER.name} (optional)` }
    if (ref.addon) { const a = addonByName(ref.addon); return a && { value: a.price, label: a.name } }
    const t = tierById(ref.tier); return t && { value: t.priceLabel, label: `${t.name} · ${t.scope}` }
}

