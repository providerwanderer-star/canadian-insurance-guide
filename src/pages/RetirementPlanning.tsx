import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways } from "@/components/ContentElements";

const RetirementPlanning = () => {
  return (
    <PillarPageLayout
      title="Retirement Planning & Insurance in Canada"
      metaTitle="Retirement Planning Canada — Secure Your Future Income | InsuredCan"
      metaDescription="Plan for a comfortable retirement in Canada. Learn about RRSPs, TFSAs, annuities, and how insurance protects your retirement income and legacy."
      breadcrumb="retirement-planning"
      ogImage="https://www.insuredcan.ca/og/og-retirement.png"
      heroTag="Secure Your Future"
      heroDescription="Build a tax-efficient retirement strategy with guaranteed income streams, wealth transfer planning, and insurance solutions that protect your legacy for generations."
    >
      <QuickAnswerBox
        question="How much do I need to retire comfortably in Canada?"
        answer="The average Canadian needs $756,000 to $1.2 million in savings to maintain their lifestyle through a 25–30 year retirement. Key tools include RRSPs, TFSAs, CPP/OAS, and permanent life insurance for tax-efficient wealth transfer."
      />
      <KeyTakeaways items={[
        "Average Canadian retirement lasts 25–30 years — plan for longevity",
        "CPP + OAS alone provide only $20,000–$25,000/year per person",
        "Whole life insurance is a tax-sheltered wealth transfer tool",
        "RRSPs provide tax deductions now; TFSAs provide tax-free growth",
        "Critical illness insurance protects your retirement savings from health shocks",
      ]} />
      <ContentSection title="Why Retirement Planning Matters for Canadians">
        <ContentParagraph>
          The average Canadian needs $756,000 to $1.2 million in savings to maintain their lifestyle through retirement. With life expectancy increasing, your retirement could last 25–30 years. Without a plan, you risk outliving your savings.
        </ContentParagraph>
        <ContentParagraph>
          Retirement planning isn't just about saving—it's about creating guaranteed income streams, minimizing taxes, protecting against health costs, and ensuring your wealth transfers efficiently to your family.
        </ContentParagraph>
        <InfoCard title="The Reality Check">
          According to Statistics Canada, nearly 1 in 3 Canadians aged 55–64 have less than $5,000 saved for retirement. Starting early and having a plan makes an enormous difference.
        </InfoCard>
      </ContentSection>

      <ContentSection title="The Canadian Retirement Income System">
        <ContentH3>Pillar 1: Government Benefits</ContentH3>
        <ContentParagraph>
          Old Age Security (OAS) provides up to $713/month (2025), and the Canada Pension Plan (CPP) provides up to $1,364/month at age 65. Combined, these replace only about 25–33% of the average Canadian's pre-retirement income.
        </ContentParagraph>
        <ContentH3>Pillar 2: Employer Pensions</ContentH3>
        <ContentParagraph>
          Defined benefit (DB) and defined contribution (DC) pension plans supplement government benefits, but fewer Canadians have access to employer pensions—especially in the private sector.
        </ContentParagraph>
        <ContentH3>Pillar 3: Personal Savings & Insurance</ContentH3>
        <ContentParagraph>
          RRSPs, TFSAs, non-registered investments, and insurance products fill the gap between government/employer benefits and your actual income needs.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Retirement Savings Vehicles">
        <ComparisonTable
          headers={["Vehicle", "Tax Benefit", "Contribution Limit (2025)", "Best For"]}
          rows={[
            ["RRSP", "Tax-deductible contributions", "18% of income (max $31,560)", "High earners, tax deferral"],
            ["TFSA", "Tax-free growth & withdrawals", "$7,000/year", "All Canadians, flexible savings"],
            ["Non-Registered", "No limits, taxable", "Unlimited", "Additional savings beyond registered"],
            ["FHSA", "Tax-deductible + tax-free", "$8,000/year (max $40K)", "First-time home buyers"],
          ]}
        />
      </ContentSection>

      <ContentSection title="How Insurance Fits Into Retirement Planning">
        <ContentH3>Whole Life Insurance as a Wealth Transfer Tool</ContentH3>
        <ContentParagraph>
          Whole life insurance provides a tax-free death benefit that bypasses probate, making it an efficient way to transfer wealth to the next generation. The cash value component also provides a tax-advantaged savings element.
        </ContentParagraph>
        <ContentH3>Annuities for Guaranteed Income</ContentH3>
        <ContentParagraph>
          Life annuities convert a lump sum into guaranteed monthly income for life, eliminating the risk of outliving your savings. Prescribed annuities offer tax-efficient non-registered income.
        </ContentParagraph>
        <ContentH3>Critical Illness & Long-Term Care</ContentH3>
        <ContentParagraph>
          A critical illness diagnosis or need for long-term care can devastate retirement savings. Insurance protects against these catastrophic costs that provincial health plans don't fully cover.
        </ContentParagraph>
        <ContentH3>Segregated Funds</ContentH3>
        <ContentParagraph>
          Insurance-based investments that offer market exposure with principal guarantees (75%–100% at maturity or death), creditor protection, and probate bypass—unique benefits not available with mutual funds.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Retirement Planning Checklist">
        <ProsList items={[
          "Calculate your target retirement income (70–80% of pre-retirement income)",
          "Estimate your CPP and OAS benefits using the government calculator",
          "Maximize RRSP and TFSA contributions annually",
          "Review employer pension details and vesting schedules",
          "Consider whole life insurance for estate planning and wealth transfer",
          "Evaluate critical illness insurance to protect savings from health emergencies",
          "Plan for long-term care costs (average $5,000–$8,000/month in Canada)",
          "Consult with a licensed advisor for tax-efficient withdrawal strategies",
          "Review and update beneficiary designations on all accounts",
          "Create or update your will and power of attorney",
        ]} />
      </ContentSection>

      <ContentSection title="Common Retirement Planning Mistakes">
        <ConsList items={[
          "Starting too late—every decade of delay roughly doubles the monthly savings required",
          "Underestimating healthcare costs not covered by provincial plans",
          "Not accounting for inflation over a 25–30 year retirement",
          "Over-relying on CPP/OAS without personal savings",
          "Ignoring tax implications of RRSP withdrawals in retirement",
          "Not having a withdrawal strategy that minimizes clawbacks",
          "Failing to plan for the financial impact of losing a spouse",
        ]} />
      </ContentSection>

      <FAQSection faqs={[
        { question: "How much do I need to retire comfortably in Canada?", answer: "Most financial planners recommend having 70–80% of your pre-retirement income available annually. For someone earning $80,000, that's $56,000–$64,000/year, requiring approximately $900,000–$1.2 million in savings (using the 4% withdrawal rule)." },
        { question: "When should I start planning for retirement?", answer: "As early as possible. Starting at 25 instead of 35 can mean the difference between needing to save $400/month vs. $800/month for the same retirement goal, thanks to compound growth." },
        { question: "Is RRSP or TFSA better for retirement savings?", answer: "It depends on your income. If you're in a higher tax bracket now than you expect in retirement, RRSP provides more benefit. If your current and future tax rates are similar, TFSA's tax-free withdrawals are often more advantageous." },
        { question: "How does life insurance help with retirement planning?", answer: "Whole life insurance provides tax-free wealth transfer, probate bypass, creditor protection, and cash value accumulation. It's a cornerstone of estate planning for high-net-worth Canadians." },
        { question: "What if I haven't saved enough for retirement?", answer: "It's never too late to start. Consider maximizing catch-up RRSP contributions, delaying CPP to age 70 (increases benefits by 42%), downsizing your home, and working with an advisor to optimize your strategy." },
      ]} />
    </PillarPageLayout>
  );
};

export default RetirementPlanning;
