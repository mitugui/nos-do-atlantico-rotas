import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProcessCards } from "@/components/ProcessCards";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";
import { IdealizersSection } from "@/components/IdealizersSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProcessCards />
        <PartnersSection />
        <IdealizersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
