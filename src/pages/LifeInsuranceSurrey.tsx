import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const LifeInsuranceSurrey = () => (
  <LocationPageLayout
    city="Surrey"
    province="British Columbia"
    metaTitle="Life Insurance Surrey BC (2026): Compare Plans & Save Up to 40% | InsuredCan"
    metaDescription="Compare the best life insurance in Surrey, BC. Get instant quotes from 20+ insurers, expert advice from licensed BC advisors, and save on premiums today."
    slug="life-insurance-surrey"
    heroHeadline="Life Insurance for Surrey Families & Newcomers (2026)"
    heroDescription="Surrey is BC's second-largest city (pop. 620,000+) and one of Canada's most diverse communities — over 40% of residents are immigrants. With average home prices exceeding $1.1 million and rapid population growth, life insurance is essential. Compare 20+ insurers free."
    ogImage="https://www.insuredcan.ca/og/og-home.png"
    localContent={
      <>
        <ContentSection title="Why Surrey Families Can't Afford to Go Uninsured">
          <ContentParagraph>
            Surrey is BC's fastest-growing city, expected to surpass Vancouver's population by 2030. But rapid growth brings challenges: average detached homes now exceed <strong>$1.4 million</strong> in South Surrey/White Rock and <strong>$1.1 million</strong> in Newton/Fleetwood. Even townhomes average $780,000. Most Surrey families carry $600K–$1.2M mortgages.
          </ContentParagraph>
          <ContentParagraph>
            Real scenario: A Surrey family in Fleetwood with a combined income of $120,000 and a $900,000 mortgage. Monthly payments of $5,200 (mortgage + property tax + insurance) consume 52% of gross income. If one earner dies, the family loses their home within months. A <Link to="/term-life-insurance" className="text-primary underline font-semibold">$1M term life policy</Link> at $35–$58/month prevents this — costing less than a weekly grocery run.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Surrey (2026 Rates)">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$1M Term (20yr)", "$500K Whole Life"]}
            rows={[
              ["30-year-old, non-smoker", "$21–$27/mo", "$33–$43/mo", "$180–$235/mo"],
              ["35-year-old, non-smoker", "$25–$34/mo", "$41–$54/mo", "$215–$305/mo"],
              ["40-year-old, non-smoker", "$34–$47/mo", "$56–$76/mo", "$305–$425/mo"],
              ["45-year-old, non-smoker", "$53–$73/mo", "$88–$118/mo", "$410–$570/mo"],
              ["50-year-old, non-smoker", "$82–$110/mo", "$150–$205/mo", "$545–$760/mo"],
            ]}
          />
          <ContentParagraph>
            Like <Link to="/life-insurance-vancouver" className="text-primary underline font-semibold">Vancouver</Link>, Surrey benefits from <strong>BC's zero provincial premium tax</strong> on life insurance. Given Surrey's property values rivaling Vancouver proper, most financial advisors recommend <strong>$1M+ in coverage</strong> for any Surrey homeowner.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="🌍 Surrey's Newcomer Community: Insurance Made Simple">
          Over 40% of Surrey residents were born outside Canada — many from South Asia, the Philippines, and China. If you're a newcomer, you can get life insurance even during BC's MSP waiting period. InsuredCan specializes in helping <Link to="/insurance-newcomers" className="text-primary underline font-semibold">new immigrants</Link> navigate Canadian insurance with culturally sensitive, multilingual guidance. No Canadian insurance history required.
        </InfoCard>

        <ContentSection title="Insurance Products Ranked for Surrey Residents">
          <ProsList items={[
            "Term Life Insurance — Best value for mortgage protection; $1M coverage for $33–$54/month covers Surrey's high property values",
            "Whole Life Insurance — Permanent coverage with cash value; popular among Surrey families for intergenerational wealth transfer",
            "Critical Illness Insurance — Tax-free lump sum for cancer, heart attack, or stroke; supplements MSP coverage gaps",
            "Newcomer Insurance — Coverage for new immigrants and PR holders; no Canadian medical history required for many policies",
            "Mortgage Protection — Portable, level coverage that protects your family (not the bank) if you die or become disabled",
            "Super Visa Insurance — Required for parents/grandparents visiting from abroad; very popular among Surrey's South Asian community",
          ]} />
        </ContentSection>

        <ContentSection title="Surrey's Economy & Industry-Specific Coverage Needs">
          <ContentParagraph>
            <strong>Healthcare (Surrey Memorial Hospital):</strong> Surrey Memorial is one of BC's busiest hospitals. Healthcare workers need personal <Link to="/critical-illness-insurance" className="text-primary underline font-semibold">critical illness</Link> and <Link to="/disability-insurance" className="text-primary underline font-semibold">disability coverage</Link> to supplement employer benefits that end at retirement.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Construction & trades ($60K–$120K):</strong> Surrey's building boom means thousands work in construction, electrical, and plumbing. Higher occupation risk makes personal disability insurance essential — employer group plans often exclude trade-specific injuries.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Technology (Surrey Innovation Boulevard):</strong> Growing tech hub with SFU Surrey campus driving innovation. Tech workers on contract need personal coverage since startup benefits are minimal.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Small business & retail:</strong> Surrey has one of Canada's highest concentrations of small businesses, especially along the Scott Road and King George corridors. <Link to="/insurance-self-employed" className="text-primary underline font-semibold">Self-employed coverage</Link> is critical for business owners without group benefits.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="🏠 Surrey Cost of Living Snapshot (2026)">
          Average detached home: <strong>$1.1M–$1.4M</strong> | Average townhome: <strong>$780,000</strong> | Average condo: <strong>$520,000</strong> | Median household income: <strong>$85,000</strong> | Monthly living costs (family of 4): <strong>$5,500–$7,800</strong>. With Metro Vancouver's highest population growth rate, Surrey's real estate values are projected to keep rising — making mortgage protection more important every year.
        </InfoCard>

        <ContentSection title="Serving All Surrey Neighbourhoods">
          <ContentParagraph>
            InsuredCan serves families across all Surrey communities including <strong>Fleetwood</strong>, <strong>Guildford</strong>, <strong>Newton</strong>, <strong>Cloverdale</strong>, <strong>South Surrey</strong>, <strong>White Rock</strong>, <strong>Whalley</strong>, <strong>Surrey City Centre</strong>, <strong>Panorama Ridge</strong>, and <strong>Fraser Heights</strong>. We also serve nearby <Link to="/life-insurance-vancouver" className="text-primary underline font-semibold">Vancouver</Link>, Langley, Delta, and all Lower Mainland communities. Licensed BC advisors available for virtual consultations.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      {
        question: "How much life insurance do I need in Surrey?",
        answer: "Given Metro Vancouver's high housing costs, most Surrey families need $1M+ in coverage. Factor in your mortgage balance ($600K–$1.2M typical), annual income (10–12x), and outstanding debts. InsuredCan provides a free personalized needs analysis."
      },
      {
        question: "Can newcomers to Surrey get life insurance?",
        answer: "Yes. Many insurers offer coverage to permanent residents and work permit holders immediately — no Canadian medical history required. InsuredCan specializes in helping Surrey's diverse immigrant community navigate their insurance options."
      },
      {
        question: "How much does life insurance cost in Surrey in 2026?",
        answer: "A healthy 35-year-old non-smoker pays $25–$34/month for $500K of 20-year term coverage. BC has no provincial premium tax on life insurance, keeping costs competitive versus Ontario."
      },
      {
        question: "Is bank mortgage insurance a good deal in Surrey?",
        answer: "Usually not. Bank mortgage insurance only covers the declining loan balance and pays the lender. A personal term life policy provides level coverage, is portable between lenders, and typically costs 15–30% less for better protection."
      },
      {
        question: "What if I work in construction in Surrey?",
        answer: "Construction workers can absolutely get life insurance. Rates may be slightly higher for high-risk occupations, but InsuredCan compares 20+ insurers to find the most competitive rate for your specific trade and risk level."
      },
      {
        question: "Is life insurance different in BC vs Ontario?",
        answer: "Products are identical across Canada, but provincial regulations differ. BC is regulated by BCFSA (not FSRA), has no premium tax (Ontario charges 2%), and follows different beneficiary designation rules. InsuredCan's BC-licensed advisors understand local requirements."
      }
    ]}
  />
);

export default LifeInsuranceSurrey;
