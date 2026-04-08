import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";

const LifeInsuranceSurrey = () => (
  <LocationPageLayout
    city="Surrey"
    province="British Columbia"
    metaTitle="Life Insurance Surrey BC — Compare Affordable Quotes | InsuredCan"
    metaDescription="Find the best life insurance rates in Surrey, BC. Compare term & whole life quotes from licensed advisors. Free consultation for Surrey families & newcomers."
    slug="life-insurance-surrey"
    heroHeadline="Life Insurance for Surrey Families & Professionals"
    heroDescription="Surrey is BC's second-largest city and one of Canada's most diverse communities. Protect your family with affordable life insurance from 20+ top Canadian insurers. Free quotes, no obligation."
    ogImage="https://www.insuredcan.ca/og/og-home.png"
    localContent={
      <>
        <ContentSection title="Why Surrey Residents Need Life Insurance">
          <ContentParagraph>
            Surrey is British Columbia's fastest-growing city with a population exceeding 600,000. As a major economic centre in Metro Vancouver, Surrey's residents face significant housing costs with average home prices over $1 million. Life insurance is essential for protecting your family's financial future in this high-cost market.
          </ContentParagraph>
          <ContentParagraph>
            Whether you're a tech professional in Surrey City Centre, a healthcare worker at Surrey Memorial Hospital, or a young family in South Surrey, the right life insurance ensures your loved ones can maintain their lifestyle and keep their home.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Surrey">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$1M Term (20yr)"]}
            rows={[
              ["30-year-old, non-smoker", "$21–$27/mo", "$33–$43/mo"],
              ["35-year-old, non-smoker", "$25–$34/mo", "$41–$54/mo"],
              ["40-year-old, non-smoker", "$34–$47/mo", "$56–$76/mo"],
              ["45-year-old, non-smoker", "$53–$73/mo", "$88–$118/mo"],
            ]}
          />
        </ContentSection>

        <ContentSection title="Insurance Options for Surrey Residents">
          <ProsList items={[
            "Term Life Insurance — Affordable protection for your mortgage and family income",
            "Whole Life Insurance — Permanent coverage with cash value accumulation",
            "Critical Illness — Tax-free lump sum for serious health diagnoses",
            "Newcomer Insurance — Coverage for Surrey's diverse immigrant community",
            "Mortgage Protection — Protect your Metro Vancouver home investment",
          ]} />
        </ContentSection>

        <InfoCard title="Surrey Housing Tip">
          With Surrey's average home prices exceeding $1M, bank mortgage insurance often falls short. A portable term life policy provides better value, more flexibility, and guaranteed coverage even if you refinance or switch lenders.
        </InfoCard>

        <ContentSection title="Serving All Surrey Neighbourhoods">
          <ContentParagraph>
            InsuredCan serves families across Surrey including Fleetwood, Guildford, Newton, Cloverdale, South Surrey, White Rock, Whalley, and Surrey City Centre. Licensed BC advisors available for virtual consultations.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      { question: "How much life insurance do I need in Surrey?", answer: "Given Metro Vancouver's high housing costs, most Surrey families should consider $1M+ in coverage. Factor in your mortgage balance, annual income (10–15x), and any outstanding debts." },
      { question: "Can newcomers to Surrey get life insurance?", answer: "Yes! Many insurers offer coverage to newcomers immediately. InsuredCan specializes in helping Surrey's diverse community, including those waiting for MSP coverage." },
      { question: "Is life insurance different in BC vs Ontario?", answer: "Life insurance products are similar across Canada, but provincial regulations differ slightly. InsuredCan's licensed BC advisors understand local requirements and can guide you." },
      { question: "What if I work in construction in Surrey?", answer: "Construction workers can get life insurance, though rates may vary by occupation risk. InsuredCan compares 20+ insurers to find the most competitive rate for your occupation." },
    ]}
  />
);

export default LifeInsuranceSurrey;