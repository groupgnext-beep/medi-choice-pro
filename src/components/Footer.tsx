import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { name: "Ambulance Booking", href: "/book/ambulance" },
    { name: "Physiotherapy at Home", href: "/book/physiotherapy" },
    { name: "Medical Equipment Rental", href: "/book/equipment" },
    { name: "Home Nursing Care", href: "/book/nursing" },
    { name: "Radiology & Diagnostics", href: "/book/radiology" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Support: [
    { name: "Help Center", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
  Cities: [
    { name: "Mumbai", href: "#" },
    { name: "Delhi NCR", href: "#" },
    { name: "Bangalore", href: "#" },
    { name: "Hyderabad", href: "#" },
    { name: "Chennai", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M+</span>
              </div>
              <span className="font-display font-bold text-lg text-primary-foreground">MedCompare</span>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              India's first multi-service healthcare comparison & booking platform.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-sm text-primary-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © 2026 MedCompare. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/40">
            <span>Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
