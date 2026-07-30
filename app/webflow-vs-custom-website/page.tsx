import type { Metadata } from 'next';
import ComparisonPage from '../components/ComparisonPage';
import { getComparison } from '../lib/comparisons';

const data = getComparison('webflow-vs-custom-website')!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: { canonical: '/webflow-vs-custom-website/' },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: 'https://buildfirstsite.com/webflow-vs-custom-website/',
    type: 'article',
  },
};

export default function Page() {
  return <ComparisonPage data={data} />;
}
