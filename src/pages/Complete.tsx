import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle, DollarSign } from "lucide-react";
import Logo from "@/components/Logo";
import ProgressSteps from "@/components/ProgressSteps";

// Model earnings for calculation
const modelEarnings = [127, 98, 215, 156, 279, 189];
const INITIAL_BONUS = 100;
const TOTAL_EARNINGS = modelEarnings.reduce((sum, e) => sum + e, 0);
const FINAL_BALANCE = INITIAL_BONUS + TOTAL_EARNINGS;

const Complete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Use passed balance or calculate the correct total
  const finalBalance = location.state?.finalBalance || FINAL_BALANCE;

  return (
    <div className="mobile-container flex flex-col min-h-screen p-6">
      <div className="flex items-center justify-between pt-4">
        <Logo />
        <span className="badge-money">R$ {finalBalance.toFixed(2).replace(".", ",")}</span>
      </div>

      <div className="mt-8">
        <ProgressSteps currentStep={2} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-8 animate-scale-in">
        <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-secondary-foreground" />
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Avaliações Concluídas!
          </h2>
          <p className="text-muted-foreground">
            Você completou todas as avaliações e ganhou R$ {TOTAL_EARNINGS.toFixed(2).replace(".", ",")} adicionais!
          </p>
        </div>

        <div className="bonus-card w-full">
          <div className="flex items-center justify-center gap-2">
            <DollarSign className="w-8 h-8 text-secondary" />
            <span className="text-3xl font-bold text-secondary">R$ {finalBalance.toFixed(2).replace(".", ",")}</span>
          </div>
          <p className="text-secondary/80 mt-2">Saldo disponível para saque</p>
        </div>
      </div>

      <div className="pb-8">
        <button
          onClick={() => navigate("/")}
          className="btn-primary w-full"
        >
          Solicitar Pagamento
        </button>
      </div>
    </div>
  );
};

export default Complete;
