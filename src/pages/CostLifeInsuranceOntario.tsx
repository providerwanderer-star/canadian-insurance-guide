import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways } from "@/components/ContentElements";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CostLifeInsuranceOntario = () => {
  return (
    <PillarPageLayout
      title="Cost of Life Insurance in Ontario: 2026 Rate Guide"
      metaTitle="Cost of Life Insurance Ontario — 2026 Rate Tables & Comparison | InsuredCan"
      metaDescription="How much does life insurance cost in Ontario? See 2026 rate tables by age, coverage & type. Term life from $15/mo. Compare quotes from 20+ Ontario insurers free."
      breadcrumb="cost-life-insurance-ontario"
      ogImage="https://www.insuredcan.ca/og/og-home.png"
      heroTag="2026 Rate Guide"
      heroDescription="Life insurance in Ontario is more affordable than most people think. A healthy 30-year-old can get $500,000 of term coverage for about $25/month — less than a streaming subscription. Here's exactly what you'll pay based on your age, health, and coverage needs."
    >
      <QuickAnswerBox
        question="How much does life insurance cost in Ontario per month?"
        answer="A healthy 30-year-old non-smoker pays $22–$35/month for $500,000 of 20-year term life insurance in Ontario. Costs increase with age: a 40-year-old pays $40–$55/month, and a 50-year-old pays $100–$140/month for the same coverage."
      />
      <KeyTakeaways items={[
        "Ontario life insurance rates are the same as other provinces — federally regulated",
        "No PST on life insurance premiums in Ontario (additional savings vs. other products)",
        "Term life is 5–10x cheaper than whole life for the same coverage amount",
        "Smokers pay 2–3x more; quitting for 12+ months can qualify you for non-smoker rates",
        "Locking in rates young saves thousands — premiums are fixed for the term length",
      ]} />

      <ContentSection title="Ontario Term Life Insurance Rates (2026)">
        <ContentH3>$250,000 Term Life — 20-Year Term</ContentH3>
        <ComparisonTable
          headers={["Age", "Male Non-Smoker", "Female Non-Smoker", "Male Smoker"]}
          rows={[
            ["25", "$12–$16/mo", "$10–$14/mo", "$25–$35/mo"],
            ["30", "$15–$20/mo", "$13–$17/mo", "$32–$42/mo"],
            ["35", "$18–$25/mo", "$16–$22/mo", "$40–$55/mo"],
            ["40", "$28–$38/mo", "$24–$32/mo", "$60–$80/mo"],
            ["45", "$42–$58/mo", "$36–$48/mo", "$90–$120/mo"],
            ["50", "$68–$95/mo", "$58–$78/mo", "$140–$190/mo"],
          ]}
        />

        <ContentH3>$500,000 Term Life — 20-Year Term</ContentH3>
        <ComparisonTable
          headers={["Age", "Male Non-Smoker", "Female Non-Smoker", "Male Smoker"]}
          rows={[
            ["25", "$18–$24/mo", "$15–$20/mo", "$42–$58/mo"],
            ["30", "$22–$30/mo", "$19–$26/mo", "$52–$70/mo"],
            ["35", "$28–$38/mo", "$24–$33/mo", "$65–$88/mo"],
            ["40", "$40–$55/mo", "$35–$48/mo", "$95–$130/mo"],
            ["45", "$60–$82/mo", "$52–$70/mo", "$140–$190/mo"],
            ["50", "$100–$140/mo", "$85–$115/mo", "$220–$300/mo"],
          ]}
        />

        <ContentH3>$1,000,000 Term Life — 20-Year Term</ContentH3>
        <ComparisonTable
          headers={["Age", "Male Non-Smoker", "Female Non-Smoker", "Male Smoker"]}
          rows={[
            ["25", "$28–$38/mo", "$24–$32/mo", "$70–$95/mo"],
            ["30", "$35–$48/mo", "$30–$40/mo", "$85–$115/mo"],
            ["35", "$45–$60/mo", "$38–$52/mo", "$110–$148/mo"],
            ["40", "$65–$88/mo", "$55–$75/mo", "$160–$220/mo"],
            ["45", "$95–$130/mo", "$82–$110/mo", "$230–$310/mo"],
            ["50", "$170–$240/mo", "$145–$195/mo", "$380–$520/mo"],
          ]}
        />
      </ContentSection>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <Link to="/contact">Get Your Personalized Ontario Quote <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      <ContentSection title="Whole Life Insurance Costs in Ontario">
        <ComparisonTable
          headers={["Age", "$100K Whole Life", "$250K Whole Life", "$500K Whole Life"]}
          rows={[
            ["30", "$85–$120/mo", "$200–$280/mo", "$380–$520/mo"],
            ["35", "$105–$150/mo", "$250–$350/mo", "$480–$650/mo"],
            ["40", "$135–$190/mo", "$320–$440/mo", "$620–$850/mo"],
            ["45", "$175–$245/mo", "$420–$580/mo", "$810–$1,100/mo"],
            ["50", "$230–$320/mo", "$550–$760/mo", "$1,050–$1,450/mo"],
          ]}
        />
        <ContentParagraph>
          Whole life is 5–10x more expensive than term but provides permanent coverage and builds cash value. It's best for <Link to="/whole-life-insurance" className="text-primary font-semibold hover:underline">estate planning and wealth transfer</Link>.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="What Affects Your Life Insurance Rate in Ontario?">
        <ProsList items={[
          "Age — the single biggest factor; premiums increase ~8–10% per year of age",
          "Smoking status — smokers pay 2–3x more; quitting for 12+ months reduces rates",
          "Health conditions — diabetes, heart disease, and high BMI increase premiums",
          "Gender — women typically pay 15–20% less than men for the same coverage",
          "Coverage amount — higher coverage = higher premium, but per-dollar cost decreases",
          "Term length — 30-year terms cost more than 10-year terms for the same coverage",
          "Family medical history — history of cancer or heart disease may increase rates",
          "Occupation & hobbies — high-risk jobs or hobbies (pilot, skydiving) add surcharges",
        ]} />
      </ContentSection>

      <ContentSection title="How to Get the Cheapest Life Insurance in Ontario">
        <ProsList items={[
          "Apply young — a 25-year-old pays 40–50% less than a 35-year-old for the same policy",
          "Quit smoking — non-smoker rates are 2–3x lower; 12 months smoke-free qualifies you",
          "Use an independent broker — compare 20+ insurers instead of settling for one bank's offer",
          "Choose term over whole life — unless you specifically need permanent coverage",
          "Maintain a healthy BMI — losing weight can move you to a preferred rate class",
          "Bundle coverage — some insurers offer discounts when you combine life + CI + disability",
          "Consider no-medical-exam policies — often faster and competitive for healthy applicants",
        ]} />
        <InfoCard title="Pro Tip for Ontario Families">
          Don't buy mortgage insurance from your bank. A standalone term life policy from InsuredCan typically costs 20–40% less, offers more coverage, and is fully portable when you switch lenders or renew your mortgage.
        </InfoCard>
      </ContentSection>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <Link to="/contact">Compare Ontario Rates Free <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      <ContentSection title="Ontario Life Insurance Cost by City">
        <ContentParagraph>
          While life insurance rates are the same across Ontario (federally regulated), the amount of coverage you need varies by city due to housing costs:
        </ContentParagraph>
        <ComparisonTable
          headers={["City", "Avg Home Price", "Recommended Coverage"]}
          rows={[
            ["Toronto", "$1,100,000+", "$1M–$2M"],
            ["Mississauga", "$950,000+", "$1M–$1.5M"],
            ["Brampton", "$900,000+", "$1M–$1.5M"],
            ["Hamilton", "$750,000+", "$750K–$1.25M"],
            ["Ottawa", "$650,000+", "$750K–$1M"],
            ["London", "$550,000+", "$500K–$1M"],
            ["Markham", "$1,100,000+", "$1M–$2M"],
          ]}
        />
      </ContentSection>

      <FAQSection faqs={[
        { question: "How much is life insurance per month in Ontario?", answer: "A healthy 30-year-old non-smoker in Ontario pays $22–$35/month for $500,000 of 20-year term life insurance. Costs depend on age, health, smoking status, and coverage amount. Women pay about 15–20% less than men." },
        { question: "Is life insurance cheaper in Ontario than other provinces?", answer: "Life insurance rates are the same across all provinces because they're federally regulated by OSFI. However, Ontario doesn't charge PST on premiums, giving a slight advantage over some provinces." },
        { question: "What's the cheapest type of life insurance in Ontario?", answer: "10-year term life insurance is the cheapest option. A healthy 30-year-old can get $500K of 10-year term for as low as $15–$20/month. However, 20-year term offers better long-term value for families with young children." },
        { question: "How much life insurance do I need for my Ontario mortgage?", answer: "At minimum, enough to cover your full mortgage balance. In the GTA where mortgages exceed $800K, a $1M term policy is standard. Add 5–10x your income on top for income replacement and education costs." },
        { question: "Does the cost of life insurance go up every year in Ontario?", answer: "With term life insurance, your premium is locked in for the entire term (10, 20, or 30 years). It only increases if you renew after the term expires. Whole life premiums are fixed for life." },
        { question: "Can I reduce my life insurance cost in Ontario?", answer: "Yes. The top strategies are: apply young, quit smoking (12+ months), maintain a healthy weight, use an independent broker to compare rates, and choose term over whole life. Bundling life + CI coverage can also save 5–10%." },
      ]} />
    </PillarPageLayout>
  );
};

export default CostLifeInsuranceOntario;