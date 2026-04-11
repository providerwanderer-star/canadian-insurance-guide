import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LazyMotion, domAnimation } from "framer-motion";
import SEOHead from "./components/SEOHead.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Lazy-loaded pages — each becomes its own chunk in production
const LifeInsurancePage = lazy(() => import("./pages/LifeInsurance.tsx"));
const HealthInsurancePage = lazy(() => import("./pages/HealthInsurance.tsx"));
const CriticalIllnessPage = lazy(() => import("./pages/CriticalIllness.tsx"));
const DisabilityInsurancePage = lazy(() => import("./pages/DisabilityInsurance.tsx"));
const TravelInsurancePage = lazy(() => import("./pages/TravelInsurance.tsx"));
const MortgageInsurancePage = lazy(() => import("./pages/MortgageInsurance.tsx"));
const TermLifeInsurancePage = lazy(() => import("./pages/TermLifeInsurance.tsx"));
const WholeLifeInsurancePage = lazy(() => import("./pages/WholeLifeInsurance.tsx"));
const FuneralInsurancePage = lazy(() => import("./pages/FuneralInsurance.tsx"));
const RetirementPlanningPage = lazy(() => import("./pages/RetirementPlanning.tsx"));
const TermVsWholePage = lazy(() => import("./pages/TermVsWhole.tsx"));
const CriticalVsDisabilityPage = lazy(() => import("./pages/CriticalVsDisability.tsx"));
const PrivateVsOHIPPage = lazy(() => import("./pages/PrivateVsOHIP.tsx"));
const InsuranceForNewcomersPage = lazy(() => import("./pages/InsuranceNewcomers.tsx"));
const InsuranceForFamiliesPage = lazy(() => import("./pages/InsuranceFamilies.tsx"));
const InsuranceForSelfEmployedPage = lazy(() => import("./pages/InsuranceSelfEmployed.tsx"));
const InsuranceForYoungProfessionalsPage = lazy(() => import("./pages/InsuranceYoungProfessionals.tsx"));
const AboutUsPage = lazy(() => import("./pages/AboutUs.tsx"));
const ContactPage = lazy(() => import("./pages/Contact.tsx"));
const LifeInsuranceLondonPage = lazy(() => import("./pages/LifeInsuranceLondon.tsx"));
const LifeInsuranceTorontoPage = lazy(() => import("./pages/LifeInsuranceToronto.tsx"));
const LifeInsuranceVancouverPage = lazy(() => import("./pages/LifeInsuranceVancouver.tsx"));
const LifeInsuranceCalgaryPage = lazy(() => import("./pages/LifeInsuranceCalgary.tsx"));
const LifeInsuranceEdmontonPage = lazy(() => import("./pages/LifeInsuranceEdmonton.tsx"));
const LifeInsuranceOttawaPage = lazy(() => import("./pages/LifeInsuranceOttawa.tsx"));
const LifeInsuranceMontrealPage = lazy(() => import("./pages/LifeInsuranceMontreal.tsx"));
const LifeInsuranceWinnipegPage = lazy(() => import("./pages/LifeInsuranceWinnipeg.tsx"));
const LifeInsuranceHamiltonPage = lazy(() => import("./pages/LifeInsuranceHamilton.tsx"));
const LifeInsuranceMississaugaPage = lazy(() => import("./pages/LifeInsuranceMississauga.tsx"));
const LifeInsuranceBramptonPage = lazy(() => import("./pages/LifeInsuranceBrampton.tsx"));
const LifeInsuranceSurreyPage = lazy(() => import("./pages/LifeInsuranceSurrey.tsx"));
const LifeInsuranceMarkhamPage = lazy(() => import("./pages/LifeInsuranceMarkham.tsx"));
const LifeInsuranceKitchenerWaterlooPage = lazy(() => import("./pages/LifeInsuranceKitchenerWaterloo.tsx"));
const LifeInsuranceWindsorPage = lazy(() => import("./pages/LifeInsuranceWindsor.tsx"));
const LifeInsuranceOshawaPage = lazy(() => import("./pages/LifeInsuranceOshawa.tsx"));
const LifeInsuranceBarriePage = lazy(() => import("./pages/LifeInsuranceBarrie.tsx"));
const LifeInsuranceNiagaraFallsPage = lazy(() => import("./pages/LifeInsuranceNiagaraFalls.tsx"));
const LifeInsuranceStCatharinesPage = lazy(() => import("./pages/LifeInsuranceStCatharines.tsx"));
const LifeInsuranceGuelphPage = lazy(() => import("./pages/LifeInsuranceGuelph.tsx"));
const LifeInsuranceKingstonPage = lazy(() => import("./pages/LifeInsuranceKingston.tsx"));
const LifeInsuranceThunderBayPage = lazy(() => import("./pages/LifeInsuranceThunderBay.tsx"));
const InsuranceBrokerCanadaPage = lazy(() => import("./pages/InsuranceBrokerCanada.tsx"));
const InsuranceGlossaryPage = lazy(() => import("./pages/InsuranceGlossary.tsx"));
const InsuranceFAQPage = lazy(() => import("./pages/InsuranceFAQ.tsx"));
const BlogIndex = lazy(() => import("./pages/BlogIndex.tsx"));
const BlogOHIPWaiting = lazy(() => import("./pages/blog/BlogOHIPWaiting.tsx"));
const BlogTermVsWhole = lazy(() => import("./pages/blog/BlogTermVsWhole.tsx"));
const BlogWhatOHIPDoesntCover = lazy(() => import("./pages/blog/BlogWhatOHIPDoesntCover.tsx"));
const BlogLifeInsuranceFamilyToronto = lazy(() => import("./pages/blog/BlogLifeInsuranceFamilyToronto.tsx"));
const BlogDisabilityInsuranceSelfEmployed = lazy(() => import("./pages/blog/BlogDisabilityInsuranceSelfEmployed.tsx"));
const BlogHowMuchLifeInsurance = lazy(() => import("./pages/blog/BlogHowMuchLifeInsurance.tsx"));
const BlogBestLifeInsuranceFamilies = lazy(() => import("./pages/blog/BlogBestLifeInsuranceFamilies.tsx"));
const BlogCriticalIllnessCoverage = lazy(() => import("./pages/blog/BlogCriticalIllnessCoverage.tsx"));
const BlogFuneralCostsCanada = lazy(() => import("./pages/blog/BlogFuneralCostsCanada.tsx"));
const BlogSuperVisaInsurance = lazy(() => import("./pages/blog/BlogSuperVisaInsurance.tsx"));
const BlogMortgageLifeInsurance = lazy(() => import("./pages/blog/BlogMortgageLifeInsurance.tsx"));
const BlogUniversalLifeInsurance = lazy(() => import("./pages/blog/BlogUniversalLifeInsurance.tsx"));
const BlogLifeInsuranceSmokers = lazy(() => import("./pages/blog/BlogLifeInsuranceSmokers.tsx"));
const BlogRRSPvsTFSAvsLifeInsurance = lazy(() => import("./pages/blog/BlogRRSPvsTFSAvsLifeInsurance.tsx"));
const BlogNoMedicalLifeInsurance = lazy(() => import("./pages/blog/BlogNoMedicalLifeInsurance.tsx"));
const BlogIsLifeInsuranceTaxableCanada = lazy(() => import("./pages/blog/BlogIsLifeInsuranceTaxableCanada.tsx"));
const BlogLifeInsuranceSeniorsCanada = lazy(() => import("./pages/blog/BlogLifeInsuranceSeniorsCanada.tsx"));
const BlogBestLifeInsuranceOntario = lazy(() => import("./pages/blog/BlogBestLifeInsuranceOntario.tsx"));
const BlogCheapestLifeInsurance = lazy(() => import("./pages/blog/BlogCheapestLifeInsurance.tsx"));
const BlogIsLifeInsuranceWorthIt = lazy(() => import("./pages/blog/BlogIsLifeInsuranceWorthIt.tsx"));
const BlogInsuranceMistakesCanadians = lazy(() => import("./pages/blog/BlogInsuranceMistakesCanadians.tsx"));
const BlogHowToChooseInsuranceOntario = lazy(() => import("./pages/blog/BlogHowToChooseInsuranceOntario.tsx"));
const BlogInsuranceNewImmigrants = lazy(() => import("./pages/blog/BlogInsuranceNewImmigrants.tsx"));
const CoverageCalculator = lazy(() => import("./pages/CoverageCalculator.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.tsx"));
const LifeInsuranceOntarioPage = lazy(() => import("./pages/LifeInsuranceOntario.tsx"));
const CostLifeInsuranceOntarioPage = lazy(() => import("./pages/CostLifeInsuranceOntario.tsx"));
const CriticalIllnessOntarioPage = lazy(() => import("./pages/CriticalIllnessOntario.tsx"));
const LifeInsurancePRHoldersPage = lazy(() => import("./pages/LifeInsurancePRHolders.tsx"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="h-8 w-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LazyMotion features={domAnimation} strict>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <SEOHead />
            <Suspense fallback={<PageLoader />}>
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
                <Route path="/life-insurance-ontario" element={<LifeInsuranceOntarioPage />} />
                <Route path="/cost-life-insurance-ontario" element={<CostLifeInsuranceOntarioPage />} />
                <Route path="/critical-illness-insurance-ontario" element={<CriticalIllnessOntarioPage />} />
                <Route path="/life-insurance-pr-holders" element={<LifeInsurancePRHoldersPage />} />
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
                <Route path="/life-insurance-kitchener-waterloo" element={<LifeInsuranceKitchenerWaterlooPage />} />
                <Route path="/life-insurance-windsor" element={<LifeInsuranceWindsorPage />} />
                <Route path="/life-insurance-oshawa" element={<LifeInsuranceOshawaPage />} />
                <Route path="/life-insurance-barrie" element={<LifeInsuranceBarriePage />} />
                <Route path="/life-insurance-niagara-falls" element={<LifeInsuranceNiagaraFallsPage />} />
                <Route path="/life-insurance-st-catharines" element={<LifeInsuranceStCatharinesPage />} />
                <Route path="/life-insurance-guelph" element={<LifeInsuranceGuelphPage />} />
                <Route path="/life-insurance-kingston" element={<LifeInsuranceKingstonPage />} />
                <Route path="/life-insurance-thunder-bay" element={<LifeInsuranceThunderBayPage />} />
                
                {/* Resources */}
                <Route path="/insurance-glossary" element={<InsuranceGlossaryPage />} />
                <Route path="/insurance-faq" element={<InsuranceFAQPage />} />
                
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
                <Route path="/blog/best-life-insurance-ontario-2026" element={<BlogBestLifeInsuranceOntario />} />
                <Route path="/blog/cheapest-life-insurance-canada-2026" element={<BlogCheapestLifeInsurance />} />
                <Route path="/blog/is-life-insurance-worth-it-canada" element={<BlogIsLifeInsuranceWorthIt />} />
                <Route path="/blog/top-insurance-mistakes-canadians" element={<BlogInsuranceMistakesCanadians />} />
                <Route path="/blog/how-to-choose-insurance-ontario" element={<BlogHowToChooseInsuranceOntario />} />
                <Route path="/blog/insurance-new-immigrants-canada" element={<BlogInsuranceNewImmigrants />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </LazyMotion>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
