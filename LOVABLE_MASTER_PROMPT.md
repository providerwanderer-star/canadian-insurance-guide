# InsuredCan — Master Lovable Prompt (All-in-One)

---

## COPY THIS ENTIRE PROMPT INTO LOVABLE:

---

Redesign and upgrade the insuredcan.ca homepage completely. Transform it from an insurance broker brochure into a Canadian insurance search engine and comparison hub — similar to how Ratehub.ca works. Apply every step below in order. Keep all existing routes, non-listed components, and backend logic intact.

---

## PART 1 — INDEX.tsx STRUCTURE

Replace the current `src/pages/Index.tsx` section order with exactly this. Remove imports of: HeroSection, HowItWorksSection, CTASection, and standalone MultiStepLeadForm. Keep all other imports (Helmet, SEO, JSON-LD, router).

```tsx
<Navbar />
<SearchEngineHero />
<InsurerLogosStrip />
<HowItWorksStrip />
<InsuranceTypesSection />
<WhoWeHelpSection />
<SampleRatesSection />
<TrustSection />
<FeaturedArticlesSection />
<FooterCTAStrip />
<Footer />
<StickyCTABar />
<ExitIntentPopup />
```

---

## PART 2 — BUILD SearchEngineHero

Create `src/components/SearchEngineHero.tsx`.

This is the most important section. It must look and function like an insurance search engine widget — not a brochure hero. No family photo. No emotional tagline. The interactive tool IS the hero.

**Full layout:**

```
[Section background: subtle primary color radial gradient at 3% opacity]

── Centered text block (max-width 640px, mx-auto) ──
Eyebrow: "Canada's Insurance Comparison Hub"
(text-xs font-bold uppercase tracking-widest text-accent)

H1: "Find the Best Insurance Rate in Canada"
(text-4xl md:text-5xl font-bold font-display, text-center)

Subheadline: "Compare quotes from 20+ insurers in 60 seconds. Free, unbiased, no spam."
(text-lg text-muted-foreground, text-center)

── Search Widget Card (max-width 760px, mx-auto, mt-8) ──
White card, rounded-2xl, shadow-lift, border border-border, p-6

  [TAB ROW]
  6 horizontally scrollable pill tabs (overflow-x-auto on mobile):
  Life Insurance | Health Insurance | Auto Insurance |
  Home Insurance | Disability | Critical Illness

  Active tab: bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-semibold
  Inactive tab: border border-border text-muted-foreground rounded-full px-4 py-2 text-sm hover:border-primary/40

  [DYNAMIC FORM — changes based on active tab]
  All fields: min-height 48px, rounded-lg, border border-input, text-sm
  Layout: grid grid-cols-2 gap-3 on desktop, stacked on mobile

  TAB: Life Insurance
    Field 1: Province dropdown (all 13 provinces/territories, default "Ontario")
    Field 2: Age input (number, placeholder "Your age", min 18 max 75)
    Field 3: Coverage Amount pill selector (full width): $250K | $500K | $750K | $1M | $2M
    Field 4: Smoker? toggle: Non-smoker / Smoker
    Submit (full width, bg-accent, h-12, rounded-xl, font-bold): "Compare Life Insurance Rates →"

  TAB: Health Insurance
    Field 1: Province dropdown
    Field 2: Who to cover pills: Just Me | Me + Partner | Family
    Field 3: Include dental? pills: Yes | No
    Field 4: Pre-existing conditions? pills: Yes | No
    Submit: "Compare Health Plans →"

  TAB: Auto Insurance
    Field 1: Province dropdown
    Field 2: Vehicle year (number, placeholder "e.g. 2021")
    Field 3: Years licensed pills: 1–2 yrs | 3–5 yrs | 6–10 yrs | 10+ yrs
    Field 4: Primary use pills: Commute | Pleasure | Business
    Submit: "Compare Auto Insurance Rates →"

  TAB: Home Insurance
    Field 1: Province dropdown
    Field 2: Property type pills: House | Condo | Rental | Apartment
    Field 3: Home value pills: Under $400K | $400K–$700K | $700K–$1M | $1M+
    Field 4: Owner or Renter pills: Owner | Renter
    Submit: "Compare Home Insurance Rates →"

  TAB: Disability
    Field 1: Province dropdown
    Field 2: Age input
    Field 3: Monthly income (number, placeholder "Monthly take-home income $")
    Field 4: Employment pills: Employee | Self-Employed
    Submit: "Get Disability Insurance Quotes →"

  TAB: Critical Illness
    Field 1: Province dropdown
    Field 2: Age input
    Field 3: Coverage amount pills: $50K | $100K | $250K | $500K
    Field 4: Smoker? pills: Yes | No
    Submit: "Get Critical Illness Quotes →"

  All submit buttons navigate to /contact with URL query params:
  e.g. /contact?type=life&province=ON&age=35&coverage=500000&smoker=no

── Trust Strip (below card, centered, mt-4) ──
"Licensed Advisors  ·  20+ Canadian Insurers  ·  4.8★ Rated  ·  No Spam, Ever"
(text-xs text-muted-foreground text-center)
```

Use React useState for active tab and all field values. Pill selectors = styled buttons updating state on click. No external form libraries.

---

## PART 3 — BUILD InsurerLogosStrip

Create `src/components/InsurerLogosStrip.tsx`.

```
Section: bg-muted/40, py-4, border-y border-border

Layout: flex items-center justify-center gap-3 flex-wrap

Left label: "Compare rates from:" (text-xs text-muted-foreground font-medium, mr-2)

6 insurer badges:
Manulife | Sun Life | Canada Life | RBC Insurance | iA Financial | Desjardins

Each badge: text-xs font-semibold text-foreground/70 bg-background border border-border rounded-full px-3 py-1
Static display only — no hover effects needed.
```

---

## PART 4 — BUILD HowItWorksStrip

Create `src/components/HowItWorksStrip.tsx`. Stop importing HowItWorksSection.

```
Section: py-10 bg-background
Container: max-width container

Layout: grid grid-cols-1 md:grid-cols-3 gap-6 items-center

3 items, each: flex items-start gap-3
  - Numbered circle: h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center
  - Bold step title: font-semibold text-foreground text-base
  - Description: text-sm text-muted-foreground

Content:
  01 — "Answer 4 quick questions"
       "Tell us your age, province, and what you want to protect."
  02 — "See your matched plans"
       "We compare options from 20+ Canadian insurers instantly."
  03 — "Talk to a free advisor"
       "A licensed Canadian advisor reviews your options — no obligation."

Between items on desktop: ChevronRight icon (lucide), text-muted-foreground/40, hidden on mobile.
No animations needed.
```

---

## PART 5 — BUILD SampleRatesSection (3-tab version)

Create `src/components/SampleRatesSection.tsx`.

```
Section: py-16 md:py-20 bg-muted/30
Container: max-width container

Header (centered):
  Eyebrow: "Real Canadian Rates" (text-xs uppercase tracking-widest text-accent)
  H2: changes dynamically per active tab (see below)
  Subtext: changes dynamically per active tab (see below)
```

**Tab selector (centered, mt-8, flex gap-3 justify-center flex-wrap):**
3 pill tabs: `Life Insurance | Auto Insurance | Home Insurance`
Active: `bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-semibold`
Inactive: `border border-input text-muted-foreground rounded-full px-5 py-2 text-sm hover:border-primary/40 cursor-pointer`

**TAB: Life Insurance**
H2: "What Does $500K Life Insurance Actually Cost?"
Subtext: "Sample monthly premiums for a healthy non-smoking Canadian. Actual rates vary — a free comparison typically saves 20–35%."
Table header: Coverage | Age 30 | Age 35 ★ Most Popular | Age 40 | Age 45
Row 1: $250,000 – 20yr Term | ~$18/mo | ~$23/mo | ~$34/mo | ~$52/mo
Row 2: $500,000 – 20yr Term | ~$28/mo | ~$37/mo | ~$58/mo | ~$94/mo
Row 3: $1,000,000 – 20yr Term | ~$48/mo | ~$65/mo | ~$105/mo | ~$178/mo
Footnote: "* Monthly premiums for healthy non-smoking Canadians. Rates vary by insurer, province, and health history."
CTA: "Get Your Exact Life Rate in 60 Seconds →" → /contact?type=life

**TAB: Auto Insurance**
H2: "What Does Car Insurance Cost in Canada?"
Subtext: "Sample monthly premiums by driver profile. Rates vary significantly by province, driving record, and vehicle."
Table header: Driver Profile | Ontario | BC | Alberta | Quebec
Row 1: Clean record, sedan, 35 yrs | ~$165/mo | ~$190/mo | ~$155/mo | ~$92/mo
Row 2: 1 minor ticket, SUV, 30 yrs | ~$210/mo | ~$240/mo | ~$195/mo | ~$115/mo
Row 3: New driver (G2), any vehicle | ~$310/mo | ~$350/mo | ~$275/mo | ~$165/mo
Footnote: "* Approximate monthly premiums. Actual rates depend on driving history, postal code, vehicle make/model, and annual km."
CTA: "Compare Auto Insurance Rates →" → /contact?type=auto

**TAB: Home Insurance**
H2: "What Does Home Insurance Cost in Canada?"
Subtext: "Sample annual premiums for a typical detached home. Condo and rental insurance cost significantly less."
Table header: Home Value | Ontario | BC | Alberta | Quebec
Row 1: Under $400K | ~$1,100/yr | ~$1,350/yr | ~$950/yr | ~$800/yr
Row 2: $400K – $700K | ~$1,500/yr | ~$1,800/yr | ~$1,300/yr | ~$1,100/yr
Row 3: $700K – $1M | ~$2,100/yr | ~$2,600/yr | ~$1,800/yr | ~$1,500/yr
Footnote: "* Annual premiums for a detached home with standard coverage. Rates vary by location, construction type, and claims history."
CTA: "Compare Home Insurance Rates →" → /contact?type=home

**Table styling (all tabs):**
- Container: `max-w-2xl mx-auto mt-8 rounded-xl border border-border overflow-hidden shadow-card overflow-x-auto`
- Header row: `bg-primary text-primary-foreground text-sm font-semibold`
- Alternating rows: bg-background and bg-muted/20
- All cells: `text-center text-sm py-3 px-4`
- First column: `text-left font-medium text-foreground`
- Highlighted column (Age 35 / Ontario): `font-semibold text-foreground`
- "Most Popular" badge (Life tab only): `bg-accent text-accent-foreground text-xs rounded px-1.5 py-0.5 block mt-1`
- CTA button: `bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-xl font-bold mt-6 mx-auto block text-center`

---

## PART 6 — UPDATE WhoWeHelpSection

Edit `src/components/WhoWeHelpSection.tsx`.

Remove the imported images (newcomerFamily, familyProtection, selfEmployed) and all `<img>` elements with their aspect-ratio containers. Replace each image area with a colored icon block:

```
Card 1 (I'm new to Canada):
  h-20 w-full rounded-t-xl bg-blue-50 flex items-center justify-center
  Globe icon: h-10 w-10 text-blue-500

Card 2 (I'm protecting my family):
  h-20 w-full rounded-t-xl bg-green-50 flex items-center justify-center
  Heart icon: h-10 w-10 text-green-500

Card 3 (I'm self-employed):
  h-20 w-full rounded-t-xl bg-orange-50 flex items-center justify-center
  Briefcase icon: h-10 w-10 text-orange-500
```

Import Globe, Heart, Briefcase from lucide-react. Keep all text content, tags, and links exactly as they are.

---

## PART 7 — UPDATE TrustSection

Edit `src/components/TrustSection.tsx`.

Remove only the first grid block — the 4 trust badge icon cards (the grid mapping over `trustItems` showing Shield, Award, Users, Star icons). Delete the `trustItems` array and its entire render block including the `mb-20` grid div.

Keep everything else exactly as is:
- The animated stats banner (dark primary background with 5,000+ / 20+ / 2,300+ / 4.8★ counters)
- The "Testimonials" heading
- The 3 testimonial cards in `grid md:grid-cols-3 gap-6` — this grid must span full container width, no max-width constraints

---

## PART 8 — BUILD FooterCTAStrip

Create `src/components/FooterCTAStrip.tsx`:

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

Place `<FooterCTAStrip />` in Index.tsx directly above `<Footer />`.

---

## PART 9 — ADD Phone Number to Navbar

Edit `src/components/Navbar.tsx`.

Place this between the last nav link and the "Get Free Quote" button (desktop only):

```tsx
<a
  href="tel:+16478622190"
  className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
>
  <Phone className="h-4 w-4" />
  (647) 862-2190
</a>
```

Import `Phone` from `lucide-react`. Show on `lg:` screens and above only. Do not change any other navbar elements.

---

## PART 10 — ADD Schema Markup to Homepage

In `src/pages/Index.tsx`, inside the existing `<Helmet>` block, add the following two JSON-LD script tags after the existing scripts. Do not remove or modify any existing scripts.

**FAQPage schema (for AI search citations — ChatGPT, Perplexity, Google AI Overviews):**

```tsx
<script type="application/ld+json">{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does life insurance cost in Canada?",
      "acceptedAnswer": { "@type": "Answer", "text": "A healthy 35-year-old non-smoker can get $500,000 of 20-year term life insurance for approximately $37/month in Canada. Rates vary by age, health, coverage amount, and insurer. Getting quotes from multiple insurers typically saves 20–35%." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between term and whole life insurance?",
      "acceptedAnswer": { "@type": "Answer", "text": "Term life insurance provides coverage for a set period (10, 20, or 30 years) at a fixed premium — it's affordable and best for income replacement. Whole life insurance covers you for life and builds cash value, but costs 5–15x more per month. Most Canadian families benefit most from term life insurance." }
    },
    {
      "@type": "Question",
      "name": "Do I need life insurance in Canada?",
      "acceptedAnswer": { "@type": "Answer", "text": "If anyone depends on your income — a spouse, children, or aging parents — life insurance is essential. It ensures your family can pay the mortgage, cover childcare costs, and maintain their standard of living if you pass away unexpectedly." }
    },
    {
      "@type": "Question",
      "name": "How do I compare insurance quotes in Canada?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can compare insurance quotes in Canada by using a licensed comparison broker like InsuredCan. Enter your age, province, and coverage needs, and we compare options from 20+ Canadian insurers including Manulife, Sun Life, Canada Life, RBC Insurance, iA Financial, and Desjardins — at no cost to you." }
    },
    {
      "@type": "Question",
      "name": "Is InsuredCan free to use?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, InsuredCan is completely free. We are a licensed insurance brokerage paid by insurers when you purchase a policy — you pay nothing extra. You get unbiased comparisons across 20+ Canadian insurers with no obligation to buy." }
    },
    {
      "@type": "Question",
      "name": "What provinces does InsuredCan serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "InsuredCan serves all Canadian provinces and territories. We are licensed by FSRA in Ontario and regulated by AMF in Quebec, and work with licensed advisors across BC, Alberta, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, PEI, and Newfoundland." }
    }
  ]
})}</script>
```

**AggregateRating schema (for star ratings in Google search results):**

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

---

## PART 11 — FINAL Index.tsx CLEANUP

Confirm Index.tsx imports and renders exactly in this order, nothing more, nothing less:

```tsx
<Navbar />
<SearchEngineHero />
<InsurerLogosStrip />
<HowItWorksStrip />
<InsuranceTypesSection />
<WhoWeHelpSection />
<SampleRatesSection />
<TrustSection />
<FeaturedArticlesSection />
<FooterCTAStrip />
<Footer />
<StickyCTABar />
<ExitIntentPopup />
```

Remove all imports of: HeroSection, HowItWorksSection, CTASection, MultiStepLeadForm.
Do not remove or change any routes, SEO metadata, or JSON-LD schema blocks in the Helmet.

---

## DESIGN SYSTEM RULES (apply to all components)

- Use only existing Tailwind utility classes and CSS variables: bg-background, bg-surface, text-foreground, text-muted-foreground, text-accent, bg-primary, bg-accent, border-border, shadow-card, shadow-lift, font-display
- All interactive elements minimum touch target: 44px height
- All new sections fully responsive, mobile-first
- Pill selectors: selected = bg-primary text-primary-foreground, unselected = border border-input text-muted-foreground hover:border-primary/40
- Dropdowns: native `<select>` styled with existing input classes
- No new npm dependencies

---

## EXPECTED RESULT

After all parts are complete the homepage will have:

1. Search engine widget as the first thing visitors see and interact with (6 insurance types)
2. Insurer logos strip signalling comparison (not single-insurer)
3. Compact 3-step process strip
4. Insurance type navigation cards
5. Audience segment cards with icons (no heavy photo loading)
6. Real sample rates table — 3 tabs covering Life, Auto, and Home insurance
7. Animated stats banner + 3 testimonial cards in proper grid
8. Featured education articles in 3-column grid
9. Slim CTA strip before footer
10. Phone number visible in navbar
11. FAQPage + AggregateRating schema for Google and AI search citations

Page weight reduced ~60% vs original. First interactive element visible above the fold on all screen sizes.

An independent AI will audit this build for quality, conversion completeness, mobile responsiveness, and schema validity once done.

---

*Master Prompt v1.0 | InsuredCan Full Homepage Build | April 2026*
