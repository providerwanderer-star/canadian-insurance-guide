import LocationPageLayout from "@/components/LocationPageLayout";
import { ContentSection, ContentParagraph, ProsList, InfoCard, ComparisonTable } from "@/components/ContentElements";

const InsuranceBrokerCanada = () => (
  <LocationPageLayout
    city="Canada"
    province="All Provinces"
    metaTitle="Insurance Broker Canada — Compare Quotes from 20+ Insurers | InsuredCan"
    metaDescription="Find a licensed insurance broker in Canada. Compare life, critical illness, and health insurance quotes from top Canadian insurers. Free consultation."
    slug="insurance-broker-canada"
    heroHeadline="Your Trusted Insurance Broker Across Canada"
    heroDescription="Access 20+ top Canadian insurance companies through one independent broker. Get unbiased advice, competitive rates, and personalized coverage recommendations—no matter where you live in Canada."
    localContent={
      <>
        <ContentSection title="Why Use an Independent Insurance Broker?">
          <ContentParagraph>
            An independent insurance broker works for you—not for any single insurance company. Unlike captive agents who can only sell one company's products, brokers compare policies from multiple insurers to find you the best coverage at the best price.
          </ContentParagraph>
          <ComparisonTable
            headers={["Feature", "Insurance Broker", "Captive Agent", "Online Direct"]}
            rows={[
              ["Companies represented", "20+ insurers", "1 insurer", "1 insurer"],
              ["Unbiased advice", "✓", "✗", "✗"],
              ["Personalized service", "✓", "✓", "Limited"],
              ["Claims assistance", "✓", "✓", "Limited"],
              ["Price comparison", "✓", "✗", "✗"],
              ["Licensed & regulated", "✓", "✓", "✓"],
            ]}
          />
        </ContentSection>

        <ContentSection title="Insurance Products We Offer">
          <ProsList items={[
            "Life Insurance — Term, whole life, and universal life policies",
            "Critical Illness Insurance — Tax-free lump-sum payouts for serious diagnoses",
            "Disability Insurance — Income replacement if you can't work",
            "Health & Dental Insurance — Extended coverage beyond provincial plans",
            "Travel Insurance — Super Visa, visitor, and trip coverage",
            "Mortgage Insurance — Protect your home investment",
            "Funeral Insurance — Cover final expenses for your family",
            "Retirement Planning — Annuities, segregated funds, and wealth transfer",
          ]} />
        </ContentSection>

        <InfoCard title="Our Insurance Partners">
          We work with Canada's top-rated insurers including Sun Life, Manulife, Canada Life, Desjardins, Industrial Alliance, Equitable Life, RBC Insurance, BMO Insurance, and more.
        </InfoCard>

        <ContentSection title="Serving All Canadian Provinces">
          <ContentParagraph>
            InsuredCan is licensed to provide insurance advice across Canada. Whether you're in Ontario, British Columbia, Alberta, Quebec, or any other province, our advisors can help you find the right coverage.
          </ContentParagraph>
          <ProsList items={[
            "Ontario (FSRA regulated) — Toronto, Ottawa, London, Hamilton, Mississauga",
            "British Columbia — Vancouver, Victoria, Surrey, Burnaby",
            "Alberta — Calgary, Edmonton, Red Deer, Lethbridge",
            "Quebec (AMF regulated) — Montreal, Quebec City, Laval",
            "Manitoba, Saskatchewan, Nova Scotia, New Brunswick, and all territories",
          ]} />
        </ContentSection>
      </>
    }
    faqs={[
      { question: "How do I find a good insurance broker in Canada?", answer: "Look for a broker who is independently licensed, represents multiple insurance companies, offers free consultations, and has positive client reviews. InsuredCan checks all these boxes with licensed advisors across Canada." },
      { question: "Is it free to use an insurance broker?", answer: "Yes! Insurance brokers are compensated by the insurance companies, not by you. There's no extra cost to use a broker—and you often get better rates because they compare multiple companies." },
      { question: "What's the difference between an insurance broker and agent?", answer: "A broker is independent and represents multiple insurance companies, while a captive agent works for only one company. Brokers can offer more options and unbiased comparisons." },
      { question: "Can I switch insurance brokers in Canada?", answer: "Yes, you can switch brokers at any time. Your existing policies remain in force—only the servicing broker changes. There's no cost or penalty for switching." },
      { question: "Do insurance brokers in Canada need to be licensed?", answer: "Yes, all insurance brokers in Canada must be licensed by their provincial regulator (e.g., FSRA in Ontario, AMF in Quebec). Always verify your broker's license before purchasing a policy." },
    ]}
  />
);

export default InsuranceBrokerCanada;
