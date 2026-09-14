/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { NAV, CTA, SITE, NAP } from "@/content/site"

const Header = ({ handleOpen, headerStyle }) => {
	const [scroll, setScroll] = useState(false)

	useEffect(() => {
		const onScroll = () => setScroll(window.scrollY > 100)
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<header className={scroll ? `${headerStyle || ''} header sticky-bar stick` : `${headerStyle || ''} header sticky-bar`}>
			<div className="container">
				<div className="main-header">
					<div className="header-left">
						<div className="header-logo">
							<Link href="/" className="d-flex">
								{headerStyle ? (
									<Image width={300} height={64} alt="Build First Site" src="/assets/imgs/template/logo-white.svg" />
								) : (
									<Image width={885} height={230} alt="Build First Site" src="/assets/imgs/New_logo/logo.png" style={{ height: '48px', width: 'auto' }} priority />
								)}
							</Link>
						</div>
						<div className="header-nav">
							<nav className="nav-main-menu d-none d-xl-block">
								<ul className="main-menu">
									{NAV.map((item) => (
										<li key={item.href} className={item.children ? "has-children" : ""}>
											<Link href={item.href}>{item.label}</Link>
											{item.children && (
												<ul className="sub-menu">
													{item.children.map((child) => (
														<li key={child.href}>
															<Link href={child.href}>{child.label}</Link>
														</li>
													))}
												</ul>
											)}
										</li>
									))}
								</ul>
							</nav>
							<div className="burger-icon burger-icon-white d-block d-xl-none" onClick={handleOpen}>
								<span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
							</div>
						</div>
					</div>
					<div className="header-right">
						<div className="block-signin d-flex align-items-center">
							{/* Click-to-call. Local service buyers phone rather than fill in
							    a form, and until now the only number on the site sat in the
							    footer — below the fold on every page. The competitor that
							    outranks us puts a dial button in the hero.

							    Responsive behaviour is CSS-only (d-none d-md-inline), never JS
							    reading window.innerWidth, so server and client render identical
							    markup and there is no hydration mismatch.

							    href is E.164 with no spaces: spaces in a tel: URI break
							    click-to-call on some Android handsets. Display readable, dial
							    strict. data-loc feeds the GA4 phone_click event. */}
							<a
								href={`tel:${NAP.phoneE164}`}
								data-loc="header"
								className="color-gray-900 text-body-lead mr-20 d-inline-flex align-items-center"
								aria-label={`Call Build First Site on ${SITE.phone}`}
							>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{ flexShrink: 0 }}>
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
								<span className="ml-5 d-none d-md-inline">{SITE.phone}</span>
							</a>
							<Link href={CTA.primary.href} className="btn btn-default hover-up icon-arrow-right">
								{CTA.primary.label}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
