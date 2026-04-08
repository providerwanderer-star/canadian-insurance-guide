import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Privacy Policy | InsuredCan</title>
      <meta name="description" content="InsuredCan's privacy policy. Learn how we collect, use, and protect your personal information." />
      <link rel="canonical" href="https://www.insuredcan.ca/privacy-policy" />
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <Navbar />
    <main className="container py-16 max-w-3xl mx-auto prose prose-slate">
      <h1 className="text-3xl font-bold text-foreground mb-2 font-display">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: April 8, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
        <p className="text-muted-foreground leading-relaxed">
          We collect information you voluntarily provide when requesting a quote or contacting us — including your name, email address, phone number, and insurance needs. We also collect standard analytics data (pages visited, browser type) through anonymised tracking tools.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
        <p className="text-muted-foreground leading-relaxed">
          Your information is used solely to: (a) respond to your insurance inquiries; (b) connect you with licensed Canadian insurance advisors; (c) send relevant educational content if you opt in; and (d) improve our website experience. We do not sell your data to third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Sharing</h2>
        <p className="text-muted-foreground leading-relaxed">
          We may share your information with licensed insurance carriers and advisors for the purpose of providing you with quotes. All partners are bound by their own privacy policies and applicable Canadian privacy law (PIPEDA).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">4. Cookies</h2>
        <p className="text-muted-foreground leading-relaxed">
          InsuredCan.ca uses cookies to improve your browsing experience. You can disable cookies in your browser settings. Some features may not function correctly without cookies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
        <p className="text-muted-foreground leading-relaxed">
          You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at <a href="mailto:sahil280389@gmail.com" className="text-primary hover:underline">sahil280389@gmail.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
        <p className="text-muted-foreground leading-relaxed">
          InsuredCan.ca — Toronto, Ontario, Canada<br />
          Email: <a href="mailto:hello@insuredcan.ca" className="text-primary hover:underline">hello@insuredcan.ca</a>
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
