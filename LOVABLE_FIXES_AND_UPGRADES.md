# InsuredCan — Bug Fixes + Priority Upgrades Prompt

---

## COPY THIS ENTIRE PROMPT INTO LOVABLE:

---

Apply the following fixes and upgrades to insuredcan.ca. Do not change any routes, SEO metadata, or components not listed below.

---

### FIX 1 — Restore testimonials 3-column grid in TrustSection

In `src/components/TrustSection.tsx`, find the testimonials grid div. It should be:

```tsx
<div className="grid md:grid-cols-3 gap-6">
```

If it is wrapped in a container that is constraining width (e.g. `max-w-xl` or `max-w-2xl`), remove that constraint. The testimonials grid must span the full container width on desktop so all 3 cards render side by side. Do not change the card content or animations.

---

### FIX 2 — Add FooterCTAStrip above Footer in Index.tsx

Create `src/components/FooterCTAStrip.tsx` if it does not already exist:

```tsx
import { Link } from "react-router-dom";

const FooterCTAStrip = () => {
  return (
    <section className="py-6 bg-primary text-primary-foreground">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-primary-foreground/90">
          Join 5,000+ Canadians who found better coverage.
        </p>
        <Link
          to="/contact"
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2.5 rounded-lg text-sm font-bold transition-colors"
        >
          Get My Free Quote →
        </Link>
      </div>
    </section>
  );
};

export default FooterCTAStrip;
```

In `src/pages/Index.tsx`, import FooterCTAStrip and place it directly above `<Footer />`. Confirm the import is present and rendering.

---

### FIX 3 — Restore FeaturedArticlesSection multi-column grid

In `src/components/FeaturedArticlesSection.tsx`, find the articles grid. It should render 3 articles side-by-side on desktop:

```tsx
<div className="grid md:grid-cols-3 gap-6">
```

If the grid is rendering as a single column, check whether the component is only receiving 1 article from its data source and restore the full articles array. Show a minimum of 3 article cards. If articles are imported from a static array, make sure all 3 items are present.

---

### UPGRADE 1 — Add phone number to Navbar

In `src/components/Navbar.tsx`, add a visible phone number in the desktop navigation bar.

Place it between the last nav link and the "Get Free Quote" button:

```tsx
<a
  href="tel:+16478622190"
  className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
>
  <Phone className="h-4 w-4" />
  (647) 862-2190
</a>
```

Import `Phone` from `lucide-react`. This should only show on `lg:` and above screens. Do not change any other navbar elements.

---

### UPGRADE 2 — Expand SampleRatesSection to 3 tabs (Life / Auto / Home)

Replace the current single life insurance table in `src/components/SampleRatesSection.tsx` with a 3-tab version showing sample rates for Life, Auto, and Home insurance. Use React useState for the active tab.

**Tab selector (above the table):**

3 pill tabs: `Life Insurance | Auto Insurance | Home Insurance`

Active tab: `bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-semibold`
Inactive tab: `border border-input text-muted-foreground rounded-full px-5 py-2 text-sm hover:border-primary/40 cursor-pointer`

**TAB: Life Insurance** (keep existing table exactly as is)

Header row: Coverage | Age 30 | Age 35 ★ Most Popular | Age 40 | Age 45
Row 1: $250,000 – 20yr Term | ~$18/mo | ~$23/mo | ~$34/mo | ~$52/mo
Row 2: $500,000 – 20yr Term | ~$28/mo | ~$37/mo | ~$58/mo | ~$94/mo
Row 3: $1,000,000 – 20yr Term | ~$48/mo | ~$65/mo | ~$105/mo | ~$178/mo
Footnote: "* Monthly premiums for healthy non-smoking Canadians. Rates vary by insurer, province, and health history."
CTA: "Get Your Exact Life Rate →" → /contact?type=life

**TAB: Auto Insurance**

Section heading: "What Does Car Insurance Cost in Canada?"
Subtext: "Sample monthly premiums by driver profile. Rates vary significantly by province, driving record, and vehicle."

Header row: Driver Profile | Ontario | BC | Alberta | Quebec
Row 1: Clean record, sedan, 35 yrs | ~$165/mo | ~$190/mo | ~$155/mo | ~$92/mo
Row 2: 1 minor ticket, SUV, 30 yrs | ~$210/mo | ~$240/mo | ~$195/mo | ~$115/mo
Row 3: New driver (G2), any vehicle | ~$310/mo | ~$350/mo | ~$275/mo | ~$165/mo

Footnote: "* Approximate monthly premiums. Actual rates depend on driving history, postal code, vehicle make/model, and annual km."
CTA: "Compare Auto Insurance Rates →" → /contact?type=auto

**TAB: Home Insurance**

Section heading: "What Does Home Insurance Cost in Canada?"
Subtext: "Sample annual premiums for a typical detached home. Condo and rental insurance cost significantly less."

Header row: Home Value | Ontario | BC | Alberta | Quebec
Row 1: Under $400K | ~$1,100/yr | ~$1,350/yr | ~$950/yr | ~$800/yr
Row 2: $400K – $700K | ~$1,500/yr | ~$1,800/yr | ~$1,300/yr | ~$1,100/yr
Row 3: $700K – $1M | ~$2,100/yr | ~$2,600/yr | ~$1,800/yr | ~$1,500/yr

Footnote: "* Annual premiums for a detached home with standard coverage. Rates vary by location, construction type, and claims history."
CTA: "Compare Home Insurance Rates →" → /contact?type=home

**Table styling rules (apply to all 3 tabs):**
- Table container: `max-w-2xl mx-auto mt-8 rounded-xl border border-border overflow-hidden shadow-card overflow-x-auto`
- Header row: `bg-primary text-primary-foreground text-sm font-semibold`
- Alternating rows: bg-background and bg-muted/20
- All cells: `text-center text-sm py-3 px-4`
- First column: `text-left font-medium text-foreground`
- "Highlighted" column (Age 35 for Life; Ontario for Auto/Home): `font-semibold text-foreground`
- "Most Popular" badge in Life tab Age 35 header: `bg-accent text-accent-foreground text-xs rounded px-1.5 py-0.5 block mt-1`

---

### UPGRADE 3 — Add FAQPage + AggregateRating schema to homepage

In `src/pages/Index.tsx`, inside the existing `<Helmet>` block (after the existing JSON-LD scripts), add two new JSON-LD script tags:

**FAQPage schema:**

```tsx
<script type="application/ld+json">{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does life insurance cost in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A healthy 35-year-old non-smoker can get $500,000 of 20-year term life insurance for approximately $37/month in Canada. Rates vary by age, health, coverage amount, and insurer. Getting quotes from multiple insurers typically saves 20–35%."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between term and whole life insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Term life insurance provides coverage for a set period (10, 20, or 30 years) at a fixed premium — it's affordable and best for income replacement. Whole life insurance covers you for life and builds cash value, but costs 5–15x more per month. Most Canadian families benefit most from term life insurance."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need life insurance in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If anyone depends on your income — a spouse, children, or aging parents — life insurance is essential. It ensures your family can pay the mortgage, cover childcare costs, and maintain their standard of living if you pass away unexpectedly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I compare insurance quotes in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can compare insurance quotes in Canada by using a licensed comparison broker like InsuredCan. Enter your age, province, and coverage needs, and we compare options from 20+ Canadian insurers including Manulife, Sun Life, Canada Life, RBC Insurance, iA Financial, and Desjardins — at no cost to you."
      }
    },
    {
      "@type": "Question",
      "name": "Is InsuredCan free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, InsuredCan is completely free. We are a licensed insurance brokerage paid by insurers when you purchase a policy — you pay nothing extra. You get unbiased comparisons across 20+ Canadian insurers with no obligation to buy."
      }
    },
    {
      "@type": "Question",
      "name": "What provinces does InsuredCan serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "InsuredCan serves all Canadian provinces and territories. We are licensed by FSRA in Ontario and regulated by AMF in Quebec, and work with licensed advisors across BC, Alberta, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, PEI, and Newfoundland."
      }
    }
  ]
})}</script>
```

**AggregateRating schema:**

```tsx
<script type="application/ld+json">{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "InsuredCan",
  "url": "https://www.insuredcan.ca",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2300",
    "bestRating": "5",
    "worstRating": "1"
  }
})}</script>
```

Add both scripts inside the existing `<Helmet>` block. Do not remove or modify any existing scripts in the Helmet block.

---

### DESIGN RULES (apply to all changes above)

- Use only existing Tailwind utility classes and existing CSS variables
- No new npm packages or dependencies
- All interactive elements minimum 44px height
- All changes must be fully responsive (mobile-first)
- Do not modify any routes, URL slugs, or page-level SEO metadata

---

### EXPECTED RESULT

After these changes:
1. All 3 testimonial cards visible side by side on desktop
2. FooterCTAStrip appearing just above the footer on every page load
3. FeaturedArticles section showing 3 article cards in a grid
4. Phone number (647) 862-2190 visible in the desktop navbar
5. Sample rates section showing 3 tabs (Life / Auto / Home) — visitors can instantly see costs for any insurance type without scrolling or navigating
6. FAQPage schema enables citations in ChatGPT, Perplexity, and Google AI Overviews
7. AggregateRating schema enables star ratings to appear in Google search results

An independent AI will audit this build for quality and correctness once done.

---

*Prompt version: 2.0 | InsuredCan Bug Fixes + Priority Upgrades | April 2026*
