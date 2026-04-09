import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways } from "@/components/ContentElements";

const MortgageInsurancePage = () => {
  return (
    <PillarPageLayout
      title="Mortgage Insurance in Canada: Protect Your Home"
      metaTitle="Mortgage Insurance Canada — Bank vs Personal Coverage | InsuredCan"
      metaDescription="Compare bank mortgage insurance vs personal life insurance in Canada. Learn why a term life policy often provides better coverage at a lower cost for homeowners."
      breadcrumb="mortgage-insurance"
      ogImage="https://www.insuredcan.ca/og/og-mortgage.png"
      heroTag="Home Protection"
      heroDescription="Your mortgage is likely the biggest financial commitment you'll ever make. Mortgage insurance ensures your family can keep the home if something happens to you—but the type you choose matters enormously."
    >
      <QuickAnswerBox
        question="Should I get mortgage insurance from my bank or buy my own?"
        answer="A personal term life insurance policy is almost always better than bank mortgage insurance. It's cheaper, provides a level death benefit (not decreasing), is portable between lenders, and your family controls how the payout is used."
      />
      <ContentSection title="Bank Mortgage Insurance vs. Personal Life Insurance">
        <ContentParagraph>
          When you get a mortgage, your bank will offer creditor insurance. It seems convenient, but there's a better alternative that most Canadians don't know about: a personal term life insurance policy.
        </ContentParagraph>
        <ComparisonTable
          headers={["Feature", "Bank Mortgage Insurance", "Personal Term Life"]}
          rows={[
            ["Beneficiary", "The bank", "Your family (they choose)"],
            ["Coverage amount", "Decreases with mortgage balance", "Stays level"],
            ["Premiums", "Same rate, less coverage over time", "Same rate, same coverage"],
            ["Portability", "Tied to that bank/mortgage", "Moves with you"],
            ["Underwriting", "At claim time (post-mortem)", "At application (upfront)"],
            ["Cost comparison", "Often more expensive", "Often 20-40% cheaper"],
          ]}
        />
        <InfoCard title="⚠️ The Post-Claim Underwriting Problem">
          Bank mortgage insurance often does underwriting at the time of claim, not at the time of application. This means your family could pay premiums for years and still be denied at the worst possible moment. Personal life insurance underwrites you upfront, so your coverage is guaranteed.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Cost Comparison">
        <ContentParagraph>
          For a 35-year-old non-smoker with a $500,000 mortgage, here's a typical comparison:
        </ContentParagraph>
        <ComparisonTable
          headers={["Option", "Monthly Cost", "Coverage at Year 1", "Coverage at Year 15"]}
          rows={[
            ["Bank mortgage insurance", "$65–$85/mo", "$500,000", "~$300,000"],
            ["Personal term 20 ($500K)", "$30–$45/mo", "$500,000", "$500,000"],
          ]}
        />
        <ContentParagraph>
          The personal term policy is often <strong>40% cheaper</strong> while providing level coverage that doesn't decrease. Your family receives the full $500,000 and decides how to use it.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Who Should Get Mortgage Protection?">
        <ProsList items={[
          "Any homeowner with a mortgage balance",
          "Single-income families where one spouse handles the mortgage",
          "First-time homebuyers in expensive markets (Toronto, Vancouver)",
          "Self-employed Canadians whose income may fluctuate",
          "Anyone who would want their family to keep the home",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons of Personal Term Life (for Mortgage)">
        <ProsList items={[
          "Coverage amount stays level while mortgage decreases",
          "Family controls the payout — can pay mortgage, invest, or both",
          "Portable — doesn't change when you switch banks or renew mortgage",
          "Underwritten at application — coverage is guaranteed",
          "Often significantly cheaper than bank insurance",
        ]} />
        <ConsList items={[
          "Requires medical underwriting (health questions, possible exam)",
          "Must apply separately from your mortgage",
          "Not as 'convenient' as checking a box at the bank",
        ]} />
      </ContentSection>

      <FAQSection faqs={[
        { question: "Is mortgage insurance mandatory in Canada?", answer: "Mortgage creditor insurance from your bank is NOT mandatory, despite what some bank representatives may imply. CMHC mortgage default insurance (for down payments under 20%) is different and IS required, but it protects the lender, not you." },
        { question: "Can I cancel my bank's mortgage insurance and get my own?", answer: "Yes. You can cancel bank mortgage insurance at any time. We recommend getting a personal term life policy in place first, then cancelling the bank coverage. Never leave a gap in protection." },
        { question: "Should I get mortgage insurance or life insurance?", answer: "A personal term life insurance policy is almost always the better choice. It's cheaper, provides level coverage, and your beneficiaries control the money. The only advantage of bank insurance is convenience — you check a box. But that convenience comes at a significant cost." },
      ]} />
    </PillarPageLayout>
  );
};

export default MortgageInsurancePage;
