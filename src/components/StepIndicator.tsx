import { ReactNode } from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export default function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;

        return (
          <button
            key={i}
            onClick={() => onStepClick(stepNum)}
            className="flex items-center gap-2 shrink-0"
            disabled={stepNum > currentStep}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
              isCompleted
                ? "bg-accent text-accent-foreground"
                : isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}>
              {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
            </div>
            <span className={`text-sm font-medium hidden md:inline ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`}>
              {label}
            </span>
            {i < steps.length - 1 && (
              <div className={`w-8 h-px mx-1 ${isCompleted ? "bg-accent" : "bg-border"}`} />
            )}
          </button>
        );
      })}
    </div>
  );
}
