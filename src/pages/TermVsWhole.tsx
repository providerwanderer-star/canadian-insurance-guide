import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ComparisonTable, FAQSection, InfoCard } from "@/components/ContentElements";

const TermVsWholePage = () => {
  return (
    <PillarPageLayout
      title="Term vs. Whole Life Insurance in Canada: Which Should You Choose?"
      metaTitle="Term vs Whole Life Insurance Canada — 2026 Comparison | InsuredCan"
      metaDescription="Compare term and whole life insurance in Canada. See costs, benefits, and which policy type is best for your situation. Real numbers for Canadian residents."
      breadcrumb="compare/term-vs-whole-life"
      heroTag="Comparison"
      heroDescription="In Canada, life insurance isn't just a safety net—it's a tax-efficient estate tool. While Term is the 'rental' of insurance (low cost, fixed duration), Whole Life is the 'mortgage' (building equity you can access)."
    >
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

      <ContentSection title="The Cost Curve Over 30 Years">
        <ContentParagraph>
          Term life premiums are dramatically lower initially, but the gap narrows as you age. At renewal (after the initial term), term premiums can increase by 5–10x.
        </ContentParagraph>
        <InfoCard title="📈 Real Example: 30-Year-Old Male, Non-Smoker, $500K Coverage">
          <strong>Year 1–20 (Term 20):</strong> $30/mo = $7,200 total over 20 years.
          <br /><strong>Year 21 renewal:</strong> $180–$250/mo. If you renew for another 10 years, total cost = $28,800–$37,200.
          <br /><br /><strong>Whole Life (age 30–60):</strong> $300/mo = $108,000 total. But cash value at year 30 ≈ $80,000–$120,000 (you can access this).
        </InfoCard>
      </ContentSection>

      <ContentSection title="The Canadian Tax Advantage">
        <ContentParagraph>
          In Canada, the death benefit from both term and whole life insurance is received <strong>income-tax-free</strong> by your beneficiaries. However, whole life offers additional tax advantages:
        </ContentParagraph>
        <ProsList items={[
          "Cash value grows tax-sheltered inside the policy",
          "Policy loans are not taxable income",
          "Corporate-owned whole life can create a tax-free Capital Dividend Account (CDA)",
          "Can be used to equalize estate distribution among heirs",
          "Exempt from probate in most provinces when a beneficiary is named",
        ]} />
      </ContentSection>

      <ContentSection title="Our Recommendation">
        <ContentParagraph>
          For most Canadians under 40 with families, <strong>start with term life insurance</strong> to get the coverage you need at a price you can afford. As your income grows and estate planning becomes relevant, consider adding a whole life policy.
        </ContentParagraph>
        <ContentParagraph>
          Many advisors recommend a <strong>blended approach</strong>: a large term policy for immediate needs plus a smaller whole life policy for permanent coverage and wealth building.
        </ContentParagraph>
      </ContentSection>

      <FAQSection faqs={[
        { question: "Can I convert my term policy to whole life?", answer: "Most Canadian term policies include a conversion privilege that lets you convert to a permanent policy without medical underwriting. This is an incredibly valuable feature—always choose a term policy that includes conversion rights." },
        { question: "Is whole life insurance a good investment in Canada?", answer: "Whole life shouldn't be viewed purely as an investment. The returns (3–5% in participating policies) are modest compared to equities. But the guarantees, tax advantages, and creditor protection make it a valuable component of a diversified financial plan—especially for high-net-worth Canadians." },
        { question: "What happens when my term life policy expires?", answer: "You can renew at a much higher premium (guaranteed renewable), convert to a permanent policy (if conversion privilege exists), or let the coverage lapse. Most people either convert or get a new term policy if they're still insurable." },
      ]} />
    </PillarPageLayout>
  );
};

export default TermVsWholePage;
