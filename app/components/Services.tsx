"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Smartphone } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-blue-500" />,
      title: "Machine Learning Engineer",
      description:
        "Specialized in Machine Learning (ML) and Deep Learning (DL) algorithms, including Random Forests, SVMs, Neural Networks, and Reinforcement Learning. Experienced in building production-ready models for real-world applications, optimizing performance, and deploying solutions effectively.",
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: "Backend Development",
      description:
        "Experienced in Backend Development with technologies like Python and FASTAPI to build secure, high-performance web services and APIs. Familiar with databases, cloud platforms, and optimizing server-side logic for reliability and scalability.",
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "Generative Al / NLP Engineer",
      description:
        "Expert in creating Multi-Agent Systems and Fine-Tuning Large Language Models (LLMs) for diverse tasks. Skilled in developing NLP-based solutions, such as text generation, sentiment analysis, and chatbot implementations, leveraging state-of-the-art models to solve complex problems.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-500" />,
      title: "Software Engineer",
      description:
        "Proficient in C, C++, and Python, with a strong focus on building scalable, efficient software solutions. Experienced in writing clean, maintainable code and delivering high-performance applications. Knowledgeable in tools like Docker for containerization, CI/CD pipelines, and system-level programming.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Core Competencies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Animated gradient blob */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="glass-strong p-3 rounded-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                </motion.div>
                <motion.p
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>
              </div>

              {/* Glowing border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
