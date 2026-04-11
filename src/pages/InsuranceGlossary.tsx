import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const glossaryTerms = [
  { term: "Beneficiary", definition: "The person or entity designated to receive the death benefit from a life insurance policy. You can name multiple beneficiaries and specify how the payout is divided.", related: "/life-insurance" },
  { term: "Cash Value", definition: "The savings component of a permanent life insurance policy (whole life or universal life) that grows tax-deferred over time. You can borrow against it or withdraw funds.", related: "/whole-life-insurance" },
  { term: "Convertible Term", definition: "A term life insurance policy that can be converted to a permanent policy without a medical exam, usually before a specified date or age.", related: "/term-life-insurance" },
  { term: "Critical Illness Insurance", definition: "A policy that pays a tax-free lump sum if you're diagnosed with a covered serious illness such as cancer, heart attack, or stroke. The money can be used for anything.", related: "/critical-illness-insurance" },
  { term: "Death Benefit", definition: "The amount of money the insurance company pays to your beneficiaries when you die. This payout is generally tax-free in Canada.", related: "/life-insurance" },
  { term: "Disability Insurance", definition: "Coverage that replaces a portion of your income (typically 60–70%) if you're unable to work due to illness or injury. Available as short-term or long-term policies.", related: "/disability-insurance" },
  { term: "Elimination Period", definition: "The waiting period between when a disability begins and when benefits start being paid. Common elimination periods are 30, 60, 90, or 120 days.", related: "/disability-insurance" },
  { term: "Exclusion", definition: "Specific conditions, activities, or circumstances not covered by an insurance policy. Common exclusions include pre-existing conditions, suicide within the first two years, and high-risk activities." },
  { term: "Face Amount", definition: "The death benefit amount stated on the front page of a life insurance policy. This is the amount your beneficiaries will receive (before any policy loans are deducted).", related: "/life-insurance" },
  { term: "Guaranteed Issue", definition: "A type of life insurance that accepts all applicants regardless of health. No medical exam or health questions required. Coverage amounts are typically lower and premiums higher." },
  { term: "Insurable Interest", definition: "A legal requirement that the person buying the insurance policy must have a financial stake in the continued life of the insured. Spouses, children, and business partners typically have insurable interest." },
  { term: "Level Premium", definition: "An insurance premium that stays the same throughout the entire policy term. Most term life policies have level premiums for the initial term (10, 20, or 30 years).", related: "/term-life-insurance" },
  { term: "Mortgage Insurance", definition: "Insurance that pays off your remaining mortgage balance if you die. Can be obtained through your bank (creditor insurance) or as a standalone term life policy.", related: "/mortgage-insurance" },
  { term: "No-Medical Life Insurance", definition: "Life insurance policies that don't require a medical exam. You may still need to answer health questions. Simplified issue and guaranteed issue are two common types.", related: "/blog/no-medical-life-insurance-canada" },
  { term: "OHIP", definition: "Ontario Health Insurance Plan — Ontario's government-funded health insurance. OHIP covers most medically necessary services but has gaps including prescription drugs, dental, vision, and paramedical services.", related: "/compare/private-vs-ohip" },
  { term: "Own-Occupation Disability", definition: "A disability insurance definition that considers you disabled if you cannot perform the duties of your own specific occupation, even if you could work in another job. This is the most generous definition." },
  { term: "Permanent Life Insurance", definition: "Life insurance that provides coverage for your entire life (as long as premiums are paid). Includes whole life, universal life, and variable life. Builds cash value over time.", related: "/whole-life-insurance" },
  { term: "Policy Lapse", definition: "When an insurance policy terminates because the policyholder stopped paying premiums. Some policies have a grace period (usually 30 days) before lapsing." },
  { term: "Premium", definition: "The amount you pay for your insurance coverage, typically monthly or annually. Premiums are determined by factors including age, health, coverage amount, and policy type." },
  { term: "Renewable Term", definition: "A term life policy that can be renewed at the end of the term without a new medical exam, though premiums will increase based on your attained age.", related: "/term-life-insurance" },
  { term: "Rider", definition: "An optional add-on to a base insurance policy that provides extra coverage or benefits. Common riders include accidental death, waiver of premium, child term, and critical illness." },
  { term: "Simplified Issue", definition: "Life insurance that requires answering a few health questions but no medical exam. Faster approval than fully underwritten policies, with moderate coverage limits." },
  { term: "Super Visa Insurance", definition: "Mandatory private health insurance required for parents and grandparents visiting Canada on a Super Visa. Must provide minimum $100,000 in coverage from a Canadian insurer.", related: "/blog/super-visa-insurance-canada" },
  { term: "Term Life Insurance", definition: "Life insurance that provides coverage for a specific period (term), such as 10, 20, or 30 years. If you die during the term, your beneficiaries receive the death benefit. Generally the most affordable type.", related: "/term-life-insurance" },
  { term: "Travel Insurance", definition: "Coverage for medical emergencies, trip cancellation, lost luggage, and other travel-related risks when travelling outside your home province or country.", related: "/travel-insurance" },
  { term: "Underwriting", definition: "The process insurers use to evaluate your risk and determine your premium. Includes reviewing your age, health history, lifestyle, occupation, and sometimes requires a medical exam or blood test." },
  { term: "Universal Life Insurance", definition: "A type of permanent life insurance with flexible premiums and an investment component. You can adjust your death benefit and premium payments within certain limits.", related: "/blog/universal-life-insurance-canada" },
  { term: "Waiver of Premium", definition: "A rider that waives your insurance premiums if you become totally disabled and unable to work. Your coverage continues without payment until you recover or the waiver period ends." },
  { term: "Whole Life Insurance", definition: "Permanent life insurance with guaranteed premiums, a guaranteed death benefit, and guaranteed cash value growth. The most predictable type of permanent coverage.", related: "/whole-life-insurance" },
  { term: "Accidental Death & Dismemberment (AD&D)", definition: "Insurance that pays a benefit if you die or lose a limb, sight, or hearing in an accident. Often available as a rider on life insurance or as a standalone policy." },
  { term: "Annuity", definition: "A financial product that provides a guaranteed stream of income, typically in retirement. Can be purchased with a lump sum from life insurance cash value or other savings.", related: "/retirement-planning" },
  { term: "Contestability Period", definition: "The first two years of a life insurance policy during which the insurer can investigate and potentially deny a claim if material misrepresentation is found on the application." },
  { term: "Creditor Insurance", definition: "Insurance sold by banks and lenders that pays off a specific debt (like a mortgage or line of credit) if you die. Coverage decreases as you pay down the debt.", related: "/mortgage-insurance" },
  { term: "Group Insurance", definition: "Insurance coverage provided through an employer or association. Typically includes life, health, dental, and disability benefits. Coverage usually ends when you leave the group." },
  { term: "Irrevocable Beneficiary", definition: "A beneficiary designation that cannot be changed without the beneficiary's written consent. Commonly used in divorce agreements or business partnerships." },
  { term: "Living Benefit", definition: "A feature that allows you to access a portion of your death benefit while still alive, typically if diagnosed with a terminal illness. Also refers to critical illness payouts." },
  { term: "Medical Information Bureau (MIB)", definition: "A database shared by insurance companies that stores coded medical information from previous insurance applications. Used during underwriting to detect inconsistencies." },
  { term: "Non-Forfeiture Options", definition: "Choices available to the owner of a permanent life insurance policy who stops paying premiums, including cash surrender, reduced paid-up insurance, or extended term insurance." },
  { term: "Paid-Up Policy", definition: "A life insurance policy where all required premiums have been paid. The coverage remains in force for the rest of the insured's life with no further payments needed." },
  { term: "Participating Policy", definition: "A life insurance policy that pays dividends to the policyholder based on the insurer's financial performance. Common with mutual insurance companies in Canada." },
  { term: "Substandard Risk", definition: "An applicant whose health or lifestyle factors result in a higher-than-average insurance risk. They may be offered coverage at a higher premium (rated policy) rather than being declined." },
  { term: "Suicide Clause", definition: "A provision in life insurance policies that excludes death benefit payment if the insured dies by suicide within the first two years of the policy (one year in some provinces)." },
  { term: "Term Conversion", definition: "The process of converting a term life insurance policy to a permanent policy without a new medical exam. Available on most convertible term policies within specified time limits." },
  { term: "TFSA", definition: "Tax-Free Savings Account — a registered investment account where investment income and withdrawals are tax-free. Can be used alongside life insurance for tax-efficient wealth planning.", related: "/blog/rrsp-tfsa-vs-life-insurance-canada" },
  { term: "RRSP", definition: "Registered Retirement Savings Plan — a tax-deferred savings account for retirement. Contributions are tax-deductible, and withdrawals are taxed as income. Often compared to life insurance as a wealth-building tool.", related: "/blog/rrsp-tfsa-vs-life-insurance-canada" },
];

const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));
const letters = [...new Set(sortedTerms.map(t => t.term[0].toUpperCase()))].sort();

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sortedTerms.slice(0, 20).map(t => ({
    "@type": "Question",
    name: `What is ${t.term}?`,
    acceptedAnswer: { "@type": "Answer", text: t.definition },
  })),
};

const InsuranceGlossary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Insurance Glossary — 45+ Key Terms Explained | InsuredCan</title>
        <meta name="description" content="Understand insurance terminology with InsuredCan's comprehensive glossary. 45+ key life, health, disability & critical illness insurance terms explained in plain language for Canadians." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Insurance Glossary — 45+ Key Terms Explained | InsuredCan" />
        <meta property="og:description" content="Comprehensive Canadian insurance glossary. Understand beneficiary, cash value, term life, whole life, OHIP, and 40+ more insurance terms." />
        <meta property="og:image" content="https://www.insuredcan.ca/og/og-home.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Canadian Insurance Glossary",
          description: "Comprehensive glossary of insurance terms for Canadian consumers",
          url: "https://www.insuredcan.ca/insurance-glossary",
          hasDefinedTerm: sortedTerms.map(t => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.definition,
          })),
        })}</script>
      </Helmet>
      <Navbar />

      <section className="bg-primary">
        <div className="container py-16 md:py-20">
          <BreadcrumbNav items={[{ label: "Insurance Glossary", href: "/insurance-glossary" }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 mb-4">
              <BookOpen className="h-3.5 w-3.5 text-accent-foreground" />
              <span className="text-xs font-bold text-accent-foreground">Education</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4 font-display">
              Insurance Glossary
            </h1>
            <p className="hero-description text-lg text-primary-foreground/80 max-w-reading leading-relaxed">
              Understanding insurance doesn't have to be complicated. Browse our glossary of 45+ key insurance terms explained in plain, everyday language for Canadians.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Letter Navigation */}
      <section className="bg-surface border-b border-border py-4 sticky top-16 z-30">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {letters.map(letter => (
              <a key={letter} href={`#letter-${letter}`} className="w-8 h-8 flex items-center justify-center rounded-md text-sm font-bold text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth">
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <article className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {letters.map(letter => {
            const termsForLetter = sortedTerms.filter(t => t.term[0].toUpperCase() === letter);
            return (
              <div key={letter} id={`letter-${letter}`} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 font-display border-b border-border pb-2">{letter}</h2>
                <div className="space-y-6">
                  {termsForLetter.map(item => (
                    <div key={item.term} className="bg-card rounded-lg p-6 shadow-card border border-transparent hover:border-primary/10 transition-smooth">
                      <h3 className="text-lg font-bold text-foreground mb-2 font-display">{item.term}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
                      {item.related && (
                        <Link to={item.related} className="inline-block mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-smooth">
                          Learn more →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default InsuranceGlossary;