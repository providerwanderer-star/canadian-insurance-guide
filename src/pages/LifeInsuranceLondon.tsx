import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard } from "@/components/ContentElements";

const LifeInsuranceLondon = () => (
  <LocationPageLayout
    city="London"
    province="Ontario"
    metaTitle="Life Insurance London Ontario — Affordable Coverage | InsuredCan"
    metaDescription="Compare life insurance quotes in London, Ontario. Get affordable term & whole life coverage from licensed advisors. Free consultation for London families."
    slug="life-insurance-london-ontario"
    heroHeadline="Life Insurance for London, Ontario Families"
    heroDescription="Whether you're a young family in Byron, a professional in downtown London, or a retiree in Old South—get personalized life insurance coverage from licensed Ontario advisors."
      ogImage="https://www.insuredcan.ca/og/og-london.png"
    localContent={
      <>
        <ContentSection title="Why London Families Need Life Insurance">
          <ContentParagraph>
            London, Ontario is one of the fastest-growing cities in Southwestern Ontario, with a median household income of approximately $68,000. With average home prices exceeding $550,000 and growing families throughout the city, life insurance is essential to protect your family's financial security.
          </ContentParagraph>
          <ContentParagraph>
            Whether you're working at London Health Sciences Centre, Western University, or one of the city's many growing businesses, ensuring your family is protected with the right life insurance policy is one of the most important financial decisions you can make.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Coverage Options for London Residents">
          <ProsList items={[
            "Term Life Insurance — Affordable coverage for 10–30 years, ideal for mortgage protection",
            "Whole Life Insurance — Permanent coverage with cash value for estate planning",
            "Critical Illness Insurance — Lump-sum payout for cancer, heart attack, or stroke",
            "Disability Insurance — Income protection if you can't work due to illness or injury",
          ]} />
        </ContentSection>

        <InfoCard title="London, Ontario Fact">
          With Western University and Fanshawe College bringing thousands of young professionals to the city each year, London has a growing need for affordable insurance solutions for first-time buyers and young families.
        </InfoCard>

        <ContentSection title="Average Life Insurance Costs in London">
          <ContentParagraph>
            A healthy 35-year-old non-smoker in London can expect to pay approximately $25–$35/month for $500,000 of 20-year term coverage. Rates vary based on health, lifestyle, and coverage amount. Our advisors compare quotes from 20+ insurers to find you the best rate.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      { question: "How much life insurance do I need in London, Ontario?", answer: "Most financial advisors recommend 10–15x your annual income. For a London family earning $68,000, that's $680,000–$1,000,000 in coverage to protect your mortgage, income, and children's education." },
      { question: "What's the best life insurance for London homeowners?", answer: "20-year term life insurance is the most popular choice for London homeowners, as it aligns with typical mortgage amortization periods and offers affordable premiums." },
      { question: "Can I get life insurance quotes online in London?", answer: "Yes! InsuredCan provides free online quotes from 20+ Canadian insurers. You can also speak with a licensed Ontario advisor for personalized recommendations." },
      { question: "Are there insurance brokers in London, Ontario?", answer: "Yes, InsuredCan serves London and all of Southwestern Ontario with licensed insurance advisors who can meet virtually or by phone." },
    ]}
  />
);

export default LifeInsuranceLondon;
