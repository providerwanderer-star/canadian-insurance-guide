import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, FAQSection, InfoCard } from "@/components/ContentElements";

const InsuranceForNewcomersPage = () => {
  return (
    <PillarPageLayout
      title="Insurance for Newcomers to Canada"
      metaTitle="Insurance for Newcomers to Canada — Health, Life & Super Visa | InsuredCan"
      metaDescription="Moving to Canada? Learn what insurance you need as a newcomer — from bridging the OHIP wait to Super Visa coverage. Tailored advice for new immigrants."
      breadcrumb="newcomers"
      ogImage="https://www.insuredcan.ca/og/og-newcomers.png"
      heroTag="Newcomers"
      heroDescription="Moving to Canada is exciting—but navigating the insurance system can be overwhelming. This guide covers everything newcomers need to know, from the OHIP waiting period to building your first insurance stack."
    >
      <ContentSection title="Your Insurance Timeline as a Newcomer">
        <ContentH3>Day 1–90: Bridge the Provincial Health Gap</ContentH3>
        <ContentParagraph>
          Most provinces have a waiting period of up to 3 months before your provincial health coverage begins. During this time, a single ER visit can cost $3,000–$10,000+. Private health insurance is essential.
        </ContentParagraph>
        <InfoCard title="🚨 Don't Skip This">
          The average cost of a 3-month bridge health plan for a newcomer is $150–$400. The average ER visit without insurance is $3,000–$5,000. Don't gamble on your first months in Canada.
        </InfoCard>

        <ContentH3>Month 3–12: Build Your Coverage Foundation</ContentH3>
        <ContentParagraph>
          Once provincial coverage kicks in, assess what's NOT covered: dental, prescriptions (if over 24 in Ontario), vision, and paramedical services. If your employer doesn't offer benefits, a private health plan fills these gaps.
        </ContentParagraph>

        <ContentH3>Year 1+: Long-Term Protection</ContentH3>
        <ContentParagraph>
          Once settled with permanent residency or citizenship in progress, consider life insurance, critical illness, and disability coverage. These are easier and cheaper to get while you're young and healthy.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Recommended Coverage for Newcomers">
        <ProsList items={[
          "Bridge health insurance (first 3 months — mandatory priority)",
          "Supplemental health & dental (if no employer benefits)",
          "Super Visa insurance (if sponsoring parents/grandparents)",
          "Term life insurance (if you have dependents or a mortgage)",
          "Critical illness insurance (once permanent resident status is confirmed)",
          "Tenant insurance (protects your belongings and includes liability)",
        ]} />
      </ContentSection>

      <ContentSection title="Common Questions from Newcomers">
        <ContentH3>Does my international insurance work in Canada?</ContentH3>
        <ContentParagraph>
          Most international life and health insurance policies are not recognized or enforceable in Canada. You'll need Canadian-issued coverage. However, some international policies may continue to cover you in your home country.
        </ContentParagraph>

        <ContentH3>Can newcomers get life insurance in Canada?</ContentH3>
        <ContentParagraph>
          Yes. Most Canadian insurers will issue life insurance to permanent residents and some work permit holders. You may need to have been in Canada for 1–2 years for some carriers. Temporary residents may have limited options but can still get coverage.
        </ContentParagraph>
      </ContentSection>

      <FAQSection faqs={[
        { question: "How long is the OHIP waiting period?", answer: "Ontario's OHIP waiting period is up to 3 months from the date you establish residency. During this time, you need private health insurance to cover any medical expenses." },
        { question: "What insurance do I need for a Super Visa?", answer: "Super Visa applicants (parents/grandparents) need at least $100,000 in emergency medical coverage from a Canadian insurer, valid for at least 1 year. This is a mandatory requirement." },
        { question: "Is dental covered by provincial health plans?", answer: "No. Dental care is not covered by any provincial health plan in Canada (with very limited exceptions for children and seniors in some provinces). You need private dental insurance or pay out of pocket." },
      ]} />
    </PillarPageLayout>
  );
};

export default InsuranceForNewcomersPage;
