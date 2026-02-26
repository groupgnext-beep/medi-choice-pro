import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "🚑",
    title: "Ambulance Booking",
    description: "Local, outstation, ICU & dead body transfer. Compare multiple providers instantly.",
    href: "/book/ambulance",
    features: ["ICU & Basic", "Pan-India", "24/7 Available"],
  },
  {
    icon: "💆",
    title: "Physiotherapy at Home",
    description: "Certified physiotherapists at your doorstep. Single sessions or packages.",
    href: "/book/physiotherapy",
    features: ["Certified Therapists", "Home Visits", "Flexible Packages"],
  },
  {
    icon: "🏥",
    title: "Medical Equipment Rental",
    description: "Wheelchairs, oxygen concentrators, hospital beds & more on rent.",
    href: "/book/equipment",
    features: ["Delivery & Setup", "Flexible Duration", "Deposit-Based"],
  },
  {
    icon: "👩‍⚕️",
    title: "Home Nursing Care",
    description: "Trained nurses for post-surgery care, elder care & critical patients.",
    href: "/book/nursing",
    features: ["8/12/24 Hr Shifts", "Male/Female", "Background Verified"],
  },
  {
    icon: "🔬",
    title: "Radiology & Diagnostics",
    description: "CT scan, MRI, X-ray at partnered labs. Compare prices across centers.",
    href: "/book/radiology",
    features: ["CT / MRI / X-Ray", "Lab Comparison", "Slot Booking"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-card">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-foreground">
            Everything you need, one platform
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.href}
              className="card-surface card-surface-interactive p-6 flex flex-col group"
            >
              <span className="text-3xl mb-4">{s.icon}</span>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{s.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {s.features.map((f) => (
                  <span key={f} className="px-2.5 py-1 rounded-md bg-primary-light text-primary text-xs font-medium">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Book Now <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
