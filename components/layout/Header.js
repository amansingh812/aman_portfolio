/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { NAV, CTA } from "@/content/site"

const Header = ({ handleOpen, headerStyle }) => {
	const [scroll, setScroll] = useState(0)
	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollCheck = window.scrollY > 100
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck)
			}
		})
	})
	return (
		<>
			<header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
				<div className="container">
					<div className="main-header">
						<div className="header-left">
							<div className="header-logo">
								<Link href="/" legacyBehavior>
									<a className="d-flex">
										{headerStyle ? <Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "auto", height: "auto" }} alt="Build First Site" src="/assets/imgs/template/logo-white.svg" /> : <Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "auto", height: "auto" }} alt="Build First Site" src="/assets/imgs/template/logo.svg" />}
									</a>
								</Link>
							</div>
							<div className="header-nav">
								{/*
								  Flat top-nav — Services, Work, Pricing, About, Guides, Contact.
								  No dropdowns; sub-pages are reachable via each hub page and via the
								  footer's five link columns. Rationale: buyers on a phone bounce off
								  nested menus, and our nav plan (docs/CONTENT-PLAN.md §2) is flat.
								  Original Agon multi-column dropdown menu is preserved in git history.
								*/}
								<nav className="nav-main-menu d-none d-xl-block">
									<ul className="main-menu">
										{NAV.map((item) => (
											<li key={item.href}>
												<Link href={item.href}>{item.label}</Link>
											</li>
										))}
									</ul>
								</nav>
								<div className="burger-icon burger-icon-white" onClick={handleOpen}>
									<span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
								</div>
							</div>
						</div>
						<div className="header-right">
							<div className="block-signin">
								<Link href={CTA.primary.href} className="btn btn-default hover-up icon-arrow-right">
									{CTA.primary.label}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
