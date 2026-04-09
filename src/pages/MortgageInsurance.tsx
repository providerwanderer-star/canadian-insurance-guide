import PillarPageLayout from "@/components/PillarPageLayout";
import { ContentSection, ContentH3, ContentParagraph, ProsList, ConsList, ComparisonTable, FAQSection, InfoCard, QuickAnswerBox, KeyTakeaways, InlineCTA } from "@/components/ContentElements";
import { Link } from "react-router-dom";

const MortgageInsurancePage = () => {
  return (
    <PillarPageLayout
      title="Mortgage Insurance in Canada: Protect Your Home"
      metaTitle="Mortgage Insurance Canada (2026): Save $140/mo vs Bank Plans | InsuredCan"
      metaDescription="Compare bank mortgage insurance vs personal life insurance in Canada. Learn why a term life policy often provides better coverage at a lower cost for homeowners."
      breadcrumb="mortgage-insurance"
      ogImage="https://www.insuredcan.ca/og/og-mortgage.png"
      heroTag="Home Protection"
      heroDescription="Your bank just offered you mortgage insurance at closing. It seemed easy — just check a box. But that checkbox could cost your family thousands of dollars and leave them unprotected when it matters most. Here's what your bank won't tell you."
    >
      <QuickAnswerBox
        question="Should I get mortgage insurance from my bank or buy my own?"
        answer="A personal term life insurance policy is almost always better than bank mortgage insurance. It's 20–40% cheaper, provides a level death benefit (not decreasing), is portable between lenders, and your family controls how the payout is used — not the bank."
      />
      <KeyTakeaways items={[
        "Bank mortgage insurance costs 20–40% MORE than a personal term policy",
        "Bank coverage decreases as your mortgage shrinks — but premiums stay the same",
        "Personal term life is portable — bank insurance is tied to that specific lender",
        "Bank insurance underwrites at claim time (risky) — personal policies underwrite upfront",
        "Your family chooses how to use a personal policy payout — bank pays itself first",
      ]} />

      {/* UNIQUE: Dramatic real-world scenario about post-claim underwriting */}
      <ContentSection title="The Claim That Was Denied After 12 Years of Premiums">
        <ContentParagraph>
          In 2019, a CBC Marketplace investigation revealed that <strong>bank mortgage insurance claims are denied at alarming rates</strong>. One Ontario family paid mortgage insurance premiums to their bank for 12 years. When the husband passed away, the bank reviewed his original application — done verbally by a teller who checked boxes — and found a "misrepresentation." The claim was denied. Twelve years of premiums: wasted. Mortgage: still owed.
        </ContentParagraph>
        <ContentParagraph>
          This happens because bank mortgage insurance uses <strong>post-claim underwriting</strong>. Your health isn't fully assessed when you sign up — it's assessed after you die. If the bank finds any reason to deny, they will. A personal <Link to="/term-life-insurance" className="text-primary font-semibold hover:underline">term life insurance</Link> policy underwrites you upfront. Once approved, your coverage is guaranteed. No surprises at the worst possible moment.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Replace Bank Insurance — Get Free Quote" href="mailto:sahil280389@gmail.com?subject=Replace%20Bank%20Mortgage%20Insurance" />

      <ContentSection title="Bank Mortgage Insurance vs. Personal Term Life — The Full Breakdown">
        <ComparisonTable
          headers={["Feature", "Bank Mortgage Insurance", "Personal Term Life"]}
          rows={[
            ["Beneficiary", "The bank gets paid", "YOUR family gets paid"],
            ["Coverage amount", "Decreases as mortgage shrinks", "Stays level — full amount always"],
            ["Premiums", "Same rate for shrinking coverage", "Same rate for full coverage"],
            ["Portability", "Tied to that bank — lost if you switch", "Follows you to any lender"],
            ["Underwriting", "At claim time (after death) ⚠️", "At application (guaranteed once approved) ✓"],
            ["Cost (40yr, $800K)", "$120–$160/month", "$58–$78/month"],
            ["Payout flexibility", "Bank decides — pays the mortgage only", "Family decides — mortgage, invest, or both"],
            ["Convertible?", "No", "Yes — most convert to permanent insurance"],
          ]}
        />
        <InfoCard title="⚠️ The Post-Claim Underwriting Problem">
          Bank mortgage insurance often does underwriting at the time of claim, not at application. This means your family could pay premiums for years and still be denied at the worst possible moment. With a personal life insurance policy, you're fully underwritten upfront — once approved, your claim cannot be denied for health reasons.
        </InfoCard>
      </ContentSection>

      <ContentSection title="Real Cost Savings: A Mississauga Family">
        <ContentParagraph>
          The Patels bought their first home in <Link to="/life-insurance-mississauga" className="text-primary font-semibold hover:underline">Mississauga</Link> — $875,000 mortgage, both aged 36. Their bank offered mortgage insurance at $142/month.
        </ContentParagraph>
        <ComparisonTable
          headers={["Option", "Monthly Cost", "Year 1 Coverage", "Year 10 Coverage", "Year 20 Coverage"]}
          rows={[
            ["Bank mortgage insurance", "$142/mo", "$875,000", "~$650,000", "~$380,000"],
            ["Personal term 20 ($1M)", "$68/mo", "$1,000,000", "$1,000,000", "$1,000,000"],
            ["Savings with personal policy", "$74/mo saved", "+$125K more coverage", "+$350K more", "+$620K more"],
          ]}
        />
        <ContentParagraph>
          Over 20 years, the Patels save <strong>$17,760</strong> with a personal policy — while having MORE coverage that stays level. Their family gets $1M to use however they choose, not a decreasing payout that goes straight to the bank. That's the <Link to="/life-insurance" className="text-primary font-semibold hover:underline">power of personal life insurance</Link>.
        </ContentParagraph>
      </ContentSection>

      <InlineCTA text="Calculate Your Savings vs. Bank Insurance" href="/coverage-calculator" />

      <ContentSection title="Who Should Get Mortgage Protection?">
        <ProsList items={[
          "Any homeowner with an outstanding mortgage — especially in expensive Ontario markets",
          "Single-income families where one spouse handles the mortgage payments",
          "First-time homebuyers in Toronto, Vancouver, or other high-cost cities",
          "Self-employed Canadians whose income may fluctuate during economic downturns",
          "Anyone currently paying bank mortgage insurance — you can switch and save immediately",
          "Dual-income couples where both contribute to the mortgage",
        ]} />
        <ContentParagraph>
          Already have bank mortgage insurance? You can cancel it anytime and switch to a personal term policy. Get your new policy approved first, then cancel the bank coverage. Never leave a gap. See city-specific advice for <Link to="/life-insurance-toronto" className="text-primary font-semibold hover:underline">Toronto</Link>, <Link to="/life-insurance-brampton" className="text-primary font-semibold hover:underline">Brampton</Link>, or <Link to="/life-insurance-mississauga" className="text-primary font-semibold hover:underline">Mississauga</Link>.
        </ContentParagraph>
      </ContentSection>

      <ContentSection title="How to Get the Cheapest Mortgage Protection">
        <ProsList items={[
          "Choose a personal term life policy instead of bank mortgage insurance — save 20–40% immediately",
          "Match your term length to your mortgage amortization (20 or 25-year term)",
          "Apply while you're healthy — don't wait until a health issue arises",
          "Use an independent broker to compare rates across 20+ insurers",
          "If you're refinancing or renewing, it's the perfect time to switch from bank to personal coverage",
          "Consider slightly more coverage than your mortgage — extra covers final expenses and income replacement",
        ]} />
      </ContentSection>

      <ContentSection title="Pros and Cons of Personal Term Life (for Mortgage)">
        <ProsList items={[
          "Coverage amount stays level while mortgage decreases — growing equity protection",
          "Family controls the payout — can pay mortgage, invest, or both",
          "Portable — doesn't change when you switch banks or renew mortgage",
          "Underwritten at application — coverage is guaranteed once approved",
          "20–40% cheaper than bank mortgage insurance",
          "Convertible to permanent insurance — built-in flexibility",
        ]} />
        <ConsList items={[
          "Requires medical underwriting (health questions, possible blood test)",
          "Must apply separately from your mortgage closing",
          "Takes 2–6 weeks for full underwriting (but backdated to application date)",
        ]} />
      </ContentSection>

      <InlineCTA text="Switch From Bank Insurance Today" href="mailto:sahil280389@gmail.com?subject=Switch%20From%20Bank%20Mortgage%20Insurance" />

      <FAQSection faqs={[
        { question: "Is mortgage insurance mandatory in Canada?", answer: "Mortgage creditor insurance from your bank is NOT mandatory, despite what some bank representatives may imply. CMHC mortgage default insurance (for down payments under 20%) is different and IS required, but it protects the lender, not you. They are completely separate products." },
        { question: "Can I cancel my bank's mortgage insurance and get my own?", answer: "Yes. You can cancel bank mortgage insurance at any time — there's no penalty. We recommend getting a personal term life policy approved and in-force first, then cancelling the bank coverage. Never leave a gap in protection." },
        { question: "Should I get mortgage insurance or life insurance?", answer: "A personal term life insurance policy is almost always the better choice. It's cheaper, provides level coverage, and your beneficiaries control the money. The only advantage of bank insurance is convenience — you check a box at closing. But that convenience costs your family thousands." },
        { question: "How much mortgage insurance do I need?", answer: "Match your coverage to your outstanding mortgage balance — or go slightly higher to cover closing costs and income replacement. If you owe $800K, a $1M term policy provides superior protection at a lower cost than $800K bank mortgage insurance." },
        { question: "What happens to bank mortgage insurance when I renew or switch lenders?", answer: "Bank mortgage insurance is NOT portable. When you switch lenders or renew, you may need to requalify for coverage — and if your health has changed, you might not qualify. Personal term life insurance follows YOU, not the lender." },
        { question: "Can I have both bank mortgage insurance and a personal life insurance policy?", answer: "Yes, but there's no reason to. You'd be paying for duplicate coverage. Cancel the bank insurance (after your personal policy is active) and put those savings toward increasing your term life coverage or adding critical illness protection." },
      ]} />
    </PillarPageLayout>
  );
};

export default MortgageInsurancePage;
