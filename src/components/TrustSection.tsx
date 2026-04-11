import { m } from "framer-motion";
import { Shield, Award, Users, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const trustItems = [
  { icon: Shield, label: "Licensed in all provinces", detail: "FSRA & AMF regulated", color: "bg-primary/10 text-primary" },
  { icon: Award, label: "A+ rated partners", detail: "Sun Life, Manulife, Canada Life", color: "bg-accent/10 text-accent" },
  { icon: Users, label: "5,000+ families protected", detail: "Across Canada", color: "bg-primary/10 text-primary" },
  { icon: Star, label: "4.8/5 average rating", detail: "Based on 2,300+ reviews", color: "bg-accent/10 text-accent" },
];

const testimonials = [
  {
    quote: "As a newcomer from India, I had no idea how insurance worked in Canada. InsuredCan explained everything in plain language and helped me get covered during my OHIP waiting period.",
    name: "Priya S.",
    role: "New immigrant, Ontario",
    initials: "PS",
  },
  {
    quote: "I was paying too much for mortgage insurance through my bank. InsuredCan showed me a term life policy that saved me $140/month with better coverage.",
    name: "Marc D.",
    role: "Homeowner, Québec",
    initials: "MD",
  },
  {
    quote: "The comparison tools made it easy to understand the difference between critical illness and disability insurance. I ended up getting both at a price I could afford.",
    name: "Sarah K.",
    role: "Freelance designer, BC",
    initials: "SK",
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const startTime = Date.now();
          const step = () => {
            const progress = Math.min((Date.now() - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Trust badges with animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {trustItems.map((item, i) => (
            <m.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="text-center p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-smooth cursor-default"
            >
              <div className={`h-14 w-14 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="h-7 w-7" />
              </div>
              <p className="text-sm font-bold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
            </m.div>
          ))}
        </div>

        {/* Stats banner */}
        <m.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 bg-primary rounded-2xl p-8 md:p-10"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              <AnimatedCounter target={5000} suffix="+" />
            </p>
            <p className="text-sm text-primary-foreground/70 mt-1">Families Protected</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              <AnimatedCounter target={20} suffix="+" />
            </p>
            <p className="text-sm text-primary-foreground/70 mt-1">Partner Insurers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              <AnimatedCounter target={2300} suffix="+" />
            </p>
            <p className="text-sm text-primary-foreground/70 mt-1">Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent font-display">4.8★</p>
            <p className="text-sm text-primary-foreground/70 mt-1">Average Rating</p>
          </div>
        </m.div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <m.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block"
          >
            Testimonials
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display"
          >
            What Canadians are saying
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <m.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl p-7 shadow-card hover:shadow-card-hover transition-smooth border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-sm text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
