export type NavSection =
  | 'home'
  | 'about'
  | 'portfolio'
  | 'skills'
  | 'faq'
  | 'pricing'
  | 'contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  metrics: string;
  category: string;       // display badge
  filter: string;         // filter group: 'Full Stack' | 'AI · SaaS' | 'Mobile'
  country: string;
  liveUrl?: string | null;
  image?: string | null;  // screenshot URL; null → stylized cover
  cover?: { from: string; to: string; mark: string }; // fallback cover style
  /**
   * True = spec/concept build, not commissioned client work.
   * MUST be surfaced in the UI wherever the project is shown.
   * See CLAUDE.md §1 honesty constraints.
   */
  isConcept?: boolean;
}

export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
