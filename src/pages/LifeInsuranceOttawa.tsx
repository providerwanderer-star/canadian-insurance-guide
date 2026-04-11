import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const LifeInsuranceOttawa = () => (
  <LocationPageLayout
    city="Ottawa"
    province="Ontario"
    metaTitle="Life Insurance Ottawa (2026): Federal Employee & Family Plans | InsuredCan"
    metaDescription="Compare life insurance in Ottawa from $22/mo. Expert coverage for federal employees, military, RCMP & Ottawa families. Licensed Ontario advisors — free quotes."
    slug="life-insurance-ottawa"
    heroHeadline="Life Insurance for Ottawa Families & Federal Employees (2026)"
    heroDescription="Ottawa is Canada's capital and home to the country's largest public service workforce. Whether you work for the federal government or the private sector, protect your family's future with the right life insurance. Compare 20+ insurers free."
    ogImage="https://www.insuredcan.ca/og/og-ottawa.png"
    localContent={
      <>
        <QuickAnswerBox
          question="How much does life insurance cost in Ottawa?"
          answer="A healthy 30-year-old non-smoker in Ottawa pays $22–$28/month for $500,000 of 20-year term life insurance. Federal employees should supplement their PSHCP group coverage — group life typically covers only 1–2x salary, far below the recommended 10–15x."
        />

        <KeyTakeaways items={[
          "Federal employee group life covers only 1–2x salary — personal insurance fills the $500K+ gap",
          "Ottawa home prices average $650K–$800K, requiring $1M+ in coverage for homeowners",
          "Bilingual service available — conseil en assurance en français pour Ottawa-Gatineau",
          "Military and RCMP members need personal coverage that extends beyond service",
          "Group benefits end when you leave the public service — personal policies are portable",
        ]} />

        <ContentSection title="Why Federal Employees Need Personal Life Insurance">
          <ContentParagraph>
            Over <strong>130,000 federal public servants</strong> work in Ottawa-Gatineau. The Public Service Health Care Plan (PSHCP) and group life insurance provide a solid foundation — but they're not enough. Federal group life insurance typically covers only <strong>1–2x your annual salary</strong>. For a PS-04 earning $95,000, that's $95K–$190K in coverage.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Real-life scenario:</strong> A 38-year-old federal employee (EX-01, $120,000 salary) with a $700,000 Ottawa home and two children needs approximately <strong>$1.5M</strong> in total life insurance. After subtracting $240K in group coverage, they need a personal <strong>$1.25M term policy</strong> — costing about <strong>$48–$65/month</strong>. Most importantly: group benefits end when you leave the public service. A personal policy stays with you forever.
          </ContentParagraph>
        </ContentSection>

        <InlineCTA text="Get Free Ottawa Quote" href="/contact" />

        <ContentSection title="Life Insurance Costs in Ottawa (2026)">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$1M Term (20yr)", "$1.5M Term (20yr)"]}
            rows={[
              ["25-year-old, non-smoker", "$17–$22/mo", "$28–$36/mo", "$39–$52/mo"],
              ["30-year-old, non-smoker", "$22–$28/mo", "$35–$45/mo", "$50–$65/mo"],
              ["35-year-old, non-smoker", "$26–$36/mo", "$44–$58/mo", "$62–$83/mo"],
              ["40-year-old, non-smoker", "$36–$50/mo", "$60–$82/mo", "$86–$117/mo"],
              ["45-year-old, non-smoker", "$58–$78/mo", "$95–$128/mo", "$135–$183/mo"],
              ["50-year-old, non-smoker", "$88–$118/mo", "$150–$200/mo", "$215–$290/mo"],
            ]}
          />
          <ContentParagraph>
            Ontario does not charge provincial sales tax on life insurance premiums, keeping costs competitive. These rates are from major Canadian insurers for standard risk profiles.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Ottawa's Unique Insurance Needs">
          <ComparisonTable
            headers={["Group", "Group Coverage", "Personal Gap to Fill", "Monthly Cost"]}
            rows={[
              ["Federal PS (EX-01)", "2x salary ($240K)", "$1M–$1.25M term", "$38–$55/mo"],
              ["Federal PS (AS-05)", "2x salary ($170K)", "$750K–$1M term", "$32–$45/mo"],
              ["RCMP member", "SISIP coverage", "$500K–$1M term", "$25–$40/mo"],
              ["CAF member", "SISIP Financial", "$750K–$1M term", "$30–$45/mo"],
              ["Private sector (tech)", "1x salary", "$1M+ term", "$35–$50/mo"],
            ]}
          />
        </ContentSection>

        <InlineCTA text="Speak to an Ottawa Advisor" href="/contact" />

        <ContentSection title="Insurance Options for Ottawa Residents">
          <ProsList items={[
            "Term Life Insurance — Affordable, level coverage for 10–30 years to protect your mortgage and family",
            "Whole Life Insurance — Permanent coverage with guaranteed cash value for estate planning",
            "Critical Illness Insurance — Tax-free lump sum for 25+ conditions including cancer and heart attack",
            "Disability Insurance — Replace lost income if illness or injury prevents you from working",
            "Health & Dental Insurance — Fill gaps in OHIP with dental, vision, drugs, and paramedical coverage",
            "Bilingual Service — Conseil et devis d'assurance en français pour les résidents d'Ottawa-Gatineau",
          ]} />
          <ContentParagraph>
            Not sure what coverage you need? Try our <Link to="/coverage-calculator" className="text-primary font-semibold hover:underline">coverage calculator</Link> or read the <Link to="/life-insurance-ontario" className="text-primary font-semibold hover:underline">Ontario life insurance guide</Link>.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="🏛️ Federal Public Servants — Know Your Gaps">
          The Public Service Health Care Plan (PSHCP) and Disability Insurance Plan (PSDIP) provide solid group benefits — but group life coverage is typically 1–2x salary, far below recommended levels. And <strong>all group benefits end when you leave the public service</strong>. A personal policy ensures continuous, portable protection on your terms, locked in at today's rates.
        </InfoCard>

        <ContentSection title="Ottawa's Bilingual Insurance Market">
          <ContentParagraph>
            Ottawa's unique bilingual character means many residents need insurance advice in French. InsuredCan's advisors are fully licensed in Ontario and serve French-speaking clients across Ottawa-Gatineau. Whether you live on the Ontario or Quebec side, we help you navigate <Link to="/life-insurance" className="text-primary font-semibold hover:underline">life insurance options</Link> in your preferred language.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Serving Ottawa & the National Capital Region">
          <ContentParagraph>
            InsuredCan serves families across the National Capital Region including Kanata, Barrhaven, Orleans, Nepean, Gloucester, Stittsville, Carleton Place, and across the river in Gatineau. Our bilingual advisors provide consultations in English and French — virtually or by phone.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      { question: "Do I need additional life insurance if I'm a federal government employee?", answer: "Yes. Federal group life insurance typically covers 1–2x your annual salary — far below the 10–15x recommended. A personal term policy fills this $500K–$1M+ gap and remains in force even after you retire or leave the public service." },
      { question: "Can I get insurance advice in French in Ottawa?", answer: "Absolutely. InsuredCan offers fully bilingual service in English and French. Our advisors provide quotes, explain coverage options, and assist with applications in your preferred language — serving Ottawa and the broader Ottawa-Gatineau region." },
      { question: "If I live in Gatineau but work in Ottawa, where do I get insured?", answer: "Your province of residence determines which regulations apply. Quebec residents fall under AMF; Ontario residents fall under FSRA. InsuredCan can help clients on both sides of the river find the right coverage through our licensed network." },
      { question: "How does Ottawa's real estate market affect my insurance needs?", answer: "With Ottawa home prices averaging $650K–$800K, your life insurance should at minimum cover your mortgage balance plus 5–10 years of living expenses. For a family earning $150K with a $700K mortgage, $1.5M–$2M of coverage is a reasonable starting point." },
      { question: "Is there life insurance for RCMP or military members in Ottawa?", answer: "Yes. RCMP members have SISIP coverage, and CAF members have SISIP Financial. These provide baseline coverage, but personal insurance is advisable for coverage above group limits, for dependant spouses, and for portability after service." },
      { question: "What's the best life insurance for Ottawa tech workers?", answer: "Ottawa's growing tech sector (Shopify, Nokia, etc.) employees should consider personal term life + disability + critical illness. Startups often have limited group benefits. A $1M term policy costs $35–$50/month for a 30-year-old." },
      { question: "Is bank mortgage insurance worth it in Ottawa?", answer: "No. A personal term life policy is 20–40% cheaper, pays your family directly, and is portable when you refinance or switch lenders. With Ottawa mortgages of $550K–$750K, savings add up to $400–$800/year." },
      { question: "Can newcomers to Ottawa get life insurance?", answer: "Yes. Many Canadian insurers offer coverage to newcomers with work permits, study permits, or new PR status. InsuredCan helps Ottawa's diverse newcomer community find affordable coverage — no Canadian credit history required." },
      { question: "What happens to my federal group life insurance when I retire?", answer: "Most federal group life insurance ends or significantly decreases when you retire. A personal whole life or term-to-65 policy ensures continuous coverage into retirement. Lock in rates while you're still working and healthy." },
      { question: "How do I get a free life insurance quote in Ottawa?", answer: "Click 'Get Free Quote' on this page or call InsuredCan. A licensed Ontario advisor compares rates from 20+ insurers — completely free, no-obligation. Bilingual service available in English and French." },
    ]}
  />
);

export default LifeInsuranceOttawa;
