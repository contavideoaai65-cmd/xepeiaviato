import { Star, Quote, CheckCircle, TrendingUp } from "lucide-react";
import resultadoSinais from "@/assets/resultado-sinais.png";
import resultadoCorrecao from "@/assets/resultado-correcao.png";

// Placeholder testimonials - replace with real ones
const testimonials = [
  {
    name: "Carlos M.",
    text: "Entrei sem saber nada e em poucas semanas já estava entendendo os padrões. O grupo mudou minha forma de jogar.",
    rating: 5,
  },
  {
    name: "Ana P.",
    text: "A gestão de banca que aprendi aqui foi o que mais me ajudou. Antes eu perdia tudo no impulso.",
    rating: 5,
  },
  {
    name: "Ricardo S.",
    text: "Conteúdo direto ao ponto. Sem enrolação. Recomendo para quem quer levar o Aviator a sério.",
    rating: 5,
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Resultados <span className="text-gradient-fire">Reais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Estratégia e disciplina fazem toda a diferença.
            <br />
            Veja os resultados do nosso grupo.
          </p>
        </div>

        {/* Results Prints - Real Screenshots */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Sinais Card */}
            <div className="bg-gradient-card border border-border/50 rounded-2xl p-4 overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-fire">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-aviator-green/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-aviator-green" />
                </div>
                <span className="text-foreground font-semibold text-sm">Lista de Sinais</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img 
                  src={resultadoSinais} 
                  alt="Lista de sinais Aviator - Xepei Aviator" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Correção/Resultados Card */}
            <div className="bg-gradient-card border border-border/50 rounded-2xl p-4 overflow-hidden group hover:border-accent/50 transition-all duration-300 hover:shadow-cta">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-aviator-green/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-aviator-green" />
                </div>
                <span className="text-foreground font-semibold text-sm">Relatório de Correção</span>
                <span className="ml-auto bg-aviator-green/20 text-aviator-green text-xs font-bold px-2 py-1 rounded-full">
                  100% ✓
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img 
                  src={resultadoCorrecao} 
                  alt="Relatório de correção Aviator - 100% de acerto" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Stats highlight */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-aviator-green/10 border border-aviator-green/30 rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-aviator-green" />
              <span className="text-foreground font-bold">10 Vitórias</span>
            </div>
            <div className="flex items-center gap-2 bg-aviator-green/10 border border-aviator-green/30 rounded-full px-4 py-2">
              <TrendingUp className="w-5 h-5 text-aviator-green" />
              <span className="text-foreground font-bold">100% de Aproveitamento</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-border/30 rounded-xl p-6 relative group hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-aviator-gold fill-aviator-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
