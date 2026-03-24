import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogArticleLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
}

const BlogArticleLayout = ({
  title,
  metaTitle,
  metaDescription,
  slug,
  category,
  author,
  date,
  readTime,
  children,
}: BlogArticleLayoutProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDescription,
    author: { "@type": "Person", name: author },
    datePublished: date,
    publisher: {
      "@type": "Organization",
      name: "InsuredCan.ca",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://insuredcan.ca/blog/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />

      <section className="bg-primary">
        <div className="container py-12 md:py-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-smooth mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="block text-xs font-bold text-accent mb-3 uppercase tracking-wider">{category}</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 max-w-3xl font-display"
          >
            {title}
          </motion.h1>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{author}</span>
            <span>{date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{readTime}</span>
          </div>
        </div>
      </section>

      <article className="container py-12 md:py-16">
        <div className="max-w-3xl prose-custom">
          {children}
        </div>
      </article>

      {/* Related articles CTA */}
      <section className="bg-surface border-t border-border py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3 font-display">Keep learning</h2>
          <p className="text-muted-foreground mb-6">Explore more guides written for Canadians.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
            View all articles →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogArticleLayout;
