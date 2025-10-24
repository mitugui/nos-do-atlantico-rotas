import { cn } from "@/lib/utils";
import mataAtlantica from "../assets/mata_atlantica_logo.png";
import coalizao from "../assets/coalizao_logo.png";
import incubadora from "../assets/incubadora_logo.png";
import { Card, CardContent } from "@/components/ui/card";

const idealizers = [
  {
    name: "Coalizão pelo Impacto",
    icon: coalizao,
  },
  {
    name: "Imersão Mata Atlântica",
    icon: mataAtlantica,
  },
  {
    name: "Incubadora de Negócios de Impacto IFPR",
    icon: incubadora,
  },
];

export const IdealizersSection = () => {
  return (
    <section className="py-20 bg-background" id="idealizadores">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Idealizado Através de
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Agradecemos o apoio institucional de grandes parceiros e eventos que contribuíram para a concepção do Nós do Atlântico.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {idealizers.map((item, index) => (
            <Card
              key={index}
              className={cn(
                "w-full sm:w-1/3 max-w-[200px] text-center transition-all duration-300 hover:scale-105 hover:shadow-xl",
              )}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                {/* Imagem agora tem tamanho fixo (w-24 h-24) e border-radius (rounded-xl) */}
                <img 
                    src={item.icon} 
                    alt={item.name} 
                    className="w-24 h-24 object-contain rounded-xl"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};