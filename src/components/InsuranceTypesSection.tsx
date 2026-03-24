import { motion } from "framer-motion";
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
  },
  {
    icon: Activity,
    title: "Critical Illness",
    description: "Tax-free lump sum if diagnosed with cancer, heart attack, stroke, or other covered conditions.",
    href: "/critical-illness-insurance",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Heart,
    title: "Funeral Insurance",
    description: "Cover final expenses ($8K–$15K) so your family isn't burdened during a difficult time.",
    href: "/life-insurance",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Landmark,
    title: "Retirement Planning",
    description: "Build a tax-efficient retirement strategy with guaranteed income and wealth transfer planning.",
    href: "/life-insurance",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const InsuranceTypesSection = () => {
  return (
    <section id="insurance-types" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Insurance solutions for every Canadian
          </h2>
          <p className="text-muted-foreground text-lg max-w-reading mx-auto">
            Comprehensive coverage options designed for your life stage, budget, and goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {insuranceTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={type.href}
                className="group relative block bg-card rounded-xl p-7 shadow-card hover:shadow-card-hover transition-smooth border border-transparent hover:border-primary/20"
              >
                {type.tag && (
                  <span className="absolute top-5 right-5 text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {type.tag}
                  </span>
                )}
                <div className={`h-12 w-12 rounded-lg ${type.iconBg} flex items-center justify-center mb-5`}>
                  <type.icon className={`h-6 w-6 ${type.iconColor}`} />
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypesSection;
