import { Camera } from "lucide-react";

interface ModelCardProps {
  name: string;
  age: number;
  username: string;
  mediaCount: number;
  onEvaluate: () => void;
  image: string;
}

const ModelCard = ({ name, age, username, mediaCount, onEvaluate, image }: ModelCardProps) => {
  return (
    <div className="animate-fade-in">
      <div className="relative rounded-2xl overflow-hidden shadow-lg bg-muted flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-contain"
        />
        <div className="absolute top-4 right-4">
          <span className="badge-verified">
            <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
            Verificada
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-foreground">
            {name} <span className="font-normal text-muted-foreground">{age}</span>
          </h2>
          <span className="w-3 h-3 bg-secondary rounded-full"></span>
        </div>
        <p className="text-muted-foreground">{username}</p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Camera className="w-4 h-4" />
          <span>{mediaCount} fotos/vídeos</span>
        </div>
      </div>

      <button 
        onClick={onEvaluate}
        className="w-full mt-6 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-2xl shadow-lg"
      >
        Avaliar Conteúdo
      </button>
    </div>
  );
};

export default ModelCard;
