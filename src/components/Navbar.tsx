import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "w-[95%] max-w-6xl" : "w-[90%] max-w-7xl"
      }`}
    >
      <div
        className={`backdrop-blur-md bg-background/80 border border-border rounded-2xl shadow-lg transition-all duration-300 ${
          isScrolled ? "py-3 px-6" : "py-4 px-8"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 group cursor-default">
            <img src={logo} alt="Nós do Atlântico" className="h-10 w-10 transition-transform group-hover:scale-105" />
            <span className="text-primary font-bold text-lg hidden sm:block">Nós do Atlântico</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-foreground hover:text-primary transition-colors font-medium cursor-default">
              Rotas
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-foreground hover:text-primary transition-colors font-medium cursor-default">
              Sobre Nós
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-foreground hover:text-primary transition-colors font-medium cursor-default">
              Parceiros
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hidden md:block bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md cursor-default"
          >
            Seja Parceiro
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border space-y-3 animate-in slide-in-from-top">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2 cursor-default"
            >
              Rotas
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2 cursor-default"
            >
              Sobre Nós
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2 cursor-default"
            >
              Parceiros
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }}
              className="block bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-center cursor-default"
            >
              Seja Parceiro
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
