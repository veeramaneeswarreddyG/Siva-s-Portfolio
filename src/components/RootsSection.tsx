'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { Clock, Shield, Award, Mountain, Sprout, Sparkles } from 'lucide-react';

interface RootsSectionProps {
  currentLang: Language;
}

export const RootsSection: React.FC<RootsSectionProps> = ({ currentLang }) => {
  const ch1 = siteContent.chapters.chapter1;
  const ch2 = siteContent.chapters.chapter2;
  const icons = [Clock, Award, Shield, Mountain];

  return (
    <section id="roots" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-100 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amberGold-500" />
            <span>{currentLang === 'te' ? 'మూలాలు & శ్రమ సంస్కృతి' : 'The Agricultural Roots'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-950 tracking-tight">
            {currentLang === 'te' ? (
              <>
                రెండు ఎకరాల నేల నుండి మొదలైన <span className="text-amberGold-500">విలువైన ప్రయాణం</span>
              </>
            ) : (
              <>
                From Two Acres of Soil to <span className="text-amberGold-500">Lasting Significance</span>
              </>
            )}
            <Sparkles className="inline-block w-6 h-6 ml-2 text-amberGold-500 align-baseline" />
          </h2>

          <p className="mt-3 text-sm sm:text-base text-charcoal-600 font-medium max-w-xl mx-auto">
            {ch1.tagline[currentLang]}
          </p>
        </div>

        {/* Narrative Box with Editorial Quote */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-cream-400 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amberGold-600">
                <Sprout className="w-4 h-4" />
                <span>{currentLang === 'te' ? 'నేల నేర్పిన జీవన సత్యం' : 'The Lessons of the Land'}</span>
              </div>

              <div className={`space-y-3 text-charcoal-700 text-sm sm:text-base leading-relaxed ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {ch1.body[currentLang].map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-cream-200 border border-cream-300 text-center flex flex-col justify-center items-center">
              <span className="text-4xl font-serif text-amberGold-500 select-none leading-none mb-2">
                “
              </span>
              <p className={`font-serif italic text-base sm:text-lg text-charcoal-900 font-medium ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {ch1.quote[currentLang]}
              </p>
              <div className="w-12 h-1 bg-amberGold-500 rounded-full mt-4" />
            </div>

          </div>
        </div>

        {/* 4 Virtues Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ch2.virtues.map((v, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-cream-400 shadow-sm hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cream-200 text-amberGold-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-charcoal-950 mb-2">
                    {v.title[currentLang]}
                  </h3>

                  <p className={`text-xs sm:text-sm text-charcoal-600 leading-relaxed ${
                    currentLang === 'te' ? 'font-telugu' : ''
                  }`}>
                    {v.desc[currentLang]}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-cream-300 flex items-center justify-between text-[11px] font-mono text-charcoal-500 uppercase">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amberGold-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
