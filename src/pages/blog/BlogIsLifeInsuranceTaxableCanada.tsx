import BlogArticleLayout from "@/components/BlogArticleLayout";
import { ContentSection, ContentParagraph, ProsList, FAQSection, InfoCard, ComparisonTable } from "@/components/ContentElements";

const BlogIsLifeInsuranceTaxableCanada = () => (
  <BlogArticleLayout
    title="Is Life Insurance Taxable in Canada? The Complete 2026 Guide"
    metaTitle="Is Life Insurance Taxable in Canada? 2026 Complete Guide | InsuredCan"
    metaDescription="Life insurance death benefits are tax-free in Canada, but there are exceptions. Learn exactly when life insurance proceeds are taxable, including cash value and corporate policies."
    slug="is-life-insurance-taxable-canada"
    category="Life Insurance"
    author="InsuredCan Editorial"
    date="April 7, 2026"
    readTime="7 min read"
  >
    <ContentSection title="The Short Answer: Life Insurance Is Tax-Free in Canada (Mostly)">
      <ContentParagraph>
        In Canada, life insurance death benefits paid to a named beneficiary are received <strong>completely income-tax-free</strong> under Section 148 of the Income Tax Act. This is one of the most powerful features of Canadian life insurance — your beneficiaries receive the full payout without reporting it as income.
      </ContentParagraph>
      <ContentParagraph>
        However, there are several important exceptions and nuances. Cash value growth, corporate-owned policies, and certain policy dispositions can trigger tax consequences. This guide covers every scenario you need to understand.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="When Life Insurance Is Tax-Free">
      <ContentParagraph>
        The death benefit paid to a <strong>named beneficiary</strong> (not the estate) when the insured person dies is always income-tax-free in Canada. This applies to:
      </ContentParagraph>
      <ProsList items={[
        "Term life insurance death benefits — 100% tax-free to the named beneficiary",
        "Whole life and universal life death benefits — 100% tax-free when paid on death",
        "Critical illness insurance lump-sum payouts — tax-free as they are insurance benefits, not income",
        "Disability insurance benefits from personally-owned policies — tax-free since premiums were paid with after-tax dollars",
        "Accidental death benefits — tax-free",
      ]} />
      <InfoCard title="✅ Key Rule: Named Beneficiary vs. Estate">
        If the death benefit goes to a named beneficiary (e.g., your spouse or children), it bypasses your estate entirely and is paid directly and tax-free. If it's paid to your estate, it's still tax-free income, but it becomes subject to probate fees and potential creditor claims — a key reason to always name a beneficiary directly.
      </InfoCard>
    </ContentSection>

    <ContentSection title="When Life Insurance CAN Be Taxable">
      <ContentParagraph>
        <strong>1. Cash Surrender Value (CSV) and Policy Dispositions</strong>
      </ContentParagraph>
      <ContentParagraph>
        If you cancel (surrender) a whole life or universal life policy and receive its cash surrender value, the amount exceeding your adjusted cost basis (ACB) is taxable as income. The ACB is essentially the total premiums you've paid minus any tax-exempt portion recognized over the policy's life.
      </ContentParagraph>
      <ComparisonTable
        headers={["Scenario", "Taxable?", "What's Taxed?"]}
        rows={[
          ["Death benefit to named beneficiary", "No", "Nothing"],
          ["Death benefit paid to estate", "No (but subject to probate)", "Nothing"],
          ["Cash surrender value > ACB", "Yes", "CSV minus ACB (as income)"],
          ["Policy sold to third party", "Yes", "Proceeds minus ACB"],
          ["Dividend withdrawals (excess of premium)", "Sometimes", "Amount over ACB"],
          ["Employer-paid disability benefits", "Yes", "Full benefit amount"],
        ]}
      />
      <ContentParagraph>
        <strong>2. Employer-Paid Disability Insurance Benefits</strong>
      </ContentParagraph>
      <ContentParagraph>
        If your employer pays your disability insurance premiums, any disability benefits you receive are fully taxable. This is the opposite of personally-owned disability policies, where you pay premiums with after-tax dollars and receive tax-free benefits. Many Canadians don't realize this distinction until they file a claim.
      </ContentParagraph>
      <ContentParagraph>
        <strong>3. Corporate-Owned Life Insurance</strong>
      </ContentParagraph>
      <ContentParagraph>
        When a corporation owns a life insurance policy on a key person or shareholder, the rules are more complex. The death benefit flows to the corporation tax-free, but additional steps are required to distribute funds to shareholders tax-efficiently via the Capital Dividend Account (CDA). Improper handling can result in taxable dividends.
      </ContentParagraph>
      <ContentParagraph>
        <strong>4. Policy Loans and Withdrawals</strong>
      </ContentParagraph>
      <ContentParagraph>
        Borrowing against your policy's cash value through a policy loan is generally not taxable (as it's a loan, not income). However, if the loan balance exceeds your policy's ACB at the time of a "disposition" (surrender or lapse), tax may be triggered. Universal life fund withdrawals in excess of ACB are taxable in the year of withdrawal.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Life Insurance and the Capital Dividend Account (CDA)">
      <ContentParagraph>
        For incorporated business owners, the Capital Dividend Account (CDA) is a critical tax planning tool. When a corporation receives a life insurance death benefit exceeding the policy's ACB, the excess flows into the CDA. Shareholders can then receive capital dividends from the CDA completely tax-free — making corporate-owned life insurance one of the most powerful wealth transfer strategies available to Canadian entrepreneurs.
      </ContentParagraph>
      <ContentParagraph>
        Example: A corporation owns a $2M life insurance policy with an ACB of $200,000. On the insured's death, the corporation receives $2M tax-free. The $1.8M excess goes into the CDA, and the corporation can then pay shareholders a $1.8M capital dividend with zero personal tax owing.
      </ContentParagraph>
    </ContentSection>

    <ContentSection title="Does Life Insurance Affect Your Income Tax Return?">
      <ContentParagraph>
        For most Canadians, life insurance has <strong>no impact on your annual tax return</strong>:
      </ContentParagraph>
      <ProsList items={[
        "Term life insurance premiums: Not tax deductible (except in limited business contexts)",
        "Death benefits received: Do not go on your T1 return — they're not income",
        "Critical illness benefits: Do not appear on your return",
        "Personally-owned disability benefits: Tax-free, not reported as income",
      ]} />
    </ContentSection>

    <FAQSection faqs={[
      {
        question: "Do I have to report life insurance on my taxes in Canada?",
        answer: "No. If you're a beneficiary who received a life insurance death benefit, you do not report it as income on your T1 return. The death benefit is tax-free. The only exception is if your policy has cash value and you disposed of it (surrendered or sold it) during your lifetime — in that case, any gains above your adjusted cost basis are reported as income."
      },
      {
        question: "Is the death benefit from a life insurance policy considered part of the estate?",
        answer: "Only if the estate is named as beneficiary. If you name a specific person (spouse, children, etc.) as beneficiary, the death benefit bypasses the estate entirely and is paid directly to them — avoiding probate fees and creditor claims. This is one of the primary advantages of naming beneficiaries directly."
      },
      {
        question: "Are life insurance premiums tax deductible in Canada?",
        answer: "Generally no. Personal life insurance premiums are not tax deductible. There are limited exceptions: life insurance used as collateral for a business loan may qualify for a partial deduction (the lesser of the premium or net cost of pure insurance). Corporate-owned key person policies are also not deductible. Consult a tax professional for your specific situation."
      },
      {
        question: "Is critical illness insurance taxable in Canada?",
        answer: "No. Critical illness insurance payouts are tax-free whether you pay the premiums personally or through a business. Unlike disability insurance, there is no distinction between employer-paid and personally-paid CI policies — the lump-sum benefit is always tax-free."
      },
      {
        question: "What happens to my life insurance policy if I emigrate from Canada?",
        answer: "Emigrating from Canada is considered a 'deemed disposition' of certain assets for tax purposes, but Canadian life insurance policies generally are not subject to departure tax. However, the policy may become subject to the tax rules of your new country of residence. Speak with a cross-border tax specialist before emigrating if you have life insurance policies with significant cash value."
      }
    ]} />
  </BlogArticleLayout>
);

export default BlogIsLifeInsuranceTaxableCanada;
