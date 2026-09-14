'use client'
import { useState } from 'react'
import BackToTop from "../elements/BackToTop"
import ConversionTracker from "../analytics/ConversionTracker"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({ children, headerStyle }) => {
	const [openClass, setOpenClass] = useState('')

	const handleOpen = () => {
		document.body.classList.add("mobile-menu-active")
		setOpenClass("sidebar-visible")
	}

	const handleRemove = () => {
		if (openClass === "sidebar-visible") {
			setOpenClass("")
			document.body.classList.remove("mobile-menu-active")
		}
	}
	return (
		<>
			<div className={openClass && "body-overlay-1"} onClick={handleRemove} />

			<Header handleOpen={handleOpen} headerStyle={headerStyle} />
			<Sidebar openClass={openClass} />
			<main className="main">
				{children}
			</main>
			<Footer />
			<BackToTop />
			{/* One delegated listener for every phone / WhatsApp /
			    Calendly / mailto link on the site. Renders nothing. */}
			<ConversionTracker />
		</>
	)
}

export default Layout