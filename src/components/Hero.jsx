import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 min-h-[90vh] overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-fuchsia-900">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-fuchsia-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          >
            Elaina — The Wandering Witch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-4 text-lg text-white/80 max-w-xl"
          >
            A gentle journey through magical towns, starlit skies, and stories untold. Dive into a pastel, whimsical world inspired by Majo no Tabi Tabi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#gallery"
              className="px-6 py-3 rounded-full bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400 transition"
            >
              View Gallery
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Spline scene="https://prod.spline.design/lsFGaFqoD7t-tmSb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-900/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
