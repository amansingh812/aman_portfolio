'use client'
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react"

/**
 * Portfolio thumbnail that never renders as a black/empty box (5 Oct 2026).
 *
 * Why: every case-study `image` was a live WordPress mShots URL
 * (s0.wp.com/mshots/...). mShots renders on demand: the first hit returns a
 * small "generating" placeholder, captures of dark heroes come back black,
 * and on mobile data the request often times out. Visitors from ads saw
 * black cards.
 *
 * Order tried:
 *   1. Self-hosted screenshot  /assets/imgs/work/<slug>.jpg
 *      (created by `npm run shots`, scripts/capture-work-screenshots.mjs)
 *   2. The remote mShots URL, rejected if it is the small placeholder
 *   3. A branded placeholder card with the project name (never black)
 */
const MSHOTS_MIN_WIDTH = 600 // mShots placeholder is 400px wide

export function localShot(slug) {
    return `/assets/imgs/work/${slug}.jpg`
}

export default function ProjectThumb({
    slug,
    remote,
    name = "",
    alt,
    height,
    aspect = "16 / 10",
    eager = false,
    style = {},
}) {
    const sources = [slug && localShot(slug), remote].filter(Boolean)
    const [idx, setIdx] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const imgRef = useRef(null)

    const failed = idx >= sources.length

    function next() {
        setLoaded(false)
        setIdx((i) => i + 1)
    }

    function onLoad(e) {
        const img = e.currentTarget
        const isRemote = sources[idx] === remote && /mshots/.test(remote || "")
        if (isRemote && img.naturalWidth > 0 && img.naturalWidth < MSHOTS_MIN_WIDTH) {
            next() // mShots "generating" placeholder
            return
        }
        setLoaded(true)
    }

    // An image that finished loading (or failing) before hydration fires no event.
    useEffect(() => {
        const img = imgRef.current
        if (!img || !img.complete) return
        if (img.naturalWidth === 0) next()
        else onLoad({ currentTarget: img })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idx])

    const box = {
        position: "relative",
        width: "100%",
        ...(height ? { height } : { aspectRatio: aspect }),
        background: "linear-gradient(135deg, #F1F4FB 0%, #E4E7EC 100%)",
        overflow: "hidden",
        ...style,
    }

    return (
        // .pt-frame lets page CSS size the frame (e.g. `.cs-browser .pt-frame{height:560px}`)
        <div className="pt-frame" style={box}>
            {/* Placeholder sits underneath until a real image paints over it */}
            {(!loaded || failed) && (
                <div
                    aria-hidden={!failed}
                    style={{
                        position: "absolute", inset: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        padding: 16, textAlign: "center",
                        color: "#475467", fontWeight: 700, fontSize: 18,
                    }}
                >
                    {failed ? name : ""}
                </div>
            )}
            {!failed && (
                <img
                    ref={imgRef}
                    key={sources[idx]}
                    src={sources[idx]}
                    alt={alt || `${name} website`}
                    loading={eager ? "eager" : "lazy"}
                    decoding="async"
                    onLoad={onLoad}
                    onError={next}
                    style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "top center",
                        display: "block",
                        opacity: loaded ? 1 : 0,
                        transition: "opacity .25s ease",
                    }}
                />
            )}
        </div>
    )
}
