import type { Metadata } from 'next';
import ServicePage from '../components/ServicePage';
import { getService } from '../lib/services';

const data = getService('app-development-australia')!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: { canonical: '/app-development-australia/' },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: 'https://buildfirstsite.com/app-development-australia/',
    type: 'website',
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
