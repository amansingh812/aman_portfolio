'use client'
/**
 * Burger button + mobile sidebar + overlay (7 Oct 2026, performance pass 2).
 *
 * Until now Layout.js was a client component only so it could hold the
 * "menu open" state, which forced Header, Footer and every page wrapper to
 * ship as client JavaScript and hydrate on load (Lighthouse: 510 ms TBT).
 * The state now lives here, the only place that needs it, and Layout,
 * Header and Footer render on the server.
 *
 * The overlay and sidebar are portalled to <body> so they sit in the same
 * stacking position as before (they used to be siblings of <header>), not
 * inside the sticky header's stacking context.
 */
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar"

export default function MobileMenu() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => setMounted(true), [])

    // Close on navigation; also clears a body class left over from a previous page.
    useEffect(() => {
        setOpen(false)
        document.body.classList.remove("mobile-menu-active")
    }, [pathname])

    const show = () => {
        document.body.classList.add("mobile-menu-active")
        setOpen(true)
    }
    const hide = () => {
        document.body.classList.remove("mobile-menu-active")
        setOpen(false)
    }

    return (
        <>
            <button
                type="button"
                className="burger-icon burger-icon-white d-block d-xl-none"
                onClick={open ? hide : show}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                style={{ background: "none", border: 0, padding: 0 }}
            >
                <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
            </button>
            {mounted && createPortal(
                <>
                    <div className={open ? "body-overlay-1" : ""} onClick={hide} />
                    <Sidebar openClass={open ? "sidebar-visible" : ""} />
                </>,
                document.body
            )}
        </>
    )
}
