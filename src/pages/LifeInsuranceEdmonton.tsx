import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";

const LifeInsuranceEdmonton = () => (
  <LocationPageLayout
    city="Edmonton"
    province="Alberta"
    metaTitle="Life Insurance Edmonton AB — Compare Quotes from 20+ Insurers | InsuredCan"
    metaDescription="Find the best life insurance rates in Edmonton, Alberta. Compare term & whole life quotes from licensed Alberta advisors. Free, no-obligation consultation for Edmonton families."
    slug="life-insurance-edmonton"
    heroHeadline="Life Insurance for Edmonton Families & Workers"
    heroDescription="Edmonton is Alberta's capital and one of Canada's most affordable major cities — but that doesn't mean your family's financial future should be left to chance. Compare life insurance quotes from 20+ top Canadian insurers, free."
      ogImage="https://www.insuredcan.ca/og/og-edmonton.png"
    localContent={
      <>
        <ContentSection title="Why Edmonton Residents Need Life Insurance">
          <ContentParagraph>
            Edmonton is home to a diverse workforce including government employees, healthcare professionals, educators, and oil and gas workers. Whatever your profession, life insurance ensures your family can maintain their home, pay off debts, and preserve their lifestyle if you're no longer there to provide for them.
          </ContentParagraph>
          <ContentParagraph>
            With Edmonton's relatively affordable housing (average prices around $400,000–$500,000), many residents have room in their budget for comprehensive coverage. InsuredCan's licensed Alberta advisors help Edmonton families find the right protection at the lowest available rate.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Edmonton">
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
            Alberta's tax advantage extends to insurance: no provincial sales tax (PST) means Edmonton residents pay less for the same coverage than residents of Ontario or BC.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Insurance Options for Edmonton Residents">
          <ProsList items={[
            "Term Life Insurance — Affordable coverage aligned with your mortgage and family's needs",
            "Whole Life Insurance — Permanent, guaranteed-growth policy for long-term estate planning",
            "Critical Illness Insurance — Lump-sum payment if diagnosed with 25+ covered conditions",
            "Disability Insurance — Income replacement for government, healthcare, and private sector workers",
            "Health & Dental Insurance — Supplement AHS coverage with dental, vision, and prescription drugs",
            "Retirement Planning — Use insurance products for tax-efficient retirement income strategies",
          ]} />
        </ContentSection>

        <InfoCard title="🏛️ Government Employees & Teachers">
          Edmonton has a large public sector workforce. While government and school board benefits are excellent, they typically don't replace your full income if you become disabled, and group life coverage ends at retirement. A personal policy ensures continuous, portable protection on your own terms.
        </InfoCard>

        <ContentSection title="Serving All Edmonton & Surrounding Areas">
          <ContentParagraph>
            InsuredCan serves families across the Edmonton Capital Region including St. Albert, Sherwood Park, Spruce Grove, Leduc, Fort Saskatchewan, Beaumont, Stony Plain, and surrounding communities. Our licensed Alberta advisors are available for virtual consultations province-wide.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      {
        question: "How much life insurance does an Edmonton family need?",
        answer: "A common starting point is 10–12x your annual income, plus your outstanding mortgage and debts. For an Edmonton family earning $120,000/year with a $450,000 mortgage, that suggests $1.2–$1.45M of coverage. Our advisors provide a free needs analysis to calculate your specific number."
      },
      {
        question: "Is life insurance cheaper in Edmonton than other Canadian cities?",
        answer: "Insurance premiums are set nationally, so rates don't vary by city. However, Alberta has no provincial sales tax on insurance premiums, which means Edmonton residents effectively pay slightly less than residents in PST provinces like Ontario and BC."
      },
      {
        question: "What life insurance options are available for Edmonton government workers?",
        answer: "Government of Alberta employees have access to group benefits through the Public Service Pension Plan and Alberta Blue Cross. However, group life coverage is typically 1–2x salary. A personal term life policy supplements this to ensure your family has adequate protection, and it remains in force even after retirement or a job change."
      },
      {
        question: "Can I get covered if I have pre-existing health conditions?",
        answer: "Often yes. While some conditions may result in higher premiums or policy exclusions, many Canadians with pre-existing conditions — including controlled diabetes, past cancer, or mental health history — can obtain coverage. No-medical life insurance products are also available for those who may not qualify for traditional underwriting."
      },
      {
        question: "How long does it take to get life insurance in Edmonton?",
        answer: "With InsuredCan, most clients receive a quote within minutes and can have coverage approved in 1–5 business days for simplified or no-medical policies. Fully underwritten policies typically take 2–4 weeks depending on medical requirements."
      }
    ]}
  />
);

export default LifeInsuranceEdmonton;
