import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways } from "@/components/ContentElements";

const HealthInsurancePage = () => {
  return (
    <PillarPageLayout
      title="Health & Dental Insurance in Canada: Filling the Gaps"
      metaTitle="Health & Dental Insurance Canada — Supplement OHIP & Provincial Plans | InsuredCan"
      metaDescription="Discover what provincial healthcare doesn't cover in Canada. Compare private health & dental plans for prescriptions, vision, dental, and paramedical services."
      breadcrumb="health-insurance"
      ogImage="https://www.insuredcan.ca/og/og-health.png"
      heroTag="Essential Coverage"
      heroDescription="Provincial health plans like OHIP cover hospital and doctor visits—but prescription drugs, dental, vision, and paramedical services are mostly on you. Private health insurance fills those gaps affordably."
    >
      <QuickAnswerBox
        question="Does OHIP cover dental, drugs, and vision?"
        answer="No. Provincial health plans like OHIP cover hospital stays and doctor visits, but NOT prescription drugs (ages 25–64), dental care, vision, physiotherapy, or mental health counselling. You need private health insurance for these services."
      />
      <KeyTakeaways items={[
        "Provincial health plans have significant gaps — drugs, dental, vision, and therapy are NOT covered",
        "Individual health plans start from $80–$120/month for basic drug and dental coverage",
        "Self-employed Canadians can deduct health insurance premiums on their taxes",
        "Newcomers face a 3-month waiting period before provincial coverage begins",
      ]} />
      <ContentSection title="What Does Provincial Healthcare Actually Cover?">
        <ContentParagraph>
          Each Canadian province has its own health plan (OHIP in Ontario, MSP in BC, RAMQ in Québec). While medically necessary hospital and physician services are covered, many essential health expenses are not.
        </ContentParagraph>
        <ComparisonTable
          headers={["Service", "OHIP Covers?", "Private Plan Covers?"]}
          rows={[
            ["Hospital stays", "✓ Yes", "✓ Semi-private/private room"],
            ["Doctor visits", "✓ Yes", "✓ Yes"],
            ["Prescription drugs", "✗ Limited (age 25+ pays)", "✓ 80–100%"],
            ["Dental care", "✗ No", "✓ Yes"],
            ["Vision care", "✗ No (adults)", "✓ Yes"],
            ["Physiotherapy", "✗ Limited", "✓ Yes"],
            ["Mental health", "✗ Limited", "✓ Yes (psychologist, counsellor)"],
            ["Massage therapy", "✗ No", "✓ Yes"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Types of Private Health Plans">
        <ContentH3>Individual Health & Dental Plans</ContentH3>
        <ContentParagraph>
          Available for self-employed Canadians, freelancers, and anyone without employer benefits. Plans from providers like Sun Life, Manulife, Blue Cross, and Green Shield start from $80–$200/month depending on your age and coverage level.
        </ContentParagraph>

        <ContentH3>Group Benefits (Employer Plans)</ContentH3>
        <ContentParagraph>
          If you're employed, your employer may offer group health benefits. These are typically cheaper than individual plans because the risk is spread across many employees. If your spouse also has a plan, you can coordinate benefits to maximize coverage.
        </ContentParagraph>

        <ContentH3>Health Spending Accounts (HSA)</ContentH3>
        <ContentParagraph>
          Some employers offer HSAs—a tax-free allowance you can use for any eligible medical expense. Self-employed Canadians can also set up a personal HSA for tax-deductible health spending.
        </ContentParagraph>
        <InfoCard title="🍁 Tax Tip for Self-Employed Canadians">
          If you're self-employed, your private health insurance premiums may be tax-deductible. You can claim them on Line 33099 of your tax return, and if you have a HSA through your corporation, the expenses are a deductible business expense.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Cost Estimates">
        <ComparisonTable
          headers={["Plan Type", "Individual (Age 30)", "Couple (Age 35)", "Family (2 adults, 2 kids)"]}
          rows={[
            ["Basic (drugs + dental)", "$80–$120/mo", "$150–$220/mo", "$200–$320/mo"],
            ["Enhanced (+ vision, paramedical)", "$120–$180/mo", "$220–$320/mo", "$300–$450/mo"],
            ["Premium (max coverage)", "$180–$280/mo", "$320–$450/mo", "$450–$650/mo"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Who Needs Private Health Insurance?">
        <ProsList items={[
          "Self-employed Canadians and freelancers without employer benefits",
          "New immigrants during the OHIP/MSP waiting period (up to 3 months)",
          "Anyone taking regular prescription medications",
          "Families with children needing dental and orthodontic care",
          "Adults wanting mental health coverage (psychologist, counselling)",
          "Early retirees under 65 who've lost employer benefits",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ContentH3>Advantages</ContentH3>
        <ProsList items={[
          "Covers what provincial plans don't — drugs, dental, vision",
          "Premiums may be tax-deductible for self-employed",
          "Faster access to specialists and therapies",
          "Health spending accounts offer complete flexibility",
        ]} />
        <ContentH3>Drawbacks</ContentH3>
        <ConsList items={[
          "Pre-existing conditions may have waiting periods",
          "Individual plans are more expensive than group plans",
          "Some plans have annual or lifetime maximums",
          "Coverage and pricing varies significantly between provinces",
        ]} />
      </ContentSection>

      <FAQSection faqs={[
        { question: "Is OHIP enough for most Ontarians?", answer: "OHIP covers hospital and doctor visits, but most adults pay out-of-pocket for prescriptions (after age 25), all dental work, vision care, and services like physiotherapy and mental health counselling. A supplemental plan can save thousands per year." },
        { question: "What about the Ontario Drug Benefit (ODB)?", answer: "ODB covers Ontarians 65+, those on social assistance, and residents of long-term care homes. The OHIP+ program covers those 24 and under. Everyone else between 25–64 needs private coverage or pays out of pocket." },
        { question: "Can I get health insurance with a pre-existing condition?", answer: "Yes, but the pre-existing condition may have a waiting period (often 12–24 months) before coverage begins for related claims. Some plans offer immediate coverage at higher premiums." },
      ]} />
    </PillarPageLayout>
  );
};

export default HealthInsurancePage;
