import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { QuickAnswerBox, AuthorBox, Disclaimer, InlineCTA } from "@/components/ContentElements";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { m } from "framer-motion";
import { HelpCircle, Shield, Heart, Plane, Home, DollarSign, Users, FileText, ChevronRight, Menu, X, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface FAQ {
  question: string;
  answer: string;
  link?: string;
  linkText?: string;
}

const faqCategories: { title: string; icon: React.ReactNode; slug: string; faqs: FAQ[] }[] = [
  {
    title: "Life Insurance in Canada",
    slug: "life-insurance-canada",
    icon: <Shield className="h-4 w-4" />,
    faqs: [
      {
        question: "Is life insurance tax-free in Canada?",
        answer: "Yes. Under Canada's Income Tax Act, life insurance death benefits are paid to your named beneficiaries completely income-tax-free. This applies to term, whole life, and universal life policies. However, if the policy has a cash surrender value and is disposed of during the policyholder's lifetime, any gain above the adjusted cost basis (ACB) may be taxable. Estate planning with life insurance is one of the most tax-efficient wealth transfer strategies available to Canadians.",
        link: "/blog/is-life-insurance-taxable-canada",
        linkText: "Full tax guide →"
      },
      {
        question: "How much life insurance do I need in Canada?",
        answer: "Financial advisors recommend the DIME method: add up your Debts (mortgage, car loans, credit cards), Income replacement (10–15× your annual salary), Mortgage balance, and Education costs for children. For a 35-year-old Ontario family earning $85,000/year with a $500,000 mortgage and two kids, the recommended coverage is typically $1.2–$1.8 million. A healthy non-smoker at that age can get $1M in term coverage for approximately $45–$65/month.",
        link: "/coverage-calculator",
        linkText: "Try our free calculator →"
      },
      {
        question: "What's the difference between term and whole life insurance?",
        answer: "Term life covers you for a set period (10, 20, or 30 years) and is 5–15× cheaper than whole life. A 30-year-old can get $500K term for ~$25–$35/month vs. $250–$400/month for equivalent whole life. Whole life never expires, builds tax-sheltered cash value, and pays dividends with participating policies. Choose term if you need maximum coverage on a budget (e.g., young family with a mortgage). Choose whole life for permanent estate planning, charitable giving strategies, or tax-sheltered wealth accumulation.",
        link: "/compare/term-vs-whole-life",
        linkText: "Full comparison →"
      },
      {
        question: "Can I get life insurance with a pre-existing condition in Canada?",
        answer: "Yes, but your options and premiums depend on the condition. Well-controlled diabetes, high blood pressure, or anxiety may result in rated (higher) premiums but standard coverage. For more serious conditions, simplified issue policies skip medical exams but ask health questions. Guaranteed issue policies accept everyone regardless of health—no medical exam, no health questions—but have lower coverage limits ($5,000–$50,000), higher premiums, and a 2-year waiting period on the full death benefit.",
        link: "/blog/no-medical-life-insurance-canada",
        linkText: "No-medical options →"
      },
      {
        question: "At what age should I buy life insurance in Canada?",
        answer: "The earlier, the better—premiums increase 8–10% for every year you delay past age 25. A 25-year-old non-smoker pays roughly $18/month for $500K term 20, while a 35-year-old pays $28/month and a 45-year-old pays $65/month for the same coverage. Buying in your 20s also locks in your health rating before any conditions develop. Even single professionals without dependents benefit from locking in low rates and having convertible term policies they can upgrade later.",
        link: "/young-professionals",
        linkText: "Guide for young professionals →"
      },
      {
        question: "Do I need life insurance if I'm single with no dependents?",
        answer: "It's not essential, but there are strategic reasons to consider it. First, locking in a low premium while you're young and healthy saves significantly over your lifetime. Second, if you have co-signed debts (student loans, car loans), your co-signer would inherit the balance. Third, a small policy covers funeral costs ($7,500–$15,000 in Canada) so family isn't burdened. Fourth, convertible term policies let you upgrade to permanent coverage later without a new medical exam—valuable if your health changes."
      },
    ]
  },
  {
    title: "Health Insurance & OHIP",
    slug: "health-insurance-ohip",
    icon: <Heart className="h-4 w-4" />,
    faqs: [
      {
        question: "What does OHIP not cover in Ontario?",
        answer: "OHIP has significant gaps. It does NOT cover: prescription drugs (ages 25–64), dental care, vision care (ages 20–64), physiotherapy (outside hospitals), psychologist/counselling sessions, massage therapy, chiropractic care, ambulance fees ($240+ per call in Ontario), semi-private or private hospital rooms, or medical care outside Canada. A private health insurance plan from $80–$180/month fills these gaps. For families, this is especially critical—children's orthodontics alone can cost $5,000–$8,000.",
        link: "/compare/private-vs-ohip",
        linkText: "Private vs OHIP comparison →"
      },
      {
        question: "How long is the OHIP waiting period for newcomers to Ontario?",
        answer: "New Ontario residents face a waiting period of up to 3 months before OHIP coverage begins. During this gap, a single emergency room visit can cost $500–$5,000, and a hospital stay averages $3,000–$5,000 per day without coverage. Private bridge health insurance during the waiting period costs $80–$150/month and covers emergency medical, prescription drugs, and doctor visits. This is especially important for newcomers arriving with families—children's healthcare needs don't wait for bureaucratic timelines.",
        link: "/blog/ohip-waiting-period-newcomers",
        linkText: "Newcomer health guide →"
      },
      {
        question: "Is private health insurance worth it in Canada?",
        answer: "For most working Canadians aged 25–64, yes. Provincial plans cover hospital and doctor visits, but the average Canadian spends $1,100–$2,500/year out-of-pocket on dental, prescriptions, and vision. A basic private plan ($80–$120/month) typically covers 80% of prescription drugs, $500–$1,500 in dental, and paramedical services. If you use even 2–3 prescriptions per year plus annual dental cleanings, the plan pays for itself. Self-employed Canadians can also deduct premiums through a Health Spending Account (HSA) for additional tax savings."
      },
      {
        question: "Does OHIP cover mental health services?",
        answer: "OHIP covers psychiatrist visits (referred by a GP) but does NOT cover psychologists, therapists, or counsellors—which is where most Canadians access mental health support. A single psychologist session costs $180–$250 in Ontario. Private health plans typically cover $500–$2,000/year in mental health services. With 1 in 5 Canadians experiencing a mental health issue annually, this gap is one of the strongest arguments for supplemental private coverage."
      },
    ]
  },
  {
    title: "Critical Illness Insurance",
    slug: "critical-illness-insurance",
    icon: <FileText className="h-4 w-4" />,
    faqs: [
      {
        question: "What does critical illness insurance cover in Canada?",
        answer: "Canadian critical illness policies typically cover 25–26 conditions, with cancer, heart attack, stroke, and coronary artery bypass surgery representing over 90% of all claims. Cancer alone accounts for roughly 65% of payouts. The policy pays a one-time, tax-free lump sum ($25,000–$2,000,000) upon diagnosis—you can spend it on anything: treatments not covered by OHIP, mortgage payments while recovering, childcare, or even a healing vacation. A 30-day survival period after diagnosis is standard before the benefit is paid.",
        link: "/critical-illness-insurance",
        linkText: "Learn more about CI →"
      },
      {
        question: "Is critical illness insurance worth it in Canada?",
        answer: "Consider: 1 in 2 Canadians will develop cancer in their lifetime, and 1 in 4 will experience a heart condition. A critical illness diagnosis often means 6–18 months off work, lost income, and out-of-pocket costs for medications, travel to treatment centres, and home modifications. If you don't have 6–12 months of expenses saved, CI insurance is a financial safety net. Return of Premium (ROP) options mean you get all your premiums back if you never claim—making it essentially free insurance if you stay healthy.",
        link: "/blog/critical-illness-insurance-coverage-canada",
        linkText: "Is CI worth it? →"
      },
      {
        question: "What's the difference between critical illness and disability insurance?",
        answer: "Critical illness pays a one-time tax-free lump sum when you're diagnosed with a covered condition (cancer, heart attack, stroke)—regardless of whether you can still work. Disability insurance replaces 60–85% of your monthly income if you cannot work due to ANY illness or injury, not just the 25 named conditions. Think of CI as 'diagnosis insurance' and disability as 'can't-work insurance.' Ideally, Canadians should have both—CI covers the immediate financial shock, disability covers the ongoing income loss.",
        link: "/compare/critical-illness-vs-disability",
        linkText: "CI vs Disability comparison →"
      },
    ]
  },
  {
    title: "Disability Insurance",
    slug: "disability-insurance",
    icon: <Users className="h-4 w-4" />,
    faqs: [
      {
        question: "Why do I need disability insurance if I have EI sickness benefits?",
        answer: "EI sickness benefits max out at approximately $668/week (2026) for only 26 weeks. If you earn $60,000/year, that replaces barely 58% of your income—and only for 6 months. A serious disability lasting 2+ years (which 1 in 3 working Canadians will experience before age 65) would leave you with zero income after EI runs out. Private disability insurance replaces 60–85% of your income for years—even until age 65—and if you pay premiums personally, benefits are received completely tax-free.",
        link: "/disability-insurance",
        linkText: "Disability insurance guide →"
      },
      {
        question: "What does 'own occupation' disability insurance mean?",
        answer: "Own-occupation is the gold standard definition. It means you're considered disabled if you cannot perform the specific duties of YOUR occupation—even if you could theoretically do another job. For example, a surgeon who loses fine motor skills would qualify even though they could teach. 'Any occupation' definitions only pay if you can't work in ANY job suited to your education and experience—a much harder bar to meet. Always choose own-occupation if available, especially for specialized professionals."
      },
      {
        question: "How much does disability insurance cost in Canada?",
        answer: "Premiums depend heavily on your income, occupation, elimination period, and benefit period. A 30-year-old office professional earning $70,000/year can expect to pay $80–$140/month for $4,000/month in benefits with a 90-day waiting period to age 65. Higher-risk occupations (construction, trades) pay more. Shortening the benefit period to 2 or 5 years reduces premiums by 30–50%. Self-employed Canadians should also consider Business Overhead Expense (BOE) insurance to keep their business running during disability.",
        link: "/blog/disability-insurance-self-employed",
        linkText: "Self-employed DI guide →"
      },
    ]
  },
  {
    title: "Travel & Visitor Insurance",
    slug: "travel-visitor-insurance",
    icon: <Plane className="h-4 w-4" />,
    faqs: [
      {
        question: "Does OHIP cover me when I travel outside Canada?",
        answer: "No. Ontario eliminated all out-of-country OHIP coverage in 2020. A medical emergency abroad can easily cost $50,000–$500,000+. Even a simple broken arm treated in the US can result in a $15,000–$25,000 bill. Travel medical insurance starts at $2–$5/day and covers emergency medical, hospital stays, emergency dental, and medical evacuation. This is non-negotiable for any Canadian travelling outside their home province, including snowbirds heading south.",
        link: "/travel-insurance",
        linkText: "Travel insurance guide →"
      },
      {
        question: "What insurance do I need for a Super Visa to Canada?",
        answer: "Super Visa applicants (parents/grandparents of Canadian citizens or PRs) must have private medical insurance from a Canadian insurer with: minimum $100,000 coverage, valid for at least 1 year from entry, covering healthcare, hospitalization, and repatriation. The policy must be paid in full before arrival. Costs range from $1,500–$4,500/year depending on age and health. Pre-existing condition coverage is available but increases premiums. Without valid insurance, the Super Visa application will be refused.",
        link: "/blog/super-visa-insurance-canada",
        linkText: "Super Visa insurance guide →"
      },
      {
        question: "Am I covered by my province's health plan if I travel to another province?",
        answer: "Partially. Most provinces have reciprocal billing agreements, but coverage gaps exist. Quebec does NOT participate in interprovincial billing—you must pay upfront and submit claims later. Emergency ambulance fees vary by province ($0 in some, $800+ in others). Hospital costs exceeding your home province's rates may not be fully covered. For extended trips to another province (work, school), you may need to switch provincial plans after 3–6 months. Supplemental travel insurance within Canada costs just $1–$2/day."
      },
    ]
  },
  {
    title: "Mortgage & Home Protection",
    slug: "mortgage-home-protection",
    icon: <Home className="h-4 w-4" />,
    faqs: [
      {
        question: "Should I get mortgage insurance from my bank or buy my own?",
        answer: "A personal term life insurance policy is almost always better than bank mortgage insurance. Bank mortgage insurance: coverage decreases as you pay down the mortgage, premiums stay the same, the bank is the beneficiary (not your family), and the policy isn't portable if you switch lenders. Personal term life: level coverage amount, often cheaper or comparable in price, your family chooses how to use the payout (they might invest rather than pay off the mortgage), and it's fully portable. A 35-year-old can get $500K 20-year term for ~$28/month vs. $35–$50/month for equivalent bank coverage.",
        link: "/mortgage-insurance",
        linkText: "Mortgage insurance comparison →"
      },
      {
        question: "Is mortgage insurance mandatory in Canada?",
        answer: "No. Banks cannot legally require you to buy their creditor insurance as a condition of your mortgage approval. They can (and often do) strongly suggest it, but you always have the right to decline and purchase your own individual policy instead. CMHC mortgage default insurance (required for down payments under 20%) is different—that protects the lender, not you, and IS mandatory for high-ratio mortgages. Don't confuse the two."
      },
    ]
  },
  {
    title: "Insurance for Newcomers & PRs",
    slug: "insurance-newcomers-prs",
    icon: <Users className="h-4 w-4" />,
    faqs: [
      {
        question: "Can newcomers and permanent residents get life insurance in Canada?",
        answer: "Yes. Most major Canadian insurers issue life insurance to permanent residents from day one. Some insurers also cover work permit holders and international students, though options may be more limited. Newcomers without Canadian medical history may face simplified underwriting or slightly higher initial premiums. Importantly, newcomers should prioritize: (1) bridge health insurance during the OHIP waiting period, (2) critical illness coverage if family history warrants it, and (3) term life if they have dependents or a Canadian mortgage.",
        link: "/life-insurance-pr-holders",
        linkText: "PR holders guide →"
      },
      {
        question: "What insurance should I get first when I arrive in Canada?",
        answer: "Priority order for new Canadian residents: 1) Private health insurance immediately (to bridge the OHIP waiting period—up to 3 months with zero coverage). 2) Auto insurance if buying/leasing a vehicle (mandatory in all provinces). 3) Tenant/home insurance (many landlords require it, and it protects your belongings). 4) Life insurance if you have dependents or debt. 5) Critical illness and disability insurance once settled. Budget approximately $200–$400/month for essential coverage in year one.",
        link: "/newcomers",
        linkText: "Newcomer insurance guide →"
      },
    ]
  },
  {
    title: "Costs & Affordability",
    slug: "insurance-costs-affordability",
    icon: <DollarSign className="h-4 w-4" />,
    faqs: [
      {
        question: "How much does life insurance cost per month in Canada?",
        answer: "For a healthy 30-year-old non-smoker: $500K term 20 costs $25–$35/month. At age 40: $45–$70/month. At age 50: $110–$180/month. Smokers pay 2–3× more. Whole life insurance costs 8–10× more than term but provides permanent coverage with cash value. Factors affecting your rate: age, smoking status, health history, family medical history, occupation, hobbies (skydiving, scuba), and coverage amount. Women typically pay 15–20% less than men for the same coverage due to longer life expectancy.",
        link: "/cost-life-insurance-ontario",
        linkText: "Ontario cost guide →"
      },
      {
        question: "Can I reduce my life insurance premiums?",
        answer: "Yes, several strategies: (1) Quit smoking—after 12 months smoke-free, most insurers reclassify you as non-smoker, cutting premiums by 50–60%. (2) Improve health metrics—losing weight, controlling blood pressure and cholesterol can qualify you for preferred rates. (3) Choose the right term length—don't buy 30-year term if you only need 20 years of coverage. (4) Bundle policies—some insurers offer 5–10% discounts for multiple policies. (5) Pay annually instead of monthly—saves 3–8% in processing fees. (6) Use an independent broker who compares 20+ carriers to find the lowest rate."
      },
      {
        question: "What's the cheapest type of life insurance in Canada?",
        answer: "Term life insurance is by far the most affordable. Within term, yearly renewable term (YRT) has the lowest initial premium but increases annually. Level term 10 is cheapest for the first decade. Level term 20 offers the best balance of affordability and stability for most families. For absolute minimum cost: a healthy 25-year-old non-smoking female can get $250K term 10 for as low as $10–$12/month. Group life insurance through your employer (if available) may be even cheaper but usually provides only 1–2× your salary and isn't portable.",
        link: "/blog/cheapest-life-insurance-canada-2026",
        linkText: "Cheapest options in 2026 →"
      },
    ]
  },
];

// ── SEO / structured data helpers ─────────────────────────────────────────
const allFaqs = faqCategories.flatMap(cat => cat.faqs);
const totalQuestions = allFaqs.length;

const InsuranceFAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // ── IntersectionObserver: auto-highlight active category on scroll ──
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    faqCategories.forEach((_, idx) => {
      const el = sectionRefs.current[idx];
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveCategory(idx);
          });
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToCategory = (idx: number) => {
    const el = sectionRefs.current[idx];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // ── JSON-LD: FAQPage (AEO / Google Rich Results) ──────────────────────
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // ── JSON-LD: WebPage (GEO – Perplexity / AI overviews) ────────────────
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Insurance FAQ Canada — ${totalQuestions}+ Most Asked Questions Answered (2026)`,
    description: "Expert answers to the most commonly asked insurance questions in Canada. Life insurance, OHIP gaps, critical illness, disability, travel, and mortgage protection explained by licensed Ontario advisors.",
    url: "https://www.insuredcan.ca/insurance-faq",
    datePublished: "2024-09-01",
    dateModified: "2026-04-11",
    inLanguage: "en-CA",
    about: [
      { "@type": "Thing", name: "Life Insurance" },
      { "@type": "Thing", name: "Health Insurance" },
      { "@type": "Thing", name: "Critical Illness Insurance" },
      { "@type": "Thing", name: "Disability Insurance" },
      { "@type": "Place", name: "Canada" },
      { "@type": "Place", name: "Ontario" },
    ],
    publisher: {
      "@type": "Organization",
      name: "InsuredCan",
      url: "https://www.insuredcan.ca",
      logo: { "@type": "ImageObject", url: "https://www.insuredcan.ca/logo.png" },
    },
    author: {
      "@type": "Organization",
      name: "InsuredCan — Licensed Ontario Insurance Advisors",
      url: "https://www.insuredcan.ca",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".quick-answer-box", ".faq-answer", ".faq-key-facts"],
    },
  };

  // ── JSON-LD: BreadcrumbList ────────────────────────────────────────────
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.insuredcan.ca/" },
      { "@type": "ListItem", position: 2, name: "Insurance FAQ", item: "https://www.insuredcan.ca/insurance-faq" },
    ],
  };

  // ── JSON-LD: ItemList (GEO – helps AI engines index all topics) ────────
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Insurance FAQ Categories",
    numberOfItems: faqCategories.length,
    itemListElement: faqCategories.map((cat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cat.title,
      url: `https://www.insuredcan.ca/insurance-faq#${cat.slug}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        {/* ── Core SEO ─────────────────────────────────────────────────── */}
        <title>Insurance FAQ Canada — {totalQuestions}+ Most Asked Questions (2026) | InsuredCan</title>
        <meta name="description" content={`Expert answers to Canada's ${totalQuestions}+ most searched insurance questions. Life insurance costs, OHIP coverage gaps, critical illness, disability, travel insurance, and mortgage protection — explained by licensed Ontario advisors.`} />
        <meta name="keywords" content="insurance FAQ Canada, life insurance questions Canada, OHIP coverage gaps Ontario, critical illness insurance FAQ, disability insurance Canada 2026, travel insurance Canada, mortgage insurance FAQ, how much life insurance Canada, insurance costs Ontario" />
        <link rel="canonical" href="https://www.insuredcan.ca/insurance-faq" />

        {/* ── GEO: AI search engine signals ────────────────────────────── */}
        <meta name="author" content="InsuredCan — Licensed Ontario Insurance Advisors" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="article:section" content="Insurance FAQ Canada" />
        <meta name="article:tag" content="life insurance, health insurance, OHIP, critical illness, disability, travel insurance, mortgage insurance, Canada, Ontario" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Ontario, Canada" />

        {/* ── Open Graph (social + GEO) ─────────────────────────────────── */}
        <meta property="og:title" content={`Insurance FAQ Canada — ${totalQuestions}+ Expert Answers (2026)`} />
        <meta property="og:description" content="Get clear, factual answers to Canada's most asked insurance questions. Life insurance, health coverage, critical illness, disability, and more — from licensed Ontario advisors." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.insuredcan.ca/insurance-faq" />
        <meta property="og:locale" content="en_CA" />
        <meta property="article:published_time" content="2024-09-01T00:00:00+05:30" />
        <meta property="article:modified_time" content="2026-04-11T00:00:00+05:30" />

        {/* ── Twitter Card ─────────────────────────────────────────────── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Insurance FAQ Canada — ${totalQuestions}+ Expert Answers (2026)`} />
        <meta name="twitter:description" content="Expert answers to the most commonly asked insurance questions in Canada." />

        {/* ── Structured data ───────────────────────────────────────────── */}
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-grow" itemScope itemType="https://schema.org/FAQPage">
        {/* ── Page Header ─────────────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <BreadcrumbNav items={[
              { label: "Home", href: "/" },
              { label: "Insurance FAQ", href: "/insurance-faq" },
            ]} />

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-primary/10 rounded-xl" aria-hidden="true">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Insurance Knowledge Hub</p>
              </div>

              {/* H1 — primary keyword + year for freshness signal */}
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-3">
                Insurance FAQ Canada: {totalQuestions}+ Most Asked Questions Answered by Experts (2026)
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                Clear, honest answers from licensed Ontario advisors — no jargon, no sales pitch. Covers life insurance, OHIP gaps, critical illness, disability, travel, mortgage protection, and costs for Canadian residents in 2026.
              </p>

              {/* Stats bar — AEO: machine-readable data points */}
              <div className="flex flex-wrap gap-6 mt-5" aria-label="Page statistics">
                {[
                  { label: "Questions answered", value: `${totalQuestions}+` },
                  { label: "Categories", value: faqCategories.length.toString() },
                  { label: "Last updated", value: "Apr 2026" },
                  { label: "Reading time", value: "~12 min" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">{s.value}</span>
                    <span className="text-xs text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </div>

        {/* ── Key Facts box — AEO / GEO: AI engines extract structured facts ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <div className="faq-key-facts bg-primary/5 border border-primary/15 rounded-xl p-5">
            <p className="text-xs font-bold text-primary uppercase tracking-wide mb-3">Key facts about insurance in Canada (2026)</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                "Life insurance death benefits are 100% tax-free under the Income Tax Act.",
                "OHIP does not cover dental, vision, prescriptions (ages 25–64), or mental health therapy.",
                "1 in 2 Canadians will develop cancer; 1 in 3 will experience a disability before 65.",
                "Ontario eliminated all out-of-country OHIP coverage in 2020.",
                "Term life for a healthy 30-year-old non-smoker starts at ~$25/month for $500K.",
                "Super Visa insurance requires minimum $100,000 coverage from a Canadian insurer.",
              ].map((fact) => (
                <li key={fact} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Quick Answer Box ──────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="quick-answer-box">
            <QuickAnswerBox
              question="What's the single most important insurance question Canadians get wrong?"
              answer="Most Canadians assume their employer benefits and provincial health plan provide complete coverage. In reality, OHIP doesn't cover dental, prescription drugs (ages 25-64), vision, or mental health therapy. And employer group life insurance typically provides only 1-2× salary — far below the 10-15× recommended for families. Understanding these gaps is the first step to proper protection."
            />
          </div>
        </div>

        {/* ── Mobile Category Menu Toggle ─────────────────────────────── */}
        <div className="lg:hidden sticky top-0 z-30 bg-background border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-between w-full py-3 text-sm font-semibold text-foreground"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle FAQ category menu"
            >
              <span className="flex items-center gap-2">
                {faqCategories[activeCategory].icon}
                <span className="text-primary">{faqCategories[activeCategory].title}</span>
              </span>
              <span className="flex items-center gap-1 text-muted-foreground text-xs">
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                {mobileMenuOpen ? "Close" : "All categories"}
              </span>
            </button>

            {mobileMenuOpen && (
              <m.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="pb-3 border-t border-border pt-2 grid grid-cols-2 gap-1"
                role="navigation"
                aria-label="FAQ categories"
              >
                {faqCategories.map((cat, idx) => (
                  <button
                    key={cat.slug}
                    onClick={() => scrollToCategory(idx)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-left text-xs font-medium transition-all ${
                      activeCategory === idx
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    aria-current={activeCategory === idx ? "true" : undefined}
                  >
                    <span className="shrink-0">{cat.icon}</span>
                    <span className="leading-tight">{cat.title}</span>
                  </button>
                ))}
              </m.div>
            )}
          </div>
        </div>

        {/* ── Main Two-Column Layout ───────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8 items-start">

            {/* ── LEFT: Sticky Sidebar ────────────────────────────────── */}
            <aside className="hidden lg:block w-64 shrink-0" aria-label="FAQ category navigation">
              <div className="sticky top-24">
                <div className="mb-4">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Browse by topic</p>
                  <div className="h-0.5 w-8 bg-primary rounded-full" />
                </div>

                <nav className="space-y-1">
                  {faqCategories.map((cat, idx) => {
                    const isActive = activeCategory === idx;
                    return (
                      <button
                        key={cat.slug}
                        onClick={() => scrollToCategory(idx)}
                        aria-current={isActive ? "true" : undefined}
                        className={`group w-full flex items-start gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <span className={`mt-0.5 shrink-0 transition-all duration-200 ${isActive ? "text-primary-foreground" : "text-primary/60 group-hover:text-primary"}`}>
                          {cat.icon}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className={`block text-xs font-semibold leading-snug ${isActive ? "text-primary-foreground" : ""}`}>
                            {cat.title}
                          </span>
                          <span className={`block text-[11px] mt-0.5 ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                            {cat.faqs.length} question{cat.faqs.length !== 1 ? "s" : ""}
                          </span>
                        </span>
                        <ChevronRight className={`h-3.5 w-3.5 mt-0.5 shrink-0 transition-transform duration-200 ${isActive ? "text-primary-foreground translate-x-0.5" : "text-muted-foreground/40 group-hover:translate-x-0.5"}`} />
                      </button>
                    );
                  })}
                </nav>

                {/* Sidebar CTA */}
                <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                  <p className="text-xs font-bold text-foreground mb-1">Still have questions?</p>
                  <p className="text-xs text-muted-foreground mb-3">Talk to a licensed Ontario advisor for free.</p>
                  <Link
                    to="/contact"
                    className="block text-center text-xs font-bold bg-primary text-primary-foreground px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-all"
                  >
                    Ask Free →
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── RIGHT: FAQ Sections ─────────────────────────────────── */}
            <div className="flex-1 min-w-0">
              {faqCategories.map((category, catIdx) => (
                <m.section
                  key={category.slug}
                  ref={(el) => { sectionRefs.current[catIdx] = el as HTMLElement | null; }}
                  id={category.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12 scroll-mt-28"
                  aria-labelledby={`heading-${category.slug}`}
                >
                  {/* Category H2 — SEO: keyword-rich section heading */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                    <div className={`p-2.5 rounded-xl transition-colors ${activeCategory === catIdx ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`} aria-hidden="true">
                      {category.icon}
                    </div>
                    <div>
                      <h2 id={`heading-${category.slug}`} className="text-lg font-bold text-foreground font-display">
                        {category.title}
                      </h2>
                      <p className="text-xs text-muted-foreground">{category.faqs.length} questions</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="space-y-2.5">
                    {category.faqs.map((faq, i) => (
                      /* itemScope/itemType: HTML microdata for AEO (voice + AI) */
                      <AccordionItem
                        key={faq.question}
                        value={`${catIdx}-${i}`}
                        className="bg-card rounded-xl border border-border px-5 shadow-sm hover:border-primary/20 transition-colors data-[state=open]:border-primary/30 data-[state=open]:shadow-md"
                        itemScope
                        itemType="https://schema.org/Question"
                      >
                        <AccordionTrigger
                          className="text-sm font-semibold text-foreground hover:no-underline py-4 text-left gap-3"
                          itemProp="name"
                        >
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent
                          className="text-sm text-muted-foreground leading-relaxed pb-5 faq-answer"
                          itemScope
                          itemType="https://schema.org/Answer"
                        >
                          <div className="pt-1 border-t border-border/50 mt-1 pb-1">
                            <p itemProp="text" className="pt-3">{faq.answer}</p>
                            {faq.link && (
                              <Link
                                to={faq.link}
                                className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-primary hover:underline"
                              >
                                {faq.linkText || "Learn more →"}
                              </Link>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  {catIdx === 1 && <div className="mt-5"><InlineCTA text="Compare Free Quotes" /></div>}
                  {catIdx === 4 && <div className="mt-5"><InlineCTA text="Talk to an Advisor" /></div>}
                </m.section>
              ))}

              {/* Bottom CTA */}
              <m.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary text-primary-foreground rounded-2xl p-8 text-center mb-10"
              >
                <h2 className="text-2xl font-bold font-display mb-3">Still Have Questions?</h2>
                <p className="text-sm opacity-90 mb-5 max-w-lg mx-auto">
                  Our licensed Ontario advisors answer your specific questions for free — no obligation, no pressure. Get a personalized recommendation in under 10 minutes.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-all"
                >
                  Ask Your Question Free →
                </Link>
              </m.div>

              {/* Related Resources — internal linking for SEO */}
              <m.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
                aria-label="Related resources"
              >
                {[
                  { title: "Insurance Glossary", desc: "45+ terms explained in plain language", href: "/insurance-glossary" },
                  { title: "Coverage Calculator", desc: "Find out exactly how much coverage you need", href: "/coverage-calculator" },
                  { title: "Blog Articles", desc: "17+ in-depth guides on Canadian insurance", href: "/blog" },
                ].map((res) => (
                  <Link
                    key={res.href}
                    to={res.href}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all group"
                  >
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{res.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{res.desc}</p>
                  </Link>
                ))}
              </m.div>

              <AuthorBox />
              <Disclaimer />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InsuranceFAQ;
