import { useLanguage } from "@/context/LanguageContext";

const CarnivalSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          {t.carnival.title}
        </h2>

        <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          <p>{t.carnival.p1}</p>
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {t.carnival.p2}
          </p>
          <p>{t.carnival.p3}</p>
          <p>{t.carnival.p4}</p>
          <p className="text-foreground font-medium text-xl mt-6">
            {t.carnival.p5}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarnivalSection;
