import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      navigate("/bonus");
    }
  };

  return (
    <div className="mobile-container flex flex-col min-h-screen p-6">
      <div className="flex justify-center pt-8">
        <Logo />
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-8 animate-fade-in">
        <div className="bg-secondary/10 rounded-2xl p-4 text-center">
          <p className="text-secondary font-medium">
            Seu bônus de R$100 já está garantido. Faça login e comece agora.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
