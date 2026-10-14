'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { Sprout } from 'lucide-react';

interface ChapterOneProps {
  currentLang: Language;
}

export const ChapterOne: React.FC<ChapterOneProps> = ({ currentLang }) => {
  const ch = siteContent.chapters.chapter1;

  return (
    <section
      id="chapter-01"
      className="relative min-h-screen w-full py-28 px-6 sm:px-12 lg:px-24 bg-forest-900 text-ivory-200 flex items-center overflow-hidden border-t border-forest-800/40"
    >
      {/* World A Ambient Background & Textures */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/90 via-forest-900 to-soil-900/95" />
        <div className="absolute -left-48 top-1/3 w-96 h-96 bg-forest-600/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-soil-700/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grain opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-400">
              Chapter 01
            </span>
            <div className="w-8 h-[1px] bg-gold-500/40" />
            <span className="text-xs tracking-wider text-ivory-400 uppercase font-mono">
              World A • The Roots
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory-100 font-normal tracking-wide"
          >
            {ch.title[currentLang]}
          </motion.h2>

          <p className="mt-3 text-sm sm:text-base text-gold-300/80 font-serif italic tracking-wide">
            {ch.tagline[currentLang]}
          </p>
        </div>

        {/* Story Composition: Two-column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Prose */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {ch.body[currentLang].map((paragraph, idx) => (
              <p
                key={idx}
                className={`text-base sm:text-lg leading-relaxed text-ivory-300 font-light ${
                  currentLang === 'te' ? 'font-telugu leading-loose' : 'font-sans'
                }`}
              >
                {paragraph}
              </p>
            ))}

            {/* Dignified Pull Quote */}
            <div className="pt-6 border-t border-forest-700/60 mt-8">
              <blockquote className={`text-lg sm:text-xl text-gold-300/90 italic font-serif ${
                currentLang === 'te' ? 'font-telugu leading-relaxed' : ''
              }`}>
                {ch.quote[currentLang]}
              </blockquote>
            </div>
          </motion.div>

          {/* Right Column: Visual Archival & Soil Metaphor Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-forest-950/80 via-soil-900/90 to-forest-900/60 border border-forest-700/60 shadow-2xl backdrop-blur-sm">
              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gold-500/60" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gold-500/60" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gold-500/60" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gold-500/60" />

              <div className="w-12 h-12 rounded-full bg-forest-800/80 border border-gold-500/40 flex items-center justify-center text-gold-400 mb-6">
                <Sprout className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-ivory-100 uppercase tracking-wider mb-2">
                {currentLang === 'te' ? 'రెండు ఎకరాల నేల' : 'Two Acres of Soil'}
              </h3>
              
              <p className="text-xs uppercase tracking-[0.2em] text-gold-400/90 font-serif mb-4">
                {currentLang === 'te' ? 'అనంతమైన నిశ్శబ్ద సత్యం' : 'The First Classroom'}
              </p>

              <p className={`text-xs sm:text-sm text-ivory-300/80 leading-relaxed mb-6 ${
                currentLang === 'te' ? 'font-telugu' : 'font-sans'
              }`}>
                {currentLang === 'te' 
                  ? 'రైతుకు తెలిసిన సత్యం ఒక్కటే: విత్తినప్పుడే పంట రాదు. ఎండను, వానను భరించాలి. ప్రతీ రోజు ఉదయాన్నే పనిని ప్రారంభించాలి. ఈ స్థైర్యమే ఆయనను నడిపించింది.' 
                  : 'Farming is not an absence of ambition; it is an education in endurance. The cultivator understands that seeds remain in the darkness before they reach for the sky.'}
              </p>

              <div className="pt-4 border-t border-forest-800 flex items-center justify-between text-[11px] text-ivory-400">
                <span className="font-mono uppercase">{currentLang === 'te' ? 'ధృవీకరించబడిన నేపథ్యం' : 'Verified Foundation'}</span>
                <span className="text-gold-400 font-serif">100% Authentic</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
