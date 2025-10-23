import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProcessCards } from "@/components/ProcessCards";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProcessCards />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
