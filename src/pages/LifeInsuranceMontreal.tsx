import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const LifeInsuranceMontreal = () => (
  <LocationPageLayout
    city="Montreal"
    province="Quebec"
    metaTitle="Life Insurance Montreal (2026): Compare Plans & Save Up to 40% | InsuredCan"
    metaDescription="Compare the best life insurance in Montreal, QC. Bilingual service, instant quotes from 20+ insurers, and licensed AMF advisors. Save on premiums today."
    slug="life-insurance-montreal"
    heroHeadline="Life Insurance for Montreal Families & Professionals (2026)"
    heroDescription="Montreal is Canada's second-largest city with 4.2 million metro residents. Average home prices of $550,000–$700,000, combined with Quebec's unique civil law and AMF regulations, make expert insurance guidance essential. Bilingual service in English & French."
    ogImage="https://www.insuredcan.ca/og/og-montreal.png"
    localContent={
      <>
        <ContentSection title="Why Montreal Families Need Life Insurance">
          <ContentParagraph>
            Montreal offers a unique balance: a world-class city with more affordable housing than Toronto or Vancouver. But "more affordable" doesn't mean risk-free. With average detached homes at <strong>$700,000</strong> on the island and <strong>$550,000</strong> in Laval/South Shore, most families carry $350K–$600K mortgages that require protection.
          </ContentParagraph>
          <ContentParagraph>
            Consider a Montreal scenario: a couple in Rosemont earning a combined $120,000 with a $480,000 mortgage and two children in daycare ($8.70/day subsidized). If one partner dies, the survivor faces the full mortgage plus $4,000+/month in living expenses on a single $60,000 income. A <Link to="/term-life-insurance" className="text-primary underline font-semibold">$750K term life policy</Link> at $28–$40/month provides 12+ years of income replacement.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Montreal (2026 Rates)">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$750K Term (20yr)", "$1M Term (20yr)"]}
            rows={[
              ["30-year-old, non-smoker", "$20–$26/mo", "$28–$36/mo", "$32–$42/mo"],
              ["35-year-old, non-smoker", "$25–$33/mo", "$35–$46/mo", "$40–$52/mo"],
              ["40-year-old, non-smoker", "$33–$46/mo", "$47–$65/mo", "$55–$74/mo"],
              ["45-year-old, non-smoker", "$52–$70/mo", "$74–$100/mo", "$86–$115/mo"],
              ["50-year-old, non-smoker", "$78–$105/mo", "$112–$150/mo", "$135–$185/mo"],
            ]}
          />
          <ContentParagraph>
            <strong>Quebec premium tax:</strong> Quebec charges a <strong>3.48% premium tax</strong> on insurance — the highest in Canada. This means a $500/year premium costs $517.40 in Quebec versus $510 in Ontario or $500 in Alberta. InsuredCan helps Montreal residents find the lowest base premiums to offset this tax.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="⚖️ Quebec Civil Law: How It Affects Your Insurance">
          Unlike the rest of Canada (common law), Quebec operates under the <strong>Civil Code of Québec</strong>. This affects beneficiary designations, spousal rights, and estate distribution. For example, Quebec doesn't recognize beneficiary designations made in a will for RRSPs/TFSAs the same way other provinces do. InsuredCan's AMF-licensed advisors understand these nuances and ensure your coverage is structured correctly.
        </InfoCard>

        <ContentSection title="Quebec-Specific Insurance Considerations">
          <ProsList items={[
            "AMF-licensed advisors — all InsuredCan Quebec advisors are regulated by the Autorité des marchés financiers",
            "Bilingual service — full English and French support for all policy documents as required by Bill 101",
            "Quebec Pension Plan (QPP) — provides survivor benefits but replaces only 25–37.5% of the deceased's income; not a substitute for life insurance",
            "RAMQ 3-month waiting period — newcomers to Quebec face a gap in health coverage; private insurance bridges this",
            "Civil Code beneficiary rules — Quebec's unique laws require careful beneficiary structuring; our advisors ensure compliance",
            "Group insurance portability — Quebec law allows 31 days to convert group coverage after leaving a job; don't miss this window",
          ]} />
        </ContentSection>

        <ContentSection title="Montreal's Key Industries & Insurance Needs">
          <ContentParagraph>
            <strong>Aerospace ($70K–$140K):</strong> Bombardier, CAE, Pratt & Whitney, and Bell Textron employ thousands. Aerospace workers need personal coverage that survives industry restructuring — group benefits don't follow you to a competitor.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Tech & AI ($80K–$160K):</strong> Montreal is Canada's AI hub (Mila, Element AI alumni, Google Brain). Many tech workers are on contract or with startups that offer minimal benefits. Personal <Link to="/life-insurance" className="text-primary underline font-semibold">life</Link> and <Link to="/disability-insurance" className="text-primary underline font-semibold">disability insurance</Link> are essential.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Healthcare ($55K–$120K):</strong> McGill, Université de Montréal, and associated hospital networks employ thousands. While public sector benefits exist, they typically cover only 1–2x salary in group life insurance.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Arts, culture & gaming ($45K–$100K):</strong> Ubisoft, Warner Bros. Games, and the film/TV industry are major employers. Creative professionals often work as <Link to="/insurance-self-employed" className="text-primary underline font-semibold">freelancers or contractors</Link> without employer coverage.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="🏠 Montreal Cost of Living Snapshot (2026)">
          Average detached home (island): <strong>$700,000</strong> | Laval/South Shore: <strong>$550,000</strong> | Average condo: <strong>$420,000</strong> | Median household income: <strong>$72,000</strong> | Monthly living costs (family of 4): <strong>$4,800–$6,500</strong>. Montreal's $7/day subsidized daycare helps, but life insurance remains essential for mortgage and income protection.
        </InfoCard>

        <ContentSection title="Serving All Greater Montreal">
          <ContentParagraph>
            InsuredCan serves families across Greater Montreal including <strong>Laval</strong> (pop. 440,000), <strong>Longueuil</strong>, <strong>Brossard</strong>, <strong>Terrebonne</strong>, <strong>Repentigny</strong>, <strong>Blainville</strong>, <strong>Saint-Jérôme</strong>, and the <strong>West Island</strong> (Pointe-Claire, Dorval, Kirkland). Our AMF-licensed advisors provide bilingual virtual consultations across Quebec.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Quebec Insurance Regulations (AMF)">
          <ContentParagraph>
            In Quebec, insurance is regulated by the <strong>Autorité des marchés financiers (AMF)</strong> — not FSRA (Ontario) or BCFSA (BC). All InsuredCan advisors serving Montreal clients hold valid AMF licences. Key Quebec rules: the <strong>Civil Code governs beneficiary designations</strong>, insurance contracts must be available in French, and Quebec's consumer protection laws provide a 10-day cancellation right on new policies.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      {
        question: "Do I need to speak French to get life insurance in Quebec?",
        answer: "No. InsuredCan offers bilingual service in English and French. All policy documents can be provided in your preferred language. Quebec's Bill 101 requires French availability, but you can communicate in either language."
      },
      {
        question: "How much does life insurance cost in Montreal in 2026?",
        answer: "A healthy 35-year-old non-smoker pays $25–$33/month for $500K of 20-year term coverage. Note: Quebec's 3.48% premium tax is the highest in Canada — InsuredCan helps find the lowest base rates to offset this."
      },
      {
        question: "Is life insurance in Quebec different from other provinces?",
        answer: "Yes. Quebec's Civil Code affects beneficiary designations and spousal rights differently than common law provinces. The AMF regulates insurance instead of FSRA. Products are similar, but structuring requires Quebec-specific expertise."
      },
      {
        question: "What life insurance coverage do Montreal homeowners need?",
        answer: "With average Montreal homes at $550K–$700K, most families need $750K–$1M in term life coverage. Factor in your mortgage, 10–12x annual income, outstanding debts, and children's education costs."
      },
      {
        question: "Can newcomers to Quebec get life insurance?",
        answer: "Yes. Most insurers offer coverage to permanent residents and some visa holders immediately. During Quebec's 3-month RAMQ waiting period, InsuredCan can connect you with private health and life insurance to bridge the gap."
      },
      {
        question: "What does the Quebec Pension Plan (QPP) survivor benefit cover?",
        answer: "QPP provides a survivor's pension of roughly $600–$1,000/month — far less than most families need. It replaces only 25–37.5% of the deceased's pensionable earnings. Life insurance fills the substantial gap between QPP benefits and actual living costs."
      }
    ]}
  />
);

export default LifeInsuranceMontreal;
