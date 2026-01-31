import { Check, TrendingUp, Shield, Users, BookOpen, Target } from "lucide-react";

const benefits = [
  {
    icon: Target,
    text: "Estratégias testadas no Aviator",
  },
  {
    icon: TrendingUp,
    text: "Leitura de padrões e comportamento do jogo",
  },
  {
    icon: Shield,
    text: "Gestão para reduzir riscos",
  },
  {
    icon: BookOpen,
    text: "Conteúdo pensado para iniciantes",
  },
  {
    icon: Users,
    text: "Comunidade focada em evolução",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-card relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/2 w-40 h-40 bg-accent/10 rounded-full blur-[80px]" />
        <div className="absolute -right-20 top-1/3 w-60 h-60 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              O que você vai <span className="text-aviator-green">encontrar</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Benefícios exclusivos para membros do grupo
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gradient-card border border-border/30 rounded-xl p-5 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-aviator-green flex-shrink-0" />
                    <span className="text-foreground font-medium text-lg">
                      {benefit.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Curiosity trigger */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-muted/50 border border-border rounded-lg px-6 py-4">
              <p className="text-muted-foreground italic">
                💡 <span className="text-foreground font-medium">O que ninguém explica sobre o Aviator…</span>
                <br />
                <span className="text-sm">Você vai descobrir dentro do grupo.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
