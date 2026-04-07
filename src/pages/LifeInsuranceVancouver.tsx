import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";

const LifeInsuranceVancouver = () => (
  <LocationPageLayout
    city="Vancouver"
    province="British Columbia"
    metaTitle="Life Insurance Vancouver BC — Compare Quotes from 20+ Insurers | InsuredCan"
    metaDescription="Find the best life insurance rates in Vancouver, BC. Compare term & whole life quotes from licensed BC advisors. Free consultation for Vancouver families and professionals."
    slug="life-insurance-vancouver"
    heroHeadline="Life Insurance for Vancouver Families & Professionals"
    heroDescription="Vancouver's world-class lifestyle comes with world-class costs. Protect your family's financial future with affordable life insurance tailored to BC's cost of living. Compare quotes from 20+ top Canadian insurers — free, no obligation."
    localContent={
      <>
        <ContentSection title="Why Vancouver Residents Need Life Insurance">
          <ContentParagraph>
            With average home prices exceeding $1.3 million and one of Canada's highest costs of living, Vancouver families face unique financial risks. A single lost income can devastate a family's ability to maintain their mortgage, lifestyle, and children's education.
          </ContentParagraph>
          <ContentParagraph>
            Whether you're a tech professional in Yaletown, a healthcare worker in Burnaby, or raising a family in Surrey, the right life insurance policy ensures your loved ones are protected against the unexpected. InsuredCan's licensed BC advisors compare 20+ top insurers to find your best rate.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Vancouver">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$1M Term (20yr)"]}
            rows={[
              ["30-year-old, non-smoker", "$22–$28/mo", "$35–$45/mo"],
              ["35-year-old, non-smoker", "$26–$36/mo", "$44–$58/mo"],
              ["40-year-old, non-smoker", "$36–$50/mo", "$60–$82/mo"],
              ["45-year-old, non-smoker", "$58–$78/mo", "$95–$128/mo"],
            ]}
          />
          <ContentParagraph>
            Given Vancouver's high property values, many families opt for $1M+ coverage to fully protect their mortgage and ensure their dependants can maintain their standard of living.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Insurance Options for Vancouver Residents">
          <ProsList items={[
            "Term Life Insurance — Protect your mortgage and family income for 10–30 years at the lowest possible cost",
            "Whole Life Insurance — Permanent coverage with tax-sheltered cash value growth for BC families",
            "Critical Illness Insurance — Tax-free lump sum if diagnosed with cancer, heart attack, or stroke",
            "Disability Insurance — Replace 60–85% of your income if you cannot work due to illness or injury",
            "Mortgage Protection Insurance — Protect your Vancouver home investment specifically",
            "Super Visa Insurance — Required coverage for parents and grandparents visiting from abroad",
          ]} />
        </ContentSection>

        <InfoCard title="🏠 Vancouver-Specific Consideration">
          With Vancouver's average detached home exceeding $1.3 million, bank mortgage insurance is often inadequate. A personal term life policy provides level coverage, travels with you between lenders, and puts the payout directly in your family's hands — not the bank's.
        </InfoCard>

        <ContentSection title="Serving All Vancouver & Lower Mainland Areas">
          <ContentParagraph>
            InsuredCan serves families across Greater Vancouver including Burnaby, Surrey, Richmond, Coquitlam, Delta, Langley, Abbotsford, North Vancouver, West Vancouver, and the Tri-Cities. Our licensed BC advisors provide convenient virtual and phone consultations across the province.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="BC-Specific Insurance Regulations">
          <ContentParagraph>
            In British Columbia, insurance advisors are regulated by the BC Financial Services Authority (BCFSA). InsuredCan's advisors hold valid BC life and health insurance licences, ensuring you receive advice from fully qualified, regulated professionals. BC residents also benefit from provincial health coverage through MSP, but private health insurance fills critical gaps including dental, vision, prescription drugs, and paramedical services.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      {
        question: "How much does life insurance cost in Vancouver, BC?",
        answer: "Life insurance rates in Vancouver are the same as anywhere in Canada — premiums are set nationally by insurers. A healthy 35-year-old non-smoker can expect to pay $26–$36/month for $500,000 of 20-year term coverage. Factors like age, health, smoking status, and coverage amount affect your rate. Our advisors compare 20+ insurers to find your lowest rate."
      },
      {
        question: "Do I need a BC-licensed insurance advisor?",
        answer: "Yes. In British Columbia, life insurance advisors must hold a valid licence from the BC Financial Services Authority (BCFSA). InsuredCan's advisors are fully licensed to advise BC residents on life, health, critical illness, and disability insurance."
      },
      {
        question: "What's the best life insurance for Vancouver homeowners?",
        answer: "For most Vancouver homeowners, term life insurance is the best value. A 20 or 25-year term policy aligned with your mortgage amortization period provides affordable, level coverage. Unlike bank mortgage insurance, a personal term policy is portable, pays your beneficiaries directly, and often provides more coverage for less cost."
      },
      {
        question: "Can newcomers to BC get life insurance?",
        answer: "Yes. Most Canadian insurers issue policies to permanent residents and workers with valid permits. Some may require 12 months of residency. If you're in BC's HIBC waiting period, critical illness or private health insurance can provide important bridge coverage."
      },
      {
        question: "Does MSP cover everything I need in BC?",
        answer: "No. BC's Medical Services Plan (MSP) covers essential medical services but excludes dental care, prescription drugs, vision care, physiotherapy, chiropractic, massage, and private hospital rooms. A supplemental health insurance plan fills these critical gaps."
      }
    ]}
  />
);

export default LifeInsuranceVancouver;
