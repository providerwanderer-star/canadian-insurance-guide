import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "ohip-waiting-period-newcomers",
    category: "Newcomers",
    title: "Moving to Ontario: How to Bridge the 3-Month OHIP Waiting Period",
    description: "Everything new Ontario residents need to know about getting health coverage during the OHIP waiting period. Don't risk going uninsured.",
    date: "March 12, 2026",
    readTime: "6 min read",
  },
  {
    slug: "term-vs-whole-life-2026",
    category: "Life Insurance",
    title: "Term vs. Whole Life Insurance: What Canadians Should Choose in 2026",
    description: "A no-nonsense comparison of term and whole life insurance for Canadian residents. Real costs, tax implications, and who each type is best for.",
    date: "March 8, 2026",
    readTime: "8 min read",
  },
  {
    slug: "what-ohip-doesnt-cover",
    category: "Health",
    title: "Is OHIP Enough? What Provincial Healthcare Doesn't Cover",
    description: "Most Ontarians don't realize how many essential health services OHIP doesn't pay for. Prescriptions, dental, vision, and more.",
    date: "March 3, 2026",
    readTime: "7 min read",
  },
  {
    slug: "life-insurance-family-toronto",
    category: "Life Insurance",
    title: "How Much Life Insurance Does a Family of 4 in Toronto Need?",
    description: "A practical guide to calculating the right life insurance amount for Toronto families, including mortgage, income replacement, and education costs.",
    date: "February 25, 2026",
    readTime: "6 min read",
  },
  {
    slug: "disability-insurance-self-employed",
    category: "Disability",
    title: "Disability Insurance for Self-Employed Canadians: The Complete Guide",
    description: "If you're self-employed, your income depends entirely on your ability to work. Here's how to protect it with disability insurance.",
    date: "February 18, 2026",
    readTime: "7 min read",
  },
  {
    slug: "super-visa-insurance-requirements-2026",
    category: "Travel",
    title: "Super Visa Insurance Requirements for 2026: What You Need to Know",
    description: "Updated guide on Super Visa insurance requirements for parents and grandparents visiting Canada. Coverage amounts, costs, and best providers.",
    date: "February 10, 2026",
    readTime: "5 min read",
  },
  {
    slug: "mortgage-insurance-vs-term-life",
    category: "Mortgage",
    title: "Bank Mortgage Insurance vs. Term Life: Why Your Bank's Offer Is a Mistake",
    description: "Most Canadians don't know they're overpaying for inferior coverage. Here's why a personal term life policy beats bank mortgage insurance every time.",
    date: "February 3, 2026",
    readTime: "6 min read",
  },
  {
    slug: "best-health-insurance-ontario-2026",
    category: "Health",
    title: "Best Private Health Insurance in Ontario for 2026",
    description: "Compare the top private health insurance plans available in Ontario. Coverage details, costs, and which plan is right for your situation.",
    date: "January 28, 2026",
    readTime: "9 min read",
  },
];

const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Insurance Blog — Canadian Insurance Guides & Education | InsuredCan</title>
        <meta name="description" content="Plain-language insurance guides written for Canadians. Learn about life, health, disability, and travel insurance with no jargon." />
      </Helmet>
      <Navbar />

      <section className="bg-surface border-b border-border">
        <div className="container py-16 md:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Insurance Learning Hub
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-reading">
            Plain-language guides written for Canadians, not insurance agents. Understand your coverage before you buy.
          </p>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth h-full"
              >
                <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogIndex;
