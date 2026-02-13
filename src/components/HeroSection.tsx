import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/CAB_8988.webp";

const WHATSAPP_URL = "https://wa.me/5511970125571?text=Ol%C3%A1!%20Tenho%20interesse%20no%20apartamento%20para%20o%20Carnaval%20de%20Salvador%202026.";

const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Apartamento no Largo 2 de Julho - Carnaval de Salvador"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Carnaval de Salvador a poucos metros do Circuito da Avenida
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Apartamento recém-reformado no Largo 2 de Julho. Ideal para 1 único grupo que quer viver o Carnaval com praticidade, segurança e conforto.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          Quero reservar para o Carnaval 2026
        </a>
      </div>
    </section>
);

export default HeroSection;
