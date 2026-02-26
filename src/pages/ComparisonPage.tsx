import { useState } from "react";
import { Star, ArrowUpDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const providers = [
  { id: 1, name: "LifeLine Ambulance Services", rating: 4.8, reviews: 320, price: "₹3,200", highlights: ["ICU Equipped", "24/7 Available", "GPS Tracking"], responseTime: "8 min", verified: true },
  { id: 2, name: "MedRescue India", rating: 4.6, reviews: 210, price: "₹2,800", highlights: ["Basic & ICU", "Pan-City", "Trained Paramedics"], responseTime: "12 min", verified: true },
  { id: 3, name: "QuickAid Transport", rating: 4.4, reviews: 185, price: "₹2,500", highlights: ["Affordable", "ECO Vans", "City Coverage"], responseTime: "15 min", verified: true },
  { id: 4, name: "CarePlus Ambulance", rating: 4.3, reviews: 140, price: "₹3,800", highlights: ["Doctor On-Board", "Ventilator", "Highway Ready"], responseTime: "10 min", verified: true },
  { id: 5, name: "SwiftCare Medical", rating: 4.1, reviews: 95, price: "₹2,200", highlights: ["Budget Option", "Local Routes", "Quick Dispatch"], responseTime: "18 min", verified: false },
];

type SortKey = "price" | "rating";

export default function ComparisonPage() {
  const [sortBy, setSortBy] = useState<SortKey>("rating");

  const sorted = [...providers].sort((a, b) => {
    if (sortBy === "price") return parseInt(a.price.replace(/[₹,]/g, "")) - parseInt(b.price.replace(/[₹,]/g, ""));
    return b.rating - a.rating;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="bg-card border-b border-border py-6">
          <div className="container-wide">
            <h1 className="font-display text-2xl font-extrabold text-foreground">Compare Providers</h1>
            <p className="text-sm text-muted-foreground mt-1">Showing top providers based on your requirements</p>
          </div>
        </div>

        <div className="container-wide py-8">
          {/* Sort Bar */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
              <SlidersHorizontal className="w-4 h-4" /> Sort by:
            </span>
            {(["rating", "price"] as SortKey[]).map((key) => (
              <Button key={key} size="sm" variant={sortBy === key ? "default" : "outline"} onClick={() => setSortBy(key)} className="gap-1.5 capitalize">
                <ArrowUpDown className="w-3 h-3" /> {key}
              </Button>
            ))}
          </div>

          {/* Provider Cards */}
          <div className="space-y-4">
            {sorted.map((p, i) => (
              <div key={p.id} className="card-surface p-6 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-lg text-foreground">{p.name}</h3>
                    {p.verified && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent-light text-accent font-semibold">Verified</span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="text-sm font-semibold text-foreground">{p.rating}</span>
                      <span className="text-xs text-muted-foreground">({p.reviews})</span>
                    </div>
                    <span className="text-xs text-muted-foreground">⏱ Avg. {p.responseTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <span key={h} className="px-2.5 py-1 rounded-md bg-primary-light text-primary text-xs font-medium">{h}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3 shrink-0">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="font-display text-2xl font-extrabold text-foreground">{p.price}</p>
                  </div>
                  <Button className="w-full md:w-auto px-8 font-semibold">Book Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
