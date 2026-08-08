import { NextResponse } from 'next/server';

export const maxDuration = 60; // Set maximum execution time for serverless functions

const generateMockData = (targetUrl) => {
  // Generate pseudo-random but consistent scores based on the URL name
  const cleanUrl = targetUrl.replace(/https?:\/\/(www\.)?/, '');
  const hash = [...cleanUrl].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const mPerf = 55 + (hash % 35); // 55 to 89
  const mAcc = 80 + (hash % 19);  // 80 to 98
  const mBest = 75 + (hash % 24); // 75 to 98
  const mSeo = 85 + (hash % 15);  // 85 to 99

  const dPerf = Math.min(99, mPerf + 10 + (hash % 10)); // Higher than mobile
  const dAcc = Math.min(100, mAcc + 3 + (hash % 3));
  const dBest = Math.min(100, mBest + 5 + (hash % 3));
  const dSeo = Math.min(100, mSeo + 2 + (hash % 2));

  // Helper to format values as string
  const formatSec = (val) => `${val.toFixed(1)} s`;
  const formatMs = (val) => `${Math.round(val)} ms`;

  return {
    mobile: {
      scores: {
        performance: mPerf,
        accessibility: mAcc,
        bestPractices: mBest,
        seo: mSeo,
      },
      metrics: {
        firstContentfulPaint: formatSec(1.2 + (hash % 10) / 10),
        largestContentfulPaint: formatSec(2.0 + (hash % 25) / 10),
        totalBlockingTime: formatMs(150 + (hash % 350)),
        cumulativeLayoutShift: ((hash % 18) / 100).toFixed(2),
        speedIndex: formatSec(1.8 + (hash % 15) / 10),
      },
    },
    desktop: {
      scores: {
        performance: dPerf,
        accessibility: dAcc,
        bestPractices: dBest,
        seo: dSeo,
      },
      metrics: {
        firstContentfulPaint: formatSec(0.3 + (hash % 5) / 10),
        largestContentfulPaint: formatSec(0.8 + (hash % 12) / 10),
        totalBlockingTime: formatMs(20 + (hash % 80)),
        cumulativeLayoutShift: ((hash % 5) / 100).toFixed(2),
        speedIndex: formatSec(0.6 + (hash % 8) / 10),
      },
    },
    url: targetUrl,
    timestamp: new Date().toISOString(),
    isMock: true,
  };
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    new URL(targetUrl);
  } catch (e) {
    return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY || '';
  const isDev = process.env.NODE_ENV === 'development';

  // If no API key is set and we're in local development, instantly fall back to mock data
  if (!apiKey && isDev) {
    console.log(`[PageSpeed API] No GOOGLE_PAGESPEED_API_KEY found. Serving mock data in development mode for: ${targetUrl}`);
    // Simulate API delay for realistic testing experience
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return NextResponse.json(generateMockData(targetUrl));
  }

  const buildApiUrl = (strategy) => {
    let apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&strategy=${strategy}&category=performance&category=accessibility&category=best-practices&category=seo`;
    if (apiKey) {
      apiUrl += `&key=${apiKey}`;
    }
    return apiUrl;
  };

  try {
    const [mobileResponse, desktopResponse] = await Promise.all([
      fetch(buildApiUrl('mobile')),
      fetch(buildApiUrl('desktop'))
    ]);

    // Handle rate-limiting (429) specifically
    if (mobileResponse.status === 429 || desktopResponse.status === 429) {
      if (isDev) {
        console.warn(`[PageSpeed API] Google PageSpeed API rate limit exceeded (429). Falling back to mock data in development.`);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return NextResponse.json(generateMockData(targetUrl));
      }
      return NextResponse.json(
        { error: 'Google PageSpeed API quota exceeded. Please configure GOOGLE_PAGESPEED_API_KEY in Vercel/environment variables to restore service.' },
        { status: 429 }
      );
    }

    if (!mobileResponse.ok || !desktopResponse.ok) {
       const mErrorText = await mobileResponse.text();
       const dErrorText = await desktopResponse.text();
       console.error("PageSpeed API Error Details:", mErrorText, dErrorText);
       
       if (isDev) {
         console.warn(`[PageSpeed API] Failed fetching from Google. Falling back to mock data in development.`);
         return NextResponse.json(generateMockData(targetUrl));
       }
       return NextResponse.json({ error: 'Failed to fetch PageSpeed data from Google' }, { status: 500 });
    }

    const mobileData = await mobileResponse.json();
    const desktopData = await desktopResponse.json();

    const parseMetrics = (data) => {
      const categories = data.lighthouseResult?.categories || {};
      const audits = data.lighthouseResult?.audits || {};
      
      return {
        scores: {
          performance: Math.round((categories.performance?.score || 0) * 100),
          accessibility: Math.round((categories.accessibility?.score || 0) * 100),
          bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
          seo: Math.round((categories.seo?.score || 0) * 100),
        },
        metrics: {
          firstContentfulPaint: audits['first-contentful-paint']?.displayValue || 'N/A',
          largestContentfulPaint: audits['largest-contentful-paint']?.displayValue || 'N/A',
          totalBlockingTime: audits['total-blocking-time']?.displayValue || 'N/A',
          cumulativeLayoutShift: audits['cumulative-layout-shift']?.displayValue || 'N/A',
          speedIndex: audits['speed-index']?.displayValue || 'N/A',
        },
      };
    };

    const results = {
      mobile: parseMetrics(mobileData),
      desktop: parseMetrics(desktopData),
      url: targetUrl,
      timestamp: new Date().toISOString(),
      isMock: false
    };

    return NextResponse.json(results);

  } catch (error) {
    console.error('Error fetching PageSpeed data:', error);
    if (isDev) {
      console.warn(`[PageSpeed API] Unexpected error. Falling back to mock data in development.`);
      return NextResponse.json(generateMockData(targetUrl));
    }
    return NextResponse.json({ error: 'An unexpected error occurred while fetching PageSpeed data.' }, { status: 500 });
  }
}
