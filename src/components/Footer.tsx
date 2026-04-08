import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  "Life Insurance": [
    { label: "Life Insurance", href: "/life-insurance" },
    { label: "Term Life", href: "/term-life-insurance" },
    { label: "Whole Life", href: "/whole-life-insurance" },
    { label: "Funeral Insurance", href: "/funeral-insurance" },
    { label: "Term vs Whole", href: "/compare/term-vs-whole-life" },
  ],
  "Health & Protection": [
    { label: "Critical Illness", href: "/critical-illness-insurance" },
    { label: "Disability", href: "/disability-insurance" },
    { label: "Health Insurance", href: "/health-insurance" },
    { label: "Travel Insurance", href: "/travel-insurance" },
    { label: "Mortgage Protection", href: "/mortgage-insurance" },
  ],
  "Who We Help": [
    { label: "Newcomers", href: "/newcomers" },
    { label: "Families", href: "/families" },
    { label: "Self-Employed", href: "/self-employed" },
    { label: "Young Professionals", href: "/young-professionals" },
    { label: "Coverage Calculator", href: "/coverage-calculator" },
  ],
  "Locations": [
    { label: "Toronto", href: "/life-insurance-toronto" },
    { label: "Vancouver", href: "/life-insurance-vancouver" },
    { label: "Calgary", href: "/life-insurance-calgary" },
    { label: "Montreal", href: "/life-insurance-montreal" },
    { label: "Ottawa", href: "/life-insurance-ottawa" },
    { label: "Edmonton", href: "/life-insurance-edmonton" },
    { label: "Winnipeg", href: "/life-insurance-winnipeg" },
  ],
  "Resources": [
    { label: "Blog", href: "/blog" },
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
            <p className="text-xs text-background/40">
              Licensed in Ontario, BC, Alberta, Quebec & more.
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
            © {new Date().getFullYear()} InsuredCan.ca — All rights reserved.
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
