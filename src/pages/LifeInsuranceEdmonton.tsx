import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const LifeInsuranceEdmonton = () => (
  <LocationPageLayout
    city="Edmonton"
    province="Alberta"
    metaTitle="Life Insurance Edmonton (2026): Compare Plans & Save Up to 40% | InsuredCan"
    metaDescription="Compare the best life insurance in Edmonton, AB. Get instant quotes from 20+ insurers, expert advice from licensed Alberta advisors, and save on premiums today."
    slug="life-insurance-edmonton"
    heroHeadline="Life Insurance for Edmonton Families & Public Sector Workers (2026)"
    heroDescription="Edmonton's 1.1 million residents enjoy Alberta's capital city amenities with more affordable housing than Calgary or Vancouver. With average home prices at $420,000 and median household income of $95,000, smart financial planning starts with life insurance. Compare 20+ insurers free."
    ogImage="https://www.insuredcan.ca/og/og-edmonton.png"
    localContent={
      <>
        <ContentSection title="Why Edmonton Families Need Life Insurance Now">
          <ContentParagraph>
            Edmonton is Alberta's government hub, home to the University of Alberta, major hospitals, and a growing tech scene. But Edmonton also has one of Canada's highest proportions of <strong>public sector workers</strong> — government employees, teachers, nurses, and first responders who often assume their employer benefits are sufficient. They rarely are.
          </ContentParagraph>
          <ContentParagraph>
            Real scenario: An Edmonton teacher earning $85,000/year with a $380,000 mortgage in Mill Woods. Their employer provides 2x salary ($170,000) in group life insurance — but financial planners recommend 10–12x income ($850K–$1M). That $680,000 gap means their family could lose their home. A <Link to="/term-life-insurance" className="text-primary underline font-semibold">$750K term life policy</Link> at just $28–$40/month closes that gap entirely.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Edmonton (2026 Rates)">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$1M Term (20yr)", "$750K Term (20yr)"]}
            rows={[
              ["30-year-old, non-smoker", "$20–$26/mo", "$33–$42/mo", "$28–$35/mo"],
              ["35-year-old, non-smoker", "$24–$33/mo", "$41–$54/mo", "$34–$45/mo"],
              ["40-year-old, non-smoker", "$34–$47/mo", "$57–$78/mo", "$48–$65/mo"],
              ["45-year-old, non-smoker", "$54–$73/mo", "$90–$122/mo", "$75–$100/mo"],
              ["50-year-old, non-smoker", "$82–$108/mo", "$148–$200/mo", "$120–$160/mo"],
            ]}
          />
          <ContentParagraph>
            Like <Link to="/life-insurance-calgary" className="text-primary underline font-semibold">Calgary</Link>, Edmonton benefits from <strong>Alberta's zero PST</strong> on insurance premiums. This tax advantage means Edmonton residents save $50–$150/year versus Ontario or Quebec residents on identical coverage — a meaningful savings over a 20-year term.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="🏛️ Public Sector Workers: Your Group Benefits Aren't Enough">
          Government of Alberta employees, AHS nurses, Edmonton Public/Catholic school teachers, and City of Edmonton workers all have group benefits. But group life insurance typically covers just 1–2x salary and <strong>ends at retirement or resignation</strong>. Personal coverage is locked in at your current health and age, is fully portable, and continues into retirement when you need it most.
        </InfoCard>

        <ContentSection title="Insurance Products for Edmonton Residents">
          <ProsList items={[
            "Term Life Insurance — Most affordable option; $500K–$1M coverage for $24–$54/month; perfect for mortgage and income protection",
            "Whole Life Insurance — Permanent coverage with guaranteed cash value; ideal for estate planning and wealth transfer",
            "Critical Illness Insurance — Tax-free lump sum ($50K–$500K) for cancer, heart attack, or stroke; complements Alberta Health Services",
            "Disability Insurance — Replaces 60–85% of income; essential for self-employed contractors and anyone without long-term disability through work",
            "Health & Dental Insurance — Fills AHS gaps: dental ($1,200–$2,500/year avg.), prescription drugs, vision, and paramedical services",
            "Retirement Income Planning — Universal life and whole life products provide tax-efficient supplemental retirement income",
          ]} />
        </ContentSection>

        <ContentSection title="Edmonton's Key Employment Sectors & Coverage Needs">
          <ContentParagraph>
            <strong>Government & public sector ($65K–$120K):</strong> Alberta's largest employer. Group benefits are good but not comprehensive — supplement with personal <Link to="/life-insurance" className="text-primary underline font-semibold">life insurance</Link> to close the coverage gap, especially for retirement continuity.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Healthcare (AHS, Covenant Health):</strong> Nurses, physicians, and support staff work demanding schedules. <Link to="/critical-illness-insurance" className="text-primary underline font-semibold">Critical illness insurance</Link> provides a financial cushion if you're diagnosed with a serious condition and need time off beyond sick leave.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Oil & gas services ($80K–$180K):</strong> Edmonton's industrial base includes refineries, pipeline companies, and service firms. Like <Link to="/life-insurance-calgary" className="text-primary underline font-semibold">Calgary energy workers</Link>, personal coverage is essential in a cyclical industry.
          </ContentParagraph>
          <ContentParagraph>
            <strong>University & research ($60K–$150K):</strong> The University of Alberta employs thousands. Academic staff often have good benefits, but contract instructors and post-docs frequently have minimal or no coverage.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="🏠 Edmonton Housing & Insurance Calculator">
          Average detached home: <strong>$420,000</strong> | Average condo: <strong>$195,000</strong> | Median household income: <strong>$95,000</strong> | No PST | Monthly living costs (family of 4): <strong>$5,000–$6,800</strong>. Edmonton's affordability means more families can afford comprehensive coverage — don't leave your family unprotected just because your mortgage seems manageable.
        </InfoCard>

        <ContentSection title="Serving All Edmonton & Capital Region">
          <ContentParagraph>
            InsuredCan serves families across the Edmonton Capital Region including <strong>St. Albert</strong> (pop. 70,000), <strong>Sherwood Park/Strathcona County</strong> (pop. 100,000), <strong>Spruce Grove</strong>, <strong>Leduc</strong>, <strong>Fort Saskatchewan</strong>, <strong>Beaumont</strong>, <strong>Stony Plain</strong>, and <strong>Devon</strong>. Our licensed Alberta advisors provide virtual consultations province-wide. We also serve <Link to="/life-insurance-calgary" className="text-primary underline font-semibold">Calgary</Link> and surrounding communities.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      {
        question: "How much does life insurance cost in Edmonton in 2026?",
        answer: "A healthy 35-year-old non-smoker pays $24–$33/month for $500K of 20-year term coverage. Alberta's zero PST on insurance means Edmonton residents save $50–$150/year versus Ontario or Quebec on identical policies."
      },
      {
        question: "How much life insurance do Edmonton families need?",
        answer: "With average home prices at $420,000, most Edmonton families need $500K–$1M in coverage. Calculate 10–12x your annual income plus outstanding debts. InsuredCan provides a free personalized needs analysis."
      },
      {
        question: "Are Edmonton government worker benefits enough?",
        answer: "Rarely. Government group life insurance covers 1–2x salary, far below the recommended 10–12x. Group coverage also ends at retirement or resignation. A personal policy provides continuous, portable protection at rates locked in while you're young."
      },
      {
        question: "Can I get life insurance with pre-existing health conditions in Edmonton?",
        answer: "Often yes. Many insurers cover conditions like controlled diabetes, past cancer, or mental health history — sometimes at standard rates. No-medical and simplified issue policies are also available. InsuredCan compares 20+ insurers to find your best option."
      },
      {
        question: "Is Edmonton cheaper for life insurance than Toronto?",
        answer: "Premiums are set nationally, but Alberta's zero PST saves Edmonton residents $50–$150/year versus Ontario's 2% premium tax. Combined with lower living costs, Edmonton families get more financial protection per dollar."
      },
      {
        question: "How fast can I get life insurance in Edmonton?",
        answer: "Most clients receive a quote within minutes. Simplified or no-medical policies can be approved in 1–5 business days. Fully underwritten policies with medical exams typically take 2–4 weeks."
      }
    ]}
  />
);

export default LifeInsuranceEdmonton;
