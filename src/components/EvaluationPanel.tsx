import { Flame, Square, X } from "lucide-react";
import { useState } from "react";

interface EvaluationPanelProps {
  onComplete: (rating: string) => void;
  modelName: string;
}

const EvaluationPanel = ({ onComplete, modelName }: EvaluationPanelProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { id: "muito", label: "Muito", icon: Flame, iconColor: "text-primary" },
    { id: "medio", label: "Médio", icon: Square, iconColor: "text-muted-foreground" },
    { id: "pouco", label: "Pouco", icon: X, iconColor: "text-destructive" },
  ];

  const handleSelect = (id: string) => {
    setSelected(id);
    setTimeout(() => onComplete(id), 500);
  };

  return (
    <div className="animate-slide-up space-y-6">
      <div className="flex justify-center">
        <span className="evaluation-badge">
          ❤️ Avaliação de Conteúdo
        </span>
      </div>

      <p className="text-center text-lg font-medium text-foreground">
        Esse tipo de conteúdo chama sua atenção?
      </p>

      <div className="space-y-3">
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`btn-option ${selected === option.id ? "btn-option-selected" : ""}`}
            >
              <Icon className={`w-5 h-5 ${option.iconColor}`} />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 pt-4">
        <div className="w-2 h-2 rounded-full bg-accent"></div>
        <div className="w-2 h-2 rounded-full bg-border"></div>
        <div className="w-2 h-2 rounded-full bg-border"></div>
      </div>
    </div>
  );
};

export default EvaluationPanel;
