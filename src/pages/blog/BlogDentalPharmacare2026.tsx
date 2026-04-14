import BlogArticleLayout from "@/components/BlogArticleLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ComparisonTable, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA, FAQSection } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const BlogDentalPharmacare2026 = () => (
  <BlogArticleLayout
    title="Canada's Dental Care & Pharmacare in 2026: What's Covered and What's Not"
    metaTitle="Canada Dental Care & Pharmacare 2026: Gaps & Private Insurance | InsuredCan"
    metaDescription="CDCP eligibility, pharmacare Phase 1 coverage, OHIP gaps, and why most Canadians still need private health insurance in 2026. Expert breakdown of what's covered."
    slug="dental-pharmacare-canada-2026"
    category="Health"
    author="InsuredCan Advisory Team"
    date="April 14, 2026"
    readTime="12 min read"
  >
    <QuickAnswerBox
      question="Is dental care free in Canada in 2026?"
      answer="Not universally. The Canadian Dental Care Plan (CDCP) covers basic dental for Canadians without private dental insurance earning under $90,000 family income. Co-pays apply above $70,000. Orthodontics, implants, and cosmetic procedures are NOT covered. Most working Canadians with employer benefits are ineligible."
    />

    <KeyTakeaways items={[
      "The CDCP covers cleanings, fillings, extractions, and dentures — NOT orthodontics or implants",
      "You're ineligible for CDCP if you have private dental insurance through work",
      "Pharmacare Phase 1 only covers diabetes medications and contraception — nothing else",
      "The average Canadian without private coverage pays $800–$1,500/year out-of-pocket for prescriptions",
      "Provincial drug plans vary widely — Ontario's Trillium Drug Program has a $4,400 deductible",
      "Private health insurance fills the massive gaps in both CDCP and pharmacare",
    ]} />

    <ContentSection title="Canadian Dental Care Plan (CDCP): What It Actually Covers">
      <ContentParagraph>
        The CDCP launched in phases starting 2024 and is fully operational in 2026. It provides coverage for eligible Canadians who don't have access to private dental insurance. Here's the reality of what's covered:
      </ContentParagraph>
      <ComparisonTable
        headers={["Service", "CDCP Coverage", "Private Insurance", "Without Any Coverage"]}
        rows={[
          ["Cleanings (2/year)", "✅ Covered", "✅ Covered", "$200–$400/year"],
          ["Fillings", "✅ Covered", "✅ Covered", "$150–$400 each"],
          ["Extractions", "✅ Covered", "✅ Covered", "$150–$350 each"],
          ["Dentures", "✅ Covered", "✅ Covered", "$1,500–$4,000"],
          ["Root Canals", "✅ Covered", "✅ Covered (80%)", "$800–$1,500"],
          ["Crowns", "✅ Covered (basic)", "✅ Covered (50–80%)", "$1,000–$2,000"],
          ["Orthodontics (braces)", "❌ Not covered", "✅ Covered ($2K–$4K)", "$5,000–$8,000"],
          ["Dental Implants", "❌ Not covered", "✅ Covered (50%)", "$3,000–$6,000 each"],
          ["Cosmetic (whitening, veneers)", "❌ Not covered", "❌ Usually not covered", "$500–$2,000+"],
        ]}
      />
      <ContentH3>CDCP Eligibility Requirements</ContentH3>
      <ProsList items={[
        "Must be a Canadian resident with a valid provincial health card",
        "Adjusted family net income under $90,000",
        "Must NOT have access to private dental insurance (employer, spouse, or parent's plan)",
        "Co-pay structure: $0 co-pay under $70K income; 40% co-pay for $70K–$79,999; 60% co-pay for $80K–$89,999",
        "Must apply through Service Canada — coverage is not automatic",
      ]} />
    </ContentSection>

    <InlineCTA text="Find out which private health plan fills your gaps" href="/contact" />

    <ContentSection title="Pharmacare Phase 1: Diabetes & Contraception Only">
      <ContentParagraph>
        Canada's national pharmacare launched Phase 1 in 2026, covering a narrow set of medications. Despite the name, this is NOT universal drug coverage. Here's what's included — and what's not:
      </ContentParagraph>
      <ContentH3>What Pharmacare Phase 1 Covers</ContentH3>
      <ComparisonTable
        headers={["Category", "Covered Medications", "Estimated Retail Cost Without Coverage"]}
        rows={[
          ["Diabetes — Insulin", "All insulin types (rapid, long-acting, mixed)", "$300–$600/month"],
          ["Diabetes — Oral Medications", "Metformin, gliclazide, sitagliptin", "$30–$150/month"],
          ["Diabetes — GLP-1 Agonists", "Ozempic, Trulicity, Victoza", "$300–$500/month"],
          ["Diabetes — Glucose Supplies", "Test strips, lancets, CGM sensors", "$100–$400/month"],
          ["Contraception", "Oral contraceptives, IUDs, emergency contraception", "$20–$50/month"],
        ]}
      />
      <ContentH3>What Pharmacare Does NOT Cover</ContentH3>
      <ProsList items={[
        "Blood pressure medications (lisinopril, amlodipine, ramipril) — $20–$80/month",
        "Cholesterol medications (atorvastatin, rosuvastatin) — $30–$90/month",
        "Anxiety & depression medications (sertraline, escitalopram, venlafaxine) — $30–$120/month",
        "Asthma inhalers (Ventolin, Symbicort, Advair) — $30–$200/month",
        "Arthritis medications (methotrexate, biologics) — $50–$3,000/month",
        "Pain medications, antibiotics, allergy medications, and virtually everything else",
      ]} />
      <InfoCard title="The Gap Is Enormous">
        Pharmacare Phase 1 covers roughly 5% of prescription drug spending in Canada. The other 95% — including the most commonly prescribed medications — still require private insurance, provincial drug plans, or out-of-pocket payment.
      </InfoCard>
    </ContentSection>

    <ContentSection title="Provincial Drug Plans: A Patchwork System">
      <ContentParagraph>
        Each province has its own drug benefit program, but coverage, eligibility, and costs vary dramatically. Here's how the major provinces compare:
      </ContentParagraph>
      <ComparisonTable
        headers={["Province", "Program", "Deductible", "Coverage Level", "Who's Eligible"]}
        rows={[
          ["Ontario", "Trillium Drug Program", "~4% of income", "100% after deductible", "High drug costs relative to income"],
          ["Ontario", "OHIP+ (under 25)", "$0", "100%", "Under 25, no private insurance"],
          ["BC", "Fair PharmaCare", "Income-based", "70–100%", "All BC residents (must register)"],
          ["Alberta", "Non-Group Coverage", "$25K+/year", "70%", "Anyone not in group plan"],
          ["Quebec", "RAMQ Drug Plan", "$0–$710/year", "Variable", "Mandatory if no private plan"],
        ]}
      />
      <ContentParagraph>
        Ontario's <Link to="/blog/what-ohip-doesnt-cover" className="text-primary hover:underline">OHIP doesn't cover prescriptions</Link> for working-age adults (25–64) at all, unless they qualify for the Trillium Drug Program. Learn more about what's missing from provincial health coverage in our <Link to="/private-vs-ohip" className="text-primary hover:underline">private insurance vs. OHIP comparison</Link>.
      </ContentParagraph>
    </ContentSection>

    <InlineCTA text="Compare private health insurance plans for your family" href="/contact" />

    <ContentSection title="Why Private Health Insurance Still Matters in 2026">
      <ContentParagraph>
        Despite CDCP and pharmacare Phase 1, the gaps in government health coverage remain massive for most working Canadians:
      </ContentParagraph>
      <ComparisonTable
        headers={["Expense", "Government Coverage", "Private Insurance Coverage", "Out-of-Pocket Without Private"]}
        rows={[
          ["Prescription Drugs (non-diabetes)", "❌ Not covered", "✅ 80–100%", "$800–$1,500/year average"],
          ["Dental (orthodontics, implants)", "❌ Not covered", "✅ 50–80%", "$3,000–$8,000"],
          ["Vision (glasses, contacts)", "❌ Not covered (adults)", "✅ $200–$500/year", "$300–$600/year"],
          ["Physiotherapy", "❌ Limited", "✅ $500–$2,000/year", "$80–$120/session"],
          ["Mental Health (psychologist)", "❌ Not covered", "✅ $1,000–$5,000/year", "$150–$250/session"],
          ["Paramedical (massage, chiro)", "❌ Not covered", "✅ $500–$1,500/year", "$80–$120/session"],
          ["Private Hospital Room", "❌ Not covered", "✅ Covered", "$250–$400/night"],
        ]}
      />
      <ContentParagraph>
        A comprehensive private <Link to="/health-insurance" className="text-primary hover:underline">health insurance plan</Link> for an individual costs $80–$200/month and covers all the gaps above. For families, the value is even greater. If you're self-employed or between jobs, check our <Link to="/insurance-self-employed" className="text-primary hover:underline">self-employed insurance guide</Link>.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Who Needs Private Health Insurance in 2026?">
      <ProsList items={[
        "Anyone with employer benefits — your existing coverage likely exceeds CDCP and pharmacare combined",
        "Self-employed and gig workers — no employer plan means you're paying out of pocket for everything except diabetes meds and basic dental",
        "Families with children needing orthodontics — braces alone cost $5,000–$8,000",
        "Canadians taking any prescription medication other than diabetes or contraception",
        "Anyone seeing a psychologist, physiotherapist, or paramedical practitioner regularly",
        "New immigrants during the OHIP waiting period — bridge health insurance is essential",
      ]} />
      <ContentParagraph>
        <Link to="/blog/insurance-new-immigrants-canada" className="text-primary hover:underline">New immigrants</Link> face the biggest gaps: no OHIP for up to 3 months, no CDCP eligibility until they file taxes, and no pharmacare access without a health card. Bridge health insurance is critical.
      </ContentParagraph>
    </ContentSection>

    <FAQSection faqs={[
      { question: "Is dental care free in Canada in 2026?", answer: "Only basic dental (cleanings, fillings, extractions) is covered through CDCP for those without private insurance earning under $90K family income. Orthodontics, implants, and cosmetic work are not covered." },
      { question: "Does pharmacare cover all medications?", answer: "No — Phase 1 only covers diabetes medications and contraception. Blood pressure, cholesterol, anxiety, depression, asthma, arthritis, and most other prescriptions are NOT covered." },
      { question: "Can I have both CDCP and private dental insurance?", answer: "No. If you have access to private dental insurance (through work, spouse, or parent), you're ineligible for CDCP. You must choose one or the other." },
      { question: "How much does private health insurance cost in Canada?", answer: "Individual plans: $80–$200/month depending on age and coverage level. Family plans: $200–$500/month. This covers prescriptions, dental, vision, paramedical, and mental health — everything government plans don't." },
      { question: "What if I can't afford private health insurance?", answer: "Apply for CDCP (dental), your provincial drug plan (prescriptions), and check if you qualify for provincial premium assistance programs. An independent broker can find the most affordable plan for your situation — contact us for a free comparison." },
    ]} />
  </BlogArticleLayout>
);

export default BlogDentalPharmacare2026;
