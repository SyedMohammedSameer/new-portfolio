/// <reference types="react" />
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Server, Zap, X } from "lucide-react";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useState, useEffect } from "react";

interface AboutRef {
  show: () => void;
}

const About = forwardRef<AboutRef>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setIsVisible(true)
  }));

  // Hide when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isVisible && window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Machine Learning Engineer",
      description: "I build scalable ML/DL models for automation and real-world impact.",
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "AI Engineer",
      description: "I apply NLP, OpenCV, and predictive models to turn data into smart decisions.",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Software Engineer",
      description: "I develop Python frontend and AI-integrated backends, multi-agent systems.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Gen AI Engineer",
      description: "Skilled in OpenAI, LLaMA, Hugging Face—fine-tuning, agents, and gen AI apps.",
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          id="about"
          className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            aria-label="Close About Section"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          <div className="container mx-auto px-6 py-20 h-full overflow-y-auto relative z-10">
            <motion.h2
              className="text-4xl font-bold mb-8 text-center dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-6">
              <motion.div
                className="lg:w-1/2 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  A passionate Software Engineer and Machine Learning enthusiast,
                  currently pursuing a Master's in Machine Learning at the
                  University of Arizona. As a Research Assistant, I work on
                  Generative AI in semiconductor design and digital phenotyping for
                  female health, applying LLMs and robust AI/ML algorithms. I
                  specialize in pretraining, supervised fine-tuning with QLoRA and
                  SFT, multi-agent coordination, MCP (Model Context Protocol), and
                  scalable AI pipelines.
                </p>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  At Lumenci, I led backend AI-driven solutions using FastAPI,
                  AutoGPT, and custom AI agents. I also deployed Random Forest
                  models as part of an AI Workbench platform. Skilled in Python,
                  data structures, ML/DL frameworks, and ethical hacking on Linux,
                  I've contributed to projects involving CNN-based image
                  recognition, GANs, GNNs, NLP, and LLM customization.
                </p>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Beyond tech, I built a high-speed model rocket with a custom
                  flight computer, merging electronics and aerospace. A stargazer
                  and sports fan, I'm open to AI/ML, software engineering, and
                  interdisciplinary collaborations. Let's connect! 🚀
                </p>
              </motion.div>
              <motion.div
                className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {skill.icon}
                    <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </motion.div>
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
        </motion.section>
      )}
    </AnimatePresence>
  );
});

About.displayName = "About";

export default About;