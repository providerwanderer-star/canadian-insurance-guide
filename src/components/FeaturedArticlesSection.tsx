import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const articles = [
  {
    category: "Life Insurance",
    title: "How Much Life Insurance Do You Need in Canada?",
    description: "Use the 10–15x income rule, factor in debts and dependents, and find your ideal coverage.",
    readTime: "7 min read",
    href: "/blog/life-insurance-family-toronto",
  },
  {
    category: "Comparison",
    title: "Term vs. Whole Life: What Canadians Should Choose in 2026",
    description: "A no-nonsense comparison to help you pick the right life insurance policy for your situation.",
    readTime: "8 min read",
    href: "/blog/term-vs-whole-life-2026",
  },
  {
    category: "Health",
    title: "Is OHIP Enough? What Provincial Healthcare Doesn't Cover",
    description: "Prescriptions, dental, vision—discover the gaps in your provincial plan and how to fill them.",
    readTime: "6 min read",
    href: "/blog/what-ohip-doesnt-cover",
  },
];

const FeaturedArticlesSection = () => {
  return (
    <section id="learn" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Education</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-display">
              Learn before you buy
            </h2>
            <p className="text-muted-foreground text-lg max-w-reading">
              Plain-language guides written for Canadians, not insurance agents.
            </p>
          </div>
          <Button variant="ghost" className="text-primary self-start md:self-auto" asChild>
            <Link to="/blog">View all guides <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={article.href}
                className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth border border-transparent hover:border-primary/20"
              >
                <div className="h-40 bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-smooth leading-snug font-display">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.description}</p>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesSection;
