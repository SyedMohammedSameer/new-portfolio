"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { ExternalLink } from "lucide-react"; // Import Lucide icon
import Rocket from "@/public/rocket.png";
import Germanbank from "@/public/germanbank.png";
import Solarwather from "@/public/solarweather.png";
import JarvisAI from "@/public/JarvisAI.png";
import ImageDetectorAI from "@/public/ImageDetectorAI.png"
import AutoPharma from "@/public/AutopharmaAI.png"
import mediai from "@/public/MediAI.png"
import protein from "@/public/PPIGNN.png"
import afny from "@/public/AfnyAI.png"
import ionthefold from "@/public/ionthefold.png"
import biosphereai from "@/public/biosphere.png"
import salsabil from "@/public/salsabil.png"
import shifamind from "@/public/shifamind.png"
import cometsee from "@/public/cometsee.png"
import jobhuntai from "@/public/jobhuntai.png"

export default function KeyProjects() {
  const projects = [
    {
      title: "ShifaMind",
      image: shifamind,
      link: "https://github.com/SyedMohammedSameer/ShifaMind_Capstone",
    },
    {
      title: "COMET-SEE",
      image: cometsee,
      link: "https://huggingface.co/spaces/MohammedSameerSyed/soho-comet-detector",
    },
    {
      title: "JobHuntAI",
      image: jobhuntai,
      link: "https://github.com/SyedMohammedSameer/JobHuntAI",
    },
    {
      title: "IonTheFold",
      image: ionthefold,
      link: "https://www.ionthefold.com/",
    },
    {
      title: "BioSphereAI",
      image: biosphereai,
      link: "https://devpost.com/software/biosphereai",
    },
    {
      title: "Salsabil",
      image: salsabil,
      link: "https://salsabil-syedmohammedsameers-projects.vercel.app/",
    },
    {
      title: "MediAI",
      image: mediai,
      link: "https://medi-ai-eta.vercel.app/",
    },
    {
      title: "Protein Protein Interaction GNN",
      image: protein,
      link: "https://github.com/SyedMohammedSameer/ProteinProteinInteractionGNN",
    },
    {
      title: "Afny AI",
      image: afny,
      link: "https://afny-ai-v2.vercel.app/",
    },
    {
      title: "AutoPharma",
      image: AutoPharma,
      link: "https://github.com/SyedMohammedSameer/AutoPharma",
    },
    {
      title: "Image Dectection",
      image: ImageDetectorAI,
      link: "https://github.com/SyedMohammedSameer/ImageDetectorAI",
    },
    {
      title: "Jarvis AI",
      image: JarvisAI,
      link: "https://github.com/SyedMohammedSameer/JARVIS",
    },
    {
      title: "Solar Weather Forecast",
      image: Solarwather,
      link: "https://github.com/SyedMohammedSameer/SpaceWeatherForecast",
    },
    {
      title: "Model Rocketry",
      image: Rocket,
      link: "https://sites.google.com/view/projectspalm/home",
    },
    {
      title: "Data Analysis and ML",
      image: Germanbank,
      link: "https://github.com/SyedMohammedSameer/loan-default",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Key Projects" />
        <div className="portfolio-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              transition={{ duration: 0.3 }} // Smooth transition
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="responsive"
                width={350}
                height={200}
                className="rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col items-center gap-3 justify-center text-center"
                initial={{ opacity: 0, y: 20 }} // Start hidden and off the bottom
                whileHover={{ opacity: 1, y: 0 }} // Show on hover
                transition={{ duration: 0.4 }} // Transition duration for overlay
              >
                <motion.h5 className="text-white text-lg font-semibold mb-2 block">
                  {project.title}
                </motion.h5>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="mt-2 block"
                >
                  <ExternalLink className="text-black p-2 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center" />
                  {/* Smaller black icon */}
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
