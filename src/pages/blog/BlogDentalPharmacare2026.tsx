import BlogArticleLayout from "@/components/BlogArticleLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA, FAQSection } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const BlogDentalPharmacare2026 = () => (
  <BlogArticleLayout
    title="Canada's Dental Care & Pharmacare in 2026: What's Covered and What's Not"
    metaTitle="Canadian Dental Care & Pharmacare 2026: Coverage Gaps & Private Insurance | InsuredCan"
    metaDescription="Complete guide to Canada's dental care plan and pharmacare program in 2026. Learn what's covered, who qualifies, coverage gaps, and why private health insurance still matters."
    slug="dental-pharmacare-canada-2026"
    category="Health"
    author="InsuredCan Advisory Team"
    date="April 14, 2026"
    readTime="12 min read"
  >
    <QuickAnswerBox
      question="Does Canada have free dental care and pharmacare in 2026?"
      answer="Canada's dental care plan (CDCP) covers basic dental services for uninsured Canadians with family income under $90,000, but excludes cosmetic, orthodontic, and many restorative procedures. National pharmacare is rolling out in phases — starting with diabetes and contraception coverage. Neither program replaces comprehensive private health insurance. Most working-age Canadians still need private coverage to fill significant gaps."
    />

    <KeyTakeaways items={[
      "The Canadian Dental Care Plan (CDCP) covers cleanings, fillings, extractions, and dentures for eligible Canadians",
      "Eligibility: no private dental insurance + family income under $90,000 — most employed Canadians don't qualify",
      "National pharmacare Phase 1 covers diabetes medications and contraception only",
      "OHIP still doesn't cover dental (ages 18+), vision (ages 20–64), or most prescriptions (ages 25–64)",
      "Private health insurance remains essential for comprehensive coverage including specialists, paramedical services, and prescription drugs",
      "Self-employed Canadians can deduct private health premiums through a Health Spending Account (HSA)",
    ]} />

    <ContentSection title="Canadian Dental Care Plan (CDCP) in 2026">
      <ContentH3>Who Qualifies?</ContentH3>
      <ContentParagraph>
        The CDCP is designed for Canadians who <strong>lack private dental insurance</strong>. Eligibility requirements for 2026:
      </ContentParagraph>
      <ProsList items={[
        "Canadian resident with valid provincial health card",
        "No access to private dental insurance (employer, spousal, or individual)",
        "Adjusted family net income under $90,000",
        "Filed a Canadian tax return for the previous year",
        "Not covered by existing federal, provincial, or territorial dental programs",
      ]} />
      <InfoCard title="📊 Income-Based Co-Pay Structure">
        <strong>Under $70,000:</strong> No co-pays — fully covered services are free. <strong>$70,000–$79,999:</strong> 40% co-pay on covered services. <strong>$80,000–$89,999:</strong> 60% co-pay on covered services.
      </InfoCard>

      <ContentH3>What's Covered?</ContentH3>
      <ComparisonTable
        headers={["Service", "Covered by CDCP?", "Covered by Private Insurance?"]}
        rows={[
          ["Cleanings (1–2 per year)", "✅ Yes", "✅ Yes (usually 2 per year)"],
          ["X-rays", "✅ Yes", "✅ Yes"],
          ["Fillings", "✅ Yes", "✅ Yes"],
          ["Extractions", "✅ Yes", "✅ Yes"],
          ["Dentures", "✅ Yes (basic)", "✅ Yes (often 50–70% coverage)"],
          ["Root canals", "✅ Limited", "✅ Yes (usually 50–80%)"],
          ["Crowns & bridges", "❌ Limited/No", "✅ Yes (usually 50%)"],
          ["Orthodontics (braces)", "❌ No", "✅ Yes ($2,000–$4,000 lifetime max)"],
          ["Cosmetic dentistry", "❌ No", "❌ Rarely covered"],
          ["Implants", "❌ No", "✅ Some plans (50% up to $3,000)"],
          ["Teeth whitening", "❌ No", "❌ No"],
        ]}
      />

      <ContentH3>What CDCP Doesn't Cover</ContentH3>
      <ContentParagraph>
        The CDCP is designed for <strong>preventive and basic restorative care</strong>. It does NOT cover orthodontics ($5,000–$8,000 for braces), dental implants ($3,000–$6,000 each), cosmetic procedures, or advanced restorative work. Families needing these services still require <Link to="/health-insurance" className="text-primary hover:underline">private health insurance</Link>.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="National Pharmacare: Phase 1 in 2026">
      <ContentParagraph>
        Canada's national pharmacare program launched with <strong>Phase 1 coverage</strong> focused on two categories:
      </ContentParagraph>
      <ComparisonTable
        headers={["Category", "Medications Covered", "Who Benefits"]}
        rows={[
          ["Diabetes", "Insulin, metformin, GLP-1 agonists, glucose test strips, pump supplies", "3.7 million Canadians with diabetes"],
          ["Contraception", "Oral contraceptives, IUDs, hormonal implants, emergency contraception", "9+ million Canadians of reproductive age"],
        ]}
      />
      <ContentParagraph>
        While this is a meaningful start, pharmacare Phase 1 covers only <strong>2 of the approximately 10,000+</strong> prescription medications Canadians use. Common medications for conditions like high blood pressure, cholesterol, anxiety, depression, asthma, arthritis, and pain management are NOT covered by national pharmacare and require either provincial drug plans, employer benefits, or private insurance.
      </ContentParagraph>
      <InfoCard title="💊 Average Canadian Prescription Drug Costs">
        Canadians without drug coverage spend an average of $800–$1,500/year on prescription medications out-of-pocket. For those with chronic conditions, costs can reach $3,000–$10,000+ annually. Private health insurance typically covers 80% of prescription costs with an annual maximum of $5,000–$25,000.
      </InfoCard>
    </ContentSection>

    <ContentSection title="OHIP Coverage Gaps in 2026">
      <ContentParagraph>
        Despite dental care and pharmacare expansions, Ontario's OHIP continues to have significant gaps. Here's what <Link to="/blog/what-ohip-doesnt-cover" className="text-primary hover:underline">OHIP doesn't cover</Link> in 2026:
      </ContentParagraph>
      <ComparisonTable
        headers={["Service", "OHIP Coverage", "Typical Out-of-Pocket Cost"]}
        rows={[
          ["Prescription drugs (ages 25–64)", "❌ Not covered", "$800–$1,500/year average"],
          ["Dental care (ages 18+)", "❌ Not covered", "$300–$800/year for basics"],
          ["Vision care (ages 20–64)", "❌ Not covered", "$200–$600/year"],
          ["Physiotherapy (private clinic)", "❌ Not covered", "$70–$120 per session"],
          ["Psychologist/therapist", "❌ Not covered", "$180–$250 per session"],
          ["Massage therapy", "❌ Not covered", "$80–$120 per session"],
          ["Chiropractic care", "❌ Not covered", "$50–$80 per session"],
          ["Ambulance fees", "Partial ($240+ per call)", "$240–$800 out-of-pocket"],
          ["Semi-private hospital room", "❌ Not covered", "$250–$400 per night"],
          ["Medical care outside Canada", "❌ Not covered", "$3,000–$500,000+"],
        ]}
      />
      <ContentParagraph>
        A comprehensive private health plan from <strong>$80–$180/month</strong> covers 80% of these costs. For <Link to="/families" className="text-primary hover:underline">families</Link>, this represents significant savings compared to paying out-of-pocket, especially for children's dental (orthodontics alone: $5,000–$8,000) and prescription medications.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Who Still Needs Private Health Insurance in 2026?">
      <ProsList items={[
        "Employed Canadians earning over $90,000 — not eligible for CDCP",
        "Anyone with private dental through work — ineligible for CDCP, but may need gap coverage",
        "Self-employed Canadians — no employer benefits, can deduct premiums via HSA",
        "Families with children needing orthodontics, specialists, or therapies",
        "Anyone using prescription medications beyond diabetes or contraception",
        "Canadians needing mental health services (psychologists, therapists)",
        "Newcomers during the OHIP 3-month waiting period",
        "Travellers and snowbirds needing medical coverage outside Canada",
      ]} />
      <InlineCTA text="Find out which private health plan fills your gaps" href="/contact" />
    </ContentSection>

    <ContentSection title="Private Health Insurance: Cost vs. Value in 2026">
      <ComparisonTable
        headers={["Plan Type", "Monthly Cost", "Typical Annual Benefit"]}
        rows={[
          ["Basic (drugs + dental)", "$80–$120/mo", "$3,000–$5,000 in covered services"],
          ["Standard (drugs + dental + vision + paramedical)", "$120–$180/mo", "$5,000–$10,000 in covered services"],
          ["Comprehensive (all above + enhanced dental)", "$180–$300/mo", "$10,000–$25,000 in covered services"],
          ["HSA for self-employed", "$100–$250/mo (tax-deductible)", "$1,200–$3,000 per family member"],
        ]}
      />
      <ContentParagraph>
        For <Link to="/self-employed" className="text-primary hover:underline">self-employed Canadians</Link>, a Health Spending Account (HSA) is particularly tax-efficient — you deduct 100% of health expenses as a business cost. Combined with basic catastrophic coverage, this is often the most cost-effective approach.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Provincial Drug Plans: A Patchwork System">
      <ContentParagraph>
        Until national pharmacare expands, prescription drug coverage varies dramatically by province:
      </ContentParagraph>
      <ComparisonTable
        headers={["Province", "Drug Program", "Key Features"]}
        rows={[
          ["Ontario", "Ontario Drug Benefit (ODB)", "Free for 65+, social assistance; OHIP+ covers ages 0–24"],
          ["British Columbia", "Fair PharmaCare", "Income-based deductible + 30% co-pay"],
          ["Alberta", "Non-Group Coverage", "Premium-based ($63.50/mo individual) + 30% co-pay"],
          ["Quebec", "RAMQ Drug Insurance", "Mandatory — must have private or public coverage"],
          ["Manitoba", "Pharmacare", "Income-based deductible, covers eligible drugs after deductible"],
        ]}
      />
      <ContentParagraph>
        Quebec is unique — it legally requires all residents to have prescription drug coverage, either through an employer plan or the public RAMQ program. Other provinces offer safety-net coverage but leave significant gaps for working-age adults without employer benefits.
      </ContentParagraph>
    </ContentSection>

    <FAQSection faqs={[
      { question: "Is dental care free in Canada in 2026?", answer: "Not universally. The Canadian Dental Care Plan (CDCP) covers basic dental services for uninsured Canadians with family income under $90,000. If you have private dental insurance through an employer or personal plan, you're not eligible. The CDCP also doesn't cover orthodontics, implants, or cosmetic dentistry. Most working Canadians still need private dental coverage." },
      { question: "Does pharmacare cover all prescription drugs in Canada?", answer: "No. National pharmacare Phase 1 (2026) covers only diabetes medications and contraception. The vast majority of prescriptions — including those for blood pressure, cholesterol, anxiety, depression, pain, and asthma — are not yet covered. You still need private insurance or provincial drug plan coverage for most medications." },
      { question: "Do I still need private health insurance with CDCP and pharmacare?", answer: "Yes, for most Canadians. CDCP only covers basic dental for those without private insurance and earning under $90,000. Pharmacare covers only 2 medication categories. OHIP still doesn't cover vision, most prescriptions, paramedical services, or mental health therapy. Private insurance fills these gaps for $80–$180/month." },
      { question: "What's the best health insurance for self-employed Canadians in 2026?", answer: "A combination of a Health Spending Account (HSA) for tax-deductible everyday health expenses, plus a basic private health plan for catastrophic coverage. Self-employed individuals can deduct HSA contributions as a business expense, making it the most tax-efficient approach. Budget $150–$300/month for comprehensive coverage." },
      { question: "Does OHIP cover prescriptions for adults in Ontario?", answer: "OHIP+ covers prescription drugs for children and youth ages 0–24. Adults aged 25–64 must pay out-of-pocket or have private insurance. The Ontario Drug Benefit (ODB) covers eligible drugs for seniors 65+, social assistance recipients, and those in long-term care. Most working-age Ontarians need private drug coverage." },
    ]} />
  </BlogArticleLayout>
);

export default BlogDentalPharmacare2026;