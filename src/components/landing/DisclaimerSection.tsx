import { AlertTriangle, Shield, TrendingDown, User, Target } from "lucide-react";

const disclaimers = [
  {
    icon: User,
    text: "Proibido para menores de 18 anos",
    emoji: "🔞",
  },
  {
    icon: AlertTriangle,
    text: "Jogos envolvem riscos",
    emoji: "⚠️",
  },
  {
    icon: Shield,
    text: "Não há garantia de ganhos",
    emoji: "❗",
  },
  {
    icon: TrendingDown,
    text: "Resultados variam de pessoa para pessoa",
    emoji: "📉",
  },
  {
    icon: Target,
    text: "Gestão e disciplina são fundamentais",
    emoji: "🎯",
  },
];

const DisclaimerSection = () => {
  return (
    <section className="py-12 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-aviator-gold" />
            <h3 className="font-bold text-foreground text-lg">
              Avisos Importantes
            </h3>
          </div>

          {/* Disclaimers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {disclaimers.map((disclaimer, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-background/50 border border-border/30 rounded-lg px-4 py-3"
              >
                <span className="text-lg">{disclaimer.emoji}</span>
                <span className="text-muted-foreground text-xs font-medium">
                  {disclaimer.text}
                </span>
              </div>
            ))}
          </div>

          {/* Legal text */}
          <p className="text-center text-muted-foreground text-xs mt-6 max-w-2xl mx-auto">
            Este grupo é uma comunidade independente de aprendizado e troca de experiências. 
            Não temos parceria oficial com nenhuma plataforma de jogos. 
            Jogue com responsabilidade e apenas com dinheiro que você pode perder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
