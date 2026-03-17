import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-reading"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span className="text-xs font-medium text-muted-foreground">Trusted by 10,000+ Canadians</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Insurance made simple for your life in{" "}
              <span className="text-primary">Canada.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Unbiased education and tailored coverage for families, newcomers, and professionals. No jargon, just protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="xl">
                Build Your Plan
              </Button>
              <Button variant="hero-ghost" size="xl">
                Browse Guides
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Licensed Advisors
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                100% Unbiased
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Free Consultation
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block"
          >
            <img
              src={heroImage}
              alt="Insurance protection illustration for Canadian families"
              className="w-full h-auto rounded-2xl shadow-card"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
