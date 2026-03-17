import { motion } from "framer-motion";
import { Heart, Shield, Activity, Plane, Home, Umbrella } from "lucide-react";
import { Link } from "react-router-dom";

const insuranceTypes = [
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Term, Whole, and Universal life policies to protect your family's future.",
    tag: "Most Popular",
    href: "/life-insurance",
  },
  {
    icon: Heart,
    title: "Health & Dental",
    description: "Supplement provincial coverage for prescriptions, dental, and vision.",
    href: "/health-insurance",
  },
  {
    icon: Activity,
    title: "Critical Illness",
    description: "Lump-sum payout if diagnosed with a covered condition like cancer or stroke.",
    href: "/critical-illness-insurance",
  },
  {
    icon: Umbrella,
    title: "Disability",
    description: "Replace up to 70% of your income if you can't work due to illness or injury.",
    href: "/disability-insurance",
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Super Visa, visitor, and trip coverage for travel in and out of Canada.",
    href: "/travel-insurance",
  },
  {
    icon: Home,
    title: "Mortgage Protection",
    description: "Protect your home and family from mortgage debt if the unexpected happens.",
    href: "/mortgage-insurance",
  },
  {
    icon: Heart,
    title: "Health & Dental",
    description: "Supplement provincial coverage for prescriptions, dental, and vision.",
  },
  {
    icon: Activity,
    title: "Critical Illness",
    description: "Lump-sum payout if diagnosed with a covered condition like cancer or stroke.",
  },
  {
    icon: Umbrella,
    title: "Disability",
    description: "Replace up to 70% of your income if you can't work due to illness or injury.",
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Super Visa, visitor, and trip coverage for travel in and out of Canada.",
  },
  {
    icon: Home,
    title: "Mortgage Protection",
    description: "Protect your home and family from mortgage debt if the unexpected happens.",
  },
];

const InsuranceTypesSection = () => {
  return (
    <section id="insurance-types" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Insurance solutions for every need
          </h2>
          <p className="text-muted-foreground text-lg max-w-reading mx-auto">
            From life to travel, find the right coverage tailored to Canadian residents.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group relative block bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-smooth cursor-pointer"
              >
                {type.tag && (
                  <span className="absolute top-4 right-4 text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                    {type.tag}
                  </span>
                )}
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypesSection;
