/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from "next/link"

const Footer = () => {
	return (
		<>
			<footer className="footer mt-50">
				<div className="container">
					<div className="footer-top">
						<div className="row">
							<div className="col-md-4 col-sm-6 text-center text-md-start">
								<Link href="/" legacyBehavior>

									{/* <Image
    width="0"
    height="0"
    sizes="100vw"
    style={{ width: "auto", height: "auto" }} alt="Agon" src="/assets/imgs/template/logo.svg" /> */}
									<Image src="/assets/imgs/template/logo.svg" alt="Agon" width={162} height={42} />

								</Link>
							</div>
							<div className="col-md-8 col-sm-6 text-center text-md-end">
								<span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">Ready to get started?</span>
								<Link href="/page-signup" className="btn btn-square">Create an Account
								</Link>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 width-20 mb-30">
							<h4 className="text-heading-5">Contact</h4>
							<div className="mt-20 text-body-text color-gray-600 mb-20">4517 Washington Ave. Manchester, Kentucky 39495</div>
							<div className="mt-20 text-body-text color-gray-600">(239) 555-0108</div>
							<div className="text-body-text color-gray-600">contact@agon.com</div>
						</div>
						<div className="col-lg-3 width-20 mb-30">
							<h4 className="text-heading-5">About Us</h4>
							<ul className="menu-footer mt-20">
								<li>
									<Link href="/#" legacyBehavior>
										Mission and Vision
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Our Team
									</Link>
								</li>
								<li>
									<Link href="/page-career" legacyBehavior>
										Careers
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Press and Media
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Advertising
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Testimonials
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 width-20 mb-30">
							<h4 className="text-heading-5">Discover</h4>
							<ul className="menu-footer mt-20">
								<li>
									<Link href="/blog-2" legacyBehavior>
										Our Blog
									</Link>
								</li>
								<li>
									<Link href="/page-pricing-1" legacyBehavior>
										Plans and Pricing
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Knowledge Base
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Cookie Policy
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Office Center
									</Link>
								</li>
								<li>
									<Link href="/blog-1" legacyBehavior>
										News and Events
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 width-20 mb-30">
							<h4 className="text-heading-5">Support</h4>
							<ul className="menu-footer mt-20">
								<li>
									<Link href="/page-faqs-1" legacyBehavior>
										FAQs
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Editor Help
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Community
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Live Chatting
									</Link>
								</li>
								<li>
									<Link href="/page-contact" legacyBehavior>
										Contact Us
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Support Center
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 width-16">
							<h4 className="text-heading-5">Useful links</h4>
							<ul className="menu-footer mt-20">
								<li>
									<Link href="/#" legacyBehavior>
										Request an offer
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										How it works
									</Link>
								</li>
								<li>
									<Link href="/page-pricing-2" legacyBehavior>
										Pricing
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Reviews
									</Link>
								</li>
								<li>
									<Link href="/#" legacyBehavior>
										Stories
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer-bottom mt-20">
						<div className="row">
							<div className="col-md-6">
								<span className="color-gray-400 text-body-lead">© Agon Official 2022</span>
								<Link href="/page-terms" className="text-body-text color-gray-400 ml-50">Privacy policy
								</Link>
								<Link href="/page-terms" className="text-body-text color-gray-400 ml-50">Cookies
								</Link>
								<Link href="/page-terms" className="text-body-text color-gray-400 ml-50">Terms of service
								</Link>
							</div>
							<div className="col-md-6 text-center text-lg-end text-md-end">
								<div className="footer-social">
									<Link href="https://facebook.com" className="icon-socials icon-facebook">
									</Link>
									<Link href="https://twitter.com" className="icon-socials icon-twitter">
									</Link>
									<Link href="https://www.instagram.com" className="icon-socials icon-instagram">
									</Link>
									<Link href="https://www.linkedin.com" className="icon-socials icon-linkedin">
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer