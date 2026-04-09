import { Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  "Life Insurance": [
    { label: "Life Insurance", href: "/life-insurance" },
    { label: "Term Life", href: "/term-life-insurance" },
    { label: "Whole Life", href: "/whole-life-insurance" },
    { label: "Life Insurance Ontario", href: "/life-insurance-ontario" },
    { label: "Cost of Life Insurance Ontario", href: "/cost-life-insurance-ontario" },
    { label: "Funeral Insurance", href: "/funeral-insurance" },
    { label: "Term vs Whole", href: "/compare/term-vs-whole-life" },
  ],
  "Health & Protection": [
    { label: "Critical Illness", href: "/critical-illness-insurance" },
    { label: "CI Insurance Ontario", href: "/critical-illness-insurance-ontario" },
    { label: "Disability", href: "/disability-insurance" },
    { label: "Health Insurance", href: "/health-insurance" },
    { label: "Travel Insurance", href: "/travel-insurance" },
    { label: "Mortgage Protection", href: "/mortgage-insurance" },
  ],
  "Who We Help": [
    { label: "Newcomers", href: "/newcomers" },
    { label: "PR Holders", href: "/life-insurance-pr-holders" },
    { label: "Families", href: "/families" },
    { label: "Self-Employed", href: "/self-employed" },
    { label: "Young Professionals", href: "/young-professionals" },
    { label: "Coverage Calculator", href: "/coverage-calculator" },
  ],
  "Ontario Locations": [
    { label: "Toronto", href: "/life-insurance-toronto" },
    { label: "Mississauga", href: "/life-insurance-mississauga" },
    { label: "Brampton", href: "/life-insurance-brampton" },
    { label: "Hamilton", href: "/life-insurance-hamilton" },
    { label: "Ottawa", href: "/life-insurance-ottawa" },
    { label: "London, ON", href: "/life-insurance-london-ontario" },
    { label: "Markham", href: "/life-insurance-markham" },
    { label: "Kitchener-Waterloo", href: "/life-insurance-kitchener-waterloo" },
    { label: "Windsor", href: "/life-insurance-windsor" },
    { label: "Oshawa", href: "/life-insurance-oshawa" },
    { label: "Barrie", href: "/life-insurance-barrie" },
    { label: "Niagara Falls", href: "/life-insurance-niagara-falls" },
    { label: "St. Catharines", href: "/life-insurance-st-catharines" },
    { label: "Guelph", href: "/life-insurance-guelph" },
    { label: "Kingston", href: "/life-insurance-kingston" },
    { label: "Thunder Bay", href: "/life-insurance-thunder-bay" },
  ],
  "Other Cities": [
    { label: "Vancouver", href: "/life-insurance-vancouver" },
    { label: "Calgary", href: "/life-insurance-calgary" },
    { label: "Montreal", href: "/life-insurance-montreal" },
    { label: "Edmonton", href: "/life-insurance-edmonton" },
    { label: "Winnipeg", href: "/life-insurance-winnipeg" },
    { label: "Surrey, BC", href: "/life-insurance-surrey" },
  ],
  "Resources": [
    { label: "Blog", href: "/blog" },
    { label: "Insurance Glossary", href: "/insurance-glossary" },
    { label: "Retirement Planning", href: "/retirement-planning" },
    { label: "Private vs OHIP", href: "/compare/private-vs-ohip" },
    { label: "CI vs Disability", href: "/compare/critical-illness-vs-disability" },
    { label: "Broker Canada", href: "/insurance-broker-canada" },
  ],
  "Company": [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground" itemScope itemType="https://schema.org/WPFooter">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-background mb-4">
              <Shield className="h-5 w-5 text-accent" />
              InsuredCan
            </Link>
            <p className="text-sm text-background/60 leading-relaxed mb-4">
              Making insurance simple for Canadians. Education-first, always unbiased.
            </p>
            <div className="flex items-start gap-2 text-xs text-background/50 mb-3">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              <span>100 King Street West, Suite 5700<br />Toronto, ON M5X 1C7</span>
            </div>
            <p className="text-xs text-background/40">
              Licensed by FSRA (Ontario) · Serving ON, BC, AB, QC & more.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-background mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-xs text-background/60 hover:text-background transition-smooth">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} InsuredCan.ca — All rights reserved. FSRA Licensed Insurance Brokerage.
          </p>
          <p className="text-xs text-background/40 max-w-md text-center md:text-right">
            InsuredCan provides educational content only. Always consult a licensed insurance advisor before making coverage decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
