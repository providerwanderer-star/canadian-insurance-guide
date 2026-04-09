import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "./components/SEOHead.tsx";
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
import LifeInsuranceVancouverPage from "./pages/LifeInsuranceVancouver.tsx";
import LifeInsuranceCalgaryPage from "./pages/LifeInsuranceCalgary.tsx";
import LifeInsuranceEdmontonPage from "./pages/LifeInsuranceEdmonton.tsx";
import LifeInsuranceOttawaPage from "./pages/LifeInsuranceOttawa.tsx";
import LifeInsuranceMontrealPage from "./pages/LifeInsuranceMontreal.tsx";
import LifeInsuranceWinnipegPage from "./pages/LifeInsuranceWinnipeg.tsx";
import LifeInsuranceHamiltonPage from "./pages/LifeInsuranceHamilton.tsx";
import LifeInsuranceMississaugaPage from "./pages/LifeInsuranceMississauga.tsx";
import LifeInsuranceBramptonPage from "./pages/LifeInsuranceBrampton.tsx";
import LifeInsuranceSurreyPage from "./pages/LifeInsuranceSurrey.tsx";
import LifeInsuranceMarkhamPage from "./pages/LifeInsuranceMarkham.tsx";
import InsuranceBrokerCanadaPage from "./pages/InsuranceBrokerCanada.tsx";
import InsuranceGlossaryPage from "./pages/InsuranceGlossary.tsx";
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
import BlogSuperVisaInsurance from "./pages/blog/BlogSuperVisaInsurance.tsx";
import BlogMortgageLifeInsurance from "./pages/blog/BlogMortgageLifeInsurance.tsx";
import BlogUniversalLifeInsurance from "./pages/blog/BlogUniversalLifeInsurance.tsx";
import BlogLifeInsuranceSmokers from "./pages/blog/BlogLifeInsuranceSmokers.tsx";
import BlogRRSPvsTFSAvsLifeInsurance from "./pages/blog/BlogRRSPvsTFSAvsLifeInsurance.tsx";
import BlogNoMedicalLifeInsurance from "./pages/blog/BlogNoMedicalLifeInsurance.tsx";
import BlogIsLifeInsuranceTaxableCanada from "./pages/blog/BlogIsLifeInsuranceTaxableCanada.tsx";
import BlogLifeInsuranceSeniorsCanada from "./pages/blog/BlogLifeInsuranceSeniorsCanada.tsx";
import CoverageCalculator from "./pages/CoverageCalculator.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import LifeInsuranceOntarioPage from "./pages/LifeInsuranceOntario.tsx";
import CostLifeInsuranceOntarioPage from "./pages/CostLifeInsuranceOntario.tsx";
import CriticalIllnessOntarioPage from "./pages/CriticalIllnessOntario.tsx";
import LifeInsurancePRHoldersPage from "./pages/LifeInsurancePRHolders.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEOHead />
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
            
            {/* Tools */}
            <Route path="/coverage-calculator" element={<CoverageCalculator />} />
            
            {/* Company Pages */}
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* Location Pages */}
            <Route path="/life-insurance-london-ontario" element={<LifeInsuranceLondonPage />} />
            <Route path="/life-insurance-toronto" element={<LifeInsuranceTorontoPage />} />
            <Route path="/life-insurance-vancouver" element={<LifeInsuranceVancouverPage />} />
            <Route path="/life-insurance-calgary" element={<LifeInsuranceCalgaryPage />} />
            <Route path="/life-insurance-edmonton" element={<LifeInsuranceEdmontonPage />} />
            <Route path="/life-insurance-ottawa" element={<LifeInsuranceOttawaPage />} />
            <Route path="/insurance-broker-canada" element={<InsuranceBrokerCanadaPage />} />
            <Route path="/life-insurance-montreal" element={<LifeInsuranceMontrealPage />} />
            <Route path="/life-insurance-winnipeg" element={<LifeInsuranceWinnipegPage />} />
            <Route path="/life-insurance-hamilton" element={<LifeInsuranceHamiltonPage />} />
            <Route path="/life-insurance-mississauga" element={<LifeInsuranceMississaugaPage />} />
            <Route path="/life-insurance-brampton" element={<LifeInsuranceBramptonPage />} />
            <Route path="/life-insurance-surrey" element={<LifeInsuranceSurreyPage />} />
            <Route path="/life-insurance-markham" element={<LifeInsuranceMarkhamPage />} />
            
            {/* Resources */}
            <Route path="/insurance-glossary" element={<InsuranceGlossaryPage />} />
            
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
            <Route path="/blog/super-visa-insurance-canada" element={<BlogSuperVisaInsurance />} />
            <Route path="/blog/mortgage-life-insurance-vs-term-canada" element={<BlogMortgageLifeInsurance />} />
            <Route path="/blog/universal-life-insurance-canada" element={<BlogUniversalLifeInsurance />} />
            <Route path="/blog/life-insurance-smokers-canada" element={<BlogLifeInsuranceSmokers />} />
            <Route path="/blog/rrsp-tfsa-vs-life-insurance-canada" element={<BlogRRSPvsTFSAvsLifeInsurance />} />
            <Route path="/blog/no-medical-life-insurance-canada" element={<BlogNoMedicalLifeInsurance />} />
            <Route path="/blog/is-life-insurance-taxable-canada" element={<BlogIsLifeInsuranceTaxableCanada />} />
            <Route path="/blog/life-insurance-seniors-canada" element={<BlogLifeInsuranceSeniorsCanada />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
