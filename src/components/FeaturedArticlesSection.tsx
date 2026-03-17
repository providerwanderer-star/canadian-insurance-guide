import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    category: "Newcomers",
    title: "Moving to Ontario: How to bridge the 3-month OHIP wait",
    description: "Everything new residents need to know about getting health coverage during the waiting period.",
    readTime: "5 min read",
  },
  {
    category: "Life Insurance",
    title: "Term vs. Whole Life: What Canadians should choose in 2026",
    description: "A no-nonsense comparison to help you pick the right life insurance policy for your situation.",
    readTime: "7 min read",
  },
  {
    category: "Health",
    title: "Is OHIP enough? What provincial healthcare doesn't cover",
    description: "Prescriptions, dental, vision—discover the gaps in your provincial plan and how to fill them.",
    readTime: "6 min read",
  },
];

const FeaturedArticlesSection = () => {
  return (
    <section id="learn" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Learn before you buy
            </h2>
            <p className="text-muted-foreground text-lg max-w-reading">
              Plain-language guides written for Canadians, not insurance agents.
            </p>
          </div>
          <Button variant="ghost" className="text-primary self-start md:self-auto">
            View all guides <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth"
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.description}</p>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesSection;
