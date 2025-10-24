import { Instagram, Facebook, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { toast } from "sonner";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Obrigado por se inscrever!", {
        description: "Você receberá nossas novidades em breve.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand & Newsletter */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Nós do Atlântico" className="h-12 w-12" />
              <h3 className="text-2xl font-bold">Nós do Atlântico</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Conectando pessoas e culturas através do turismo sustentável no litoral paranaense.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-xl mb-6">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="hover:text-secondary transition-colors inline-flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-6 h-0.5 bg-secondary transition-all duration-300"></span>
                Sobre Nós
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors inline-flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-6 h-0.5 bg-secondary transition-all duration-300"></span>
                Como Funciona
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors inline-flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-6 h-0.5 bg-secondary transition-all duration-300"></span>
                Roteiros
              </a>
              <a
                href="mailto:contato@nosdoatlantico.com.br"
                className="hover:text-secondary transition-colors inline-flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-6 h-0.5 bg-secondary transition-all duration-300"></span>
                Contato
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors inline-flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-6 h-0.5 bg-secondary transition-all duration-300"></span>
                Seja Parceiro
              </a>
            </nav>
          </div>

          {/* Column 3 - Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-xl mb-6">Redes Sociais</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/nosdoatlantico"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-secondary transition-all group"
              >
                <div className="bg-primary-foreground/10 p-3 rounded-lg group-hover:bg-secondary group-hover:scale-110 transition-all">
                  <Instagram size={24} />
                </div>
                <span className="font-medium">@nosdoatlantico</span>
              </a>
              <a
                href="mailto:nosdoatlantico@gmail.com"
                className="flex items-center gap-3 hover:text-secondary transition-all group"
              >
                <div className="bg-primary-foreground/10 p-3 rounded-lg group-hover:bg-secondary group-hover:scale-110 transition-all">
                  <Mail size={24} />
                </div>
                <span className="font-medium">nosdoatlantico@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Nós do Atlântico. Todos os direitos reservados. | Turismo sustentável e de base comunitária
          </p>
        </div>
      </div>
    </footer>
  );
};