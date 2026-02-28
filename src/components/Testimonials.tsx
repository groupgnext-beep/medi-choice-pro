import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    service: "Ambulance Service",
    image: testimonial1,
    rating: 5,
    text: "AmbLife saved precious time during my father's emergency. We compared 3 ambulance providers and got one within 12 minutes. The transparent pricing gave us confidence during a stressful moment.",
  },
  {
    name: "Sunita Devi",
    location: "Mumbai",
    service: "Nursing Care",
    image: testimonial2,
    rating: 5,
    text: "Finding a qualified home nurse for my mother-in-law was so easy. We compared profiles, read reviews, and booked a certified nurse — all in under 10 minutes. Highly recommended!",
  },
  {
    name: "Dr. Ramesh Gupta",
    location: "Bangalore",
    service: "Medical Equipment",
    image: testimonial3,
    rating: 5,
    text: "As a retired doctor, I appreciate how AmbLife brings transparency to healthcare services. Rented an oxygen concentrator at 40% less than market rate. Excellent platform.",
  },
  {
    name: "Priya Nair",
    location: "Chennai",
    service: "Physiotherapy",
    image: testimonial4,
    rating: 5,
    text: "Post-surgery physiotherapy at home was a game-changer. AmbLife helped me compare physiotherapists in my area with verified reviews. My recovery has been smooth and comfortable.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
            Testimonials
          </p>
          <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-foreground">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="card-surface p-6 lg:p-8 flex flex-col gap-5 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-warning text-warning"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/10"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.service} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
