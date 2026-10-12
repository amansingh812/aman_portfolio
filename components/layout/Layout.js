/**
 * Site chrome. Server component since 7 Oct 2026 (performance pass 2):
 * it used to be 'use client' only to hold the mobile-menu state, which made
 * Header, Footer and every page wrapper hydrate as client JavaScript. That
 * state now lives in components/layout/MobileMenu.js.
 */
import BackToTop from "../elements/BackToTop"
import ConversionTracker from "../analytics/ConversionTracker"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children, headerStyle }) => {
	return (
		<>
			<a href="#main-content" className="skip-link">Skip to content</a>
			<Header headerStyle={headerStyle} />
			<main className="main" id="main-content">
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
