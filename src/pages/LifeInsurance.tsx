import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways } from "@/components/ContentElements";

const LifeInsurancePage = () => {
  return (
    <PillarPageLayout
      title="Life Insurance in Canada: Your Complete Guide"
      metaTitle="Life Insurance Canada — Term, Whole & Universal Life | InsuredCan"
      metaDescription="Compare term, whole, and universal life insurance in Canada. Learn costs, tax benefits, and which policy is right for your family. Free advice from licensed advisors."
      breadcrumb="life-insurance"
      ogImage="https://www.insuredcan.ca/og/og-life-insurance.png"
      heroTag="Most Popular"
      heroDescription="Life insurance is the cornerstone of financial protection for Canadian families. Whether you're a new parent in Toronto or planning your estate in Vancouver, this guide breaks down everything you need to know—without the jargon."
    >
      <QuickAnswerBox
        question="How much does life insurance cost in Canada?"
        answer="A healthy 30-year-old non-smoker can get $500,000 of 20-year term life insurance for $25–$35/month. Whole life insurance costs 8–10x more but provides permanent coverage with cash value."
      />
      <KeyTakeaways items={[
        "Life insurance death benefits are tax-free in Canada under the Income Tax Act",
        "Term life is 5–15x cheaper than whole life for the same coverage amount",
        "Most Canadians should carry 10–15x their annual income in coverage",
        "Getting insured younger locks in significantly lower premiums for life",
        "A licensed broker can compare quotes from 20+ insurers at no cost to you",
      ]} />
      <ContentSection title="What is Life Insurance?">
        <ContentParagraph>
          Life insurance is a contract between you and an insurance company. You pay regular premiums, and in return, the insurer pays a <strong>tax-free death benefit</strong> to your beneficiaries when you pass away. In Canada, this benefit is received income-tax-free under the Income Tax Act, making it one of the most powerful estate planning tools available.
        </ContentParagraph>
        <ContentParagraph>
          There are three main types of life insurance available to Canadians: <strong>Term Life</strong>, <strong>Whole Life</strong>, and <strong>Universal Life</strong>. Each serves different needs and budgets.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Types of Life Insurance">
        <ContentH3>Term Life Insurance</ContentH3>
        <ContentParagraph>
          Term life covers you for a set period—typically 10, 20, or 30 years. It's the most affordable option and ideal for families with temporary needs like mortgage protection or income replacement while children are young.
        </ContentParagraph>
        <InfoCard title="💡 Canadian Context">
          A healthy 30-year-old non-smoker in Ontario can get $500,000 of 20-year term coverage for as little as $25–$35/month through major carriers like Sun Life, Manulife, or Canada Life.
        </InfoCard>

        <ContentH3>Whole Life Insurance</ContentH3>
        <ContentParagraph>
          Whole life provides coverage for your entire lifetime with level premiums. It builds cash value over time that you can borrow against. Participating whole life policies from Canadian mutuals (like Sun Life and Equitable Life) pay dividends that can increase your coverage or reduce premiums.
        </ContentParagraph>

        <ContentH3>Universal Life Insurance</ContentH3>
        <ContentParagraph>
          Universal life offers flexible premiums and an investment component. You can adjust your coverage and premium amounts within limits. It's popular with high-net-worth Canadians for tax-sheltered investment growth inside the policy.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Cost Estimates for Canadians">
        <ComparisonTable
          headers={["Coverage", "Age 30 (Non-Smoker)", "Age 40 (Non-Smoker)", "Age 50 (Non-Smoker)"]}
          rows={[
            ["$250,000 Term 20", "$18–$25/mo", "$28–$40/mo", "$65–$95/mo"],
            ["$500,000 Term 20", "$25–$35/mo", "$45–$65/mo", "$110–$160/mo"],
            ["$500,000 Whole Life", "$250–$350/mo", "$350–$500/mo", "$550–$800/mo"],
          ]}
        />
        <ContentParagraph>
          Rates vary by province, health status, and lifestyle. These are representative ranges from major Canadian insurers as of 2026.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Who Should Buy Life Insurance?">
        <ProsList items={[
          "Parents with dependent children who rely on your income",
          "Homeowners with a mortgage — term life is often cheaper than bank mortgage insurance",
          "Business owners who need key person insurance or buy-sell funding",
          "Anyone with debts that would burden family members",
          "High-net-worth individuals looking for tax-efficient estate transfer",
          "Couples where one spouse earns significantly more than the other",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ContentH3>Advantages</ContentH3>
        <ProsList items={[
          "Death benefit is tax-free in Canada",
          "Term life is very affordable for young, healthy Canadians",
          "Whole life builds guaranteed cash value",
          "Can be used for estate planning and tax strategies",
          "Creditor protection in many provinces",
        ]} />
        <ContentH3>Drawbacks</ContentH3>
        <ConsList items={[
          "Term life expires — you may need to renew at higher rates",
          "Whole life premiums are significantly higher",
          "Universal life requires active investment management",
          "Medical underwriting can be challenging for some applicants",
        ]} />
      </ContentSection>

      <FAQSection faqs={[
        { question: "Is life insurance tax-free in Canada?", answer: "Yes. The death benefit paid to beneficiaries is received income-tax-free under the Canadian Income Tax Act. However, if the policy has a cash surrender value and is disposed of during your lifetime, there may be tax implications on any gains." },
        { question: "How much life insurance do I need?", answer: "A common guideline is 10–15 times your annual income, but the right amount depends on your debts, number of dependents, lifestyle, and existing assets. Use the DIME method: Debt + Income replacement + Mortgage + Education costs." },
        { question: "Can I get life insurance as a newcomer to Canada?", answer: "Yes. Most Canadian insurers will issue policies to permanent residents and work permit holders. Some may have residency requirements of 1–2 years. Temporary residents may have limited options." },
        { question: "What's the difference between life insurance and mortgage insurance from my bank?", answer: "Bank mortgage insurance only covers your mortgage balance and decreases over time while premiums stay the same. A personal term life policy gives you a level death benefit, is portable, and is often cheaper. Your beneficiaries choose how to use the payout." },
        { question: "What are the best life insurance companies in Canada?", answer: "Top Canadian life insurance companies include Sun Life, Manulife, Canada Life, Desjardins, Industrial Alliance, and Equitable Life. A licensed broker like InsuredCan can compare quotes from 20+ insurers to find the best rate for your profile." },
        { question: "Can I get life insurance without a medical exam in Canada?", answer: "Yes. No-medical and simplified issue policies are available from most Canadian insurers. Coverage amounts are typically lower (up to $500,000) and premiums slightly higher, but approval is faster — often within 24–48 hours." },
        { question: "Is life insurance mandatory in Canada?", answer: "No. Life insurance is not legally required in Canada. However, it's considered essential if you have dependents, a mortgage, or business obligations that would financially impact others if you passed away." },
      ]} />
    </PillarPageLayout>
  );
};

export default LifeInsurancePage;
