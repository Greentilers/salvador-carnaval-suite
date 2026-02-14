import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getWhatsAppUrl = (message: string) =>
  `https://wa.me/5511970125571?text=${encodeURIComponent(message)}`;

const WhatsAppFloat = () => {
  const { t } = useLanguage();

  return (
    <a
      href={getWhatsAppUrl(t.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label={t.whatsapp.ariaLabel}
      style={{ animationDuration: "2s", animationIterationCount: "3" }}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloat;
