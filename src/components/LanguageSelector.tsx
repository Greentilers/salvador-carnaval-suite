import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/i18n/translations";
import { Globe } from "lucide-react";

const languages: { code: Language; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-background/95 backdrop-blur-sm border border-border rounded-full px-3 py-2 shadow-lg"
      role="group"
      aria-label="Seletor de idioma"
    >
      <Globe className="w-5 h-5 text-muted-foreground shrink-0" />
      <div className="flex gap-1">
        {languages.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              language === code
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
            aria-pressed={language === code}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
