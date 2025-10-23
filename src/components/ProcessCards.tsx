import { MapPin, Settings, Compass } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Acesse Nossa Aba de Rotas",
    description: "Navegue por nossa plataforma intuitiva e descubra as possibilidades de experiências no litoral paranaense.",
  },
  {
    icon: Settings,
    title: "Configure Suas Preferências",
    description: "Escolha o que mais te interessa: gastronomia caiçara, cultura local, trilhas na Mata Atlântica ou tudo junto.",
  },
  {
    icon: Compass,
    title: "Descubra Sua Rota Ideal",
    description: "Receba uma rota personalizada e aproveite o melhor do litoral do Paraná com experiências autênticas.",
  },
];

export const ProcessCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Criar sua rota personalizada é simples e rápido. Veja como você pode começar sua jornada:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6 inline-flex p-4 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                <step.icon className="text-secondary" size={40} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Decorative Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-muted-foreground/30">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
