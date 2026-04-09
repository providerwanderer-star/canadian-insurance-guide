import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways } from "@/components/ContentElements";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LifeInsuranceOntario = () => {
  return (
    <PillarPageLayout
      title="Life Insurance in Ontario: Rates, Rules & Best Providers (2026)"
      metaTitle="Life Insurance Ontario — Compare Rates from 20+ Insurers | InsuredCan"
      metaDescription="Compare life insurance rates in Ontario. Term life from $22/mo. Licensed Ontario advisors compare quotes from Sun Life, Manulife, Canada Life & more. Free consultation."
      breadcrumb="life-insurance-ontario"
      ogImage="https://www.insuredcan.ca/og/og-home.png"
      heroTag="Ontario's #1 Resource"
      heroDescription="Ontario has over 15 million residents — and many are underinsured. Whether you're in Toronto, Ottawa, or a smaller community, this guide covers everything Ontario families need to know about life insurance, costs, and how to get the best rates."
    >
      <QuickAnswerBox
        question="How much does life insurance cost in Ontario?"
        answer="A healthy 30-year-old non-smoker in Ontario can get $500,000 of 20-year term life insurance for $22–$35/month. Rates depend on age, health, smoking status, and coverage amount. Ontario residents pay the same rates as other provinces — life insurance is federally regulated."
      />
      <KeyTakeaways items={[
        "Life insurance premiums in Ontario are the same as other provinces — rates are federally regulated",
        "Ontario has no provincial sales tax on life insurance premiums",
        "Death benefits are received 100% tax-free by beneficiaries under the Income Tax Act",
        "Ontario residents can access 30+ licensed insurers through an independent broker",
        "The younger and healthier you are when you apply, the lower your lifetime premiums",
      ]} />

      <ContentSection title="Why Ontario Families Need Life Insurance">
        <ContentParagraph>
          Ontario's average home price exceeds $850,000, making it one of the most expensive provinces to live in. For families with a mortgage, dependents, or debts, life insurance isn't optional — it's the foundation of financial security. Without it, a sudden loss of income could force your family to sell their home or drain savings.
        </ContentParagraph>
        <ContentParagraph>
          Ontario is also home to Canada's largest immigrant population. Many newcomers are unaware that <Link to="/newcomers" className="text-primary font-semibold hover:underline">life insurance is available to newcomers</Link> — even during the OHIP waiting period.
        </ContentParagraph>
      </ContentSection>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <Link to="/contact">Get Free Ontario Quote <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      <ContentSection title="Life Insurance Costs in Ontario (2026)">
        <ComparisonTable
          headers={["Profile", "$250K Term 20yr", "$500K Term 20yr", "$1M Term 20yr"]}
          rows={[
            ["30-year-old, non-smoker", "$15–$20/mo", "$22–$30/mo", "$35–$48/mo"],
            ["35-year-old, non-smoker", "$18–$25/mo", "$28–$38/mo", "$45–$60/mo"],
            ["40-year-old, non-smoker", "$28–$38/mo", "$40–$55/mo", "$65–$88/mo"],
            ["45-year-old, non-smoker", "$42–$58/mo", "$60–$82/mo", "$95–$130/mo"],
            ["50-year-old, non-smoker", "$68–$95/mo", "$100–$140/mo", "$170–$240/mo"],
          ]}
        />
        <ContentParagraph>
          Smokers typically pay 2–3x higher premiums. These are representative ranges from major Canadian insurers for Ontario residents in 2026.
        </ContentParagraph>
        <InfoCard title="Ontario Tax Advantage">
          Ontario does not charge provincial sales tax (PST) on life insurance premiums. Combined with the federal tax-free death benefit, life insurance remains one of the most tax-efficient financial products available to Ontario families.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Types of Life Insurance Available in Ontario">
        <ContentH3>Term Life Insurance</ContentH3>
        <ContentParagraph>
          The most popular choice for Ontario families. Covers you for 10, 20, or 30 years at a fixed premium. Ideal for mortgage protection and income replacement during your working years. <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">Learn more about term life →</Link>
        </ContentParagraph>
        <ContentH3>Whole Life Insurance</ContentH3>
        <ContentParagraph>
          Permanent coverage that never expires and builds cash value. Popular with Ontario business owners and high-net-worth families for estate planning and tax-sheltered wealth transfer. <Link to="/whole-life-insurance" className="text-primary font-semibold hover:underline">Learn more about whole life →</Link>
        </ContentParagraph>
        <ContentH3>No Medical Exam Policies</ContentH3>
        <ContentParagraph>
          Simplified issue and guaranteed acceptance policies are available for Ontario residents who have health conditions or prefer a faster application process. Coverage up to $500,000 with no medical exam.
        </ContentParagraph>
      </ContentSection>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <Link to="/contact">Speak to an Ontario Advisor <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      <ContentSection title="Top Life Insurance Providers in Ontario">
        <ComparisonTable
          headers={["Insurer", "Best For", "Key Feature"]}
          rows={[
            ["Sun Life", "Families & professionals", "Comprehensive living benefits"],
            ["Manulife", "Term life shoppers", "Competitive term rates"],
            ["Canada Life", "Whole life & estate planning", "Strong participating policies"],
            ["Desjardins", "Bundled coverage", "Multi-policy discounts"],
            ["Industrial Alliance (iA)", "No-medical policies", "Simplified underwriting"],
            ["Equitable Life", "Participating whole life", "Strong dividend history"],
            ["RBC Insurance", "RBC banking clients", "Streamlined application"],
            ["BMO Insurance", "Mortgage protection", "Direct integration with mortgage"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Ontario-Specific Life Insurance Rules">
        <ProsList items={[
          "Life insurance is regulated federally by OSFI — rates are consistent across provinces",
          "Ontario has a 10-day free look period to cancel any new policy without penalty",
          "Beneficiary designations in Ontario override wills for life insurance proceeds",
          "Life insurance death benefits are creditor-protected in Ontario when a preferred beneficiary is named",
          "Ontario's Insurance Act requires all advisors to be licensed by FSRA (Financial Services Regulatory Authority)",
        ]} />
      </ContentSection>

      <ContentSection title="Who Should Get Life Insurance in Ontario?">
        <ProsList items={[
          "Ontario homeowners with a mortgage (average $850K+ in the GTA)",
          "Parents with dependent children who rely on household income",
          "Ontario business owners needing key person or buy-sell agreement funding",
          "Newcomers to Ontario establishing financial security for their families",
          "Couples where one spouse is the primary income earner",
          "Anyone with co-signed debts, student loans, or private lending obligations",
        ]} />
      </ContentSection>

      <ContentSection title="Life Insurance by Ontario City">
        <ContentParagraph>
          InsuredCan serves families across Ontario with licensed advisors available for virtual consultations:
        </ContentParagraph>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {[
            { city: "Toronto", href: "/life-insurance-toronto" },
            { city: "Mississauga", href: "/life-insurance-mississauga" },
            { city: "Brampton", href: "/life-insurance-brampton" },
            { city: "Hamilton", href: "/life-insurance-hamilton" },
            { city: "Ottawa", href: "/life-insurance-ottawa" },
            { city: "London", href: "/life-insurance-london-ontario" },
            { city: "Markham", href: "/life-insurance-markham" },
          ].map((c) => (
            <Link key={c.city} to={c.href} className="bg-card rounded-lg p-4 shadow-card hover:shadow-card-hover transition-smooth text-center border border-transparent hover:border-primary/20">
              <p className="text-sm font-bold text-foreground">{c.city}</p>
            </Link>
          ))}
        </div>
      </ContentSection>

      <FAQSection faqs={[
        { question: "How much life insurance do I need in Ontario?", answer: "Most Ontario families should carry 10–15x their annual household income. With the GTA's high housing costs, a $1M policy is common. Factor in your mortgage balance, children's education costs, outstanding debts, and 5–10 years of income replacement." },
        { question: "Is life insurance taxable in Ontario?", answer: "No. Life insurance death benefits are received completely tax-free by beneficiaries in Ontario and across Canada under the Income Tax Act. There is also no provincial sales tax on life insurance premiums in Ontario." },
        { question: "Can newcomers to Ontario get life insurance?", answer: "Yes. Many Canadian insurers offer life insurance to permanent residents, work permit holders, and even some study permit holders. Some no-medical-exam policies are available immediately upon arrival in Ontario." },
        { question: "What's the difference between bank mortgage insurance and life insurance in Ontario?", answer: "Bank mortgage insurance pays the lender and decreases as your mortgage shrinks. A standalone term life policy pays your beneficiary the full amount, is portable between lenders, and typically costs less for the same or better coverage." },
        { question: "How do I choose the right life insurance in Ontario?", answer: "Work with a licensed Ontario insurance broker who can compare quotes from 20+ insurers. Consider your mortgage, income, dependents, and budget. Term life suits most families; whole life is better for estate planning and permanent needs." },
        { question: "Is life insurance worth it for young professionals in Ontario?", answer: "Absolutely. A healthy 25-year-old can lock in $500K of term coverage for under $20/month. Rates increase significantly with age. Getting insured young saves thousands over your lifetime and guarantees your insurability." },
        { question: "What happens if I miss a life insurance payment in Ontario?", answer: "Most Ontario policies include a 30-day grace period. If you miss a payment, your policy stays active during this window. After 30 days, the policy may lapse, but many insurers offer reinstatement within 1–2 years with proof of health." },
      ]} />
    </PillarPageLayout>
  );
};

export default LifeInsuranceOntario;