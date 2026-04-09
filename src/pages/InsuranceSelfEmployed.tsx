import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentParagraph, ProsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const InsuranceForSelfEmployedPage = () => {
  return (
    <PillarPageLayout
      title="Insurance for Self-Employed & Freelancers in Ontario (2026)"
      metaTitle="Insurance for Self-Employed Canada (2026): Health, Disability & Tax Tips | InsuredCan"
      metaDescription="Self-employed in Ontario? Build your own safety net with health, disability & life insurance. Learn tax deductions and save on premiums. Free quotes from 20+ insurers."
      breadcrumb="self-employed"
      ogImage="https://www.insuredcan.ca/og/og-self-employed.png"
      heroTag="Self-Employed 2026"
      heroDescription="No employer benefits? No problem. Self-employed Ontarians, freelancers, and independent contractors can build comprehensive coverage — and much of it is tax-deductible."
    >
      <QuickAnswerBox
        question="What insurance do self-employed Canadians need?"
        answer="Self-employed Canadians should prioritize: disability insurance (replaces income if you can't work), health & dental coverage, life insurance if you have dependents, and critical illness insurance. Many premiums are tax-deductible as business expenses through a Health Spending Account."
      />
      <KeyTakeaways items={[
        "1 in 3 working Canadians will be disabled for 90+ days before age 65",
        "Self-employed have no employer sick leave or group disability coverage",
        "Health & dental premiums are tax-deductible for self-employed individuals",
        "Individual disability insurance replaces 60–70% of your pre-disability income",
        "A comprehensive self-employed insurance stack costs $400–$700/month",
      ]} />

      <ContentSection title="Why Insurance Is Critical for the Self-Employed">
        <ContentParagraph>
          When you're self-employed, there's no employer to provide sick leave, health benefits, or <Link to="/disability-insurance" className="text-primary underline hover:no-underline">disability coverage</Link>. If you can't work, your income stops immediately. If you get sick, you pay for everything out of pocket — <Link to="/compare/private-vs-ohip" className="text-primary underline hover:no-underline">OHIP has major gaps</Link>.
        </ContentParagraph>
        <InfoCard title="💡 The Self-Employed Risk">
          <strong>1 in 3</strong> working Canadians will be disabled for 90+ days before age 65. For employees, group LTD covers this. For the self-employed, it's your own savings — unless you have individual disability insurance.
        </InfoCard>
      </ContentSection>

      <ContentSection title="The Self-Employed Insurance Stack">
        <ComparisonTable
          headers={["Priority", "Insurance Type", "Why It Matters", "Monthly Cost"]}
          rows={[
            ["#1", "Disability Insurance", "Replaces income if you can't work", "$80–$200/mo"],
            ["#2", "Health & Dental", "Covers drugs, dental, vision, therapy", "$120–$250/mo"],
            ["#3", "Term Life Insurance", "Protects family/business partners", "$25–$50/mo"],
            ["#4", "Critical Illness", "Lump sum for major diagnosis", "$50–$100/mo"],
            ["#5", "Business Overhead Expense", "Covers business costs during disability", "$40–$80/mo"],
          ]}
        />
      </ContentSection>

      <InlineCTA text="Get a Free Self-Employed Insurance Quote" />

      <ContentSection title="Tax Deductions for Self-Employed in Ontario">
        <ProsList items={[
          "Health & dental premiums are deductible as medical expenses (Line 33099)",
          "Health Spending Account (HSA) through your corporation = 100% deductible business expense",
          "Disability insurance premiums paid personally = tax-free benefits when you claim",
          "Business overhead expense insurance premiums are a deductible business expense",
          "Group insurance through a professional association may offer tax advantages",
        ]} />
        <InfoCard title="🍁 Pro Tip: Incorporate + HSA">
          If you're incorporated in Ontario, setting up a Health Spending Account through your corporation lets you deduct 100% of eligible medical expenses as a business cost. This includes dental, prescriptions, vision, massage, counselling, and much more. Learn about <Link to="/health-insurance" className="text-primary underline hover:no-underline">health insurance options</Link>.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Business Overhead Expense Insurance">
        <ContentParagraph>
          This specialized policy covers your fixed business costs — rent, utilities, employee salaries, lease payments — if you're disabled and can't work. It keeps your business alive while you recover. Essential for Ontario professionals with brick-and-mortar operations.
        </ContentParagraph>
        <ContentParagraph>
          Consider pairing BOE with <Link to="/critical-illness-insurance" className="text-primary underline hover:no-underline">critical illness insurance</Link> for comprehensive protection. Read our <Link to="/compare/critical-illness-vs-disability" className="text-primary underline hover:no-underline">comparison guide</Link> to understand how they work together.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Speak to a Business Insurance Specialist" />

      <FAQSection faqs={[
        { question: "Can I deduct health insurance premiums as a sole proprietor in Ontario?", answer: "Yes. As a self-employed individual, you can claim private health insurance premiums as a medical expense on your personal tax return. If incorporated, premiums paid through a Health Spending Account are a fully deductible business expense." },
        { question: "What's business overhead expense insurance?", answer: "BOE insurance covers your fixed business costs (rent, utilities, employee wages, lease payments) while you're disabled. It's separate from personal disability insurance and ensures your business survives your absence. Costs $40–$80/month." },
        { question: "Should I pay disability premiums personally or through my corporation?", answer: "Pay personally. If you pay disability insurance premiums with after-tax personal dollars, the benefits you receive are tax-free. If your corporation pays, the benefits are taxable income — reducing the net payout by your marginal tax rate." },
        { question: "How much does disability insurance cost for self-employed in Ontario?", answer: "For a self-employed Ontarian earning $80K–$120K, individual disability insurance covering $4,000–$6,000/month in benefits costs $80–$200/month depending on occupation, waiting period, and benefit period. Own-occupation coverage costs more but is worth it." },
        { question: "Do self-employed people need life insurance?", answer: "If you have dependents, a mortgage, or business partners, yes. Term life insurance protects your family if you pass away, and key person insurance protects your business. A $500K term policy costs just $25–$50/month for a healthy 30-year-old." },
        { question: "What's the best health insurance for freelancers in Ontario?", answer: "Individual health & dental plans from insurers like Sun Life, Manulife, and Green Shield start at $120–$250/month. Through a broker like InsuredCan, you can compare plans from 20+ insurers to find the best value for your specific needs." },
      ]} />
    </PillarPageLayout>
  );
};

export default InsuranceForSelfEmployedPage;
