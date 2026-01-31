import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const TELEGRAM_LINK = "https://t.me/+mGgBORBw7qEwZjBh";
const GROUP_NAME = "Xepei Aviator";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

      {/* Animated particles/glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Scarcity Badge */}
        <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/40 rounded-full px-4 py-2 mb-8 badge-urgent">
          <Sparkles className="w-4 h-4 text-aviator-gold" />
          <span className="text-sm font-semibold text-foreground">
            ⚡ Vagas Limitadas — Grupo Exclusivo
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="block text-foreground">Ninguém conta…</span>
          <span className="block shimmer">mas eu te conto.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gradient-fire font-bold mb-4">
          O Aviator não é sorte quando você sabe a hora certa.
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Entre para o <span className="text-foreground font-semibold">{GROUP_NAME}</span> e 
          descubra como iniciantes estão aprendendo a jogar com{" "}
          <span className="text-aviator-orange font-semibold">estratégia</span>,{" "}
          <span className="text-aviator-orange font-semibold">leitura</span> e{" "}
          <span className="text-aviator-orange font-semibold">disciplina</span>.
        </p>

        {/* CTA Button */}
        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
          <Button variant="ctaLarge" size="xxl" className="group">
            <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            Entrar no Grupo VIP do Telegram
          </Button>
        </a>

        {/* Trust indicator */}
        <p className="mt-6 text-muted-foreground text-sm">
          🔒 Acesso imediato • 100% gratuito para entrar
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
