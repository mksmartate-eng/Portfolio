"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Hero3DScene } from "@/components/3d/SmartHomeScene";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/cv.pdf";
    link.download = "CV_SmartHomeSpecialist.pdf";
    link.click();
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface opacity-80" />
      
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Hero3DScene />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-4"
            >
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-mono text-primary uppercase tracking-widest">
                Smart Home & Building Automation
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
            >
              DESIGNING
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryDark">
                INTELLIGENT
              </span>
              <br />
              SPACES.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg sm:text-xl text-textSecondary mb-4 font-mono uppercase tracking-wide"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base sm:text-lg text-textSecondary mb-8 max-w-xl leading-relaxed"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-primary hover:bg-primaryDark text-background font-semibold rounded-md transition-all shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                EXPLORE MY WORK
              </motion.a>
              
              <motion.button
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-surfaceLight hover:bg-surface border border-surface rounded-md font-semibold transition-all"
                whileHover={{ scale: 1.02, borderColor: "#00d4ff" }}
                whileTap={{ scale: 0.98 }}
              >
                DOWNLOAD CV
              </motion.button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6"
            >
              <a
                href="#contact"
                className="text-sm text-textSecondary hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                LET&apos;S CONNECT
                <ArrowDown size={16} className="animate-bounce" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Spacer for 3D */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-surfaceLight rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
