'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language, Milestone } from '@/types';
import { siteContent } from '@/data/content';
import { ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';

interface ChapterFourProps {
  currentLang: Language;
  onOpenVerificationModal: () => void;
}

export const ChapterFour: React.FC<ChapterFourProps> = ({ currentLang, onOpenVerificationModal }) => {
  const ch = siteContent.chapters.chapter4;

  return (
    <section
      id="chapter-04"
      className="relative min-h-screen w-full py-28 px-6 sm:px-12 lg:px-24 bg-charcoal-900 text-ivory-200 overflow-hidden border-t border-charcoal-800"
    >
      {/* World B Ambiance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-950 to-midnight-950" />
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-charcoal-700/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grain opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-400">
              Chapter 04
            </span>
            <div className="w-8 h-[1px] bg-gold-500/40" />
            <span className="text-xs tracking-wider text-ivory-400 uppercase font-mono">
              World B • Verified Career Timeline
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

          <p className={`mt-4 text-xs sm:text-sm text-ivory-300/80 leading-relaxed ${
            currentLang === 'te' ? 'font-telugu' : 'font-sans'
          }`}>
            {ch.intro[currentLang]}
          </p>
        </div>

        {/* Chronological Scroll-Driven Timeline */}
        <div className="relative border-l-2 border-forest-800/80 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-12">
          
          {ch.milestones.map((milestone: Milestone, index: number) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Pin Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-soil-900 border-2 border-gold-500 group-hover:scale-125 group-hover:bg-gold-400 transition-all duration-300" />

              {/* Timestamp Indicator for Large Screens */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono uppercase tracking-wider text-gold-400 block font-medium">
                  {milestone.period[currentLang]}
                </span>
                <span className="text-[10px] text-ivory-400 block tracking-tight font-serif">
                  {milestone.badge}
                </span>
              </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-charcoal-800/60 border border-charcoal-700/80 hover:border-gold-500/40 hover:bg-charcoal-800/90 transition-all duration-300 shadow-xl backdrop-blur-sm">
                
                {/* Mobile Period Tag */}
                <div className="md:hidden flex items-center space-x-2 text-xs font-mono text-gold-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{milestone.period[currentLang]}</span>
                  <span className="text-ivory-500">•</span>
                  <span className="text-ivory-400">{milestone.badge}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory-100 font-medium group-hover:text-gold-400 transition-colors">
                    {milestone.title[currentLang]}
                  </h3>
                  <span className="text-xs font-serif italic text-gold-300/80">
                    {milestone.subtitle[currentLang]}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm text-ivory-300 leading-relaxed mb-4 ${
                  currentLang === 'te' ? 'font-telugu leading-relaxed' : 'font-sans'
                }`}>
                  {milestone.description[currentLang]}
                </p>

                {/* Significance & Truth Verification Note */}
                <div className="pt-4 border-t border-charcoal-700/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
                  <div className="flex items-center space-x-1.5 text-ivory-300/90">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400/80">
                      {currentLang === 'te' ? 'ప్రాముఖ్యత:' : 'Significance:'}
                    </span>
                    <span className="italic font-serif text-ivory-300">
                      {milestone.significance[currentLang]}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5 text-[11px] text-ivory-400 bg-charcoal-900/80 px-2.5 py-1 rounded border border-charcoal-700">
                    <CheckCircle2 className="w-3 h-3 text-gold-400" />
                    <span>{milestone.verificationNote[currentLang]}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Verification Guarantee Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenVerificationModal}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-charcoal-800 border border-gold-600/30 hover:border-gold-500 hover:bg-charcoal-700 text-xs font-serif text-gold-300 transition-all shadow-lg"
          >
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>
              {currentLang === 'te'
                ? 'కాలక్రమ రికార్డుల సత్య శోధన ప్రమాణం పరిశీలించండి'
                : 'Inspect the Strict Truth & Career Timeline Protocol'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
