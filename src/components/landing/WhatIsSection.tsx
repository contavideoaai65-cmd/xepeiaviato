import { MessageCircle, Target, Clock, Wallet, Zap } from "lucide-react";
import aviatorPlane from "@/assets/aviator-plane.png";

const GROUP_NAME = "Xepei Aviator";

const features = [
  {
    icon: MessageCircle,
    title: "Grupo Fechado",
    description: "Comunidade privada no Telegram com membros focados",
  },
  {
    icon: Target,
    title: "Estratégias Práticas",
    description: "Técnicas focadas no Aviator, explicadas de forma simples",
  },
  {
    icon: Clock,
    title: "Horários Estratégicos",
    description: "Identificação de momentos de maior atenção no jogo",
  },
  {
    icon: Wallet,
    title: "Gestão de Banca",
    description: "Aprenda a gerenciar seu saldo como um profissional",
  },
  {
    icon: Zap,
    title: "Conteúdo Direto",
    description: "Sem enrolação — só o que realmente importa",
  },
];

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <img 
              src={aviatorPlane} 
              alt="Aviator" 
              className="w-20 h-20 mx-auto glow-fire float"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que é o <span className="text-gradient-fire">{GROUP_NAME}</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um grupo exclusivo onde compartilhamos conhecimento, estratégias e 
            experiências sobre o Aviator. Tudo com foco em{" "}
            <span className="text-foreground font-medium">disciplina e evolução</span>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-fire group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
