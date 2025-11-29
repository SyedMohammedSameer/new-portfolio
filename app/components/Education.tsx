"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";
import Image from "next/image";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Master's Degree in Information Science - Machine Learning",
      institution: "University of Arizona",
      period: "2024 – 2025",
      achievements: [
        "GPA: 4.0/4.0",
        "Research Assistant in Generative Al",
        "Completed ML/DL projects:",
        "Loan Default Prediction for a German Bank",
        "Movie Recommendation System",
        "PharmaAgent (Al-driven pharmaceutical assistant)",
        "GAN, Vision Transformer based Al Image Identifier",
        "Research on IceCube Neutrino Observatory",
      ],
    },
    {
      degree: "Bachelor's Degree in Electronics and Communication Engineering",
      institution: "National Institute of Technology, Srinagar",
      period: "2019 – 2023",
      achievements: [
        "Class Representative",
        "Tech Lead at Semicolon (largest coding club in the valley)",
        "Led innovative projects:",
        "Self-Landing Model Rocket:",
        "Hunter Game (built entirely in C)",
        "Multiple ML projects using Random Forest & SVM algorithms",
        "Runner-up in IEEE's national IQ test competition",
        "Organized and contributed to Al and Ethical Hacking workshops",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />
        <div className="mx-auto lg:flex lg:gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glass-card p-8 rounded-2xl relative overflow-hidden group ${
                index === 1 && "mt-10 lg:mt-0"
              }`}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Animated gradient blob */}
              <motion.div
                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-br-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Glowing border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))",
                  filter: "blur(20px)",
                }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="w-7 h-7 mr-3 text-purple-600 dark:text-purple-400" />
                  </motion.div>
                  {edu.degree}
                </motion.h3>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  {edu.institution}
                </p>
                <motion.div
                  className="glass px-4 py-2 rounded-xl inline-flex items-center gap-2 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">{edu.period}</span>
                </motion.div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  Key Achievements:
                </h4>
                <ul className="space-y-3">
                  {edu.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start gap-3 leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * idx }}
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
