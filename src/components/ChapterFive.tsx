'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Language, RecognitionItem } from '@/types';
import { siteContent } from '@/data/content';
import { CertificateLightbox } from './CertificateLightbox';
import { Award, ShieldCheck, Gem, FileSearch, ArrowRight } from 'lucide-react';

interface ChapterFiveProps {
  currentLang: Language;
  onOpenVerificationModal: () => void;
}

export const ChapterFive: React.FC<ChapterFiveProps> = ({ currentLang, onOpenVerificationModal }) => {
  const ch = siteContent.chapters.chapter5;
  const [selectedItem, setSelectedItem] = useState<RecognitionItem | null>(null);

  const diamondItem = ch.recognitions.find((r) => r.id === 'rec-diamond-brigade');

  return (
    <>
      <section
        id="chapter-05"
        className="relative min-h-screen w-full py-28 px-6 sm:px-12 lg:px-24 bg-midnight-950 text-ivory-200 overflow-hidden border-t border-midnight-800"
      >
        {/* World C Ambiance: Midnight Navy & Antique Gold Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-[#141d2a] to-midnight-900" />
          <div className="absolute right-10 top-20 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-3xl" />
          <div className="absolute left-10 bottom-20 w-[500px] h-[500px] bg-midnight-700/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-grain opacity-25" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Chapter Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-400">
                Chapter 05
              </span>
              <div className="w-8 h-[1px] bg-gold-500/40" />
              <span className="text-xs tracking-wider text-ivory-400 uppercase font-mono">
                World C • The Recognition Archive
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

          {/* DEDICATED CENTERPIECE: #3 Diamond Brigade */}
          {diamondItem && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9 }}
              className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-midnight-900 via-midnight-800 to-midnight-900 border-2 border-gold-500/40 shadow-2xl mb-16 overflow-hidden"
            >
              {/* Subtle gold ribbon top-right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-shimmer opacity-30 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-950/60 border border-gold-500/40 text-gold-400 text-xs font-mono uppercase tracking-widest">
                    <Gem className="w-3.5 h-3.5 text-gold-400" />
                    <span>Featured Milestone of Earned Distinction</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-semibold tracking-wide">
                    {diamondItem.designationOrAward}
                  </h3>

                  <p className="text-sm font-serif italic text-gold-300/90">
                    {ch.specialHonorTitle[currentLang]}
                  </p>

                  <p className={`text-xs sm:text-sm text-ivory-300/90 leading-relaxed max-w-2xl ${
                    currentLang === 'te' ? 'font-telugu leading-relaxed' : 'font-sans'
                  }`}>
                    {ch.specialHonorDesc[currentLang]}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-4">
                  <button
                    onClick={() => setSelectedItem(diamondItem)}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gold-500 text-soil-900 hover:bg-gold-400 font-serif text-xs font-semibold tracking-wider uppercase transition-all shadow-xl hover:shadow-gold-500/20"
                  >
                    <FileSearch className="w-4 h-4" />
                    <span>{siteContent.archiveModal.viewCertificate[currentLang]}</span>
                  </button>

                  <span className="text-[11px] text-ivory-400 flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                    <span>Verified Milestone in Jammalamadugu</span>
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid of Verified Recognitions (Agent, LIAFI, CLIA) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {ch.recognitions
              .filter((r) => r.id !== 'rec-diamond-brigade')
              .map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className="group relative p-7 rounded-xl bg-midnight-900/60 border border-midnight-700/80 hover:border-gold-500/40 hover:bg-midnight-900/90 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Category */}
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-gold-400/90 mb-4">
                      <span>{item.category[currentLang]}</span>
                      <Award className="w-4 h-4 text-gold-500/70 group-hover:text-gold-400" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl text-ivory-100 font-medium tracking-wide mb-2 group-hover:text-gold-400 transition-colors">
                      {item.designationOrAward}
                    </h3>

                    <p className="text-xs font-serif italic text-gold-300/75 mb-4">
                      {item.context[currentLang]}
                    </p>

                    <p className={`text-xs sm:text-sm text-ivory-300/80 leading-relaxed mb-6 ${
                      currentLang === 'te' ? 'font-telugu' : 'font-sans'
                    }`}>
                      {item.description[currentLang]}
                    </p>
                  </div>

                  {/* Card Footer: Inspection Trigger */}
                  <div className="pt-4 border-t border-midnight-800 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="text-xs text-gold-400 hover:text-gold-300 font-serif flex items-center space-x-1.5 focus-visible:outline-none focus-visible:underline"
                    >
                      <span>{currentLang === 'te' ? 'వివరాలు చూడండి' : 'Inspect Citation'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <span className="text-[10px] text-ivory-500 font-mono">
                      Verified
                    </span>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Archival Truth Assurance Footer */}
          <div className="p-6 rounded-xl bg-midnight-900/40 border border-midnight-800 text-center max-w-3xl mx-auto space-y-2">
            <p className="text-xs text-ivory-400">
              {currentLang === 'te'
                ? 'రికార్డుల సూచన: ఈ గుర్తింపులు మరియు హోదాలు అధికారిక రికార్డులలో ఉన్న విధంగా యథాతథంగా ప్రచురించబడ్డాయి. అదనపు ప్రచారం లేదా కల్పిత సమాచారం జోడించబడలేదు.'
                : 'Archival Note: Titles and honors are preserved verbatim from verified records without manufactured seals, corporate embellishments, or speculative awards.'}
            </p>
            <button
              onClick={onOpenVerificationModal}
              className="text-xs text-gold-400 underline hover:text-gold-300 font-serif"
            >
              {currentLang === 'te' ? 'ఆర్కైవల్ వెరిఫికేషన్ విధానం' : 'Read Full Archival Policy'}
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox for Selected Citation */}
      <CertificateLightbox
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        currentLang={currentLang}
      />
    </>
  );
};
