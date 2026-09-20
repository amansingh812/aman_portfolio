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
					{/* RIGHT-HAND COLUMN — sizing matters here.

					    The first version of this rendered the full phone number
					    as text next to a full-size "Get a quote" button. Between
					    them they were wide enough that the row could not fit the
					    container: first the number wrapped one digit group per
					    line, and after that was forced with nowrap the whole
					    header overflowed and gave every page a horizontal
					    scrollbar. Both were my changes and both were the same
					    mistake — adding width to a row that had none spare.

					    Now: the phone is an icon only, and the CTA is compact.
					    The number itself lives in the footer, on the contact
					    page, and in the mobile menu's full-width Call button,
					    so nothing is lost by not printing it in the header —
					    the tap target and the tel: link are what actually
					    matter here.

					    minWidth: 0 lets the nav absorb any remaining pressure
					    instead of pushing this column off-screen. */}
					<div className="header-right" style={{ flexShrink: 0, minWidth: 0 }}>
						<div className="block-signin d-flex align-items-center" style={{ flexWrap: 'nowrap' }}>
							{/* Icon-only click-to-call. aria-label and title carry the
							    number so screen readers announce it and hovering shows
							    it — the information is present, just not drawn as text.

							    href is E.164 with no spaces: spaces in a tel: URI break
							    click-to-call on some Android handsets.

							    44x44 hit area meets the WCAG 2.5.8 minimum target size;
							    an 18px icon on its own would not. data-loc feeds the GA4
							    phone_click event. */}
							<a
								href={`tel:${NAP.phoneE164}`}
								data-loc="header"
								className="color-gray-900 d-inline-flex align-items-center justify-content-center mr-10"
								aria-label={`Call Build First Site on ${SITE.phone}`}
								title={SITE.phone}
								style={{ width: 44, height: 44, flexShrink: 0 }}
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
							</a>
							<Link
								href={CTA.primary.href}
								className="btn btn-default hover-up"
								style={{ whiteSpace: 'nowrap', flexShrink: 0, padding: '10px 20px', fontSize: 15 }}
							>
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
