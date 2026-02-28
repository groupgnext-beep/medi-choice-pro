import { ShieldCheck, IndianRupee, Globe, Headphones } from "lucide-react";

const indicators = [
  {
    icon: ShieldCheck,
    title: "Verified Vendors",
    description: "Every provider is background-verified and quality-checked",
    stat: "500+",
    statLabel: "Verified Partners",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges. Compare real prices side by side",
    stat: "100%",
    statLabel: "Price Transparency",
  },
  {
    icon: Globe,
    title: "Pan-India Coverage",
    description: "Available across 50+ Tier 1 & Tier 2 cities",
    stat: "50+",
    statLabel: "Cities Covered",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries",
    stat: "24/7",
    statLabel: "Always Available",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 lg:py-20 bg-card border-y border-border relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(135deg, hsl(var(--primary)) 0%, transparent 50%)" }} />

      <div className="container-wide relative">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Why Choose AmbLife</p>
          <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-foreground">
            Trusted by Thousands Across India
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {indicators.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center gap-4 p-6 lg:p-8 rounded-2xl border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="space-y-1.5">
                <p className="text-2xl lg:text-3xl font-extrabold text-primary font-display">{item.stat}</p>
                <h3 className="font-display font-bold text-foreground text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
