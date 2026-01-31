import { Lock, Users, Eye, Clock } from "lucide-react";

const triggers = [
  {
    icon: Clock,
    title: "Vagas Limitadas",
    description: "O grupo tem limite de membros para manter a qualidade",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Lock,
    title: "Grupo Fechado",
    description: "Acesso exclusivo apenas para quem realmente quer evoluir",
    color: "text-aviator-gold",
    bgColor: "bg-aviator-gold/10",
  },
  {
    icon: Users,
    title: "Pertencimento",
    description: "Quem entra, não joga mais no escuro",
    color: "text-aviator-green",
    bgColor: "bg-aviator-green/10",
  },
  {
    icon: Eye,
    title: "Conhecimento Oculto",
    description: "O que ninguém explica sobre o Aviator…",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const TriggersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {triggers.map((trigger, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-border/30 bg-card/50 hover:bg-card transition-colors"
            >
              <div
                className={`w-14 h-14 ${trigger.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                <trigger.icon className={`w-7 h-7 ${trigger.color}`} />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">
                {trigger.title}
              </h3>
              <p className="text-muted-foreground text-xs">
                {trigger.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TriggersSection;
