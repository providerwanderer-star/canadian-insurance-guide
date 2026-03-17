import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InsuranceTypesSection from "@/components/InsuranceTypesSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import FeaturedArticlesSection from "@/components/FeaturedArticlesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InsuranceTypesSection />
      <WhoWeHelpSection />
      <HowItWorksSection />
      <TrustSection />
      <FeaturedArticlesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
