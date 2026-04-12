import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.insuredcan.ca";

// Pages that should not be indexed — handled by their own meta robots tags
const NOINDEX_PATHS = new Set(["/privacy-policy", "/terms-of-service"]);

// Organization schema — helps Google understand site identity
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${BASE_URL}/#organization`,
  "name": "InsuredCan",
  "url": BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/og-image.png`,
    "width": 1200,
    "height": 630
  },
  "description": "InsuredCan helps Canadians compare and understand life, health, disability, and critical illness insurance. Expert guidance for newcomers, families, and self-employed Canadians.",
  "areaServed": {
    "@type": "Country",
    "name": "Canada"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "areaServed": "CA",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.insuredcan.ca"
  ]
};

// Website schema — enables sitelinks search box
const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "InsuredCan",
  "description": "Canada's insurance guidance platform for comparing life, health, and critical illness coverage",
  "publisher": { "@id": `${BASE_URL}/#organization` },
  "inLanguage": "en-CA"
};

/**
 * Global SEO component — renders inside BrowserRouter.
 * Sets canonical, og:url, hreflang, robots, and structured data on every page.
 */
const SEOHead = () => {
  const { pathname } = useLocation();
  // Normalize trailing slash — canonical should be consistent
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const canonical = `${BASE_URL}${cleanPath}`;
  const isNoIndex = NOINDEX_PATHS.has(cleanPath);

  return (
    <Helmet>
      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:site_name" content="InsuredCan" />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en-CA" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Robots */}
      {isNoIndex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Structured Data — Organization + WebSite (homepage-level schemas on all pages) */}
      <script type="application/ld+json">
        {JSON.stringify(ORGANIZATION_SCHEMA)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(WEBSITE_SCHEMA)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
