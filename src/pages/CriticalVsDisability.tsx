import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentParagraph, ProsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const CriticalVsDisabilityPage = () => {
  return (
    <PillarPageLayout
      title="Critical Illness vs. Disability Insurance Canada (2026): Do You Need Both?"
      metaTitle="Critical Illness vs Disability Insurance (2026): Compare & Save in Ontario | InsuredCan"
      metaDescription="Compare critical illness vs disability insurance in Ontario. See how they differ, costs, and why most Canadians benefit from both. Free expert advice from licensed advisors."
      breadcrumb="compare/critical-illness-vs-disability"
      heroTag="2026 Comparison"
      heroDescription="Critical illness pays a lump sum upon diagnosis. Disability replaces monthly income if you can't work. Both protect your finances — but in very different ways. Here's how Ontario residents should decide."
    >
      <QuickAnswerBox
        question="What's the difference between critical illness and disability insurance?"
        answer="Critical illness insurance pays a one-time tax-free lump sum ($25K–$2M) when you're diagnosed with a covered condition like cancer or heart attack. Disability insurance replaces 60–70% of your monthly income if any illness or injury prevents you from working. Most Ontario families benefit from having both."
      />
      <KeyTakeaways items={[
        "Critical illness covers 25–26 specific conditions; disability covers ANY illness or injury",
        "You can claim both simultaneously — they are independent policies",
        "Self-employed Canadians should prioritize disability insurance first",
        "Critical illness with Return of Premium means you get money back if you never claim",
        "Combined cost for both is typically $130–$240/month for a 35-year-old in Ontario",
      ]} />

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

      <InlineCTA text="Compare Critical Illness & Disability Quotes" />

      <ContentSection title="When to Choose Critical Illness Insurance">
        <ContentParagraph>
          <Link to="/critical-illness-insurance" className="text-primary underline hover:no-underline">Critical illness insurance</Link> is ideal when you want a financial buffer for the immediate costs of a serious diagnosis. In Ontario, 1 in 2 Canadians will develop cancer in their lifetime.
        </ContentParagraph>
        <ProsList items={[
          "You want a financial buffer for the immediate costs of a diagnosis",
          "Your family has a history of cancer, heart disease, or stroke",
          "You want the return of premium option (money back if no claim)",
          "You already have group disability through your employer",
          "You want funds for treatments not covered by OHIP or provincial plans",
        ]} />
      </ContentSection>

      <ContentSection title="When to Choose Disability Insurance">
        <ContentParagraph>
          <Link to="/disability-insurance" className="text-primary underline hover:no-underline">Disability insurance</Link> is the #1 priority for <Link to="/self-employed" className="text-primary underline hover:no-underline">self-employed Canadians</Link> and anyone without employer sick leave.
        </ContentParagraph>
        <ProsList items={[
          "You're self-employed with no employer benefits or sick leave",
          "You want protection against ANY condition that stops you from working",
          "You're the primary income earner and your family depends on your salary",
          "You have ongoing financial obligations (mortgage, car, childcare)",
          "You want long-term income replacement, not just a one-time payout",
        ]} />
      </ContentSection>

      <InlineCTA text="Get Expert Advice — Free Consultation" />

      <ContentSection title="Why Many Ontario Families Get Both">
        <ContentParagraph>
          Critical illness and disability insurance complement each other perfectly. Here's a real-world Ontario scenario:
        </ContentParagraph>
        <InfoCard title="📋 Scenario: Sarah, 38, IT Manager in Toronto">
          Sarah is diagnosed with breast cancer. Her <strong>critical illness policy</strong> pays a $100,000 lump sum within 30 days of diagnosis. She uses it for out-of-pocket treatments, childcare during chemo, and mortgage payments on her $750,000 Toronto home.
          <br /><br />
          After 4 months, she's still recovering and can't return to work. Her <strong>disability insurance</strong> kicks in (after the 90-day elimination period) and replaces $4,500/month of her income until she's able to return.
          <br /><br />
          Without both policies, Sarah would have burned through her savings and faced potential home loss. With the average Toronto mortgage at $3,200/month, this protection was essential.
        </InfoCard>
        <ContentParagraph>
          Need <Link to="/life-insurance" className="text-primary underline hover:no-underline">life insurance</Link> too? Most <Link to="/families" className="text-primary underline hover:no-underline">Canadian families</Link> should have all three — life, critical illness, and disability — for comprehensive protection.
        </ContentParagraph>
      </ContentSection>

      <FAQSection faqs={[
        { question: "Can I claim both critical illness and disability at the same time?", answer: "Yes! They are independent policies. If you're diagnosed with a covered critical illness AND unable to work, you receive the lump sum from your CI policy and monthly benefits from your disability policy simultaneously. There's no offset between them." },
        { question: "Which should I get first if I can only afford one?", answer: "If you're self-employed, prioritize disability insurance — it protects against any condition. If you have employer disability coverage, add critical illness for the lump-sum protection gap. A licensed InsuredCan advisor can help you prioritize." },
        { question: "Does having one affect my premiums for the other?", answer: "No. Critical illness and disability are underwritten independently. Having one doesn't affect the premiums or eligibility of the other. You can hold both with the same or different insurers." },
        { question: "How much do critical illness and disability insurance cost in Ontario?", answer: "For a healthy 35-year-old non-smoker in Ontario, critical illness ($100K coverage) costs $50–$100/month and disability ($4,000/month benefit) costs $75–$140/month. Combined cost is typically $130–$240/month for comprehensive protection." },
        { question: "Is critical illness insurance worth it in Canada?", answer: "With 1 in 2 Canadians developing cancer, the odds of claiming are significant. A $100K lump sum covers treatment costs, lost income, childcare, and mortgage payments during recovery. Return of premium options mean you get your money back if you never claim." },
        { question: "What conditions does critical illness insurance cover?", answer: "Most Canadian policies cover 25–26 conditions including cancer (65% of claims), heart attack (15%), stroke (8%), coronary bypass, kidney failure, multiple sclerosis, and Parkinson's disease. Cancer alone accounts for nearly two-thirds of all claims." },
      ]} />
    </PillarPageLayout>
  );
};

export default CriticalVsDisabilityPage;
