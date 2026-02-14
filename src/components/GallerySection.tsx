import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import sala1 from "@/assets/CAB_8960.webp";
import sala2 from "@/assets/CAB_9008.webp";
import sala3 from "@/assets/CAB_8983.webp";
import cozinha1 from "@/assets/CAB_9001.webp";
import cozinha2 from "@/assets/CAB_9002.webp";
import entrada1 from "@/assets/CAB_9005.webp";
import entrada2 from "@/assets/CAB_8994.webp";
import entrada3 from "@/assets/CAB_8992.webp";
import banheiro1 from "@/assets/CAB_7841.webp";
import banheiro2 from "@/assets/CAB_7842.webp";
import quarto1 from "@/assets/CAB_8950.webp";
import quarto2 from "@/assets/CAB_7827.webp";
import quarto3 from "@/assets/CAB_7806.webp";
import vista1 from "@/assets/CAB_7876.webp";
import vista2 from "@/assets/CAB_7884.webp";
import vista3 from "@/assets/CAB_7875.webp";

const categoryKeys = ["entrada", "sala", "cozinha", "quarto", "banheiro", "vista"] as const;

const categories = [
  { key: "entrada" as const, images: [entrada1, entrada2, entrada3] },
  { key: "sala" as const, images: [sala1, sala2, sala3] },
  { key: "cozinha" as const, images: [cozinha1, cozinha2] },
  { key: "quarto" as const, images: [quarto1, quarto2, quarto3] },
  { key: "banheiro" as const, images: [banheiro1, banheiro2] },
  { key: "vista" as const, images: [vista1, vista2, vista3] },
];

const allImages = categories.flatMap((c) => c.images);

const captionKeys: (keyof typeof import("@/i18n/translations").translations.pt.gallery.captions)[] = [
  "entrada1", "entrada2", "entrada3",
  "sala1", "sala2", "sala3",
  "cozinha1", "cozinha2",
  "quarto1", "quarto2", "quarto3",
  "banheiro1", "banheiro2",
  "vista1", "vista2", "vista3",
];

const GallerySection = () => {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategoryKey, setActiveCategoryKey] = useState<string | null>(null);

  const getCategoryLabel = (key: string | null) => {
    if (!key) return t.gallery.all;
    const cat = categories.find((c) => c.key === key);
    return cat ? t.gallery.categories[cat.key] : t.gallery.all;
  };

  const filteredImages =
    activeCategoryKey === null
      ? allImages
      : categories.find((c) => c.key === activeCategoryKey)?.images ?? [];

  const categoryButtons = [null, ...categoryKeys];

  const openLightbox = (img: string) => {
    setLightboxIndex(allImages.indexOf(img));
  };

  const getCaption = (index: number) => {
    const key = captionKeys[index];
    return key ? t.gallery.captions[key] ?? "" : "";
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) => (prev! - 1 + allImages.length) % allImages.length);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => (prev! + 1) % allImages.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
          {t.gallery.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categoryButtons.map((key) => {
            const label = getCategoryLabel(key);
            const isActive = activeCategoryKey === key;
            return (
              <button
                key={key ?? "all"}
                onClick={() => setActiveCategoryKey(key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(img)}
              className="aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={img}
                alt={`${t.gallery.imgAlt} ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length)}
            className="absolute left-4 text-white/70 hover:text-white"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={allImages[lightboxIndex]}
            alt={t.gallery.enlargedAlt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
          <p className="mt-4 text-white/90 text-center text-sm md:text-base max-w-[90vw] px-4">
            {getCaption(lightboxIndex)}
          </p>
          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % allImages.length)}
            className="absolute right-4 text-white/70 hover:text-white"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
