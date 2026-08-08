/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { NAV, CTA } from "@/content/site"

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
						<div className="block-signin">
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
