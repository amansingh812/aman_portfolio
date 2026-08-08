/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from "@/components/layout/Layout"
import { SITE } from "@/content/site"

const css = `
.bfs-speed-hero {
  padding: 100px 0 80px;
  background: linear-gradient(180deg, #F4FAFB 0%, #FFFFFF 100%);
  text-align: center;
}
.bfs-speed-card {
  max-width: 680px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #E4E7EC;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 12px 32px rgba(0, 109, 119, 0.05);
}
.bfs-input-group {
  display: flex;
  gap: 12px;
  margin-top: 25px;
}
@media (max-width: 576px) {
  .bfs-input-group {
    flex-direction: column;
  }
}
.bfs-input-text {
  flex: 1;
  padding: 16px 20px;
  font-size: 16px;
  border: 1.5px solid #d0d5dd;
  border-radius: 12px;
  outline: none;
  font-family: var(--noto), sans-serif;
  transition: all 0.2s;
}
.bfs-input-text:focus {
  border-color: #006D77;
  box-shadow: 0 0 0 4px rgba(0, 109, 119, 0.1);
}
.bfs-btn-test {
  background: #006D77;
  color: #ffffff;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 12px;
  border: none;
  font-family: var(--chivo), sans-serif;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.bfs-btn-test:hover {
  background: #004d54;
}
.bfs-btn-disabled {
  background: #98a2b3;
  cursor: not-allowed;
}
.bfs-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 60px;
}
@media (max-width: 768px) {
  .bfs-info-grid {
    grid-template-columns: 1fr;
  }
}
.bfs-info-card {
  background: #ffffff;
  border: 1px solid #E4E7EC;
  border-radius: 16px;
  padding: 24px;
  text-align: left;
}
.bfs-info-icon {
  width: 48px;
  height: 48px;
  background: #BEE1E6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: #006D77;
  font-size: 20px;
  font-weight: bold;
}
.bfs-vitals-section {
  background: #F4FAFB;
  padding: 80px 0;
  margin-top: 60px;
}
.bfs-vitals-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}
.bfs-vital-row {
  background: #ffffff;
  border: 1px solid #E4E7EC;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
}
@media (max-width: 576px) {
  .bfs-vital-row {
    flex-direction: column;
    gap: 12px;
  }
}
.bfs-vital-tag {
  background: #006D77;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: var(--chivo), sans-serif;
  margin-top: 2px;
}
`

export default function SpeedCheckerLandingPage() {
  const router = useRouter()
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!url) {
      setError('Please enter a URL.')
      return
    }

    let formattedUrl = url.trim()
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl
    }

    try {
      new URL(formattedUrl)
    } catch (_) {
      setError('Please enter a valid website URL.')
      return
    }

    setLoading(true)
    router.push(`/website-speed-checker/results?url=${encodeURIComponent(formattedUrl)}`)
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Build First Site Website Speed Checker",
    "operatingSystem": "All",
    "applicationCategory": "DeveloperApplication",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "url": "https://buildfirstsite.com/website-speed-checker/",
    "description": "A premium website performance auditing tool built on top of Google PageSpeed Insights. Check your SEO, load speed, mobile response, and core web vitals in seconds.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "AUD"
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE.name,
      "url": SITE.url
    }
  }

  return (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bfs-speed-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <span className="tag-1 bg-6 color-green-900">Link Asset Tool</span>
              <h1 className="text-heading-1 color-gray-900 mt-20 mb-20">
                Website Speed Checker
              </h1>
              <p className="text-body-lead-large color-gray-600 mb-40">
                Analyze your website performance, SEO status, accessibility score, and Core Web Vitals instantly.
              </p>

              <div className="bfs-speed-card">
                <h3 className="text-heading-4 color-gray-900 text-start" style={{ margin: 0 }}>
                  Enter website URL to inspect
                </h3>
                <p className="text-body-small color-gray-500 text-start mt-5">
                  We'll run mobile and desktop audits using the PageSpeed Insights API.
                </p>
                <form onSubmit={handleSubmit} className="bfs-input-group">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="example.com or https://example.com"
                    className="bfs-input-text"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    className={`bfs-btn-test ${loading ? 'bfs-btn-disabled' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Analyzing...' : 'Test Speed'}
                  </button>
                </form>
                {error && (
                  <p className="text-body-small text-start color-red-500 mt-10" style={{ color: '#ef4444' }}>
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bfs-info-grid">
            <div className="bfs-info-card">
              <div className="bfs-info-icon">⚡</div>
              <h4 className="text-heading-5 color-gray-900 mb-10">Lighthouse Audit</h4>
              <p className="text-body-small color-gray-600">
                Powered directly by Google's Lighthouse engine. Ensure your speed score is accurate, transparent and reflects exactly what Google crawls.
              </p>
            </div>
            <div className="bfs-info-card">
              <div className="bfs-info-icon">📈</div>
              <h4 className="text-heading-5 color-gray-900 mb-10">Core Web Vitals</h4>
              <p className="text-body-small color-gray-600">
                Identify major performance issues before your users do. Learn what affects your LCP, TBT, and CLS scores.
              </p>
            </div>
            <div className="bfs-info-card">
              <div className="bfs-info-icon">🔗</div>
              <h4 className="text-heading-5 color-gray-900 mb-10">Shareable Reports</h4>
              <p className="text-body-small color-gray-600">
                Get a unique report link you can share with your team, designer, or marketing agency to benchmark improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bfs-vitals-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="text-heading-2 color-gray-900">
                Understanding Google's Core Web Vitals
              </h2>
              <p className="text-body-lead-large color-gray-600 mt-15">
                Google uses three key metrics as ranking factors. If your site falls behind on these, it may hurt your SEO search positions.
              </p>
            </div>
          </div>

          <div className="row mt-40">
            <div className="col-lg-9 mx-auto">
              <div className="bfs-vitals-list">
                <div className="bfs-vital-row">
                  <div>
                    <span className="bfs-vital-tag">LCP</span>
                  </div>
                  <div>
                    <h4 className="text-heading-5 color-gray-900 mb-5">Largest Contentful Paint (LCP)</h4>
                    <p className="text-body-small color-gray-600">
                      Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
                    </p>
                  </div>
                </div>

                <div className="bfs-vital-row">
                  <div>
                    <span className="bfs-vital-tag">TBT</span>
                  </div>
                  <div>
                    <h4 className="text-heading-5 color-gray-900 mb-5">Total Blocking Time (TBT)</h4>
                    <p className="text-body-small color-gray-600">
                      Measures responsiveness and interactivity. TBT tracks how long a browser is blocked from responding to input (clicks, taps, typing). A score under 200ms is considered good.
                    </p>
                  </div>
                </div>

                <div className="bfs-vital-row">
                  <div>
                    <span className="bfs-vital-tag">CLS</span>
                  </div>
                  <div>
                    <h4 className="text-heading-5 color-gray-900 mb-5">Cumulative Layout Shift (CLS)</h4>
                    <p className="text-body-small color-gray-600">
                      Measures visual stability. CLS tracks how much the layout moves unexpectedly during load. A good visual experience is maintained by keeping CLS under 0.1.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
