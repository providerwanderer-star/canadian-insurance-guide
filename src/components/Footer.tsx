import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  "Insurance": [
    { label: "Life Insurance", href: "/life-insurance" },
    { label: "Critical Illness", href: "/critical-illness-insurance" },
    { label: "Disability", href: "/disability-insurance" },
    { label: "Travel Insurance", href: "/travel-insurance" },
    { label: "Mortgage Protection", href: "/mortgage-insurance" },
  ],
  "Resources": [
    { label: "Compare Plans", href: "/compare/term-vs-whole-life" },
    { label: "Blog", href: "/blog" },
    { label: "For Newcomers", href: "/newcomers" },
    { label: "For Families", href: "/families" },
  ],
  "Company": [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-background mb-4">
              <Shield className="h-5 w-5 text-accent" />
              InsuredCan
            </Link>
            <p className="text-sm text-background/60 leading-relaxed mb-4">
              Making insurance simple for Canadians. Education-first, always unbiased.
            </p>
            <p className="text-xs text-background/40">
              Licensed in Ontario, BC, Alberta & more.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-background mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-background/60 hover:text-background transition-smooth">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

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
