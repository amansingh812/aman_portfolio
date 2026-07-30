'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const CubeMark = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg viewBox="0 0 32 27" fill="none" className={className} aria-label="Build First Site">
    <rect x="2" y="2.5" width="28" height="22" rx="5.5" stroke="currentColor" strokeWidth="2.2" />
    <line x1="2" y1="9.6" x2="30" y2="9.6" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="6.8" cy="6" r="1.5" fill="#FF5600" />
    <circle cx="11.6" cy="6" r="1.5" fill="currentColor" />
    <circle cx="16.4" cy="6" r="1.5" fill="currentColor" />
  </svg>
);

const NAV = [
  { label: 'Work', href: '/work/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Services', href: '/#skills' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
];

export default function SiteHeader() {
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/85 backdrop-blur-md border-b border-border-primary">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-text-primary">
          <CubeMark className="w-7 h-6" />
          <span className="font-display text-lg tracking-tight">
            Build<span className="text-brand">First</span>Site
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-text-primary transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-border-secondary flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link href="/#contact" className="btn-primary hidden sm:inline-flex px-5 py-2.5 text-sm">
            Get a Quote
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden w-9 h-9 rounded-full border border-border-secondary flex items-center justify-center text-text-primary"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border-primary bg-bg-primary px-5 py-4 flex flex-col gap-3 text-sm text-text-secondary">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-1">
              {n.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary px-5 py-2.5 mt-1">
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
