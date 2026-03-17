import { Shield } from "lucide-react";

const footerLinks = {
  "Insurance": ["Life Insurance", "Health & Dental", "Critical Illness", "Disability", "Travel", "Mortgage Protection"],
  "Resources": ["Insurance 101", "Compare Plans", "Blog", "Tax & Estate Guide", "Claims Guide"],
  "Company": ["About Us", "Contact", "Careers", "Privacy Policy", "Terms of Service"],
};

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-foreground mb-4">
              <Shield className="h-5 w-5 text-primary" />
              InsuredCan
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Making insurance simple for Canadians. Education-first, always unbiased.
            </p>
            <p className="text-xs text-muted-foreground">
              Licensed in Ontario, BC, Alberta & more.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} InsuredCan.ca — All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground max-w-md text-center md:text-right">
            InsuredCan provides educational content only. Always consult a licensed insurance advisor before making coverage decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
