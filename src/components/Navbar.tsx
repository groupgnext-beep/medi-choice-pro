import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, Menu, X, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const services = [
  { name: "Ambulance Booking", href: "/book/ambulance", icon: "🚑" },
  { name: "Physiotherapy at Home", href: "/book/physiotherapy", icon: "💆" },
  { name: "Medical Equipment Rental", href: "/book/equipment", icon: "🏥" },
  { name: "Home Nursing Care", href: "/book/nursing", icon: "👩‍⚕️" },
  { name: "Radiology & Diagnostics", href: "/book/radiology", icon: "🔬" },
];

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
  "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow",
  "Chandigarh", "Indore", "Bhopal", "Nagpur",
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M+</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">MedCompare</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-muted transition-colors">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl border border-border shadow-floating p-2 animate-fade-in">
                  {services.map((s) => (
                    <Link key={s.name} to={s.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <span className="text-lg">{s.icon}</span>
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cities Dropdown */}
            <div className="relative"
              onMouseEnter={() => setCitiesOpen(true)}
              onMouseLeave={() => setCitiesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-muted transition-colors">
                Cities <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {citiesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-card rounded-xl border border-border shadow-floating p-3 animate-fade-in">
                  <div className="grid grid-cols-2 gap-1">
                    {cities.map((c) => (
                      <button key={c}
                        className="text-left px-3 py-2 rounded-lg text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/partner"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-muted transition-colors"
            >
              Partner With Us
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 text-sm">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
            <a href="tel:108">
              <Button size="sm" className="bg-emergency hover:bg-emergency/90 text-emergency-foreground font-semibold gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Emergency</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
