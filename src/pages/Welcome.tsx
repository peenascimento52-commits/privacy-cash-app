import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import Logo from "@/components/Logo";
import heroModels from "@/assets/pag1.jpg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container flex flex-col min-h-screen p-6">
      <div className="flex justify-center pt-8">
        <Logo />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="relative">
          <div className="bg-gradient-to-br from-primary/10 to-muted rounded-3xl p-4">
            <img
              src={heroModels}
              alt="Modelos"
              className="w-72 h-56 object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold italic text-primary leading-tight">
            Ganhe mais de<br />
            R$1000,00 por dia<br />
            <span className="text-foreground not-italic">avaliando conteúdos<br />privados</span>
          </h1>

          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 fill-primary text-primary"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pb-8">
        <button
          onClick={() => navigate("/login")}
          className="btn-primary w-full"
        >
          Começar
        </button>
      </div>
    </div>
  );
};

export default Welcome;
