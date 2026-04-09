import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const TermVsWholePage = () => {
  return (
    <PillarPageLayout
      title="Term vs. Whole Life Insurance in Canada (2026): Which Should You Choose?"
      metaTitle="Term vs Whole Life Insurance Canada (2026): Compare Costs & Save | InsuredCan"
      metaDescription="Compare term vs whole life insurance in Ontario & Canada. See real 2026 costs, tax benefits, and which policy saves you more. Free expert comparison from licensed advisors."
      breadcrumb="compare/term-vs-whole-life"
      heroTag="2026 Comparison"
      heroDescription="Term life is the 'rental' of insurance — low cost, fixed duration. Whole life is the 'mortgage' — building equity you can access. Here's exactly how they compare for Ontario families in 2026."
    >
      <QuickAnswerBox
        question="Should I get term or whole life insurance in Canada?"
        answer="For most Canadians under 45, term life insurance is the better choice — it's 5–10x cheaper and covers your family during peak financial responsibility years. Whole life is ideal for estate planning, wealth transfer, and permanent coverage needs. Many advisors recommend a blended approach."
      />
      <KeyTakeaways items={[
        "Term life costs $25–$35/mo for $500K (age 30) vs $250–$350/mo for whole life",
        "Term is best for mortgage protection and income replacement during working years",
        "Whole life builds tax-sheltered cash value and never expires",
        "Most term policies include a conversion privilege to switch to permanent coverage",
        "A blended strategy (large term + small whole life) is often the smartest approach",
      ]} />

      <ContentSection title="The Quick Verdict">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <h3 className="text-lg font-semibold text-primary mb-3">Choose Term If...</h3>
            <ProsList items={[
              "You need affordable coverage for a specific period",
              "You have a mortgage or young children to protect",
              "You're under 45 and want maximum coverage per dollar",
              "You prefer to invest the premium savings yourself",
            ]} />
          </div>
          <div className="bg-success/5 rounded-xl p-6 border border-success/10">
            <h3 className="text-lg font-semibold text-success mb-3">Choose Whole Life If...</h3>
            <ProsList items={[
              "You want lifelong, guaranteed coverage",
              "You're interested in tax-sheltered cash value growth",
              "Estate planning and wealth transfer are priorities",
              "You want forced savings with guaranteed returns",
            ]} />
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Side-by-Side Comparison">
        <ComparisonTable
          headers={["Feature", "Term Life", "Whole Life"]}
          rows={[
            ["Coverage duration", "10, 20, or 30 years", "Lifetime (to age 100+)"],
            ["Premium type", "Level for the term, then increases", "Level for life"],
            ["Cash value", "None", "Guaranteed, grows over time"],
            ["Cost (age 30, $500K)", "$25–$35/mo", "$250–$350/mo"],
            ["Tax treatment (death benefit)", "Tax-free", "Tax-free"],
            ["Investment component", "No", "Yes (dividends in par policies)"],
            ["Flexibility", "Simple, straightforward", "Loans, paid-up additions"],
            ["Best for", "Young families, mortgages", "Estate planning, wealth transfer"],
          ]}
        />
      </ContentSection>

      <InlineCTA text="Compare Term & Whole Life Quotes" />

      <ContentSection title="The Cost Curve Over 30 Years">
        <ContentParagraph>
          Term life premiums are dramatically lower initially, but the gap narrows as you age. At renewal (after the initial term), term premiums can increase by 5–10x. Here's how a real Ontario family scenario plays out:
        </ContentParagraph>
        <InfoCard title="📈 Real Example: 30-Year-Old Male, Non-Smoker, $500K Coverage in Ontario">
          <strong>Year 1–20 (Term 20):</strong> $30/mo = $7,200 total over 20 years.
          <br /><strong>Year 21 renewal:</strong> $180–$250/mo. If you renew for another 10 years, total cost = $28,800–$37,200.
          <br /><br /><strong>Whole Life (age 30–60):</strong> $300/mo = $108,000 total. But cash value at year 30 ≈ $80,000–$120,000 (you can access this).
        </InfoCard>
      </ContentSection>

      <ContentSection title="The Canadian Tax Advantage">
        <ContentParagraph>
          In Canada, the death benefit from both term and whole life insurance is received <strong>income-tax-free</strong> by your beneficiaries under the Income Tax Act. However, whole life offers additional tax advantages that Ontario business owners and high earners should consider:
        </ContentParagraph>
        <ProsList items={[
          "Cash value grows tax-sheltered inside the policy",
          "Policy loans are not taxable income",
          "Corporate-owned whole life can create a tax-free Capital Dividend Account (CDA)",
          "Can be used to equalize estate distribution among heirs",
          "Exempt from probate in most provinces when a beneficiary is named",
        ]} />
      </ContentSection>

      <InlineCTA text="Get Expert Advice — Free Consultation" />

      <ContentSection title="Our Recommendation for Ontario Families">
        <ContentParagraph>
          For most Canadians under 40 with families, <strong>start with <Link to="/term-life-insurance" className="text-primary underline hover:no-underline">term life insurance</Link></strong> to get the coverage you need at a price you can afford. As your income grows and estate planning becomes relevant, consider adding a <Link to="/whole-life-insurance" className="text-primary underline hover:no-underline">whole life policy</Link>.
        </ContentParagraph>
        <ContentParagraph>
          Many advisors recommend a <strong>blended approach</strong>: a large term policy for immediate needs plus a smaller whole life policy for permanent coverage and wealth building. A <Link to="/contact" className="text-primary underline hover:no-underline">licensed advisor</Link> can help you find the right balance.
        </ContentParagraph>
        <ContentParagraph>
          If you're a <Link to="/self-employed" className="text-primary underline hover:no-underline">self-employed professional</Link> or <Link to="/young-professionals" className="text-primary underline hover:no-underline">young professional</Link> in Ontario, term life is almost always the right starting point. <Link to="/families" className="text-primary underline hover:no-underline">Growing families</Link> should prioritize coverage on both parents.
        </ContentParagraph>
      </ContentSection>

      <FAQSection faqs={[
        { question: "Can I convert my term policy to whole life in Ontario?", answer: "Most Canadian term policies include a conversion privilege that lets you convert to a permanent policy without medical underwriting. This is incredibly valuable — always choose a term policy that includes conversion rights. Ask your InsuredCan advisor about convertible options." },
        { question: "Is whole life insurance a good investment in Canada?", answer: "Whole life shouldn't be viewed purely as an investment. The returns (3–5% in participating policies) are modest compared to equities. But the guarantees, tax advantages, and creditor protection make it valuable for estate planning — especially for high-net-worth Ontarians." },
        { question: "What happens when my term life policy expires?", answer: "You can renew at a much higher premium (guaranteed renewable), convert to a permanent policy (if conversion privilege exists), or let coverage lapse. Most people either convert or get a new term policy if they're still insurable." },
        { question: "How much does term life insurance cost in Ontario in 2026?", answer: "A healthy 30-year-old non-smoker in Ontario can get $500,000 of 20-year term coverage for $25–$35/month. Rates vary by insurer — comparing quotes from 20+ companies through a broker like InsuredCan ensures you get the lowest rate." },
        { question: "Should I get both term and whole life insurance?", answer: "A blended approach is often optimal. Use a large term policy ($500K–$1M) for mortgage and income protection during working years, plus a smaller whole life policy ($100K–$250K) for permanent estate planning needs. This balances cost and coverage." },
        { question: "Is life insurance tax-free in Canada?", answer: "Yes. Life insurance death benefits are received income-tax-free by your beneficiaries under the Canadian Income Tax Act. Whole life cash value also grows tax-deferred inside the policy. Learn more in our guide on life insurance taxation." },
      ]} />
    </PillarPageLayout>
  );
};

export default TermVsWholePage;
