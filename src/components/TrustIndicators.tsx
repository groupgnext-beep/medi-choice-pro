import { ShieldCheck, IndianRupee, Globe, Headphones } from "lucide-react";

const indicators = [
  {
    icon: ShieldCheck,
    title: "Verified Vendors",
    description: "Every provider is background-verified and quality-checked",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges. Compare real prices side by side",
  },
  {
    icon: Globe,
    title: "Pan-India Coverage",
    description: "Available across 50+ Tier 1 & Tier 2 cities",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
