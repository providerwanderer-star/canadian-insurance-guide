import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(216_72%_24%/0.04),transparent_60%)]" />
      
      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-6 border border-accent/20">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent">5,000+ Canadian families protected</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] mb-6 font-display">
              Protect Your Family's Future{" "}
              <span className="text-accent">Before Life Takes an Unexpected Turn</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-reading">
              Affordable, personalized insurance plans designed to secure your family, income, and legacy. Trusted by thousands of Canadians.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button variant="hero" size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
                Get Free Quote <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="hero-ghost" size="xl">
                <Phone className="h-5 w-5" /> Speak to Advisor
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                Licensed Advisors
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                4.8★ Average Rating
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                Free Consultation
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
