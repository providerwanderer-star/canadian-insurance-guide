import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator, Shield, Users, DollarSign, Home, GraduationCap,
  TrendingUp, Download, CheckCircle, ArrowRight, ArrowLeft, FileText
} from "lucide-react";

interface CalcData {
  annualIncome: number;
  spouseIncome: number;
  mortgageBalance: number;
  otherDebts: number;
  numChildren: number;
  youngestChildAge: number;
  existingCoverage: number;
  savings: number;
  coverageGoal: string;
}

const initialData: CalcData = {
  annualIncome: 75000,
  spouseIncome: 0,
  mortgageBalance: 350000,
  otherDebts: 20000,
  numChildren: 2,
  youngestChildAge: 5,
  existingCoverage: 0,
  savings: 25000,
  coverageGoal: "replace-income",
};

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);

const CoverageCalculator = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CalcData>(initialData);
  const [showResults, setShowResults] = useState(false);
  const [showGuideForm, setShowGuideForm] = useState(false);
  const [guideEmail, setGuideEmail] = useState("");
  const [guideSent, setGuideSent] = useState(false);

  const update = (field: keyof CalcData, value: number | string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  // Coverage calculation (DIME method)
  const yearsToReplace = data.coverageGoal === "replace-income" ? 10 : data.coverageGoal === "until-retirement" ? Math.max(65 - 35, 10) : 20;
  const incomeReplacement = data.annualIncome * yearsToReplace;
  const debtCoverage = data.mortgageBalance + data.otherDebts;
  const educationFund = data.numChildren * 80000;
  const emergencyBuffer = data.annualIncome * 0.5;
  const grossNeed = incomeReplacement + debtCoverage + educationFund + emergencyBuffer;
  const netNeed = Math.max(grossNeed - data.existingCoverage - data.savings, 0);
  const recommendedCoverage = Math.ceil(netNeed / 50000) * 50000;

  const steps = [
    {
      title: "Your Income",
      icon: DollarSign,
      content: (
        <div className="space-y-6">
          <div>
            <Label className="text-base font-semibold text-foreground">Your Annual Income (before tax)</Label>
            <div className="mt-3">
              <Input
                type="number"
                value={data.annualIncome}
                onChange={(e) => update("annualIncome", Number(e.target.value))}
                className="text-lg font-semibold"
              />
              <Slider
                value={[data.annualIncome]}
                onValueChange={([v]) => update("annualIncome", v)}
                min={20000} max={500000} step={5000}
                className="mt-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>$20K</span><span>$500K</span>
              </div>
            </div>
          </div>
          <div>
            <Label className="text-base font-semibold text-foreground">Spouse/Partner Income</Label>
            <Input
              type="number"
              value={data.spouseIncome}
              onChange={(e) => update("spouseIncome", Number(e.target.value))}
              className="mt-2"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Your Debts",
      icon: Home,
      content: (
        <div className="space-y-6">
          <div>
            <Label className="text-base font-semibold text-foreground">Mortgage Balance</Label>
            <Input
              type="number"
              value={data.mortgageBalance}
              onChange={(e) => update("mortgageBalance", Number(e.target.value))}
              className="mt-2"
            />
            <Slider
              value={[data.mortgageBalance]}
              onValueChange={([v]) => update("mortgageBalance", v)}
              min={0} max={1500000} step={10000}
              className="mt-4"
            />
          </div>
          <div>
            <Label className="text-base font-semibold text-foreground">Other Debts (car loans, credit cards, etc.)</Label>
            <Input
              type="number"
              value={data.otherDebts}
              onChange={(e) => update("otherDebts", Number(e.target.value))}
              className="mt-2"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Your Family",
      icon: Users,
      content: (
        <div className="space-y-6">
          <div>
            <Label className="text-base font-semibold text-foreground">Number of Dependent Children</Label>
            <div className="flex gap-3 mt-3">
              {[0, 1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => update("numChildren", n)}
                  className={`w-12 h-12 rounded-lg font-bold text-lg transition-all ${
                    data.numChildren === n
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {n === 5 ? "5+" : n}
                </button>
              ))}
            </div>
          </div>
          {data.numChildren > 0 && (
            <div>
              <Label className="text-base font-semibold text-foreground">Age of Youngest Child</Label>
              <Slider
                value={[data.youngestChildAge]}
                onValueChange={([v]) => update("youngestChildAge", v)}
                min={0} max={17} step={1}
                className="mt-4"
              />
              <p className="text-center text-lg font-semibold text-primary mt-2">{data.youngestChildAge} years old</p>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Existing Coverage",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div>
            <Label className="text-base font-semibold text-foreground">Existing Life Insurance Coverage</Label>
            <Input
              type="number"
              value={data.existingCoverage}
              onChange={(e) => update("existingCoverage", Number(e.target.value))}
              className="mt-2"
            />
            <p className="text-sm text-muted-foreground mt-1">Include group benefits from your employer</p>
          </div>
          <div>
            <Label className="text-base font-semibold text-foreground">Total Savings & Investments</Label>
            <Input
              type="number"
              value={data.savings}
              onChange={(e) => update("savings", Number(e.target.value))}
              className="mt-2"
            />
          </div>
          <div>
            <Label className="text-base font-semibold text-foreground">Coverage Goal</Label>
            <RadioGroup
              value={data.coverageGoal}
              onValueChange={(v) => update("coverageGoal", v)}
              className="mt-3 space-y-3"
            >
              {[
                { value: "replace-income", label: "Replace 10 years of income" },
                { value: "until-retirement", label: "Cover until retirement" },
                { value: "maximum", label: "Maximum family protection (20 years)" },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                  <RadioGroupItem value={opt.value} id={opt.value} />
                  <Label htmlFor={opt.value} className="cursor-pointer font-medium">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      ),
    },
  ];

  const handleCalculate = () => setShowResults(true);
  const handleDownloadGuide = () => {
    if (guideEmail) {
      setGuideSent(true);
      // Trigger download
      const link = document.createElement("a");
      link.href = "/family-protection-guide.pdf";
      link.download = "InsuredCan-Family-Protection-Guide.pdf";
      link.click();
    }
  };

  const progress = showResults ? 100 : ((step + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Insurance Coverage Calculator | How Much Life Insurance Do You Need? | InsuredCan</title>
        <meta name="description" content="Calculate exactly how much life insurance coverage your family needs with our free interactive calculator. Get a personalized recommendation in under 2 minutes." />
        <link rel="canonical" href="https://www.insuredcan.ca/coverage-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free Insurance Coverage Calculator | InsuredCan" />
        <meta property="og:description" content="Calculate how much life insurance your family needs using the DIME method. Free, instant results." />
        <meta property="og:image" content="https://www.insuredcan.ca/og/og-calculator.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Calculate Your Life Insurance Coverage Needs (DIME Method)",
          "description": "Use the DIME method to calculate exactly how much life insurance your Canadian family needs in 4 simple steps.",
          "totalTime": "PT2M",
          "tool": { "@type": "HowToTool", "name": "InsuredCan Coverage Calculator" },
          "step": [
            { "@type": "HowToStep", "name": "Enter Your Income", "text": "Input your annual pre-tax income and your spouse/partner's income to establish the income replacement baseline.", "position": 1 },
            { "@type": "HowToStep", "name": "Add Your Debts", "text": "Enter your mortgage balance and other outstanding debts (car loans, credit cards, lines of credit).", "position": 2 },
            { "@type": "HowToStep", "name": "Family Details", "text": "Specify the number of children and age of youngest child to calculate education funding needs.", "position": 3 },
            { "@type": "HowToStep", "name": "Choose Coverage Goal", "text": "Select your desired income replacement period: 10 years, until retirement, or 20 years for maximum protection.", "position": 4 }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(216_72%_30%)_0%,transparent_60%)]" />
        <div className="container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Calculator className="w-4 h-4" /> Free Tool
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground font-display mb-4">
            How Much Life Insurance Do You Really Need?
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Use our DIME method calculator to find your ideal coverage in under 2 minutes.
            Plus, download our free Family Protection Guide.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <Progress value={progress} className="h-2 mb-8" />

          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="border-2 border-border shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {(() => { const Icon = steps[step].icon; return <Icon className="w-5 h-5 text-primary" />; })()}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Step {step + 1} of {steps.length}</p>
                        <CardTitle className="text-xl font-display">{steps[step].title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {steps[step].content}
                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        onClick={() => setStep((s) => s - 1)}
                        disabled={step === 0}
                      >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Back
                      </Button>
                      {step < steps.length - 1 ? (
                        <Button onClick={() => setStep((s) => s + 1)}>
                          Next <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      ) : (
                        <Button variant="hero" onClick={handleCalculate}>
                          <Calculator className="w-4 h-4 mr-1" /> Calculate My Coverage
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Result Card */}
                <Card className="border-2 border-primary shadow-xl overflow-hidden">
                  <div className="bg-primary p-6 text-center">
                    <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-wider">Your Recommended Coverage</p>
                    <p className="text-4xl md:text-5xl font-bold text-primary-foreground font-display mt-2">
                      {formatCurrency(recommendedCoverage)}
                    </p>
                    <p className="text-primary-foreground/60 text-sm mt-2">Based on the DIME Method</p>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-display font-bold text-lg text-foreground">Coverage Breakdown</h3>
                    {[
                      { label: "Income Replacement", value: incomeReplacement, icon: TrendingUp, desc: `${yearsToReplace} years × ${formatCurrency(data.annualIncome)}` },
                      { label: "Debt Coverage", value: debtCoverage, icon: Home, desc: "Mortgage + other debts" },
                      { label: "Education Fund", value: educationFund, icon: GraduationCap, desc: `${data.numChildren} child(ren) × $80,000` },
                      { label: "Emergency Buffer", value: emergencyBuffer, icon: Shield, desc: "6 months of income" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-semibold text-sm text-foreground">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                        <p className="font-bold text-foreground">{formatCurrency(item.value)}</p>
                      </div>
                    ))}
                    <div className="border-t border-border pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Gross Need</span>
                        <span className="font-semibold">{formatCurrency(grossNeed)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Less: Existing Coverage</span>
                        <span className="font-semibold text-success">-{formatCurrency(data.existingCoverage)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Less: Savings</span>
                        <span className="font-semibold text-success">-{formatCurrency(data.savings)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Lead Magnet */}
                <Card className="border-2 border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    {!guideSent ? (
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-20 h-24 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <FileText className="w-10 h-10 text-primary" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="font-display font-bold text-lg text-foreground mb-1">
                            Free: Family Protection Guide
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            A 12-page guide covering how to choose the right policy, common mistakes to avoid,
                            and a checklist for Canadian families. Yours free — no obligation.
                          </p>
                          {!showGuideForm ? (
                            <Button variant="hero" onClick={() => setShowGuideForm(true)}>
                              <Download className="w-4 h-4 mr-2" /> Download Free Guide
                            </Button>
                          ) : (
                            <div className="flex gap-2 max-w-md">
                              <Input
                                type="email"
                                placeholder="Enter your email"
                                value={guideEmail}
                                onChange={(e) => setGuideEmail(e.target.value)}
                              />
                              <Button variant="hero" onClick={handleDownloadGuide}>
                                Send
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4 justify-center py-4">
                        <CheckCircle className="w-8 h-8 text-success" />
                        <div>
                          <p className="font-bold text-foreground">Guide downloading!</p>
                          <p className="text-sm text-muted-foreground">Check your email for additional resources.</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* CTA */}
                <div className="text-center space-y-4">
                  <Button variant="hero" size="xl" asChild>
                    <a href="/contact">Get a Personalized Quote — It's Free</a>
                  </Button>
                  <p className="text-sm text-muted-foreground">No obligation. Speak with a licensed advisor.</p>
                  <Button variant="outline" onClick={() => { setShowResults(false); setStep(0); }}>
                    <Calculator className="w-4 h-4 mr-2" /> Recalculate
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-center text-foreground mb-10">
            How We Calculate Your Coverage (DIME Method)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { letter: "D", word: "Debt", desc: "Your mortgage, car loans, credit cards, and other outstanding debts that would burden your family." },
              { letter: "I", word: "Income", desc: "Years of income your family needs to maintain their lifestyle without your earnings." },
              { letter: "M", word: "Mortgage", desc: "Full remaining mortgage balance so your family keeps their home." },
              { letter: "E", word: "Education", desc: "Estimated $80,000 per child for post-secondary education in Canada." },
            ].map((item) => (
              <Card key={item.letter} className="border border-border">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-primary-foreground font-display">{item.letter}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-display">{item.word}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoverageCalculator;
