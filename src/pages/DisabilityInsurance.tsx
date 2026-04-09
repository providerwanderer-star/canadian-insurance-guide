import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways } from "@/components/ContentElements";

const DisabilityInsurancePage = () => {
  return (
    <PillarPageLayout
      title="Disability Insurance in Canada: Protect Your Income"
      metaTitle="Disability Insurance Canada — Income Protection Guide | InsuredCan"
      metaDescription="Disability insurance replaces up to 70% of your income if you can't work. Learn about short-term, long-term, and own-occupation coverage for Canadians."
      breadcrumb="disability-insurance"
      ogImage="https://www.insuredcan.ca/og/og-disability.png"
      heroTag="Income Protection"
      heroDescription="Your ability to earn income is your greatest financial asset. Disability insurance replaces a portion of your salary if illness or injury prevents you from working—whether for a few months or permanently."
    >
      <ContentSection title="Why Disability Insurance Matters">
        <ContentParagraph>
          Statistically, a 30-year-old Canadian worker has a <strong>1 in 3 chance</strong> of being disabled for 90 days or more before age 65. Yet most Canadians have no private disability coverage beyond what CPP Disability might provide.
        </ContentParagraph>
        <InfoCard title="📊 CPP Disability: Not Enough">
          The maximum CPP Disability benefit in 2026 is about $1,600/month—and it's very difficult to qualify. You must prove you're "severe and prolonged" disabled from ANY job, not just your own occupation. Over 60% of CPP-D applications are initially denied.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Types of Disability Insurance">
        <ContentH3>Short-Term Disability (STD)</ContentH3>
        <ContentParagraph>
          Covers the first 3–6 months of disability. Often provided through employer group plans. Replaces 60–70% of your income during the elimination period before long-term disability kicks in.
        </ContentParagraph>

        <ContentH3>Long-Term Disability (LTD)</ContentH3>
        <ContentParagraph>
          Kicks in after the waiting period (usually 90–120 days) and can pay benefits until age 65. Individual LTD policies are especially important for self-employed Canadians, contractors, and anyone without group coverage.
        </ContentParagraph>

        <ContentH3>"Own Occupation" vs "Any Occupation"</ContentH3>
        <ContentParagraph>
          <strong>Own occupation</strong> means you're considered disabled if you can't perform YOUR specific job. <strong>Any occupation</strong> means you're only disabled if you can't do ANY job you're qualified for. Always choose own-occupation if possible—it's the gold standard.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Cost Estimates">
        <ComparisonTable
          headers={["Monthly Benefit", "Age 30", "Age 40", "Age 50"]}
          rows={[
            ["$3,000/mo benefit", "$55–$85/mo", "$75–$120/mo", "$120–$190/mo"],
            ["$5,000/mo benefit", "$85–$140/mo", "$120–$195/mo", "$195–$310/mo"],
            ["$8,000/mo benefit", "$130–$220/mo", "$190–$310/mo", "$310–$500/mo"],
          ]}
        />
        <ContentParagraph>
          Premiums depend on your occupation, health, smoking status, and the specific policy features. White-collar professionals generally pay less than blue-collar workers.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Who Needs Disability Insurance?">
        <ProsList items={[
          "Self-employed Canadians and freelancers (no employer sick leave or group LTD)",
          "IT contractors, consultants, and gig workers",
          "Anyone with a mortgage, car payments, or other financial obligations",
          "Primary income earners supporting a family",
          "Professionals whose income depends on specialized skills (surgeons, dentists, engineers)",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ProsList items={[
          "Replaces up to 70% of your gross income monthly",
          "Own-occupation coverage protects your specific career",
          "Benefits are tax-free if you pay premiums personally",
          "Can cover you until age 65",
        ]} />
        <ConsList items={[
          "Elimination period means no payments for 90+ days",
          "Premiums can be expensive for high-risk occupations",
          "Pre-existing condition exclusions apply",
          "Mental health claims may have a 24-month benefit limit",
        ]} />
      </ContentSection>

      <FAQSection faqs={[
        { question: "Is disability insurance tax-deductible in Canada?", answer: "If you pay the premiums personally (not through your employer), the benefits you receive are tax-free. If your employer pays the premiums, the benefits are taxable income. This is why many advisors recommend paying your own LTD premiums." },
        { question: "What's the difference between EI Sickness and disability insurance?", answer: "EI Sickness provides up to 26 weeks of benefits at a maximum of ~$668/week. It's a fraction of most people's income. Private disability insurance offers higher benefit amounts and can pay for years, not just months." },
        { question: "Can I get disability insurance if I work from home?", answer: "Yes. Remote workers are eligible for disability insurance. Your occupation classification and income determine your rates and coverage limits, regardless of where you work." },
      ]} />
    </PillarPageLayout>
  );
};

export default DisabilityInsurancePage;
