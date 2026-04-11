import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const DisabilityInsurancePage = () => {
  return (
    <PillarPageLayout
      title="Disability Insurance in Canada: Protect Your Income"
      metaTitle="Disability Insurance Canada 2026 | Protect Your Income | InsuredCan"
      metaDescription="Can't work due to illness or injury? Disability insurance replaces 60–70% of your income, tax-free monthly. Essential for self-employed Canadians. Free quote from Ontario's top broker."
      breadcrumb="disability-insurance"
      ogImage="https://www.insuredcan.ca/og/og-disability.png"
      heroTag="Income Protection"
      heroDescription="Your income isn't just a number — it's your mortgage, your kids' meals, your retirement savings. If an injury or illness stops you from working, disability insurance keeps the money flowing. Because bills don't stop when you do."
    >
      <QuickAnswerBox
        question="How much does disability insurance pay in Canada?"
        answer="Disability insurance replaces 60–85% of your pre-disability gross income, paid monthly and tax-free (if you pay premiums personally). Benefits can last until age 65 for long-term policies. A $5,000/month benefit costs $85–$195/month depending on age and occupation."
      />
      <KeyTakeaways items={[
        "1 in 3 Canadians will experience a disability lasting 90+ days before age 65",
        "EI Sickness only pays ~$668/week for a maximum of 26 weeks",
        "Own-occupation policies are the gold standard — you're covered if you can't do YOUR job",
        "Paying premiums personally means tax-free benefits when you claim",
        "Self-employed Canadians have ZERO income protection without private disability insurance",
      ]} />

      {/* UNIQUE: Specific scenario for self-employed */}
      <ContentSection title="The Day Sarah's Back Gave Out — And Her Business Almost Followed">
        <ContentParagraph>
          Sarah, 39, runs a physiotherapy clinic in <Link to="/life-insurance-hamilton" className="text-primary font-semibold hover:underline">Hamilton</Link>. Annual income: $145,000. No employees — just her. One herniated disc from a car accident changed everything. She couldn't treat patients for 8 months.
        </ContentParagraph>
        <ComparisonTable
          headers={["Monthly Expense", "Amount", "Without DI", "With DI"]}
          rows={[
            ["Mortgage", "$2,800", "Savings drain", "Covered"],
            ["Business lease (still due)", "$3,200", "Personal debt", "Covered by business overhead rider"],
            ["Groceries + utilities", "$1,500", "Credit cards", "Covered"],
            ["Car payment + insurance", "$850", "Missed payments", "Covered"],
            ["Kids' activities + childcare", "$1,200", "Cancelled", "Covered"],
            ["Total monthly gap", "$9,550", "$76,400 over 8 months", "$0 — DI covered 70% of income"],
          ]}
        />
        <ContentParagraph>
          Sarah's own-occupation disability policy paid her <strong>$8,450/month tax-free</strong> for 8 months. Her business overhead rider covered the clinic lease. Total benefit: <strong>$93,200</strong>. Her monthly premium before the accident? <strong>$168/month</strong>. She'd been paying it for 5 years — an investment of $10,080 that returned 9x.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Get Free Disability Insurance Quote" href="mailto:sahil280389@gmail.com?subject=Free%20Disability%20Insurance%20Quote" />

      <ContentSection title="Why Disability Insurance Matters More Than Life Insurance">
        <ContentParagraph>
          Here's a stat most Canadians don't know: you're <strong>3x more likely to become disabled than to die</strong> during your working years. A 30-year-old has a 1 in 3 chance of a 90+ day disability before age 65. Yet most Canadians have <Link to="/life-insurance" className="text-primary font-semibold hover:underline">life insurance</Link> but no disability coverage.
        </ContentParagraph>
        <InfoCard title="📊 CPP Disability: A False Safety Net">
          The maximum CPP Disability benefit in 2026 is about $1,600/month—and it's extremely difficult to qualify. You must prove you're "severe and prolonged" disabled from ANY job, not just your own occupation. Over 60% of CPP-D applications are initially denied. It's a last resort, not a plan.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Who Needs Disability Insurance? A Decision Guide">
        <ComparisonTable
          headers={["Profile", "Risk Level", "Why DI Is Critical", "Recommended Benefit"]}
          rows={[
            ["Self-employed / freelancer", "🔴 Critical", "Zero employer sick leave or group LTD", "70% of gross income"],
            ["IT contractor / consultant", "🔴 Critical", "Contract income stops immediately", "60–70% of contract income"],
            ["Small business owner", "🔴 Critical", "Business dies without you + overhead continues", "Income + business overhead rider"],
            ["Salaried employee (no group LTD)", "🟠 High", "EI sickness is only $668/week for 26 weeks", "60% of salary"],
            ["Salaried with employer LTD", "🟡 Medium", "Group LTD may have 'any occupation' definition", "Top-up to match own-occupation"],
            ["Dual-income couple", "🟡 Medium", "One income can't cover both lifestyles", "$3K–$5K/month each"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Types of Disability Insurance">
        <ContentH3>Short-Term Disability (STD)</ContentH3>
        <ContentParagraph>
          Covers the first 3–6 months of disability. Often provided through employer group plans. Replaces 60–70% of your income during the elimination period before long-term disability kicks in.
        </ContentParagraph>

        <ContentH3>Long-Term Disability (LTD)</ContentH3>
        <ContentParagraph>
          Kicks in after the waiting period (usually 90–120 days) and can pay benefits until age 65. Individual LTD policies are especially important for <Link to="/self-employed" className="text-primary font-semibold hover:underline">self-employed Canadians</Link>, contractors, and anyone without group coverage.
        </ContentParagraph>

        <ContentH3>"Own Occupation" vs "Any Occupation" — The Most Important Distinction</ContentH3>
        <ContentParagraph>
          <strong>Own occupation</strong> means you're considered disabled if you can't perform YOUR specific job — even if you could work as a greeter at Walmart. <strong>Any occupation</strong> means you're only disabled if you can't do ANY job you're reasonably qualified for. A surgeon who loses a hand is "disabled" under own-occ but not under any-occ. <strong>Always choose own-occupation if possible.</strong>
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Compare DI Plans Free" href="mailto:sahil280389@gmail.com?subject=Compare%20Disability%20Insurance%20Plans" />

      <ContentSection title="Cost Estimates (2026 Ontario Rates)">
        <ComparisonTable
          headers={["Monthly Benefit", "Age 30 (Office)", "Age 40 (Office)", "Age 40 (Trades)"]}
          rows={[
            ["$3,000/mo benefit", "$55–$85/mo", "$75–$120/mo", "$110–$175/mo"],
            ["$5,000/mo benefit", "$85–$140/mo", "$120–$195/mo", "$180–$290/mo"],
            ["$8,000/mo benefit", "$130–$220/mo", "$190–$310/mo", "$280–$450/mo"],
            ["$10,000/mo benefit", "$160–$275/mo", "$235–$385/mo", "$350–$560/mo"],
          ]}
        />
        <ContentParagraph>
          White-collar professionals generally pay 30–50% less than blue-collar workers. Your specific occupation classification is the biggest factor in pricing after age.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="How to Get the Cheapest Disability Insurance Rate">
        <ProsList items={[
          "Apply young — a 30-year-old pays 40% less than a 40-year-old for identical coverage",
          "Choose a 90-day elimination period — it's the sweet spot between cost and protection",
          "White-collar occupation? You get the best rates — leverage that advantage",
          "Use an independent broker — InsuredCan compares DI plans from RBC, Manulife, Sun Life, and 15+ others",
          "Consider a benefit period to age 65 instead of 2-year or 5-year — it costs only 15–25% more but covers chronic conditions",
          "Bundle with life insurance and critical illness for multi-policy discounts of 10–15%",
          "If self-employed, add a business overhead expense rider — it covers rent, utilities, and staff while you recover",
        ]} />
      </ContentSection>

      <ContentSection title="Mistakes to Avoid with Disability Insurance">
        <ContentH3>Mistake #1: Relying on EI Sickness Benefits</ContentH3>
        <ContentParagraph>
          EI Sickness pays a maximum of ~$668/week for 26 weeks. If you earn $80,000/year ($1,538/week), EI replaces less than half your income — and only for 6 months. Most disabilities that prevent work last longer.
        </ContentParagraph>
        <ContentH3>Mistake #2: Accepting "any occupation" definition</ContentH3>
        <ContentParagraph>
          If your group LTD has an "any occupation" definition, you could be denied benefits because you could technically work a minimum-wage job. Own-occupation policies cost more but provide real protection for your career and income level.
        </ContentParagraph>
        <ContentH3>Mistake #3: Not covering mental health</ContentH3>
        <ContentParagraph>
          Mental health claims (depression, anxiety, burnout) are the fastest-growing category of disability claims in Canada. Many policies limit mental health benefits to 24 months. Look for policies with extended or unlimited mental health coverage.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ProsList items={[
          "Replaces up to 70% of your gross income monthly",
          "Own-occupation coverage protects your specific career",
          "Benefits are tax-free if you pay premiums personally",
          "Can cover you until age 65",
          "Business overhead riders available for business owners",
        ]} />
        <ConsList items={[
          "Elimination period means no payments for 90+ days",
          "Premiums can be expensive for high-risk occupations",
          "Pre-existing condition exclusions apply",
          "Mental health claims may have a 24-month benefit limit",
          "Any-occupation definitions can restrict eligibility",
        ]} />
      </ContentSection>

      <InlineCTA text="Speak to a DI Specialist" href="mailto:sahil280389@gmail.com?subject=Disability%20Insurance%20Specialist" />

      <FAQSection faqs={[
        { question: "Is disability insurance tax-deductible in Canada?", answer: "If you pay the premiums personally (not through your employer), the benefits you receive are tax-free. If your employer pays the premiums, the benefits are taxable income. This is why many advisors recommend paying your own LTD premiums — the tax savings at claim time far exceed the lost deduction." },
        { question: "What's the difference between EI Sickness and disability insurance?", answer: "EI Sickness provides up to 26 weeks of benefits at a maximum of ~$668/week. Private disability insurance offers higher benefit amounts (up to $15,000+/month) and can pay for years — even until age 65. There's no comparison for high-income earners." },
        { question: "Can I get disability insurance if I work from home?", answer: "Yes. Remote workers are eligible for disability insurance. Your occupation classification and income determine your rates and coverage limits, regardless of where you work." },
        { question: "What is own-occupation disability insurance?", answer: "Own-occupation means you're considered disabled if you can't perform the duties of YOUR specific job — even if you could work in another role. This is the most protective definition and is recommended for professionals and high-income earners." },
        { question: "How long is the elimination period for disability insurance?", answer: "Common elimination periods are 30, 60, 90, or 120 days. The longer the waiting period, the lower your premium. Most Canadians choose 90 days as a balance between cost and protection. If you have emergency savings for 3 months, this is ideal." },
        { question: "Do I need disability insurance if I have critical illness insurance?", answer: "Yes. Critical illness pays a one-time lump sum for specific diagnoses (cancer, heart attack, stroke). Disability insurance pays monthly income for ANY condition that prevents you from working — including back injuries, mental health issues, and repetitive strain injuries that CI doesn't cover." },
      ]} />
    </PillarPageLayout>
  );
};

export default DisabilityInsurancePage;
