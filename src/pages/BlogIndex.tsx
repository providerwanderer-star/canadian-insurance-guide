import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const blogPosts = [
  { slug: "how-much-life-insurance-canada", category: "Life Insurance", title: "How Much Life Insurance Do You Need in Canada?", description: "Use the 10–15x income rule, factor in debts and dependents, and calculate exactly how much coverage your family needs.", date: "March 15, 2026", readTime: "8 min read" },
  { slug: "best-life-insurance-families-canada", category: "Life Insurance", title: "Best Life Insurance for Families in Canada (2026)", description: "Compare term, whole life, and critical illness coverage options for Canadian families. Find the right protection mix.", date: "March 10, 2026", readTime: "7 min read" },
  { slug: "ohip-waiting-period-newcomers", category: "Newcomers", title: "Moving to Ontario: How to Bridge the 3-Month OHIP Waiting Period", description: "Everything new Ontario residents need to know about getting health coverage during the OHIP waiting period.", date: "March 12, 2026", readTime: "6 min read" },
  { slug: "critical-illness-insurance-coverage-canada", category: "Critical Illness", title: "What Does Critical Illness Insurance Cover in Canada?", description: "Learn what conditions are covered, how claims work, real-life scenarios, and whether CI insurance is worth it.", date: "March 8, 2026", readTime: "8 min read" },
  { slug: "term-vs-whole-life-2026", category: "Life Insurance", title: "Term vs. Whole Life Insurance: What Canadians Should Choose in 2026", description: "A no-nonsense comparison of term and whole life insurance. Real costs, tax implications, and who each type is best for.", date: "March 8, 2026", readTime: "8 min read" },
  { slug: "average-funeral-costs-canada", category: "Funeral Insurance", title: "Average Funeral Costs in Canada: What You Need to Know (2026)", description: "Canadian funerals cost $8K–$15K. See a detailed breakdown, compare burial vs cremation, and learn how insurance helps.", date: "March 5, 2026", readTime: "7 min read" },
  { slug: "what-ohip-doesnt-cover", category: "Health", title: "Is OHIP Enough? What Provincial Healthcare Doesn't Cover", description: "Most Ontarians don't realize how many essential health services OHIP doesn't pay for.", date: "March 3, 2026", readTime: "7 min read" },
  { slug: "life-insurance-family-toronto", category: "Life Insurance", title: "How Much Life Insurance Does a Family of 4 in Toronto Need?", description: "A practical guide to calculating the right life insurance amount for Toronto families.", date: "February 25, 2026", readTime: "6 min read" },
  { slug: "disability-insurance-self-employed", category: "Disability", title: "Disability Insurance for Self-Employed Canadians: The Complete Guide", description: "If you're self-employed, your income depends entirely on your ability to work. Here's how to protect it.", date: "February 18, 2026", readTime: "7 min read" },
];

const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Insurance Blog — Canadian Insurance Guides & Education | InsuredCan</title>
        <meta name="description" content="Plain-language insurance guides written for Canadians. Learn about life, health, critical illness, funeral, and disability insurance." />
      </Helmet>
      <Navbar />

      <section className="bg-primary">
        <div className="container py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Blog</span>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 font-display">Insurance Learning Hub</h1>
            <p className="text-lg text-primary-foreground/80 max-w-reading">
              Plain-language guides written for Canadians, not insurance agents. Understand your coverage before you buy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
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
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogIndex;
