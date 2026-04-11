import { m } from "framer-motion";
import stepTellUs from "@/assets/step-tell-us.jpg";
import stepPlan from "@/assets/step-plan.jpg";
import stepAdvisor from "@/assets/step-advisor.jpg";

const steps = [
  {
    number: "01",
    title: "Tell us about yourself",
    description: "Answer a few quick questions about your age, family status, income, and coverage goals.",
    image: stepTellUs,
    imageAlt: "Advisor on a video call with a family",
  },
  {
    number: "02",
    title: "Get your personalized plan",
    description: "We match you with the right coverage mix from top Canadian insurers—no bias, no pressure.",
    image: stepPlan,
    imageAlt: "Tablet showing personalized insurance recommendations",
  },
  {
    number: "03",
    title: "Connect with an advisor",
    description: "Speak with a licensed Canadian insurance advisor for free. Apply only when you're ready.",
    image: stepAdvisor,
    imageAlt: "Advisor shaking hands with a happy client",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center mb-16">
          <m.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block"
          >
            Simple Process
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display"
          >
            How it works
          </motion.h2>
          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-reading mx-auto"
          >
            From understanding your needs to getting covered—in three simple steps.
          </m.p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <m.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              {/* Image side */}
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative group">
                  <div className={`absolute -inset-3 bg-primary/5 rounded-2xl ${i % 2 === 0 ? "rotate-2" : "-rotate-2"} group-hover:rotate-0 transition-transform duration-500`} />
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="relative rounded-xl shadow-lift w-full aspect-square object-cover"
                  />
                  <div className="absolute top-4 left-4 h-12 w-12 rounded-full bg-primary text-primary-foreground font-display text-lg font-bold flex items-center justify-center shadow-lift">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
