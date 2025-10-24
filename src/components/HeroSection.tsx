import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCoast from "@/assets/hero-coast.jpg";
import barreado from "@/assets/barreado.jpg";
import paisagemBarco from "../assets/paisagem_barco.png";
import mapRoutes from "@/assets/map-routes.jpg";
import tie from "../assets/tie.png";

const slides = [
  {
    id: 1,
    image: heroCoast,
    title: "Sua Rota Caiçara Detalhada:",
    routeSteps: [
      "Início no MAE - Paranaguá",
      "Café da manhã com bolo de jussara e suco de araçá",
      "Passeio pela baía de Paranaguá, observação de cetáceos",
      "Almoço Caiçara com Barreado ou Peixe",
      "Trilhas Restinga e Manguezal",
      "Oficina de artesanato"
    ],
    highlight: "Experiência completa de imersão na cultura caiçara",
  },
  {
    id: 2,
    image: paisagemBarco,
    title: "Venha conhcecer o litoral do Paraná, sete municipios com muita sociobiodiversidade para conhecer!",
    routeSteps: [
      "Turismo de base comunitária e sustentável",
      "Roteiros personalizados conforme seus interesses",
      "Apoio a empreendedores locais",
      "Experiências autênticas na Mata Atlântica",
      "Descubra a cultura caiçara",
      "Conexão profunda com a natureza",
    ],
    highlight: "Venha com a Nós para essa viagem",
  },
  {
    id: 3,
    image: tie,
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
    <section className="relative min-h-screen w-full overflow-hidden bg-primary">
      {/* Decorative Block */}
      <div className="absolute left-0 top-20 w-[35%] h-[60%] bg-secondary rounded-r-3xl hidden lg:block" />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col items-center justify-center">
        {/* Main Title */}

        <div className="w-full max-w-6xl mx-auto">
          <div className="relative bg-card/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden transition-all duration-700">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Image Side */}
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent transition-opacity duration-700" />
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight transition-all duration-700 ease-in-out">
                  {slides[currentSlide].title}
                </h2>
                
                {slides[currentSlide].routeSteps ? (
                  <ol className="space-y-3 transition-all duration-700 ease-in-out">
                    {slides[currentSlide].routeSteps.map((step: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </span>
                        <span className="text-muted-foreground text-base md:text-lg leading-relaxed pt-1">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : (null
                )}

                {slides[currentSlide].highlight && (
                  <div className="bg-secondary/20 p-4 rounded-lg border-l-4 border-secondary transition-all duration-700 ease-in-out">
                    <p className="text-primary font-semibold">{slides[currentSlide].highlight}</p>
                  </div>
                )}

                <button 
                  onClick={(e) => e.preventDefault()}
                  className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg cursor-default"
                >
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
