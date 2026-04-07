import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  {
    title: "How old are you?",
    field: "age",
    options: ["18–25", "26–35", "36–45", "46–55", "56–65", "65+"],
  },
  {
    title: "What's your family situation?",
    field: "family",
    options: ["Single, no dependents", "Married/Partner, no kids", "Family with young kids", "Family with teens/adult kids", "Empty nester/Retired"],
  },
  {
    title: "What's your approximate annual income?",
    field: "income",
    options: ["Under $40K", "$40K–$60K", "$60K–$80K", "$80K–$120K", "$120K–$200K", "$200K+"],
  },
  {
    title: "What's your primary coverage goal?",
    field: "goal",
    options: ["Protect my family's income", "Cover my mortgage", "Plan for retirement", "Get critical illness coverage", "Cover funeral expenses", "Not sure—help me decide"],
  },
];

const MultiStepLeadForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const isLastStep = currentStep === steps.length;
  const progress = ((currentStep) / (steps.length + 1)) * 100;

  const selectOption = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
    setTimeout(() => setCurrentStep((s) => s + 1), 300);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/sahil280389@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "InsuredCan: New Quote Request",
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          age_range: answers.age || "Not provided",
          family_situation: answers.family || "Not provided",
          annual_income: answers.income || "Not provided",
          coverage_goal: answers.goal || "Not provided",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        toast({ title: "Quote request received!", description: "A licensed advisor will contact you within 24 hours." });
      } else {
        toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border text-center">
        <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3 font-display">Your personalized quote is on its way!</h3>
        <p className="text-muted-foreground mb-2">Based on your profile, we recommend:</p>
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm my-4">
          <Shield className="h-4 w-4" />
          {answers.goal === "Cover funeral expenses" ? "Funeral Insurance — $15K–$25K coverage" : 
           answers.goal === "Plan for retirement" ? "Whole Life + RRSP Strategy" :
           answers.goal === "Get critical illness coverage" ? "Critical Illness — $50K–$100K coverage" :
           "Term Life Insurance — $500K–$1M coverage"}
        </div>
        <p className="text-sm text-muted-foreground mt-4">A licensed advisor will call you within 24 hours to discuss your personalized plan.</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
      {/* Progress bar */}
      <div className="w-full bg-secondary rounded-full h-1.5 mb-8">
        <div className="bg-accent h-1.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <AnimatePresence mode="wait">
        {currentStep < steps.length ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Step {currentStep + 1} of {steps.length + 1}</p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 font-display">{steps[currentStep].title}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {steps[currentStep].options.map((option) => (
                <button
                  key={option}
                  onClick={() => selectOption(steps[currentStep].field, option)}
                  className={`text-left px-5 py-4 rounded-xl border-2 transition-smooth text-sm font-medium ${
                    answers[steps[currentStep].field] === option
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/40 text-foreground hover:bg-secondary"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {currentStep > 0 && (
              <button onClick={() => setCurrentStep((s) => s - 1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mt-6 transition-smooth">
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Final Step</p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 font-display">Get your personalized quote</h3>
            <p className="text-sm text-muted-foreground mb-6">Enter your details and a licensed advisor will contact you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input className="flex h-12 w-full rounded-lg border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Full name *" value={contactInfo.name} onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })} required />
              <input type="email" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Email address *" value={contactInfo.email} onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })} required />
              <input type="tel" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Phone number *" value={contactInfo.phone} onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })} required />
              <Button type="submit" size="xl" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
                {isSubmitting ? "Submitting…" : "Get My Free Quote"} {!isSubmitting && <ArrowRight className="h-5 w-5" />}
              </Button>
              <p className="text-xs text-muted-foreground text-center">No spam. No obligation. 100% free.</p>
            </form>
            <button onClick={() => setCurrentStep((s) => s - 1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mt-4 transition-smooth">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiStepLeadForm;
