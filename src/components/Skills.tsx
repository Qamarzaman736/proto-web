"use client"

import {motion} from "framer-motion"
import { Brain, Database, Cpu, BarChart } from "lucide-react"

const skills = [
  { name: "Machine Learning", icon: Brain },
  { name: "Natural Language Processing", icon: Database },
  { name: "Deep Learning", icon: Cpu },
  { name: "Big Data", icon: BarChart },
]

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <skill.icon size={40} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

