import { MessageCircle, Calendar } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511970125571?text=Ol%C3%A1!%20Tenho%20interesse%20no%20apartamento%20para%20o%20Carnaval%20de%20Salvador%202026.";

const BookingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          Garanta sua Reserva
        </h2>

        <div className="flex items-center justify-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-accent" />
          <span className="text-foreground text-lg font-medium">
            De sexta-feira 13/02/2026 até quarta-feira de cinzas
          </span>
        </div>

        <div className="space-y-3 mb-10 text-muted-foreground text-lg">
          <p>Aluguel por pacote único.</p>
          <p className="font-semibold text-foreground">Disponível para apenas 1 grupo.</p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
        >
          <MessageCircle className="w-7 h-7" />
          Reservar via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default BookingSection;
