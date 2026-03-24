import BlogArticleLayout from "@/components/BlogArticleLayout";
import { ContentSection, ContentParagraph, ContentH3, ComparisonTable, FAQSection, InfoCard, ProsList, ConsList } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const BlogCriticalIllnessCoverage = () => (
  <BlogArticleLayout
    title="What Does Critical Illness Insurance Cover in Canada?"
    metaTitle="What Does Critical Illness Insurance Cover in Canada? (2026) | InsuredCan"
    metaDescription="Learn what critical illness insurance covers in Canada, including cancer, heart attack, and stroke. Understand benefits, costs, and real-life scenarios."
    slug="critical-illness-insurance-coverage-canada"
    category="Critical Illness"
    author="InsuredCan Team"
    date="2026-03-08"
    readTime="8 min read"
  >
    <ContentSection title="What Is Critical Illness Insurance?">
      <ContentParagraph>
        <Link to="/critical-illness-insurance" className="text-primary font-semibold hover:underline">Critical illness insurance</Link> pays a <strong>tax-free, lump-sum benefit</strong> if you're diagnosed with a covered serious illness. Unlike health insurance that pays doctors and hospitals, critical illness insurance pays <em>you</em>—and you can use the money however you need.
      </ContentParagraph>
      <InfoCard title="Key Fact">
        1 in 2 Canadians will develop cancer in their lifetime, and 1 in 4 will have a heart disease event. Critical illness insurance provides financial protection when you need it most.
      </InfoCard>
    </ContentSection>

    <ContentSection title="Illnesses Typically Covered">
      <ContentParagraph>
        Most Canadian critical illness policies cover 25–30 conditions. The "big three" account for approximately 85% of all claims:
      </ContentParagraph>
      <ContentH3>Core Conditions (Covered by All Policies)</ContentH3>
      <ProsList items={[
        "Cancer (excluding certain early-stage cancers) — #1 claim reason",
        "Heart attack (myocardial infarction) — #2 claim reason",
        "Stroke — #3 claim reason",
        "Coronary artery bypass surgery",
        "Kidney failure",
        "Major organ transplant",
      ]} />
      <ContentH3>Additional Conditions (Most Comprehensive Policies)</ContentH3>
      <ProsList items={[
        "Multiple sclerosis",
        "Parkinson's disease",
        "Alzheimer's disease",
        "Loss of limbs",
        "Blindness / Deafness",
        "Paralysis",
        "Severe burns",
        "Aortic surgery",
        "Benign brain tumour",
        "Motor neuron disease (ALS)",
        "Occupational HIV infection",
      ]} />
    </ContentSection>

    <ContentSection title="How Critical Illness Insurance Works">
      <ContentParagraph>
        You choose a coverage amount (e.g., $100,000), pay monthly premiums, and if you're diagnosed with a covered condition and survive the waiting period (usually 30 days), you receive the full lump sum. No receipts, no approvals—just a cheque.
      </ContentParagraph>
      <ComparisonTable
        headers={["Feature", "Basic Plan", "Enhanced Plan"]}
        rows={[
          ["Conditions covered", "3–5 core", "25–30 conditions"],
          ["Coverage amounts", "$25K–$100K", "$25K–$2M"],
          ["Partial payouts", "No", "Yes (early-stage)"],
          ["Return of premium", "No", "Available"],
          ["Monthly cost (age 35, $100K)", "$35–$55", "$65–$95"],
        ]}
      />
    </ContentSection>

    <ContentSection title="Real-Life Scenario: Sarah's Story">
      <ContentParagraph>
        Sarah, a 42-year-old marketing manager in Mississauga, was diagnosed with breast cancer. She had $75,000 in critical illness coverage. While OHIP covered her surgery and chemotherapy, the lump sum allowed her to:
      </ContentParagraph>
      <ProsList items={[
        "Take 8 months off work without financial stress",
        "Pay for private nursing care during recovery",
        "Cover parking, travel, and meals at the hospital",
        "Hire help for childcare and household tasks",
        "Pay her mortgage and bills without touching savings",
      ]} />
      <ContentParagraph>
        Without critical illness insurance, Sarah would have depleted her RRSP and gone into debt. The $75,000 payout gave her the freedom to focus entirely on recovery.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="What Critical Illness Insurance Does NOT Cover">
      <ConsList items={[
        "Pre-existing conditions diagnosed before the policy was issued",
        "Illnesses diagnosed during the waiting period (first 90 days)",
        "Certain early-stage cancers (some policies exclude DCIS, stage 1 prostate)",
        "Death within the survival period (usually 30 days after diagnosis)",
        "Self-inflicted injuries or conditions",
        "Conditions not listed in the policy's covered conditions",
      ]} />
    </ContentSection>

    <ContentSection title="Critical Illness vs. Disability Insurance">
      <ContentParagraph>
        These are complementary, not competing products. Critical illness pays a one-time lump sum for a specific diagnosis. <Link to="/disability-insurance" className="text-primary font-semibold hover:underline">Disability insurance</Link> pays monthly income if you can't work for any reason. Ideally, you should have both. <Link to="/compare/critical-illness-vs-disability" className="text-primary font-semibold hover:underline">Read our full comparison →</Link>
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="How Much Does Critical Illness Insurance Cost?">
      <ComparisonTable
        headers={["Age", "$50K Coverage", "$75K Coverage", "$100K Coverage"]}
        rows={[
          ["30", "$25–$35/mo", "$35–$50/mo", "$45–$65/mo"],
          ["35", "$30–$45/mo", "$45–$65/mo", "$55–$85/mo"],
          ["40", "$45–$65/mo", "$65–$95/mo", "$80–$120/mo"],
          ["45", "$65–$95/mo", "$95–$140/mo", "$120–$175/mo"],
          ["50", "$95–$140/mo", "$140–$210/mo", "$180–$270/mo"],
        ]}
      />
    </ContentSection>

    <FAQSection faqs={[
      { question: "Is critical illness insurance worth it in Canada?", answer: "If a serious illness would create financial hardship for you or your family, then yes. The lump sum covers lost income, out-of-pocket medical costs, childcare, and other expenses that OHIP doesn't cover." },
      { question: "Does OHIP cover critical illness expenses?", answer: "OHIP covers hospital stays, doctor visits, and most treatments, but does NOT cover lost income, prescription drugs, home care, transportation, childcare, or mortgage payments during recovery." },
      { question: "Can I get critical illness insurance if I've had cancer?", answer: "It's very difficult to get coverage for a pre-existing cancer diagnosis. Some insurers offer coverage after 5–10 years of being cancer-free, but with exclusions and higher premiums." },
      { question: "What happens if I never make a claim?", answer: "With a 'return of premium' rider, you get all your premiums back if you never claim (usually at age 65 or 75). Without this rider, it works like car insurance—you pay for protection but don't get money back if you don't claim." },
    ]} />
  </BlogArticleLayout>
);

export default BlogCriticalIllnessCoverage;
