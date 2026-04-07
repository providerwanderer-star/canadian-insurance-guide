import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";

const LifeInsuranceOttawa = () => (
  <LocationPageLayout
    city="Ottawa"
    province="Ontario"
    metaTitle="Life Insurance Ottawa ON — Compare Quotes from 20+ Insurers | InsuredCan"
    metaDescription="Find the best life insurance rates in Ottawa, Ontario. Compare term & whole life quotes from licensed Ontario advisors. Free consultation for Ottawa families and federal employees."
    slug="life-insurance-ottawa"
    heroHeadline="Life Insurance for Ottawa Families & Federal Employees"
    heroDescription="Ottawa is Canada's capital and home to one of the country's largest public service workforces. Whether you work for the federal government or the private sector, protect your family's future with the right life insurance. Compare 20+ insurers free."
    localContent={
      <>
        <ContentSection title="Why Ottawa Residents Need Life Insurance">
          <ContentParagraph>
            Ottawa is a stable, prosperous city with a large federal government workforce — but employer group benefits are rarely enough on their own. Life insurance ensures your family can stay in their home, pay off debts, and fund your children's education, regardless of what happens to you.
          </ContentParagraph>
          <ContentParagraph>
            With Ottawa home prices averaging $650,000–$800,000 and a bilingual community spanning Ontario and Quebec, InsuredCan offers expert guidance in both English and French from licensed Ontario advisors who understand the capital region's unique needs.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Ottawa">
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
            Ontario does not charge provincial sales tax on life insurance premiums, keeping costs competitive. Rates above are from major Canadian insurers for standard risk profiles.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Insurance Options for Ottawa Residents">
          <ProsList items={[
            "Term Life Insurance — Affordable, level coverage for 10–30 years to protect your mortgage and family",
            "Whole Life Insurance — Permanent coverage with guaranteed cash value for estate planning",
            "Critical Illness Insurance — Tax-free lump sum for 25+ conditions including cancer and heart attack",
            "Disability Insurance — Replace lost income if illness or injury prevents you from working",
            "Health & Dental Insurance — Fill gaps in OHIP with dental, vision, drugs, and paramedical coverage",
            "Bilingual Service — Conseil et devis d'assurance en français pour les résidents d'Ottawa-Gatineau",
          ]} />
        </ContentSection>

        <InfoCard title="🏛️ Federal Public Servants — Know Your Gaps">
          The Public Service Health Care Plan (PSHCP) and Disability Insurance Plan (PSDIP) provide solid group benefits — but group life coverage is typically 1–2x salary, far below recommended levels. And all group benefits end when you leave the public service. A personal policy ensures continuous, portable protection on your terms, locked in at today's rates.
        </InfoCard>

        <ContentSection title="Serving Ottawa & Gatineau Residents">
          <ContentParagraph>
            InsuredCan serves families across the National Capital Region including Kanata, Barrhaven, Orleans, Nepean, Gloucester, Stittsville, Carleton Place, and across the river in Gatineau and Western Quebec. Our bilingual advisors provide consultations in English and French — virtually or by phone for your convenience.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Ottawa's Bilingual Insurance Market">
          <ContentParagraph>
            Ottawa's unique bilingual character means many residents need insurance advice in French. InsuredCan's advisors are fully licensed in Ontario and can serve French-speaking clients across Ottawa-Gatineau. Whether you live on the Ontario or Quebec side, we help you navigate coverage options in your preferred language.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      {
        question: "Do I need additional life insurance if I'm a federal government employee?",
        answer: "Yes, in most cases. The federal government's group life insurance typically covers 1–2x your annual salary through the Public Service Group Insurance Benefit Plans. Financial planners typically recommend 10–12x your income. A personal term life policy fills this critical gap and remains in force even after you retire or leave the public service."
      },
      {
        question: "Can I get insurance advice in French in Ottawa?",
        answer: "Absolutely. InsuredCan offers fully bilingual service in English and French. Our advisors can provide quotes, explain coverage options, and assist with applications in your preferred language — serving Ottawa and the broader Ottawa-Gatineau region."
      },
      {
        question: "If I live in Gatineau but work in Ottawa, where do I get insured?",
        answer: "Your province of residence determines which provincial regulations apply to your policy. Quebec residents (including Gatineau) are governed by the AMF (Autorité des marchés financiers), while Ontario residents (including Ottawa) fall under FSRA. InsuredCan can help clients on both sides of the river find the right coverage."
      },
      {
        question: "How does Ottawa's real estate market affect how much life insurance I need?",
        answer: "With Ottawa home prices averaging $650,000–$800,000, your life insurance should at minimum cover your outstanding mortgage balance plus 5–7 years of living expenses for your dependants. For a family earning $150,000 with an $700,000 mortgage, $1.5–$2M of coverage is a reasonable starting point."
      },
      {
        question: "Is there life insurance specifically for RCMP or military members in Ottawa?",
        answer: "Yes. RCMP members have the Public Service group plan, and CAF members have SISIP Financial. These plans provide baseline coverage, but personal insurance supplements are often advisable for dependant spouses, coverage above group limits, and portability after service. Our advisors can help you understand your coverage gaps."
      }
    ]}
  />
);

export default LifeInsuranceOttawa;
