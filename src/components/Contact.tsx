"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, Github, Send, Phone, Video, Facebook } from "lucide-react"
import type React from "react" 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to a server
  }

  return (
    <section className="py-20 px-4 md:px-0 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-500 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center"
            >
              Send Message <Send className="ml-2" size={18} />
            </motion.button>
          </motion.form>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 social-icon"
              aria-label=""
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Qamarzaman736"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 social-icon"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href=" https://whatsapp.com/dl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 social-icon"
              aria-label="WhatsApp"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@arainzadaa04?_t=ZS-8teo8ElHaqu&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 social-icon"
              aria-label="tiktok"
            >
              <Video size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

