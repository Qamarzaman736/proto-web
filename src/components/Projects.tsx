"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image"; 

const projects = [
  {
    title: "Web Development",
    description: "Web development: Building and maintaining websites and web applications using programming languages, frameworks, and databases to create interactive and dynamic online experiences..",
    image: "/w.jpeg",
    github: "https://github.com/Qamarzaman736",
    demo: "https://ai-image-generator-demo.com",
  },
  {
    title: "Next.js ",
    description: "Next.js is a popular React-based framework for building server-rendered, statically generated, and performance-optimized web applications.",
    image: "/n.webp", 
    github: "https://new-file-rbj5.vercel.app/",
    demo: "https://nlp-chatbot-demo.com",
  },
  {
    title: "Generative artificial intelligence",
    description: "A generator in AI is a deep learning model that generates new, synthetic data or content, such as images, text, or music..",
    image: "/g.png",
    github: "https://github.com/Qamarzaman736",
    demo: "https://predictive-analytics-demo.com",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 md:px-0 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>

              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <Github className="mr-2" size={18} />
                    GitHub
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
                  >
                    <ExternalLink className="mr-2" size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

