import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BookingLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  icon: string;
}

export default function BookingLayout({ children, title, subtitle, icon }: BookingLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="bg-card border-b border-border py-6">
          <div className="container-wide">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{icon}</span>
              <div>
                <h1 className="font-display text-2xl font-extrabold text-foreground">{title}</h1>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-wide py-8">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
