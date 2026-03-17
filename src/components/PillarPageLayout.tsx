import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PillarPageLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  heroTag?: string;
  heroDescription: string;
  children: React.ReactNode;
}

const PillarPageLayout = ({
  title,
  metaTitle,
  metaDescription,
  breadcrumb,
  heroTag,
  heroDescription,
  children,
}: PillarPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://insuredcan.ca/${breadcrumb.toLowerCase().replace(/\s+/g, "-")}`} />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface border-b border-border">
        <div className="container py-16 md:py-20">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          {heroTag && (
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4 ml-4">
              <span className="text-xs font-medium text-primary">{heroTag}</span>
            </div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4"
          >
            {title}
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-reading leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="container py-12 md:py-16">
        <div className="max-w-4xl">
          {children}
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  );
};

export default PillarPageLayout;
