import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TrustBar from "@/components/TrustBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { AuthorBox, Disclaimer } from "@/components/ContentElements";
import { m } from "framer-motion";
import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface PillarPageLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  heroTag?: string;
  heroDescription: string;
  ogImage?: string;
  quickAnswer?: { question: string; answer: string };
  faqs?: FAQItem[];
  datePublished?: string;
  dateModified?: string;
  children: React.ReactNode;
}

const PillarPageLayout = ({
  title,
  metaTitle,
  metaDescription,
  breadcrumb,
  heroTag,
  heroDescription,
  ogImage = "https://www.insuredcan.ca/og/og-home.png",
  quickAnswer,
  faqs,
  datePublished = "2026-01-15",
  dateModified = "2026-04-11",
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
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${title} — InsuredCan`} />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": metaDescription,
          "url": `https://www.insuredcan.ca/${slug}`,
          "datePublished": datePublished,
          "dateModified": dateModified,
          "inLanguage": "en-CA",
          "isPartOf": { "@type": "WebSite", "url": "https://www.insuredcan.ca", "name": "InsuredCan" },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".hero-description", ".quick-answer"]
          },
          "author": {
            "@type": "Organization",
            "name": "InsuredCan Advisory Team",
            "url": "https://www.insuredcan.ca/about",
            "description": "Licensed insurance professionals regulated by FSRA (Ontario), with 15+ years of combined experience advising Canadian families.",
            "memberOf": {
              "@type": "Organization",
              "name": "Financial Services Regulatory Authority of Ontario (FSRA)"
            }
          },
          "mainEntity": {
            "@type": "Service",
            "name": title,
            "description": metaDescription,
            "provider": {
              "@type": "InsuranceAgency",
              "name": "InsuredCan",
              "url": "https://www.insuredcan.ca",
              "telephone": "+1-800-555-4678",
              "email": "sahil280389@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "100 King Street West, Suite 5700",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "postalCode": "M5X 1C7",
                "addressCountry": "CA"
              },
              "sameAs": [
                "https://www.linkedin.com/company/insuredcan",
                "https://www.facebook.com/insuredcan",
                "https://www.instagram.com/insuredcan"
              ]
            },
            "areaServed": { "@type": "Country", "name": "Canada" },
            "serviceType": "Insurance Brokerage"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.insuredcan.ca" },
              { "@type": "ListItem", "position": 2, "name": breadcrumbLabel, "item": `https://www.insuredcan.ca/${slug}` }
            ]
          }
        })}</script>
        {faqs && faqs.length > 0 && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
          })}</script>
        )}
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
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4 font-display"
          >
            {title}
          </m.h1>
          <p className="hero-description text-lg text-primary-foreground/80 max-w-reading leading-relaxed">
            {heroDescription}
          </p>
          {quickAnswer && (
            <div className="quick-answer mt-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 max-w-reading border border-primary-foreground/20">
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Quick Answer</p>
              <p className="text-sm font-semibold text-primary-foreground mb-1">{quickAnswer.question}</p>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">{quickAnswer.answer}</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Content */}
      <article className="container py-12 md:py-16">
        <div className="max-w-4xl">
          {children}
          <AuthorBox />
          <Disclaimer />
        </div>
      </article>

      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default PillarPageLayout;
