import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PillarPageLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  heroTag?: string;
  heroDescription: string;
  children: React.ReactNode;
}

const PillarPageLayout = ({
  title,
  metaTitle,
  metaDescription,
  breadcrumb,
  heroTag,
  heroDescription,
  children,
}: PillarPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {/* Open Graph — canonical/og:url handled globally by SEOHead */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InsuredCan" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.insuredcan.ca/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_CA" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://www.insuredcan.ca/og-image.png" />
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.insuredcan.ca/" },
            { "@type": "ListItem", "position": 2, "name": title, "item": `https://insuredcan.ca/${breadcrumb.toLowerCase().replace(/\s+/g, "-")}` }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary">
        <div className="container py-16 md:py-20">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-smooth mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          {heroTag && (
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 mb-4 ml-4">
              <span className="text-xs font-bold text-accent-foreground">{heroTag}</span>
            </div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4 font-display"
          >
            {title}
          </motion.h1>
          <p className="text-lg text-primary-foreground/80 max-w-reading leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="container py-12 md:py-16">
        <div className="max-w-4xl">
          {children}
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  );
};

export default PillarPageLayout;
