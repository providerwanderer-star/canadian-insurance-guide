import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways } from "@/components/ContentElements";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CriticalIllnessOntario = () => {
  return (
    <PillarPageLayout
      title="Critical Illness Insurance in Ontario: What OHIP Doesn't Cover"
      metaTitle="Critical Illness Insurance Ontario — Fill the OHIP Gap | InsuredCan"
      metaDescription="Critical illness insurance in Ontario pays a tax-free lump sum if diagnosed with cancer, heart attack, or stroke. Learn what OHIP doesn't cover and compare costs."
      breadcrumb="critical-illness-insurance-ontario"
      ogImage="https://www.insuredcan.ca/og/og-critical-illness.png"
      heroTag="Ontario Coverage Gap"
      heroDescription="OHIP covers hospital stays and doctor visits — but not the income you lose, the mortgage payments that pile up, or the out-of-pocket costs of recovery. Critical illness insurance fills this gap with a tax-free lump-sum payment when you need it most."
    >
      <QuickAnswerBox
        question="Why do Ontario residents need critical illness insurance if they have OHIP?"
        answer="OHIP covers medical treatment but not lost income, mortgage payments, childcare, home modifications, or travel for specialized care. Critical illness insurance pays a tax-free lump sum ($50K–$2M) upon diagnosis so you can focus on recovery, not bills."
      />
      <KeyTakeaways items={[
        "1 in 2 Ontarians will be diagnosed with cancer in their lifetime",
        "OHIP does NOT cover prescription drugs, dental, physiotherapy, or lost wages",
        "Critical illness pays a one-time tax-free lump sum you can use for anything",
        "Return of Premium option means you get your money back if you never claim",
        "Coverage starts as low as $30/month for a 30-year-old non-smoker",
      ]} />

      <ContentSection title="What OHIP Doesn't Cover (And Why You Need CI Insurance)">
        <ContentParagraph>
          Many Ontarians believe OHIP will cover everything if they get sick. While OHIP covers hospital care and physician services, the real financial impact of a critical illness comes from what OHIP doesn't cover:
        </ContentParagraph>
        <ComparisonTable
          headers={["Expense", "Covered by OHIP?", "Estimated Cost"]}
          rows={[
            ["Hospital stay & surgery", "✅ Yes", "Covered"],
            ["Prescription drugs", "❌ No (if 25–64)", "$500–$5,000/mo"],
            ["Home care & nursing", "❌ Partially", "$2,000–$8,000/mo"],
            ["Lost income (6–18 months)", "❌ No", "$40,000–$120,000"],
            ["Mortgage/rent payments", "❌ No", "$2,000–$4,000/mo"],
            ["Childcare during recovery", "❌ No", "$1,000–$2,500/mo"],
            ["Travel for treatment (e.g., to Toronto)", "❌ No", "$2,000–$10,000"],
            ["Experimental treatments", "❌ No", "$10,000–$100,000+"],
          ]}
        />
        <InfoCard title="The Ontario Reality">
          A cancer diagnosis in Ontario can cost a family $50,000–$100,000+ in non-medical expenses over 12–18 months — even with OHIP. Critical illness insurance covers this financial gap entirely with a single tax-free payment.
        </InfoCard>
      </ContentSection>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <Link to="/contact">Get Free CI Quote for Ontario <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      <ContentSection title="Critical Illness Insurance Costs in Ontario">
        <ComparisonTable
          headers={["Coverage Amount", "Age 30 (NS)", "Age 40 (NS)", "Age 50 (NS)"]}
          rows={[
            ["$50,000", "$28–$42/mo", "$52–$78/mo", "$105–$165/mo"],
            ["$100,000", "$48–$72/mo", "$90–$135/mo", "$195–$310/mo"],
            ["$200,000", "$85–$135/mo", "$170–$260/mo", "$370–$580/mo"],
            ["$100K with ROP", "$70–$110/mo", "$130–$195/mo", "$280–$440/mo"],
          ]}
        />
        <ContentParagraph>
          NS = Non-Smoker. Return of Premium (ROP) adds ~40–60% to premiums but returns 100% of your premiums if you don't make a claim during the coverage period.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="How CI Insurance Works in Ontario">
        <ContentH3>Step 1: Choose Coverage</ContentH3>
        <ContentParagraph>
          Select a coverage amount ($25,000–$2,000,000) based on your income, mortgage, and financial obligations. Most Ontario families choose $100,000–$250,000.
        </ContentParagraph>
        <ContentH3>Step 2: Get Diagnosed</ContentH3>
        <ContentParagraph>
          If you're diagnosed with one of the 25–26 covered conditions (cancer, heart attack, stroke, MS, kidney failure, etc.), you file a claim with your insurer.
        </ContentParagraph>
        <ContentH3>Step 3: Receive Tax-Free Payout</ContentH3>
        <ContentParagraph>
          After surviving the 30-day waiting period post-diagnosis, you receive the full lump-sum payment — tax-free. Use it for anything: mortgage, income replacement, childcare, travel, or treatments not covered by OHIP.
        </ContentParagraph>
      </ContentSection>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <Link to="/contact">Speak to an Ontario CI Specialist <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      <ContentSection title="Who Needs CI Insurance in Ontario?">
        <ProsList items={[
          "Primary income earners — your family depends on your salary while you recover",
          "Self-employed Ontarians — no employer sick leave or group benefits",
          "Anyone with a family history of cancer, heart disease, or stroke",
          "Ontario families with a mortgage — keep your home during recovery",
          "Workers whose employer benefits don't cover long-term income loss",
          "Those who want a financial safety net beyond OHIP and disability insurance",
        ]} />
      </ContentSection>

      <ContentSection title="Critical Illness vs. Disability Insurance in Ontario">
        <ComparisonTable
          headers={["Feature", "Critical Illness", "Disability Insurance"]}
          rows={[
            ["Payout type", "One-time lump sum", "Monthly income replacement"],
            ["Trigger", "Diagnosis of covered condition", "Inability to work"],
            ["Tax status", "Tax-free", "Depends on who pays premiums"],
            ["Use of funds", "Unrestricted", "Income replacement only"],
            ["Coverage scope", "25–26 specific conditions", "Any illness/injury preventing work"],
          ]}
        />
        <ContentParagraph>
          Many Ontario professionals carry both — CI insurance for the immediate financial shock, and <Link to="/disability-insurance" className="text-primary font-semibold hover:underline">disability insurance</Link> for ongoing income replacement.
        </ContentParagraph>
      </ContentSection>

      <FAQSection faqs={[
        { question: "What does critical illness insurance cover in Ontario?", answer: "Most CI policies cover 25–26 serious conditions including cancer (65% of claims), heart attack, stroke, MS, kidney failure, and coronary bypass. Cancer, heart attack, and stroke account for over 85% of all claims in Ontario." },
        { question: "Is critical illness insurance worth it in Ontario?", answer: "Yes. With 1 in 2 Ontarians facing cancer and OHIP not covering lost income, a CI policy provides essential financial protection. The Return of Premium option ensures you get your money back if you never claim." },
        { question: "How much critical illness insurance should I get in Ontario?", answer: "Aim for enough to cover 12–18 months of expenses: mortgage payments, income replacement, childcare, and non-OHIP medical costs. Most Ontario families choose $100,000–$250,000 in coverage." },
        { question: "Can I get critical illness insurance with a pre-existing condition in Ontario?", answer: "It depends on the condition. Some insurers will cover you with exclusions for your specific condition. Others offer guaranteed issue CI policies with simplified underwriting. A broker can help find the best options." },
        { question: "Does OHIP cover critical illness treatments in Ontario?", answer: "OHIP covers hospital stays, surgery, and doctor visits. It does NOT cover prescription drugs (ages 25–64), home care, lost wages, childcare, or experimental treatments — which is exactly what CI insurance is designed to cover." },
      ]} />
    </PillarPageLayout>
  );
};

export default CriticalIllnessOntario;