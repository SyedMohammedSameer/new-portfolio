"use client";

import { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact from "./components/Contact";
import FloatingNav from "./components/floating-nav";
import KeyProjects from "./components/KeyProjects";
import CustomCursor from "./components/CustomCursor";
import CursorTrail from "./components/CursorTrail";

export default function Home() {
  const aboutRef = useRef<{ show: () => void }>(null);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <CustomCursor />
      <CursorTrail />
      <FloatingNav />
      <Hero aboutRef={aboutRef} />
      <About ref={aboutRef} />
      <Experience />
      <KeyProjects />
      <Skills />
      <Services />
      <Education />
      <Contact />
    </main>
  );
}