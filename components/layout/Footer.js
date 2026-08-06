/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from "next/link"
import { CTA, SITE, FOOTER_COLUMNS } from "@/content/site"

const Footer = () => {
	return (
		<footer className="footer mt-50">
			<div className="container">
				<div className="footer-top">
					<div className="row">
						<div className="col-md-4 col-sm-6 text-center text-md-start">
							<Link href="/">
								<Image src="/assets/imgs/template/logo.svg" alt="Build First Site" width={218} height={46} />
							</Link>
						</div>
						<div className="col-md-8 col-sm-6 text-center text-md-end">
							<span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">Ready to get started?</span>
							<Link href={CTA.primary.href} className="btn btn-square">{CTA.primary.label}</Link>
						</div>
					</div>
				</div>
				<div className="row">
					{FOOTER_COLUMNS.map((col) => (
						<div className="col-lg-2 col-md-4 col-sm-6 mb-30" key={col.title}>
							<h4 className="text-heading-5">{col.title}</h4>
							<ul className="menu-footer mt-20">
								{col.links.map((link) => (
									<li key={link.href}>
										<Link href={link.href}>{link.label}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
					<div className="col-lg-2 col-md-4 col-sm-6 mb-30">
						<h4 className="text-heading-5">Contact</h4>
						<div className="mt-20 text-body-text color-gray-600 mb-10">
							<a href={`mailto:${SITE.email}`}>{SITE.email}</a>
						</div>
						<div className="text-body-text color-gray-600 mb-10">
							<a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
						</div>
						<div className="text-body-text color-gray-600">
							<a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp →</a>
						</div>
					</div>
				</div>
				<div className="footer-bottom mt-20">
					<div className="row">
						<div className="col-md-6">
							<span className="color-gray-400 text-body-lead">© {new Date().getFullYear()} Build First Site</span>
							<Link href="/terms/" className="text-body-text color-gray-400 ml-50">Privacy policy</Link>
							<Link href="/terms/" className="text-body-text color-gray-400 ml-50">Terms of service</Link>
						</div>
						<div className="col-md-6 text-center text-lg-end text-md-end">
							<div className="footer-social">
								<a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="icon-socials icon-linkedin" />
								<a href={SITE.social.github} target="_blank" rel="noopener noreferrer" className="icon-socials icon-github" />
								<a href={SITE.social.x} target="_blank" rel="noopener noreferrer" className="icon-socials icon-twitter" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
