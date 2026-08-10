/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CASE_STUDIES, getCaseStudy } from "@/content/case-studies"
import { SITE } from "@/content/site"

export const dynamicParams = false

export function generateStaticParams() {
    return CASE_STUDIES.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const project = getCaseStudy(slug)
    if (!project) return {}
    return {
        title: `${project.metaTitle || project.name} | Build First Site`,
        description: project.metaDescription || project.tagline,
        alternates: { canonical: `/work/${project.slug}/` },
        openGraph: {
            title: project.name,
            description: project.metaDescription || project.tagline,
            url: `https://buildfirstsite.com/work/${project.slug}/`,
            type: "article",
            images: project.image ? [{ url: project.image, width: 1200, height: 630 }] : [],
        },
    }
}

// Australian marketing hooks mapping
const AU_MARKETING_HOOKS = {
    "hs-race-gear": "In the high-stakes Australian motorsport market, precision and trust are paramount. By introducing custom made-to-measure sizing and an interactive 3D product preview, we helped HS Race Gear build immediate buyer confidence, resulting in a dramatic reduction in sizing inquiries and direct conversion growth.",
    "mobile-armour": "Australian mobile commerce is growing rapidly, but slow loading speeds cost online retailers millions in abandoned carts. This Next.js rebuild ensures the site loads in under 1.5 seconds on standard Australian 4G/5G mobile connections, keeping customers engaged and maximizing conversions.",
    "autozenlyai": "Australian marketing teams and agencies frequently struggle with fragmented software subscriptions that eat into business margins. AutoZenlyAI consolidates content writing, multi-platform scheduling, and analytics into a single dashboard, slashing overheads and streamlining operations.",
    "aurelia-estates": "In the competitive Australian prestige property sector, your digital storefront is your reputation. Aurelia Estates provides a fast, immersive search experience with considered typography and fluid animations, designed specifically to match the expectations of high-end property buyers.",
    "harbour-plumbing": "When an emergency strikes at 2 AM in Sydney, customers search for local help and call within seconds. We engineered Harbour Plumbing's local SEO presence and implemented a click-to-call mobile design to capture high-intent search traffic the moment it matters most.",
    "marlow-vine": "With third-party booking platforms taking up to 10% commission per seat, Australian hospitality businesses are facing tighter margins than ever. Marlow & Vine's direct booking engine bypasses intermediaries, ensuring they retain 100% of their table revenue.",
    "banish-shoes": "Australian consumer demand for sustainable, high-quality bespoke products is at an all-time high. Banish Shoes' direct-to-consumer WordPress storefront is built to handle custom specifications smoothly without recurring marketplace listing fees.",
    "swarom": "E-commerce shoppers in Australia demand rapid personalization and seamless checkouts for gifts. Swarom's custom engraved jewellery options load fast on any mobile browser, helping capture last-minute holiday and birthday gift shoppers.",
    "school-scout": "Choosing a school in Australia or India is a major decision with complex choices around fees, curriculum, and facilities. School Scout simplifies the process for parents by presenting data side-by-side, replacing dozens of open browser tabs with one clear comparison view."
}

export default async function CaseStudyPage({ params }) {
    const { slug } = await params
    const project = getCaseStudy(slug)
    if (!project) notFound()

    // Find 3 other related case studies
    const otherProjects = CASE_STUDIES
        .filter((p) => p.slug !== slug)
        .slice(0, 3)

    // Cover styles
    const coverGradient = {
        background: `linear-gradient(135deg, ${project.cover?.from || '#101828'} 0%, ${project.cover?.to || '#1D2939'} 100%)`,
        padding: "160px 0 100px"
    }

    const marketingHook = AU_MARKETING_HOOKS[slug] || "We build performant web platforms customized for the Australian business landscape, focusing on maximizing conversions, eliminating platform fees, and delivering premium design."

    /* ── Structured data: CreativeWork / CaseStudy + BreadcrumbList ── */
    const url = `https://buildfirstsite.com/work/${slug}/`
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.name,
            headline: project.tagline,
            description: project.metaDescription,
            image: project.image,
            genre: project.industry,
            locationCreated: {
                "@type": "Place",
                "name": project.location
            },
            publisher: {
                "@type": "Organization",
                name: "Build First Site",
                url: "https://buildfirstsite.com/",
            },
            inLanguage: "en-AU",
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://buildfirstsite.com/work/" },
                { "@type": "ListItem", position: 3, name: project.name, item: url },
            ],
        },
    ]

    return (
        <Layout headerStyle={"header-style-5 case-study-header"}>
            <div>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <style dangerouslySetInnerHTML={{ __html: `
                    .case-study-header {
                        position: absolute !important;
                        left: 0;
                        top: 0;
                        width: 100%;
                        z-index: 100;
                        background: transparent !important;
                        border-bottom: none !important;
                    }
                    .case-study-header .main-menu > li > a {
                        color: rgba(255, 255, 255, 0.85) !important;
                    }
                    .case-study-header .main-menu > li > a:hover {
                        color: #fff !important;
                    }
                    .case-study-header.stick {
                        position: fixed !important;
                        background-color: rgba(16, 24, 40, 0.95) !important;
                        backdrop-filter: blur(8px);
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
                    }
                    
                    @media (min-width: 992px) {
                        .case-study-content {
                            padding-right: 50px !important;
                        }
                    }
                    @media (max-width: 991.98px) {
                        .case-study-content {
                            padding-right: 15px !important;
                        }
                    }
                    
                    .marketing-box {
                        padding: 40px !important;
                    }
                    .sidebar-box {
                        padding: 35px !important;
                    }
                    .approach-card {
                        padding: 40px !important;
                    }
                    .outcome-box {
                        padding: 50px !important;
                    }
                    .cta-box {
                        padding: 50px !important;
                    }
                    
                    @media (max-width: 575.98px) {
                        .marketing-box {
                            padding: 24px 20px !important;
                        }
                        .sidebar-box {
                            padding: 24px 20px !important;
                        }
                        .approach-card {
                            padding: 24px 20px !important;
                        }
                        .outcome-box {
                            padding: 30px 20px !important;
                        }
                        .cta-box {
                            padding: 35px 20px !important;
                        }
                    }
                ` }} />

                {/* ── HERO with Gradient cover ── */}
                <section className="section-box">
                    <div className="banner-hero" style={coverGradient}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <div className="d-flex align-items-center gap-10 mb-20">
                                        <span className="tag-1 bg-white color-gray-900" style={{ fontWeight: 700 }}>
                                            {project.industry.toUpperCase()}
                                        </span>
                                        <span className="tag-1 bg-6 color-green-900" style={{ fontWeight: 600 }}>
                                            📍 {project.location}
                                        </span>
                                    </div>
                                    <h1 className="text-display-3 color-white mt-10">
                                        {project.name}
                                    </h1>
                                    <p className="text-body-lead-large color-gray-200 mt-20" style={{ maxWidth: '720px' }}>
                                        {project.tagline}
                                    </p>
                                    <div className="mt-40 d-flex flex-wrap align-items-center gap-15">
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                                               className="btn btn-black icon-arrow-right-white" style={{ background: '#fff', color: '#101828' }}>
                                                Visit Live Project
                                            </a>
                                        )}
                                        <Link href="/work/" className="btn btn-link color-white icon-arrow-right">
                                            Back to Portfolio
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center d-none d-lg-block">
                                    {project.cover?.mark && (
                                        <div style={{
                                            fontSize: '120px',
                                            fontWeight: 900,
                                            opacity: 0.15,
                                            color: '#fff',
                                            fontFamily: 'var(--chivo)',
                                            letterSpacing: '-2px',
                                            userSelect: 'none'
                                        }}>
                                            {project.cover.mark}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── RESULTS / METRICS BAR ── */}
                {project.results && project.results.length > 0 && (
                    <section className="section-box" style={{ background: '#101828', padding: '40px 0' }}>
                        <div className="container">
                            <div className="row text-center justify-content-center">
                                {project.results.map((res, index) => (
                                    <div className="col-lg-3 col-md-6 col-6 mb-30 mb-lg-0" key={index}>
                                        <h3 className="text-display-3 color-white" style={{ fontSize: '36px', fontWeight: 800 }}>
                                            {res.value}
                                        </h3>
                                        <p className="text-body-small color-gray-400 mt-10">
                                            {res.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── CHALLENGE & METADATA SIDEBAR ── */}
                <section className="section-box mt-80 mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 case-study-content">
                                <span className="text-body-capitalized text-uppercase color-orange" style={{ color: '#E96A3D', fontWeight: 700 }}>
                                    The Challenge
                                </span>
                                <h2 className="text-heading-2 mt-15 mb-30" style={{ color: '#0F5E4E' }}>
                                    Understanding the problem
                                </h2>
                                <div className="text-body-excerpt color-gray-600">
                                    {project.challenge.map((paragraph, index) => (
                                        <p key={index} className="mb-20" style={{ lineHeight: '1.8' }}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Custom Australian Marketing Hook */}
                                <div className="mt-40 bdrd-16 marketing-box" style={{ background: '#F8F9FC', borderLeft: '4px solid #E96A3D' }}>
                                    <h4 className="text-heading-5 color-gray-900 mb-15">The Marketing Angle</h4>
                                    <p className="text-body-text color-gray-700 mb-0" style={{ lineHeight: '1.7' }}>
                                        {marketingHook}
                                    </p>
                                </div>
                            </div>

                            {/* Sidebar Info */}
                            <div className="col-lg-4 mt-50 mt-lg-0">
                                <div className="bdrd-16 sidebar-box" style={{ background: '#F4E9DF', border: '1px solid #E4E7EC' }}>
                                    <h4 className="text-heading-5 color-gray-900 mb-25">Project Details</h4>
                                    
                                    <div className="mb-25">
                                        <span className="text-body-small color-gray-500 text-uppercase d-block mb-5">Timeline</span>
                                        <span className="text-body-lead color-gray-900 font-semibold">{project.timeline}</span>
                                    </div>

                                    <div className="mb-25">
                                        <span className="text-body-small color-gray-500 text-uppercase d-block mb-5">Services Delivered</span>
                                        <div className="d-flex flex-wrap gap-5 mt-5">
                                            {project.services.map((service, idx) => (
                                                <span key={idx} className="tag-1 bg-white color-gray-800" style={{ fontSize: '12px' }}>
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-25">
                                        <span className="text-body-small color-gray-500 text-uppercase d-block mb-5">Technology Stack</span>
                                        <div className="d-flex flex-wrap gap-5 mt-5">
                                            {project.techStack.map((tech, idx) => (
                                                <span key={idx} className="tag-1 bg-white color-gray-800" style={{ fontSize: '12px' }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {project.liveUrl && (
                                        <div className="mt-30">
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                                               className="btn btn-black w-100 text-center" style={{ padding: '12px 20px', display: 'block' }}>
                                                View Live Website ↗
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── APPROACH / HOW WE SOLVED IT ── */}
                {project.approach && project.approach.length > 0 && (
                    <section className="section-box mt-70 pt-80 pb-80" style={{ background: '#F0F4FA' }}>
                        <div className="container">
                            <div className="text-center mb-60">
                                <span className="text-body-capitalized text-uppercase color-orange" style={{ color: '#E96A3D', fontWeight: 700 }}>
                                    Our Approach
                                </span>
                                <h2 className="text-heading-2 mt-15" style={{ color: '#0F5E4E' }}>
                                    How we delivered results
                                </h2>
                            </div>
                            
                            <div className="row">
                                {project.approach.map((step, index) => (
                                    <div className="col-lg-6 mb-30" key={index}>
                                        <div className="card-grid-style-2 hover-up approach-card" style={{ background: '#fff', borderRadius: '16px', height: '100%' }}>
                                            <div className="d-flex align-items-center mb-20">
                                                <span className="text-display-3 color-orange mr-20" style={{ fontSize: '32px', color: '#E96A3D', fontWeight: 800 }}>
                                                    0{index + 1}
                                                </span>
                                                <h4 className="text-heading-4 color-gray-900 mb-0">
                                                    {step.title}
                                                </h4>
                                            </div>
                                            <p className="text-body-text color-gray-600" style={{ lineHeight: '1.6' }}>
                                                {step.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── OUTCOME BLOCK ── */}
                {project.outcome && (
                    <section className="section-box mt-80 mb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="bdrd-16 outcome-box" style={{ background: '#E7F1FA', border: '1px solid #B9D5EC' }}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-2 text-center text-lg-start mb-30 mb-lg-0">
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '50%',
                                                    background: '#0F5E4E',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#fff',
                                                    fontSize: '24px',
                                                    fontWeight: 'bold'
                                                }}>
                                                    ✓
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <h3 className="text-heading-3 mb-15" style={{ color: '#0F5E4E' }}>
                                                    Final Outcome
                                                </h3>
                                                <p className="text-body-normal color-gray-800 mb-0" style={{ fontStyle: 'italic', lineHeight: '1.6' }}>
                                                    "{project.outcome}"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ── CTA callout box ── */}
                <section className="section-box mt-80 mb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="mt-40 bdrd-16 text-center cta-box"
                                    style={{ background: '#F4E9DF', border: '1px solid #E4E7EC' }}>
                                    <h3 className="text-heading-2 color-gray-900">Want a site like this?</h3>
                                    <p className="text-body-excerpt color-gray-700 mt-20" style={{ maxWidth: '650px', margin: '20px auto 0', lineHeight: '1.6' }}>
                                        Let's discuss how we can build a fast, zero-commission, modern custom web application tailored specifically for your Australian business growth.
                                    </p>
                                    <div className="mt-35 d-flex flex-wrap justify-content-center gap-15">
                                        <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                            className="btn btn-black icon-arrow-right-white">
                                            Book a free call
                                        </a>
                                        <Link href="/contact/" className="btn btn-link icon-arrow-right color-gray-900" style={{ fontWeight: 600 }}>
                                            Get a custom quote
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── RELATED PROJECTS ── */}
                {otherProjects.length > 0 && (
                    <section className="section-box mt-100 mb-100" style={{ borderTop: '1px solid #E4E7EC', paddingTop: '80px' }}>
                        <div className="container">
                            <div className="row align-items-center mb-50">
                                <div className="col-lg-8">
                                    <h3 className="text-heading-2 mb-10" style={{ color: '#0F5E4E' }}>Explore More Projects</h3>
                                    <p className="text-body-excerpt color-gray-600">
                                        See how we have helped other businesses succeed with clean design and robust engineering
                                    </p>
                                </div>
                                <div className="col-lg-4 text-lg-end text-start pt-20">
                                    <Link href="/work/" className="btn btn-black icon-arrow-right-white">
                                        All Projects
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="row">
                                {otherProjects.map((p) => (
                                    <div className="col-lg-4 col-md-6 mb-30" key={p.slug}>
                                        <div className="hover-up" style={{
                                            background: '#F1F4FB',
                                            borderRadius: 22,
                                            padding: 18,
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                            <Link href={`/work/${p.slug}/`} style={{ display: 'block', borderRadius: 14, overflow: 'hidden' }}>
                                                <img
                                                    src={p.image}
                                                    alt={p.name}
                                                    style={{
                                                        width: '100%',
                                                        height: 200,
                                                        objectFit: 'cover',
                                                        objectPosition: 'top center',
                                                        display: 'block',
                                                        background: '#fff',
                                                    }}
                                                    loading="lazy"
                                                />
                                            </Link>
                                            
                                            <div className="mt-20 flex-grow-1">
                                                <span className="text-body-small color-orange" style={{ color: '#E96A3D', fontWeight: 600 }}>
                                                    {p.industry}
                                                </span>
                                                <h4 className="text-heading-5 color-gray-900 mt-5 mb-10">
                                                    {p.name}
                                                </h4>
                                                <p className="text-body-small color-gray-600 mb-15">
                                                    {p.tagline}
                                                </p>
                                            </div>

                                            <div className="mt-10">
                                                <Link href={`/work/${p.slug}/`} style={{ color: '#0F5E4E', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>
                                                    Read the case study →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </Layout>
    )
}
