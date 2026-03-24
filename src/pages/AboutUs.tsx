import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Shield, Users, Award, Heart, CheckCircle } from "lucide-react";

const values = [
  { icon: Shield, title: "Transparency First", description: "We show you all options and explain the trade-offs honestly—even when it means recommending a cheaper product." },
  { icon: Users, title: "Education Over Sales", description: "We believe informed Canadians make better insurance decisions. Our content helps you understand before you buy." },
  { icon: Award, title: "Licensed & Regulated", description: "All our advisors are licensed by provincial regulators (FSRA, AMF) and adhere to strict professional standards." },
  { icon: Heart, title: "Community Focused", description: "From newcomers navigating OHIP waits to families planning their future—we serve real Canadian needs." },
];

const stats = [
  { value: "5,000+", label: "Families Protected" },
  { value: "4.8/5", label: "Client Rating" },
  { value: "$2.1B+", label: "Coverage Placed" },
  { value: "12+", label: "Years Experience" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About InsuredCan — Trusted Insurance Advisors in Canada</title>
        <meta name="description" content="InsuredCan is a team of licensed Canadian insurance advisors committed to education-first, unbiased insurance guidance for families, newcomers, and professionals." />
        <link rel="canonical" href="https://insuredcan.ca/about" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary">
        <div className="container py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6 font-display">
              Making insurance simple for every Canadian
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We started InsuredCan because we believed Canadians deserved better—better education, better advice, and better access to the coverage they need. No jargon, no pressure, just honest guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-16 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary font-display">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>InsuredCan was founded with a simple mission: make insurance accessible, understandable, and fair for all Canadians. We saw too many families overpaying for coverage they didn't need, and too many newcomers left unprotected because they didn't know where to start.</p>
            <p>Our team of licensed advisors works with every major Canadian insurer—Sun Life, Manulife, Canada Life, Desjardins, Industrial Alliance, and more—to find you the best coverage at the best price. We're not tied to any single company, which means our recommendations are truly unbiased.</p>
            <p>Whether you're a young professional buying your first policy, a family planning for the unexpected, or a newcomer navigating the Canadian insurance system for the first time, we're here to help you make informed decisions with confidence.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-display">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-7 shadow-card">
                <value.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2 font-display">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Why choose InsuredCan?</h2>
          <ul className="space-y-4">
            {[
              "Independent advisors—not tied to any single insurance company",
              "Access to 20+ top Canadian insurers for the best rates",
              "Free, no-obligation consultations with licensed professionals",
              "Plain-language education resources and comparison tools",
              "Specialized support for newcomers, families, and self-employed Canadians",
              "Fast, digital-first process—get quotes in minutes, not days",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default AboutUs;
