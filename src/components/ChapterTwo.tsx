'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { Clock, Shield, Award, Mountain } from 'lucide-react';

interface ChapterTwoProps {
  currentLang: Language;
}

export const ChapterTwo: React.FC<ChapterTwoProps> = ({ currentLang }) => {
  const ch = siteContent.chapters.chapter2;

  const icons = [Clock, Award, Shield, Mountain];

  return (
    <section
      id="chapter-02"
      className="relative min-h-screen w-full py-28 px-6 sm:px-12 lg:px-24 bg-forest-950 text-ivory-200 flex items-center overflow-hidden border-t border-forest-900/60"
    >
      {/* Visual Ambiance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-soil-900/90 via-forest-950 to-[#121b16]" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-forest-800/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grain opacity-25" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-400">
              Chapter 02
            </span>
            <div className="w-8 h-[1px] bg-gold-500/40" />
            <span className="text-xs tracking-wider text-ivory-400 uppercase font-mono">
              World A • Cultivation of Ethos
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

        {/* 4 Pillars of Character (Virtues) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ch.virtues.map((v, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group relative p-7 rounded-xl bg-forest-900/40 border border-forest-800/70 hover:border-gold-500/40 hover:bg-forest-900/70 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-soil-800/70 border border-forest-700/80 flex items-center justify-center text-gold-400 group-hover:text-gold-300 group-hover:border-gold-500/50 mb-6 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-lg text-ivory-100 font-medium tracking-wide mb-3 group-hover:text-gold-400 transition-colors">
                  {v.title[currentLang]}
                </h3>

                <p className={`text-xs sm:text-sm text-ivory-300/80 leading-relaxed ${
                  currentLang === 'te' ? 'font-telugu' : 'font-sans'
                }`}>
                  {v.desc[currentLang]}
                </p>

                <div className="mt-6 pt-4 border-t border-forest-800/60 flex items-center justify-between text-[10px] text-ivory-400/60 uppercase tracking-widest font-mono">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-600 group-hover:bg-gold-500 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-forest-950/80 via-soil-900/60 to-forest-950/80 border border-forest-800/60 text-center max-w-4xl mx-auto"
        >
          <p className={`text-sm sm:text-base text-ivory-300 leading-relaxed font-light ${
            currentLang === 'te' ? 'font-telugu leading-loose' : 'font-sans'
          }`}>
            {ch.narrative[currentLang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
