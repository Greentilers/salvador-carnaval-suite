import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

const categories = [
  { name: "Entrada", images: [entrada1, entrada2, entrada3] },
  { name: "Sala", images: [sala1, sala2, sala3]     },
  { name: "Cozinha", images: [cozinha1, cozinha2] },
  { name: "Quarto", images: [quarto1, quarto2, quarto3] },
  { name: "Banheiro", images: [banheiro1, banheiro2] },
  { name: "Vista", images: [vista1, vista2, vista3] },
];

const allImages = categories.flatMap((c) => c.images);

const captionByImage: Record<string, string> = {
  [entrada1]: "Vista da entrada. Pendurador de camisa, frigobar e mesa com 2 cadeiras.",
  [entrada2]: "Mesa com duas cadeiras, TV, luminária.",
  [entrada3]: "Sofá-cama, mesa de apoio pro sofá, mesa com 2 cadeiras e TV.",
  [sala1]: "Sofá-cama, mesa de apoio pro sofá, mesa com 2 cadeiras e TV.",
  [sala2]: "Sofá-cama aberto, cortina blackout.",
  [sala3]: "Sofá-cama.",
  [cozinha1]: "Cozinha equipada.",
  [cozinha2]: "Cozinha equipada com microondas, chaleira elétrica.",
  [quarto1]: "Cama box tamanho casal, luminárias, cortina blackout.",
  [quarto2]: "Armário de roupas estilo quarto de hotel.",
  [quarto3]: "Cama box tamanho casal, e vista para a baía de todos os santos.",
  [banheiro1]: "Banheiro equipado.",
  [banheiro2]: "Box de vidro com chuveiro elétrico.",
  [vista1]: "Vista para a baía de todos os santos.",
  [vista2]: "Vista para a baía de todos os santos.",
  [vista3]: "Vista para a baía de todos os santos.",
};

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
            alt="Foto ampliada"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
          <p className="mt-4 text-white/90 text-center text-sm md:text-base max-w-[90vw] px-4">
            {captionByImage[allImages[lightboxIndex]] ?? ""}
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
