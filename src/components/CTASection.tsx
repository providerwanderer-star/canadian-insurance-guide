import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Ready to find the right coverage?
          </h2>
          <p className="text-background/70 text-lg mb-8 leading-relaxed">
            Get a free, no-obligation consultation with a licensed Canadian insurance advisor. Takes less than 60 seconds to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="xl" className="bg-background text-foreground hover:bg-background/90">
              Check My Rate
            </Button>
            <Button variant="hero-ghost" size="xl" className="border-background/20 text-background hover:bg-background/10">
              Browse Guides
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
