import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentParagraph, ProsList, ComparisonTable, FAQSection, InfoCard } from "@/components/ContentElements";

const InsuranceForSelfEmployedPage = () => {
  return (
    <PillarPageLayout
      title="Insurance for Self-Employed & Freelancers in Canada"
      metaTitle="Insurance for Self-Employed Canada — Health, Disability & Tax Tips | InsuredCan"
      metaDescription="Self-employed in Canada? Build your own safety net with health, disability, and life insurance. Learn tax deductions and coverage options for freelancers and contractors."
      breadcrumb="self-employed"
      heroTag="Self-Employed"
      heroDescription="No employer benefits? No problem. Self-employed Canadians, freelancers, and independent contractors can build comprehensive coverage—and much of it is tax-deductible."
    >
      <ContentSection title="Why Insurance Is Critical for the Self-Employed">
        <ContentParagraph>
          When you're self-employed, there's no employer to provide sick leave, health benefits, or disability coverage. If you can't work, your income stops immediately. If you get sick, you pay for everything out of pocket.
        </ContentParagraph>
        <InfoCard title="💡 The Self-Employed Risk">
          <strong>1 in 3</strong> working Canadians will be disabled for 90+ days before age 65. For employees, group LTD covers this. For the self-employed, it's your own savings—unless you have individual disability insurance.
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

      <ContentSection title="Tax Deductions for Self-Employed">
        <ProsList items={[
          "Health & dental premiums are deductible as medical expenses (Line 33099)",
          "Health Spending Account (HSA) through your corporation = 100% deductible business expense",
          "Disability insurance premiums paid personally = tax-free benefits when you claim",
          "Business overhead expense insurance premiums are a deductible business expense",
          "Group insurance through a professional association may offer tax advantages",
        ]} />
        <InfoCard title="🍁 Pro Tip: Incorporate + HSA">
          If you're incorporated, setting up a Health Spending Account through your corporation lets you deduct 100% of eligible medical expenses as a business cost. This includes dental, prescriptions, vision, massage, counselling, and much more.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Business Overhead Expense Insurance">
        <ContentParagraph>
          This specialized policy covers your fixed business costs—rent, utilities, employee salaries, lease payments—if you're disabled and can't work. It keeps your business alive while you recover.
        </ContentParagraph>
      </ContentSection>

      <FAQSection faqs={[
        { question: "Can I deduct health insurance premiums as a sole proprietor?", answer: "Yes. As a self-employed individual, you can claim private health insurance premiums as a medical expense on your personal tax return. If incorporated, premiums paid through a Health Spending Account are a fully deductible business expense." },
        { question: "What's business overhead expense insurance?", answer: "BOE insurance covers your fixed business costs (rent, utilities, employee wages, lease payments) while you're disabled. It's separate from personal disability insurance and ensures your business survives your absence." },
        { question: "Should I pay disability premiums personally or through my corporation?", answer: "Pay personally. If you pay disability insurance premiums with after-tax personal dollars, the benefits you receive are tax-free. If your corporation pays, the benefits are taxable income." },
      ]} />
    </PillarPageLayout>
  );
};

export default InsuranceForSelfEmployedPage;
