'use client'
/**
 * Client reviews carousel — homepage.
 *
 * Rebuilt Aug 2026. The original showed four cramped cards at once, which
 * truncated every quote so none of them got read. This shows TWO side by side
 * on desktop and ONE on mobile.
 *
 * HOW THE RESPONSIVE PAIRING WORKS (and why it is done this way):
 * both cards are always rendered — reviews[index] and reviews[index + 1] — and
 * the second is hidden with CSS below 992px. Deciding the count in JS would
 * mean reading window width during render, which produces a hydration mismatch
 * between server and client. Letting CSS own the breakpoint keeps the markup
 * identical on both, so the carousel is correct on first paint.
 *
 * Advancing moves by one review, so desktop pairs overlap (1+2, 2+3, 3+4…).
 * That reads as a continuous belt rather than discrete pages, and it means the
 * dot count always equals the review count on both layouts.
 *
 * Data comes from content/site.js REVIEWS. Renders nothing when that array is
 * empty rather than showing placeholder cards (CLAUDE.md §1 — no invented
 * testimonials, not even as filler).
 */
import Link from "next/link"
import { useState, useCallback, useEffect, useRef } from "react"
import { REVIEWS } from "@/content/site"

const AUTOPLAY_MS = 7000

function ReviewCard({ review, hideOnMobile }) {
    const initials = review.name.split(" ").map((w) => w[0]).slice(0, 2).join("")
    return (
        <article className={`rv-card${hideOnMobile ? " rv-card--second" : ""}`}>
            <div>
                <div className="rv-mark" aria-hidden="true">&ldquo;</div>
                <p className="rv-quote">{review.quote}</p>
            </div>
            <div className="rv-foot">
                <div className="rv-avatar" aria-hidden="true">{initials}</div>
                <div className="rv-who">
                    <div className="text-heading-6 color-gray-900">{review.name}</div>
                    <div className="text-body-small color-gray-500">
                        {review.company}
                        {review.location && ` · ${review.location}`}
                    </div>
                </div>
                {review.industry && <span className="rv-tag">{review.industry}</span>}
                {review.project && (
                    <Link
                        href={`/work/${review.project}/`}
                        className="color-green-900 text-body-small rv-link"
                    >
                        See the project →
                    </Link>
                )}
            </div>
        </article>
    )
}

const ClientReviews = () => {
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)
    const total = REVIEWS?.length || 0
    const timer = useRef(null)

    const go = useCallback((n) => setIndex(((n % total) + total) % total), [total])
    const next = useCallback(() => go(index + 1), [go, index])
    const prev = useCallback(() => go(index - 1), [go, index])

    /* Autoplay pauses on hover and on keyboard focus, so a visitor part-way
       through a long quote never has it swapped out from under them. */
    useEffect(() => {
        if (paused || total <= 1) return
        timer.current = setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS)
        return () => clearTimeout(timer.current)
    }, [index, paused, total])

    if (!total) return null

    const first = REVIEWS[index]
    const second = total > 1 ? REVIEWS[(index + 1) % total] : null

    return (
        <div
            className="reviews-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Client reviews"
        >
            <style dangerouslySetInnerHTML={{ __html: `
.reviews-carousel { position:relative; }
.rv-grid { display:grid; grid-template-columns:1fr; gap:24px; align-items:stretch; }
.rv-card { background:#fff; border:1.5px solid #E4E7EC; border-radius:20px;
  padding:40px 40px 32px; display:flex; flex-direction:column;
  justify-content:space-between; height:100%; }
.rv-card--second { display:none; }
.rv-mark { font-size:56px; line-height:1; color:#83C5BE; font-family:Georgia,serif; }
.rv-quote { font-size:18px; line-height:1.7; color:#1D2939; margin:10px 0 30px; }
.rv-foot { display:flex; align-items:center; gap:14px; flex-wrap:wrap;
  border-top:1px solid #F0F1F3; padding-top:22px; }
.rv-avatar { width:48px; height:48px; border-radius:50%; background:#E1F5EE;
  color:#0F6E56; display:flex; align-items:center; justify-content:center;
  font-weight:500; font-size:15px; flex-shrink:0; }
.rv-who { flex:1; min-width:150px; }
.rv-tag { display:inline-block; background:#F4FAFB; border:1px solid #BEE1E6;
  color:#00565F; border-radius:999px; padding:4px 13px; font-size:12px; }
.rv-link { white-space:nowrap; }
.rv-nav { display:flex; align-items:center; gap:10px; margin-top:30px; }
.rv-btn { width:44px; height:44px; border-radius:50%; border:1.5px solid #E4E7EC;
  background:#fff; cursor:pointer; font-size:18px; line-height:1; color:#1D2939;
  transition:border-color .2s, background .2s; }
.rv-btn:hover { border-color:#83C5BE; background:#F4FAFB; }
.rv-dots { display:flex; gap:8px; margin-left:8px; }
.rv-dot { width:9px; height:9px; border-radius:50%; border:0; padding:0;
  background:#D0D5DD; cursor:pointer; transition:background .2s, width .2s; }
.rv-dot[aria-current="true"] { background:#006D77; width:26px; border-radius:999px; }

/* ≥992px: two reviews side by side. Below this the second card is hidden and
   the grid collapses to a single column — one full-width review, stacked. */
@media (min-width: 992px) {
  .rv-grid { grid-template-columns:1fr 1fr; }
  .rv-card--second { display:flex; }
}
@media (max-width: 575px) {
  .rv-card { padding:30px 24px 26px; }
  .rv-quote { font-size:17px; }
  .rv-mark { font-size:46px; }
}
` }} />

            {/* aria-live announces the change once for the whole group rather
                than firing separately for each card. */}
            <div className="rv-grid" aria-live="polite">
                <ReviewCard review={first} />
                {second && <ReviewCard review={second} hideOnMobile />}
            </div>

            <div className="rv-nav">
                <button type="button" className="rv-btn" onClick={prev} aria-label="Previous review">‹</button>
                <button type="button" className="rv-btn" onClick={next} aria-label="Next review">›</button>
                <div className="rv-dots">
                    {REVIEWS.map((rev, i) => (
                        <button
                            type="button"
                            key={rev.name + i}
                            className="rv-dot"
                            aria-current={i === index}
                            aria-label={`Show review ${i + 1} of ${total}: ${rev.name}`}
                            onClick={() => go(i)}
                        />
                    ))}
                </div>
                <span className="text-body-small color-gray-500" style={{ marginLeft: "auto" }}>
                    {index + 1} / {total}
                </span>
            </div>
        </div>
    )
}

export default ClientReviews
