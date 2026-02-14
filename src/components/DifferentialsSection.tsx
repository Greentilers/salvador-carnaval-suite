import { Building2, Shield, MapPin, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Building2, Shield, MapPin, Users];

const DifferentialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground text-center mb-12">
          {t.differentials.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {t.differentials.items.map(({ title, desc }, i) => {
            const Icon = icons[i];
            return (
              <div key={title} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-primary-foreground font-semibold mb-1">
                  {title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">{desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm max-w-lg mx-auto">
          <p className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
            {t.differentials.exclusive}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
