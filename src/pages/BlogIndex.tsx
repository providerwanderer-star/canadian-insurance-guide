import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { m } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const blogPosts = [
  { slug: "best-life-insurance-ontario-2026", category: "Life Insurance", title: "Best Life Insurance in Ontario (2026): Top 8 Providers Compared", description: "Compare the best life insurance companies in Ontario. See rates, features, and expert rankings for Sun Life, Manulife, Canada Life & more.", date: "April 9, 2026", readTime: "12 min read" },
  { slug: "cheapest-life-insurance-canada-2026", category: "Life Insurance", title: "Cheapest Life Insurance in Canada (2026): How to Pay Less", description: "Find the cheapest life insurance in Canada. Compare rates from $12/mo across 20+ insurers. 7 strategies to lower your premium.", date: "April 9, 2026", readTime: "10 min read" },
  { slug: "is-life-insurance-worth-it-canada", category: "Life Insurance", title: "Is Life Insurance Worth It in Canada? An Honest Analysis (2026)", description: "We analyze the real costs, benefits, and scenarios where Canadians need (or don't need) life insurance.", date: "April 9, 2026", readTime: "11 min read" },
  { slug: "top-insurance-mistakes-canadians", category: "Insurance Tips", title: "Top 10 Insurance Mistakes Canadians Make (And How to Avoid Them)", description: "From buying bank mortgage insurance to under-insuring, learn how to protect your family properly.", date: "April 9, 2026", readTime: "11 min read" },
  { slug: "how-to-choose-insurance-ontario", category: "Life Insurance", title: "How to Choose Life Insurance in Ontario: A Step-by-Step Guide (2026)", description: "7 steps covering coverage amount, type, provider comparison, and common pitfalls. Expert Ontario advice.", date: "April 9, 2026", readTime: "12 min read" },
  { slug: "insurance-new-immigrants-canada", category: "Newcomers", title: "Insurance for New Immigrants in Canada: Complete 2026 Guide", description: "What insurance you need as a new immigrant — health bridge coverage, life insurance, Super Visa requirements, and more.", date: "April 9, 2026", readTime: "13 min read" },
  { slug: "super-visa-insurance-canada", category: "Newcomers", title: "Super Visa Insurance Canada: The Complete 2026 Guide", description: "Everything you need to know about Super Visa insurance requirements, costs, best providers, and monthly payment options.", date: "April 6, 2026", readTime: "9 min read" },
  { slug: "mortgage-life-insurance-vs-term-canada", category: "Life Insurance", title: "Mortgage Life Insurance vs. Term Life in Canada: Don't Overpay", description: "Bank mortgage insurance costs 3–4× more than term life and pays the bank, not your family. Here's the smarter choice.", date: "April 6, 2026", readTime: "8 min read" },
  { slug: "universal-life-insurance-canada", category: "Life Insurance", title: "Universal Life Insurance Canada: Is It Worth It in 2026?", description: "How universal life insurance works, its tax advantages, real costs, and whether it makes sense for high-income Canadians.", date: "April 6, 2026", readTime: "10 min read" },
  { slug: "rrsp-tfsa-vs-life-insurance-canada", category: "Retirement Planning", title: "RRSP, TFSA, or Life Insurance? Canada's Tax Shelter Showdown (2026)", description: "Which tax shelter is best for Canadians? A clear comparison of RRSP, TFSA, and permanent life insurance with the optimal order of use.", date: "April 6, 2026", readTime: "10 min read" },
  { slug: "life-insurance-smokers-canada", category: "Life Insurance", title: "Life Insurance for Smokers in Canada: How to Get the Best Rates in 2026", description: "Smokers pay 2–4× more for life insurance. Learn which Canadian insurers are most favorable and how quitting saves you thousands.", date: "April 6, 2026", readTime: "7 min read" },
  { slug: "how-much-life-insurance-canada", category: "Life Insurance", title: "How Much Life Insurance Do You Need in Canada?", description: "Use the 10–15x income rule, factor in debts and dependents, and calculate exactly how much coverage your family needs.", date: "March 15, 2026", readTime: "8 min read" },
  { slug: "best-life-insurance-families-canada", category: "Life Insurance", title: "Best Life Insurance for Families in Canada (2026)", description: "Compare term, whole life, and critical illness coverage options for Canadian families. Find the right protection mix.", date: "March 10, 2026", readTime: "7 min read" },
  { slug: "ohip-waiting-period-newcomers", category: "Newcomers", title: "Moving to Ontario: How to Bridge the 3-Month OHIP Waiting Period", description: "Everything new Ontario residents need to know about getting health coverage during the OHIP waiting period.", date: "March 12, 2026", readTime: "6 min read" },
  { slug: "critical-illness-insurance-coverage-canada", category: "Critical Illness", title: "What Does Critical Illness Insurance Cover in Canada?", description: "Learn what conditions are covered, how claims work, real-life scenarios, and whether CI insurance is worth it.", date: "March 8, 2026", readTime: "8 min read" },
  { slug: "term-vs-whole-life-2026", category: "Life Insurance", title: "Term vs. Whole Life Insurance: What Canadians Should Choose in 2026", description: "A no-nonsense comparison of term and whole life insurance. Real costs, tax implications, and who each type is best for.", date: "March 8, 2026", readTime: "8 min read" },
  { slug: "average-funeral-costs-canada", category: "Funeral Insurance", title: "Average Funeral Costs in Canada: What You Need to Know (2026)", description: "Canadian funerals cost $8K–$15K. See a detailed breakdown, compare burial vs cremation, and learn how insurance helps.", date: "March 5, 2026", readTime: "7 min read" },
  { slug: "what-ohip-doesnt-cover", category: "Health", title: "Is OHIP Enough? What Provincial Healthcare Doesn't Cover", description: "Most Ontarians don't realize how many essential health services OHIP doesn't pay for.", date: "March 3, 2026", readTime: "7 min read" },
  { slug: "life-insurance-family-toronto", category: "Life Insurance", title: "How Much Life Insurance Does a Family of 4 in Toronto Need?", description: "A practical guide to calculating the right life insurance amount for Toronto families.", date: "February 25, 2026", readTime: "6 min read" },
  { slug: "disability-insurance-self-employed", category: "Disability", title: "Disability Insurance for Self-Employed Canadians: The Complete Guide", description: "If you're self-employed, your income depends entirely on your ability to work. Here's how to protect it.", date: "February 18, 2026", readTime: "7 min read" },
  { slug: "no-medical-life-insurance-canada", category: "Life Insurance", title: "No Medical Exam Life Insurance in Canada: What You Need to Know", description: "Get life insurance without a medical exam. Compare simplified and guaranteed issue options from top Canadian insurers.", date: "March 1, 2026", readTime: "7 min read" },
  { slug: "is-life-insurance-taxable-canada", category: "Life Insurance", title: "Is Life Insurance Taxable in Canada? The Complete Tax Guide", description: "Learn when life insurance is and isn't taxable in Canada. Death benefits, cash value, and corporate-owned policies explained.", date: "February 28, 2026", readTime: "8 min read" },
  { slug: "life-insurance-seniors-canada", category: "Life Insurance", title: "Life Insurance for Seniors in Canada: Options After 60", description: "Life insurance options for Canadians over 60. Compare guaranteed acceptance, simplified issue, and final expense policies.", date: "February 20, 2026", readTime: "8 min read" },
];

const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Insurance Blog — Canadian Insurance Guides & Education | InsuredCan</title>
        <meta name="description" content="Plain-language life, health, critical illness, and disability insurance guides written for Canadians. Compare plans, understand costs, and make confident coverage decisions." />
        <link rel="canonical" href="https://www.insuredcan.ca/blog" />
        <meta property="og:title" content="Insurance Blog — Canadian Insurance Guides & Education | InsuredCan" />
        <meta property="og:description" content="Plain-language insurance guides written for Canadians. Life, health, critical illness, and disability insurance explained simply." />
        <meta property="og:url" content="https://www.insuredcan.ca/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.insuredcan.ca/og-image.png" />
      </Helmet>
      <Navbar />

      <section className="bg-primary">
        <div className="container py-16 md:py-20">
          <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Blog</span>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 font-display">Insurance Learning Hub</h1>
            <p className="text-lg text-primary-foreground/80 max-w-reading">
              Plain-language guides written for Canadians, not insurance agents. Understand your coverage before you buy.
            </p>
          </m.div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <m.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Link to={`/blog/${post.slug}`} className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth h-full border border-transparent hover:border-primary/20">
                <div className="h-32 bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">{post.category}</span>
                </div>
                <div className="p-6">
                  <h2 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-smooth leading-snug font-display">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogIndex;
