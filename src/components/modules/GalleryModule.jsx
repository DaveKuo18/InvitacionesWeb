import { motion } from "framer-motion";
import { Section } from "../shared/Section.jsx";
import { SectionHeader } from "../shared/SectionHeader.jsx";

export function GalleryModule({ config, theme }) {
  const galleryImages = (config.images.gallery || []).filter((image) => image?.src);
  if (!galleryImages.length) return null;
  return (
    <Section data-capture="gallery">
      <SectionHeader eyebrow="Recuerdos" title={config.galleryTitle || "Galeria"} text={config.galleryText} theme={theme} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <motion.div key={image.src} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.07, duration: 0.55 }} className={`group relative h-80 overflow-hidden rounded-[2rem] bg-transparent shadow-2xl shadow-black/20 ${index === 1 ? "lg:mt-10" : ""} ${index === 2 ? "lg:-mt-6" : ""}`}>
            <img src={image.src} alt={image.alt || `Foto ${index + 1}`} className="absolute inset-0 block h-full w-full object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: image.position || "center" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-70" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
