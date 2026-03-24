import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard } from "@/components/ContentElements";

const FuneralInsurance = () => {
  return (
    <PillarPageLayout
      title="Funeral & Final Expense Insurance in Canada"
      metaTitle="Funeral Insurance Canada — Cover Final Expenses ($8K–$15K) | InsuredCan"
      metaDescription="Funeral insurance covers burial, cremation, and final expenses so your family isn't financially burdened. Learn about costs and coverage options in Canada."
      breadcrumb="funeral-insurance"
      heroTag="Final Expense Coverage"
      heroDescription="Funeral and final expense insurance ensures your family isn't left with the financial burden of funeral costs, debts, and end-of-life expenses. Affordable plans with guaranteed acceptance."
    >
      <ContentSection title="What Is Funeral Insurance?">
        <ContentParagraph>
          Funeral insurance (also called final expense insurance or burial insurance) is a small whole life insurance policy designed specifically to cover the costs associated with death—funeral services, burial or cremation, outstanding debts, and other end-of-life expenses.
        </ContentParagraph>
        <ContentParagraph>
          Coverage typically ranges from $5,000 to $50,000, with simplified or guaranteed acceptance underwriting, making it accessible even for older Canadians or those with health conditions.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Average Funeral Costs in Canada">
        <ContentParagraph>
          Many Canadians are shocked by how much funerals actually cost. Here's a realistic breakdown:
        </ContentParagraph>
        <ComparisonTable
          headers={["Expense", "Average Cost"]}
          rows={[
            ["Funeral home services", "$2,000–$4,000"],
            ["Casket", "$1,500–$5,000"],
            ["Burial plot", "$1,500–$5,000"],
            ["Headstone/marker", "$1,000–$3,000"],
            ["Embalming & preparation", "$500–$1,500"],
            ["Flowers & ceremony", "$500–$2,000"],
            ["Death certificates", "$50–$200"],
            ["Total (Traditional Burial)", "$8,000–$15,000+"],
            ["Total (Cremation)", "$3,000–$7,000"],
          ]}
        />
        <InfoCard title="The Real Impact">
          Without funeral insurance, your family may need to cover $8,000–$15,000 in immediate expenses at one of the most difficult times in their lives. Many families go into debt or drain savings to cover these costs.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Types of Funeral Insurance in Canada">
        <ContentH3>Simplified Issue</ContentH3>
        <ContentParagraph>
          Requires answering a few health questions but no medical exam. Coverage begins immediately. Lower premiums than guaranteed issue.
        </ContentParagraph>
        <ContentH3>Guaranteed Acceptance</ContentH3>
        <ContentParagraph>
          No health questions or medical exams required. Anyone aged 40–85 can qualify. Usually includes a 2-year waiting period for natural death (accidental death covered immediately). Higher premiums due to the guaranteed acceptance.
        </ContentParagraph>
        <ContentH3>Pre-Need Funeral Insurance</ContentH3>
        <ContentParagraph>
          Purchased directly through a funeral home to lock in today's prices for specific funeral arrangements. The policy is assigned directly to the funeral provider.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Who Should Get Funeral Insurance?">
        <ProsList items={[
          "Seniors who want to cover their final expenses",
          "Anyone who doesn't want to burden their family financially",
          "People with health conditions who can't qualify for traditional life insurance",
          "Those without existing life insurance or sufficient savings",
          "Parents who want to ensure their funeral is pre-planned and paid for",
          "Low-income individuals who need affordable permanent coverage",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ContentH3>Advantages</ContentH3>
        <ProsList items={[
          "Easy to qualify—no medical exam required",
          "Permanent coverage that never expires",
          "Fixed premiums that never increase",
          "Small, affordable monthly payments ($30–$80/month)",
          "Fast payout to beneficiaries (usually within days)",
          "Cash value accumulation in some policies",
        ]} />
        <ContentH3>Disadvantages</ContentH3>
        <ConsList items={[
          "Lower coverage amounts ($5K–$50K)",
          "Higher cost per $1,000 of coverage compared to term life",
          "Guaranteed issue policies have a 2-year waiting period",
          "Not a replacement for comprehensive life insurance",
        ]} />
      </ContentSection>

      <ContentSection title="How Much Does Funeral Insurance Cost?">
        <ComparisonTable
          headers={["Age", "$10K Coverage", "$15K Coverage", "$25K Coverage"]}
          rows={[
            ["50", "$25–$35/mo", "$35–$50/mo", "$55–$80/mo"],
            ["55", "$30–$42/mo", "$42–$60/mo", "$68–$95/mo"],
            ["60", "$38–$55/mo", "$55–$78/mo", "$88–$125/mo"],
            ["65", "$48–$70/mo", "$70–$100/mo", "$115–$165/mo"],
            ["70", "$65–$95/mo", "$95–$140/mo", "$155–$225/mo"],
            ["75", "$85–$130/mo", "$125–$190/mo", "$210–$310/mo"],
          ]}
        />
      </ContentSection>

      <FAQSection faqs={[
        { question: "What's the difference between funeral insurance and life insurance?", answer: "Funeral insurance is a type of whole life insurance with smaller coverage amounts ($5K–$50K) specifically designed for end-of-life expenses. Traditional life insurance offers larger coverage for income replacement and mortgage protection." },
        { question: "Can I get funeral insurance with pre-existing conditions?", answer: "Yes. Guaranteed acceptance policies require no health questions. Simplified issue policies ask a few health questions but are still more lenient than traditional life insurance." },
        { question: "Is there a waiting period for funeral insurance?", answer: "Guaranteed acceptance policies typically have a 2-year waiting period for natural death. During this period, if death occurs from natural causes, beneficiaries receive a return of premiums plus interest. Accidental death is covered from day one." },
        { question: "How quickly is the funeral insurance benefit paid out?", answer: "Most insurers pay the death benefit within 5–10 business days of receiving the claim and required documents." },
        { question: "Should I pre-pay my funeral instead of buying insurance?", answer: "Both are valid options. Insurance gives your family flexibility in choosing services, while pre-paid plans lock in today's prices but limit choices. Many advisors recommend insurance for its flexibility." },
      ]} />
    </PillarPageLayout>
  );
};

export default FuneralInsurance;
