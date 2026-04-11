import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/16478622190";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">
            Ready to protect what matters most?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Get a free, no-obligation consultation with a licensed Canadian insurance advisor. Takes less than 60 seconds to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent font-bold">
                Get Free Quote <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="xl" variant="hero-ghost" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
