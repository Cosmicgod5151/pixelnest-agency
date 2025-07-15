
'use client'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        We Craft Digital Experiences That Convert
      </motion.h1>
      <p className="text-xl md:text-2xl mb-8 max-w-xl">
        Award-winning marketing agency blending design, storytelling & data-driven strategy to grow your brand.
      </p>
      <a
        href="/contact"
        className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
      >
        Let’s Talk
      </a>
    </section>
  );
}
