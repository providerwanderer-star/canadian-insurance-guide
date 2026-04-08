import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "1-800-555-INSURE", detail: "Mon–Fri, 9am–6pm ET" },
  { icon: Mail, label: "Email", value: "hello@insuredcan.ca", detail: "We reply within 24 hours" },
  { icon: MapPin, label: "Office", value: "Toronto, Ontario", detail: "Serving all of Canada" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 9am–6pm", detail: "Sat 10am–2pm ET" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", insuranceType: "", message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/sahil280389@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `InsuredCan Contact: ${formData.insuranceType || "General Inquiry"}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          insurance_type: formData.insuranceType || "Not specified",
          message: formData.message,
        }),
      });
      if (res.ok) {
        toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
        setFormData({ name: "", email: "", phone: "", insuranceType: "", message: "" });
      } else {
        toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact InsuredCan — Get Free Insurance Advice in Canada</title>
        <meta name="description" content="Contact InsuredCan for free, no-obligation insurance advice. Speak with a licensed Canadian advisor about life, critical illness, funeral, or retirement coverage." />
        {/* canonical handled globally by SEOHead */}
      </Helmet>
      <Navbar />

      <section className="bg-primary">
        <div className="container py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Contact Us</span>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4 font-display">
              Get your free consultation
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-reading leading-relaxed">
              Have questions? Our licensed advisors are ready to help you find the right coverage—no pressure, no obligation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-foreground font-display mb-6">Get in touch</h2>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-xl p-8 shadow-card border border-border">
                <h2 className="text-xl font-bold text-foreground font-display mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <Input placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <Input type="email" placeholder="you@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <Input type="tel" placeholder="(416) 555-0123" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Insurance Type</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={formData.insuranceType} onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}>
                        <option value="">Select type...</option>
                        <option>Life Insurance</option>
                        <option>Critical Illness</option>
                        <option>Funeral Insurance</option>
                        <option>Retirement Planning</option>
                        <option>Health & Dental</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Tell us about your insurance needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
                    <Send className="h-4 w-4" /> {isSubmitting ? "Sending…" : "Send Message"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">We'll respond within 24 hours. No spam, ever.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
