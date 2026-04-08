import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";

const LifeInsuranceWinnipeg = () => (
  <LocationPageLayout
    city="Winnipeg"
    province="Manitoba"
    metaTitle="Life Insurance Winnipeg — Compare Quotes | InsuredCan"
    metaDescription="Find affordable life insurance in Winnipeg. Compare term & whole life quotes from licensed Manitoba advisors. Free consultation for Winnipeg families."
    slug="life-insurance-winnipeg"
    heroHeadline="Life Insurance for Winnipeg Families"
    heroDescription="Winnipeg families count on reliable income protection. Whether you work in agriculture, manufacturing, or the public sector, the right life insurance ensures your family is protected. Compare quotes from 20+ Canadian insurers."
      ogImage="https://www.insuredcan.ca/og/og-winnipeg.png"
    faqs={[
      {
        question: "How much life insurance do Winnipeg families need?",
        answer: "With Winnipeg's average home price around $350,000–$400,000, most families need $300K–$750K in coverage. A general rule is 10–12× your annual income. InsuredCan's free calculator helps you find your exact number."
      },
      {
        question: "Who regulates life insurance in Manitoba?",
        answer: "The Financial Institutions Regulation Branch (FIRB) under Manitoba Finance regulates insurance in the province. InsuredCan works with MFDA-licensed advisors who are fully compliant with Manitoba regulations."
      },
      {
        question: "Is term or whole life insurance better for Winnipeg residents?",
        answer: "For most Winnipeg families, a 20-year term policy offers the best value — affordable premiums with strong coverage during peak earning and family-raising years. Whole life is better suited for estate planning or permanent needs."
      },
      {
        question: "What happens to my life insurance if I move from Winnipeg?",
        answer: "Canadian life insurance policies are portable — your coverage follows you anywhere in Canada. There's no need to cancel and reapply if you relocate within Canada."
      },
      {
        question: "Can I get no-medical life insurance in Winnipeg?",
        answer: "Yes. Simplified issue and guaranteed issue policies are available in Winnipeg without a medical exam. Coverage amounts are typically lower ($25K–$500K) and premiums are higher, but they're ideal for seniors or those with health conditions."
      }
    ]}
    localContent={
      <>
        <ContentSection title="Why Winnipeg Residents Need Life Insurance">
          <ContentParagraph>
            Winnipeg is Manitoba's capital and economic centre, home to a diverse workforce spanning agriculture, finance, aerospace, and government. For Winnipeg families, life insurance is a critical safety net that protects against income loss.
          </ContentParagraph>
          <ContentParagraph>
            With more affordable housing than major metros but growing costs, Winnipeg families still carry significant mortgage and living expenses. A term life policy ensures your family can maintain their home and lifestyle even in the worst circumstances.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Winnipeg">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$750K Term (20yr)"]}
            rows={[
              ["30-year-old, non-smoker", "$19–$24/mo", "$27–$34/mo"],
              ["35-year-old, non-smoker", "$23–$30/mo", "$32–$44/mo"],
              ["40-year-old, non-smoker", "$31–$43/mo", "$44–$62/mo"],
              ["45-year-old, non-smoker", "$48–$65/mo", "$68–$93/mo"],
            ]}
          />
        </ContentSection>

        <ContentSection title="Insurance Options for Winnipeg Residents">
          <ProsList items={[
            "Term Life Insurance — Most affordable option; 10, 20, or 30-year coverage for families",
            "Whole Life Insurance — Permanent coverage with cash value for estate planning",
            "Critical Illness — Lump sum if diagnosed with cancer, heart attack, or stroke",
            "Disability Insurance — Income replacement if you can't work due to illness or injury",
            "Mortgage Protection — Ensures your Winnipeg home is paid off if you pass away",
          ]} />
        </ContentSection>

        <InfoCard title="Winnipeg Agricultural Workers">
          If you're self-employed in agriculture or a seasonal worker, disability insurance is just as important as life insurance. Loss of income during harvest season can be financially devastating without proper coverage.
        </InfoCard>
      </>
    }
  />
);

export default LifeInsuranceWinnipeg;
