import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ContentSection = ({ title, children }: ContentSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
  </motion.section>
);

export const ContentH3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">{children}</h3>
);

export const ContentParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground leading-relaxed">{children}</p>
);

export const ProsList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
        <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

export const ConsList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
        <X className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
}

export const ComparisonTable = ({ headers, rows }: ComparisonTableProps) => (
  <div className="overflow-x-auto rounded-xl shadow-card border border-border mb-8">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-surface">
          {headers.map((h) => (
            <th key={h} className="text-left px-5 py-3.5 font-semibold text-foreground border-b border-border">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className="hover:shadow-card-hover hover:scale-[1.005] transition-smooth group"
          >
            {row.map((cell, j) => (
              <td key={j} className="px-5 py-3.5 text-muted-foreground border-b border-border last:border-b-0 font-mono-data">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection = ({ faqs }: { faqs: FAQItem[] }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
      <div className="space-y-5">
        {faqs.map((faq) => (
          <div key={faq.question} className="bg-surface rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">{faq.question}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export const InfoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6">
    <h4 className="text-sm font-semibold text-primary mb-2">{title}</h4>
    <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
  </div>
);
