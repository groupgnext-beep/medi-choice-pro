import { ClipboardList, BarChart3, CalendarCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Enter Requirement",
    description: "Tell us what you need — from ambulance to diagnostics. Fill a simple smart form.",
    highlight: "Takes 30 seconds",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Compare Providers",
    description: "See verified providers side by side with transparent pricing and ratings.",
    highlight: "Real-time quotes",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Book Securely",
    description: "Confirm your booking with secure payment. Track in real-time.",
    highlight: "Instant confirmation",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/[0.03] rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container-wide relative">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Three simple steps to better healthcare
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get started in minutes — no registration required for comparing providers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-12 left-[65%] w-[70%] items-center">
                  <div className="flex-1 h-px bg-border" />
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40 -ml-1" />
                </div>
              )}

              {/* Card */}
              <div className="relative z-10 bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                {/* Step number badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                  STEP {s.step}
                </div>

                {/* Icon */}
                <div className="mb-6 mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>

                {/* Highlight tag */}
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {s.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
