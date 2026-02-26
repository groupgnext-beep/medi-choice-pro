import { MapPin } from "lucide-react";

const cities = [
  { name: "Mumbai", providers: 120 },
  { name: "Delhi NCR", providers: 150 },
  { name: "Bangalore", providers: 95 },
  { name: "Hyderabad", providers: 80 },
  { name: "Chennai", providers: 75 },
  { name: "Pune", providers: 65 },
  { name: "Kolkata", providers: 55 },
  { name: "Ahmedabad", providers: 45 },
  { name: "Jaipur", providers: 40 },
  { name: "Lucknow", providers: 35 },
];

export default function FeaturedCities() {
  return (
    <section className="py-20">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Coverage</p>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-foreground">
            Available across major Indian cities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <button
              key={city.name}
              className="card-surface p-4 text-center group cursor-pointer hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-200">
                <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
              </div>
              <h3 className="font-semibold text-sm text-foreground">{city.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{city.providers}+ providers</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
