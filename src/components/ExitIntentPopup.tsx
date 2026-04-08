import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Shield, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exitShown")) {
        setShow(true);
        sessionStorage.setItem("exitShown", "true");
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
        onClick={() => setShow(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative bg-card rounded-2xl p-8 md:p-10 max-w-md w-full shadow-lg border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
          <div className="text-center">
            <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <Shield className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 font-display">Wait! Don't leave unprotected.</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Get a free, personalized insurance quote in under 60 seconds. No obligation, no spam—just the coverage your family needs.
            </p>
            <a href="mailto:sahil280389@gmail.com?subject=Free%20Insurance%20Quote%20Request" className="w-full">
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent mb-3" onClick={() => setShow(false)}>
                Get My Free Quote <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            </Button>
            <button onClick={() => setShow(false)} className="text-xs text-muted-foreground hover:text-foreground">
              No thanks, I'll take my chances
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
