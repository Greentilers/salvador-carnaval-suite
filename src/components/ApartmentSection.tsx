import { Wifi, Tv, UtensilsCrossed, Bed, Sofa, Coffee } from "lucide-react";

const amenities = [
  { icon: Sofa, text: "Sala confortável" },
  { icon: Bed, text: "Sofá-cama amplo" },
  { icon: Bed, text: "Quarto aconchegante" },
  { icon: Tv, text: "TV" },
  { icon: Wifi, text: "Wi-Fi" },
  { icon: UtensilsCrossed, text: "Cozinha equipada" },
  { icon: Coffee, text: "Frigobar" },
  { icon: UtensilsCrossed, text: "Mesa para refeições" },
];

const ApartmentSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          O Apartamento
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          Recém reformado, moderno e funcional.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {amenities.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="w-8 h-8 text-accent" />
              <span className="text-foreground font-medium text-center text-sm">{text}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-foreground text-lg italic font-display">
            "Decoração contemporânea. Ambiente pensado para descansar após os dias intensos de Carnaval."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApartmentSection;
