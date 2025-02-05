"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unleashing the Power of <span className="text-blue-400">AI Creativity</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">Transforming ideas into intelligent solutions</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold flex items-center"
        >
          Explore Projects <ArrowRight className="ml-2" />
        </motion.button>
      </motion.div>
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="w-full h-full bg-gradient-to-br from-blue-500/10 to-green-500/10 filter blur-3xl"
        />
      </div>
    </section>
  )
}

