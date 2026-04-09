import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const TermLifeInsurance = () => {
  return (
    <PillarPageLayout
      title="Term Life Insurance in Canada"
      metaTitle="Term Life Insurance Canada 2026 | Cheapest Rates From $22/mo | InsuredCan"
      metaDescription="Canada's most affordable life insurance. Compare 10, 20 & 30-year term policies from 20+ insurers. From $22/month for healthy Canadians. Free quote, no obligation."
      breadcrumb="term-life-insurance"
      ogImage="https://www.insuredcan.ca/og/og-term-life.png"
      heroTag="Affordable Protection"
      heroDescription="You don't need a complicated product. You need a promise: if something happens to you, your family is financially safe. Term life insurance is that promise — simple, affordable, and powerful."
    >
      <QuickAnswerBox
        question="How much does term life insurance cost in Canada?"
        answer="A healthy 30-year-old non-smoker can get $500,000 of 20-year term life insurance for $22–$28/month. Term life is the most affordable type of life insurance — 5 to 15 times cheaper than whole life for the same death benefit."
      />
      <KeyTakeaways items={[
        "Term life is the most affordable life insurance option in Canada",
        "Coverage periods: 10, 20, or 30 years with level premiums",
        "Most policies include a conversion privilege to permanent insurance",
        "Death benefit is received tax-free by your beneficiaries",
        "Ideal for families needing mortgage and income protection",
      ]} />

      {/* UNIQUE EMOTIONAL HOOK */}
      <ContentSection title="The Math That Changed Everything for One Ottawa Family">
        <ContentParagraph>
          Mark, 38, father of three in <Link to="/life-insurance-ottawa" className="text-primary font-semibold hover:underline">Ottawa</Link>. Salary: $95,000. Mortgage: $540,000. He thought life insurance was expensive — "probably $200 a month." He was wrong by a factor of 5.
        </ContentParagraph>
        <ContentParagraph>
          His actual quote: <strong>$42/month for $1 million of 20-year term life insurance.</strong> That's $1.40/day — less than his morning Tim Hortons. If Mark dies during those 20 years, his wife receives $1,000,000 tax-free. The mortgage is paid off. The kids' RESPs are funded. Life goes on.
        </ContentParagraph>
        <ContentParagraph>
          If Mark lives (which is overwhelmingly likely — 99% of term policies never pay out), he's spent $10,080 over 20 years on the peace of mind that his family was protected during their most vulnerable years. That's the real value of <Link to="/life-insurance" className="text-primary font-semibold hover:underline">term life insurance</Link>.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="What Is Term Life Insurance?">
        <ContentParagraph>
          Term life insurance is a type of <Link to="/life-insurance" className="text-primary font-semibold hover:underline">life insurance</Link> that provides coverage for a specific period—typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries receive a tax-free death benefit. If the term expires and you're still alive, coverage ends unless you renew.
        </ContentParagraph>
        <ContentParagraph>
          It's the simplest and most affordable form of life insurance, making it the go-to choice for Canadians who want to protect their family during their highest-earning years. No cash value, no investment component — just pure, efficient protection.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Get Free Term Life Quote" href="mailto:sahil280389@gmail.com?subject=Free%20Term%20Life%20Quote" />

      <ContentSection title="Who Is Term Life Insurance For?">
        <ContentParagraph>
          Term life isn't for everyone — but it's perfect for most working Canadians. Here's who benefits most:
        </ContentParagraph>
        <ComparisonTable
          headers={["Profile", "Why Term Life Fits", "Recommended Coverage"]}
          rows={[
            ["New parent (25–35)", "Protect kids for 20+ years at lowest cost", "$750K–$1.5M, Term 20 or 25"],
            ["Homeowner with mortgage", "Covers mortgage if you die — better than bank insurance", "Match mortgage balance + 20%"],
            ["Sole breadwinner", "Replaces your income for your family", "10–15x annual salary"],
            ["Dual-income couple", "Each spouse covers their income contribution", "$500K–$1M each"],
            ["Self-employed professional", "No employer group insurance to fall back on", "$1M+ Term 20, consider bundling with disability"],
            ["Newcomer to Canada", "Immediate, affordable coverage available", "$250K–$750K, Term 10 or 20"],
          ]}
        />
        <ContentParagraph>
          For estate planning or lifelong coverage needs, consider <Link to="/whole-life-insurance" className="text-primary font-semibold hover:underline">whole life insurance</Link> instead. Many families use a combination of both.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Term Lengths: How to Choose the Right One">
        <ComparisonTable
          headers={["Term Length", "Best For", "Typical Monthly Cost ($500K)", "Sweet Spot"]}
          rows={[
            ["10 Year", "Short-term debts, bridge coverage", "$18–$25", "Age 45+ or specific short-term need"],
            ["15 Year", "Vehicle loans, smaller mortgages", "$22–$30", "Older parents, near-empty nesters"],
            ["20 Year", "Mortgage protection, young families", "$25–$35", "★ Most popular — covers mortgage + kids"],
            ["25 Year", "Long-term family planning", "$30–$42", "New parents who want extra runway"],
            ["30 Year", "Maximum protection period", "$35–$50", "Very young buyers (under 30)"],
          ]}
        />
        <InfoCard title="💡 Pro Tip: Match Your Term to Your Mortgage">
          If your mortgage amortization is 25 years, a 25-year term ensures your family can pay off the home no matter when you pass. A 20-year term works if you plan to be mortgage-free by then. Never leave a gap between your term length and your financial obligations.
        </InfoCard>
      </ContentSection>

      <ContentSection title="How Much Does Term Life Insurance Cost? (2026 Canadian Rates)">
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
        <ContentParagraph>
          See <Link to="/cost-life-insurance-ontario" className="text-primary font-semibold hover:underline">Ontario-specific pricing</Link> or use our <Link to="/coverage-calculator" className="text-primary font-semibold hover:underline">coverage calculator</Link> to estimate your personal cost.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Compare Rates From 20+ Insurers" href="mailto:sahil280389@gmail.com?subject=Compare%20Term%20Life%20Rates" />

      <ContentSection title="How to Get the Cheapest Term Life Rate">
        <ContentH3>1. Apply as young as possible</ContentH3>
        <ContentParagraph>
          Rates increase 8–10% per year after age 30. Locking in at 28 vs 35 saves you $3,000–$5,000 over the policy.
        </ContentParagraph>
        <ContentH3>2. Quit smoking (12 months = non-smoker rates)</ContentH3>
        <ContentParagraph>
          Smokers pay 2–3x more. After 12 months smoke-free, most insurers reclassify you as non-smoker. That's $40–$80/month in savings on a $500K policy.
        </ContentParagraph>
        <ContentH3>3. Use an independent broker</ContentH3>
        <ContentParagraph>
          Banks sell their own products. InsuredCan compares 20+ Canadian insurers to find the lowest rate for YOUR profile. The same coverage can vary by 30–50% between companies.
        </ContentParagraph>
        <ContentH3>4. Choose the right term length</ContentH3>
        <ContentParagraph>
          Don't over-buy or under-buy. A 20-year term is only $5–$10/mo more than 10-year, but avoids the costly renewal at 10 years when you're older and potentially less healthy.
        </ContentParagraph>
        <ContentH3>5. Improve your health profile</ContentH3>
        <ContentParagraph>
          Preferred rates (the cheapest tier) require normal BMI, no family history of early disease, no risky hobbies, and controlled blood pressure/cholesterol. Even small improvements can drop you a rate class.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Term vs. Whole Life Insurance">
        <ContentParagraph>
          The biggest difference is cost and duration. Term insurance is 5–15x cheaper than <Link to="/whole-life-insurance" className="text-primary font-semibold hover:underline">whole life</Link> for the same coverage amount, but it doesn't last forever. <Link to="/compare/term-vs-whole-life" className="text-primary font-semibold hover:underline">Read our full Term vs. Whole Life comparison →</Link>
        </ContentParagraph>
        <ComparisonTable
          headers={["Feature", "Term Life", "Whole Life"]}
          rows={[
            ["Duration", "10–30 years", "Lifetime"],
            ["Monthly Cost (500K)", "$25–$50", "$250–$500"],
            ["Cash Value", "No", "Yes — grows tax-deferred"],
            ["Best For", "Income replacement, mortgage", "Estate planning, wealth transfer"],
            ["Flexibility", "Simple, fixed", "Complex, with dividends"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Common Mistakes to Avoid with Term Life">
        <ProsList items={[
          "Don't choose the cheapest 10-year term if you have a 25-year mortgage — you'll face renewal at much higher rates",
          "Don't skip the conversion privilege — it lets you convert to permanent insurance without a medical exam later",
          "Don't assume your employer group plan is enough — it's typically only 1–2x salary and ends when you leave",
          "Don't buy bank mortgage insurance when a personal term policy is cheaper and better",
          "Don't delay because you're healthy — that's exactly WHY you should apply now while rates are lowest",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ContentH3>Advantages</ContentH3>
        <ProsList items={[
          "Most affordable type of life insurance — from $22/month",
          "Simple to understand — no investment component",
          "Fixed premiums for the entire term",
          "High coverage amounts available ($5M+)",
          "Most policies convertible to permanent insurance",
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

      <InlineCTA text="Get Your Free Quote Today" href="mailto:sahil280389@gmail.com?subject=Free%20Term%20Life%20Quote" />

      <FAQSection faqs={[
        { question: "Can I convert my term policy to whole life?", answer: "Yes, most Canadian term life policies include a conversion privilege that lets you convert to permanent insurance without a medical exam before a certain age (usually 65–71). This is a valuable feature — always check that your policy includes it." },
        { question: "What happens when my term life insurance expires?", answer: "You can renew at higher premiums (often 5–10x the original rate), convert to permanent insurance using the conversion privilege, or let the coverage lapse. It's best to plan ahead — consider converting or purchasing a new policy before your term ends." },
        { question: "Is $500,000 of term life insurance enough?", answer: "For a single person or couple without kids, possibly. For a family with children and a mortgage, most need $1M–$2M. Use the 10–15x income rule: $70K salary = $700K–$1.05M minimum. Our coverage calculator provides a personalized recommendation." },
        { question: "Do I need a medical exam for term life insurance?", answer: "Traditional policies require a medical exam (blood, urine, vitals), but many Canadian insurers now offer no-exam or simplified issue policies with slightly higher premiums. Fully underwritten policies with exams get the best rates." },
        { question: "Is the death benefit from term life insurance taxable in Canada?", answer: "No. Life insurance death benefits are paid tax-free to your named beneficiaries in Canada. This is one of the biggest advantages of life insurance over other financial products like RRSPs or TFSAs." },
        { question: "What's the best term length for a young family?", answer: "20-year term is the most popular choice for families with young children. It covers the years when your kids are dependent and your mortgage is largest. If you're under 30 with a new baby, a 25 or 30-year term provides even more runway." },
        { question: "Can I get term life insurance as a smoker?", answer: "Yes, but you'll pay 2–3x more than a non-smoker. If you quit smoking for 12+ months, most insurers reclassify you as a non-smoker. Some insurers differentiate between cigarette smokers and occasional cigar or cannabis users." },
      ]} />
    </PillarPageLayout>
  );
};

export default TermLifeInsurance;
