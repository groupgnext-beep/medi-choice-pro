import { ReactNode } from "react";
import { ArrowRight, MapPin, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SummaryItem {
  label: string;
  value: string;
}

interface BookingSummaryPanelProps {
  items: SummaryItem[];
  serviceType: string;
  estimatedPrice?: string;
  currentStep: number;
  totalSteps: number;
  onCompare?: () => void;
}

export default function BookingSummaryPanel({
  items,
  serviceType,
  estimatedPrice,
  currentStep,
  totalSteps,
  onCompare,
}: BookingSummaryPanelProps) {
  const filledItems = items.filter((i) => i.value);

  return (
    <div className="card-surface p-6 sticky top-24">
      <h3 className="font-display font-bold text-foreground mb-1">Booking Summary</h3>
      <p className="text-xs text-muted-foreground mb-5">
        Step {currentStep} of {totalSteps} — {serviceType}
      </p>

      {filledItems.length > 0 ? (
        <div className="space-y-3 mb-6">
          {filledItems.map((item, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium text-foreground text-right max-w-[60%] truncate">{item.value}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-sm text-muted-foreground">
          Fill in details to see summary
        </div>
      )}

      {estimatedPrice && (
        <div className="border-t border-border pt-4 mb-5">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Estimated Cost</span>
            <span className="font-display font-bold text-xl text-foreground">{estimatedPrice}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">*Final price may vary based on provider</p>
        </div>
      )}

      <Link to="/compare">
        <Button className="w-full font-semibold gap-2" size="lg">
          Compare Quotes <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>

      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground justify-center">
        <Clock className="w-3 h-3" /> Average response time: 2 mins
      </div>
    </div>
  );
}
