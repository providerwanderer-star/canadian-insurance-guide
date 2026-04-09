import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

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
    <h2 className="text-2xl font-bold text-foreground mb-4 font-display">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
  </motion.section>
);

export const ContentH3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3 font-display">{children}</h3>
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
        <X className="h-4 w-4 text-accent mt-0.5 shrink-0" />
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
        <tr className="bg-primary">
          {headers.map((h) => (
            <th key={h} className="text-left px-5 py-3.5 font-semibold text-primary-foreground border-b border-primary/80">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className="hover:bg-secondary/50 transition-smooth"
          >
            {row.map((cell, j) => (
              <td key={j} className="px-5 py-3.5 text-muted-foreground border-b border-border">
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
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <h2 className="text-2xl font-bold text-foreground mb-6 font-display">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`faq-${i}`} className="bg-card rounded-xl shadow-card border border-border px-6 data-[state=open]:border-primary/20">
            <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
};

export const InfoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-primary/5 border border-primary/15 rounded-xl p-6 mb-6">
    <h4 className="text-sm font-bold text-primary mb-2">{title}</h4>
    <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

/** Quick Answer box — targets Google featured snippets and AI answer engines */
export const QuickAnswerBox = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-accent/5 border-l-4 border-accent rounded-r-xl p-6 mb-8" itemScope itemType="https://schema.org/Answer">
    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Quick Answer</p>
    <p className="text-sm font-semibold text-foreground mb-2" itemProp="name">{question}</p>
    <p className="text-sm text-muted-foreground leading-relaxed" itemProp="text">{answer}</p>
  </div>
);

/** Key Takeaways box — structured summary for AI crawlers */
export const KeyTakeaways = ({ items }: { items: string[] }) => (
  <div className="bg-success/5 border border-success/20 rounded-xl p-6 mb-8">
    <p className="text-xs font-bold text-success uppercase tracking-wider mb-3">Key Takeaways</p>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
          <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
