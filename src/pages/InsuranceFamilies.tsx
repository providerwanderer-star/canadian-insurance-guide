import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const InsuranceForFamiliesPage = () => {
  return (
    <PillarPageLayout
      title="Insurance for Families in Ontario & Canada (2026): Complete Protection Guide"
      metaTitle="Insurance for Families Canada (2026): Protect Your Family & Save | InsuredCan"
      metaDescription="Protect your Ontario family with the right insurance coverage. Compare life, health, critical illness & disability plans for Canadian parents. Free quotes from 20+ insurers."
      breadcrumb="families"
      ogImage="https://www.insuredcan.ca/og/og-families.png"
      heroTag="Families 2026"
      heroDescription="Starting or growing a family changes everything — including your insurance needs. Here's how to build a comprehensive protection plan that keeps your Ontario family secure without breaking the budget."
    >
      <QuickAnswerBox
        question="What insurance does a Canadian family need?"
        answer="A typical Ontario family of 4 should carry: term life insurance ($500K–$1M on each parent, ~$50–$100/mo total), supplemental health & dental (~$300–$450/mo), critical illness on the primary earner (~$70–$100/mo), and disability insurance (~$80–$140/mo). Total: $500–$790/month."
      />
      <KeyTakeaways items={[
        "Both parents should have life insurance — not just the primary earner",
        "A family of 4 in Ontario needs $500–$800/month total for comprehensive coverage",
        "Term life is the most affordable way to protect your family's financial future",
        "Children's critical illness insurance costs as little as $15–$25/month",
        "Review and update coverage at every major life event (baby, home purchase, promotion)",
      ]} />

      <ContentSection title="The Family Insurance Stack">
        <InfoCard title="📋 Recommended Coverage for a Family of 4 in Ontario">
          <strong>1. <Link to="/term-life-insurance" className="text-primary underline hover:no-underline">Term Life Insurance</Link></strong> — $500K–$1M on each parent ($50–$100/mo total)<br />
          <strong>2. <Link to="/health-insurance" className="text-primary underline hover:no-underline">Supplemental Health & Dental</Link></strong> — Family plan ($300–$450/mo)<br />
          <strong>3. <Link to="/critical-illness-insurance" className="text-primary underline hover:no-underline">Critical Illness</Link></strong> — $100K on primary earner ($70–$100/mo)<br />
          <strong>4. <Link to="/disability-insurance" className="text-primary underline hover:no-underline">Disability Insurance</Link></strong> — On primary earner ($80–$140/mo)<br />
          <strong>Total estimated: $500–$790/month</strong> for comprehensive family protection.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Why Term Life Insurance Is #1 for Ontario Parents">
        <ContentParagraph>
          If you have children who depend on your income, <Link to="/life-insurance" className="text-primary underline hover:no-underline">life insurance</Link> is the single most important policy you can own. A 20-year term aligns with the years your children are financially dependent. With the average Ontario home costing $850,000+, mortgage protection alone justifies the coverage.
        </ContentParagraph>
        <ProsList items={[
          "Covers mortgage payments so your family keeps the home",
          "Replaces your income during your children's dependent years",
          "Funds education (RESP contributions, university costs averaging $25K–$30K/year)",
          "Provides childcare funding for the surviving parent ($15K–$25K/year in Ontario)",
          "Costs as little as $25–$40/month for $500K of coverage (age 30)",
        ]} />
      </ContentSection>

      <InlineCTA text="Get a Free Family Insurance Quote" />

      <ContentSection title="Don't Forget Stay-at-Home Parents">
        <ContentParagraph>
          A common mistake is only insuring the working parent. The cost to replace a stay-at-home parent's contributions — childcare, household management, transportation — can be $30,000–$50,000/year in Ontario cities like <Link to="/life-insurance-toronto" className="text-primary underline hover:no-underline">Toronto</Link> and <Link to="/life-insurance-mississauga" className="text-primary underline hover:no-underline">Mississauga</Link>. A $250K–$500K term policy on the stay-at-home parent is essential.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Children's Coverage">
        <ContentH3>Children's Critical Illness</ContentH3>
        <ContentParagraph>
          Many carriers offer children's critical illness riders for $5–$15/month per child. If your child is diagnosed with a covered condition, you receive a lump sum to cover time off work, travel for treatment, and other costs.
        </ContentParagraph>

        <ContentH3>RESP Protection</ContentH3>
        <ContentParagraph>
          Some term life policies can be structured to ensure RESP contributions continue even if a parent passes away. Discuss this with your <Link to="/contact" className="text-primary underline hover:no-underline">advisor</Link> to ensure your children's education fund is protected.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Speak to a Family Insurance Specialist" />

      <FAQSection faqs={[
        { question: "How much life insurance does a family of 4 in Ontario need?", answer: "A common approach is 10–15x the primary earner's income, plus outstanding debts (mortgage, car loans), plus future education costs. For a family earning $100K with a $600K mortgage in Ontario, $1M–$1.5M of coverage is typical." },
        { question: "Should both parents have life insurance?", answer: "Yes, absolutely. Even if one parent doesn't earn income, the cost of replacing their contributions (childcare at $15K–$25K/year in Ontario, home management) is significant. Both parents should have coverage." },
        { question: "When should we get life insurance — before or after having kids?", answer: "Before! Premiums are based on your age and health at the time of application. The younger and healthier you are, the cheaper the premiums. Lock in rates before your family grows." },
        { question: "Is term or whole life better for families in Ontario?", answer: "Term life is best for most families — it's 5–10x cheaper than whole life and covers the critical years when children are dependent. A 20-year term aligns with when kids leave home. Read our full comparison." },
        { question: "What insurance do Ontario families need besides life insurance?", answer: "Beyond life insurance, Ontario families should have supplemental health & dental (OHIP gaps are significant), critical illness on the primary earner, disability insurance, and tenant or home insurance. Total cost is $500–$800/month." },
        { question: "How much does family health insurance cost in Ontario?", answer: "A comprehensive family health & dental plan in Ontario costs $300–$450/month and covers prescriptions, dental, vision, physiotherapy, and mental health. Without it, the average family pays $6,800–$13,200/year out of pocket for uncovered OHIP gaps." },
      ]} />
    </PillarPageLayout>
  );
};

export default InsuranceForFamiliesPage;
