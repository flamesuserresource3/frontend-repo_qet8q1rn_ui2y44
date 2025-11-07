import { motion } from "framer-motion";
import { Feather, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white">A Witch on Gentle Winds</h3>
            <p className="mt-4 text-white/80">
              Elaina drifts from town to town, collecting stories like pressed flowers. Her adventures blend warmth, humor, and wonder into a soft pastel palette.
            </p>
            <div className="mt-6 flex items-center gap-4 text-white/90">
              <span className="inline-flex items-center gap-2"><Feather className="w-5 h-5 text-fuchsia-300" /> Light-hearted</span>
              <span className="inline-flex items-center gap-2"><BookOpen className="w-5 h-5 text-fuchsia-300" /> Thoughtful</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520975730391-1821a6e0cb1b?q=80&w=1600&auto=format&fit=crop"
                alt="Pastel landscape with starry sky"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
