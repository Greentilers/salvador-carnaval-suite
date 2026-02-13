import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import sala1 from "@/assets/CAB_7806.webp";
import sala2 from "@/assets/CAB_7875.webp";
import sala3 from "@/assets/CAB_9008.webp";
import sala4 from "@/assets/CAB_9010.webp";
import cozinha1 from "@/assets/CAB_8983.webp";
import cozinha2 from "@/assets/CAB_9002.webp";
import entrada1 from "@/assets/CAB_8994.webp";
import entrada2 from "@/assets/CAB_8992.webp";
import detalhe1 from "@/assets/CAB_7802.webp";
import detalhe2 from "@/assets/CAB_8979.webp";
import quarto1 from "@/assets/CAB_7876.webp";
import quarto2 from "@/assets/CAB_7884.webp";

const categories = [
  { name: "Sala", images: [sala1, sala2, sala3, sala4] },
  { name: "Cozinha", images: [cozinha1, cozinha2] },
  { name: "Entrada", images: [entrada1, entrada2] },
  { name: "Detalhes", images: [detalhe1, detalhe2] },
  { name: "Quarto", images: [quarto1, quarto2] },
];

const allImages = categories.flatMap((c) => c.images);

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredImages =
    activeCategory === "Todas"
      ? allImages
      : categories.find((c) => c.name === activeCategory)?.images || [];

  const openLightbox = (img: string) => {
    setLightboxIndex(allImages.indexOf(img));
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
          Galeria de Fotos
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Todas", ...categories.map((c) => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(img)}
              className="aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={img}
                alt={`Foto do apartamento ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
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
            alt="Foto ampliada"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
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
