import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const insuranceLinks = [
  { label: "Life Insurance", href: "/life-insurance" },
  { label: "Health & Dental", href: "/health-insurance" },
  { label: "Critical Illness", href: "/critical-illness-insurance" },
  { label: "Disability", href: "/disability-insurance" },
  { label: "Travel Insurance", href: "/travel-insurance" },
  { label: "Mortgage Protection", href: "/mortgage-insurance" },
];

const compareLinks = [
  { label: "Term vs. Whole Life", href: "/compare/term-vs-whole-life" },
  { label: "Critical Illness vs. Disability", href: "/compare/critical-illness-vs-disability" },
  { label: "Private vs. OHIP", href: "/compare/private-vs-ohip" },
];

const segmentLinks = [
  { label: "Newcomers to Canada", href: "/newcomers" },
  { label: "Growing Families", href: "/families" },
  { label: "Self-Employed", href: "/self-employed" },
  { label: "Young Professionals", href: "/young-professionals" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
          <Shield className="h-6 w-6 text-primary" />
          InsuredCan
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Insurance Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("insurance")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth py-2">
              Insurance <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "insurance" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 w-56 bg-card rounded-lg shadow-card-hover border border-border py-2 mt-1"
                >
                  {insuranceLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth">
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Who We Help Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("segments")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth py-2">
              Who We Help <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "segments" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 w-56 bg-card rounded-lg shadow-card-hover border border-border py-2 mt-1"
                >
                  {segmentLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth">
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Compare Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("compare")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth py-2">
              Compare <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "compare" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 w-56 bg-card rounded-lg shadow-card-hover border border-border py-2 mt-1"
                >
                  {compareLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth">
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Learn
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/blog">Get Free Advice</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 pt-2 pb-1">Insurance</p>
              {insuranceLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground py-2 px-2 rounded hover:bg-secondary" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 pt-4 pb-1">Who We Help</p>
              {segmentLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground py-2 px-2 rounded hover:bg-secondary" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 pt-4 pb-1">Compare</p>
              {compareLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground py-2 px-2 rounded hover:bg-secondary" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link to="/blog" className="text-sm font-medium text-muted-foreground py-2 px-2 mt-2" onClick={() => setMobileOpen(false)}>
                Learn
              </Link>
              <Button variant="default" size="lg" className="mt-3" onClick={() => setMobileOpen(false)}>
                Get Free Advice
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
