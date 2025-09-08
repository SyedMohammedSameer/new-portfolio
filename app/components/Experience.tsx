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
        "Collaborating with one of the globe’s leading semiconductor companies to harness state-of-the-art Generative AI techniques—including Retrieval-Augmented Generation (RAG), Pydantic-based Multi-Agent systems, open-source LLMs, fine-tuning and pretraining models, as well as AI-driven simulations and 3D model rendering—for cutting-edge industrial applications.",
        "Conducting research on digital phenotyping for female health by leveraging Big Data analytics and applying Machine Learning and Deep Learning models to uncover patterns, improve diagnostics, and enable personalized interventions.",
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
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? (
                    <Globe className="w-6 h-6 mr-2 text-blue-500" />
                  ) : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
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
