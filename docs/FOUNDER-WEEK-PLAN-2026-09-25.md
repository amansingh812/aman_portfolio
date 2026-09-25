# Founder plan — week of 25 Sep 2026

You asked: more SEO, or a more professional site? Register in Australia or not
yet? Local ads? More projects? Better landing pages?

**Short answer: this week is not an SEO week and not a design week.** It is a
*make the business real and close the first client* week. The SEO foundation is
in good shape. Two things are not — the business has no legal registration, and
the site makes some claims it cannot back up. Both are fixable in days, and both
matter more than any page we could add.

> I'm not an accountant or a lawyer. The registration section below is research
> to make your first accountant meeting efficient, not advice to act on alone.

---

## The three things that matter most, in order

### 1. You cannot invoice Winnie properly yet

This is the one that changes the week.

**If an Australian business pays an invoice over $75 that has no ABN on it, the
payer is required to withhold 47% and send it to the ATO.** The obligation sits
with *them*, not you. Vista Group's accountant will know this rule even if
Winnie doesn't.

So an $800 invoice with no ABN either gets $376 withheld, or makes your first
client's bookkeeping awkward on day one. **An ABN is on the critical path to
getting paid by your first client** — not a "someday" task.

Your repo has **no ABN, no registered business name and no legal entity named
anywhere** — not in the terms, not in the privacy page, not in the footer. Your
own blog content tells *clients* to display an ABN as a trust signal. Your site
doesn't show one.

### 2. Some of the site's claims don't hold up

Found this reading the homepage as a buyer would. I've fixed the lines that are
site copy. **The testimonials I have not touched**, and I need you to check them.

**Fixed today (site copy — clear breaches of your own CLAUDE.md §1):**

| Was | Why it was a problem |
|---|---|
| *"We've built sites for tradies, real estate agents, hospitality venues"* | Those three are **concept builds**, not clients. §1: no claimed expertise without proof. |
| *"not a middleman relaying messages to an offshore team"* | Uses "offshore" as a negative while the engineering is done offshore. Implies an Australia-only operation, which §1 forbids outright. |
| *"End-to-end delivery by professional developers"* | Plural, reads as a department. §1 headcount table. |
| *"Products we've built for Australian businesses"* | HS Race Gear, the first site shown, is in Watertown, Massachusetts — per its own website. |
| *"Accepting new projects — Q3 2026"* | Goes stale in five days. Now leads with the free homepage design. |
| *"Most of our work is for Australian businesses, with some clients in the US and UK"* | Your client list shows the US and India, not the UK. |
| *Agencies "quote $10,000–$50,000"* | Contradicted your own cost guide ($5,000–$15,000). |

I also reverted a line **I** had added to `llms.txt` stating the engineering is
done in India. Your CLAUDE.md marks that as internal. That's your decision to
make, not mine.

**Needs you — the seven homepage testimonials:**

I'm not assuming anything is wrong here. But one detail is verifiably wrong, so
all seven are worth checking:

- **HS Race Gear** is stored as *"Melbourne, AU."* HS Race Gear's own website
  says **Watertown, Massachusetts** — "Racewear USA", "Made in Watertown, MA".
  So at minimum the metadata wasn't taken from the client.
- **Banish Shoes** and **Swarom** aren't on the documented real-client list in
  CLAUDE.md (HS Race Gear, Mobile Armour, AutoZenly, LT Finance). They may be
  real clients that just aren't listed — you'd know.
- **"Rachel Green"** shares a name with a very well-known TV character. If she's
  real, fine — but a sceptical buyer will notice.
- Two quote specific results (*"sales have tripled"*, *"up 80%"*). If the client
  said it, that's their claim to make. If not, they're invented metrics.
- **LT Finance**, a documented real client, has no testimonial at all.

**For each one: is it a verbatim quote from a real, named person who agreed to
be quoted?** If yes, send me the corrections and I'll fix the metadata. If any
aren't, they need to come down — not as a style edit, but because Australian
Consumer Law treats fabricated testimonials as misleading conduct, and it's the
first rule in your own CLAUDE.md.

This has a deadline too: **your Google reviews are about to go live.** Once
they're public, anyone can compare the names and details on Google against the
ones on your site.

### 3. Close the first client

A real enquiry from a real Australian business is worth more than everything
else on this list. Everything else this week should serve it.

---

## Business registration — what to decide

Two brothers, one in India, one in Australia, invoicing Australian clients. There
are four realistic structures, and **the choice has tax consequences that differ
a lot** — which is exactly why it needs an accountant rather than a guess.

| Structure | Holds the ABN | Setup cost | The thing to ask about |
|---|---|---|---|
| **Brother as sole trader** | Brother | ABN free | Simplest to register, but the business is legally his — how does Aman get paid, and taxed where? |
| **Aman as non-resident sole trader** | Aman | ABN free | Non-residents *can* hold an ABN. But foreign residents pay **30% from the first dollar** of Australian-source income, no tax-free threshold — plus how India taxes the same income. |
| **Partnership** | The partnership | ABN free | Income split between you. Cross-border partner taxation. |
| **Pty Ltd company** | The company | **$636** ASIC + **$342**/yr | Needs one Australian-resident director — your brother qualifies. Aman can hold shares from India. Most credible and cleanest separation, most admin. |

Plus, whichever you pick:
- **Business name "Build First Site"** — needs registering with ASIC if you trade
  under it rather than a personal name: **$47 for 1 year or $108 for 3.** You
  need an ABN first.
- **GST** — generally not required until turnover passes $75,000. Confirm with
  the accountant.

### What to ask the accountant — take this list

1. Given one of us is an Indian tax resident and one Australian, which structure
   makes sense at our current revenue, and at $100k?
2. Where is each of us taxed, and how does the Australia–India tax treaty apply?
3. How should Aman be paid under each structure?
4. Do we need a separate Australian business bank account now?
5. When should we register for GST?
6. What must appear on an invoice?

**Look for an accountant who does India–Australia cross-border work.** A generalist
may answer the first question well and miss the second.

**Free help first:** Darebin City Council (Reservoir and Preston are both in
Darebin) runs a **free business concierge service** for exactly this — starting
and structuring a business. Worth a call before you pay anyone.

---

## Your questions, answered directly

**SEO or a more professional site?** Neither is the priority this week. The most
professional thing available to you right now is making the site *true* — that's
what today's fixes did, and the testimonials are the rest of it. After that, the
one visual item worth doing is replacing the **VR-headset hero image**. A woman in
a VR headset tells an Australian plumber or dentist nothing about whether you'll
build their website well. It's been on your list for weeks.

**Local ads?** Not paid ads — the arithmetic doesn't work on an $800 entry
product yet. Local *presence*, yes. See Thursday.

**More projects?** Not more concept builds. You have three and they're labelled.
What you're short of is **real work with a real client who will leave a real
review.** One discounted real project beats three more demos.

**Landing pages?** The pages are in decent shape after this fortnight's work. A
landing page without reviews converts badly no matter how it's designed — which
is why reviews still come before redesign.

**Going full-time?** Then the business needs to exist on paper before it takes
money, and it needs to be able to prove every claim it makes. That's this week.

---

## The week, day by day

### Friday 25 Sep — blockers

| Who | Task |
|---|---|
| **Aman** | Go through the seven testimonials. Confirm each is real and verbatim, or tell me which to remove. |
| **Aman** | If Winnie hasn't replied, send a short follow-up. |
| **Aman** | `npm run build` locally, then push today's copy fixes. |

### Saturday 26 Sep — foundations

| Who | Task |
|---|---|
| **Aman + brother** | Decide who is talking to the accountant, and book it. Call Darebin's free business concierge first. |
| **Aman** | Bring the six questions above. |

### Monday 28 Sep — register

| Who | Task |
|---|---|
| **Whoever holds it** | After the accountant call: apply for the ABN (free), register "Build First Site" ($47/$108), open a business bank account. |
| **Me** | Once you have an ABN: add it to the footer, terms page, invoice template, and Organization schema. |

### Tuesday 29 Sep — trust

| Who | Task |
|---|---|
| **Aman / brother** | Record the GBP verification video — one continuous take, no cuts. |
| **Aman** | Chase the four client reviews. Send the GBP review link once verified. |
| **Aman** | Supply a replacement hero image. A real photo of real work beats any stock image. |

### Wednesday 30 Sep — local, not paid

| Who | Task |
|---|---|
| **Brother** | Identify the Darebin **business / trader associations** for Preston and Reservoir — they're in your GBP service area, and they're full of local small businesses. |
| **Brother** | Find three local **accountants or bookkeepers**. They see every new ABN and every business that needs a website — the best referral source a web studio can have, and it's free. |

### Thursday–Friday 1–2 Oct — portfolio depth

| Who | Task |
|---|---|
| **Aman** | Ask HS Race Gear's owner for permission and real numbers for a proper case study. |
| **Me** | Draft the HS Race Gear case study once you have permission and figures. No invented results. |

---

## What I'd deliberately not do this week

- **No new SEO pages.** The cluster is in good shape; more pages won't beat the
  lack of reviews and registration.
- **No Google Ads.** Covered last message — the entry price can't carry it yet.
- **No more concept builds.** Real work, real reviews.
- **No daily social posting.** Covered in the social plan.

---

## One unresolved inconsistency

The homepage says mobile apps use **Flutter**. Four other places — including the
dedicated mobile-app page — say **React Native**. I haven't changed either,
because I don't know which is true. Tell me which you actually use and I'll make
the site consistent.

---

## Sources

- [ATO — ABN for non-residents](https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/foreign-residents-doing-business-in-australia/australian-business-number-abn-for-non-residents)
- [ABR — ABN entitlement](https://www.abr.gov.au/business-super-funds-charities/applying-abn/abn-entitlement)
- [ATO — Foreign resident tax rates](https://www.ato.gov.au/tax-rates-and-codes/tax-rates-foreign-residents)
- [No-ABN 47% withholding](https://sprintlaw.com.au/articles/no-abn-withholding-in-australia-what-to-do-and-avoid-penalties/)
- [Resident director requirement](https://sleek.com/au/resources/resident-director-services/)
- [Company registration cost 2026](https://sleek.com/au/resources/cost-to-incorporate-a-company-in-australia/)
- [Business name registration cost](https://sleek.com/au/resources/business-name-registration/)
- [Darebin — business associations](https://www.darebin.vic.gov.au/Business/Placemaking/Business-associations)
- [Darebin on business.gov.au](https://business.gov.au/expertise-and-advice/darebin-city-council)
