import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import heroImg from "@/assets/CAB_8988.webp";

const getWhatsAppUrl = (message: string) =>
  `https://wa.me/5511970125571?text=${encodeURIComponent(message)}`;

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt={t.hero.imgAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          {t.hero.title}
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        <a
          href={getWhatsAppUrl(t.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
