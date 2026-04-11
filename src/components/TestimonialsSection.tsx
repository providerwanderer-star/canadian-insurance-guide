import { m } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya M.",
    location: "Toronto, ON",
    text: "As a newcomer from India, I had no idea where to start with insurance. InsuredCan walked me through everything — I got $1M term coverage for just $32/month. My family is protected now.",
    rating: 5,
    context: "Newcomer, young family",
  },
  {
    name: "James & Sarah T.",
    location: "Mississauga, ON",
    text: "We were paying $145/month for bank mortgage insurance. InsuredCan switched us to a personal term policy — $68/month for MORE coverage. We wish we'd known sooner.",
    rating: 5,
    context: "Homeowners, 2 kids",
  },
  {
    name: "Michael R.",
    location: "Ottawa, ON",
    text: "Self-employed contractor — no benefits, no safety net. Now I have disability + critical illness coverage for under $200/month. The peace of mind is worth every penny.",
    rating: 5,
    context: "Self-employed",
  },
  {
    name: "Linda C.",
    location: "Hamilton, ON",
    text: "After my husband's cancer diagnosis, the $100K critical illness payout saved us. We covered the mortgage, took time off work, and focused on his recovery. Get this insurance.",
    rating: 5,
    context: "Critical illness claimant",
  },
];

const TestimonialsSection = () => (
  <section className="bg-secondary py-16 md:py-20">
    <div className="container">
      <m.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Real Stories from Real Canadians</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Trusted by 2,300+ Ontario Families
        </h2>
      </m.div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <m.div
            key={t.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border relative"
          >
            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
              <span className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full font-medium">{t.context}</span>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
