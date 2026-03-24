import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const WholeLifeInsurance = () => {
  return (
    <PillarPageLayout
      title="Whole Life Insurance in Canada"
      metaTitle="Whole Life Insurance Canada — Permanent Coverage + Cash Value | InsuredCan"
      metaDescription="Whole life insurance provides lifelong coverage with guaranteed cash value growth. Learn costs, benefits, and who needs it in Canada."
      breadcrumb="whole-life-insurance"
      heroTag="Lifetime Protection"
      heroDescription="Whole life insurance provides permanent, lifelong coverage with a guaranteed cash value component. It's ideal for estate planning, wealth transfer, and leaving a legacy."
    >
      <ContentSection title="What Is Whole Life Insurance?">
        <ContentParagraph>
          Whole life insurance is a type of permanent life insurance that covers you for your entire life, as long as premiums are paid. Unlike term insurance, it includes a cash value component that grows on a tax-deferred basis, giving you both protection and a savings element.
        </ContentParagraph>
        <ContentParagraph>
          It's the foundation of estate planning for many Canadian families, providing guaranteed death benefits and the ability to access accumulated cash value during your lifetime.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="How Does Whole Life Insurance Work?">
        <ContentParagraph>
          You pay fixed premiums (monthly or annually) for life or until a specified age (e.g., paid-up at 65 or 20-pay). Part of your premium goes toward the death benefit, and part goes into a cash value account that grows with guaranteed interest. Over time, the cash value can be borrowed against or withdrawn.
        </ContentParagraph>
        <InfoCard title="Example: Estate Planning in Ontario">
          A 40-year-old purchases a $250,000 whole life policy for $280/month. By age 65, the policy has accumulated approximately $85,000 in cash value. The full $250,000+ death benefit passes tax-free to their children, bypassing probate.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Types of Whole Life Insurance in Canada">
        <ContentH3>Participating (Par) Whole Life</ContentH3>
        <ContentParagraph>
          Participating policies pay dividends based on the insurer's performance. Dividends can be used to reduce premiums, purchase additional coverage, or accumulate as cash. Major Canadian insurers like Sun Life, Canada Life, and Manulife offer par policies.
        </ContentParagraph>
        <ContentH3>Non-Participating Whole Life</ContentH3>
        <ContentParagraph>
          Non-par policies have guaranteed values only—no dividends. They're simpler and often slightly cheaper, but offer less growth potential.
        </ContentParagraph>
        <ContentH3>Limited Pay Whole Life</ContentH3>
        <ContentParagraph>
          Pay premiums for a set number of years (10, 15, or 20 years) and then the policy is fully paid up with lifetime coverage continuing. Popular for those who want to front-load their payments.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Who Should Buy Whole Life Insurance?">
        <ProsList items={[
          "High-net-worth individuals planning estate transfers",
          "Business owners funding buy-sell agreements",
          "Parents wanting to leave a guaranteed inheritance",
          "Those seeking a tax-advantaged savings vehicle",
          "Individuals with lifelong dependents (e.g., special needs children)",
          "Anyone wanting to cover final expenses and estate taxes",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ContentH3>Advantages</ContentH3>
        <ProsList items={[
          "Lifetime coverage that never expires",
          "Guaranteed cash value growth",
          "Tax-deferred accumulation",
          "Potential dividends (participating policies)",
          "Can borrow against cash value",
          "Death benefit bypasses probate in most provinces",
          "Fixed premiums that never increase",
        ]} />
        <ContentH3>Disadvantages</ContentH3>
        <ConsList items={[
          "Significantly more expensive than term insurance",
          "Cash value grows slowly in early years",
          "Less flexibility than universal life",
          "Surrendering early may result in losses",
          "Complex product—requires careful understanding",
        ]} />
      </ContentSection>

      <ContentSection title="Cost of Whole Life Insurance in Canada">
        <ComparisonTable
          headers={["Age", "$100K Coverage", "$250K Coverage", "$500K Coverage"]}
          rows={[
            ["30", "$80–$110/mo", "$180–$250/mo", "$340–$480/mo"],
            ["35", "$95–$130/mo", "$220–$300/mo", "$420–$580/mo"],
            ["40", "$115–$160/mo", "$270–$370/mo", "$520–$720/mo"],
            ["45", "$145–$200/mo", "$340–$470/mo", "$660–$920/mo"],
            ["50", "$185–$260/mo", "$440–$610/mo", "$860–$1200/mo"],
          ]}
        />
        <ContentParagraph>
          While significantly more expensive than <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">term life insurance</Link>, whole life provides permanent coverage and cash value that term doesn't offer.
        </ContentParagraph>
      </ContentSection>

      <FAQSection faqs={[
        { question: "Is whole life insurance worth it in Canada?", answer: "It depends on your goals. For estate planning, wealth transfer, and lifelong coverage needs, whole life is excellent. For pure income replacement during working years, term is more cost-effective." },
        { question: "Can I cash out my whole life insurance policy?", answer: "Yes, you can surrender the policy for its cash value, but you'll lose the death benefit and may face tax implications on gains above your cost basis." },
        { question: "How long does it take for whole life insurance to build cash value?", answer: "Cash value growth is slow in the first 5–10 years as most premiums go toward insurance costs. Significant accumulation typically happens after 15–20 years." },
        { question: "Are whole life insurance dividends guaranteed?", answer: "No, dividends are not guaranteed. However, major Canadian insurers like Sun Life and Canada Life have paid dividends consistently for over 100 years." },
        { question: "Can I borrow against my whole life insurance?", answer: "Yes, you can take a policy loan against the cash value at competitive interest rates. The loan doesn't need to be repaid, but unpaid amounts reduce the death benefit." },
      ]} />
    </PillarPageLayout>
  );
};

export default WholeLifeInsurance;
