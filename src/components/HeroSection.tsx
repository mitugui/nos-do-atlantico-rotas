import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCoast from "@/assets/hero-coast.jpg";
import barreado from "@/assets/barreado.jpg";
import trail from "@/assets/trail.jpg";
import mapRoutes from "@/assets/map-routes.jpg";

const slides = [
  {
    id: 1,
    image: heroCoast,
    title: "Descubra sua Rota Caiçara Personalizada",
    description:
      "Deslocamento (saída de Paranaguá) → Café da manhã com bolo de jussara e suco de araçá → Trilha guiada com observação de fauna local → Almoço caiçara com Barreado ou Peixe → Oficina de artesanato → Retorno",
    highlight: "Experiência completa de imersão na cultura caiçara",
  },
  {
    id: 2,
    image: barreado,
    title: "Melhores Lugares com Barreado",
    description: "Descubra os autênticos restaurantes tradicionais que servem o famoso Barreado paranaense.",
    businessName: "Casa do Barreado Tradicional",
    businessOwner: "Maria das Graças",
    businessBio: "Mantendo a tradição caiçara há 30 anos",
    instagram: "@casadobarreado",
  },
  {
    id: 3,
    image: trail,
    title: "Trilhas e Observação de Fauna",
    description:
      "Explore a Mata Atlântica com guias locais especializados. Observação de aves, fauna nativa e conexão profunda com a natureza.",
    highlight: "Mais de 200 espécies de aves catalogadas",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-secondary via-secondary/70 to-primary">
      {/* Decorative Block */}
      <div className="absolute left-0 top-20 w-[35%] h-[60%] bg-primary/30 rounded-r-3xl backdrop-blur-sm hidden lg:block" />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="relative bg-card/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Image Side */}
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight animate-in fade-in slide-in-from-right duration-500">
                  {slides[currentSlide].title}
                </h1>
                
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed animate-in fade-in slide-in-from-right duration-500 delay-100">
                  {slides[currentSlide].description}
                </p>

                {slides[currentSlide].highlight && (
                  <div className="bg-secondary/20 p-4 rounded-lg border-l-4 border-secondary animate-in fade-in slide-in-from-right duration-500 delay-200">
                    <p className="text-primary font-semibold">{slides[currentSlide].highlight}</p>
                  </div>
                )}

                {slides[currentSlide].businessName && (
                  <div className="space-y-3 p-5 bg-muted/50 rounded-xl animate-in fade-in slide-in-from-right duration-500 delay-200">
                    <h3 className="font-bold text-primary text-xl">{slides[currentSlide].businessName}</h3>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">MG</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{slides[currentSlide].businessOwner}</p>
                        <p className="text-sm text-muted-foreground">{slides[currentSlide].businessBio}</p>
                      </div>
                    </div>
                    {slides[currentSlide].instagram && (
                      <a
                        href={`https://instagram.com/${slides[currentSlide].instagram?.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-medium"
                      >
                        <span>📷</span>
                        {slides[currentSlide].instagram}
                      </a>
                    )}
                  </div>
                )}

                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg animate-in fade-in slide-in-from-right duration-500 delay-300">
                  Explorar Rotas
                </button>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors shadow-lg"
              >
                <ChevronLeft className="text-primary" size={24} />
              </button>
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors shadow-lg"
              >
                <ChevronRight className="text-primary" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
