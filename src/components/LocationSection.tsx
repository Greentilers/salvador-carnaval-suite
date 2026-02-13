import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          Fique no coração do circuito tradicional
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Do Carnaval de Salvador
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              "Rua Areial de Baixo",
              "Largo 2 de Julho",
              "300 metros da Av. Carlos Gomes",
              "Fácil acesso à Av. Sete, Castro Alves e Campo Grande",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span className="text-foreground text-lg">{text}</span>
              </div>
            ))}

            <div className="mt-8 p-6 bg-primary rounded-xl">
              <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                Aqui você faz tudo a pé.
              </p>
              <p className="text-primary-foreground/80 mt-2 font-body">
                Sem depender de Uber. Sem enfrentar trânsito. Sem perder tempo.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d-38.5145!3d-12.9867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b1!2sLargo%202%20de%20Julho%2C%20Salvador%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização - Largo 2 de Julho"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
