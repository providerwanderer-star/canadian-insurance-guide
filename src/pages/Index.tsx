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
        <link rel="canonical" href="https://insuredcan.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InsuredCan" />
        <meta property="og:title" content="InsuredCan — Life & Health Insurance Quotes in Canada" />
        <meta property="og:description" content="Compare Canada's top life, health, critical illness & disability insurance. Free quotes from 20+ insurers. Licensed advisors. 5,000+ families protected." />
        <meta property="og:url" content="https://insuredcan.ca/" />
        <meta property="og:image" content="https://insuredcan.ca/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="InsuredCan — Life & Health Insurance Quotes in Canada" />
        <meta name="twitter:description" content="Compare Canada's top life, health & critical illness plans. Free quotes. Licensed advisors." />
        <meta name="twitter:image" content="https://insuredcan.ca/og-image.png" />
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
