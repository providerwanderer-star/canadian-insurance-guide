import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TrustBar from "@/components/TrustBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { m } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FAQSection, AuthorBox, Disclaimer } from "@/components/ContentElements";

interface LocationPageProps {
  city: string;
  province: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  heroHeadline: string;
  heroDescription: string;
  localContent: React.ReactNode;
  faqs: { question: string; answer: string }[];
  ogImage?: string;
}

const LocationPageLayout = ({ city, province, metaTitle, metaDescription, slug, heroHeadline, heroDescription, localContent, faqs, ogImage = "https://www.insuredcan.ca/og/og-home.png" }: LocationPageProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `InsuredCan — ${city}`,
    description: metaDescription,
    address: { "@type": "PostalAddress", addressLocality: city, addressRegion: province, addressCountry: "CA" },
    areaServed: { "@type": "City", name: city },
    url: `https://www.insuredcan.ca/${slug}`,
    telephone: "+1-800-555-4678",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2300",
      bestRating: "5",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-description"]
    },
  };

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
        <meta property="og:image:alt" content={`Life Insurance in ${city} — InsuredCan`} />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="geo.region" content={`CA-${province}`} />
        <meta name="geo.placename" content={`${city}, ${province}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />

      <section className="bg-primary">
        <div className="container py-16 md:py-24">
          <BreadcrumbNav items={[
            { label: "Life Insurance", href: "/life-insurance" },
            { label: city },
          ]} />
          <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 mb-5">
              <MapPin className="h-3.5 w-3.5 text-accent-foreground" />
              <span className="text-xs font-bold text-accent-foreground">{city}, {province}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4 font-display">{heroHeadline}</h1>
            <p className="hero-description text-lg text-primary-foreground/80 leading-relaxed mb-8">{heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:sahil280389@gmail.com?subject=Free%20Quote%20Request%20-%20{city}">
                <Button size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
                  Get Free Quote in {city} <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </m.div>
        </div>
      </section>

      <TrustBar />

      <article className="container py-12 md:py-16">
        <div className="max-w-4xl">{localContent}</div>
      </article>

      <section className="container pb-12 md:pb-16">
        <div className="max-w-4xl">
          <FAQSection faqs={faqs} />
          <AuthorBox />
          <Disclaimer />
        </div>
      </section>

      <section className="bg-surface py-16 border-t border-border">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center font-display">Insurance services in {city}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Life Insurance", href: "/life-insurance" },
              { label: "Critical Illness", href: "/critical-illness-insurance" },
              { label: "Disability Insurance", href: "/disability-insurance" },
              { label: "Mortgage Protection", href: "/mortgage-insurance" },
            ].map((s) => (
              <Link key={s.label} to={s.href} className="bg-card rounded-lg p-5 shadow-card hover:shadow-card-hover transition-smooth text-center border border-transparent hover:border-primary/20">
                <p className="text-sm font-bold text-foreground">{s.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LocationPageLayout;
