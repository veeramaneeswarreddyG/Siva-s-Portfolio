'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { Award, ShieldCheck, Heart } from 'lucide-react';

interface ChapterSevenProps {
  currentLang: Language;
  onOpenVerificationModal: () => void;
}

export const ChapterSeven: React.FC<ChapterSevenProps> = ({ currentLang, onOpenVerificationModal }) => {
  const ch = siteContent.chapters.chapter7;

  return (
    <section
      id="chapter-07"
      className="relative min-h-screen w-full py-32 px-6 sm:px-12 lg:px-24 bg-forest-950 text-ivory-200 flex flex-col justify-between overflow-hidden border-t border-forest-900"
    >
      {/* Return to the Roots Landscape Graphic (Full Circle) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-soil-900 via-forest-950 to-[#0a100c]" />

        {/* Farmland Horizon Graphic (Quiet Twilight Sky) */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[55vh] opacity-30 mix-blend-screen"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 450 Q 240 380 480 410 T 960 390 T 1440 430 L 1440 600 L 0 600 Z"
            fill="#182A22"
          />
          <path
            d="M0 490 Q 360 440 720 480 T 1440 460 L 1440 600 L 0 600 Z"
            fill="#122018"
          />
          <path
            d="M0 540 C 300 520, 600 550, 900 530 C 1200 510, 1350 540, 1440 535 L 1440 600 L 0 600 Z"
            fill="#100c08"
          />
        </svg>

        <div className="absolute inset-0 bg-vignette-radial opacity-80" />
        <div className="absolute inset-0 bg-grain opacity-35" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center my-auto py-12">
        {/* Chapter marker */}
        <div className="inline-flex items-center space-x-3 mb-8">
          <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-400">
            Chapter 07
          </span>
          <div className="w-8 h-[1px] bg-gold-500/40" />
          <span className="text-xs tracking-wider text-ivory-400 uppercase font-mono">
            {ch.title[currentLang]}
          </span>
        </div>

        {/* Central Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2 }}
          className="mb-14"
        >
          <blockquote className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory-100 font-light leading-snug tracking-wide italic ${
            currentLang === 'te' ? 'font-telugu leading-relaxed' : ''
          }`}>
            {ch.closingStatement[currentLang]}
          </blockquote>
        </motion.div>

        {/* Dignified Monogram & Subject Identity Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="p-8 sm:p-12 rounded-2xl bg-forest-900/40 border border-gold-500/30 backdrop-blur-md max-w-2xl mx-auto shadow-2xl space-y-6"
        >
          {/* Authentic Monogram Emblem */}
          <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold-500/60 bg-soil-900/90 flex items-center justify-center font-serif text-gold-400 text-lg font-semibold tracking-widest shadow-inner">
            SRG
          </div>

          <div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.15em] text-ivory-100 uppercase">
              {ch.subjectName[currentLang]}
            </h3>
            
            <p className="mt-2 text-xs sm:text-sm font-sans tracking-[0.25em] text-gold-400 uppercase font-medium">
              {ch.designation[currentLang]}
            </p>
            
            <p className="mt-1 text-xs font-serif tracking-[0.2em] text-ivory-400 uppercase">
              {ch.location[currentLang]}
            </p>
          </div>

          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent mx-auto" />

          <p className={`text-xs sm:text-sm text-ivory-300/80 leading-relaxed max-w-lg mx-auto ${
            currentLang === 'te' ? 'font-telugu' : 'font-sans'
          }`}>
            {ch.tributeNote[currentLang]}
          </p>

          <div className="pt-4 flex items-center justify-center space-x-4">
            <button
              onClick={onOpenVerificationModal}
              className="inline-flex items-center space-x-1.5 text-xs text-gold-400 hover:text-gold-300 font-serif underline underline-offset-4 transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>
                {currentLang === 'te' ? 'ఆర్కైవల్ రికార్డులను పరిశీలించండి' : 'Archival Verification Protocol'}
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer Colophon */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full pt-16 pb-8 border-t border-forest-800/60 text-center text-xs text-ivory-400/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-serif tracking-wider text-ivory-300">
            © {new Date().getFullYear()} Gadikota Sivarami Reddy Digital Archive
          </span>
          <span className="block text-[11px] text-ivory-500 mt-0.5">
            Jammalamadugu, Andhra Pradesh, India
          </span>
        </div>

        <div className="flex items-center space-x-2 text-[11px] text-gold-400/80 font-mono">
          <span>Honour is Earned. Legacy is Left Behind.</span>
        </div>
      </footer>
    </section>
  );
};
