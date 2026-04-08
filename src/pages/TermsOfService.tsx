import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Terms of Service | InsuredCan</title>
      <meta name="description" content="InsuredCan's terms of service. By using our website you agree to these terms." />
      <link rel="canonical" href="https://www.insuredcan.ca/terms-of-service" />
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <Navbar />
    <main className="container py-16 max-w-3xl mx-auto prose prose-slate">
      <h1 className="text-3xl font-bold text-foreground mb-2 font-display">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: April 8, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">1. Educational Content Only</h2>
        <p className="text-muted-foreground leading-relaxed">
          InsuredCan.ca provides general educational content about Canadian insurance products. Nothing on this website constitutes professional financial, legal, or insurance advice. Always consult a licensed insurance advisor before making coverage decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">2. No Guarantee of Quotes</h2>
        <p className="text-muted-foreground leading-relaxed">
          Quotes and pricing estimates shown on InsuredCan.ca are illustrative only. Actual premiums depend on individual underwriting factors and are provided by licensed insurance carriers. InsuredCan is not liable for any discrepancy between estimated and actual premiums.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">3. Licensed Advisors</h2>
        <p className="text-muted-foreground leading-relaxed">
          InsuredCan works with licensed insurance advisors regulated under applicable provincial regulatory bodies (FSRA in Ontario, BCFSA in BC, AIC in Alberta). Advisor licensing information is available upon request.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
        <p className="text-muted-foreground leading-relaxed">
          All content on InsuredCan.ca — including text, graphics, and tools — is the property of InsuredCan and may not be reproduced without written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
        <p className="text-muted-foreground leading-relaxed">
          InsuredCan.ca is provided "as is." We are not liable for any damages arising from use of this website or reliance on its content. Our total liability shall not exceed $100 CAD.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">6. Governing Law</h2>
        <p className="text-muted-foreground leading-relaxed">
          These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
        <p className="text-muted-foreground leading-relaxed">
          Questions? Email us at <a href="mailto:hello@insuredcan.ca" className="text-primary hover:underline">hello@insuredcan.ca</a>
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;
