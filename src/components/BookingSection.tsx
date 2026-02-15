import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getWhatsAppUrl = (message: string) =>
  `https://wa.me/5511970125571?text=${encodeURIComponent(message)}`;

const BookingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          {t.booking.title}
        </h2>

        <div className="space-y-3 mb-10 text-muted-foreground text-lg">
          <p className="font-semibold text-foreground">{t.booking.p1}</p>
          <p>{t.booking.price}</p>
        </div>

        <a
          href={getWhatsAppUrl(t.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
        >
          <MessageCircle className="w-7 h-7" />
          {t.booking.cta}
        </a>
      </div>
    </section>
  );
};

export default BookingSection;
