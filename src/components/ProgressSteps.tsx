import { Check, CircleDot, DollarSign } from "lucide-react";

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps = ({ currentStep }: ProgressStepsProps) => {
  const steps = [
    { label: "Login", icon: CircleDot },
    { label: "Avaliações", icon: Check },
    { label: "Pagamento", icon: DollarSign },
  ];

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={step.label} className="flex items-center">
            <div className="progress-step">
              <div
                className={`progress-step-icon ${
                  isCompleted
                    ? "progress-step-completed"
                    : isActive
                    ? "progress-step-active"
                    : "progress-step-inactive"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-medium ${isActive ? "text-secondary" : "text-muted-foreground"}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 h-0.5 mx-2 mb-6 ${isCompleted ? "bg-primary" : "bg-border"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSteps;
