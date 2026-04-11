import { Shield, Award, MapPin, Users, CheckCircle } from "lucide-react";

const TrustBar = () => (
  <section className="bg-surface border-b border-border py-5">
    <div className="container flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
      <span className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-primary" /> FSRA Licensed (Ontario)
      </span>
      <span className="flex items-center gap-2">
        <Award className="h-4 w-4 text-accent" /> 4.8★ from 2,300+ reviews
      </span>
      <span className="flex items-center gap-2">
        <Users className="h-4 w-4 text-success" /> 20+ insurer partners
      </span>
      <span className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-primary" /> Serving all of Ontario
      </span>
      <span className="flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-success" /> Free, no-obligation quotes
      </span>
    </div>
  </section>
);

export default TrustBar;
