'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { ChevronDown, Compass } from 'lucide-react';

interface HeroCinematicProps {
  currentLang: Language;
}

export const HeroCinematic: React.FC<HeroCinematicProps> = ({ currentLang }) => {
  const content = siteContent.hero;

  const scrollToFirstChapter = () => {
    const el = document.getElementById('chapter-01');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-forest-950 text-ivory-200 select-none"
    >
      {/* Cinematic Layered Background */}
      <div className="absolute inset-0 z-0">
        {/* Deep Atmospheric Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-[#101c15] to-soil-900 opacity-95" />

        {/* Farmland Horizon Landscape Graphic */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[65vh] opacity-40 mix-blend-screen pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Distant Hills / Rayalaseema Ridges */}
          <path
            d="M0 450 Q 240 380 480 410 T 960 390 T 1440 430 L 1440 600 L 0 600 Z"
            fill="#182A22"
            opacity="0.8"
          />
          {/* Midground agricultural contours */}
          <path
            d="M0 490 Q 360 440 720 480 T 1440 460 L 1440 600 L 0 600 Z"
            fill="#122018"
            opacity="0.9"
          />
          {/* Furrowed Fields / Soil Lines */}
          <path
            d="M0 540 C 300 520, 600 550, 900 530 C 1200 510, 1350 540, 1440 535 L 1440 600 L 0 600 Z"
            fill="#19130D"
          />
          <path
            d="M100 600 L350 535 M450 600 L680 532 M800 600 L1020 528 M1150 600 L1320 532"
            stroke="rgba(193, 154, 85, 0.15)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
        </svg>

        {/* Golden Dawn Glow (Metaphor for Rising Life and Patience) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-b from-gold-500/10 via-forest-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Subtle Vignette & Film Grain Overlay */}
        <div className="absolute inset-0 bg-vignette-radial pointer-events-none" />
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      </div>

      {/* Hero Documentary Narrative Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-20">
        
        {/* Eyebrow / Cinematic Prologue Marker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-forest-700/60 bg-forest-900/40 backdrop-blur-sm mb-8"
        >
          <Compass className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-serif text-gold-300/90">
            {content.eyebrow[currentLang]}
          </span>
        </motion.div>

        {/* Main Title: FROM SOIL TO SIGNIFICANCE */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide text-ivory-100 uppercase leading-[1.15] mb-6 drop-shadow-md"
        >
          {content.mainTitle[currentLang]}
        </motion.h1>

        {/* Subject Name: SIVARAMI REDDY GADIKOTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mb-8"
        >
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500/70 to-transparent mx-auto mb-6" />
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium tracking-[0.18em] text-gold-400 uppercase">
            {content.subjectName[currentLang]}
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-sans tracking-[0.2em] uppercase text-ivory-300/80">
            {content.designation[currentLang]} • {content.location[currentLang]}
          </p>
        </motion.div>

        {/* Philosophy / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className={`text-base sm:text-lg md:text-xl text-ivory-300/90 max-w-2xl mx-auto italic font-light tracking-wide ${
            currentLang === 'te' ? 'font-telugu leading-relaxed' : 'font-serif'
          }`}
        >
          {content.subtitle[currentLang]}
        </motion.p>

        {/* Core Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mt-8 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-ivory-400/70 font-sans"
        >
          {currentLang === 'te' 
            ? 'గౌరవం స్వార్జితం. వారసత్వం శాశ్వతం.' 
            : 'Honour is Earned. Legacy is Left Behind.'}
        </motion.div>
      </div>

      {/* Atmospheric Landscape Caption (Ethical stock transparency note) */}
      <div className="absolute bottom-4 left-6 hidden sm:block text-[10px] tracking-wider text-ivory-500/60 uppercase font-mono">
        {currentLang === 'te' 
          ? 'రూపక దృశ్యం: రాయలసీమ గ్రామీణ నేలలు' 
          : 'Atmospheric Reference: Rayalaseema Farmland Terrain'}
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.button
        onClick={scrollToFirstChapter}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 1.6, 
          repeat: Infinity, 
          repeatType: 'reverse', 
          repeatDelay: 1 
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-ivory-400 hover:text-gold-400 transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 rounded p-1"
        aria-label="Scroll to Chapter 1"
      >
        <span className="text-[11px] uppercase tracking-[0.25em] font-serif group-hover:text-gold-300">
          {content.scrollPrompt[currentLang]}
        </span>
        <ChevronDown className="w-4 h-4 text-gold-400/80 group-hover:translate-y-1 transition-transform" />
      </motion.button>
    </section>
  );
};
