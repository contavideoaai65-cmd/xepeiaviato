import { Button } from "@/components/ui/button";
import { Send, Sparkles, ArrowRight } from "lucide-react";
import aviatorPlane from "@/assets/aviator-plane.png";

const TELEGRAM_LINK = "https://t.me/+mGgBORBw7qEwZjBh";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      </div>

      {/* Animated plane */}
      <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
        <img
          src={aviatorPlane}
          alt=""
          className="w-24 h-24 animate-plane-fly"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm">
              Sua chance de evoluir começa agora
            </span>
          </div>

          {/* Main heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-muted-foreground">Você pode continuar tentando</span>
            <br />
            <span className="text-foreground">no impulso…</span>
          </h2>

          <p className="text-xl md:text-2xl text-gradient-fire font-bold mb-4">
            Ou entrar no grupo onde o Aviator é tratado com estratégia.
          </p>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            A escolha é sua. Mas lembre-se:{" "}
            <span className="text-foreground font-medium">
              quem joga sozinho, erra sozinho
            </span>.
          </p>

          {/* Main CTA */}
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="ctaLarge" size="xxl" className="group mb-6">
              <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Entrar no Grupo VIP do Telegram
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>100% gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Comunidade ativa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
