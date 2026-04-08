import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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
  const breadcrumbLabel = breadcrumb.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const slug = breadcrumb.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InsuredCan" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.insuredcan.ca/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${title} — InsuredCan`} />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://www.insuredcan.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": metaDescription,
          "url": `https://www.insuredcan.ca/${slug}`,
          "isPartOf": { "@type": "WebSite", "url": "https://www.insuredcan.ca" },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".hero-description"]
          },
          "mainEntity": {
            "@type": "Service",
            "name": title,
            "provider": {
              "@type": "InsuranceAgency",
              "name": "InsuredCan",
              "url": "https://www.insuredcan.ca"
            },
            "areaServed": { "@type": "Country", "name": "Canada" }
          }
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary">
        <div className="container py-16 md:py-20">
          <BreadcrumbNav items={[{ label: breadcrumbLabel, href: `/${slug}` }]} />
          {heroTag && (
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 mb-4">
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
          <p className="hero-description text-lg text-primary-foreground/80 max-w-reading leading-relaxed">
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
