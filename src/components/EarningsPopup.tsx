import { useEffect, useRef } from "react";
import { DollarSign } from "lucide-react";

interface EarningsPopupProps {
  amount: number;
  isVisible: boolean;
  onClose: () => void;
}

const EarningsPopup = ({ amount, isVisible, onClose }: EarningsPopupProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isVisible) {
      // Play money sound
      audioRef.current = new Audio("https://www.soundjay.com/misc/sounds/coins-1.mp3");
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {
        // Fallback if audio fails
        console.log("Audio playback failed");
      });

      // Auto close after 2 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => {
        clearTimeout(timer);
        if (audioRef.current) {
          audioRef.current.pause();
        }
      };
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
      <div className="bg-gradient-to-br from-secondary to-primary rounded-3xl p-8 mx-6 animate-scale-in shadow-2xl">
        <div className="flex flex-col items-center space-y-4 text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <DollarSign className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold">Você ganhou!</h2>
          <p className="text-4xl font-bold">
            R$ {amount.toFixed(2).replace(".", ",")}
          </p>
          <p className="text-sm opacity-80">Valor adicionado ao seu saldo</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsPopup;
