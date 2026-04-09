import BlogArticleLayout from "@/components/BlogArticleLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ComparisonTable, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA, FAQSection } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const BlogInsuranceMistakesCanadians = () => (
  <BlogArticleLayout
    title="Top 10 Insurance Mistakes Canadians Make (And How to Avoid Them)"
    metaTitle="10 Biggest Insurance Mistakes Canadians Make (2026) | InsuredCan"
    metaDescription="Avoid these 10 costly insurance mistakes that Canadians make. From buying bank mortgage insurance to under-insuring, learn how to protect your family properly."
    slug="top-insurance-mistakes-canadians"
    category="Insurance Tips"
    publishDate="April 9, 2026"
    readTime="11 min read"
  >
    <QuickAnswerBox
      question="What are the biggest insurance mistakes Canadians make?"
      answer="The top 3 mistakes: (1) buying overpriced bank mortgage insurance instead of term life, (2) relying solely on employer group coverage that ends when you leave, and (3) waiting too long to apply — every year of delay adds 8–10% to premiums."
    />

    <KeyTakeaways items={[
      "Bank mortgage insurance costs 20–40% more than a personal term life policy",
      "Employer group life insurance typically covers only 1–2x salary — far below recommended 10–15x",
      "Waiting from age 25 to 35 to apply can cost $15,000–$25,000 more over your lifetime",
      "Not naming a beneficiary means insurance proceeds go through probate (costly and slow)",
      "Letting a policy lapse during financial stress loses years of premium payments",
    ]} />

    <ContentSection title="Mistake #1: Buying Bank Mortgage Insurance">
      <ContentParagraph>
        This is the most expensive mistake Canadians make. When you sign your mortgage, the bank offers mortgage insurance — and most people say yes without comparing options. The reality: bank mortgage insurance costs <strong>20–40% more</strong> than a personal <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">term life policy</Link>, pays the bank (not your family), and decreases as your mortgage shrinks while premiums stay the same.
      </ContentParagraph>
      <ComparisonTable
        headers={["Feature", "Bank Mortgage Insurance", "Personal Term Life"]}
        rows={[
          ["Monthly cost ($500K mortgage, age 35)", "$85–$110/mo", "$25–$35/mo"],
          ["Beneficiary", "The bank", "Your family"],
          ["Coverage over time", "Decreases with mortgage", "Stays level"],
          ["Portable?", "No", "Yes — follows you anywhere"],
          ["Medical underwriting", "At claim time (!)", "At application (safer)"],
        ]}
      />
      <ContentParagraph>
        <strong>The fix:</strong> Decline bank mortgage insurance and get a personal term life policy through an <Link to="/insurance-broker-canada" className="text-primary font-semibold hover:underline">independent broker</Link>. You'll save thousands and get better coverage.
      </ContentParagraph>
    </ContentSection>

    <InlineCTA text="Compare Better Options Free" href="/contact" />

    <ContentSection title="Mistake #2: Relying Only on Employer Group Coverage">
      <ContentParagraph>
        Employer group life insurance is a great benefit — but it's not enough. Most plans cover only <strong>1–2x your annual salary</strong>. For someone earning $80,000, that's $80K–$160K in coverage. With a $700K mortgage, that leaves a <strong>$540K+ gap</strong>.
      </ContentParagraph>
      <ContentParagraph>
        Worse: group coverage <strong>ends when you leave your job</strong>. If you change careers, get laid off, or retire, you lose your coverage — and may not qualify for a new personal policy if your health has changed.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Mistake #3: Waiting Too Long to Apply">
      <ContentParagraph>
        Every year you wait adds approximately <strong>8–10% to your premium</strong>. A 25-year-old pays $15/month for $500K of term coverage. The same policy at 35 costs $25/month. At 45, it's $55/month. Over 20 years, waiting from 25 to 35 costs an extra <strong>$2,400+</strong>.
      </ContentParagraph>
      <InfoCard title="The Math of Waiting">
        Applying at 25: $15/mo × 240 months = $3,600 total. Applying at 35: $25/mo × 240 months = $6,000 total. Applying at 45: $55/mo × 240 months = $13,200 total. Same $500K coverage — vastly different lifetime costs.
      </InfoCard>
    </ContentSection>

    <ContentSection title="Mistake #4: Under-Insuring Your Family">
      <ContentParagraph>
        Many Canadians carry just $100K–$250K in coverage because "it seems like a lot." In reality, $250K covers only 3–4 years of expenses for a typical Ontario family. Financial planners recommend <strong>10–15x your annual income</strong> — enough to replace your earning power for a decade.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Mistake #5: Not Naming a Beneficiary (or Naming 'Estate')">
      <ContentParagraph>
        If you name "estate" as your beneficiary instead of a specific person, insurance proceeds go through <strong>Ontario probate</strong> — costing 1.5% in Estate Administration Tax and taking months to distribute. A $1M policy loses $15,000+ to probate. Always name a specific beneficiary.
      </ContentParagraph>
    </ContentSection>

    <InlineCTA text="Get Expert Advice Free" href="/contact" />

    <ContentSection title="Mistake #6: Ignoring Critical Illness Insurance">
      <ContentParagraph>
        <strong>1 in 2 Canadians</strong> will be diagnosed with cancer. <Link to="/critical-illness-insurance" className="text-primary font-semibold hover:underline">Critical illness insurance</Link> pays a tax-free lump sum if you're diagnosed with cancer, heart attack, or stroke. OHIP covers hospital bills, but not lost income, childcare, or mortgage payments during recovery.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Mistake #7: Letting a Policy Lapse During Financial Stress">
      <ContentParagraph>
        When finances get tight, some Canadians cancel their life insurance to save money. This is backwards — financial stress is exactly when your family needs protection most. Most insurers offer options: payment holidays, reduced paid-up coverage, or policy loans from whole life cash value.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Mistakes #8–10: Quick Hits">
      <ProsList items={[
        "#8: Not reviewing coverage after major life events (marriage, baby, home purchase, divorce)",
        "#9: Choosing the cheapest policy without comparing riders and conversion privileges",
        "#10: Not using a broker — banks and direct channels offer fewer options at higher prices",
      ]} />
    </ContentSection>

    <FAQSection faqs={[
      { question: "Is bank mortgage insurance really that bad?", answer: "For most Canadians, yes. It costs 20–40% more than a personal term policy, pays the bank (not your family), decreases over time, and isn't portable. The only advantage is convenience — which isn't worth the extra cost." },
      { question: "How much life insurance do most Canadians actually need?", answer: "Financial planners recommend 10–15x your annual income. For a household earning $100,000 with a $700K mortgage, that's $1M–$1.5M. Most Canadians are significantly under-insured." },
      { question: "Can I fix these mistakes if I already have a policy?", answer: "Yes. You can apply for a new, better-suited policy before cancelling your old one. If you have bank mortgage insurance, you can replace it with a personal term policy and save immediately." },
      { question: "Should I use a broker or buy directly from an insurer?", answer: "Use a broker. An independent broker compares 20+ insurers at no cost to you — the insurance company pays their commission. Direct channels (banks, online-only) offer fewer options and often higher prices." },
      { question: "What if I can't afford the recommended coverage amount?", answer: "Some coverage is better than none. Start with what you can afford and increase as your income grows. A $250K policy at $14/month is infinitely better than no coverage at all." },
      { question: "How often should I review my life insurance?", answer: "Review annually and after any major life event: marriage, divorce, baby, home purchase, salary increase, or job change. Your coverage needs change as your financial situation evolves." },
    ]} />
  </BlogArticleLayout>
);

export default BlogInsuranceMistakesCanadians;
