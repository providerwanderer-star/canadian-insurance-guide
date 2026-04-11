import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/16478622190";

const StickyCTABar = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary border-t border-primary/80 shadow-lg animate-fade-up">
      <div className="container flex items-center justify-between h-14 gap-4">
        <p className="text-sm font-semibold text-primary-foreground hidden sm:block">
          Protect your family today — Get a free quote in 60 seconds
        </p>
        <div className="flex items-center gap-2 ml-auto">
          <Link to="/contact">
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs">
              Get Free Quote <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="ghost" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 text-xs hidden sm:inline-flex">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </Button>
          </a>
          <button onClick={() => setDismissed(true)} className="text-primary-foreground/50 hover:text-primary-foreground p-1">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTABar;
