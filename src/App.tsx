import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AmbulanceBooking from "./pages/AmbulanceBooking";
import PhysiotherapyBooking from "./pages/PhysiotherapyBooking";
import EquipmentBooking from "./pages/EquipmentBooking";
import NursingBooking from "./pages/NursingBooking";
import RadiologyBooking from "./pages/RadiologyBooking";
import ComparisonPage from "./pages/ComparisonPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book/ambulance" element={<AmbulanceBooking />} />
          <Route path="/book/physiotherapy" element={<PhysiotherapyBooking />} />
          <Route path="/book/equipment" element={<EquipmentBooking />} />
          <Route path="/book/nursing" element={<NursingBooking />} />
          <Route path="/book/radiology" element={<RadiologyBooking />} />
          <Route path="/compare" element={<ComparisonPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
