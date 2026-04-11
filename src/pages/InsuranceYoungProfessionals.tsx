import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentParagraph, ProsList, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const InsuranceForYoungProfessionalsPage = () => {
  return (
    <PillarPageLayout
      title="Insurance for Young Professionals in Ontario & Canada (2026)"
      metaTitle="Insurance for Young Adults Canada (2026): Lock In Low Rates & Save | InsuredCan"
      metaDescription="Your 20s and 30s are the best time to lock in insurance rates in Ontario. Learn what coverage young Canadian professionals need and save up to 50% on premiums. Free quotes."
      breadcrumb="young-professionals"
      ogImage="https://www.insuredcan.ca/og/og-young-professionals.png"
      heroTag="Young Adults 2026"
      heroDescription="You're healthy, you're earning, and insurance feels like something for 'later.' But your 20s and 30s are when premiums are lowest and coverage is easiest to get. Here's how Ontario young professionals can be smart about it."
    >
      <QuickAnswerBox
        question="Do young professionals in Canada need life insurance?"
        answer="Yes — especially if you have a mortgage, partner, or plan to start a family. A healthy 25-year-old can lock in $500K of term coverage for ~$20/month. Waiting until 35 doubles that cost. Getting insured young is the smartest financial move you can make."
      />
      <KeyTakeaways items={[
        "A 25-year-old pays ~50% less than a 35-year-old for the same term life policy",
        "Locking in rates young guarantees your insurability regardless of future health changes",
        "Even without dependents, life insurance covers co-signed debts and funeral costs",
        "Disability insurance is the #1 most overlooked coverage for young professionals",
        "Start with term life + disability; add critical illness as income grows",
      ]} />

      <ContentSection title="Why Start Now?">
        <ContentParagraph>
          Every year you wait, premiums go up. A 25-year-old pays roughly <strong>50% less</strong> than a 35-year-old for the same <Link to="/term-life-insurance" className="text-primary underline hover:no-underline">term life policy</Link>. Lock in rates while you're young and healthy — you'll thank yourself in 20 years.
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
        <ContentParagraph>
          Compare <Link to="/compare/term-vs-whole-life" className="text-primary underline hover:no-underline">term vs whole life</Link> to understand which is right for your stage of life. Most young professionals should start with <Link to="/life-insurance" className="text-primary underline hover:no-underline">term life</Link>.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Get a Free Quote — Lock In Your Rate" />

      <ContentSection title="What You DON'T Need Yet">
        <ContentParagraph>
          Not everything is urgent. Here's what can usually wait:
        </ContentParagraph>
        <ProsList items={[
          "Whole life insurance — unless estate planning is already relevant",
          "Long-term care insurance — typically purchased in your 50s",
          "Mortgage insurance from the bank — get a personal term policy instead",
        ]} />
        <ContentParagraph>
          Learn why <Link to="/mortgage-insurance" className="text-primary underline hover:no-underline">personal term life beats bank mortgage insurance</Link> every time.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="The Young Professional Starter Pack">
        <InfoCard title="🎯 Smart Coverage for a 28-Year-Old in Ontario (~$150–$250/month total)">
          ✓ $500K Term 20 Life Insurance: $22–$30/mo<br />
          ✓ <Link to="/health-insurance" className="text-primary underline hover:no-underline">Health & Dental</Link> (individual): $100–$150/mo<br />
          ✓ Tenant Insurance: $20–$30/mo<br />
          ✓ Optional: <Link to="/disability-insurance" className="text-primary underline hover:no-underline">Disability</Link> ($3K/mo benefit): $55–$85/mo
        </InfoCard>
      </ContentSection>

      <InlineCTA text="Speak to a Licensed Advisor — Free" />

      <FAQSection faqs={[
        { question: "I'm single with no dependents — do I need life insurance?", answer: "If no one depends on your income, life insurance isn't urgent. However, locking in a small term policy now guarantees your insurability and keeps premiums extremely low. If you have co-signed student loans or a mortgage, coverage protects your co-signer." },
        { question: "Should I rely on my employer's group benefits?", answer: "Employer group benefits are great but not enough on their own. Group life insurance is usually only 1–2x your salary (often not enough), and you lose it when you leave the job. Supplement with personal coverage for true protection." },
        { question: "Is tenant insurance really necessary in Ontario?", answer: "Yes. At $15–$30/month, tenant insurance covers your belongings (theft, fire, water damage), provides liability coverage (if someone is injured in your apartment), and covers additional living expenses if your unit becomes uninhabitable." },
        { question: "How much life insurance do young professionals in Ontario need?", answer: "Start with 10x your annual income if you have dependents, plus outstanding debts. A young professional earning $60K–$80K in Ontario should carry $600K–$800K in term coverage. That costs just $22–$35/month at age 25–30." },
        { question: "What's the best insurance for a first-time home buyer in Ontario?", answer: "Skip the bank's mortgage insurance and get a personal term life policy instead — it's cheaper, portable, and your family controls the payout. Add disability insurance to ensure you can keep making payments if you're unable to work." },
        { question: "Can I get insurance if I have student debt?", answer: "Yes, and you should. Student debt doesn't disqualify you from life insurance. If you have co-signed loans (OSAP or private), life insurance ensures your co-signer isn't stuck with the balance. Term life at age 25 costs as little as $20/month." },
      ]} />
    </PillarPageLayout>
  );
};

export default InsuranceForYoungProfessionalsPage;
