'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Layout from "@/components/layout/Layout"
import SpeedScoreGauge from "@/components/speed-checker/SpeedScoreGauge"
import MetricCard from "@/components/speed-checker/MetricCard"
import Link from 'next/link'

const css = `
.bfs-results-section {
  padding: 80px 0;
  background: #f8fafc;
  min-height: 80vh;
}
.bfs-results-header {
  margin-bottom: 40px;
  background: #ffffff;
  border: 1px solid #E4E7EC;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
}
.bfs-results-url {
  font-family: monospace;
  background: #f1f5f9;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 14px;
  word-break: break-all;
  display: inline-block;
  margin-top: 10px;
  color: #006D77;
}
.bfs-tab-container {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 30px;
}
.bfs-tab-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  border: 1.5px solid #E4E7EC;
  background: #ffffff;
  color: #475569;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  font-family: var(--chivo), sans-serif;
}
.bfs-tab-button.active {
  background: #006D77;
  color: #ffffff;
  border-color: #006D77;
}
.bfs-gauges-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}
@media (max-width: 992px) {
  .bfs-gauges-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 576px) {
  .bfs-gauges-grid {
    grid-template-columns: 1fr;
  }
}
.bfs-metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}
@media (max-width: 992px) {
  .bfs-metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 576px) {
  .bfs-metrics-grid {
    grid-template-columns: 1fr;
  }
}
.bfs-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
}
@media (max-width: 576px) {
  .bfs-actions {
    flex-direction: column;
  }
}
.bfs-btn-share {
  background: #ffffff;
  color: #006D77;
  border: 1.5px solid #006D77;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--chivo), sans-serif;
}
.bfs-btn-share:hover {
  background: #f4fafb;
}
.bfs-btn-back {
  background: #006D77;
  color: #ffffff;
  border: none;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--chivo), sans-serif;
  text-decoration: none;
  display: inline-block;
}
.bfs-btn-back:hover {
  background: #004d54;
  color: #ffffff;
}
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  text-align: center;
}
.spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #006D77;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1.2s linear infinite;
  margin-bottom: 24px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.error-card {
  max-width: 550px;
  margin: 60px auto;
  background: #ffffff;
  border: 1px solid #fee2fee;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(239, 68, 68, 0.05);
}
.bfs-mock-banner {
  background: #fffbeb;
  border: 1px solid #fef3c7;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 30px;
  color: #b45309;
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: var(--noto), sans-serif;
  font-size: 14px;
  line-height: 1.5;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
`

// Metric evaluation helper
const getMetricStatus = (key, valueStr) => {
  if (!valueStr || valueStr === 'N/A') return 'neutral';
  
  // parse float numeric value
  const numVal = parseFloat(valueStr.replace(/[^0-9.]/g, ''));
  const isMs = valueStr.toLowerCase().includes('ms') || valueStr.toLowerCase().includes('s') === false;

  switch (key) {
    case 'firstContentfulPaint':
      // Good <= 1.8s, Avg <= 3s, Poor > 3s
      return numVal <= 1.8 ? 'good' : numVal <= 3.0 ? 'average' : 'poor';
    
    case 'largestContentfulPaint':
      // Good <= 2.5s, Avg <= 4s, Poor > 4s
      return numVal <= 2.5 ? 'good' : numVal <= 4.0 ? 'average' : 'poor';
      
    case 'totalBlockingTime':
      // Good <= 200ms, Avg <= 600ms, Poor > 600ms
      // If the API returns seconds (e.g. 0.2 s) vs ms (200 ms)
      const valMs = isMs ? numVal : numVal * 1000;
      return valMs <= 200 ? 'good' : valMs <= 600 ? 'average' : 'poor';
      
    case 'cumulativeLayoutShift':
      // Good <= 0.1, Avg <= 0.25, Poor > 0.25
      return numVal <= 0.1 ? 'good' : numVal <= 0.25 ? 'average' : 'poor';
      
    case 'speedIndex':
      // Good <= 3.4s, Avg <= 5.8s, Poor > 5.8s
      return numVal <= 3.4 ? 'good' : numVal <= 5.8 ? 'average' : 'poor';
      
    default:
      return 'neutral';
  }
}

export default function SpeedCheckerResultsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const url = searchParams.get('url')

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [activeStrategy, setActiveStrategy] = useState('mobile') // 'mobile' | 'desktop'
  const [copied, setCopied] = useState(false)
  const [tipIndex, setTipIndex] = useState(0)

  const tips = [
    "Checking Lighthouse performance audits...",
    "Querying Google PageSpeed Insights API...",
    "Analyzing Core Web Vitals (LCP, TBT, CLS)...",
    "Measuring accessibility and SEO checklist items...",
    "Compiling mobile and desktop score comparisons..."
  ]

  useEffect(() => {
    if (!url) {
      router.push('/website-speed-checker')
      return
    }

    // Interval to cycle through status tips during loading
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length)
    }, 4500)

    setLoading(true)
    setError(null)

    // Call API proxy
    fetch(`/api/pagespeed?url=${encodeURIComponent(url)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to audit the website. Please check the URL and try again.')
        }
        return res.json()
      })
      .then((parsedData) => {
        setData(parsedData)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message || 'An error occurred while loading audit data.')
        setLoading(false)
      })

    return () => clearInterval(interval)
  }, [url, router])

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      })
  }

  if (loading) {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <div className="container">
          <div className="loader-container">
            <div className="spinner"></div>
            <h3 className="text-heading-4 color-gray-900 mb-10">Running Performance Check</h3>
            <p className="text-body-lead-large color-gray-500 mb-10" style={{ fontSize: '18px' }}>
              {tips[tipIndex]}
            </p>
            <p className="bfs-results-url">{url}</p>
          </div>
        </div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <div className="container">
          <div className="error-card">
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚠️</div>
            <h3 className="text-heading-3 color-gray-900 mb-15">Audit Failed</h3>
            <p className="text-body-text color-gray-600 mb-30">
              {error}
            </p>
            <Link href="/website-speed-checker" className="bfs-btn-back">
              Go Back & Try Again
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const activeData = data[activeStrategy]

  return (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section className="bfs-results-section">
        <div className="container">
          {data.isMock && (
            <div className="bfs-mock-banner">
              <span style={{ fontSize: '20px' }}>⚠️</span>
              <div>
                <strong>Demonstration Mode:</strong> This report is running on simulated mock data because your Google PageSpeed API Key is missing or rate limited. To run real-time checks, please configure <code>GOOGLE_PAGESPEED_API_KEY</code>.
              </div>
            </div>
          )}

          <div className="bfs-results-header text-center">
            <span className="tag-1 bg-6 color-green-900">Performance Report</span>
            <h2 className="text-heading-2 color-gray-900 mt-15 mb-5">Speed Insights</h2>
            <div className="bfs-results-url">{data.url}</div>
            <p className="text-body-small color-gray-400 mt-15">
              Audited on {new Date(data.timestamp).toLocaleString()}
            </p>
          </div>

          <div className="bfs-tab-container">
            <button
              onClick={() => setActiveStrategy('mobile')}
              className={`bfs-tab-button ${activeStrategy === 'mobile' ? 'active' : ''}`}
            >
              📱 Mobile Strategy
            </button>
            <button
              onClick={() => setActiveStrategy('desktop')}
              className={`bfs-tab-button ${activeStrategy === 'desktop' ? 'active' : ''}`}
            >
              💻 Desktop Strategy
            </button>
          </div>

          <div className="row">
            <div className="col-12">
              <h3 className="text-heading-4 color-gray-900 mb-20 text-center">Core Scores</h3>
              <div className="bfs-gauges-grid">
                <SpeedScoreGauge score={activeData.scores.performance} title="Performance" />
                <SpeedScoreGauge score={activeData.scores.accessibility} title="Accessibility" />
                <SpeedScoreGauge score={activeData.scores.bestPractices} title="Best Practices" />
                <SpeedScoreGauge score={activeData.scores.seo} title="SEO" />
              </div>
            </div>
          </div>

          <div className="row mt-30">
            <div className="col-12">
              <h3 className="text-heading-4 color-gray-900 mb-20 text-center">Lighthouse Performance Metrics</h3>
              <div className="bfs-metrics-grid">
                <MetricCard
                  label="Largest Contentful Paint (LCP)"
                  value={activeData.metrics.largestContentfulPaint}
                  description="Measures when the main content of a page has likely loaded. Ideal LCP is under 2.5s."
                  status={getMetricStatus('largestContentfulPaint', activeData.metrics.largestContentfulPaint)}
                />
                <MetricCard
                  label="Total Blocking Time (TBT)"
                  value={activeData.metrics.totalBlockingTime}
                  description="Measures response delays to user input (clicks, taps, etc.). Ideal TBT is under 200ms."
                  status={getMetricStatus('totalBlockingTime', activeData.metrics.totalBlockingTime)}
                />
                <MetricCard
                  label="Cumulative Layout Shift (CLS)"
                  value={activeData.metrics.cumulativeLayoutShift}
                  description="Measures page visual stability. Lower layout shifts are ideal. Ideal CLS is under 0.1."
                  status={getMetricStatus('cumulativeLayoutShift', activeData.metrics.cumulativeLayoutShift)}
                />
                <MetricCard
                  label="First Contentful Paint (FCP)"
                  value={activeData.metrics.firstContentfulPaint}
                  description="The time it takes for the browser to render the first piece of DOM content. Ideal FCP is under 1.8s."
                  status={getMetricStatus('firstContentfulPaint', activeData.metrics.firstContentfulPaint)}
                />
                <MetricCard
                  label="Speed Index"
                  value={activeData.metrics.speedIndex}
                  description="How quickly contents of a page are visibly populated. Ideal Speed Index is under 3.4s."
                  status={getMetricStatus('speedIndex', activeData.metrics.speedIndex)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="bfs-actions">
                <button onClick={copyShareLink} className="bfs-btn-share">
                  {copied ? '✅ Report Link Copied' : '🔗 Copy Share Link'}
                </button>
                <Link href="/website-speed-checker" className="bfs-btn-back">
                  Run Another Test
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}
