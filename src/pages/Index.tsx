import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InsuranceTypesSection from "@/components/InsuranceTypesSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import FeaturedArticlesSection from "@/components/FeaturedArticlesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MultiStepLeadForm from "@/components/MultiStepLeadForm";
import StickyCTABar from "@/components/StickyCTABar";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>InsuredCan — Life & Health Insurance Quotes in Canada | Free Advisor</title>
        <meta name="description" content="Compare Canada's top life, health, critical illness & disability insurance plans. Free quotes from 20+ insurers. Licensed advisors in Ontario, BC & Alberta. No obligation." />
        {/* canonical/og:url handled globally by SEOHead */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InsuredCan" />
        <meta property="og:title" content="InsuredCan — Life & Health Insurance Quotes in Canada" />
        <meta property="og:description" content="Compare Canada's top life, health, critical illness & disability insurance. Free quotes from 20+ insurers. Licensed advisors. 5,000+ families protected." />
        <meta property="og:image" content="https://www.insuredcan.ca/og/og-home.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="InsuredCan — Life & Health Insurance Quotes in Canada" />
        <meta name="twitter:description" content="Compare Canada's top life, health & critical illness plans. Free quotes. Licensed advisors." />
        <meta name="twitter:image" content="https://www.insuredcan.ca/og/og-home.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.insuredcan.ca/#organization",
              "name": "InsuredCan",
              "url": "https://www.insuredcan.ca",
              "logo": "https://www.insuredcan.ca/favicon.ico",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-4678",
                "contactType": "customer service",
                "areaServed": "CA",
                "availableLanguage": ["English", "French"]
              },
              "sameAs": []
            },
            {
              "@type": "InsuranceAgency",
              "@id": "https://www.insuredcan.ca/#business",
              "name": "InsuredCan",
              "url": "https://www.insuredcan.ca",
              "description": "Licensed Canadian insurance brokerage offering life, health, critical illness, and disability insurance across Ontario, BC, Alberta, and more.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.6532",
                "longitude": "-79.3832"
              },
              "telephone": "+1-800-555-4678",
              "email": "hello@insuredcan.ca",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "areaServed": [
                {"@type": "Province", "name": "Ontario"},
                {"@type": "Province", "name": "British Columbia"},
                {"@type": "Province", "name": "Alberta"},
                {"@type": "Province", "name": "Quebec"},
                {"@type": "Country", "name": "Canada"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Canadian Insurance Products",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Life Insurance"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Critical Illness Insurance"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Disability Insurance"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Health Insurance"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Mortgage Insurance"}}
                ]
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://www.insuredcan.ca/#website",
              "url": "https://www.insuredcan.ca",
              "name": "InsuredCan",
              "description": "Canada's trusted insurance comparison and advisory platform",
              "publisher": {"@id": "https://www.insuredcan.ca/#organization"},
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.insuredcan.ca/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      <HeroSection />

      {/* Multi-step Quote Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Find Your Plan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Get your personalized quote in 60 seconds
            </h2>
            <p className="text-muted-foreground text-lg max-w-reading mx-auto">
              Answer 4 simple questions and we'll match you with the right coverage from 20+ top Canadian insurers.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <MultiStepLeadForm />
          </div>
        </div>
      </section>

      <InsuranceTypesSection />
      <WhoWeHelpSection />
      <HowItWorksSection />
      <TrustSection />
      <FeaturedArticlesSection />
      <CTASection />
      <Footer />
      <StickyCTABar />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
