import { useEffect, useRef } from "react";

const partners = [
  { name: "Casa do Barreado", type: "Gastronomia" },
  { name: "Trilhas Atlânticas", type: "Ecoturismo" },
  { name: "Artesanato Caiçara", type: "Cultura" },
  { name: "Pousada Mar & Mata", type: "Hospedagem" },
  { name: "Barco Tradicional Tours", type: "Passeios" },
  { name: "Café da Jussara", type: "Gastronomia" },
  { name: "Observação de Aves PR", type: "Natureza" },
  { name: "Peixaria do Porto", type: "Gastronomia" },
];

export const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 0.5;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhamos com empreendedores locais comprometidos com a sustentabilidade e valorização da cultura caiçara
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden py-4"
            style={{ scrollBehavior: "auto" }}
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border min-w-[280px] group cursor-pointer"
              >
                <div className="flex items-center justify-center h-16 mb-4 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">{partner.name.slice(0, 2)}</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 text-center">{partner.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
            Ver Todos os Parceiros
          </button>
        </div>
      </div>
    </section>
  );
};
