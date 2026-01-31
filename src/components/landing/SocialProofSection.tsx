import { Star, Quote } from "lucide-react";

const PRINTS_PLACEHOLDER = "{{PRINTS_RESULTADOS}}";
const TESTIMONIALS_PLACEHOLDER = "{{DEPOIMENTOS}}";

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
            Veja o que nossos membros estão dizendo.
          </p>
        </div>

        {/* Results Prints Placeholder */}
        <div className="mb-16">
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center text-muted-foreground">
              <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-aviator-gold" />
              </div>
              <p className="text-sm mb-2">Área para prints de resultados</p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                {PRINTS_PLACEHOLDER}
              </code>
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

        {/* Testimonials Placeholder */}
        <div className="mt-8 text-center">
          <code className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded">
            {TESTIMONIALS_PLACEHOLDER}
          </code>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
