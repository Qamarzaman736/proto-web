"use client";

import { motion } from "framer-motion";

import Image from "next/image";
export default function About() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center"
          >
            
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/m.jpg"
                alt="About Me Image"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>

            
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-lg mb-6">
                Hello i am Qamar Ul Zaman work as  a passionate AI researcher and developer, I specialize in creating cutting-edge solutions that push
                the boundaries of what's possible with artificial intelligence. With a strong background in machine
                learning, natural language processing, and deep learning, I strive to develop innovative applications
                that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Machine Learning", "NLP", "Deep Learning", "Computer Vision"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


