'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight, ArrowDown, Send, Check, Menu, X,
  Mail, Phone, Calendar, ExternalLink, Github, Linkedin, Sun, Moon,
  Search, Quote, Zap
} from 'lucide-react';
import {
  PROJECT_LIST, PROJECT_FILTERS, EXPERIENCE, ABOUT_POINTS, STATS,
  TECH_CATEGORIES, FAQS, PRICE_TIERS, RETAINER, TESTIMONIALS, CONTACT
} from './data';
import { NavSection, Project } from './types';

// Maps each portfolio project id to its detailed case-study page slug (/work/[slug])
const CASE_STUDY_SLUGS: Record<string, string> = {
  '01': 'hs-race-gear',
  '02': 'mobile-armour',
  '03': 'autozenlyai',
  '04': 'aurelia-estates',
  '05': 'harbour-plumbing',
  '06': 'marlow-vine',
};

// ─── Brand mark — browser window glyph (matches the BFS logo) ────────────────
const CubeMark = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg viewBox="0 0 32 27" fill="none" className={className} aria-label="Build First Site">
    <rect x="2" y="2.5" width="28" height="22" rx="5.5" stroke="currentColor" strokeWidth="2.2" />
    <line x1="2" y1="9.6" x2="30" y2="9.6" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="6.8" cy="6" r="1.5" fill="#FF5600" />
    <circle cx="11.6" cy="6" r="1.5" fill="currentColor" />
    <circle cx="16.4" cy="6" r="1.5" fill="currentColor" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── Loader (name + percentage, reference style) ────────────────────────────
function Loader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setPct(p => {
        const next = Math.min(100, p + Math.ceil(Math.random() * 9));
        if (next >= 100) { clearInterval(t); setTimeout(onDone, 350); }
        return next;
      });
    }, 60);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <motion.div exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-[300] bg-bg-primary flex flex-col items-center justify-center select-none">
      <span className="side-label absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">Web Design Studio</span>
      <span className="side-label absolute left-8 top-1/2 -translate-y-1/2 hidden md:block" style={{ transform: 'rotate(180deg)' }}>Est. 2026</span>

      <div className="relative w-44 h-44 flex items-center justify-center">
        <svg viewBox="0 0 176 176" className="absolute inset-0 w-full h-full">
          <circle cx="88" cy="88" r="84" fill="none" stroke="var(--border-loader)" strokeWidth="1" strokeDasharray="3 6" className="orbit-spin" />
          <circle cx="88" cy="88" r="64" fill="none" stroke="var(--border-light-2)" strokeWidth="1" className="orbit-spin-rev" />
          <circle cx="150" cy="50" r="4" fill="var(--text-primary)" className="orbit-spin" style={{ transformOrigin: '88px 88px' }} />
        </svg>
        <div className="w-20 h-20 rounded-full bg-bg-primary shadow-[0_10px_40px_rgba(20,22,26,0.10)] flex items-center justify-center cube-float">
          <CubeMark className="w-9 h-9 text-text-primary" />
        </div>
      </div>

      <h1 className="display text-4xl md:text-5xl mt-8">Build<span className="text-brand">First</span>Site</h1>
      <div className="w-56 h-px bg-[#dcdee1] mt-5 mb-4" />
      <span className="text-[11px] tracking-[0.45em] uppercase text-text-muted">Web Studio</span>

      <div className="w-72 h-[3px] bg-[#e7e8ea] rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-[#16181d] rounded-full transition-all duration-100" style={{ width: `${pct}%` }} />
      </div>
      <div className="flex items-center gap-2 mt-4 text-[11px] tracking-[0.3em] uppercase text-text-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-[#16181d]" /> Loading Experience <span className="text-text-primary text-base tracking-normal font-medium">{pct}%</span>
      </div>
      <span className="absolute bottom-8 text-[10px] tracking-[0.4em] uppercase text-text-faintest">Crafting Digital Experiences</span>
    </motion.div>
  );
}

// ─── Fade-up wrapper ─────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string; key?: React.Key }) => (
  <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}>
    {children}
  </motion.div>
);

// ─── Project cover for items without screenshots ────────────────────────────
const ProjectCover = ({ project }: { project: Project }) => (
  <div className="w-full h-full flex items-center justify-center relative proj-img"
    style={{ background: `linear-gradient(135deg, ${project.cover?.from} 0%, ${project.cover?.to} 100%)` }}>
    <div className="absolute inset-0 opacity-[0.12]"
      style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
    <span className="font-display font-light text-white/90 text-6xl tracking-tight">{project.cover?.mark}</span>
    <span className="absolute bottom-4 right-5 text-[10px] tracking-[0.3em] uppercase text-white/45">{project.subtitle}</span>
  </div>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  // Theme state
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  // Contact form
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactProjectType, setContactProjectType] = useState('Website / Web App');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [contactError, setContactError] = useState(false);

  // Route a visitor to the contact form with the "Free Website Audit" intent pre-filled
  const startAudit = () => {
    setContactProjectType('Free Website Audit');
    setContactMessage("I'd like a free 5-minute website audit. My current website is: ");
    setContactSent(false);
    refs.contact?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const refs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const navLinks: { label: string; section: NavSection }[] = [
    { label: 'About', section: 'about' },
    { label: 'Portfolio', section: 'portfolio' },
    { label: 'Skills', section: 'skills' },
    { label: 'FAQ', section: 'faq' },
    { label: 'Price', section: 'pricing' },
    { label: 'Contact', section: 'contact' },
  ];

  const scrollTo = (section: NavSection) => {
    setMobileNavOpen(false);
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 200;
      const order: NavSection[] = ['contact', 'pricing', 'faq', 'skills', 'portfolio', 'about'];
      for (const s of order) {
        if (refs[s].current && pos >= refs[s].current!.offsetTop) { setActiveSection(s); return; }
      }
      setActiveSection('home');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactError(false);
    setContactSending(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      if (accessKey && accessKey !== 'your_access_key_here') {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Lead — ${contactProjectType} — ${contactName}`,
            from_name: contactName,
            email: contactEmail,
            message: `Project Type: ${contactProjectType}\n\nMessage:\n${contactMessage}`,
          })
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error('Submission failed');

        // Fire conversion event for GA4 / Google Ads (safe no-op if gtag isn't loaded)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag?.('event', 'generate_lead', { method: 'contact_form', project_type: contactProjectType });
        setContactSent(true);
        setContactName(''); setContactEmail(''); setContactMessage('');
      } else {
        // Fallback if no API key set yet: open the user's email client with the lead pre-filled
        const subject = encodeURIComponent(`New Lead — ${contactProjectType} — ${contactName}`);
        const body = encodeURIComponent(
          `Name: ${contactName}\nEmail: ${contactEmail}\nProject Type: ${contactProjectType}\n\nMessage:\n${contactMessage}`
        );
        window.open(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`);
        setContactSent(true);
        setContactName(''); setContactEmail(''); setContactMessage('');
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
      setContactError(true);
    } finally {
      setContactSending(false);
    }
  };

  const filteredProjects = activeFilter === 'All'
    ? PROJECT_LIST
    : PROJECT_LIST.filter(p => p.filter === activeFilter);

  return (
    <div className="min-h-screen w-full bg-bg-primary text-text-primary relative">

      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      {/* ═══════════════════════════════════════════════ NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-bg-primary/85 backdrop-blur-md border-b border-border-primary">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Build First Site — back to top"
            className="flex items-center gap-2.5 cursor-pointer group">
            <CubeMark className="w-7 h-7 text-text-primary" />
            <span className="font-display font-medium text-[15px] tracking-tight leading-none">
              Build<span className="text-brand">First</span>Site
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button key={link.section} onClick={() => scrollTo(link.section)}
                className={`text-sm transition-colors cursor-pointer ${
                  activeSection === link.section ? 'text-text-primary font-medium' : 'text-text-muted hover:text-text-primary'
                }`}>
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} className="w-9 h-9 rounded-full border border-border-secondary flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer mr-1">
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setCalendlyOpen(true)}
              className="hidden md:flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 decoration-text-accent hover:decoration-text-primary transition-all cursor-pointer">
              Book A Call <ArrowUpRight className="w-4 h-4" />
            </button>
            <button onClick={() => setMobileNavOpen(true)} aria-label="Open menu" className="md:hidden w-9 h-9 flex items-center justify-center cursor-pointer">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileNavOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileNavOpen(false)} className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-72 bg-bg-primary z-[70] flex flex-col p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <CubeMark className="w-7 h-7" />
                <button onClick={() => setMobileNavOpen(false)} aria-label="Close menu" className="w-9 h-9 rounded-full border border-border-secondary flex items-center justify-center">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map(link => (
                  <button key={link.section} onClick={() => scrollTo(link.section)}
                    className="text-left px-4 py-3 rounded-xl text-sm text-text-secondary hover:bg-bg-secondary transition-colors">
                    {link.label}
                  </button>
                ))}
              </nav>
              <button onClick={() => { setMobileNavOpen(false); setCalendlyOpen(true); }}
                className="btn-primary mt-4 py-3.5 w-full">
                Book A Call <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════ HERO */}
      <main id="main">
      <section id="home" ref={refs.home} className="relative pt-16 min-h-screen flex flex-col lg:flex-row max-w-[1600px] mx-auto">
        <span className="side-label absolute left-5 top-1/2 -translate-y-1/2 hidden xl:block" style={{ transform: 'rotate(180deg)' }}>
          Full Stack Developer
        </span>
        <span className="side-label absolute left-5 bottom-12 hidden xl:block" style={{ transform: 'rotate(180deg)' }}>2026</span>

        {/* Left: text */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-14 xl:px-24 py-16 lg:py-0">
          <FadeUp>
            <div className="flex gap-12 mb-12">
              {STATS.map((s, i) => (
                <div key={i}>
                  <div className="font-display font-light text-4xl md:text-5xl">{s.value}</div>
                  <div className="text-sm text-text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95]">
              Your first<br />impression,<br /><span className="text-brand">built right.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-text-secondary mt-6 max-w-md font-light">
              We're <span className="font-medium text-text-primary">Build First Site</span> — a web studio crafting
              high-converting business, e-commerce & AI-powered websites.
            </p>
            <p className="text-sm text-text-faint mt-3 tracking-wide uppercase">Design & Development Studio · Serving the US · UK · Australia</p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex items-center gap-4 mt-10">
              <button onClick={() => scrollTo('contact')}
                className="btn-primary px-6 py-3.5">
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo('portfolio')}
                className="px-6 py-3.5 rounded-full border border-border-tertiary text-sm text-text-secondary hover:border-[#16181d] hover:text-text-primary transition-colors cursor-pointer">
                View Work
              </button>
            </div>
            <button onClick={() => scrollTo('about')}
              className="flex items-center gap-2 text-sm text-text-muted mt-16 cursor-pointer hover:text-text-primary transition-colors">
              Scroll down <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </FadeUp>
        </div>

        {/* Right: video panel — portrait 9:16 to match source */}
        <div className="lg:w-[44%] flex items-center justify-center px-6 md:px-14 lg:pl-0 lg:pr-10 pb-10 lg:py-10">
          <FadeUp delay={0.15}>
            <div className="hero-art w-[300px] sm:w-[340px] aspect-[9/16] rounded-[28px] overflow-hidden relative bg-[#0A0A0A]">
              <video
                autoPlay muted loop playsInline aria-hidden="true"
                className="w-full h-full object-cover"
                style={{ mixBlendMode: 'screen', opacity: 0.9 }}
              >
                <source src="/hero-dev-loop.mp4" type="video/mp4" />
                <track kind="captions" srcLang="en" label="English" src="/captions.vtt" default />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 pointer-events-none" />

              <span className="absolute bottom-6 left-7 text-[10px] tracking-[0.4em] uppercase text-white/55">Build · Ship · Scale</span>
              <span className="absolute top-6 right-7 text-[10px] tracking-[0.4em] uppercase text-white/55">BFS — 2026</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────── TRUSTED BY MARQUEE */}
      <div className="border-y border-border-primary py-6 overflow-hidden bg-bg-primary">
        <div className="animate-ticker">
          {[...PROJECT_LIST, ...PROJECT_LIST, ...PROJECT_LIST].map((c, i) => (
            <div key={i} className="flex items-center gap-3 px-10 flex-shrink-0">
              <span className="text-lg leading-none">{c.country}</span>
              <span className="text-sm font-medium text-text-secondary">{c.title}</span>
              <span className="text-xs text-text-faintest">{c.category}</span>
              <span className="ml-8 w-px h-5 bg-[#e7e8ea]" />
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════ ABOUT */}
      <section id="about" ref={refs.about} className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-16">
          <FadeUp>
            <span className="eyebrow">About Us</span>
            <h2 className="display text-[clamp(2.6rem,5.5vw,4.5rem)] mt-4">The studio behind<br />the websites</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-text-muted max-w-xs lg:text-right font-light">
              Enterprise rigour from fintech at scale, startup speed from product builds — your business gets both.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: stat card + cube panel */}
          <FadeUp>
            <div className="grid grid-cols-2 gap-5">
              <div className="card p-7 col-span-2 sm:col-span-1">
                <div className="font-display font-light text-6xl">+20<span className="text-3xl align-top">%</span></div>
                <p className="text-sm text-text-muted mt-3 leading-relaxed">Average increase in client engagement after relaunch</p>
              </div>
              <div className="card p-7 col-span-2 sm:col-span-1">
                <div className="font-display font-light text-6xl">10M<span className="text-3xl align-top">+</span></div>
                <p className="text-sm text-text-muted mt-3 leading-relaxed">Users served by platforms our team builds and ships</p>
              </div>
              <div className="hero-art rounded-[22px] col-span-2 h-56 flex items-center justify-center relative overflow-hidden group border border-border-primary bg-[#0A0A0A]">
                <img 
                  src="/clean_arch_dark.png"
                  alt="Precision over cleverness" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                <span className="absolute bottom-4 left-5 text-[10px] tracking-[0.35em] uppercase text-white/90 z-10 font-medium">Precision over cleverness</span>
              </div>
            </div>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 mt-7 px-5 py-3 rounded-full border border-border-tertiary text-sm text-text-secondary hover:border-[#16181d] hover:text-text-primary transition-colors">
              <Linkedin className="w-4 h-4" /> View LinkedIn
            </a>
          </FadeUp>

          {/* Right: points */}
          <div className="flex flex-col gap-7">
            {ABOUT_POINTS.map((point, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-text-primary text-bg-primary flex items-center justify-center flex-shrink-0 text-sm leading-none mt-0.5">+</span>
                  <p className="text-[15px] text-text-secondary leading-relaxed font-light">{point}</p>
                </div>
              </FadeUp>
            ))}
            <FadeUp delay={0.4}>
              <div className="card p-6 flex items-center gap-4 mt-2">
                <span className="w-12 h-12 rounded-full bg-text-primary text-bg-primary flex items-center justify-center font-display text-lg flex-shrink-0">AS</span>
                <div>
                  <p className="text-sm font-medium text-text-primary">Aman Singh</p>
                  <p className="text-xs text-text-muted">Founder &amp; Lead Developer · 7+ yrs · ex-L&amp;T Finance</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Experience rows */}
        <div className="mt-28 hidden">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 mb-12">
            <FadeUp>
              <span className="eyebrow">Experiences</span>
              <h3 className="display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-4">Explore my development journey</h3>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-text-muted max-w-sm lg:text-right font-light">
                2.5+ years across enterprise fintech and freelance product builds for clients worldwide.
              </p>
            </FadeUp>
          </div>

          <div className="border-t border-border-secondary">
            {EXPERIENCE.map((exp, i) => (
              <FadeUp key={i}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-8 border-b border-border-secondary items-start hover:bg-bg-secondary transition-colors px-2 -mx-2 rounded-lg">
                  <div className="md:col-span-3">
                    <h4 className="font-display text-xl">{exp.org}</h4>
                    <p className="text-xs text-text-faint mt-1.5 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#9ca1a8]" /> {exp.period}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm text-text-muted leading-relaxed font-light">{exp.description}</p>
                    {exp.url && (
                      <a href={exp.url} target="_blank" rel="noreferrer"
                        className="text-sm font-medium text-text-primary underline underline-offset-4 decoration-text-accent hover:decoration-text-primary mt-2 inline-block">
                        Visit website
                      </a>
                    )}
                  </div>
                  <div className="md:col-span-4 flex flex-wrap md:justify-end gap-2">
                    {exp.tags.map((t, j) => <span key={j} className="pill">{t}</span>)}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ PORTFOLIO */}
      <section id="portfolio" ref={refs.portfolio} className="bg-bg-secondary border-y border-border-primary">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12">
            <FadeUp>
              <span className="eyebrow">Portfolio</span>
              <h2 className="display text-[clamp(2.6rem,5.5vw,4.5rem)] mt-4">Latest Works</h2>
              <a href="/work/" className="inline-flex items-center gap-1.5 mt-4 text-sm text-text-muted hover:text-text-primary transition-colors">
                Read the full case studies <ArrowUpRight className="w-4 h-4" />
              </a>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {PROJECT_FILTERS.map(f => (
                  <button key={f} onClick={() => setActiveFilter(f)}
                    className={`px-5 py-2.5 rounded-full text-sm transition-all cursor-pointer ${
                      activeFilter === f
                        ? 'bg-text-primary text-bg-primary'
                        : 'bg-bg-primary border border-border-secondary text-text-muted hover:text-text-primary'
                    }`}>
                    {f}
                  </button>
                ))}
              </div>
            </FadeUp>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                <motion.div key={project.id} layout
                  initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="card overflow-hidden group flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden m-4 mb-0 rounded-xl border border-border-primary bg-bg-secondary">
                    {project.image
                      ? <img src={project.image} alt={`${project.title} — ${project.subtitle} website screenshot`} loading="lazy" decoding="async" width={800} height={480} referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top proj-img" />
                      : <ProjectCover project={project} />}
                    <span className="absolute bottom-3 left-3 px-3.5 py-1.5 rounded-full bg-white/95 text-xs font-medium text-[#16181d] shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl">{project.title}</h3>
                      <span className="text-sm text-text-faint flex-shrink-0">{project.techStack[0]}</span>
                    </div>
                    <p className="text-sm text-text-muted font-light leading-relaxed mt-2.5">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.techStack.slice(1).map((t, i) => (
                        <span key={i} className="text-[11px] text-text-faint bg-bg-secondary rounded-full px-2.5 py-1">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-5 mt-5 pt-4 border-t border-border-light">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-text-primary hover:opacity-70 transition-opacity">
                          <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                        </a>
                      )}
                      {CASE_STUDY_SLUGS[project.id] && (
                        <a href={`/work/${CASE_STUDY_SLUGS[project.id]}/`}
                          className="flex items-center gap-1.5 text-sm font-medium text-brand hover:opacity-70 transition-opacity">
                          <ArrowUpRight className="w-3.5 h-3.5" /> Case Study
                        </a>
                      )}
                      <span className="text-xs text-text-faint ml-auto text-right">{project.metrics}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ SKILLS */}
      <section id="skills" ref={refs.skills} className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 mb-14">
          <FadeUp>
            <span className="eyebrow">Skills</span>
            <h2 className="display text-[clamp(2.6rem,5.5vw,4.5rem)] mt-4">Technology stack</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-text-muted max-w-xs lg:text-right font-light">Every tool chosen for a reason — performance, reliability, speed of delivery.</p>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {TECH_CATEGORIES.map((cat, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="card p-7 h-full">
                <span className="text-xs tracking-[0.25em] uppercase text-text-faint">{cat.label}</span>
                <div className="flex flex-wrap gap-2 mt-5">
                  {cat.items.map((item, j) => <span key={j} className="pill">{item}</span>)}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════ DARK CTA BANNER */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="hero-art rounded-[28px] py-20 px-8 text-center relative">
            <p className="text-xs tracking-[0.25em] uppercase text-white/50 relative z-10">(Book your free consultation now)</p>
            <h2 className="display text-[clamp(2rem,4.5vw,3.6rem)] !text-white mt-5 relative z-10">
              Ready to build something<br /><em className="font-light italic">amazing together?</em>
            </h2>
            <p className="text-white/55 font-light mt-5 max-w-md mx-auto relative z-10">
              A free 30-minute call to discuss your project with an experienced full-stack & AI developer.
            </p>
            <button onClick={() => setCalendlyOpen(true)}
              className="relative z-10 mt-8 px-7 py-3.5 rounded-full bg-white text-[#16181d] text-sm font-medium inline-flex items-center gap-2 hover:bg-white/90 transition-colors cursor-pointer">
              Let's talk <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </FadeUp>
      </div>

      {/* ═══════════════════════════════════════════════ FAQ */}
      <section id="faq" ref={refs.faq} className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <FadeUp>
              <span className="eyebrow">FAQ</span>
              <h2 className="display text-[clamp(2.4rem,4.5vw,3.8rem)] mt-4">The essentials</h2>
              <p className="text-text-muted font-light mt-5 max-w-xs">A simple breakdown of how I work and what to expect.</p>
            </FadeUp>
          </div>
          <div className="lg:col-span-8">
            {FAQS.map((item, i) => (
              <FadeUp key={i}>
                <div className="border-b border-border-secondary first:border-t">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group cursor-pointer">
                    <span className={`text-base md:text-lg font-light transition-colors ${openFaq === i ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
                      {item.q}
                    </span>
                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full border border-border-tertiary flex items-center justify-center text-text-muted text-lg font-light">
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: 'hidden' }}>
                        <p className="text-[15px] text-text-muted font-light leading-relaxed pb-7 max-w-2xl">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ PRICING */}
      <section id="pricing" ref={refs.pricing} className="bg-bg-secondary border-y border-border-primary">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 mb-14">
            <FadeUp>
              <span className="eyebrow">Price</span>
              <h2 className="display text-[clamp(2.6rem,5.5vw,4.5rem)] mt-4">Your vision, your budget</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-text-muted max-w-xs lg:text-right font-light">
                Transparent fixed pricing in USD for US & Australian clients. No hourly billing, no surprises.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Fixed-price tiers */}
            <div className="lg:col-span-7">
              <div className="border-t border-border-light-2">
                {PRICE_TIERS.map((tier, i) => (
                  <FadeUp key={i} delay={i * 0.05}>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-7 border-b border-border-light-2 items-start">
                      <div className="sm:col-span-7">
                        <h3 className="font-display text-xl">{tier.title}</h3>
                        <p className="text-sm text-text-muted font-light leading-relaxed mt-1.5">{tier.desc}</p>
                        <span className="text-xs text-text-faint mt-2 inline-flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#9ca1a8]" /> {tier.timeline}
                        </span>
                      </div>
                      <div className="sm:col-span-5 flex sm:flex-col sm:items-end items-baseline gap-2 sm:gap-0.5">
                        <span className="text-xs text-text-faint uppercase tracking-[0.2em] sm:order-1">from</span>
                        <span className="font-display font-light text-4xl sm:order-2">{tier.price}</span>
                        <span className="text-xs text-text-faint sm:order-3">{tier.aud}</span>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
              <FadeUp delay={0.2}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-7">
                  <p className="text-sm text-text-faint font-light">
                    Every build includes: responsive design · SEO basics · 30 days free support · full code ownership.
                  </p>
                  <button onClick={() => scrollTo('contact')}
                    className="btn-primary px-6 py-3 flex-shrink-0 w-fit">
                    Get a Fixed Quote <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </FadeUp>
            </div>

            {/* Retainer card */}
            <FadeUp className="lg:col-span-5" delay={0.1}>
              <div className="rounded-[22px] p-8 flex flex-col bg-text-primary text-bg-primary">
                <span className="text-xs tracking-[0.25em] uppercase text-bg-primary/50">{RETAINER.tag}</span>
                <h3 className="font-display text-2xl mt-4">{RETAINER.title}</h3>
                <p className="text-sm font-light leading-relaxed mt-2 text-bg-primary/60">{RETAINER.blurb}</p>
                <div className="flex items-baseline gap-1.5 mt-7">
                  <span className="text-xs text-bg-primary/50 uppercase tracking-[0.2em] mr-1">from</span>
                  <span className="font-display font-light text-5xl">{RETAINER.price}</span>
                  <span className="text-bg-primary/50">{RETAINER.unit}</span>
                </div>
                <div className="mt-7 pt-6 space-y-3.5 border-t flex-1 border-bg-primary/10">
                  {RETAINER.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-bg-primary/70" />
                      <span className="text-sm font-light text-bg-primary/75">{f}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setCalendlyOpen(true)}
                  className="mt-8 py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer bg-bg-primary text-text-primary hover:opacity-90">
                  {RETAINER.cta} <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ TESTIMONIALS */}
      <section id="testimonials" className="bg-bg-secondary border-y border-border-primary">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-28">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 mb-14">
            <FadeUp>
              <span className="eyebrow">Testimonials</span>
              <h2 className="display text-[clamp(2.4rem,5vw,4rem)] mt-4">What clients say</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-text-muted max-w-xs lg:text-right font-light">
                Real projects, shipped on time — for businesses across Australia and beyond.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="card p-7 h-full flex flex-col">
                  <Quote className="w-7 h-7 text-brand mb-4" />
                  <p className="text-[15px] text-text-secondary leading-relaxed font-light flex-1">"{t.quote}"</p>
                  <div className="mt-6 pt-5 border-t border-border-light">
                    <p className="text-sm font-medium text-text-primary">{t.name} <span className="text-text-faint font-normal">· {t.company} {t.country}</span></p>
                    <p className="text-xs text-brand mt-1">{t.result}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ FREE AUDIT OFFER */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <FadeUp>
          <div className="hero-art rounded-[28px] p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-brand font-medium">
                <Zap className="w-4 h-4" /> Free · No obligation
              </span>
              <h2 className="display text-[clamp(2rem,4vw,3.2rem)] !text-white mt-4">Get a free 5-minute website audit</h2>
              <p className="text-white/60 font-light mt-4 leading-relaxed">
                Send me your current site and I'll record a short, honest walkthrough of what's costing you customers —
                speed, mobile, copy, and conversion — plus the 3 quickest wins. No pitch, yours to keep.
              </p>
            </div>
            <button onClick={startAudit}
              className="relative z-10 flex-shrink-0 px-7 py-4 rounded-full bg-white text-[#16181d] text-sm font-medium inline-flex items-center gap-2 hover:bg-white/90 transition-colors cursor-pointer">
              <Search className="w-4 h-4" /> Claim my free audit
            </button>
          </div>
        </FadeUp>
      </div>

      {/* ═══════════════════════════════════════════════ CONTACT */}
      <section id="contact" ref={refs.contact} className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <FadeUp className="text-center mb-16">
          <span className="eyebrow">Contact</span>
          <h2 className="display text-[clamp(2.6rem,5.5vw,4.5rem)] mt-4">Let's work together</h2>
          <p className="text-text-muted font-light mt-4 max-w-md mx-auto">
            Have a project in mind, or want a free audit? Reply within 24h · async-friendly · serving AU · UK · US.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Methods */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              { icon: <Mail className="w-4 h-4" />, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: <Phone className="w-4 h-4" />, label: 'WhatsApp', value: CONTACT.phone, href: CONTACT.whatsapp },
            ].map((m, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <a href={m.href} target="_blank" rel="noreferrer" className="card p-5 flex items-center gap-4 group hover:shadow-md transition-shadow">
                  <span className="w-11 h-11 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary flex-shrink-0">{m.icon}</span>
                  <span className="flex-1 min-w-0">
                    <span className="text-xs tracking-[0.2em] uppercase text-text-faint block">{m.label}</span>
                    <span className="text-sm text-text-primary break-all">{m.value}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-accent group-hover:text-text-primary transition-colors" />
                </a>
              </FadeUp>
            ))}
            <FadeUp delay={0.16}>
              <button onClick={() => setCalendlyOpen(true)} className="card p-5 flex items-center gap-4 group hover:shadow-md transition-shadow w-full text-left cursor-pointer">
                <span className="w-11 h-11 rounded-full bg-[#16181d] flex items-center justify-center text-white flex-shrink-0"><Calendar className="w-4 h-4" /></span>
                <span className="flex-1">
                  <span className="text-xs tracking-[0.2em] uppercase text-text-faint block">Book a Call</span>
                  <span className="text-sm text-text-primary">30 min via Calendly — free</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-text-accent group-hover:text-text-primary transition-colors" />
              </button>
            </FadeUp>
          </div>

          {/* Form */}
          <FadeUp className="lg:col-span-3" delay={0.1}>
            <div className="card p-7 md:p-8 h-full">
              {contactSent ? (
                <div className="py-16 flex flex-col items-center text-center gap-4">
                  <span className="w-14 h-14 rounded-full bg-text-primary text-bg-primary flex items-center justify-center"><Check className="w-7 h-7" /></span>
                  <p className="font-display text-xl">Thanks — your message is in!</p>
                  <p className="text-sm text-text-muted font-light">I'll get back to you within 24 hours. For anything urgent, message me on WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" required placeholder="Your name *" value={contactName} onChange={e => setContactName(e.target.value)}
                      className="bg-bg-tertiary border border-border-secondary rounded-xl px-4 py-3.5 text-sm focus:border-border-primary outline-none transition-colors w-full" />
                    <input type="email" required placeholder="Email address *" value={contactEmail} onChange={e => setContactEmail(e.target.value)}
                      className="bg-bg-tertiary border border-border-secondary rounded-xl px-4 py-3.5 text-sm focus:border-border-primary outline-none transition-colors w-full" />
                  </div>
                  <select value={contactProjectType} onChange={e => setContactProjectType(e.target.value)}
                    aria-label="Project type"
                    className="bg-bg-tertiary border border-border-secondary rounded-xl px-4 py-3.5 text-sm focus:border-border-primary outline-none transition-colors w-full text-text-secondary">
                    <option>Free Website Audit</option>
                    <option>Website / Web App</option>
                    <option>E-Commerce Platform</option>
                    <option>SaaS / AI Product</option>
                    <option>Mobile App (Flutter)</option>
                    <option>Monthly Retainer</option>
                    <option>Something Else</option>
                  </select>
                  <textarea required rows={5} placeholder="Tell me about your project — goals, timeline, budget range… *"
                    value={contactMessage} onChange={e => setContactMessage(e.target.value)}
                    className="bg-bg-tertiary border border-border-secondary rounded-xl px-4 py-3.5 text-sm focus:border-border-primary outline-none transition-colors w-full resize-none" />
                  <button type="submit" disabled={contactSending}
                    className="btn-primary w-full py-4 disabled:opacity-70 disabled:cursor-not-allowed">
                    {contactSending ? (
                      <><span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> Sending…</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                  {contactError && (
                    <p className="text-xs text-center text-red-500">
                      Something went wrong. Please email <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a> or try WhatsApp.
                    </p>
                  )}
                  <p className="text-[11px] text-center text-text-faint">No spam, ever. Your details go straight to my inbox.</p>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </section>
      </main>

      {/* ═══════════════════════════════════════════════ FOOTER */}
      <footer className="border-t border-border-primary bg-bg-primary">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <CubeMark className="w-7 h-7" />
            <p className="text-xs text-text-faint">Build First Site · Web Design & Development Studio · US · UK · Australia</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <button key={link.section} onClick={() => scrollTo(link.section)}
                className="text-xs text-text-faint hover:text-text-primary transition-colors cursor-pointer">
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full border border-border-secondary flex items-center justify-center text-text-muted hover:text-text-primary hover:border-[#16181d] transition-colors"><Github className="w-4 h-4" /></a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-border-secondary flex items-center justify-center text-text-muted hover:text-text-primary hover:border-[#16181d] transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href={`mailto:${CONTACT.email}`} aria-label="Email us" className="w-9 h-9 rounded-full border border-border-secondary flex items-center justify-center text-text-muted hover:text-text-primary hover:border-[#16181d] transition-colors"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
        {/* ── City & service links (SEO internal linking) ── */}
        <div className="border-t border-border-light max-w-[1440px] mx-auto px-6 md:px-10 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-text-faintest mb-3">Australia</p>
              <div className="flex flex-col gap-1.5">
                <a href="/web-design-sydney/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Web Designer Sydney</a>
                <a href="/web-design-melbourne/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Web Designer Melbourne</a>
                <a href="/web-design-brisbane/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Web Designer Brisbane</a>
                <a href="/web-design-perth/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Web Designer Perth</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-text-faintest mb-3">United States</p>
              <div className="flex flex-col gap-1.5">
                <a href="/web-design-denver/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Web Designer Denver</a>
                <a href="/web-design-phoenix/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Web Designer Phoenix</a>
                <a href="/web-design-nashville/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Web Designer Nashville</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-text-faintest mb-3">Services</p>
              <div className="flex flex-col gap-1.5">
                <a href="/hire-website-builder/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Hire Website Builder</a>
                <a href="/nextjs-development/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Next.js Developer</a>
                <a href="/ecommerce-development/" className="text-xs text-text-faint hover:text-text-primary transition-colors">E-Commerce Developer</a>
                <a href="/ai-web-development/" className="text-xs text-text-faint hover:text-text-primary transition-colors">AI Web Developer</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-text-faintest mb-3">Industries</p>
              <div className="flex flex-col gap-1.5">
                <a href="/tradie-website-design/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Tradie Websites</a>
                <a href="/restaurant-website-design/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Restaurant Websites</a>
                <a href="/real-estate-website-design/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Real Estate Websites</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-text-faintest mb-3">Learn &amp; Compare</p>
              <div className="flex flex-col gap-1.5">
                <a href="/work/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Case Studies</a>
                <a href="/guides/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Guides</a>
                <a href="/how-much-does-a-website-cost-australia/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Website Cost in Australia</a>
                <a href="/wix-vs-custom-website/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Wix vs Custom</a>
                <a href="/squarespace-vs-custom-website/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Squarespace vs Custom</a>
                <a href="/shopify-vs-custom-website/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Shopify vs Custom</a>
                <a href="/webflow-vs-custom-website/" className="text-xs text-text-faint hover:text-text-primary transition-colors">Webflow vs Custom</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-light px-6 md:px-10 py-4 max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-text-faintest">© 2026 Build First Site. All rights reserved.</p>
          <p className="text-[11px] text-text-faintest">Built with React · Deployed on Vercel</p>
        </div>
      </footer>

      {/* ═══════════════════════════ WHATSAPP FLOAT */}
      <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" title="Chat on WhatsApp" aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200"
        style={{ backgroundColor: '#25D366', boxShadow: '0 4px 24px rgba(37,211,102,0.35)' }}>
        <WhatsAppIcon />
      </a>

      {/* ═══════════════════════════ CALENDLY MODAL */}
      <AnimatePresence>
        {calendlyOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setCalendlyOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] cursor-pointer" />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl z-[101] rounded-3xl overflow-hidden shadow-2xl bg-bg-primary"
              style={{ height: '85vh' }}>
              <div className="flex items-center justify-between px-6 py-4 border-b border-border-primary">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-text-muted" />
                  <span className="text-sm text-text-secondary">Book a 30-min Discovery Call</span>
                </div>
                <button onClick={() => setCalendlyOpen(false)} aria-label="Close"
                  className="w-8 h-8 rounded-full border border-border-secondary flex items-center justify-center hover:bg-[#16181d] hover:text-white transition-colors cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <iframe src={CONTACT.calendly} width="100%" height="100%" frameBorder="0"
                title="Book a call with Build First Site" style={{ background: '#fff' }} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
