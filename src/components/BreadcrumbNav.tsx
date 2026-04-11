import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNav = ({ items }: BreadcrumbNavProps) => {
  const BASE_URL = "https://www.insuredcan.ca";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-primary-foreground/60 mb-6 flex-wrap">
        <Link to="/" className="hover:text-primary-foreground transition-smooth flex items-center gap-1">
          <Home className="h-3 w-3" />
          Home
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" />
            {item.href && i < items.length - 1 ? (
              <Link to={item.href} className="hover:text-primary-foreground transition-smooth">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary-foreground/80 font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
};

export default BreadcrumbNav;
