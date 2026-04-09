import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways } from "@/components/ContentElements";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LifeInsurancePRHolders = () => {
  return (
    <PillarPageLayout
      title="Life Insurance for Permanent Residents (PR Holders) in Canada"
      metaTitle="Life Insurance for PR Holders Canada — Eligibility & Best Options | InsuredCan"
      metaDescription="Can permanent residents get life insurance in Canada? Yes. Learn eligibility, costs, and best policies for PR holders. No medical exam options available. Free quotes."
      breadcrumb="life-insurance-pr-holders"
      ogImage="https://www.insuredcan.ca/og/og-newcomers.png"
      heroTag="Newcomer Guide"
      heroDescription="As a permanent resident in Canada, you have full access to life insurance from every major Canadian insurer. Whether you just received your PR or have been in Canada for years, this guide covers your options, eligibility, and how to get the best rates."
    >
      <QuickAnswerBox
        question="Can permanent residents get life insurance in Canada?"
        answer="Yes. Canadian permanent residents are eligible for the same life insurance products as citizens — term life, whole life, critical illness, and disability insurance. Most insurers have no minimum residency requirement for PR holders. Rates are based on age and health, not immigration status."
      />
      <KeyTakeaways items={[
        "PR holders qualify for the same life insurance as Canadian citizens",
        "No minimum residency period required with most major insurers",
        "No-medical-exam policies available for faster approval",
        "Your international medical history may be reviewed during underwriting",
        "Getting insured early after PR landing locks in the lowest rates",
      ]} />

      <ContentSection title="Eligibility for Life Insurance as a PR Holder">
        <ContentParagraph>
          As a Canadian permanent resident, you're eligible for the same life insurance products available to Canadian citizens. There are no special restrictions or surcharges based on your PR status. Insurers evaluate your application based on the same criteria as everyone else: age, health, smoking status, and coverage amount.
        </ContentParagraph>
        <InfoCard title="PR vs. Other Immigration Statuses">
          PR holders have the broadest access to Canadian life insurance. Work permit holders and international students may face some restrictions or higher rates, but coverage is still available. <Link to="/newcomers" className="text-primary font-semibold hover:underline">See our full newcomer insurance guide →</Link>
        </InfoCard>
      </ContentSection>

      <ContentSection title="Life Insurance Options for PR Holders">
        <ContentH3>Term Life Insurance</ContentH3>
        <ContentParagraph>
          The most affordable option. Covers you for 10, 20, or 30 years. Ideal for PR holders who have a mortgage, young children, or are the primary income earner. Rates start as low as $20/month for $500,000 of coverage.
        </ContentParagraph>
        <ContentH3>Whole Life Insurance</ContentH3>
        <ContentParagraph>
          Permanent coverage that builds cash value. Popular with PR holders who want to build long-term wealth in Canada and leave a tax-free legacy to their families — whether they stay in Canada or return home.
        </ContentParagraph>
        <ContentH3>No-Medical-Exam Policies</ContentH3>
        <ContentParagraph>
          If you have difficulty obtaining your medical records from your home country, no-medical-exam policies are an excellent option. Coverage up to $500,000 with simplified health questions and fast approval (often within 48 hours).
        </ContentParagraph>
      </ContentSection>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <Link to="/contact">Get PR Holder Quote <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      <ContentSection title="Life Insurance Costs for PR Holders">
        <ComparisonTable
          headers={["Profile", "$250K Term 20yr", "$500K Term 20yr", "$1M Term 20yr"]}
          rows={[
            ["PR, age 30, non-smoker", "$15–$20/mo", "$22–$30/mo", "$35–$48/mo"],
            ["PR, age 35, non-smoker", "$18–$25/mo", "$28–$38/mo", "$45–$60/mo"],
            ["PR, age 40, non-smoker", "$28–$38/mo", "$40–$55/mo", "$65–$88/mo"],
            ["PR, age 45, non-smoker", "$42–$58/mo", "$60–$82/mo", "$95–$130/mo"],
          ]}
        />
        <ContentParagraph>
          PR holders pay the same rates as Canadian citizens. These are standard rates from major Canadian insurers in 2026.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Common Challenges for PR Holders (And Solutions)">
        <ContentH3>International Medical Records</ContentH3>
        <ContentParagraph>
          Some insurers may request your medical history from your home country. If records are difficult to obtain, choose a no-medical-exam policy or an insurer that relies primarily on Canadian medical assessments.
        </ContentParagraph>
        <ContentH3>Travel Outside Canada</ContentH3>
        <ContentParagraph>
          Most Canadian life insurance policies provide worldwide coverage — your beneficiaries are paid regardless of where you pass away. However, frequent travel to high-risk countries may affect underwriting. Disclose all travel plans during your application.
        </ContentParagraph>
        <ContentH3>Beneficiaries Outside Canada</ContentH3>
        <ContentParagraph>
          You can name beneficiaries who live outside Canada. The death benefit is paid in Canadian dollars to any named beneficiary, regardless of their country of residence. Tax implications in the beneficiary's country may apply.
        </ContentParagraph>
      </ContentSection>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <Link to="/contact">Speak to a Newcomer Insurance Advisor <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      <ContentSection title="Best Insurers for PR Holders in Canada">
        <ComparisonTable
          headers={["Insurer", "PR-Friendly?", "No-Medical Option", "Best For"]}
          rows={[
            ["Sun Life", "✅ Yes", "✅ Up to $500K", "Comprehensive coverage"],
            ["Manulife", "✅ Yes", "✅ Up to $1M", "Competitive term rates"],
            ["Canada Life", "✅ Yes", "✅ Up to $300K", "Whole life & estate planning"],
            ["Industrial Alliance (iA)", "✅ Yes", "✅ Up to $500K", "Simplified underwriting"],
            ["Desjardins", "✅ Yes", "✅ Up to $250K", "Bundled coverage"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Insurance Checklist for New PR Holders">
        <ProsList items={[
          "Bridge health insurance for the OHIP/provincial waiting period (first 3 months)",
          "Term life insurance to protect your family and mortgage",
          "Critical illness insurance for income protection if diagnosed with cancer, heart attack, or stroke",
          "Disability insurance to replace income if you can't work due to illness or injury",
          "Supplemental health & dental insurance if your employer doesn't provide benefits",
          "Super Visa insurance if you're sponsoring parents or grandparents to visit Canada",
        ]} />
      </ContentSection>

      <FAQSection faqs={[
        { question: "Can I get life insurance in Canada as a permanent resident?", answer: "Yes. Permanent residents have full access to all Canadian life insurance products — term, whole, universal life, and critical illness. There are no restrictions or surcharges based on PR status. You're treated the same as a Canadian citizen." },
        { question: "Do I need to wait before applying for life insurance after PR landing?", answer: "No waiting period is required. You can apply for life insurance the day you receive your PR. In fact, applying early — while you're young and healthy — locks in the lowest lifetime rates." },
        { question: "Will my home country's medical history affect my application?", answer: "It may. Insurers review your full medical history, including conditions treated abroad. If records are hard to obtain, consider no-medical-exam policies or insurers that accept Canadian medical assessments only." },
        { question: "Can I name a beneficiary who lives outside Canada?", answer: "Yes. You can name any person as your beneficiary, regardless of where they live. The death benefit is paid in Canadian dollars. Tax implications in their country may apply, so they should consult a local tax advisor." },
        { question: "Is life insurance for PR holders more expensive?", answer: "No. PR holders pay the same rates as Canadian citizens. Premiums are based on your age, health, smoking status, and coverage amount — not your immigration status." },
        { question: "What if I leave Canada after getting life insurance?", answer: "Most Canadian life insurance policies remain active worldwide. Your coverage continues even if you relocate, as long as you continue paying premiums. Check your policy for any residency requirements." },
      ]} />
    </PillarPageLayout>
  );
};

export default LifeInsurancePRHolders;