import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const WholeLifeInsurance = () => {
  return (
    <PillarPageLayout
      title="Whole Life Insurance in Canada"
      metaTitle="Whole Life Insurance Canada (2026): Lifetime Coverage + Cash Value | InsuredCan"
      metaDescription="Whole life insurance provides lifelong coverage with guaranteed cash value growth. Learn costs, benefits, and who needs it in Canada."
      breadcrumb="whole-life-insurance"
      ogImage="https://www.insuredcan.ca/og/og-whole-life.png"
      heroTag="Lifetime Protection"
      heroDescription="Some financial needs don't expire. A special-needs child who'll always need support. An estate worth protecting from taxes. A legacy you want to guarantee. Whole life insurance is the only policy that promises to be there — no matter when."
    >
      <QuickAnswerBox
        question="What is whole life insurance and how much does it cost?"
        answer="Whole life insurance provides permanent, lifelong coverage with a cash value that grows tax-deferred. A healthy 30-year-old pays $250–$350/month for $500,000 of coverage — 5–10x more than term life, but it never expires and builds wealth."
      />
      <KeyTakeaways items={[
        "Whole life provides permanent coverage that never expires",
        "Cash value grows tax-deferred and can be borrowed against",
        "Participating policies pay dividends (Sun Life, Equitable Life)",
        "5–10x more expensive than term life for the same death benefit",
        "Best for estate planning, wealth transfer, and permanent needs",
      ]} />

      {/* UNIQUE: Estate planning focused hook */}
      <ContentSection title="The $340,000 Tax Bill That Destroyed an Ontario Family's Inheritance">
        <ContentParagraph>
          When Robert passed away at 78, his estate was worth $1.8 million — a paid-off home in <Link to="/life-insurance-toronto" className="text-primary font-semibold hover:underline">Toronto</Link>, RRSPs, and a rental property. His children expected to inherit most of it. Instead, the estate owed:
        </ContentParagraph>
        <ComparisonTable
          headers={["Tax/Fee", "Amount"]}
          rows={[
            ["Income tax on RRSP/RRIF deemed disposition", "$185,000"],
            ["Capital gains on rental property", "$92,000"],
            ["Ontario probate fees (Estate Administration Tax)", "$24,500"],
            ["Legal and executor fees", "$38,000"],
            ["Total owed before heirs receive anything", "$339,500"],
          ]}
        />
        <ContentParagraph>
          A <strong>$350,000 whole life insurance policy</strong> would have covered every dollar — and the death benefit bypasses probate entirely. Robert's children would have received the full estate PLUS the insurance payout. His annual premium? About $4,200 — which his estate would have easily recouped.
        </ContentParagraph>
        <ContentParagraph>
          This is why whole life insurance exists. Not for the 35-year-old who needs to cover a mortgage (that's what <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">term life</Link> is for). But for permanent needs that don't have an expiry date.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Get Free Whole Life Quote" href="mailto:sahil280389@gmail.com?subject=Free%20Whole%20Life%20Quote" />

      <ContentSection title="Who Should (and Shouldn't) Buy Whole Life Insurance">
        <ContentH3>✅ Whole Life IS Right For:</ContentH3>
        <ComparisonTable
          headers={["Profile", "Why Whole Life Fits", "Typical Policy"]}
          rows={[
            ["High net worth ($1M+ estate)", "Tax-efficient estate equalization", "$250K–$1M+ permanent"],
            ["Business owner (buy-sell)", "Guaranteed funding for partnership buyout", "Matches business valuation share"],
            ["Parent of special-needs child", "Lifelong dependent needs permanent protection", "$100K–$500K permanent"],
            ["Charitable giving strategy", "Donate policy or name charity as beneficiary", "Based on giving goals"],
            ["Retirement income supplement", "Borrow against cash value tax-efficiently", "$100K+ participating"],
            ["Estate with significant real estate", "Cover capital gains and probate on death", "Based on estate tax liability"],
          ]}
        />
        <ContentH3>❌ Whole Life is NOT Right For:</ContentH3>
        <ContentParagraph>
          If your primary need is income replacement while raising children or paying off a mortgage, <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">term life insurance</Link> is dramatically cheaper and more appropriate. A 35-year-old can get $1M of term life for $42/month vs. $700+/month for whole life. Don't overspend on the wrong product. <Link to="/compare/term-vs-whole-life" className="text-primary font-semibold hover:underline">Compare term vs. whole life →</Link>
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="How Does Whole Life Insurance Work?">
        <ContentParagraph>
          You pay fixed premiums (monthly or annually) for life or until a specified age (e.g., paid-up at 65 or 20-pay). Part of your premium goes toward the death benefit, and part goes into a cash value account that grows with guaranteed interest. Over time, the cash value can be borrowed against or withdrawn.
        </ContentParagraph>
        <InfoCard title="Example: Participating Whole Life in Ontario">
          A 40-year-old purchases a $250,000 participating whole life policy for $280/month. By age 65, the policy has accumulated approximately $85,000 in guaranteed cash value, plus additional dividends. The total death benefit (with paid-up additions) grows to $320,000+. All of it passes tax-free, bypassing Ontario's 1.5% Estate Administration Tax.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Types of Whole Life Insurance in Canada">
        <ContentH3>Participating (Par) Whole Life</ContentH3>
        <ContentParagraph>
          Participating policies pay dividends based on the insurer's performance. Dividends can reduce premiums, purchase additional coverage, or accumulate as cash. Sun Life, Canada Life, and Equitable Life have paid dividends consistently for over 100 years.
        </ContentParagraph>
        <ContentH3>Non-Participating Whole Life</ContentH3>
        <ContentParagraph>
          Non-par policies have guaranteed values only — no dividends. They're simpler and often slightly cheaper, but offer less growth potential. Good for those who want predictability.
        </ContentParagraph>
        <ContentH3>Limited Pay Whole Life (20-Pay, Paid-Up at 65)</ContentH3>
        <ContentParagraph>
          Pay premiums for a set number of years (10, 15, or 20 years) and then the policy is fully paid up with lifetime coverage continuing. Popular for those who want to front-load payments during peak earning years and have a paid-up policy in retirement.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Compare Whole Life Plans" href="mailto:sahil280389@gmail.com?subject=Compare%20Whole%20Life%20Plans" />

      <ContentSection title="Cost of Whole Life Insurance in Canada (2026)">
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
          While significantly more expensive than <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">term life insurance</Link>, whole life provides permanent coverage and cash value that term doesn't offer. For a full cost breakdown, see <Link to="/cost-life-insurance-ontario" className="text-primary font-semibold hover:underline">Ontario life insurance costs</Link>.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="How to Save on Whole Life Insurance">
        <ProsList items={[
          "Apply young — a 30-year-old pays 50% less than a 45-year-old for the same policy",
          "Consider 20-pay limited pay — higher premiums now, but the policy is fully paid in 20 years with no more premiums ever",
          "Choose participating whole life — dividend history from top Canadian mutuals adds significant long-term value",
          "Use an independent broker — premium differences of 20–30% exist between carriers for identical coverage",
          "Start small and add later — a $100K whole life policy paired with $500K term gives you the best of both worlds",
          "If estate planning is the goal, an Insured Retirement Plan (IRP) can maximize tax-deferred growth inside the policy",
        ]} />
      </ContentSection>

      <ContentSection title="Common Mistakes with Whole Life Insurance">
        <ContentH3>Mistake #1: Buying whole life when you need term</ContentH3>
        <ContentParagraph>
          If your primary need is protecting your family's income for 20 years, you're overpaying by 5–10x with whole life. Get <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">term</Link> first, then add whole life for permanent needs.
        </ContentParagraph>
        <ContentH3>Mistake #2: Surrendering too early</ContentH3>
        <ContentParagraph>
          Cash value grows slowly in years 1–10. Surrendering a whole life policy in the first 10 years almost always results in a loss. Whole life is a 20–30 year commitment — make sure you can sustain the premiums.
        </ContentParagraph>
        <ContentH3>Mistake #3: Not understanding dividends</ContentH3>
        <ContentParagraph>
          Dividends are not guaranteed. However, major Canadian mutual companies have paid them for 100+ consecutive years. Use dividends to purchase paid-up additions (PUA) for maximum long-term growth.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ContentH3>Advantages</ContentH3>
        <ProsList items={[
          "Lifetime coverage that never expires",
          "Guaranteed cash value growth (tax-deferred)",
          "Potential dividends (participating policies)",
          "Can borrow against cash value at competitive rates",
          "Death benefit bypasses probate in most provinces",
          "Fixed premiums that never increase",
          "Creditor protection in Ontario",
        ]} />
        <ContentH3>Disadvantages</ContentH3>
        <ConsList items={[
          "5–10x more expensive than term insurance",
          "Cash value grows slowly in early years",
          "Less flexibility than universal life",
          "Surrendering early results in losses",
          "Complex product — requires careful understanding",
        ]} />
      </ContentSection>

      <InlineCTA text="Speak to an Estate Planning Advisor" href="mailto:sahil280389@gmail.com?subject=Estate%20Planning%20Whole%20Life" />

      <FAQSection faqs={[
        { question: "Is whole life insurance worth it in Canada?", answer: "It depends on your goals. For estate planning, wealth transfer, and lifelong coverage needs, whole life is excellent. For pure income replacement during working years, term is more cost-effective. Many families use both: term for the big coverage years, whole life for permanent needs." },
        { question: "Can I cash out my whole life insurance policy?", answer: "Yes, you can surrender the policy for its cash value, but you'll lose the death benefit and may face tax implications on gains above your cost basis (adjusted cost basis). Consider a policy loan instead — it lets you access cash without triggering a taxable event." },
        { question: "How long does it take for whole life insurance to build cash value?", answer: "Cash value growth is slow in the first 5–10 years as most premiums go toward insurance costs. Significant accumulation typically happens after 15–20 years. By year 25–30, many participating policies have substantial cash values." },
        { question: "Are whole life insurance dividends guaranteed?", answer: "No, dividends are not guaranteed. However, major Canadian insurers like Sun Life and Canada Life have paid dividends consistently for over 100 years. The dividend scale is reviewed annually based on the company's mortality, investment, and expense experience." },
        { question: "Can I borrow against my whole life insurance?", answer: "Yes, you can take a policy loan against the cash value at competitive interest rates (typically 5–8%). The loan doesn't need to be repaid during your lifetime, but unpaid amounts plus interest reduce the death benefit." },
        { question: "What's the difference between whole life and universal life?", answer: "Whole life has fixed premiums and guaranteed cash value growth. Universal life offers flexible premiums and self-directed investment options inside the policy. Universal life is more complex but can offer higher returns (with more risk). Whole life is the safer, more predictable option." },
      ]} />
    </PillarPageLayout>
  );
};

export default WholeLifeInsurance;
