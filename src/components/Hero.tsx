"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am <span className="text-blue-400">Qamar ul Zaman</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">Student of Meta.AI</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold flex items-center"
        >
          Explore Projects <ArrowRight className="ml-2" />
        </motion.button>
      </motion.div>

      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            opacity: [0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-full bg-gradient-to-br from-blue-500/10 to-green-500/10 filter blur-3xl"
        />
      </div>
    </section>
  );
}
