'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const RightSidebar = ({ openClass }) => {
	const [isActive, setIsActive] = useState({
		status: false,
		key: "",
	})

	const handleToggle = (key) => {
		if (isActive.key === key) {
			setIsActive({
				status: false,
			})
		} else {
			setIsActive({
				status: true,
				key,
			})
		}
	}
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
				<PerfectScrollbar className="mobile-header-wrapper-inner">
					<div className="mobile-header-top">
						<div className="user-account">
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "auto", height: "auto" }} src="/assets/imgs/template/ava_1.png" alt="Agon" />
							<div className="content">
								<h6 className="user-name">
									Hi <span className="text-brand">Steven !</span>
								</h6>
								<p className="font-xs text-muted">
									You have 5 new messages
								</p>
							</div>
						</div>
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading">
										<li className={isActive.key == 1 ? "has-children active" : "has-children"}>
											<span onClick={() => handleToggle(1)} className="menu-expand">
												<i className="fi-rr-angle-small-down"></i></span>
											<Link href="/" className="active">Home</Link>
											<ul className={isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none"}>
												<li>

													<Link href="/" >Homepage - 1</Link>
												</li>
												<li>

													<Link href="/index-2" >Homepage - 2</Link>
												</li>
												<li>

													<Link href="/index-3" >Homepage - 3</Link>
												</li>
												<li>

													<Link href="/index-4" >Homepage - 4</Link>
												</li>
											</ul>
										</li>
										<li className={isActive.key == 2 ? "has-children active" : "has-children"}>
											<span onClick={() => handleToggle(2)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

											<Link href="/page-about-1" >About</Link>
											<ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
												<li>

													<Link href="/page-about-1" >About Us - 1</Link>
												</li>
												<li>

													<Link href="/page-about-2" >About Us - 2</Link>
												</li>
												<li>

													<Link href="/page-about-3" >About Us - 3</Link>
												</li>
											</ul >
										</li >
										<li className={isActive.key == 3 ? "has-children active" : "has-children"}>
											<span onClick={() => handleToggle(3)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

											<Link href="/page-service-1" >Company</Link>
											<ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
												<li>
													<Link href="/page-service-1" className="closer">Services - 1</Link>
												</li>
												<li>
													<Link href="/page-service-2" className="closer">Services - 2</Link>
												</li >
												<li className="hr"><span /></li>
												<li>
													<Link href="/page-pricing-1" className="closer">Pricing - 1</Link>
												</li >
												<li>
													<Link href="/page-pricing-2" className="closer">Pricing - 2</Link>
												</li >
												<li className="hr"><span /></li>
												<li>
													<Link href="/page-faqs-1" className="closer">FAQs - 1</Link>
												</li >
												<li>
													<Link href="/page-faqs-2" className="closer">FAQs - 2</Link>
												</li >
												<li className="hr"><span /></li>
												<li>
													<Link href="/page-career" className="closer">Career</Link>
												</li >
												<li>
													<Link href="/page-career-detail" className="closer">Career Detail</Link>
												</li >
											</ul >
										</li >
										<li className={isActive.key == 4 ? "has-children active" : "has-children"}>
											<span onClick={() => handleToggle(4)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

											<Link href="/#" >Pages</Link>
											<ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
												<li>
													<Link href="/page-contact" >Contact</Link>
												</li>
												<li>
													<Link href="/page-signup" >Sign Up</Link>
												</li >
												<li>
													<Link href="/page-login" >Log In</Link>
												</li >
												<li>
													<Link href="/page-reset" >Reset Password</Link>
												</li >
												<li>
													<Link href="/404" >Error 404</Link>
												</li >
											</ul >
										</li >
										<li className={isActive.key == 5 ? "has-children active" : "has-children"}>
											<span onClick={() => handleToggle(5)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

											<Link href="/blog-1" >Blog</Link>
											<ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
												<li>
													<Link href="/blog-1" className="closer">Blog 1</Link>
												</li>
												<li>
													<Link href="/blog-2" className="closer">Blog 2</Link>
												</li >
												<li className="hr"><span /></li>
												<li>
													<Link href="/blog-single" >Blog Single</Link>
												</li >
											</ul >
										</li >
										<li>
											<Link href="/page-contact" >Contact</Link>
										</li >
									</ul >
								</nav >
							</div >
							<div className="mobile-account">
								<h6 className="mb-10">Your Account</h6>
								<ul className="mobile-menu font-heading">
									<li>
										<Link href="/#" >Profile</Link>
									</li>
									<li>
										<Link href="/#" >Work Preferences</Link>
									</li>
									<li>
										<Link href="/#" >My Boosted Shots</Link>
									</li >
									<li>
										<Link href="/#" >My Collections</Link>
									</li >
									<li>
										<Link href="/#" >Account Settings</Link>
									</li >
									<li>
										<Link href="/#" >Go Pro</Link>
									</li >
									<li>
										<Link href="/page-login" >Sign Out</Link>
									</li >
								</ul >
							</div >
							<div className="site-copyright color-gray-400">
								Copyright 2022 © Agon - Agency Template.<br />Designed
								by
								<Link href="http://alithemes.com" >&nbsp; AliThemes</Link>
							</div >
						</div >
					</div >
				</PerfectScrollbar >
			</div >

		</>
	)
}

export default RightSidebar