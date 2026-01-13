import { useNavigate } from "react-router-dom";
import { PartyPopper } from "lucide-react";
import Logo from "@/components/Logo";
import ProgressSteps from "@/components/ProgressSteps";

const Bonus = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container flex flex-col min-h-screen p-6">
      <div className="flex items-center justify-between pt-4">
        <Logo />
        <span className="badge-money">R$ 100,00</span>
      </div>

      <div className="mt-8">
        <ProgressSteps currentStep={1} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center animate-scale-in">
        <div className="bonus-card w-full max-w-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <PartyPopper className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-bold text-secondary">
              Você ganhou R$100,00 para começar!
            </h2>
          </div>
          <p className="text-secondary/80">
            Comece a avaliar e ganhe ainda mais!
          </p>
        </div>
      </div>

      <div className="pb-8">
        <button
          onClick={() => navigate("/evaluate/0")}
          className="btn-primary w-full"
        >
          Começar Avaliações
        </button>
      </div>
    </div>
  );
};

export default Bonus;
