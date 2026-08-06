import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
})

/* ── Shared styles ─────────────────────────────────────────────── */
const ORANGE = '#D9541A'
const DARK   = '#101828'
const GRAY   = '#6B7280'
const LIGHT  = '#F9FAFB'
const BORDER = '#E5E7EB'

/* ── Template 1: Notification to contact@buildfirstsite.com ─────── */
function notificationHtml({ name, email, phone, company, message, source }) {
    const rows = [
        ['Name',    name],
        ['Company', company || '—'],
        ['Email',   email],
        ['Phone',   phone  || '—'],
        ['Source',  source],
    ]
    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F3F4F6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 0;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;border:1px solid ${BORDER};">

      <!-- Header -->
      <tr><td style="background:${ORANGE};padding:28px 32px;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="width:40px;height:40px;border:3px solid rgba(255,255,255,0.5);text-align:center;vertical-align:middle;">
            <span style="font-size:20px;font-weight:700;color:#fff;">B</span>
          </td>
          <td style="padding-left:14px;">
            <div style="color:#fff;font-size:15px;font-weight:600;">New enquiry — Build First Site</div>
            <div style="color:rgba(255,255,255,0.7);font-size:12px;margin-top:2px;">contact@buildfirstsite.com</div>
          </td>
        </tr></table>
      </td></tr>

      <!-- Title row -->
      <tr><td style="padding:24px 32px 0;border-bottom:1px solid ${BORDER};">
        <p style="margin:0 0 4px;font-size:20px;font-weight:600;color:${DARK};">You have a new lead ✦</p>
        <p style="margin:0 0 20px;font-size:13px;color:${GRAY};">Submitted via buildfirstsite.com</p>
      </td></tr>

      <!-- Details table -->
      <tr><td style="padding:0 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
          ${rows.map(([label, value]) => `
          <tr>
            <td style="color:${GRAY};padding:12px 0;border-bottom:1px solid ${BORDER};width:110px;vertical-align:top;">${label}</td>
            <td style="color:${DARK};padding:12px 0 12px 16px;border-bottom:1px solid ${BORDER};font-weight:${label==='Email'?'400':'400'};${label==='Email'?`color:${ORANGE};`:''}vertical-align:top;">${value}</td>
          </tr>`).join('')}
          <tr>
            <td style="color:${GRAY};padding:12px 0;vertical-align:top;">Message</td>
            <td style="color:${DARK};padding:12px 0 12px 16px;line-height:1.7;vertical-align:top;">${message || '—'}</td>
          </tr>
        </table>
      </td></tr>

      <!-- CTA -->
      <tr><td style="padding:20px 32px;background:${LIGHT};border-top:1px solid ${BORDER};">
        <a href="mailto:${email}" style="display:inline-block;background:${ORANGE};color:#fff;font-size:13px;font-weight:600;padding:10px 20px;border-radius:8px;text-decoration:none;">Reply to ${email}</a>
        ${phone ? `<a href="tel:${phone.replace(/\s/g,'')}" style="display:inline-block;margin-left:10px;border:1px solid ${BORDER};color:${GRAY};font-size:13px;padding:10px 20px;border-radius:8px;text-decoration:none;">${phone}</a>` : ''}
      </td></tr>

      <!-- Footer -->
      <tr><td style="padding:16px 32px;text-align:center;">
        <p style="margin:0;font-size:12px;color:${GRAY};">Build First Site · contact@buildfirstsite.com</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body></html>`
}

/* ── Template 2: Thank-you to the enquirer ──────────────────────── */
function thankYouHtml({ name }) {
    const firstName = name.split(' ')[0]
    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F3F4F6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 0;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;border:1px solid ${BORDER};">

      <!-- Header -->
      <tr><td style="background:${ORANGE};padding:36px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="width:44px;height:44px;border:3px solid rgba(255,255,255,0.5);text-align:center;vertical-align:middle;border-radius:4px;">
            <span style="font-size:22px;font-weight:700;color:#fff;font-family:Georgia,serif;">B</span>
          </td>
          <td style="padding-left:14px;">
            <span style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.85);letter-spacing:0.5px;text-transform:uppercase;">Build First Site</span>
          </td>
        </tr></table>
        <p style="margin:24px 0 0;font-size:26px;font-weight:700;color:#fff;line-height:1.35;">
          Thank you, ${firstName}.<br/>Your enquiry is with us.
        </p>
        <p style="margin:10px 0 0;font-size:14px;color:rgba(255,255,255,0.8);line-height:1.6;">
          We will review your message and respond with a written scope and fixed AUD quote within one business day.
        </p>
      </td></tr>

      <!-- Body -->
      <tr><td style="padding:28px 32px;border-bottom:1px solid ${BORDER};">
        <p style="margin:0;font-size:14px;color:${GRAY};line-height:1.7;">
          If you have additional details to share in the meantime, simply reply to this email — it goes straight to the team. Prefer to talk first? Book a free 30-minute call below.
        </p>
      </td></tr>

      <!-- CTAs -->
      <tr><td style="padding:28px 32px;border-bottom:1px solid ${BORDER};text-align:center;">
        <a href="tel:+61413146498" style="display:inline-block;background:${ORANGE};color:#fff;font-size:13px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none;">Call us: +61 413 146 498</a>
        <div style="height:12px;"></div>
        <a href="https://calendly.com/amanpd0/30min" style="display:inline-block;border:1px solid ${BORDER};color:${GRAY};font-size:13px;padding:12px 24px;border-radius:8px;text-decoration:none;">Book a free call</a>
      </td></tr>

      <!-- What happens next -->
      <tr><td style="padding:24px 32px;background:${LIGHT};border-bottom:1px solid ${BORDER};">
        <p style="margin:0 0 16px;font-size:13px;font-weight:600;color:${DARK};">What happens next</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${[
            ['01', 'We read your message', 'Usually within a few hours, always within one business day.'],
            ['02', 'We send a fixed quote', 'AUD price, clear scope, delivery timeline. No surprises.'],
            ['03', 'You decide', 'No pressure. Say yes and we start — say no and that\'s fine too.'],
          ].map(([n, h, b]) => `
          <tr>
            <td style="width:32px;vertical-align:top;padding:0 12px 16px 0;">
              <span style="font-size:18px;font-weight:700;color:${ORANGE};">${n}</span>
            </td>
            <td style="vertical-align:top;padding:0 0 16px;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:600;color:${DARK};">${h}</p>
              <p style="margin:0;font-size:13px;color:${GRAY};">${b}</p>
            </td>
          </tr>`).join('')}
        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td style="padding:16px 32px;text-align:center;">
        <p style="margin:0;font-size:12px;color:${GRAY};">Build First Site · Australia · contact@buildfirstsite.com</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body></html>`
}

/* ── API Route ──────────────────────────────────────────────────── */
export async function POST(request) {
    try {
        const { name, email, phone, company, message, source } = await request.json()

        if (!name || !email) {
            return Response.json({ error: 'Name and email are required.' }, { status: 400 })
        }

        await Promise.all([
            // 1. Notification to us
            transporter.sendMail({
                from: `"Build First Site" <${process.env.GMAIL_USER}>`,
                to: process.env.GMAIL_USER,
                replyTo: email,
                subject: `New enquiry from ${name}${company ? ` · ${company}` : ''}`,
                html: notificationHtml({ name, email, phone, company, message, source: source || 'buildfirstsite.com' }),
            }),
            // 2. Thank-you to the enquirer
            transporter.sendMail({
                from: `"Build First Site" <${process.env.GMAIL_USER}>`,
                to: email,
                subject: `Thanks for reaching out, ${name.split(' ')[0]}`,
                html: thankYouHtml({ name }),
            }),
        ])

        return Response.json({ success: true })
    } catch (err) {
        console.error('Contact API error:', err)
        return Response.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
    }
}
