import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const LifeInsuranceCalgary = () => (
  <LocationPageLayout
    city="Calgary"
    province="Alberta"
    metaTitle="Life Insurance Calgary (2026): Compare Plans & Save Up to 40% | InsuredCan"
    metaDescription="Compare the best life insurance in Calgary, AB. Get instant quotes from 20+ insurers, expert advice from licensed Alberta advisors, and save on premiums today."
    slug="life-insurance-calgary"
    heroHeadline="Life Insurance for Calgary Families & Energy Workers (2026)"
    heroDescription="Calgary's median household income of $105,000 leads Canadian cities — but energy sector volatility means that income isn't guaranteed. With average home prices at $585,000 and rising, protect your family's financial future. Compare 20+ top insurers free."
    ogImage="https://www.insuredcan.ca/og/og-calgary.png"
    localContent={
      <>
        <ContentSection title="Why Calgary's Economy Makes Life Insurance Essential">
          <ContentParagraph>
            Calgary's economy is heavily tied to oil and gas — an industry where layoffs, project shutdowns, and income swings are a reality. During the 2015–2016 oil crash, Calgary lost over 40,000 jobs. Even in boom times, smart financial planning means protecting your family against the next downturn.
          </ContentParagraph>
          <ContentParagraph>
            Consider a typical Calgary scenario: an engineer earning $130,000/year with a $500,000 mortgage in Panorama Hills. If that income disappears, the family faces $2,800/month in mortgage payments plus $4,000+ in living expenses. A <Link to="/term-life-insurance" className="text-primary underline font-semibold">$1M term life policy</Link> at $44–$58/month provides a financial safety net that costs less than a weekly coffee habit.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Life Insurance Costs in Calgary (2026 Rates)">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$1M Term (20yr)", "$500K Whole Life"]}
            rows={[
              ["30-year-old, non-smoker", "$20–$26/mo", "$33–$42/mo", "$175–$230/mo"],
              ["35-year-old, non-smoker", "$24–$33/mo", "$41–$54/mo", "$210–$295/mo"],
              ["40-year-old, non-smoker", "$34–$47/mo", "$57–$78/mo", "$295–$415/mo"],
              ["45-year-old, non-smoker", "$54–$73/mo", "$90–$122/mo", "$400–$555/mo"],
              ["50-year-old, non-smoker", "$82–$108/mo", "$148–$200/mo", "$530–$740/mo"],
            ]}
          />
          <ContentParagraph>
            <strong>Alberta's tax advantage:</strong> Alberta has <strong>no provincial sales tax (PST)</strong> on insurance premiums. Ontario charges 2% and Quebec charges 3.48% — meaning Calgarians save $50–$150/year on identical coverage. Combined with Calgary's lower cost of living versus Toronto or Vancouver, your insurance dollar stretches further here.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="⚡ Oil Patch Workers: Don't Rely on Employer Coverage Alone">
          If you work for Suncor, CNRL, TC Energy, or any energy company, your group benefits typically cover only 1–2x your salary and <strong>end immediately when you're laid off</strong>. During the 2020 downturn, thousands of Calgary workers lost both their income and their insurance simultaneously. A personal <Link to="/life-insurance" className="text-primary underline font-semibold">life insurance</Link> policy owned by you travels with you regardless of employment status — essential in a cyclical industry.
        </InfoCard>

        <ContentSection title="Insurance Products Ranked for Calgary Residents">
          <ProsList items={[
            "Term Life Insurance — Best value for mortgage protection; lock in rates while young and healthy at $24–$54/month for $500K",
            "Disability Insurance — Critical for energy, trades, and construction workers; replaces 60–85% of income during layoffs or injury",
            "Critical Illness Insurance — Tax-free lump sum for cancer, heart attack, or stroke; covers costs not paid by Alberta Health Services",
            "Whole Life Insurance — Permanent coverage with cash value growth; ideal for business owners and high-income earners for estate planning",
            "Group Benefits for Small Business — Calgary entrepreneurs can offer competitive health, dental, and life benefits to attract talent",
            "Mortgage Protection — Protect your Calgary home; portable and level coverage unlike bank mortgage insurance",
          ]} />
        </ContentSection>

        <ContentSection title="Calgary's Key Industries & Insurance Considerations">
          <ContentParagraph>
            <strong>Oil & gas ($80K–$200K+ salaries):</strong> Cyclical income makes personal insurance vital. Group benefits vanish during layoffs. <Link to="/disability-insurance" className="text-primary underline font-semibold">Disability insurance</Link> is especially important for field workers exposed to physical hazards.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Tech sector (growing rapidly):</strong> Calgary's tech hub is expanding with companies like Benevity, Shareworks, and Neo Financial. Many tech workers are contractors without group benefits — personal coverage is essential.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Trades & construction ($70K–$120K):</strong> Heavy equipment operators, welders, and electricians face higher occupation risk. Specialized insurers offer competitive rates for <Link to="/insurance-self-employed" className="text-primary underline font-semibold">self-employed tradespeople</Link>.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Agriculture & ranching:</strong> Southern Alberta's farming community needs coverage that accounts for seasonal income, farm assets, and succession planning.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="🏔️ Calgary Cost of Living Snapshot (2026)">
          Average detached home: <strong>$585,000</strong> | Average condo: <strong>$285,000</strong> | Average household income: <strong>$105,000</strong> | No PST | Monthly living costs (family of 4): <strong>$5,500–$7,500</strong>. With a $500K mortgage at 5.5%, monthly payments are roughly $3,000. A $1M term life policy ensures your family keeps the home.
        </InfoCard>

        <ContentSection title="Serving All Calgary & Southern Alberta">
          <ContentParagraph>
            InsuredCan serves families across the Calgary metro area including <strong>Airdrie</strong> (pop. 80,000+), <strong>Cochrane</strong>, <strong>Chestermere</strong>, <strong>Okotoks</strong>, <strong>High River</strong>, <strong>Strathmore</strong>, and the <strong>MD of Rocky View County</strong>. Our licensed Alberta advisors provide virtual and phone consultations — no in-person meeting required. We also serve <Link to="/life-insurance-edmonton" className="text-primary underline font-semibold">Edmonton</Link> and surrounding areas.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Alberta Insurance Regulations">
          <ContentParagraph>
            Alberta insurance advisors are regulated by the <strong>Alberta Insurance Council (AIC)</strong>. All InsuredCan advisors hold valid Alberta life and accident & sickness (A&S) licences. Key Alberta rules: insurance proceeds are creditor-protected, beneficiary designations override wills, and Alberta's Insurance Act provides strong consumer protections including a 10-day free-look period on new policies.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      {
        question: "How much does life insurance cost in Calgary in 2026?",
        answer: "A healthy 35-year-old non-smoker pays $24–$33/month for $500K of 20-year term coverage. Alberta has no PST on insurance premiums, making Calgary one of Canada's most affordable provinces for life insurance."
      },
      {
        question: "How much coverage do Calgary homeowners need?",
        answer: "With Calgary's average home price at $585,000, most families need $750K–$1.5M in coverage. Calculate 10–12x your annual income plus outstanding mortgage and debts. InsuredCan offers a free needs analysis."
      },
      {
        question: "Is disability insurance important for Calgary oil and gas workers?",
        answer: "Absolutely. Energy sector workers face both physical hazards and layoff risk. Personal disability insurance replaces 60–85% of your income if you can't work — and unlike employer coverage, it stays with you between jobs."
      },
      {
        question: "Do Calgary employer group benefits provide enough coverage?",
        answer: "Rarely. Most employer plans provide only 1–2x salary in life insurance — far below the recommended 10–12x. Group coverage also ends when you leave your job. A personal policy ensures continuous protection."
      },
      {
        question: "Can self-employed Calgarians get life insurance?",
        answer: "Yes. Self-employed contractors, consultants, and business owners can get personal life, disability, and critical illness coverage. InsuredCan compares 20+ insurers to find the best rate for your situation."
      },
      {
        question: "What's the best term length for a Calgary family?",
        answer: "A 20 or 25-year term aligns with most mortgage amortization periods and covers your children's dependent years. If you're under 35, a 25-year term locks in lower rates for longer."
      }
    ]}
  />
);

export default LifeInsuranceCalgary;
