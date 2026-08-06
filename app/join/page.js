import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { CTA, SITE } from "@/content/site";

export const metadata = {
    title: "Join Us — Work With Build First Site",
    description:
        "Join a two-person studio building websites, apps and AI systems for Australian businesses. Remote, flexible, project-based. Developers, designers and marketers welcome.",
    alternates: { canonical: "/join/" },
};

const ROLES = [
    {
        title: "Freelance Frontend Developer",
        type: "Contract · Remote",
        desc: "React / Next.js work on client projects. You get clear briefs, fair rates, and interesting builds.",
        skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
        title: "Freelance Designer",
        type: "Contract · Remote",
        desc: "UI/UX design for websites and apps. Figma-based workflow, direct client collaboration.",
        skills: ["Figma", "UI/UX", "Responsive Design", "Design Systems"],
    },
    {
        title: "Digital Marketing Specialist",
        type: "Contract · Remote",
        desc: "SEO, content strategy and Google Ads for Australian small businesses. Results-focused, transparent reporting.",
        skills: ["SEO", "Google Ads", "Content Strategy", "Analytics"],
    },
];

const PERKS = [
    { icon: "🌏", title: "Fully remote", body: "Work from anywhere. We care about the output, not the timezone." },
    { icon: "🎯", title: "Interesting projects", body: "E-commerce, AI, SaaS, tradies — never the same thing twice." },
    { icon: "💬", title: "Direct communication", body: "No layers. You talk to the founder and the clients directly." },
    { icon: "📈", title: "Fair rates", body: "Competitive pay, paid on time. No chasing invoices." },
    { icon: "🧠", title: "Learn constantly", body: "Work across stacks, industries and AI — with someone who ships fast." },
    { icon: "⚡", title: "No bureaucracy", body: "Two people. Zero meetings that could have been an email." },
];

export default function JoinPage() {
    return (
        <Layout>
            <section className="section-box">
                <div className="banner-hero banner-breadcrumbs">
                    <div className="container text-center">
                        <span className="tag-1">Join Us</span>
                        <h1 className="text-display-2 mt-20">
                            Build with us.<br />
                            <span className="color-green-900">From anywhere.</span>
                        </h1>
                        <p className="text-body-lead-large color-gray-500 mt-20" style={{ maxWidth: 640, margin: '20px auto 0' }}>
                            We are a two-person studio that partners with talented freelancers
                            on client projects. If you write clean code, design with intent,
                            or know how to move the needle on search — we want to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why join */}
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-heading-1 color-gray-900">Why work with us</h2>
                        </div>
                    </div>
                    <div className="row mt-70">
                        {PERKS.map((p) => (
                            <div className="col-lg-4 col-md-6 mb-30" key={p.title}>
                                <div className="card-grid-1 bg-5 hover-up h-100">
                                    <span style={{ fontSize: 32 }}>{p.icon}</span>
                                    <h3 className="text-heading-4 mt-15">{p.title}</h3>
                                    <p className="text-body-excerpt color-gray-600 mt-10">{p.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open roles */}
            <section className="section-box section-green mt-100">
                <div className="container pt-70 pb-70">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-heading-1 color-gray-900">Open roles</h2>
                            <p className="text-body-lead-large color-gray-600 mt-15">
                                All roles are freelance/contract and fully remote.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-50 justify-content-center">
                        {ROLES.map((r) => (
                            <div className="col-lg-8 mb-20" key={r.title}>
                                <div className="card-grid-1 bg-5 hover-up" style={{ padding: '30px', background: '#fff' }}>
                                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                                        <div>
                                            <h3 className="text-heading-4">{r.title}</h3>
                                            <p className="text-body-small color-green-900 mt-5">{r.type}</p>
                                        </div>
                                        <a href={`mailto:${SITE.email}?subject=Application: ${r.title}`} className="btn btn-default hover-up icon-arrow-right mt-10 mt-lg-0">
                                            Apply
                                        </a>
                                    </div>
                                    <p className="text-body-excerpt color-gray-600 mt-15">{r.desc}</p>
                                    <div className="d-flex flex-wrap mt-15" style={{ gap: '8px' }}>
                                        {r.skills.map((sk) => (
                                            <span key={sk} style={{
                                                padding: '4px 10px',
                                                fontSize: '12px',
                                                backgroundColor: '#f3f5f9',
                                                borderRadius: '4px',
                                                color: '#394150',
                                            }}>{sk}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* General application */}
            <section className="section-box mt-100">
                <div className="container text-center pb-70">
                    <h2 className="text-heading-2 color-gray-900">Don&apos;t see your role?</h2>
                    <p className="text-body-lead-large color-gray-600 mt-15">
                        We are always open to hearing from talented people. Send us a message
                        with your portfolio and what you are great at.
                    </p>
                    <div className="mt-30">
                        <a href={`mailto:${SITE.email}?subject=General Application`} className="btn btn-black icon-arrow-right-white">
                            Get in touch
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
