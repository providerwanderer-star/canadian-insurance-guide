import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentParagraph, ProsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const PrivateVsOHIPPage = () => {
  return (
    <PillarPageLayout
      title="Private Health Insurance vs. OHIP in Ontario (2026): What's Really Covered?"
      metaTitle="Private Health Insurance vs OHIP Ontario (2026): Coverage Gaps & Savings | InsuredCan"
      metaDescription="Compare what OHIP covers vs private health insurance in Ontario. See the real gaps in provincial healthcare and how to fill them affordably in 2026. Free quotes."
      breadcrumb="compare/private-vs-ohip"
      heroTag="Ontario Focus 2026"
      heroDescription="Ontarians often assume OHIP covers everything. It doesn't. Prescription drugs, dental, vision, and most paramedical services come out of your pocket — unless you have private coverage. Here's exactly what you're missing."
    >
      <QuickAnswerBox
        question="What does OHIP not cover in Ontario?"
        answer="OHIP does not cover prescription drugs (ages 25–64), dental care, vision exams (ages 20–64), glasses, physiotherapy, massage therapy, psychologist visits, or ambulance beyond a $240 co-pay. An Ontario family of 4 pays $6,800–$13,200/year out of pocket without private insurance."
      />
      <KeyTakeaways items={[
        "OHIP covers hospital and doctor visits but NOT drugs, dental, vision, or therapy",
        "An Ontario family of 4 spends $6,800–$13,200/year out of pocket without private coverage",
        "A good family health plan costs $3,600–$5,400/year — saving you thousands annually",
        "Self-employed Ontarians can deduct health insurance premiums on their taxes",
        "Newcomers face a 3-month OHIP waiting period with zero coverage",
      ]} />

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

      <InlineCTA text="Get a Free Health Insurance Quote" />

      <ContentSection title="The Real Cost of Going Without in Ontario">
        <InfoCard title="💰 Annual Out-of-Pocket Without Private Insurance (Ontario Family of 4)">
          Dental: $2,000–$4,000 · Prescriptions: $1,500–$3,000 · Vision: $800–$1,200 · Physio/massage: $1,000–$2,000 · Mental health: $1,500–$3,000
          <br /><br />
          <strong>Total: $6,800–$13,200/year out of pocket</strong>
          <br />
          A good family <Link to="/health-insurance" className="text-primary underline hover:no-underline">health plan</Link> costs $3,600–$5,400/year — potentially saving you thousands.
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
        <ContentParagraph>
          If you're <Link to="/self-employed" className="text-primary underline hover:no-underline">self-employed</Link>, health insurance premiums are tax-deductible. <Link to="/newcomers" className="text-primary underline hover:no-underline">Newcomers to Canada</Link> should get bridge health coverage immediately upon arrival.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Speak to a Licensed Health Insurance Advisor" />

      <ContentSection title="Ontario-Specific Programs to Know About">
        <ContentParagraph>
          <strong>OHIP+:</strong> Covers prescription drugs for Ontarians 24 and under (if not covered by a private plan). Over 5,000 drug products are covered.
        </ContentParagraph>
        <ContentParagraph>
          <strong>Trillium Drug Program:</strong> For Ontarians 25+ who spend approximately 4% or more of their after-tax household income on prescription drugs. Provides coverage with a deductible.
        </ContentParagraph>
        <ContentParagraph>
          <strong>Ontario Drug Benefit (ODB):</strong> Covers Ontarians 65+, those on social assistance, and residents of long-term care homes. For more on what OHIP doesn't cover, read our <Link to="/blog/what-ohip-doesnt-cover" className="text-primary underline hover:no-underline">detailed guide</Link>.
        </ContentParagraph>
      </ContentSection>

      <FAQSection faqs={[
        { question: "Is OHIP free in Ontario?", answer: "OHIP is funded through Ontario's tax system. There are no premiums, but coverage is limited to medically necessary services. Many everyday health needs — dental, drugs, vision, therapy — are not covered and cost Ontario families thousands annually." },
        { question: "How long is the OHIP waiting period for newcomers?", answer: "New Ontario residents face a waiting period of up to 3 months before OHIP coverage begins. During this time, you have no provincial health coverage. Bridge health insurance costs $150–$400 and is essential for newcomers." },
        { question: "Can I deduct private health insurance premiums on my taxes in Ontario?", answer: "If you're self-employed, yes — you can claim health insurance premiums as a medical expense on your tax return. Employees who pay a portion of group benefits premiums can also claim their share. Incorporated individuals can use a Health Spending Account for 100% deduction." },
        { question: "How much does private health insurance cost in Ontario?", answer: "Individual plans start at $80–$150/month for basic drug and dental coverage. Comprehensive family plans run $300–$450/month. This is significantly less than paying $6,800–$13,200/year out of pocket for uncovered services." },
        { question: "Does OHIP cover dental in Ontario?", answer: "No. OHIP does not cover dental care for adults. Ontario's CDCP program covers some low-income seniors. For everyone else, private dental insurance or out-of-pocket payment is required. The average Ontario family spends $2,000–$4,000/year on dental." },
        { question: "What happens if I don't have health insurance in Ontario?", answer: "Without private coverage, you pay 100% out of pocket for prescriptions, dental, vision, physiotherapy, and mental health services. A single dental emergency can cost $1,000–$5,000. Regular prescriptions can run $200–$500/month without coverage." },
      ]} />
    </PillarPageLayout>
  );
};

export default PrivateVsOHIPPage;
