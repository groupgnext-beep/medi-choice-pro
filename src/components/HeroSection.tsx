import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, ArrowRight, Ambulance, Stethoscope, Wrench, HeartPulse, ScanLine, Clock, Users, Calendar, Package, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceTabs = [
  { id: "ambulance", label: "Ambulance", icon: Ambulance, href: "/book/ambulance" },
  { id: "physio", label: "Physiotherapy", icon: HeartPulse, href: "/book/physiotherapy" },
  { id: "nursing", label: "Nursing Care", icon: Stethoscope, href: "/book/nursing" },
  { id: "equipment", label: "Equipment", icon: Wrench, href: "/book/equipment" },
  { id: "radiology", label: "Diagnostics", icon: ScanLine, href: "/book/radiology" },
];

type FormField = { label: string; placeholder: string; icon: React.ElementType; flex?: string };

const serviceForms: Record<string, FormField[]> = {
  ambulance: [
    { label: "Pickup Location", placeholder: "Enter pickup address", icon: MapPin },
    { label: "Drop Location", placeholder: "Enter hospital / destination", icon: MapPin },
    { label: "Ambulance Type", placeholder: "Basic / ICU / Ventilator", icon: Ambulance },
    { label: "When", placeholder: "Now / Schedule later", icon: Clock, flex: "0.7" },
  ],
  physio: [
    { label: "Your Location", placeholder: "Enter your city or area", icon: MapPin },
    { label: "Condition", placeholder: "Back pain, post-surgery, sports...", icon: Activity },
    { label: "Session Type", placeholder: "Home visit / Clinic", icon: HeartPulse },
    { label: "Preferred Date", placeholder: "Select date", icon: Calendar, flex: "0.7" },
  ],
  nursing: [
    { label: "Patient Location", placeholder: "Enter patient address", icon: MapPin },
    { label: "Care Type", placeholder: "Elder care, post-op, ICU at home...", icon: Stethoscope },
    { label: "Duration", placeholder: "12hr / 24hr / Monthly", icon: Clock },
    { label: "Start Date", placeholder: "Select date", icon: Calendar, flex: "0.7" },
  ],
  equipment: [
    { label: "Delivery Location", placeholder: "Enter delivery address", icon: MapPin },
    { label: "Equipment", placeholder: "Wheelchair, oxygen, hospital bed...", icon: Package },
    { label: "Rent / Buy", placeholder: "Rental / Purchase", icon: Wrench },
    { label: "Duration", placeholder: "Days / Weeks / Months", icon: Clock, flex: "0.7" },
  ],
  radiology: [
    { label: "Your Location", placeholder: "Enter your city or area", icon: MapPin },
    { label: "Test Required", placeholder: "X-Ray, MRI, CT Scan, Blood...", icon: ScanLine },
    { label: "Home / Lab", placeholder: "Home collection / Visit lab", icon: Users },
    { label: "Preferred Date", placeholder: "Select date", icon: Calendar, flex: "0.7" },
  ],
};

const serviceCards = [
  { label: "Ambulance", icon: Ambulance, href: "/book/ambulance" },
  { label: "Physiotherapy", icon: HeartPulse, href: "/book/physiotherapy" },
  { label: "Nursing Care", icon: Stethoscope, href: "/book/nursing" },
  { label: "Explore All Services", icon: Search, href: "/compare" },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("ambulance");
  const fields = serviceForms[activeTab];

  return (
    <section className="gradient-hero relative overflow-hidden pb-0">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-wide relative pt-16 lg:pt-24 pb-20 lg:pb-28">
        {/* Service Pill Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {serviceTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20 hover:text-primary-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-primary-foreground leading-tight mb-10 max-w-3xl">
          Compare & book healthcare services.{" "}
          <span className="text-accent">One simple search.</span>
        </h1>

        {/* Dynamic Search Bar */}
        <div className="relative max-w-5xl">
          <div className="flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden shadow-floating border border-border" key={activeTab}>
            {fields.map((field, i) => {
              const Icon = field.icon;
              return (
                <div
                  key={i}
                  className={`relative border-b md:border-b-0 md:border-r border-border last:border-r-0 group ${
                    field.flex ? `md:flex-[${field.flex}]` : "flex-1"
                  }`}
                  style={field.flex ? { flex: field.flex } : undefined}
                >
                  <label className="absolute top-3 left-4 text-xs font-semibold text-primary">{field.label}</label>
                  <div className="flex items-center pt-7 pb-3 px-4">
                    <Icon className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                  </div>
                </div>
              );
            })}

            {/* Search Button */}
            <Link
              to={serviceTabs.find((t) => t.id === activeTab)?.href || "/book/ambulance"}
              className="flex-shrink-0"
            >
              <Button
                size="lg"
                className="h-full w-full md:w-auto px-10 rounded-none md:rounded-r-2xl md:rounded-l-none font-bold text-base gap-2"
              >
                Search <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Service Cards */}
      <div className="container-wide relative pb-0 -mb-10 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.label}
                to={card.href}
                className="group flex items-center gap-3 px-5 py-5 rounded-2xl bg-foreground/90 hover:bg-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold text-primary-foreground">{card.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
