import BlogArticleLayout from "@/components/BlogArticleLayout";
import { ContentSection, ContentParagraph, ProsList, ComparisonTable, InfoCard, FAQSection } from "@/components/ContentElements";

const BlogWhatOHIPDoesntCover = () => {
  return (
    <BlogArticleLayout
      title="Is OHIP Enough? What Provincial Healthcare Doesn't Cover in Ontario"
      metaTitle="What OHIP Doesn't Cover — Ontario Healthcare Gaps Guide | InsuredCan"
      metaDescription="Discover the surprising gaps in Ontario's OHIP coverage. Prescriptions, dental, vision, mental health, and more — what you're paying out of pocket."
      slug="what-ohip-doesnt-cover"
      category="Health"
      author="InsuredCan Editorial"
      date="March 3, 2026"
      readTime="7 min read"
    >
      <ContentSection title="The OHIP Myth">
        <ContentParagraph>
          Ask most Ontarians what OHIP covers and they'll say "everything." It's one of the biggest misconceptions about living in Canada. While OHIP covers medically necessary hospital and doctor visits, <strong>it leaves massive gaps</strong> in everyday health expenses.
        </ContentParagraph>
        <ContentParagraph>
          These gaps cost the average Ontario family <strong>$6,800–$13,200 per year</strong> out of pocket. Here's exactly what OHIP doesn't pay for.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="The Complete List of What OHIP Doesn't Cover">
        <ComparisonTable
          headers={["Service", "OHIP Coverage", "Your Cost Without Insurance"]}
          rows={[
            ["Prescription drugs (age 25–64)", "Not covered", "$1,500–$3,000/year"],
            ["Dental checkups (2x/year)", "Not covered", "$400–$600/year"],
            ["Dental procedures", "Not covered", "$500–$3,000+ per procedure"],
            ["Eye exams (age 20–64)", "Not covered", "$75–$150/exam"],
            ["Glasses/contacts", "Not covered", "$200–$600/year"],
            ["Physiotherapy", "Not covered", "$75–$120/session"],
            ["Psychologist/counselling", "Not covered", "$150–$250/session"],
            ["Massage therapy", "Not covered", "$80–$120/session"],
            ["Chiropractic", "Not covered", "$50–$80/session"],
            ["Ambulance (land)", "$240 co-pay", "$240 per call"],
            ["Semi-private hospital room", "Not covered", "$250–$350/day"],
            ["Out-of-country emergencies", "Not covered (since 2020)", "$1,000–$200,000+"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Who Feels These Gaps the Most?">
        <ProsList items={[
          "Self-employed and freelancers without employer benefits",
          "Contract workers and gig economy participants",
          "Families with children needing dental, orthodontics, and prescriptions",
          "Anyone managing chronic conditions requiring regular medication",
          "Adults over 25 who lose OHIP+ prescription coverage",
          "Early retirees under 65 who've lost employer group benefits",
        ]} />
      </ContentSection>

      <ContentSection title="Ontario Programs That Help (But Aren't Enough)">
        <ContentParagraph>
          Ontario has several programs that provide some relief, but they're limited:
        </ContentParagraph>
        <InfoCard title="Programs Available">
          <strong>OHIP+ (age 0–24):</strong> Free prescription drug coverage for those 24 and under, covering 5,000+ medications. Ends on your 25th birthday.<br /><br />
          <strong>Trillium Drug Program:</strong> Helps Ontarians who spend ~4%+ of after-tax income on prescriptions. Covers costs above an income-based deductible.<br /><br />
          <strong>Ontario Drug Benefit (65+):</strong> Covers seniors with a $100 annual deductible and $6.11 co-pay per prescription.<br /><br />
          <strong>Canadian Dental Care Plan (CDCP):</strong> Federal program covering some dental for uninsured Canadians with household income under $90,000.
        </InfoCard>
      </ContentSection>

      <ContentSection title="The Solution: Private Health Insurance">
        <ContentParagraph>
          A private health and dental plan costs <strong>$100–$250/month for an individual</strong> or <strong>$250–$450/month for a family</strong>. When you compare that to the $6,800–$13,200 in out-of-pocket costs, the math speaks for itself.
        </ContentParagraph>
        <ContentParagraph>
          Plans from providers like Sun Life, Manulife, Blue Cross, and Green Shield cover the exact services OHIP doesn't: prescriptions, dental, vision, physiotherapy, mental health, and more.
        </ContentParagraph>
        <ContentParagraph>
          <strong>If you're self-employed</strong>, these premiums may be tax-deductible. If you're incorporated, a Health Spending Account makes them a 100% deductible business expense.
        </ContentParagraph>
      </ContentSection>

      <FAQSection faqs={[
        { question: "Does OHIP cover dental in Ontario?", answer: "No. OHIP does not cover routine dental care for adults. It only covers some emergency oral surgery performed in a hospital. Private dental insurance or the federal Canadian Dental Care Plan (CDCP) covers routine dental for eligible individuals." },
        { question: "Does OHIP cover prescription drugs?", answer: "OHIP does not cover most prescription drugs for working-age adults. The Ontario Drug Benefit (ODB) program covers drugs for children under 25, seniors 65+, and social assistance recipients. Everyone else needs private drug coverage." },
        { question: "Does OHIP cover physiotherapy?", answer: "OHIP covers a limited amount of physiotherapy only for specific situations — such as after a hospital stay, for children, and for seniors. Most adults need private insurance for regular physiotherapy, chiropractic, and massage therapy." },
        { question: "Does OHIP cover vision care?", answer: "OHIP covers one eye exam every 12 months for children under 20 and adults 65+, plus patients with certain medical conditions. Adults aged 20–64 pay out-of-pocket for eye exams and glasses without private coverage." },
        { question: "How much does private health insurance cost in Ontario?", answer: "A basic individual private health and dental plan costs $80–$150/month. A comprehensive family plan runs $250–$450/month. This covers prescriptions, dental, vision, physiotherapy, and other services OHIP excludes." },
      ]} />
    </BlogArticleLayout>
  );
};

export default BlogWhatOHIPDoesntCover;
