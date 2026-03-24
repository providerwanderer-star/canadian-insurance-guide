import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import LifeInsurancePage from "./pages/LifeInsurance.tsx";
import HealthInsurancePage from "./pages/HealthInsurance.tsx";
import CriticalIllnessPage from "./pages/CriticalIllness.tsx";
import DisabilityInsurancePage from "./pages/DisabilityInsurance.tsx";
import TravelInsurancePage from "./pages/TravelInsurance.tsx";
import MortgageInsurancePage from "./pages/MortgageInsurance.tsx";
import TermLifeInsurancePage from "./pages/TermLifeInsurance.tsx";
import WholeLifeInsurancePage from "./pages/WholeLifeInsurance.tsx";
import FuneralInsurancePage from "./pages/FuneralInsurance.tsx";
import RetirementPlanningPage from "./pages/RetirementPlanning.tsx";
import TermVsWholePage from "./pages/TermVsWhole.tsx";
import CriticalVsDisabilityPage from "./pages/CriticalVsDisability.tsx";
import PrivateVsOHIPPage from "./pages/PrivateVsOHIP.tsx";
import InsuranceForNewcomersPage from "./pages/InsuranceNewcomers.tsx";
import InsuranceForFamiliesPage from "./pages/InsuranceFamilies.tsx";
import InsuranceForSelfEmployedPage from "./pages/InsuranceSelfEmployed.tsx";
import InsuranceForYoungProfessionalsPage from "./pages/InsuranceYoungProfessionals.tsx";
import AboutUsPage from "./pages/AboutUs.tsx";
import ContactPage from "./pages/Contact.tsx";
import LifeInsuranceLondonPage from "./pages/LifeInsuranceLondon.tsx";
import LifeInsuranceTorontoPage from "./pages/LifeInsuranceToronto.tsx";
import InsuranceBrokerCanadaPage from "./pages/InsuranceBrokerCanada.tsx";
import BlogIndex from "./pages/BlogIndex.tsx";
import BlogOHIPWaiting from "./pages/blog/BlogOHIPWaiting.tsx";
import BlogTermVsWhole from "./pages/blog/BlogTermVsWhole.tsx";
import BlogWhatOHIPDoesntCover from "./pages/blog/BlogWhatOHIPDoesntCover.tsx";
import BlogLifeInsuranceFamilyToronto from "./pages/blog/BlogLifeInsuranceFamilyToronto.tsx";
import BlogDisabilityInsuranceSelfEmployed from "./pages/blog/BlogDisabilityInsuranceSelfEmployed.tsx";
import BlogHowMuchLifeInsurance from "./pages/blog/BlogHowMuchLifeInsurance.tsx";
import BlogBestLifeInsuranceFamilies from "./pages/blog/BlogBestLifeInsuranceFamilies.tsx";
import BlogCriticalIllnessCoverage from "./pages/blog/BlogCriticalIllnessCoverage.tsx";
import BlogFuneralCostsCanada from "./pages/blog/BlogFuneralCostsCanada.tsx";
import CoverageCalculator from "./pages/CoverageCalculator.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Insurance Pillar Pages */}
            <Route path="/life-insurance" element={<LifeInsurancePage />} />
            <Route path="/health-insurance" element={<HealthInsurancePage />} />
            <Route path="/critical-illness-insurance" element={<CriticalIllnessPage />} />
            <Route path="/disability-insurance" element={<DisabilityInsurancePage />} />
            <Route path="/travel-insurance" element={<TravelInsurancePage />} />
            <Route path="/mortgage-insurance" element={<MortgageInsurancePage />} />
            <Route path="/term-life-insurance" element={<TermLifeInsurancePage />} />
            <Route path="/whole-life-insurance" element={<WholeLifeInsurancePage />} />
            <Route path="/funeral-insurance" element={<FuneralInsurancePage />} />
            <Route path="/retirement-planning" element={<RetirementPlanningPage />} />
            
            {/* Comparison Pages */}
            <Route path="/compare/term-vs-whole-life" element={<TermVsWholePage />} />
            <Route path="/compare/critical-illness-vs-disability" element={<CriticalVsDisabilityPage />} />
            <Route path="/compare/private-vs-ohip" element={<PrivateVsOHIPPage />} />
            
            {/* Segment Pages */}
            <Route path="/newcomers" element={<InsuranceForNewcomersPage />} />
            <Route path="/families" element={<InsuranceForFamiliesPage />} />
            <Route path="/self-employed" element={<InsuranceForSelfEmployedPage />} />
            <Route path="/young-professionals" element={<InsuranceForYoungProfessionalsPage />} />
            
            {/* Company Pages */}
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Location Pages */}
            <Route path="/life-insurance-london-ontario" element={<LifeInsuranceLondonPage />} />
            <Route path="/life-insurance-toronto" element={<LifeInsuranceTorontoPage />} />
            <Route path="/insurance-broker-canada" element={<InsuranceBrokerCanadaPage />} />
            
            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/ohip-waiting-period-newcomers" element={<BlogOHIPWaiting />} />
            <Route path="/blog/term-vs-whole-life-2026" element={<BlogTermVsWhole />} />
            <Route path="/blog/what-ohip-doesnt-cover" element={<BlogWhatOHIPDoesntCover />} />
            <Route path="/blog/life-insurance-family-toronto" element={<BlogLifeInsuranceFamilyToronto />} />
            <Route path="/blog/disability-insurance-self-employed" element={<BlogDisabilityInsuranceSelfEmployed />} />
            <Route path="/blog/how-much-life-insurance-canada" element={<BlogHowMuchLifeInsurance />} />
            <Route path="/blog/best-life-insurance-families-canada" element={<BlogBestLifeInsuranceFamilies />} />
            <Route path="/blog/critical-illness-insurance-coverage-canada" element={<BlogCriticalIllnessCoverage />} />
            <Route path="/blog/average-funeral-costs-canada" element={<BlogFuneralCostsCanada />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
