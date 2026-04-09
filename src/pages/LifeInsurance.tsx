import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const LifeInsurancePage = () => {
  return (
    <PillarPageLayout
      title="Life Insurance in Canada: Your Complete Guide"
      metaTitle="Life Insurance Canada (2026): Compare 20+ Plans & Save | InsuredCan"
      metaDescription="Compare term, whole, and universal life insurance in Canada. Learn costs, tax benefits, and which policy is right for your family. Free advice from licensed advisors."
      breadcrumb="life-insurance"
      ogImage="https://www.insuredcan.ca/og/og-life-insurance.png"
      heroTag="Most Popular"
      heroDescription="If you died tomorrow, could your family keep the house? Pay for groceries? Fund your children's education? Life insurance exists for one reason — to make sure the answer is yes. This guide cuts through the jargon and shows you exactly what you need."
    >
      <QuickAnswerBox
        question="How much does life insurance cost in Canada?"
        answer="A healthy 30-year-old non-smoker can get $500,000 of 20-year term life insurance for $25–$35/month. Whole life insurance costs 8–10x more but provides permanent coverage with cash value. Death benefits are always tax-free in Canada."
      />
      <KeyTakeaways items={[
        "Life insurance death benefits are tax-free in Canada under the Income Tax Act",
        "Term life is 5–15x cheaper than whole life for the same coverage amount",
        "Most Canadians should carry 10–15x their annual income in coverage",
        "Getting insured younger locks in significantly lower premiums for life",
        "A licensed broker can compare quotes from 20+ insurers at no cost to you",
      ]} />

      {/* EMOTIONAL HOOK — unique to this page */}
      <ContentSection title="The $1.2 Million Question Most Canadian Families Ignore">
        <ContentParagraph>
          Here's a number that should keep you up at night: <strong>$1,206,000</strong>. That's what it costs to raise two children to age 18 in Ontario, including housing, food, and education — according to MoneySense and adjusted for 2026 inflation. Now add your mortgage. Your car loan. Your partner's lost income while grieving.
        </ContentParagraph>
        <ContentParagraph>
          Without life insurance, your family faces all of that with zero income from you. With life insurance, they receive a <strong>tax-free lump sum</strong> — often within 2 weeks of your passing — that covers everything. No debt. No downsizing. No GoFundMe.
        </ContentParagraph>
        <ContentParagraph>
          The irony? This protection costs less than your Netflix subscription. A <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">20-year term policy</Link> for $500,000 runs about <strong>$25–$35/month</strong> for a healthy 30-year-old. That's $0.83–$1.17/day.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="What is Life Insurance?">
        <ContentParagraph>
          Life insurance is a contract between you and an insurance company. You pay regular premiums, and in return, the insurer pays a <strong>tax-free death benefit</strong> to your beneficiaries when you pass away. In Canada, this benefit is received income-tax-free under the Income Tax Act, making it one of the most powerful estate planning tools available.
        </ContentParagraph>
        <ContentParagraph>
          There are three main types of life insurance available to Canadians: <strong><Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">Term Life</Link></strong>, <strong><Link to="/whole-life-insurance" className="text-primary font-semibold hover:underline">Whole Life</Link></strong>, and <strong>Universal Life</strong>. Each serves different needs and budgets.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Get Free Life Insurance Quote" href="mailto:sahil280389@gmail.com?subject=Free%20Life%20Insurance%20Quote" />

      <ContentSection title="Which Type Is Right For You? A Decision Framework">
        <ContentParagraph>
          Stop guessing. Use this simple framework based on your life stage:
        </ContentParagraph>
        <ComparisonTable
          headers={["Your Situation", "Best Option", "Why", "Monthly Cost (est.)"]}
          rows={[
            ["Young parent, mortgage, tight budget", "Term 20 ($1M)", "Maximum coverage, lowest cost", "$35–$55/mo"],
            ["Dual income, kids in daycare", "Term 20 ($500K each spouse)", "Covers childcare + income gap", "$50–$80/mo combined"],
            ["Self-employed, no group benefits", "Term + CI + Disability bundle", "Complete protection package", "$120–$200/mo"],
            ["High net worth, estate planning", "Whole Life (Par)", "Tax-sheltered wealth transfer", "$300–$500/mo"],
            ["Senior, final expenses only", "Guaranteed acceptance ($25K)", "No medical exam, covers funeral", "$50–$80/mo"],
            ["Newcomer, just arrived", "Term 10 or 20", "Affordable, immediate coverage", "$20–$40/mo"],
          ]}
        />
        <ContentParagraph>
          Not sure which category fits? Our <Link to="/coverage-calculator" className="text-primary font-semibold hover:underline">coverage calculator</Link> walks you through it in 60 seconds. Or read our detailed <Link to="/compare/term-vs-whole-life" className="text-primary font-semibold hover:underline">term vs. whole life comparison</Link>.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Cost Estimates for Canadians (2026 Rates)">
        <ComparisonTable
          headers={["Coverage", "Age 30 (Non-Smoker)", "Age 40 (Non-Smoker)", "Age 50 (Non-Smoker)"]}
          rows={[
            ["$250,000 Term 20", "$18–$25/mo", "$28–$40/mo", "$65–$95/mo"],
            ["$500,000 Term 20", "$25–$35/mo", "$45–$65/mo", "$110–$160/mo"],
            ["$1,000,000 Term 20", "$38–$50/mo", "$65–$90/mo", "$180–$260/mo"],
            ["$500,000 Whole Life", "$250–$350/mo", "$350–$500/mo", "$550–$800/mo"],
          ]}
        />
        <ContentParagraph>
          Rates vary by province, health status, and lifestyle. These are representative ranges from major Canadian insurers as of 2026. <Link to="/cost-life-insurance-ontario" className="text-primary font-semibold hover:underline">See Ontario-specific rates →</Link>
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Real Example: The Khans — A Brampton Family of Four">
        <ContentParagraph>
          Amir (36) and Fatima (34) Khan moved to <Link to="/life-insurance-brampton" className="text-primary font-semibold hover:underline">Brampton</Link> from Pakistan 4 years ago. Combined income: $125,000. Mortgage: $720,000. Two kids (ages 2 and 5). No employer life insurance.
        </ContentParagraph>
        <ComparisonTable
          headers={["Need", "Amount"]}
          rows={[
            ["Income replacement (15 years)", "$1,875,000"],
            ["Mortgage balance", "$720,000"],
            ["Children's education (2 kids)", "$140,000"],
            ["Settlement of debts", "$35,000"],
            ["Final expenses", "$15,000"],
            ["Total need", "$2,785,000"],
            ["Less: existing savings", "−$85,000"],
            ["Coverage purchased", "$2,700,000 (combined)"],
          ]}
        />
        <ContentParagraph>
          <strong>Solution:</strong> Amir got $1.5M 20-year term ($52/mo) and Fatima got $1.2M 20-year term ($38/mo). Total: <strong>$90/month</strong> for $2.7M of protection. They also added <Link to="/critical-illness-insurance" className="text-primary font-semibold hover:underline">critical illness</Link> riders. As <Link to="/newcomers" className="text-primary font-semibold hover:underline">newcomers</Link>, they qualified immediately with full medical underwriting.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Calculate Your Coverage Need" href="/coverage-calculator" />

      <ContentSection title="5 Costly Mistakes Canadians Make with Life Insurance">
        <ContentH3>Mistake #1: Relying on employer group insurance</ContentH3>
        <ContentParagraph>
          Group life insurance typically covers 1–2x your salary — far less than the 10–15x you actually need. Worse, it <strong>ends when you leave your job</strong>. If you develop a health condition while employed, you may be uninsurable when you leave.
        </ContentParagraph>
        <ContentH3>Mistake #2: Buying bank mortgage insurance</ContentH3>
        <ContentParagraph>
          Bank <Link to="/mortgage-insurance" className="text-primary font-semibold hover:underline">mortgage insurance</Link> costs 20–40% more than a personal term policy, decreases as your mortgage shrinks, and pays the bank — not your family. It's one of the worst financial products in Canada.
        </ContentParagraph>
        <ContentH3>Mistake #3: Waiting "until things settle down"</ContentH3>
        <ContentParagraph>
          Every year you wait costs you. A 30-year-old pays $28/mo for $500K. At 40, it's $48/mo. At 50, it's $115/mo. That's an extra $10,000+ over the life of the policy. Lock in rates young.
        </ContentParagraph>
        <ContentH3>Mistake #4: Ignoring the stay-at-home parent</ContentH3>
        <ContentParagraph>
          Childcare in Ontario costs $1,200–$2,000/month per child. If a stay-at-home parent passes away, the surviving parent faces massive new expenses. Both parents need coverage — at least $250K–$500K for the non-earning spouse.
        </ContentParagraph>
        <ContentH3>Mistake #5: Not understanding the tax advantage</ContentH3>
        <ContentParagraph>
          Life insurance death benefits are <strong>100% tax-free</strong> in Canada. A $1M policy delivers $1M to your family. Compare that to RRSPs (taxed on withdrawal) or investment accounts (capital gains tax). Read more: <Link to="/blog/is-life-insurance-taxable-canada" className="text-primary font-semibold hover:underline">Is life insurance taxable in Canada?</Link>
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="How to Get the Cheapest Life Insurance Rate in Canada">
        <ProsList items={[
          "Apply young — rates increase 8–10% for every year you delay after age 30",
          "Quit smoking — non-smoker rates are 50–70% cheaper (12 months smoke-free qualifies)",
          "Choose term over whole life — 5–15x cheaper for the same death benefit",
          "Use an independent broker (like InsuredCan) — we compare 20+ insurers to find the lowest rate",
          "Improve your health profile — lower BMI, controlled blood pressure, and no risky hobbies reduce premiums",
          "Bundle policies — adding critical illness or disability to your life policy often gets a multi-policy discount",
          "Consider a longer term — 20-year term is only $5–$10/mo more than 10-year, but avoids renewal at higher rates",
        ]} />
      </ContentSection>

      <ContentSection title="Who Should Buy Life Insurance?">
        <ProsList items={[
          "Parents with dependent children who rely on your income",
          "Homeowners with a mortgage — term life is often cheaper than bank mortgage insurance",
          "Business owners who need key person insurance or buy-sell funding",
          "Anyone with debts that would burden family members",
          "High-net-worth individuals looking for tax-efficient estate transfer",
          "Couples where one spouse earns significantly more than the other",
          "Newcomers to Canada who want immediate protection for their family",
        ]} />
        <ContentParagraph>
          Learn more about coverage for specific groups: <Link to="/families" className="text-primary font-semibold hover:underline">families</Link>, <Link to="/self-employed" className="text-primary font-semibold hover:underline">self-employed</Link>, <Link to="/young-professionals" className="text-primary font-semibold hover:underline">young professionals</Link>, and <Link to="/newcomers" className="text-primary font-semibold hover:underline">newcomers</Link>.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Speak to a Licensed Advisor" href="mailto:sahil280389@gmail.com?subject=Speak%20to%20Advisor" />

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
        { question: "How much life insurance do I need?", answer: "A common guideline is 10–15 times your annual income, but the right amount depends on your debts, number of dependents, lifestyle, and existing assets. Use the DIME method: Debt + Income replacement + Mortgage + Education costs. Try our free coverage calculator for a personalized recommendation." },
        { question: "Can I get life insurance as a newcomer to Canada?", answer: "Yes. Most Canadian insurers will issue policies to permanent residents and work permit holders. Some may have residency requirements of 1–2 years. Temporary residents may have limited options but can still access simplified issue and no-medical-exam products." },
        { question: "What's the difference between life insurance and mortgage insurance from my bank?", answer: "Bank mortgage insurance only covers your mortgage balance and decreases over time while premiums stay the same. A personal term life policy gives you a level death benefit, is portable, and is often 20–40% cheaper. Your beneficiaries choose how to use the payout." },
        { question: "What are the best life insurance companies in Canada?", answer: "Top Canadian life insurance companies include Sun Life, Manulife, Canada Life, Desjardins, Industrial Alliance, and Equitable Life. A licensed broker like InsuredCan can compare quotes from 20+ insurers to find the best rate for your specific profile." },
        { question: "Can I get life insurance without a medical exam in Canada?", answer: "Yes. No-medical and simplified issue policies are available from most Canadian insurers. Coverage amounts are typically lower (up to $500,000) and premiums slightly higher, but approval is faster — often within 24–48 hours." },
        { question: "Is life insurance mandatory in Canada?", answer: "No. Life insurance is not legally required in Canada. However, it's considered essential if you have dependents, a mortgage, or business obligations that would financially impact others if you passed away." },
      ]} />
    </PillarPageLayout>
  );
};

export default LifeInsurancePage;
