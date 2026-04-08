import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import newcomerFamily from "@/assets/newcomer-family.jpg";
import familyProtection from "@/assets/family-protection.jpg";
import selfEmployed from "@/assets/self-employed.jpg";

const segments = [
  {
    image: newcomerFamily,
    imageAlt: "Newcomer family arriving in Canada with autumn leaves",
    title: "I'm new to Canada",
    description: "Navigate the OHIP waiting period, Super Visa requirements, and coverage gaps as a newcomer.",
    focus: ["Visitor Coverage", "Health Gap Coverage", "Super Visa"],
    href: "/newcomers",
  },
  {
    image: familyProtection,
    imageAlt: "Young family playing happily in a sunny park",
    title: "I'm protecting my family",
    description: "Secure your family's future with life insurance, education savings protection, and critical illness coverage.",
    focus: ["Term Life", "Critical Illness", "Education Plans"],
    href: "/families",
  },
  {
    image: selfEmployed,
    imageAlt: "Self-employed woman working from her bright home office",
    title: "I'm self-employed",
    description: "No employer benefits? Build your own safety net with disability, health, and income protection.",
    focus: ["Disability", "Health & Dental", "Income Protection"],
    href: "/self-employed",
  },
];

const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Who We Help</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Find your personalized coverage
          </h2>
          <p className="text-muted-foreground text-lg max-w-reading mx-auto">
            Your life stage determines your coverage needs. Get recommendations tailored to you.
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
            >
              <Link to={seg.href} className="group block rounded-xl overflow-hidden transition-smooth bg-card shadow-card hover:shadow-card-hover border border-transparent hover:border-primary/20">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={seg.image}
                    alt={seg.imageAlt}
                    loading="lazy"
                    width={640}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-foreground mb-3 font-display group-hover:text-primary transition-smooth">{seg.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{seg.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {seg.focus.map((f) => (
                      <span key={f} className="text-xs font-medium bg-secondary text-foreground px-3 py-1.5 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    See recommendations <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
