import { m } from "framer-motion";
import { Shield, Heart, Activity, Landmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const insuranceTypes = [
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Term & Whole Life policies to protect your family's financial future and leave a lasting legacy.",
    tag: "Most Popular",
    href: "/life-insurance",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    gradient: "from-primary/5 to-primary/10",
  },
  {
    icon: Activity,
    title: "Critical Illness",
    description: "Tax-free lump sum if diagnosed with cancer, heart attack, stroke, or other covered conditions.",
    href: "/critical-illness-insurance",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    gradient: "from-accent/5 to-accent/10",
  },
  {
    icon: Heart,
    title: "Funeral Insurance",
    description: "Cover final expenses ($8K–$15K) so your family isn't burdened during a difficult time.",
    href: "/life-insurance",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    gradient: "from-primary/5 to-primary/10",
  },
  {
    icon: Landmark,
    title: "Retirement Planning",
    description: "Build a tax-efficient retirement strategy with guaranteed income and wealth transfer planning.",
    href: "/life-insurance",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    gradient: "from-accent/5 to-accent/10",
  },
];

const InsuranceTypesSection = () => {
  return (
    <section id="insurance-types" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center mb-14">
          <m.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block"
          >
            Our Services
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display"
          >
            Insurance solutions for every Canadian
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-reading mx-auto"
          >
            Comprehensive coverage options designed for your life stage, budget, and goals.
          </m.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {insuranceTypes.map((type, i) => (
            <m.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Link
                to={type.href}
                className="group relative block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth border border-transparent hover:border-primary/20"
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${type.gradient}`} />

                <div className="p-7">
                  {type.tag && (
                    <span className="absolute top-7 right-5 text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {type.tag}
                    </span>
                  )}
                  <div className={`h-14 w-14 rounded-xl ${type.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className={`h-7 w-7 ${type.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-smooth font-display">
                    {type.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypesSection;
