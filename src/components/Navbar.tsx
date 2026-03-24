import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const insuranceLinks = [
  { label: "Life Insurance", href: "/life-insurance" },
  { label: "Term Life Insurance", href: "/compare/term-vs-whole-life" },
  { label: "Whole Life Insurance", href: "/compare/term-vs-whole-life" },
  { label: "Critical Illness", href: "/critical-illness-insurance" },
  { label: "Disability Insurance", href: "/disability-insurance" },
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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <Shield className="h-6 w-6 text-accent" />
          InsuredCan
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {[
            { label: "Insurance", key: "insurance", links: insuranceLinks },
            { label: "Who We Help", key: "segments", links: segmentLinks },
            { label: "Compare", key: "compare", links: compareLinks },
          ].map((dropdown) => (
            <div
              key={dropdown.key}
              className="relative"
              onMouseEnter={() => setActiveDropdown(dropdown.key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth px-3 py-2 rounded-lg hover:bg-secondary">
                {dropdown.label} <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === dropdown.key && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-0 w-60 bg-card rounded-lg shadow-card-hover border border-border py-2 mt-1"
                  >
                    {dropdown.links.map((link) => (
                      <Link key={link.href + link.label} to={link.href} className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth">
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link to="/coverage-calculator" className="text-sm font-medium text-accent hover:text-accent/80 transition-smooth px-3 py-2 rounded-lg hover:bg-secondary">
            Calculator
          </Link>
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth px-3 py-2 rounded-lg hover:bg-secondary">
            Blog
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm">Contact</Button>
          <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
            Get Free Quote
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
                <Link key={link.href + link.label} to={link.href} className="text-sm text-muted-foreground py-2 px-2 rounded hover:bg-secondary" onClick={() => setMobileOpen(false)}>
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
                Blog
              </Link>
              <Button className="mt-3 bg-accent text-accent-foreground hover:bg-accent/90" size="lg" onClick={() => setMobileOpen(false)}>
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
