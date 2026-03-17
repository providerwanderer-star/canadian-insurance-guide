import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const segments = [
  {
    emoji: "🌍",
    title: "I'm new to Canada",
    description: "Navigate the 3-month OHIP wait, Super Visa requirements, and coverage gaps as a newcomer.",
    focus: ["Super Visa Insurance", "Health Gap Coverage", "Visitor Coverage"],
    color: "bg-primary/5 hover:bg-primary/10",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "I'm starting a family",
    description: "Secure your family's future with life insurance, RESP protection, and critical illness coverage.",
    focus: ["Term Life Insurance", "RESP Protection", "Critical Illness"],
    color: "bg-success/5 hover:bg-success/10",
  },
  {
    emoji: "💼",
    title: "I'm self-employed",
    description: "No employer benefits? Build your own safety net with disability and health coverage.",
    focus: ["Disability Insurance", "Health & Dental", "Income Protection"],
    color: "bg-primary/5 hover:bg-primary/10",
  },
];

const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who are you?
          </h2>
          <p className="text-muted-foreground text-lg max-w-reading mx-auto">
            Your life stage determines your coverage. Find your personalized recommendation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl p-8 transition-smooth cursor-pointer ${seg.color} shadow-card hover:shadow-card-hover`}
            >
              <span className="text-4xl mb-4 block">{seg.emoji}</span>
              <h3 className="text-xl font-semibold text-foreground mb-3">{seg.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{seg.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {seg.focus.map((f) => (
                  <span key={f} className="text-xs font-medium bg-background/80 text-foreground px-3 py-1.5 rounded-full border border-border">
                    {f}
                  </span>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="text-primary p-0 h-auto hover:bg-transparent hover:gap-3">
                See recommendations <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
