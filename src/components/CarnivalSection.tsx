const CarnivalSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          Viva o Carnaval raiz de Salvador
        </h2>

        <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          <p>Fique próximo ao Circuito Campo Grande / Avenida.</p>
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Curta o dia inteiro e volte caminhando.
          </p>
          <p>Nada de deslocamentos longos.</p>
          <p>Nada de logística complicada.</p>
          <p className="text-foreground font-medium text-xl mt-6">
            Aqui você aproveita mais e se preocupa menos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarnivalSection;
