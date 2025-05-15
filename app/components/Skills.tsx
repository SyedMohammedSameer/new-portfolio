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
    tech: "SQL, MongoDB, Mongoose",
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

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="skill-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M50 30 L50 70 M30 50 L70 50"
                stroke="currentColor"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#skill-pattern)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.tech}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
