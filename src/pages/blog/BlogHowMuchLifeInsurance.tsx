import BlogArticleLayout from "@/components/BlogArticleLayout";
import { ContentSection, ContentParagraph, ContentH3, ComparisonTable, FAQSection, InfoCard, ProsList } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const BlogHowMuchLifeInsurance = () => (
  <BlogArticleLayout
    title="How Much Life Insurance Do You Need in Canada?"
    metaTitle="How Much Life Insurance Do You Need in Canada? (2026 Guide) | InsuredCan"
    metaDescription="Use the 10-15x income rule, factor in debts and dependents, and calculate exactly how much life insurance coverage your Canadian family needs."
    slug="how-much-life-insurance-canada"
    category="Life Insurance"
    author="InsuredCan Team"
    date="2026-03-15"
    readTime="8 min read"
  >
    <ContentSection title="The Quick Answer: 10–15x Your Annual Income">
      <ContentParagraph>
        The most common rule of thumb is to get <strong>10 to 15 times your annual gross income</strong> in life insurance coverage. If you earn $80,000 per year, that means $800,000 to $1,200,000 in coverage. But this rule is just a starting point—your actual needs depend on several important factors.
      </ContentParagraph>
      <InfoCard title="Quick Calculator">
        Annual income × 10–15 = Recommended coverage. Example: $80,000 × 12 = $960,000. This covers income replacement, mortgage payoff, and children's education.
      </InfoCard>
    </ContentSection>

    <ContentSection title="Factors That Determine Your Coverage Amount">
      <ContentH3>1. Income Replacement</ContentH3>
      <ContentParagraph>
        How many years of income does your family need to replace? If you have young children, they may depend on your income for 15–20 more years. A common approach is to multiply your income by the number of years until your youngest child becomes independent.
      </ContentParagraph>

      <ContentH3>2. Outstanding Debts</ContentH3>
      <ContentParagraph>
        Add up your mortgage balance, car loans, student loans, credit card debt, and any other obligations. Your life insurance should cover these so your family isn't burdened with payments.
      </ContentParagraph>

      <ContentH3>3. Number of Dependents</ContentH3>
      <ContentParagraph>
        More dependents = more coverage needed. Consider the cost of childcare, education (university in Canada averages $6,000–$20,000/year), and daily living expenses.
      </ContentParagraph>

      <ContentH3>4. Existing Savings and Assets</ContentH3>
      <ContentParagraph>
        Subtract your existing savings, investments, RRSPs, TFSAs, and any employer group life insurance from your total need. These reduce the gap your personal policy needs to fill.
      </ContentParagraph>

      <ContentH3>5. Future Expenses</ContentH3>
      <ContentParagraph>
        Consider your children's education costs, your spouse's retirement funding gap, and funeral/final expenses ($8,000–$15,000 in Canada).
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Real Example: A Toronto Family">
      <ContentParagraph>
        Let's calculate for a 35-year-old parent in Toronto earning $90,000/year with two young children:
      </ContentParagraph>
      <ComparisonTable
        headers={["Need", "Amount"]}
        rows={[
          ["Income replacement (15 years)", "$1,350,000"],
          ["Mortgage balance", "$650,000"],
          ["Children's education (2 kids)", "$160,000"],
          ["Final expenses", "$15,000"],
          ["Emergency fund", "$25,000"],
          ["Total need", "$2,200,000"],
          ["Less: existing savings/group life", "−$300,000"],
          ["Recommended coverage", "$1,900,000"],
        ]}
      />
      <ContentParagraph>
        This family should consider approximately <strong>$2 million in <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">term life insurance</Link></strong>. A 20-year term policy at this amount would cost approximately $65–$85/month for a healthy non-smoker.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Coverage Amount by Life Stage">
      <ComparisonTable
        headers={["Life Stage", "Typical Need", "Key Considerations"]}
        rows={[
          ["Single, no dependents", "$50K–$250K", "Cover debts and final expenses"],
          ["Married, no kids", "$250K–$500K", "Mortgage, income for spouse"],
          ["Young family", "$500K–$2M+", "Full income replacement + education"],
          ["Established family", "$500K–$1.5M", "Mortgage + education + retirement gap"],
          ["Empty nesters", "$250K–$500K", "Final expenses + legacy"],
          ["Retirees", "$25K–$100K", "Funeral costs + estate equalization"],
        ]}
      />
    </ContentSection>

    <ContentSection title="Term vs. Whole Life: Which Is Better for Coverage?">
      <ContentParagraph>
        For pure coverage needs (income replacement, mortgage protection), <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">term life insurance</Link> offers the most coverage per dollar. For estate planning and lifelong needs, <Link to="/whole-life-insurance" className="text-primary font-semibold hover:underline">whole life insurance</Link> provides permanent coverage with cash value. Many families use a combination of both. <Link to="/compare/term-vs-whole-life" className="text-primary font-semibold hover:underline">Read our full comparison →</Link>
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Common Mistakes to Avoid">
      <ProsList items={[
        "Don't rely solely on employer group insurance—it ends when you leave your job",
        "Don't assume your spouse doesn't need coverage—consider childcare and household costs",
        "Don't forget to factor in inflation over 15–20 years",
        "Don't wait until you're older—premiums increase significantly with age",
        "Don't confuse mortgage insurance from your bank with proper life insurance",
      ]} />
    </ContentSection>

    <FAQSection faqs={[
      { question: "Is $500,000 of life insurance enough in Canada?", answer: "For a single person or couple without children, $500K may be sufficient. For families with children and a mortgage, most need $1M–$2M+ based on the 10–15x income rule and total financial obligations." },
      { question: "Can I increase my life insurance later?", answer: "Some policies include a guaranteed insurability rider that lets you increase coverage without a medical exam at certain life events (marriage, birth of a child, home purchase). Otherwise, you'll need to apply for a new policy." },
      { question: "Should both spouses have life insurance?", answer: "Yes. Even if one spouse doesn't earn income, their contributions (childcare, household management) have significant financial value. A stay-at-home parent should consider at least $250K–$500K in coverage." },
      { question: "How much does $1 million of life insurance cost in Canada?", answer: "A healthy 35-year-old non-smoker can get $1M of 20-year term coverage for approximately $42–$55/month. Costs vary based on age, health, and smoking status." },
    ]} />
  </BlogArticleLayout>
);

export default BlogHowMuchLifeInsurance;
