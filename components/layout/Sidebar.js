'use client'
import { useState } from "react"
import Link from "next/link"
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { NAV, CTA, SITE } from "@/content/site"

const Sidebar = ({ openClass }) => {
	const [openSub, setOpenSub] = useState(null)

	return (
		<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
			<PerfectScrollbar className="mobile-header-wrapper-inner">
				<div className="mobile-header-top">
					<div className="user-account">
						<div className="content">
							<h6 className="user-name">
								Build<span className="text-brand">First</span>Site
							</h6>
							<p className="font-xs text-muted">
								Web design &amp; development · Australia
							</p>
						</div>
					</div>
				</div>
				<div className="mobile-header-content-area">
					<div className="perfect-scroll">
						<div className="mobile-menu-wrap mobile-header-border">
							<nav>
								<ul className="mobile-menu font-heading">
									{NAV.map((item) => (
										<li key={item.href} className={item.children ? "has-children" : ""}>
											{item.children ? (
												<>
													<span
														className="menu-expand"
														onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
													>
														<i className="fi-rr-angle-small-down" />
													</span>
													<Link href={item.href}>{item.label}</Link>
													<ul className="sub-menu" style={{ display: openSub === item.label ? 'block' : 'none' }}>
														{item.children.map((child) => (
															<li key={child.href}>
																<Link href={child.href}>{child.label}</Link>
															</li>
														))}
													</ul>
												</>
											) : (
												<Link href={item.href}>{item.label}</Link>
											)}
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className="mobile-account">
							<Link href={CTA.primary.href} className="btn btn-default hover-up icon-arrow-right w-100">
								{CTA.primary.label}
							</Link>
							<p className="mt-20 text-body-text color-gray-500">
								<a href={`mailto:${SITE.email}`}>{SITE.email}</a>
							</p>
						</div>
						<div className="site-copyright color-gray-400">
							© {new Date().getFullYear()} Build First Site
						</div>
					</div>
				</div>
			</PerfectScrollbar>
		</div>
	)
}

export default Sidebar
