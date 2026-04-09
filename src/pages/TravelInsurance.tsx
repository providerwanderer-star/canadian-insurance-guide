import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const TravelInsurancePage = () => {
  return (
    <PillarPageLayout
      title="Travel Insurance in Canada: Super Visa, Visitors & Trips"
      metaTitle="Travel Insurance Canada (2026): Super Visa, Visitor & Trip Plans | InsuredCan"
      metaDescription="Get travel insurance for Super Visa applications, visiting parents, and trips abroad. Compare costs and coverage for Canadian travellers and visitors to Canada."
      breadcrumb="travel-insurance"
      ogImage="https://www.insuredcan.ca/og/og-travel.png"
      heroTag="Travel Coverage"
      heroDescription="Whether you're sponsoring parents on a Super Visa, welcoming visitors, or heading abroad, travel insurance protects against emergency medical costs that can reach hundreds of thousands of dollars."
    >
      <QuickAnswerBox
        question="Do I need travel insurance in Canada?"
        answer="Yes. OHIP eliminated out-of-country coverage in 2020, and coverage between provinces is limited. A single medical emergency abroad can cost $100,000+. Travel insurance starts as low as $2–$5/day for Canadian travellers."
      />
      <ContentSection title="Types of Travel Insurance">
        <ContentH3>Super Visa Insurance</ContentH3>
        <ContentParagraph>
          Required by Immigration, Refugees and Citizenship Canada (IRCC) for parents and grandparents applying for a Super Visa. The policy must provide at least <strong>$100,000</strong> in emergency medical coverage, be valid for at least <strong>1 year</strong>, and be from a <strong>Canadian insurance company</strong>.
        </ContentParagraph>
        <InfoCard title="🛂 Super Visa 2026 Requirements">
          As of 2026, Super Visa holders can stay in Canada for up to 5 years per visit. Insurance must cover healthcare, hospitalization, and repatriation. Proof of insurance is required at the time of application AND at the port of entry.
        </InfoCard>

        <ContentH3>Visitors to Canada Insurance</ContentH3>
        <ContentParagraph>
          For parents, relatives, or friends visiting Canada who aren't covered by provincial health plans. A medical emergency without insurance can cost $3,000–$5,000 per day in a Canadian hospital.
        </ContentParagraph>

        <ContentH3>Travel Insurance for Canadians Going Abroad</ContentH3>
        <ContentParagraph>
          Provincial health plans provide minimal coverage outside Canada. A medical emergency in the US can easily cost $50,000–$200,000+. Trip cancellation, luggage, and travel delay coverage are also available.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="Cost Estimates">
        <ComparisonTable
          headers={["Coverage Type", "Age 40–54", "Age 55–64", "Age 65–74"]}
          rows={[
            ["Super Visa ($100K, 1 year)", "$1,200–$1,800/yr", "$2,000–$3,500/yr", "$3,500–$6,000/yr"],
            ["Visitor to Canada (6 months)", "$600–$1,000", "$1,200–$2,200", "$2,200–$4,000"],
            ["Trip abroad (2 weeks, $5M)", "$30–$60", "$50–$100", "$100–$200"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Who Needs Travel Insurance?">
        <ProsList items={[
          "Families sponsoring parents/grandparents on Super Visa (mandatory)",
          "Anyone hosting visitors from abroad",
          "Snowbirds heading to the US or Mexico for winter",
          "Canadians travelling anywhere outside their home province",
          "International students studying in Canada",
          "Business travellers on frequent international trips",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons">
        <ProsList items={[
          "Super Visa insurance is competitively priced in Canada",
          "Emergency medical coverage prevents financial catastrophe",
          "Trip cancellation protects your vacation investment",
          "Available for pre-existing conditions with stability clauses",
        ]} />
        <ConsList items={[
          "Pre-existing condition exclusions can be strict",
          "Premiums increase significantly for travellers over 65",
          "Some plans have deductibles of $250–$500",
          "Claims process can be complex for overseas emergencies",
        ]} />
      </ContentSection>

      <FAQSection faqs={[
        { question: "What are the Super Visa insurance requirements?", answer: "You need a minimum of $100,000 in emergency medical coverage from a Canadian insurance company, valid for at least 1 year from the date of entry. The policy must cover healthcare, hospitalization, and repatriation." },
        { question: "Does OHIP cover me when I travel outside Ontario?", answer: "OHIP provides very limited coverage outside Canada and was eliminated for out-of-country claims as of 2020. Even within Canada, coverage in other provinces may be limited. Always get travel insurance before any trip." },
        { question: "Can my visiting parents get insurance with pre-existing conditions?", answer: "Yes, but with conditions. Most plans require pre-existing conditions to be 'stable' for 90–180 days before the coverage start date. Some plans offer coverage regardless but at higher premiums." },
        { question: "How much does travel insurance cost in Canada?", answer: "For Canadians travelling abroad, single-trip travel insurance typically costs $2–$5/day. Annual multi-trip plans range from $100–$300/year. Super Visa insurance for visiting parents costs $1,200–$3,000/year depending on age." },
        { question: "What does travel insurance cover?", answer: "Comprehensive travel insurance covers emergency medical expenses, trip cancellation/interruption, lost or delayed baggage, flight delays, accidental death, and emergency evacuation. Medical coverage is the most critical component." },
      ]} />
    </PillarPageLayout>
  );
};

export default TravelInsurancePage;
