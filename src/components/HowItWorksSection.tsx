import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell us about yourself",
    description: "Answer a few quick questions about your life stage, province, and coverage needs.",
  },
  {
    number: "02",
    title: "Get your personalized plan",
    description: "We match you with the right coverage mix from top Canadian insurers—no bias, no pressure.",
  },
  {
    number: "03",
    title: "Connect with an advisor",
    description: "Speak with a licensed Canadian insurance advisor for free. Apply only when you're ready.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg max-w-reading mx-auto">
            From understanding your needs to getting covered—in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground font-display text-lg font-bold mb-6 relative z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
