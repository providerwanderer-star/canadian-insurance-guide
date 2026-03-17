import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentParagraph, ProsList, ComparisonTable, FAQSection, InfoCard } from "@/components/ContentElements";

const CriticalVsDisabilityPage = () => {
  return (
    <PillarPageLayout
      title="Critical Illness vs. Disability Insurance in Canada: Do You Need Both?"
      metaTitle="Critical Illness vs Disability Insurance Canada — Comparison | InsuredCan"
      metaDescription="Compare critical illness and disability insurance in Canada. Learn how they differ, when you need each, and why many Canadians benefit from having both."
      breadcrumb="compare/critical-illness-vs-disability"
      heroTag="Comparison"
      heroDescription="These two policies serve different purposes. Critical illness gives you a lump sum upon diagnosis. Disability replaces your monthly income if you can't work. Here's how to decide which—or both—you need."
    >
      <ContentSection title="Side-by-Side Comparison">
        <ComparisonTable
          headers={["Feature", "Critical Illness", "Disability Insurance"]}
          rows={[
            ["Payout type", "Lump sum (one time)", "Monthly income (ongoing)"],
            ["Trigger", "Diagnosis of covered condition", "Inability to work"],
            ["Coverage scope", "25–26 specific conditions", "Any illness or injury"],
            ["Benefit amount", "$25,000–$2,000,000", "Up to 70% of gross income"],
            ["Tax treatment", "Tax-free", "Tax-free (if you pay premiums)"],
            ["Duration", "Single payout", "Monthly until recovery or age 65"],
            ["Waiting period", "30-day survival period", "90–120 day elimination period"],
            ["Cost (age 35, typical)", "$50–$100/mo", "$75–$140/mo"],
          ]}
        />
      </ContentSection>

      <ContentSection title="When to Choose Critical Illness">
        <ProsList items={[
          "You want a financial buffer for the immediate costs of a diagnosis",
          "Your family has a history of cancer, heart disease, or stroke",
          "You want the return of premium option (money back if no claim)",
          "You already have group disability through your employer",
          "You want funds for treatments not covered by provincial health plans",
        ]} />
      </ContentSection>

      <ContentSection title="When to Choose Disability Insurance">
        <ProsList items={[
          "You're self-employed with no employer benefits or sick leave",
          "You want protection against ANY condition that stops you from working",
          "You're the primary income earner and your family depends on your salary",
          "You have ongoing financial obligations (mortgage, car, childcare)",
          "You want long-term income replacement, not just a one-time payout",
        ]} />
      </ContentSection>

      <ContentSection title="Why Many Canadians Get Both">
        <ContentParagraph>
          Critical illness and disability insurance complement each other perfectly. Here's a real-world scenario:
        </ContentParagraph>
        <InfoCard title="📋 Scenario: Sarah, 38, IT Manager in Toronto">
          Sarah is diagnosed with breast cancer. Her <strong>critical illness policy</strong> pays a $100,000 lump sum within 30 days of diagnosis. She uses it for out-of-pocket treatments, childcare during chemo, and mortgage payments.
          <br /><br />
          After 4 months, she's still recovering and can't return to work. Her <strong>disability insurance</strong> kicks in (after the 90-day elimination period) and replaces $4,500/month of her income until she's able to return.
          <br /><br />
          Without both policies, Sarah would have burned through her savings and faced potential home loss.
        </InfoCard>
      </ContentSection>

      <FAQSection faqs={[
        { question: "Can I claim both critical illness and disability at the same time?", answer: "Yes! They are independent policies. If you're diagnosed with a covered critical illness AND unable to work, you can receive the lump sum from your CI policy and monthly benefits from your disability policy simultaneously." },
        { question: "Which should I get first if I can only afford one?", answer: "If you're self-employed, prioritize disability insurance—it protects against any condition. If you have employer disability coverage, add critical illness for the lump-sum protection gap." },
        { question: "Does having one affect my premiums for the other?", answer: "No. Critical illness and disability are underwritten independently. Having one doesn't affect the premiums or eligibility of the other." },
      ]} />
    </PillarPageLayout>
  );
};

export default CriticalVsDisabilityPage;
