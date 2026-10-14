'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { ArrowUpRight, Compass, HelpCircle } from 'lucide-react';

interface ChapterThreeProps {
  currentLang: Language;
  onOpenVerificationModal: () => void;
}

export const ChapterThree: React.FC<ChapterThreeProps> = ({ currentLang, onOpenVerificationModal }) => {
  const ch = siteContent.chapters.chapter3;

  return (
    <section
      id="chapter-03"
      className="relative min-h-screen w-full py-28 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-forest-950 via-[#181d1b] to-charcoal-900 text-ivory-200 flex items-center overflow-hidden border-t border-forest-900"
    >
      {/* Transitional Ambient Gradients: From Green to Charcoal */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-forest-950/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-charcoal-950/90 to-transparent" />
        <div className="absolute inset-0 bg-grain opacity-25" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-400">
              Chapter 03
            </span>
            <div className="w-8 h-[1px] bg-gold-500/40" />
            <span className="text-xs tracking-wider text-ivory-400 uppercase font-mono">
              The Transition • Early 2000s
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

        {/* Narrative & Visual Convergence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Narrative Context */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {ch.body[currentLang].map((para, idx) => (
              <p
                key={idx}
                className={`text-base sm:text-lg leading-relaxed text-ivory-300 font-light ${
                  currentLang === 'te' ? 'font-telugu leading-loose' : 'font-sans'
                }`}
              >
                {para}
              </p>
            ))}

            {/* Seamless Transition Philosophy */}
            <div className="p-6 rounded-xl bg-charcoal-800/60 border border-charcoal-700/60 mt-8">
              <div className="flex items-start space-x-3">
                <Compass className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-serif text-gold-400 mb-1">
                    {currentLang === 'te' ? 'సహజ పరిణామం' : 'The Ethical Continuity'}
                  </h4>
                  <p className={`text-xs sm:text-sm text-ivory-300/80 leading-relaxed ${
                    currentLang === 'te' ? 'font-telugu' : 'font-sans'
                  }`}>
                    {ch.transitionNote[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: The Early 2000s Archival Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative p-7 sm:p-9 rounded-2xl bg-charcoal-800/70 border border-charcoal-700 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal-700">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-serif">
                  {currentLang === 'te' ? 'చారిత్రక రికార్డు' : 'Historical Milestone'}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-charcoal-900 border border-gold-500/30 text-gold-300">
                  Early 2000s
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-serif text-2xl text-ivory-100 font-medium">
                    {currentLang === 'te' ? 'ఎల్.ఐ.సి తో ప్రయాణం' : 'Entry Into LIC'}
                  </h3>
                  <p className="text-xs text-gold-400/90 tracking-wider uppercase font-serif mt-1">
                    Life Insurance Corporation of India
                  </p>
                </div>

                <p className={`text-xs sm:text-sm text-ivory-300/80 leading-relaxed ${
                  currentLang === 'te' ? 'font-telugu' : 'font-sans'
                }`}>
                  {currentLang === 'te'
                    ? '2000ల ప్రారంభంలో ప్రారంభమైన ఈ ప్రయాణంలో... జమ్మలమడుగు మరియు పరిసర గ్రామాల ప్రజలకు రక్షణ కవచంలా నిలిచారు.'
                    : 'Stepping forward to serve the households of Jammalamadugu, translating the patience of agriculture into lifelong financial guardianship.'}
                </p>
              </div>

              {/* Family Invitation Note (Truth Standard) */}
              <div className="pt-4 border-t border-charcoal-700/80">
                <button
                  onClick={onOpenVerificationModal}
                  className="w-full text-left p-3 rounded-lg bg-soil-900/60 border border-charcoal-600/60 hover:border-gold-500/50 group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-serif text-ivory-300 group-hover:text-gold-300 flex items-center space-x-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-gold-400" />
                      <span>{currentLang === 'te' ? 'కుటుంబ జ్ఞాపకాల సమర్పణ' : 'Family Archive Invitation'}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-[10px] text-ivory-400/70 mt-1">
                    {currentLang === 'te'
                      ? 'ఖచ్చితమైన చేరిక తేదీ లేదా చారిత్రక ఫోటోల నమోదు కొరకు ఇక్కడ క్లిక్ చేయండి.'
                      : 'To submit exact entry date or verified inception photographs, contribute to the archive.'}
                  </p>
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
