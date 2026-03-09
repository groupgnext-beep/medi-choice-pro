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

type FormField = { label: string; placeholder: string; icon: React.ElementType };

const serviceForms: Record<string, FormField[]> = {
  ambulance: [
    { label: "Pickup Location", placeholder: "Enter pickup address", icon: MapPin },
    { label: "Drop Location", placeholder: "Enter hospital / destination", icon: MapPin },
    { label: "Ambulance Type", placeholder: "Basic / ICU / Ventilator", icon: Ambulance },
    { label: "When", placeholder: "Now / Schedule later", icon: Clock },
  ],
  physio: [
    { label: "Your Location", placeholder: "Enter your city or area", icon: MapPin },
    { label: "Condition", placeholder: "Back pain, post-surgery, sports...", icon: Activity },
    { label: "Session Type", placeholder: "Home visit / Clinic", icon: HeartPulse },
    { label: "Preferred Date", placeholder: "Select date", icon: Calendar },
  ],
  nursing: [
    { label: "Patient Location", placeholder: "Enter patient address", icon: MapPin },
    { label: "Care Type", placeholder: "Elder care, post-op, ICU at home...", icon: Stethoscope },
    { label: "Duration", placeholder: "12hr / 24hr / Monthly", icon: Clock },
    { label: "Start Date", placeholder: "Select date", icon: Calendar },
  ],
  equipment: [
    { label: "Delivery Location", placeholder: "Enter delivery address", icon: MapPin },
    { label: "Equipment", placeholder: "Wheelchair, oxygen, hospital bed...", icon: Package },
    { label: "Rent / Buy", placeholder: "Rental / Purchase", icon: Wrench },
    { label: "Duration", placeholder: "Days / Weeks / Months", icon: Clock },
  ],
  radiology: [
    { label: "Your Location", placeholder: "Enter your city or area", icon: MapPin },
    { label: "Test Required", placeholder: "X-Ray, MRI, CT Scan, Blood...", icon: ScanLine },
    { label: "Home / Lab", placeholder: "Home collection / Visit lab", icon: Users },
    { label: "Preferred Date", placeholder: "Select date", icon: Calendar },
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
    <section className="gradient-hero relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-wide relative pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
        {/* Service Pill Tabs — scrollable on mobile */}
        <div className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1">
          {serviceTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20 hover:text-primary-foreground"
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Headline */}
        <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-primary-foreground leading-tight mb-8 sm:mb-10 max-w-3xl">
          Compare & book healthcare services.{" "}
          <span className="text-accent">One simple search.</span>
        </h1>

        {/* Dynamic Search Bar */}
        <div className="relative max-w-5xl">
          {/* Desktop: horizontal bar */}
          <div className="hidden md:flex bg-card rounded-2xl overflow-hidden shadow-floating border border-border">
            {fields.map((field, i) => {
              const Icon = field.icon;
              return (
                <div
                  key={`${activeTab}-${i}`}
                  className={`flex-1 relative border-r border-border last:border-r-0`}
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
            <Link
              to={serviceTabs.find((t) => t.id === activeTab)?.href || "/book/ambulance"}
              className="flex-shrink-0"
            >
              <Button
                size="lg"
                className="h-full px-10 rounded-none rounded-r-2xl font-bold text-base gap-2"
              >
                Search <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile: stacked fields */}
          <div className="md:hidden bg-card rounded-2xl overflow-hidden shadow-floating border border-border">
            {fields.map((field, i) => {
              const Icon = field.icon;
              return (
                <div
                  key={`${activeTab}-m-${i}`}
                  className="relative border-b border-border last:border-b-0"
                >
                  <label className="absolute top-2.5 left-4 text-[10px] font-semibold text-primary">{field.label}</label>
                  <div className="flex items-center pt-6 pb-2.5 px-4">
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
            <Link to={serviceTabs.find((t) => t.id === activeTab)?.href || "/book/ambulance"}>
              <Button size="lg" className="w-full rounded-none rounded-b-2xl font-bold text-base gap-2">
                Search <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Service Cards — visible & responsive */}
      <div className="bg-background">
        <div className="container-wide py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.label}
                  to={card.href}
                  className="group flex items-center gap-3 px-4 sm:px-5 py-4 sm:py-5 rounded-2xl bg-foreground hover:bg-foreground/90 transition-colors"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-primary-foreground">
                    {card.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
