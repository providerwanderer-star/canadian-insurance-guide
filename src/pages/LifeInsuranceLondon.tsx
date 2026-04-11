import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const LifeInsuranceLondon = () => (
  <LocationPageLayout
    city="London"
    province="Ontario"
    metaTitle="Life Insurance London Ontario (2026): Compare Plans & Save | InsuredCan"
    metaDescription="Compare life insurance in London, Ontario from $20/mo. Free quotes from 20+ insurers. Licensed advisors for London families, Western U staff & healthcare workers."
    slug="life-insurance-london-ontario"
    heroHeadline="Life Insurance for London, Ontario Families (2026)"
    heroDescription="London is Southwestern Ontario's largest city — home to Western University, London Health Sciences Centre, and a growing young professional population. Get personalized life insurance coverage from licensed Ontario advisors. Free quotes from 20+ insurers."
    ogImage="https://www.insuredcan.ca/og/og-london.png"
    localContent={
      <>
        <QuickAnswerBox
          question="How much does life insurance cost in London, Ontario?"
          answer="A healthy 30-year-old non-smoker in London pays $20–$26/month for $500,000 of 20-year term life insurance. London's affordable housing market (avg. $550K) means most families need $500K–$1M in coverage — significantly less than Toronto or GTA families."
        />

        <KeyTakeaways items={[
          "London's average home price ($550K) is 50% lower than Toronto — less coverage needed",
          "Western University & Fanshawe graduates can lock in rates starting under $15/month",
          "Healthcare workers at LHSC should supplement group benefits with personal coverage",
          "London's growing insurance industry (HQ for several major insurers) understands the market",
          "No PST on life insurance premiums in Ontario — built-in savings",
        ]} />

        <ContentSection title="Why London Families Need Life Insurance">
          <ContentParagraph>
            London, Ontario is one of Southwestern Ontario's fastest-growing cities, with a population exceeding <strong>420,000</strong> and a median household income of approximately <strong>$68,000</strong>. Known as the "Forest City," London offers affordable housing, world-class healthcare (London Health Sciences Centre, St. Joseph's Health Care), and a strong education sector anchored by Western University and Fanshawe College.
          </ContentParagraph>
          <ContentParagraph>
            <strong>Real-life scenario:</strong> A 33-year-old London couple — one working at LHSC, the other at Western — with a combined income of $140,000 and a $500,000 mortgage should carry approximately <strong>$1M–$1.4M</strong> in combined term life coverage. Cost? About <strong>$55–$75/month combined</strong> for 20-year term policies.
          </ContentParagraph>
        </ContentSection>

        <InlineCTA text="Get Free London Quote" href="/contact" />

        <ContentSection title="Life Insurance Costs in London, Ontario (2026)">
          <ComparisonTable
            headers={["Profile", "$500K Term (20yr)", "$1M Term (20yr)"]}
            rows={[
              ["25-year-old, non-smoker", "$16–$21/mo", "$26–$34/mo"],
              ["30-year-old, non-smoker", "$20–$26/mo", "$32–$42/mo"],
              ["35-year-old, non-smoker", "$24–$33/mo", "$40–$52/mo"],
              ["40-year-old, non-smoker", "$33–$45/mo", "$55–$74/mo"],
              ["45-year-old, non-smoker", "$52–$72/mo", "$85–$115/mo"],
              ["50-year-old, non-smoker", "$80–$108/mo", "$135–$182/mo"],
            ]}
          />
          <ContentParagraph>
            London's lower cost of living means families often need less coverage than those in the GTA, resulting in lower monthly premiums. Rates are identical to <Link to="/life-insurance-toronto" className="text-primary font-semibold hover:underline">Toronto</Link> per dollar of coverage — the savings come from needing a smaller policy.
          </ContentParagraph>
        </ContentSection>

        <ContentSection title="Coverage for London's Key Employers">
          <ComparisonTable
            headers={["Employer", "Group Life Coverage", "Recommended Top-Up"]}
            rows={[
              ["London Health Sciences Centre", "1–2x salary", "$500K–$750K personal term"],
              ["Western University", "2x salary", "$500K–$750K personal term"],
              ["Fanshawe College", "1–2x salary", "$500K personal term"],
              ["Canada Life (HQ)", "Employee benefits vary", "$500K–$1M personal term"],
              ["Self-employed/small business", "None", "$750K–$1M term + CI + disability"],
            ]}
          />
        </ContentSection>

        <InlineCTA text="Speak to a London Advisor" href="/contact" />

        <ContentSection title="Coverage Options for London Residents">
          <ProsList items={[
            "Term Life Insurance — Affordable coverage for 10–30 years, ideal for mortgage protection",
            "Whole Life Insurance — Permanent coverage with cash value for estate planning",
            "Critical Illness Insurance — Lump-sum payout for cancer, heart attack, or stroke",
            "Disability Insurance — Income protection if you can't work due to illness or injury",
            "Newcomer Insurance — Coverage for London's growing immigrant population",
            "Mortgage Protection — Protect your London home investment independently from banks",
          ]} />
          <ContentParagraph>
            Learn more about <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">term life insurance</Link> or compare with <Link to="/whole-life-insurance" className="text-primary font-semibold hover:underline">whole life insurance</Link> to find the right fit.
          </ContentParagraph>
        </ContentSection>

        <InfoCard title="London, Ontario Advantage">
          London is home to several major insurance company headquarters, including <strong>Canada Life</strong>. This deep insurance expertise in the city means London residents have access to highly competitive rates. InsuredCan compares all major carriers to ensure you get the best deal — even from the companies headquartered in your own city.
        </InfoCard>

        <ContentSection title="London vs. GTA: Coverage Comparison">
          <ComparisonTable
            headers={["Factor", "London", "Hamilton", "Toronto"]}
            rows={[
              ["Avg. home price", "$550,000", "$750,000", "$1,100,000+"],
              ["Recommended coverage", "$500K–$1M", "$750K–$1.25M", "$1.5M–$2M"],
              ["Monthly cost ($750K term, age 30)", "$28–$36/mo", "$28–$36/mo", "$28–$36/mo"],
              ["Median household income", "$68,000", "$78,000", "$84,000"],
            ]}
          />
        </ContentSection>

        <ContentSection title="Serving All of London & Southwestern Ontario">
          <ContentParagraph>
            InsuredCan serves families across London including Byron, Masonville, Old South, Wortley Village, White Oaks, Westmount, and Hyde Park. We also serve St. Thomas, Woodstock, Stratford, and communities throughout Middlesex County. Licensed Ontario advisors available for virtual and phone consultations.
          </ContentParagraph>
        </ContentSection>
      </>
    }
    faqs={[
      { question: "How much life insurance do I need in London, Ontario?", answer: "Most financial advisors recommend 10–15x your annual income. For a London family earning $68,000, that's $680K–$1M in coverage. Factor in your mortgage balance, children's education costs, and outstanding debts for a precise number." },
      { question: "What's the best life insurance for London homeowners?", answer: "20-year term life insurance is the most popular choice for London homeowners. It aligns with typical mortgage periods and offers affordable premiums. A $500K policy costs just $20–$26/month for a healthy 30-year-old." },
      { question: "Do Western University employees need personal life insurance?", answer: "Yes. Western's group plan covers 2x salary, which is better than most employers but still below the 10–15x recommended. A personal $500K–$750K term policy supplements your group coverage and stays with you if you change jobs." },
      { question: "Can newcomers to London get life insurance?", answer: "Yes. Many Canadian insurers offer coverage to newcomers with work permits, study permits, or new PR status. InsuredCan helps London's growing immigrant and international student community find affordable options." },
      { question: "Is bank mortgage insurance worth it in London?", answer: "No. A personal term life policy is 20–40% cheaper, pays your family (not the bank), and is portable. With London mortgages averaging $450K–$550K, switching saves $300–$600/year." },
      { question: "What's the cheapest life insurance in London, Ontario?", answer: "10-year term life is the cheapest: a healthy 25-year-old gets $500K for $14–$18/month. 20-year term ($20–$26/month) offers better long-term value for families with young children." },
      { question: "Is critical illness insurance worth it in London?", answer: "Yes. 1 in 2 Canadians will face cancer. A $100K CI policy costs $48–$72/month for a 30-year-old and provides a tax-free lump sum for expenses OHIP doesn't cover — lost income, childcare, and mortgage payments." },
      { question: "Can Fanshawe and Western students get life insurance?", answer: "Yes. Students and recent graduates can apply. Starting in your early 20s means extremely low rates — often under $15/month for $250K. It's one of the smartest early financial moves you can make." },
      { question: "Does InsuredCan serve all of Southwestern Ontario?", answer: "Yes. We serve London, St. Thomas, Woodstock, Stratford, Sarnia, and all Middlesex and surrounding counties. Licensed Ontario advisors available for virtual and phone consultations." },
      { question: "How do I get a free life insurance quote in London?", answer: "Click 'Get Free Quote' on this page or call InsuredCan. A licensed Ontario advisor compares rates from 20+ insurers and recommends the best coverage — completely free, no-obligation. Takes about 2 minutes." },
    ]}
  />
);

export default LifeInsuranceLondon;
