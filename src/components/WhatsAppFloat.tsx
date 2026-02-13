import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511970125571?text=Ol%C3%A1!%20Tenho%20interesse%20no%20apartamento%20para%20o%20Carnaval%20de%20Salvador%202026.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Contato via WhatsApp"
      style={{ animationDuration: "2s", animationIterationCount: "3" }}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloat;
