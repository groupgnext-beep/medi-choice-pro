import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceTabs = [
  { id: "ambulance", label: "Ambulance", icon: "🚑", href: "/book/ambulance" },
  { id: "physio", label: "Physiotherapist", icon: "💆", href: "/book/physiotherapy" },
  { id: "nursing", label: "Nursing Care", icon: "👩‍⚕️", href: "/book/nursing" },
  { id: "equipment", label: "Medical Equipment", icon: "🏥", href: "/book/equipment" },
  { id: "radiology", label: "Diagnostic", icon: "🔬", href: "/book/radiology" },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("ambulance");

  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
      />

      <div className="container-wide relative py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground/80 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Trusted by 10,000+ patients across India
          </div>
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            Compare. Choose. Book.
            <br />
            <span className="text-accent">Healthcare Made Simple.</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
            India's first multi-service healthcare marketplace. Compare verified providers, transparent pricing, and book instantly.
          </p>
        </div>

        {/* Floating Booking Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-floating p-1.5">
            {/* Service Tabs */}
            <div className="flex overflow-x-auto border-b border-border scrollbar-hide">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 flex items-center justify-center gap-1.5 py-3 px-3 sm:px-4 text-sm font-medium transition-colors rounded-t-xl whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span className="text-xs sm:text-sm">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Search Form */}
            <div className="p-5">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter your city or location"
                    className="w-full pl-10 pr-4 py-3 bg-muted rounded-xl text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full pl-10 pr-4 py-3 bg-muted rounded-xl text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
                  />
                </div>
                <Link to={serviceTabs.find(t => t.id === activeTab)?.href || "/book/ambulance"}>
                  <Button size="lg" className="w-full md:w-auto px-8 rounded-xl font-semibold gap-2">
                    Search <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
