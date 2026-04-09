import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways } from "@/components/ContentElements";

const CriticalIllnessPage = () => {
  return (
    <PillarPageLayout
      title="Critical Illness Insurance in Canada"
      metaTitle="Critical Illness Insurance Canada 2026 | Tax-Free Lump Sum | InsuredCan"
      metaDescription="Diagnosed with cancer, heart attack, or stroke? Critical illness insurance pays a tax-free lump sum — no restrictions on use. Compare 20+ plans free. Licensed Ontario advisors."
      breadcrumb="critical-illness-insurance"
      ogImage="https://www.insuredcan.ca/og/og-critical-illness.png"
      heroTag="Income Protection"
      heroDescription="Critical illness insurance pays you a tax-free lump sum if you're diagnosed with a covered condition like cancer, heart attack, or stroke. Use the money however you need—lost income, treatments, childcare, or mortgage payments."
    >
      <QuickAnswerBox
        question="What does critical illness insurance cover in Canada?"
        answer="Critical illness insurance covers 25–26 serious conditions including cancer (65% of claims), heart attack (15%), and stroke (8%). Upon diagnosis, you receive a tax-free lump-sum payout — typically $50,000 to $2,000,000 — that you can use for anything."
      />
      <KeyTakeaways items={[
        "1 in 2 Canadians will develop cancer in their lifetime",
        "Critical illness pays a one-time tax-free lump sum upon diagnosis",
        "Return of Premium (ROP) option means you get money back if you never claim",
        "Coverage complements — not replaces — disability insurance",
      ]} />
      <ContentSection title="What Does Critical Illness Insurance Cover?">
        <ContentParagraph>
          Most Canadian critical illness policies cover between <strong>25 to 26 conditions</strong>. The most common claims are for cancer, heart attack, and stroke—which together account for over 80% of all critical illness claims in Canada.
        </ContentParagraph>
        <ComparisonTable
          headers={["Condition", "% of Claims", "Survival Rate"]}
          rows={[
            ["Cancer", "~65%", "63% (5-year survival)"],
            ["Heart Attack", "~15%", "90%+ (with treatment)"],
            ["Stroke", "~8%", "80%+ (with treatment)"],
            ["Coronary Bypass", "~4%", "95%+"],
            ["Other (MS, kidney failure, etc.)", "~8%", "Varies"],
          ]}
        />
        <InfoCard title="🔑 Key Insight">
          The real value of critical illness insurance isn't covering medical bills (OHIP handles most hospital care). It replaces your income and covers non-medical costs—childcare, mortgage payments, travel for treatment, or simply taking time off to recover.
        </InfoCard>
      </ContentSection>

      <ContentSection title="How Much Does It Cost?">
        <ComparisonTable
          headers={["Coverage Amount", "Age 30 (Non-Smoker)", "Age 40 (Non-Smoker)", "Age 50 (Non-Smoker)"]}
          rows={[
            ["$50,000", "$30–$45/mo", "$55–$80/mo", "$110–$170/mo"],
            ["$100,000", "$50–$75/mo", "$95–$140/mo", "$200–$320/mo"],
            ["$200,000", "$90–$140/mo", "$180–$270/mo", "$380–$600/mo"],
          ]}
        />
        <ContentParagraph>
          Many policies offer a <strong>Return of Premium (ROP)</strong> option: if you don't make a claim during the coverage period, you get all your premiums back. ROP adds about 40–60% to the premium but makes it a "use it or get it back" proposition.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Who Should Consider Critical Illness Insurance?">
        <ProsList items={[
          "Primary income earners whose family depends on their salary",
          "Self-employed Canadians with no paid sick leave or group benefits",
          "Anyone with a family history of cancer, heart disease, or stroke",
          "Parents who want to ensure childcare and mortgage are covered during recovery",
          "Anyone who wants a financial safety net beyond disability insurance",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ProsList items={[
          "Lump-sum payout is tax-free and can be used for anything",
          "Return of Premium option makes it a win-win",
          "Covers 25+ conditions beyond just cancer",
          "Can be bundled with life insurance for savings",
        ]} />
        <ConsList items={[
          "Premiums increase significantly with age",
          "Only pays out once (one covered condition per policy)",
          "Survival period requirement (usually 30 days after diagnosis)",
          "Pre-existing conditions are excluded",
        ]} />
      </ContentSection>

      <FAQSection faqs={[
        { question: "What's the difference between critical illness and disability insurance?", answer: "Critical illness pays a one-time lump sum upon diagnosis of a covered condition. Disability insurance provides monthly income replacement if you can't work due to any illness or injury. They complement each other—critical illness for the immediate financial shock, disability for ongoing income loss." },
        { question: "Is critical illness insurance worth it in Canada?", answer: "1 in 2 Canadians will develop cancer in their lifetime. If you're the primary earner and don't have 6+ months of savings, critical illness insurance provides a crucial financial safety net. The return of premium option also means you get your money back if you stay healthy." },
        { question: "Can I get critical illness insurance if I've had cancer?", answer: "Generally no—cancer is a standard exclusion if you've been previously diagnosed. However, some simplified-issue products may offer limited coverage after a cancer-free waiting period of 5–10 years." },
        { question: "How much critical illness insurance do I need?", answer: "A common recommendation is 1–2 years of after-tax income. Most Canadians choose $50,000–$100,000. Consider your monthly expenses, mortgage payments, potential treatment costs, and how long you might be unable to work." },
        { question: "What is the survival period for critical illness insurance?", answer: "Most policies require you to survive 30 days after diagnosis before the benefit is paid. This is a standard industry requirement across all Canadian critical illness insurers." },
      ]} />
    </PillarPageLayout>
  );
};

export default CriticalIllnessPage;
