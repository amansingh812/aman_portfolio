'use client'
/**
 * Adds the template's `stick` class to the enclosing <header> once the page
 * scrolls past 100px. Renders an empty, hidden marker; the header itself is
 * a server component (performance pass 2, 7 Oct 2026).
 */
import { useEffect, useRef } from "react"

export default function StickyHeader() {
    const ref = useRef(null)

    useEffect(() => {
        const header = ref.current?.closest("header")
        if (!header) return
        let ticking = false
        const update = () => {
            header.classList.toggle("stick", window.scrollY > 100)
            ticking = false
        }
        const onScroll = () => {
            if (!ticking) { ticking = true; requestAnimationFrame(update) }
        }
        update()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return <span ref={ref} hidden />
}
