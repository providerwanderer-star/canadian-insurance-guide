import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroFamily from "@/assets/hero-family.jpg";

const WHATSAPP_URL = "https://wa.me/16478622190";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(216_72%_24%/0.04),transparent_60%)]" />

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <m.div
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
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="hero-ghost" size="xl">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Us
                </Button>
              </a>
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
          </m.div>

          {/* Hero Image */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl -rotate-2" />
              <img
                src={heroFamily}
                alt="Happy Canadian family laughing together on their couch"
                width={640}
                height={480}
                className="relative rounded-2xl shadow-lift object-cover w-full aspect-[4/3]"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lift p-4 border border-border">
                <p className="text-2xl font-bold text-primary font-display">20+</p>
                <p className="text-xs text-muted-foreground">Partner Insurers</p>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
