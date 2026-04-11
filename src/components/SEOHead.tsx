import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.insuredcan.ca";

/**
 * Global SEO component — renders inside BrowserRouter.
 * Dynamically sets canonical, og:url, hreflang, and speakable hints.
 */
const SEOHead = () => {
  const { pathname } = useLocation();
  const canonical = `${BASE_URL}${pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      <link rel="alternate" hrefLang="en-CA" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    </Helmet>
  );
};

export default SEOHead;
