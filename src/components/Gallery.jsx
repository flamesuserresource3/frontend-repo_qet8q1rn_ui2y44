import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1748545723739-814ecfc3c558?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGFpbmElMjBhZXN0aGV0aWMlMjBwYXN0ZWwlMjBjaXR5fGVufDB8MHx8fDE3NjI1MTA5NTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    alt: "Elaina aesthetic pastel city",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    alt: "Magic sparkles in night sky",
  },
  {
    src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
    alt: "Witch hat and travel journal",
  },
  {
    src: "https://images.unsplash.com/photo-1515476084989-0c8f073ea169?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaXRjaCUyMGhhdCUyMGFuZCUyMHRyYXZlbCUyMGpvdXJuYWx8ZW58MHwwfHx8MTc2MjUxMDk1Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    alt: "Fantasy tea at twilight",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 bg-gradient-to-b from-fuchsia-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
        >
          Pastel Spellbook Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-white/80 mb-10 max-w-2xl"
        >
          Soft colors, cozy moments, and a touch of magic — curated scenes that echo Elaina’s travels.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
