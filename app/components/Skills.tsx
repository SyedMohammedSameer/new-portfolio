"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Layout,
  GitBranch,
  Terminal,
  Layers,
  Cpu,
  Globe,
  Workflow,
} from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
);

const skills = [
  {
    icon: Code,
    name: "Machine Learning Algorithms",
    tech: "Random Forest, SVM, KNN, Regression models",
    description:
      "Deep understanding of a wide range of ML algorithms, including: Random Forest, SVM, KNN, and Regression models for classification and prediction tasks.",
    color: "text-blue-500",
  },
  {
    icon: Server,
    name: "Backend Development",
    tech: " Python, FASTAPI, and server-side architectures",
    description:
      "Skilled in designing and implementing efficient, scalable backend systems. Proficient in Python, FASTAPI, and server-side architectures to build robust applications and APIs.",
    color: "text-green-500",
  },
  {
    icon: Database,
    name: "Database Management",
    tech: "SQL, MongoDB, Firebase, Supabase, Nano",
    description:
      "Experienced in working with both SQL and NoSQL databases, including MongoDB, ensuring efficient data storage, retrieval, and management for large-scale applications.",
    color: "text-purple-500",
  },

  {
    icon: Layout,
    name: "Generative AI",
    tech: "OpenAI, Anthropic, Groq, Llama, Hugging Face",
    description:
      "Proficient in working with leading Generative AI tools and frameworks such as OpenAI, Anthropic, Groq, Llama, and Hugging Face. Experienced in fine-tuning models, building Multi-Agent Systems, and leveraging generative techniques for diverse use cases.",
    color: "text-pink-500",
  },

  {
    icon: Terminal,
    name: "Deep Learning Algorithms",
    tech: "CNNs, RNNs, GANs, GNNs, ResNet, VAEs, Vision Transformers",
    description: `
      Hands-on experience with advanced DL architectures, including:
      CNNs for image processing
      RNNs and LSTMs for sequence modeling
      GANs for generative tasks
      ResNet, Transformers, and GNNs for cutting-edge applications in computer vision, NLP, and graph-based data.`,
    color: "text-yellow-500",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    tech: "Git, GitHub, JIRA",
    description:
      "Proficient in GIT for version control and JIRA for project management, I utilize these tools to enhance collaboration, streamline workflows, and ensure efficient tracking of code changes and project progress within team environments.",
    color: "text-orange-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden group h-full">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${
                      skill.color.includes("blue")
                        ? "rgba(59, 130, 246, 0.1)"
                        : skill.color.includes("green")
                        ? "rgba(34, 197, 94, 0.1)"
                        : skill.color.includes("purple")
                        ? "rgba(147, 51, 234, 0.1)"
                        : skill.color.includes("pink")
                        ? "rgba(236, 72, 153, 0.1)"
                        : skill.color.includes("yellow")
                        ? "rgba(234, 179, 8, 0.1)"
                        : "rgba(249, 115, 22, 0.1)"
                    }, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="flex items-center mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`p-3 rounded-xl glass-strong shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <skill.icon className={`w-7 h-7 ${skill.color}`} />
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        {skill.name}
                      </h3>
                      <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">
                        {skill.tech}
                      </p>
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {skill.description}
                  </motion.p>
                </div>

                {/* Glowing border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${
                      skill.color.includes("blue")
                        ? "rgba(59, 130, 246, 0.3)"
                        : skill.color.includes("green")
                        ? "rgba(34, 197, 94, 0.3)"
                        : skill.color.includes("purple")
                        ? "rgba(147, 51, 234, 0.3)"
                        : skill.color.includes("pink")
                        ? "rgba(236, 72, 153, 0.3)"
                        : skill.color.includes("yellow")
                        ? "rgba(234, 179, 8, 0.3)"
                        : "rgba(249, 115, 22, 0.3)"
                    }`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
