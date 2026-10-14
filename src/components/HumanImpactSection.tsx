'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { Lock, HeartHandshake, Users2, ShieldAlert } from 'lucide-react';

interface HumanImpactSectionProps {
  currentLang: Language;
}

export const HumanImpactSection: React.FC<HumanImpactSectionProps> = ({ currentLang }) => {
  const ch = siteContent.chapters.chapter6;
  const icons = [Lock, HeartHandshake, Users2];

  return (
    <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-100 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amberGold-500" />
            <span>{currentLang === 'te' ? 'మానవీయ స్పర్శ & సేవా నిరతి' : 'The Human Significance'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-950 tracking-tight">
            {currentLang === 'te' ? (
              <>
                హోదాల కంటే మిన్నగా... <span className="text-amberGold-500">మనుషుల బంధాలు</span>
              </>
            ) : (
              <>
                Beyond Titles, <span className="text-amberGold-500">There Are People</span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-charcoal-600 font-medium">
            {ch.tagline[currentLang]}
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ch.principles.map((p, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-2xl bg-white border border-cream-400 shadow-sm hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-cream-200 text-amberGold-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-charcoal-950 mb-3">
                  {p.title[currentLang]}
                </h3>

                <p className={`text-xs sm:text-sm text-charcoal-600 leading-relaxed ${
                  currentLang === 'te' ? 'font-telugu' : ''
                }`}>
                  {p.description[currentLang]}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Non-Fabrication & Privacy Notice */}
        <div className="p-8 rounded-2xl bg-cream-200 border border-cream-400 text-center max-w-4xl mx-auto space-y-4">
          <p className={`text-sm text-charcoal-700 leading-relaxed font-medium ${
            currentLang === 'te' ? 'font-telugu' : ''
          }`}>
            {ch.restrainedReflection[currentLang]}
          </p>

          <div className="pt-4 border-t border-cream-300 flex items-center justify-center space-x-2 text-xs text-charcoal-500">
            <ShieldAlert className="w-4 h-4 text-amberGold-600" />
            <span>{ch.confidentialityNotice[currentLang]}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
