import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentParagraph, ProsList, ComparisonTable, FAQSection, InfoCard } from "@/components/ContentElements";

const PrivateVsOHIPPage = () => {
  return (
    <PillarPageLayout
      title="Private Health Insurance vs. OHIP in Ontario: What's Really Covered?"
      metaTitle="Private Health Insurance vs OHIP Ontario — 2026 Coverage Guide | InsuredCan"
      metaDescription="Compare what OHIP covers vs private health insurance in Ontario. See the gaps in provincial healthcare and how to fill them affordably."
      breadcrumb="compare/private-vs-ohip"
      heroTag="Ontario Focus"
      heroDescription="Ontarians often assume OHIP covers everything. It doesn't. Prescription drugs, dental, vision, and most paramedical services come out of your pocket—unless you have private coverage."
    >
      <ContentSection title="What OHIP Covers vs. What It Doesn't">
        <ComparisonTable
          headers={["Healthcare Service", "OHIP Coverage", "Private Insurance"]}
          rows={[
            ["Family doctor visits", "✓ Fully covered", "✓ Covered"],
            ["Hospital stays", "✓ Ward bed covered", "✓ Semi-private/private"],
            ["Surgery (medically necessary)", "✓ Covered", "✓ Covered"],
            ["Prescription drugs (age 25–64)", "✗ NOT covered", "✓ 80–100% covered"],
            ["Dental checkups & cleaning", "✗ NOT covered", "✓ Covered"],
            ["Orthodontics", "✗ NOT covered", "✓ Covered (with limits)"],
            ["Eye exams (age 20–64)", "✗ NOT covered", "✓ Covered"],
            ["Glasses & contacts", "✗ NOT covered", "✓ $200–$500/year"],
            ["Physiotherapy", "✗ NOT covered", "✓ $500–$2,000/year"],
            ["Psychologist/Counselling", "✗ NOT covered", "✓ $500–$2,000/year"],
            ["Massage therapy", "✗ NOT covered", "✓ $500–$1,000/year"],
            ["Ambulance (land)", "✓ Partial ($240 co-pay)", "✓ Full coverage"],
            ["Out-of-province/country", "✗ Almost nothing", "✓ Emergency medical"],
          ]}
        />
      </ContentSection>

      <ContentSection title="The Real Cost of Going Without">
        <InfoCard title="💰 Annual Out-of-Pocket Without Private Insurance (Ontario Family of 4)">
          Dental: $2,000–$4,000 · Prescriptions: $1,500–$3,000 · Vision: $800–$1,200 · Physio/massage: $1,000–$2,000 · Mental health: $1,500–$3,000
          <br /><br />
          <strong>Total: $6,800–$13,200/year out of pocket</strong>
          <br />
          A good family health plan costs $3,600–$5,400/year — potentially saving you thousands.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Who Should Get Private Health Insurance in Ontario?">
        <ProsList items={[
          "Self-employed and freelancers without employer benefits",
          "Anyone taking regular prescription medications",
          "Families with children (dental alone can justify the premium)",
          "Workers in contract or gig economy roles",
          "Early retirees (under 65) who've lost group benefits",
          "New immigrants during the 3-month OHIP waiting period",
        ]} />
      </ContentSection>

      <ContentSection title="Ontario-Specific Programs to Know About">
        <ContentParagraph>
          <strong>OHIP+:</strong> Covers prescription drugs for Ontarians 24 and under (if not covered by a private plan). Over 5,000 drug products are covered.
        </ContentParagraph>
        <ContentParagraph>
          <strong>Trillium Drug Program:</strong> For Ontarians 25+ who spend approximately 4% or more of their after-tax household income on prescription drugs. Provides coverage with a deductible.
        </ContentParagraph>
        <ContentParagraph>
          <strong>Ontario Drug Benefit (ODB):</strong> Covers Ontarians 65+, those on social assistance, and residents of long-term care homes or homes for special care.
        </ContentParagraph>
      </ContentSection>

      <FAQSection faqs={[
        { question: "Is OHIP free?", answer: "OHIP is funded through Ontario's tax system. There are no premiums, but coverage is limited to medically necessary services. Many everyday health needs—dental, drugs, vision, therapy—are not covered." },
        { question: "How long is the OHIP waiting period for newcomers?", answer: "New Ontario residents face a waiting period of up to 3 months before OHIP coverage begins. During this time, you have no provincial health coverage and should get private insurance." },
        { question: "Can I deduct private health insurance premiums on my taxes?", answer: "If you're self-employed, yes—you can claim health insurance premiums as a medical expense on your tax return. Employees who pay a portion of group benefits premiums can also claim their share." },
      ]} />
    </PillarPageLayout>
  );
};

export default PrivateVsOHIPPage;
