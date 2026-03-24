import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const TermLifeInsurance = () => {
  return (
    <PillarPageLayout
      title="Term Life Insurance in Canada"
      metaTitle="Term Life Insurance Canada — Affordable Coverage for Your Family | InsuredCan"
      metaDescription="Term life insurance offers affordable, temporary coverage for 10–30 years. Learn how it works, costs, and who it's best for in Canada."
      breadcrumb="term-life-insurance"
      heroTag="Affordable Protection"
      heroDescription="Term life insurance provides straightforward, affordable coverage for a set period. It's the most popular choice for Canadian families looking to protect their income and mortgage."
    >
      <ContentSection title="What Is Term Life Insurance?">
        <ContentParagraph>
          Term life insurance is a type of life insurance that provides coverage for a specific period—typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries receive a tax-free death benefit. If the term expires and you're still alive, coverage ends unless you renew.
        </ContentParagraph>
        <ContentParagraph>
          It's the simplest and most affordable form of life insurance, making it the go-to choice for Canadians who want to protect their family during their highest-earning years.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="How Does Term Life Insurance Work?">
        <ContentParagraph>
          You choose a coverage amount (e.g., $500,000) and a term length (e.g., 20 years). You pay fixed monthly or annual premiums. If you die during the term, your beneficiaries receive the full death benefit tax-free. There's no cash value component—it's pure protection.
        </ContentParagraph>
        <InfoCard title="Example: 35-year-old parent in Ontario">
          A healthy 35-year-old non-smoker can get $500,000 of 20-year term coverage for approximately $25–$35/month. That's less than a dollar a day to protect your family's financial future.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Term Lengths Available in Canada">
        <ComparisonTable
          headers={["Term Length", "Best For", "Typical Monthly Cost (500K)"]}
          rows={[
            ["10 Year", "Short-term debts, bridge coverage", "$18–$25"],
            ["15 Year", "Vehicle loans, smaller mortgages", "$22–$30"],
            ["20 Year", "Mortgage protection, young families", "$25–$35"],
            ["25 Year", "Long-term family planning", "$30–$42"],
            ["30 Year", "Maximum protection period", "$35–$50"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Who Should Buy Term Life Insurance?">
        <ProsList items={[
          "Young parents who need affordable coverage while children are dependent",
          "Homeowners who want to cover their mortgage balance",
          "Primary income earners protecting their family's lifestyle",
          "Anyone with significant debts (student loans, car loans)",
          "Business owners covering key-person or buy-sell agreements",
          "Couples who want to replace lost income if one partner passes",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ContentH3>Advantages</ContentH3>
        <ProsList items={[
          "Most affordable type of life insurance",
          "Simple to understand—no investment component",
          "Fixed premiums for the entire term",
          "High coverage amounts available",
          "Many policies are convertible to permanent insurance",
          "Tax-free death benefit for beneficiaries",
        ]} />
        <ContentH3>Disadvantages</ContentH3>
        <ConsList items={[
          "No cash value accumulation",
          "Coverage expires at end of term",
          "Renewal premiums increase significantly with age",
          "Not suitable for lifetime estate planning needs",
        ]} />
      </ContentSection>

      <ContentSection title="Term vs. Whole Life Insurance">
        <ContentParagraph>
          The biggest difference is cost and duration. Term insurance is 5–15x cheaper than whole life for the same coverage amount, but it doesn't last forever. <Link to="/compare/term-vs-whole-life" className="text-primary font-semibold hover:underline">Read our full Term vs. Whole Life comparison →</Link>
        </ContentParagraph>
        <ComparisonTable
          headers={["Feature", "Term Life", "Whole Life"]}
          rows={[
            ["Duration", "10–30 years", "Lifetime"],
            ["Monthly Cost (500K)", "$25–$50", "$250–$500"],
            ["Cash Value", "No", "Yes"],
            ["Best For", "Income replacement", "Estate planning"],
          ]}
        />
      </ContentSection>

      <ContentSection title="How Much Does Term Life Insurance Cost in Canada?">
        <ContentParagraph>
          Costs depend on your age, health, smoking status, term length, and coverage amount. Here are typical rates for healthy non-smokers:
        </ContentParagraph>
        <ComparisonTable
          headers={["Age", "$250K / 20yr", "$500K / 20yr", "$1M / 20yr"]}
          rows={[
            ["25", "$12–$15/mo", "$18–$22/mo", "$28–$35/mo"],
            ["30", "$14–$18/mo", "$22–$28/mo", "$35–$45/mo"],
            ["35", "$16–$22/mo", "$25–$35/mo", "$42–$55/mo"],
            ["40", "$22–$30/mo", "$35–$48/mo", "$58–$78/mo"],
            ["45", "$35–$48/mo", "$55–$75/mo", "$90–$120/mo"],
            ["50", "$55–$75/mo", "$85–$115/mo", "$140–$190/mo"],
          ]}
        />
      </ContentSection>

      <FAQSection faqs={[
        { question: "Can I convert my term policy to whole life?", answer: "Yes, most Canadian term life policies include a conversion privilege that lets you convert to permanent insurance without a medical exam before a certain age (usually 65–71)." },
        { question: "What happens when my term life insurance expires?", answer: "You can renew at higher premiums, convert to permanent insurance, or let the coverage lapse. It's best to plan ahead before your term ends." },
        { question: "Is $500,000 of term life insurance enough?", answer: "A common rule is 10–15x your annual income. For a family earning $70,000/year, $500K–$1M is typically recommended to cover income replacement, mortgage, and children's education." },
        { question: "Do I need a medical exam for term life insurance?", answer: "Traditional policies require a medical exam, but many Canadian insurers now offer no-exam or simplified issue policies with slightly higher premiums." },
        { question: "Is the death benefit from term life insurance taxable in Canada?", answer: "No. Life insurance death benefits are paid tax-free to your named beneficiaries in Canada." },
      ]} />
    </PillarPageLayout>
  );
};

export default TermLifeInsurance;
