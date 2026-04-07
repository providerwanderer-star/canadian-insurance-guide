import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";

const LifeInsuranceCalgary = () => (
  <LocationPageLayout
    city="Calgary"
    province="Alberta"
    metaTitle="Life Insurance Calgary AB — Compare Quotes from 20+ Insurers | InsuredCan"
    metaDescription="Find the best life insurance rates in Calgary, Alberta. Compare term & whole life quotes from licensed Alberta advisors. Free consultation for Calgary families."
    slug="life-insurance-calgary"
    heroHeadline="Life Insurance for Calgary Families & Professionals"
    heroDescription="Calgary's energy-driven economy means incomes can fluctuate. Protect your family's financial security with affordable, reliable life insurance. Compare quotes from 20+ top Canadian insurers — free, no obligation."
    localContent={
      <>
        <ContentSection title="Why Calgary Families Need Life Insurance">
          <ContentParagraph>
            Calgary is one of Canada's most prosperous cities, but also one where income volatility is a reality for many families tied to the energy sector. Whether oil prices are high or low, your family's financial protection should be rock solid.
          </ContentParagraph>
          <ContentParagraph>
            With average home prices above $600,000 and growing, and many households carrying significant mortgages, life insurance is essential protection. InsuredCan's licensed Alberta advisors help Calgary families compare 20+ top insurers to find the right coverage at the lowest available rate.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Calgary">
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
            Alberta has no provincial sales tax (PST), meaning life insurance premiums in Calgary are not subject to PST — only the federal 2% excise tax applies, making Alberta one of the most cost-effective provinces for insurance.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Insurance Options for Calgary Residents">
          <ProsList items={[
            "Term Life Insurance — Most affordable protection for families with mortgages and young children",
            "Whole Life Insurance — Permanent coverage with guaranteed cash value and dividend potential",
            "Critical Illness Insurance — Lump-sum payout if diagnosed with cancer, heart attack, or stroke",
            "Disability Insurance — Especially important for self-employed Calgarians and contractors",
            "Mortgage Protection Insurance — Protect your Calgary home if you pass away or become disabled",
            "Group Benefits — Small business group insurance for Calgary entrepreneurs and their teams",
          ]} />
        </ContentSection>

        <InfoCard title="⚡ Calgary-Specific Consideration: Oil Patch Workers">
          If you work in Alberta's energy sector, your employer's group benefits may not cover you adequately during layoffs, strikes, or project gaps. A personal life and disability insurance policy owned by you travels with you regardless of employment status — essential for anyone in a cyclical industry.
        </InfoCard>

        <ContentSection title="Serving All Calgary & Area Communities">
          <ContentParagraph>
            InsuredCan serves families across the Calgary metro area including Airdrie, Cochrane, Chestermere, Okotoks, and the MD of Rocky View County. Our licensed Alberta advisors provide virtual and phone consultations for your convenience — no in-person meeting required.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Alberta Insurance Regulations">
          <ContentParagraph>
            In Alberta, insurance advisors are regulated by the Alberta Insurance Council (AIC). InsuredCan's advisors hold valid Alberta life and accident & sickness (A&S) insurance licences. Alberta residents benefit from universal health coverage through Alberta Health Services (AHS), but private insurance fills significant gaps including dental, drugs, vision, and disability income replacement.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      {
        question: "How much does life insurance cost in Calgary?",
        answer: "Life insurance premiums in Calgary are set nationally and do not vary by city. A healthy 35-year-old non-smoker can expect $26–$36/month for $500,000 of 20-year term coverage. Alberta also has no PST on insurance premiums, making it slightly more affordable than provinces with PST. Compare quotes from 20+ insurers with InsuredCan for free."
      },
      {
        question: "Is disability insurance important for Calgary workers?",
        answer: "Absolutely. Many Calgary workers, especially in the energy, construction, and trades sectors, are at higher risk of injury or periods of unemployment. Personal disability insurance replaces 60–85% of your income if you cannot work due to illness or injury — critical if you're self-employed or between jobs."
      },
      {
        question: "Do I need life insurance if I have group coverage through my employer?",
        answer: "Group coverage is a good start but often insufficient. Most employer plans provide 1–2x your annual salary, far below the recommended 10–12x. Group coverage also ends when you leave your job. A personal policy ensures continuous protection at a rate locked in when you're young and healthy."
      },
      {
        question: "What's the best term length for Calgary homeowners?",
        answer: "For most Calgary homeowners, a 20 or 25-year term aligned with your mortgage amortization period is the optimal choice. If you have young children, a 25-year term ensures they're protected through their dependent years. Our advisors help you match your coverage to your actual financial obligations."
      },
      {
        question: "Can I get life insurance if I work in a high-risk job in Calgary?",
        answer: "Yes. Many insurers offer coverage for high-risk occupations including oil and gas workers, heavy equipment operators, and tradespeople. Premiums may be higher or certain exclusions may apply. Our advisors work with specialized insurers to find the best available coverage for your occupation."
      }
    ]}
  />
);

export default LifeInsuranceCalgary;
