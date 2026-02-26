import { ClipboardList, BarChart3, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Enter Requirement",
    description: "Tell us what you need — from ambulance to diagnostics. Fill a simple smart form.",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Compare Providers",
    description: "See verified providers side by side with transparent pricing and ratings.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Book Securely",
    description: "Confirm your booking with secure payment. Track in real-time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">How It Works</p>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-foreground">
            Three simple steps to better healthcare
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="relative z-10 mb-5 mx-auto w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <s.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Step {s.step}</span>
              <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
