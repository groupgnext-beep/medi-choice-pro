import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import Testimonials from "@/components/Testimonials";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import FeaturedCities from "@/components/FeaturedCities";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustIndicators />
      <Testimonials />
      <ServicesGrid />
      <HowItWorks />
      <FeaturedCities />
      <Footer />
    </div>
  );
};

export default Index;
