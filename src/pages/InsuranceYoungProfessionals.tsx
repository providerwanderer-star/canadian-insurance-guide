import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentParagraph, ProsList, FAQSection, InfoCard } from "@/components/ContentElements";

const InsuranceForYoungProfessionalsPage = () => {
  return (
    <PillarPageLayout
      title="Insurance for Young Professionals in Canada"
      metaTitle="Insurance for Young Adults Canada — First-Time Buyer Guide | InsuredCan"
      metaDescription="Your 20s and 30s are the best time to lock in insurance rates. Learn what coverage young Canadian professionals need and how to save on premiums."
      breadcrumb="young-professionals"
      heroTag="Young Adults"
      heroDescription="You're healthy, you're earning, and insurance feels like something for 'later.' But your 20s and 30s are when premiums are lowest and coverage is easiest to get. Here's how to be smart about it."
    >
      <ContentSection title="Why Start Now?">
        <ContentParagraph>
          Every year you wait, premiums go up. A 25-year-old pays roughly <strong>50% less</strong> than a 35-year-old for the same term life policy. Lock in rates while you're young and healthy—you'll thank yourself in 20 years.
        </ContentParagraph>
        <InfoCard title="📊 The Cost of Waiting (Term 20, $500K, Non-Smoker)">
          Age 25: ~$22/month · Age 30: ~$30/month · Age 35: ~$42/month · Age 40: ~$65/month
          <br /><br />
          That's nearly 3x the cost by waiting just 15 years.
        </InfoCard>
      </ContentSection>

      <ContentSection title="What You Need in Your 20s and 30s">
        <ProsList items={[
          "Term life insurance if you have a partner, dependents, or co-signed debt",
          "Supplemental health & dental if your employer plan is basic or non-existent",
          "Disability insurance if your income would stop when you stop working",
          "Tenant insurance to protect your belongings and add liability coverage ($15–$30/mo)",
          "Critical illness insurance if there's family history of cancer or heart disease",
        ]} />
      </ContentSection>

      <ContentSection title="What You DON'T Need Yet">
        <ContentParagraph>
          Not everything is urgent. Here's what can usually wait:
        </ContentParagraph>
        <ProsList items={[
          "Whole life insurance — unless estate planning is already relevant",
          "Long-term care insurance — typically purchased in your 50s",
          "Mortgage insurance from the bank — get a personal term policy instead (if applicable)",
        ]} />
      </ContentSection>

      <ContentSection title="The Young Professional Starter Pack">
        <InfoCard title="🎯 Smart Coverage for a 28-Year-Old in Ontario (~$150–$250/month total)">
          ✓ $500K Term 20 Life Insurance: $22–$30/mo<br />
          ✓ Health & Dental (individual): $100–$150/mo<br />
          ✓ Tenant Insurance: $20–$30/mo<br />
          ✓ Optional: Disability ($3K/mo benefit): $55–$85/mo
        </InfoCard>
      </ContentSection>

      <FAQSection faqs={[
        { question: "I'm single with no dependents — do I need life insurance?", answer: "If no one depends on your income, life insurance isn't urgent. However, locking in a small term policy now guarantees your insurability and keeps premiums extremely low. If you have co-signed student loans or a mortgage, coverage protects your co-signer." },
        { question: "Should I rely on my employer's group benefits?", answer: "Employer group benefits are great but not enough on their own. Group life insurance is usually only 1–2x your salary (often not enough), and you lose it when you leave the job. Supplement with personal coverage for true protection." },
        { question: "Is tenant insurance really necessary?", answer: "Yes. At $15–$30/month, tenant insurance covers your belongings (theft, fire, water damage), provides liability coverage (if someone is injured in your apartment), and covers additional living expenses if your unit becomes uninhabitable." },
      ]} />
    </PillarPageLayout>
  );
};

export default InsuranceForYoungProfessionalsPage;
