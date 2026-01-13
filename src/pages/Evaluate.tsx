import { useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "@/components/Logo";
import ModelCard from "@/components/ModelCard";
import EvaluationPanel from "@/components/EvaluationPanel";
import EarningsPopup from "@/components/EarningsPopup";
import djIsaImg from "@/assets/dj isa.png";
import tatyMayaImg from "@/assets/tatymaya.png";
import julianaFelixImg from "@/assets/juliana felix.png";
import hlleycImg from "@/assets/hlleyc.png";
import elianeFelixImg from "@/assets/eliane felix.png";
import suellenHotImg from "@/assets/suellen hot.png";

const models = [
  { name: "Dj Isa", age: 24, username: "@djisa", mediaCount: 284, earnings: 127, image: djIsaImg },
  { name: "Taty Maia", age: 26, username: "@tatymaia", mediaCount: 156, earnings: 98, image: tatyMayaImg },
  { name: "Juliana Felix", age: 23, username: "@julianafelix", mediaCount: 312, earnings: 215, image: julianaFelixImg },
  { name: "Hlleyc", age: 25, username: "@hlleyc", mediaCount: 198, earnings: 156, image: hlleycImg },
  { name: "Eliane Felix", age: 27, username: "@elianefelix", mediaCount: 245, earnings: 279, image: elianeFelixImg },
  { name: "Suellen Hot", age: 24, username: "@suellenhot", mediaCount: 367, earnings: 189, image: suellenHotImg },
];

const Evaluate = () => {
  const navigate = useNavigate();
  const { modelIndex } = useParams();
  const currentIndex = parseInt(modelIndex || "0");
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [balance, setBalance] = useState(100);
  const [showPopup, setShowPopup] = useState(false);
  const [lastEarnings, setLastEarnings] = useState(0);

  const currentModel = models[currentIndex];

  const handleEvaluate = () => {
    setShowEvaluation(true);
  };

  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
    if (currentIndex < models.length - 1) {
      navigate(`/evaluate/${currentIndex + 1}`);
      setShowEvaluation(false);
    } else {
      // Calculate total: initial 100 + all model earnings
      const totalEarnings = models.reduce((sum, m) => sum + m.earnings, 0);
      const finalBalance = 100 + totalEarnings;
      navigate("/complete", { state: { finalBalance } });
    }
  }, [currentIndex, navigate, balance]);

  const handleComplete = (rating: string) => {
    const earnings = currentModel.earnings;
    setBalance((prev) => prev + earnings);
    setLastEarnings(earnings);
    setShowPopup(true);
  };

  if (!currentModel) {
    navigate("/complete");
    return null;
  }

  return (
    <div className="mobile-container flex flex-col min-h-screen p-6">
      <div className="flex items-center justify-between pt-4">
        <Logo />
        <span className="badge-money">R$ {balance.toFixed(2).replace(".", ",")}</span>
      </div>

      <div className="flex-1 py-6">
        {!showEvaluation ? (
          <ModelCard
            name={currentModel.name}
            age={currentModel.age}
            username={currentModel.username}
            mediaCount={currentModel.mediaCount}
            onEvaluate={handleEvaluate}
            image={currentModel.image}
          />
        ) : (
          <EvaluationPanel
            modelName={currentModel.name}
            onComplete={handleComplete}
          />
        )}
      </div>

      <div className="text-center text-sm text-muted-foreground pb-4">
        Modelo {currentIndex + 1} de {models.length}
      </div>

      <EarningsPopup
        amount={lastEarnings}
        isVisible={showPopup}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default Evaluate;
