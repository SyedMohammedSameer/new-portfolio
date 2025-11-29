"use client";

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function Experience() {
  const experiences = [
    {
      company: "IonTheFold",
      location: "Singapore",
      period: "June 2025",
      role: "Co-Founder / AI Engineering Lead",
      responsibilities: [
        "Co-founded a research-focused startup reimagining protein and antibody design with AI, unlocking breakthroughs for drug discovery and biotechnology.",
        "Led development of deep learning pipelines with the Grinter Lab (University of Melbourne) and Knott Lab (Monash University), leveraging NGS-derived sequence datasets for training and validation.",
        "Designed a fusion architecture combining ESM-2, APBS, and ProteinMPNN with a novel electrostatic-aware loss function, achieving 6.53% improvement on charged proteins and a 4.14% ± 0.026 overall gain in sequence recovery, surpassing state-of-the-art methods across diverse protein families.",
      ],
    },
    {
      company: "Quelea",
      location: "Singapore",
      period: "June 2025",
      role: "Co-Founder/ Lead AI Engineer",
      responsibilities: [
        "Developed a multi-agent video analysis platform with real-time audio, visual, sentiment, and multimodal intelligence; integrated agents for ASMR detection, beauty scoring, pose analysis, OCR, and virality prediction.",
        "Built a custom model inspired by NexTGPT, trained on 5,058 influencer videos to achieve state-of-the-art results in multimodal understanding; currently preparing the research for arXiv publication.",
        "Finetuned and deployed Qwen 2.5 Vision Instruct model using QLoRA and 7k curated datapoints via Runpod, boosting overlay text extraction accuracy in diverse video conditions.",
      ],
    },
    {
      company: "University of Arizona",
      location: "Tucson, AZ, USA",
      period: "March 2025",
      role: "Graduate Research Assistant",
      responsibilities: [
        "Developed digital phenotyping pipelines by integrating MindLamp and deploying RADAR-Base on AWS EC2 for continuous ingestion of mobile sensor data, supporting MyDataHelps deployment for a postpartum health study.",
        "Engineered a multi-agent architecture that unifies wearable data, phone sensor data by building knowledge graphs, KNN clusters, and text embeddings."
      ],      
    },
    {
      company: "Lumenci",
      location: "Gurgaon, Haryana, India",
      period: "January 2024 - December 2024",
      role: "Software Engineer",
      responsibilities: [
        "Developed and deployed an automated portfolio analysis system, leveraging machine learning algorithms and advanced feature engineering techniques, reducing the work of Associate consultants from 40-50 hours per project to a matter of minutes.",
        "Accelerated portfolio analysis by 82% by leveraging GCP's GPU for backend operations.",
        "Developed an AI workbench using CrewAI and OpenAI agents in a multi-agent framework, improving operational efficiency by 70% and boosting model accuracy from 6% to 72%.",
      ],
    },
    {
      company: "Indian Institute of Technology, Indore",
      location: "Indore, MP, India",
      period: "January 2022 - May 2022",
      role: "Research Intern",
      responsibilities: [
        "Developed a Graph Neural Network (GNN) architecture from scratch to process and train on a decade's worth of image data from NASA's Solar and Heliospheric Observatory (SOHO) satellite, achieving 91% accuracy in time series prediction.",
        "Led a team of 3 researchers and experimented various deep learning models including CNN, RNN, GAN, and GNN for time series forecasting and image classification tasks, selecting optimal models based on performance metrics.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Animated gradient blob */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-bl-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Glowing border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
                  filter: "blur(20px)",
                }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {exp.company === "Freelance" ? (
                    <Globe className="w-6 h-6 mr-2 text-blue-500" />
                  ) : null}
                  {exp.company}
                </motion.h3>

                <div className="flex flex-wrap gap-4 mb-4">
                  <motion.div
                    className="glass px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{exp.location}</span>
                  </motion.div>
                  <motion.div
                    className="glass px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>{exp.period}</span>
                  </motion.div>
                </div>

                <motion.p
                  className="text-lg font-semibold mb-6 flex items-center gap-2 text-gray-700 dark:text-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Briefcase className="w-5 h-5 text-blue-500" />
                  {exp.role}
                </motion.p>

                <ul className="list-none space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start gap-3 leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
