import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const CriticalIllnessPage = () => {
  return (
    <PillarPageLayout
      title="Critical Illness Insurance in Canada"
      metaTitle="Critical Illness Insurance Canada 2026 | Tax-Free Lump Sum | InsuredCan"
      metaDescription="Diagnosed with cancer, heart attack, or stroke? Critical illness insurance pays a tax-free lump sum — no restrictions on use. Compare 20+ plans free. Licensed Ontario advisors."
      breadcrumb="critical-illness-insurance"
      ogImage="https://www.insuredcan.ca/og/og-critical-illness.png"
      heroTag="Income Protection"
      heroDescription="Cancer doesn't send a bill in advance. Neither does a heart attack. Critical illness insurance gives you a tax-free lump sum the moment you're diagnosed — so you can focus on recovery, not rent."
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
        "OHIP covers hospital care, but NOT lost income, childcare, or mortgage payments during recovery",
      ]} />

      {/* UNIQUE: Story-driven emotional hook */}
      <ContentSection title="What $100,000 Meant to the Chen Family">
        <ContentParagraph>
          David Chen, 42, IT project manager in <Link to="/life-insurance-markham" className="text-primary font-semibold hover:underline">Markham</Link>. Diagnosed with stage 2 colon cancer during a routine colonoscopy. The surgery and chemo were covered by OHIP. But here's what OHIP didn't cover:
        </ContentParagraph>
        <ComparisonTable
          headers={["Non-Medical Cost", "Amount", "Who Paid?"]}
          rows={[
            ["6 months lost income (couldn't work during chemo)", "$47,500", "Critical illness payout"],
            ["Parking at Princess Margaret (3x/week for 6 months)", "$3,200", "Critical illness payout"],
            ["Childcare increase (wife had to work more)", "$8,400", "Critical illness payout"],
            ["Prescription drugs not covered by provincial plan", "$4,800", "Critical illness payout"],
            ["Mortgage payments during recovery (6 months)", "$14,400", "Critical illness payout"],
            ["Nutritionist, supplements, recovery support", "$3,200", "Critical illness payout"],
            ["Total non-medical costs", "$81,500", "Covered by $100K CI policy"],
          ]}
        />
        <ContentParagraph>
          David's $100,000 critical illness payout arrived 35 days after diagnosis. He had the remaining $18,500 as an emergency buffer. His monthly premium before diagnosis? <strong>$68/month</strong>. He'd been paying it for 7 years — a total investment of $5,712 that returned $100,000 when it mattered most.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Get Free Critical Illness Quote" href="mailto:sahil280389@gmail.com?subject=Free%20Critical%20Illness%20Quote" />

      <ContentSection title="What Does Critical Illness Insurance Cover?">
        <ContentParagraph>
          Most Canadian critical illness policies cover between <strong>25 to 26 conditions</strong>. The most common claims are for cancer, heart attack, and stroke—which together account for over 80% of all critical illness claims in Canada.
        </ContentParagraph>
        <ComparisonTable
          headers={["Condition", "% of Claims", "Survival Rate", "Avg. Recovery Time"]}
          rows={[
            ["Cancer (all types)", "~65%", "63% (5-year survival)", "6–18 months"],
            ["Heart Attack", "~15%", "90%+ (with treatment)", "3–6 months"],
            ["Stroke", "~8%", "80%+ (with treatment)", "6–12 months"],
            ["Coronary Bypass", "~4%", "95%+", "6–12 weeks"],
            ["Multiple Sclerosis", "~3%", "Normal lifespan", "Ongoing"],
            ["Other (kidney failure, Parkinson's, etc.)", "~5%", "Varies", "Varies"],
          ]}
        />
        <InfoCard title="🔑 The Real Gap OHIP Doesn't Fill">
          The real value of critical illness insurance isn't covering medical bills (OHIP handles most hospital care). It replaces your income and covers non-medical costs—childcare, mortgage payments, travel for treatment, or simply taking time off to recover without financial stress. Compare this with <Link to="/disability-insurance" className="text-primary font-semibold hover:underline">disability insurance</Link>, which provides monthly income instead of a lump sum.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Who Is Critical Illness Insurance For?">
        <ComparisonTable
          headers={["Profile", "Why CI Is Essential", "Recommended Amount"]}
          rows={[
            ["Primary income earner", "Replaces income during 6–18 month recovery", "1–2 years of after-tax income"],
            ["Self-employed / freelancer", "No paid sick leave, no employer benefits", "$100K–$200K"],
            ["Family history of cancer/heart disease", "Higher risk = higher value of protection", "$75K–$150K"],
            ["Parent with young children", "Covers childcare + mortgage during treatment", "$100K+"],
            ["Dual-income household", "One income can't cover everything alone", "$50K–$100K each"],
            ["Anyone without 6+ months savings", "Prevents financial crisis during illness", "$50K minimum"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Critical Illness vs. Disability Insurance">
        <ContentParagraph>
          These two products complement each other — they are NOT interchangeable. <Link to="/compare/critical-illness-vs-disability" className="text-primary font-semibold hover:underline">Read our full comparison →</Link>
        </ContentParagraph>
        <ComparisonTable
          headers={["Feature", "Critical Illness", "Disability Insurance"]}
          rows={[
            ["Payout type", "One-time lump sum", "Monthly income"],
            ["Trigger", "Diagnosis of covered condition", "Inability to work"],
            ["Covers", "25–26 specific conditions", "Any illness or injury"],
            ["Use restrictions", "None — use however you want", "None — replaces income"],
            ["Tax status", "Tax-free", "Tax-free (if personally paid)"],
            ["Best for", "Immediate financial shock", "Ongoing income replacement"],
          ]}
        />
      </ContentSection>

      <InlineCTA text="Compare CI + Disability Bundle" href="mailto:sahil280389@gmail.com?subject=CI%20and%20Disability%20Bundle%20Quote" />

      <ContentSection title="How Much Does Critical Illness Insurance Cost?">
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

      <ContentSection title="How to Get the Best Critical Illness Rate">
        <ProsList items={[
          "Apply before age 35 — premiums nearly double for every decade you wait",
          "Choose a policy without ROP if budget is tight — you save 40% on premiums",
          "Bundle CI with your life insurance policy for multi-policy discounts (10–15% savings)",
          "Use an independent broker to compare CI plans from Manulife, Sun Life, Canada Life, and more",
          "Consider a 10-year renewable CI policy to start — you can convert to a longer term later",
          "If you're healthy with no family history, fully underwritten policies offer better rates than simplified issue",
        ]} />
      </ContentSection>

      <ContentSection title="5 Mistakes to Avoid with Critical Illness Insurance">
        <ContentH3>Mistake #1: Thinking OHIP is enough</ContentH3>
        <ContentParagraph>
          OHIP covers hospital care. It does NOT cover your mortgage, groceries, childcare, or the $4,800 in drugs not on the provincial formulary. CI insurance fills this massive gap.
        </ContentParagraph>
        <ContentH3>Mistake #2: Confusing CI with disability insurance</ContentH3>
        <ContentParagraph>
          <Link to="/disability-insurance" className="text-primary font-semibold hover:underline">Disability insurance</Link> pays monthly income if you can't work from ANY cause. CI pays a one-time lump sum for specific diagnoses. You likely need both — they solve different problems.
        </ContentParagraph>
        <ContentH3>Mistake #3: Choosing too little coverage</ContentH3>
        <ContentParagraph>
          $25,000 won't cover 6 months of lost income plus out-of-pocket medical costs in Ontario. Aim for at least $50,000–$100,000 — enough to cover 12–18 months of expenses.
        </ContentParagraph>
        <ContentH3>Mistake #4: Ignoring the survival period</ContentH3>
        <ContentParagraph>
          Most CI policies require you to survive 30 days after diagnosis before payout. This is standard across all Canadian insurers — it's not a red flag, just something to be aware of.
        </ContentParagraph>
        <ContentH3>Mistake #5: Not considering family history</ContentH3>
        <ContentParagraph>
          If cancer or heart disease runs in your family, CI insurance becomes even more valuable. Apply while you're healthy — once you're diagnosed with a covered condition, you can never get CI coverage again.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Speak to a CI Specialist" href="mailto:sahil280389@gmail.com?subject=Critical%20Illness%20Specialist%20Consultation" />

      <ContentSection title="Pros and Cons">
        <ProsList items={[
          "Lump-sum payout is tax-free and can be used for anything",
          "Return of Premium option makes it a win-win",
          "Covers 25+ conditions beyond just cancer",
          "Can be bundled with life insurance for savings",
          "Pays even if you can still work (unlike disability)",
        ]} />
        <ConsList items={[
          "Premiums increase significantly with age",
          "Only pays out once (one covered condition per policy)",
          "Survival period requirement (usually 30 days after diagnosis)",
          "Pre-existing conditions are excluded",
          "Doesn't provide ongoing monthly income (use disability for that)",
        ]} />
      </ContentSection>

      <FAQSection faqs={[
        { question: "What's the difference between critical illness and disability insurance?", answer: "Critical illness pays a one-time lump sum upon diagnosis of a covered condition. Disability insurance provides monthly income replacement if you can't work due to any illness or injury. They complement each other—critical illness for the immediate financial shock, disability for ongoing income loss." },
        { question: "Is critical illness insurance worth it in Canada?", answer: "1 in 2 Canadians will develop cancer in their lifetime. If you're the primary earner and don't have 6+ months of savings, critical illness insurance provides a crucial financial safety net. The return of premium option also means you get your money back if you stay healthy." },
        { question: "Can I get critical illness insurance if I've had cancer?", answer: "Generally no—cancer is a standard exclusion if you've been previously diagnosed. However, some simplified-issue products may offer limited coverage after a cancer-free waiting period of 5–10 years. An independent broker can help you find options." },
        { question: "How much critical illness insurance do I need?", answer: "A common recommendation is 1–2 years of after-tax income. Most Canadians choose $50,000–$100,000. Consider your monthly expenses, mortgage payments, potential treatment costs, and how long you might be unable to work." },
        { question: "What is the survival period for critical illness insurance?", answer: "Most policies require you to survive 30 days after diagnosis before the benefit is paid. This is a standard industry requirement across all Canadian critical illness insurers." },
        { question: "Can I have both critical illness and disability insurance?", answer: "Yes, and most advisors recommend it. CI gives you a lump sum for immediate costs upon diagnosis. Disability insurance provides ongoing monthly income if you can't work. Together, they create comprehensive income protection." },
      ]} />
    </PillarPageLayout>
  );
};

export default CriticalIllnessPage;
