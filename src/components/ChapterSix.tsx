'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { Lock, HeartHandshake, Users2, ShieldAlert } from 'lucide-react';

interface ChapterSixProps {
  currentLang: Language;
}

export const ChapterSix: React.FC<ChapterSixProps> = ({ currentLang }) => {
  const ch = siteContent.chapters.chapter6;

  const icons = [Lock, HeartHandshake, Users2];

  return (
    <section
      id="chapter-06"
      className="relative min-h-screen w-full py-28 px-6 sm:px-12 lg:px-24 bg-soil-900 text-ivory-200 overflow-hidden border-t border-forest-900"
    >
      {/* Visual Ambiance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-soil-900 to-[#17120e]" />
        <div className="absolute left-1/4 top-1/3 w-[600px] h-[600px] bg-forest-800/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grain opacity-25" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-400">
              Chapter 06
            </span>
            <div className="w-8 h-[1px] bg-gold-500/40" />
            <span className="text-xs tracking-wider text-ivory-400 uppercase font-mono">
              The Humanity of Service
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

        {/* Core Principles of Human Stewardship */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ch.principles.map((p, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="p-8 rounded-xl bg-soil-800/60 border border-soil-700/80 hover:border-gold-500/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-soil-900 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl text-ivory-100 font-medium mb-3">
                  {p.title[currentLang]}
                </h3>

                <p className={`text-xs sm:text-sm text-ivory-300/80 leading-relaxed ${
                  currentLang === 'te' ? 'font-telugu leading-relaxed' : 'font-sans'
                }`}>
                  {p.description[currentLang]}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Restrained Reflection on Silent Respect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-forest-950/80 via-soil-950/90 to-forest-950/80 border border-forest-800/70 max-w-4xl mx-auto text-center space-y-6 shadow-2xl"
        >
          <div className="w-10 h-10 mx-auto rounded-full bg-gold-950/60 border border-gold-500/40 flex items-center justify-center text-gold-400">
            <HeartHandshake className="w-5 h-5" />
          </div>

          <p className={`text-sm sm:text-base text-ivory-200 leading-relaxed font-light ${
            currentLang === 'te' ? 'font-telugu leading-loose' : 'font-sans'
          }`}>
            {ch.restrainedReflection[currentLang]}
          </p>

          <div className="pt-6 border-t border-forest-800/80 flex items-center justify-center space-x-2 text-xs text-ivory-400 font-mono">
            <ShieldAlert className="w-4 h-4 text-gold-400" />
            <span>{ch.confidentialityNotice[currentLang]}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
