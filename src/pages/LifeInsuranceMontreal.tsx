import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";

const LifeInsuranceMontreal = () => (
  <LocationPageLayout
    city="Montreal"
    province="Quebec"
    metaTitle="Life Insurance Montreal — Compare Quotes | InsuredCan"
    metaDescription="Find the best life insurance rates in Montreal. Compare term & whole life quotes from licensed Quebec advisors. Bilingual service in English & French."
    slug="life-insurance-montreal"
    heroHeadline="Life Insurance for Montreal Families & Professionals"
    heroDescription="Montreal's unique blend of French and English culture deserves bilingual insurance expertise. Protect your family with affordable life insurance from licensed Quebec advisors. Compare quotes from 20+ top Canadian insurers."
    faqs={[
      {
        question: "Do I need to speak French to get life insurance in Quebec?",
        answer: "No. InsuredCan offers bilingual service in both English and French throughout the Montreal area. All policy documents can be provided in your preferred language as required by Quebec's language law (Bill 101)."
      },
      {
        question: "Is life insurance in Quebec different from other provinces?",
        answer: "Quebec has a distinct civil law system and the AMF (Autorité des marchés financiers) regulates insurance instead of FSRA. Products are similar to other provinces, but advisors must be licensed with the AMF. InsuredCan works with AMF-licensed advisors."
      },
      {
        question: "What life insurance coverage do Montreal homeowners need?",
        answer: "With average Montreal home prices around $550,000–$700,000, most families need $500K–$1M in term life coverage to protect their mortgage and replace income. A 20-year term policy is typically recommended for families with young children."
      },
      {
        question: "How much does life insurance cost in Montreal?",
        answer: "A healthy 35-year-old Montreal resident can get $500,000 in 20-year term life insurance for approximately $25–$35/month. Rates depend on age, health, smoking status, and coverage amount."
      },
      {
        question: "Can newcomers to Quebec get life insurance?",
        answer: "Yes. Most Canadian insurers offer coverage to permanent residents and some visa holders. Coverage can start immediately — you don't need to wait for citizenship. InsuredCan helps newcomers navigate available options."
      }
    ]}
    localContent={
      <>
        <ContentSection title="Why Montreal Residents Need Life Insurance">
          <ContentParagraph>
            Montreal is Canada's second-largest city and the economic hub of Quebec. With a growing tech sector, major universities, and a vibrant arts scene, Montreal attracts families and professionals who depend on their income to maintain their lifestyle.
          </ContentParagraph>
          <ContentParagraph>
            Whether you're a professional in the Plateau, a family in Laval, or a newcomer building roots in NDG, life insurance protects your family's financial future — paying off your mortgage, replacing lost income, and funding your children's education.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Montreal">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$1M Term (20yr)"]}
            rows={[
              ["30-year-old, non-smoker", "$20–$26/mo", "$32–$42/mo"],
              ["35-year-old, non-smoker", "$25–$33/mo", "$40–$52/mo"],
              ["40-year-old, non-smoker", "$33–$46/mo", "$55–$74/mo"],
              ["45-year-old, non-smoker", "$52–$70/mo", "$86–$115/mo"],
            ]}
          />
        </ContentSection>

        <ContentSection title="Quebec-Specific Considerations">
          <ProsList items={[
            "AMF-licensed advisors — all InsuredCan Quebec advisors are regulated by the Autorité des marchés financiers",
            "Bilingual service — full English and French support for all policy documents",
            "Quebec Pension Plan (QPP) — complements but does not replace private life insurance",
            "Civil law system — Quebec contracts follow the Civil Code, not Common Law",
            "Group insurance gaps — check if your employer plan continues if you change jobs",
          ]} />
        </ContentSection>

        <InfoCard title="Montreal Newcomer Tip">
          Quebec has its own immigration system (CAQ). If you're a new Quebec resident, you may face a 3-month RAMQ waiting period. InsuredCan can connect you with health and life insurance coverage to bridge this gap.
        </InfoCard>
      </>
    }
  />
);

export default LifeInsuranceMontreal;
