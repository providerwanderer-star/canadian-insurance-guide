## 🎯 Ultra SEO, AEO & GEO Optimization Plan

### 1. **Technical SEO Hardening**
- Add `hreflang` tags for en-CA
- Add preload hints for critical assets (fonts, hero image)
- Add structured breadcrumb JSON-LD on every inner page
- Remove duplicate meta tags between index.html and React Helmet
- Add `SpeakableSpecification` schema for AI voice assistants

### 2. **AI Engine Optimization (AEO/GEO)**
- Add `FAQPage` JSON-LD schema on every pillar page (Google SGE/AI answers)
- Add `HowTo` schema on calculator page
- Add `Article` + `author` schema on all blog posts
- Create a dedicated `/llms.txt` file (LLM-readable site summary for AI crawlers)
- Add `ai.txt` file for AI engine discoverability

### 3. **Social Media & Open Graph**
- Ensure every page has unique og:title, og:description, og:image
- Add Twitter large card markup consistently
- Add `article:published_time` and `article:author` for blog posts

### 4. **Internal Linking & Crawl Optimization**
- Add breadcrumb navigation component visible on all inner pages
- Enhance Footer with full internal link map (all services, locations, blog)
- Add "Related Articles" cross-links in blog layout

### 5. **Performance & Core Web Vitals**
- Lazy load below-fold images
- Add `loading="lazy"` and `decoding="async"` to all non-hero images
- Preload hero image and fonts

### 6. **Content Signals**
- Add `datePublished`, `dateModified` to all article schemas
- Add author entity markup
- Add review/rating schema where applicable

**Implementation**: Create SEO infrastructure components (Breadcrumbs, enhanced JSON-LD generators, llms.txt, ai.txt), then update index.html and key pages.