import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-white font-semibold tracking-wide"
        >
          <Sparkles className="w-5 h-5 text-fuchsia-300" />
          <span className="text-lg">Wandering Witch</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <motion.a
          href="#gallery"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/90 text-white shadow-lg shadow-fuchsia-500/30"
        >
          <Star className="w-4 h-4" />
          Explore
        </motion.a>
      </div>
    </header>
  );
}
