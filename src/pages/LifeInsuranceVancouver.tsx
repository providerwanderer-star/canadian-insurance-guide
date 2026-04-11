import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const LifeInsuranceVancouver = () => (
  <LocationPageLayout
    city="Vancouver"
    province="British Columbia"
    metaTitle="Life Insurance Vancouver (2026): Compare Plans & Save Up to 40% | InsuredCan"
    metaDescription="Compare the best life insurance in Vancouver, BC. Get instant quotes from 20+ insurers, expert advice from licensed BC advisors, and save on premiums today."
    slug="life-insurance-vancouver"
    heroHeadline="Life Insurance for Vancouver Families & Professionals (2026)"
    heroDescription="Vancouver ranks as Canada's most expensive city, with average household incomes of $85,000–$110,000 struggling against $1.3M+ home prices. A single lost income can mean losing your home. Compare life insurance from 20+ top Canadian insurers — free, no obligation."
    ogImage="https://www.insuredcan.ca/og/og-vancouver.png"
    localContent={
      <>
        <ContentSection title="Why Vancouver Families Can't Afford to Go Uninsured">
          <ContentParagraph>
            Vancouver's median household income sits around $85,000, yet the average detached home exceeds <strong>$1.9 million</strong> and even condos average $770,000 (2025 data). This extreme affordability gap means most families carry mortgages of $500K–$1.5M — making life insurance not a luxury, but a necessity.
          </ContentParagraph>
          <ContentParagraph>
            Consider a typical scenario: a dual-income couple in East Vancouver earning a combined $140,000 with a $900,000 mortgage. If one partner passes away, the surviving spouse faces $4,200/month in mortgage payments alone — roughly 70% of a single income. A $1M <Link to="/term-life-insurance" className="text-primary underline font-semibold">term life insurance</Link> policy costing just $35–$58/month prevents financial catastrophe.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="What Life Insurance Actually Costs in Vancouver (2026)">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$1M Term (20yr)", "$500K Whole Life"]}
            rows={[
              ["30-year-old, non-smoker", "$22–$28/mo", "$35–$45/mo", "$185–$240/mo"],
              ["35-year-old, non-smoker", "$26–$36/mo", "$44–$58/mo", "$220–$310/mo"],
              ["40-year-old, non-smoker", "$36–$50/mo", "$60–$82/mo", "$310–$430/mo"],
              ["45-year-old, non-smoker", "$58–$78/mo", "$95–$128/mo", "$420–$580/mo"],
              ["50-year-old, non-smoker", "$88–$115/mo", "$155–$210/mo", "$560–$780/mo"],
            ]}
          />
          <ContentParagraph>
            BC has no provincial premium tax on life insurance, unlike Ontario's 2% tax. This means Vancouver residents pay slightly less in total costs than Toronto residents for identical coverage. Given Metro Vancouver's property values, most financial advisors recommend <strong>$1M+ in coverage</strong> to adequately protect a mortgage and replace 10 years of income.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="🏠 Vancouver Housing Reality Check">
          The average Vancouver homeowner has a $650,000+ mortgage balance. Bank mortgage insurance only covers the declining loan balance and pays the lender — not your family. A personal <Link to="/term-life-insurance" className="text-primary underline font-semibold">term life policy</Link> provides level coverage, is fully portable between lenders, and puts the full payout directly in your beneficiary's hands. For a 35-year-old, it's often 15–30% cheaper than bank mortgage insurance too.
        </InfoCard>

        <ContentSection title="Insurance Options Ranked for Vancouver Residents">
          <ProsList items={[
            "Term Life Insurance — Best value for mortgage protection; 20-year term covers your amortization period at $26–$58/month for $500K",
            "Whole Life Insurance — Permanent coverage with tax-sheltered cash value; ideal for estate planning in BC's high-asset market",
            "Critical Illness Insurance — Tax-free lump sum ($50K–$500K) for cancer, heart attack, or stroke; covers treatment gaps not paid by MSP",
            "Disability Insurance — Replaces 60–85% of income; essential for self-employed tech workers and contractors in Vancouver",
            "Super Visa Insurance — Required coverage for parents/grandparents visiting from abroad; popular among Vancouver's immigrant families",
            "Health & Dental Insurance — Fills MSP gaps including prescription drugs ($2,000–$5,000/year average out-of-pocket), dental, and paramedical services",
          ]} />
        </ContentSection>

        <ContentSection title="Vancouver's Key Industries & Insurance Needs">
          <ContentParagraph>
            <strong>Tech sector (Amazon, Microsoft, SAP):</strong> Vancouver's tech workers earn $90,000–$180,000+ but often as contractors without group benefits. Personal <Link to="/disability-insurance" className="text-primary underline font-semibold">disability insurance</Link> and <Link to="/life-insurance" className="text-primary underline font-semibold">life insurance</Link> are critical since employer coverage ends with your contract.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Film & entertainment industry:</strong> Vancouver is "Hollywood North" — but IATSE and ACFC members often have gaps between productions. Personal insurance provides continuous coverage regardless of shooting schedules.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Healthcare workers:</strong> BC's healthcare system employs thousands across Vancouver Coastal Health. While group benefits exist, they typically cover only 1–2x salary — far below the 10–12x recommended by financial planners.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Real estate professionals:</strong> Self-employed realtors and mortgage brokers need personal coverage since no employer provides benefits. With Vancouver's commission-based income, <Link to="/insurance-self-employed" className="text-primary underline font-semibold">self-employed insurance</Link> is essential.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="🌊 BC-Specific: What MSP Doesn't Cover">
          BC's Medical Services Plan covers hospital and doctor visits, but <strong>not</strong> prescription drugs ($2,000–$5,000/year average), dental ($1,500–$3,000/year), vision, physiotherapy, or mental health counseling. A supplemental <Link to="/health-insurance" className="text-primary underline font-semibold">health insurance</Link> plan fills these gaps for $80–$200/month per family. Learn more about <Link to="/compare/private-vs-ohip" className="text-primary underline font-semibold">private vs. public health coverage</Link>.
        </InfoCard>

        <ContentSection title="Serving All Metro Vancouver & Lower Mainland">
          <ContentParagraph>
            InsuredCan serves families across Greater Vancouver including <strong>Burnaby</strong> (avg. home: $1.1M), <strong>Richmond</strong> ($1.2M), <strong>Coquitlam</strong> ($950K), <strong>North Vancouver</strong> ($1.5M), <strong>West Vancouver</strong> ($2.8M), <strong>Delta</strong> ($1M), <strong>Langley</strong> ($850K), <strong>Abbotsford</strong> ($680K), and the <strong>Tri-Cities</strong>. Our licensed BC advisors provide virtual consultations across the entire province — no in-person meeting required.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="BC Insurance Regulations You Should Know">
          <ContentParagraph>
            In British Columbia, insurance advisors are regulated by the <strong>BC Financial Services Authority (BCFSA)</strong>. InsuredCan's advisors hold valid BC life and health insurance licences. Key BC-specific rules: beneficiary designations follow the Wills, Estates and Succession Act; insurance proceeds are generally creditor-protected; and BC residents can name irrevocable beneficiaries for extra asset protection.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      {
        question: "How much does life insurance cost in Vancouver in 2026?",
        answer: "A healthy 35-year-old non-smoker pays $26–$36/month for $500K of 20-year term coverage. BC has no provincial premium tax, so Vancouver residents pay slightly less than Ontario residents for identical policies. Compare 20+ insurers free with InsuredCan."
      },
      {
        question: "How much life insurance do I need in Vancouver?",
        answer: "Given Metro Vancouver's $1.3M+ average home prices, most families need $1M–$2M in coverage. Calculate 10–12x your annual income plus your outstanding mortgage balance. InsuredCan offers a free needs analysis."
      },
      {
        question: "Do I need a BC-licensed insurance advisor?",
        answer: "Yes. BC law requires life insurance advisors to hold a valid licence from the BC Financial Services Authority (BCFSA). All InsuredCan advisors serving Vancouver clients are fully BCFSA-licensed."
      },
      {
        question: "Is bank mortgage insurance worth it in Vancouver?",
        answer: "Usually not. Bank mortgage insurance costs more, only covers the declining loan balance, and pays the bank — not your family. A personal term life policy is portable, provides level coverage, and typically saves 15–30% versus bank mortgage insurance."
      },
      {
        question: "Can newcomers to BC get life insurance?",
        answer: "Yes. Most Canadian insurers issue policies to permanent residents and work permit holders. Some require 12 months of Canadian residency. During BC's MSP waiting period, critical illness or private health insurance provides important bridge coverage."
      },
      {
        question: "What does MSP not cover in British Columbia?",
        answer: "BC's MSP excludes dental care, prescription drugs, vision, physiotherapy, chiropractic, massage therapy, and private hospital rooms. A supplemental health insurance plan fills these gaps for $80–$200/month per family."
      }
    ]}
  />
);

export default LifeInsuranceVancouver;
