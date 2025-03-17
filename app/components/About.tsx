"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Zap } from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Machine Learning Engineer",
      description:
        "I develop scalable ML and Deep Learning models, focusing on automation and impactful AI solutions.",
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Artificial Intelligence Engineer",
      description:
        "I transform data into insights, visualizations, and analytics for decision-making, leveraging NLP, computer vision, and predictive modeling to drive efficiency and growth.",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Software Engineer",
      description:
        "I specialize in Python backend development and AI integration, building Multi-Agent frameworks and scalable solutions to solve business problems efficiently.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Gen AI Engineer",
      description:
        "Proficient in Generative AI tools like OpenAI, Anthropic, Groq, Llama, and Hugging Face. Experienced in fine-tuning models, Multi-Agent Systems, and generative techniques for diverse applications.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-6">
          <motion.div
            className="lg:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              A passionate Software Engineer and Machine Learning enthusiast,
              currently pursuing a Master’s in Machine Learning at the
              University of Arizona. At Lumenci, I lead AI-driven solutions
              within a backend team, utilizing FastAPI, AutoGPT, and custom AI
              agents, while deploying Random Forest models for our AI Workbench.
              Skilled in Python, Data Structures, ML/DL frameworks, and Ethical
              Hacking (Linux), I’ve worked on projects in CNN-based Image
              Recognition, GANs, GNNs, NLP, and LLM fine-tuning with QLORA and
              SFT.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Outside of tech, I build a high-speed model rocket with a custom
              flight computer, combining electronics and aerospace. A stargazer
              and sports fan, I’m open to AI/ML, software engineering, and
              interdisciplinary collaborations. Let’s connect! 🚀
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2 grid grid-cols-1  md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
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
