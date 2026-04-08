import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.insuredcan.ca";

/**
 * Global SEO component — renders inside BrowserRouter.
 * Dynamically sets canonical + og:url based on current route.
 * This is the SINGLE source of truth for canonical. All page-level
 * Helmets should NOT set canonical or og:url — those come from here.
 */
const SEOHead = () => {
  const { pathname } = useLocation();
  const canonical = `${BASE_URL}${pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
};

export default SEOHead;
