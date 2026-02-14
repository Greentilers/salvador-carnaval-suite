import { Wifi, Tv, UtensilsCrossed, Bed, Sofa, Coffee } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Sofa, Bed, Bed, Tv, Wifi, UtensilsCrossed, Coffee, UtensilsCrossed];

const ApartmentSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          {t.apartment.title}
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          {t.apartment.subtitle}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {t.apartment.amenities.map((text, i) => {
            const Icon = icons[i];
            return (
              <div
                key={text}
                className="flex flex-col items-center gap-3 p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="w-8 h-8 text-accent" />
                <span className="text-foreground font-medium text-center text-sm">
                  {text}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-foreground text-lg italic font-display">
            {t.apartment.quote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApartmentSection;
