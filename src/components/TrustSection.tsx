import { motion } from "framer-motion";
import { Shield, Award, Users, Star } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Licensed in all provinces", detail: "FSRA & AMF regulated" },
  { icon: Award, label: "A+ rated partners", detail: "Sun Life, Manulife, Canada Life" },
  { icon: Users, label: "5,000+ families protected", detail: "Across Canada" },
  { icon: Star, label: "4.8/5 average rating", detail: "Based on 2,300+ reviews" },
];

const testimonials = [
  {
    quote: "As a newcomer from India, I had no idea how insurance worked in Canada. InsuredCan explained everything in plain language and helped me get covered during my OHIP waiting period.",
    name: "Priya S.",
    role: "New immigrant, Ontario",
  },
  {
    quote: "I was paying too much for mortgage insurance through my bank. InsuredCan showed me a term life policy that saved me $140/month with better coverage.",
    name: "Marc D.",
    role: "Homeowner, Québec",
  },
  {
    quote: "The comparison tools made it easy to understand the difference between critical illness and disability insurance. I ended up getting both at a price I could afford.",
    name: "Sarah K.",
    role: "Freelance designer, BC",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="text-center p-6 rounded-xl bg-card shadow-card"
            >
              <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-bold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            What Canadians are saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl p-7 shadow-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-sm text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
