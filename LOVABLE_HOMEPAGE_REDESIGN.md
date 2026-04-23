# InsuredCan Homepage Redesign — Single Lovable Prompt

---

## COPY THIS ENTIRE PROMPT INTO LOVABLE:

---

Redesign the insuredcan.ca homepage completely. The goal is to transform it from an insurance broker brochure into a Canadian insurance search engine and comparison hub — similar to how Ratehub.ca works. Keep all existing routes, components and backend logic intact. Only change Index.tsx and the components listed below.

---

### STEP 1 — UPDATE Index.tsx STRUCTURE

Replace the current Index.tsx with this exact section order. Delete or stop importing: HeroSection, HowItWorksSection, CTASection, and the standalone MultiStepLeadForm section block. Keep all other imports.

```tsx
<Navbar />
<SearchEngineHero />        // new component — replaces HeroSection
<InsurerLogosStrip />       // new component
<HowItWorksStrip />         // new component — replaces HowItWorksSection
<InsuranceTypesSection />   // existing — keep unchanged
<WhoWeHelpSection />        // existing — icons only redesign (see Step 6)
<SampleRatesSection />      // new component
<TrustSection />            // existing — remove only the top icon badge cards, keep stats banner + testimonials
<FeaturedArticlesSection /> // existing — keep unchanged
<Footer />
<StickyCTABar />
<ExitIntentPopup />
```

---

### STEP 2 — BUILD SearchEngineHero (replaces HeroSection)

Create `src/components/SearchEngineHero.tsx`.

This is the most important section. It must look and function like an insurance search engine widget, not a brochure hero. No family photo. No emotional tagline. The interactive tool IS the hero.

**Layout — full section structure:**

```
[Section background: very subtle primary color radial gradient at 3% opacity]

  ── Centered text block (max-width 640px, horizontally centered) ──
  Eyebrow: "Canada's Insurance Comparison Hub"  
  (text-xs font-bold uppercase tracking-widest text-accent)
  
  H1: "Find the Best Insurance Rate in Canada"
  (text-4xl md:text-5xl font-bold font-display, centered)
  
  Subheadline: "Compare quotes from 20+ insurers in 60 seconds. 
  Free, unbiased, no spam."
  (text-lg text-muted-foreground, centered)

  ── Search Widget Card (max-width 760px, mx-auto, mt-8) ──
  White card, rounded-2xl, shadow-lift, border border-border, p-6

    [TAB ROW]
    6 horizontally scrollable pill tabs (overflow-x-auto on mobile):
    Life Insurance | Health Insurance | Auto Insurance | 
    Home Insurance | Disability | Critical Illness
    
    Active tab style: bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-semibold
    Inactive tab style: border border-border text-muted-foreground rounded-full px-4 py-2 text-sm hover:border-primary/40

    [DYNAMIC FORM — changes based on active tab]
    All form fields: min-height 48px, rounded-lg, border border-input, text-sm
    Layout: 2 fields per row on desktop, stacked on mobile (grid grid-cols-2 gap-3)

    TAB: Life Insurance
      Field 1: Province dropdown (all 13 Canadian provinces/territories, default "Ontario")
      Field 2: Age input (number, placeholder "Your age", min 18 max 75)
      Field 3: Coverage Amount — pill selector spanning full width:
               $250K | $500K | $750K | $1M | $2M
               (selected pill = bg-accent text-accent-foreground, unselected = border)
      Field 4: Smoker? — toggle switch with label "Non-smoker / Smoker"
      Submit button (full width, bg-accent, rounded-xl, h-12, font-bold):
               "Compare Life Insurance Rates →"

    TAB: Health Insurance
      Field 1: Province dropdown
      Field 2: Who to cover — pill selector: Just Me | Me + Partner | Family
      Field 3: Include dental? — Yes / No pill toggle
      Field 4: Pre-existing conditions? — Yes / No pill toggle
      Submit: "Compare Health Plans →"

    TAB: Auto Insurance
      Field 1: Province dropdown
      Field 2: Vehicle year (number input, placeholder "e.g. 2021")
      Field 3: Years licensed — pill selector: 1–2 yrs | 3–5 yrs | 6–10 yrs | 10+ yrs
      Field 4: Primary use — Commute | Pleasure | Business pill selector
      Submit: "Compare Auto Insurance Rates →"

    TAB: Home Insurance
      Field 1: Province dropdown
      Field 2: Property type — House | Condo | Rental | Apartment pill selector
      Field 3: Home value — Under $400K | $400K–$700K | $700K–$1M | $1M+ pill selector
      Field 4: Renter or Owner? — Owner | Renter pill toggle
      Submit: "Compare Home Insurance Rates →"

    TAB: Disability
      Field 1: Province dropdown
      Field 2: Age input
      Field 3: Monthly income (number input, placeholder "Monthly take-home income $")
      Field 4: Employed? — Employee | Self-Employed pill toggle
      Submit: "Get Disability Insurance Quotes →"

    TAB: Critical Illness
      Field 1: Province dropdown
      Field 2: Age input
      Field 3: Coverage amount pill selector: $50K | $100K | $250K | $500K
      Field 4: Smoker? Yes / No pill toggle
      Submit: "Get Critical Illness Quotes →"

    All submit buttons: navigate to /contact and append URL query params:
    e.g. /contact?type=life&province=ON&age=35&coverage=500000&smoker=no

  ── Trust Strip (below card, centered) ──
  Single row of 4 items separated by · (bullet):
  "Licensed Advisors  ·  20+ Canadian Insurers  ·  4.8★ Rated  ·  No Spam, Ever"
  (text-xs text-muted-foreground, mt-4, text-center)
```

Use React useState for the active tab and all form field values. The pill selectors should be implemented as a row of styled buttons that update state on click. No external form libraries needed.

---

### STEP 3 — BUILD InsurerLogosStrip

Create `src/components/InsurerLogosStrip.tsx`.

A single slim horizontal bar that signals immediately this is a comparison engine, not a single-insurer site.

```
Section background: bg-muted/40 (very light grey)
Padding: py-4
Border: border-y border-border

Layout (flex, items-center, justify-center, gap-3, flex-wrap):
  Left label: "Compare rates from:" (text-xs text-muted-foreground font-medium, mr-2)
  
  Then 6 insurer name badges rendered as clean text pills:
  Manulife | Sun Life | Canada Life | RBC Insurance | iA Financial | Desjardins
  
  Each badge: text-xs font-semibold text-foreground/70 bg-background 
  border border-border rounded-full px-3 py-1
  No hover effect needed — these are static display only.
```

---

### STEP 4 — BUILD HowItWorksStrip (replaces HowItWorksSection)

Create `src/components/HowItWorksStrip.tsx`.

Delete `HowItWorksSection.tsx` or just stop using it. This strip replaces all 3 alternating image-text blocks with a compact single-row strip.

```
Section: py-10 bg-background
Container: max-width container

Layout: grid grid-cols-1 md:grid-cols-3 gap-6 items-center

3 items, each:
  - Numbered circle (h-10 w-10, rounded-full, bg-primary, text-primary-foreground, 
    font-bold text-sm, flex items-center justify-center) showing 01 / 02 / 03
  - Bold step title (font-semibold text-foreground text-base)
  - One-line description (text-sm text-muted-foreground)
  Layout per item: flex items-start gap-3

Content:
  01 — "Answer 4 quick questions"
       "Tell us your age, province, and what you want to protect."
  02 — "See your matched plans"  
       "We compare options from 20+ Canadian insurers instantly."
  03 — "Talk to a free advisor"
       "A licensed Canadian advisor reviews your options — no obligation."

Between items on desktop, add a subtle right-arrow icon (ChevronRight from lucide, 
text-muted-foreground/40, hidden on mobile).
No animations needed. Keep it clean and fast.
```

---

### STEP 5 — BUILD SampleRatesSection

Create `src/components/SampleRatesSection.tsx`.

This answers the #1 question every insurance visitor has: "What does this cost?" Showing real numbers builds trust and qualifies intent before the advisor call.

```
Section: py-16 md:py-20 bg-surface (or bg-muted/30)
Container: max-width container

Header (centered):
  Eyebrow: "Real Canadian Rates" (text-xs uppercase tracking-widest text-accent)
  H2: "What Does $500K Life Insurance Actually Cost?"
  (text-3xl md:text-4xl font-bold font-display)
  Subtext: "Sample monthly premiums for a healthy non-smoking Canadian. 
  Actual rates vary — a free comparison typically saves 20–35%."
  (text-muted-foreground text-base max-w-reading mx-auto text-center mt-3)

Comparison Table (max-width 700px, mx-auto, mt-10):
  Rounded-xl border border-border overflow-hidden shadow-card
  
  Table header row (bg-primary text-primary-foreground):
    Coverage | Age 30 | Age 35 ★ | Age 40 | Age 45
  
  Mark the "Age 35" column with a "Most Popular" label as a small badge 
  (bg-accent text-accent-foreground text-xs rounded px-1.5 py-0.5) in the header cell.

  Table rows (alternate bg-background and bg-muted/20):
  Row 1: $250,000 – 20yr Term | ~$18/mo | ~$23/mo | ~$34/mo | ~$52/mo
  Row 2: $500,000 – 20yr Term | ~$28/mo | ~$37/mo | ~$58/mo | ~$94/mo
  Row 3: $1,000,000 – 20yr Term | ~$48/mo | ~$65/mo | ~$105/mo | ~$178/mo

  All cells: text-center text-sm py-3 px-4
  First column (coverage): text-left font-medium text-foreground
  Data cells: text-muted-foreground
  "Age 35" column cells: font-semibold text-foreground (highlighted column)
  
  Table should be overflow-x-auto on mobile.

Footnote below table (text-xs text-muted-foreground text-center mt-3):
  "* Approximate monthly premiums for healthy non-smoking Canadians. 
  Rates vary by insurer, province, and health history."

CTA below footnote (centered, mt-6):
  Button: "Get Your Exact Rate in 60 Seconds →" 
  Style: bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-xl font-bold
  Link to: /contact
```

---

### STEP 6 — UPDATE WhoWeHelpSection (remove heavy images)

Edit the existing `src/components/WhoWeHelpSection.tsx`.

Remove the imported images (newcomerFamily, familyProtection, selfEmployed) and the `<img>` elements with their aspect-ratio containers. Replace the image area in each card with a large colored icon block.

For each of the 3 segment cards, replace the image area with:
```
A colored icon container: h-20 w-full rounded-t-xl flex items-center justify-center
  Card 1 (newcomers): bg-blue-50 with Globe icon (h-10 w-10 text-blue-500)
  Card 2 (families): bg-green-50 with Heart icon (h-10 w-10 text-green-500) 
  Card 3 (self-employed): bg-orange-50 with Briefcase icon (h-10 w-10 text-orange-500)
```
Keep all text content, tags, and links exactly as they are. Only replace the image areas.

---

### STEP 7 — UPDATE TrustSection (remove the duplicate badge cards)

Edit the existing `src/components/TrustSection.tsx`.

Remove only the first grid block — the 4 trust badge icon cards (the grid that maps over `trustItems` array showing Shield, Award, Users, Star icons). Delete the `trustItems` array and its entire render block including the `mb-20` grid div.

Keep everything else exactly as is:
- The animated stats banner (dark primary background with counters)
- The testimonials section heading
- The 3 testimonial cards

Do not change any other logic, animations, or styling.

---

### STEP 8 — REPLACE CTASection with a slim FooterCTAStrip

Delete or stop importing `CTASection` from Index.tsx.

Create `src/components/FooterCTAStrip.tsx`:

```
A single slim bar just above the Footer:
Section: py-6 bg-primary text-primary-foreground
Container: flex flex-col sm:flex-row items-center justify-between gap-4

Left side:
  "Join 5,000+ Canadians who found better coverage."
  (text-sm font-medium text-primary-foreground/90)

Right side:
  Button: "Get My Free Quote →"
  Style: bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2.5 
  rounded-lg text-sm font-bold
  Link to: /contact
```

Add `<FooterCTAStrip />` in Index.tsx directly above `<Footer />`.

---

### STEP 9 — FINAL Index.tsx cleanup

Make sure Index.tsx imports and renders exactly in this order with no extras:

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

Remove all imports of: HeroSection, HowItWorksSection, CTASection.
Do not remove or change any routes, SEO metadata, or JSON-LD schema in the Helmet block.

---

### DESIGN SYSTEM RULES (apply to all new components)

- Use only existing Tailwind utility classes and the existing CSS variables (bg-background, bg-surface, text-foreground, text-muted-foreground, text-accent, bg-primary, bg-accent, border-border, shadow-card, shadow-lift, font-display)
- All interactive elements minimum touch target: 44px height
- All new sections must be fully responsive (mobile-first)
- Pill selectors: selected state = bg-primary text-primary-foreground, unselected = border border-input text-muted-foreground hover:border-primary/40
- Dropdowns: use native `<select>` styled with the existing input classes for simplicity
- No new dependencies or npm packages
- Framer motion animations optional on new sections — only use `m.div` with simple opacity/y if used, don't add heavy animations to the search widget

---

### EXPECTED RESULT

After these changes the homepage will have:
1. A search engine widget as the first thing users see and interact with
2. Insurer logos to signal comparison (not single-insurer)
3. A compact 3-step process strip (not 3 full-screen alternating image blocks)
4. Insurance type navigation
5. Audience segment cards (no heavy photo loading)
6. Real sample rates table (builds trust, qualifies intent)
7. Social proof (stats + testimonials only — no duplicate badges)
8. Featured articles
9. One slim CTA strip before footer

Total sections reduced from 8 heavy sections to 9 lean sections. Page weight reduced by ~60%. First interactive element visible without scrolling on all screen sizes.

An independent AI will audit this build for quality, conversion completeness, and mobile responsiveness once done.
```

---

*Prompt version: 1.0 | InsuredCan Homepage Redesign | April 2026*
