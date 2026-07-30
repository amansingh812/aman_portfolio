import Link from 'next/link';

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Design', href: '/#skills' },
      { label: 'AI Web Development', href: '/ai-web-development/' },
      { label: 'E-Commerce Development', href: '/ecommerce-development/' },
      { label: 'Next.js Development', href: '/nextjs-development/' },
      { label: 'Hire a Website Builder', href: '/hire-website-builder/' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Tradie Websites', href: '/tradie-website-design/' },
      { label: 'Restaurant Websites', href: '/restaurant-website-design/' },
      { label: 'Real Estate Websites', href: '/real-estate-website-design/' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { label: 'Wix vs Custom', href: '/wix-vs-custom-website/' },
      { label: 'Squarespace vs Custom', href: '/squarespace-vs-custom-website/' },
      { label: 'Shopify vs Custom', href: '/shopify-vs-custom-website/' },
      { label: 'Webflow vs Custom', href: '/webflow-vs-custom-website/' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'Web Design Sydney', href: '/web-design-sydney/' },
      { label: 'Web Design Melbourne', href: '/web-design-melbourne/' },
      { label: 'Web Design Brisbane', href: '/web-design-brisbane/' },
      { label: 'Web Design Perth', href: '/web-design-perth/' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Case Studies', href: '/work/' },
      { label: 'Guides', href: '/guides/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'What a Website Costs', href: '/how-much-does-a-website-cost-australia/' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border-primary bg-bg-secondary mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-text-faint mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border-primary flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Build First Site — Web Design &amp; Development Studio · AU · US · UK
          </p>
          <div className="flex items-center gap-5 text-sm text-text-secondary">
            <Link href="/#contact" className="hover:text-text-primary">Contact</Link>
            <a href="https://www.linkedin.com/in/aman-singh-b3a7251a2" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">LinkedIn</a>
            <a href="https://github.com/amansingh812" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
