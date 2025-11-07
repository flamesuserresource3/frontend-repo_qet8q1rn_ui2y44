import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-10 bg-gradient-to-b from-purple-900 to-indigo-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/70">© {new Date().getFullYear()} Wandering Witch Tribute — fan-made</p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#top" className="hover:text-white transition">Back to top</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
