'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { Award, Gem, CheckCircle2 } from 'lucide-react';
import { RangoliMotif } from './RangoliMotif';

interface RecognitionsShowcaseProps {
  currentLang: Language;
  onOpenVerificationModal?: () => void;
}

export const RecognitionsShowcase: React.FC<RecognitionsShowcaseProps> = ({
  currentLang,
}) => {
  const items = siteContent.chapters.chapter5.recognitions;

  return (
    <section id="recognitions" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0]/40 backdrop-blur-[1px] relative overflow-hidden select-none">
      
      {/* Traditional Minimal Line-Art Rangoli Corner Motifs */}
      <div className="absolute top-4 left-4 pointer-events-none hidden sm:block">
        <RangoliMotif variant="corner" size={110} color="#F59E0B" opacity={0.15} />
      </div>
      <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:block rotate-180">
        <RangoliMotif variant="corner" size={110} color="#F59E0B" opacity={0.15} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Minimal Section Header (No Sparkles, Prestigious & Clean) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
            <span className="w-2 h-2 rounded-full bg-amberGold-500" />
            <span className={currentLang === 'te' ? 'font-telugu' : ''}>
              {currentLang === 'te' ? 'అధికారిక వృత్తి రికార్డు' : 'Official Advisory Record'}
            </span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl text-charcoal-950 tracking-tight ${
            currentLang === 'te' ? 'font-telugu-heading font-normal tracking-normal py-0.5' : 'font-sans font-black'
          }`}>
            {currentLang === 'te' ? 'వృత్తి గౌరవాలు & గుర్తింపులు' : 'Honours & Distinctions'}
          </h2>

          {/* Minimal Traditional Symmetrical Rangoli Divider */}
          <RangoliMotif variant="divider" color="#F59E0B" opacity={0.3} className="my-3" />

          <p className={`mt-2 text-sm sm:text-base text-charcoal-600 font-medium max-w-xl mx-auto leading-relaxed ${
            currentLang === 'te' ? 'font-telugu' : ''
          }`}>
            {currentLang === 'te'
              ? 'రెండు దశాబ్దాల సేవా ప్రస్థానం: ఏజెంట్ పునాది, సమాఖ్య అనుబంధం, చీఫ్ అడ్వైజర్ నాయకత్వం, మరియు 3 సార్లు డైమండ్ బ్రిగేడ్ క్లబ్ విశిష్ట గౌరవం.'
              : 'The documented progression of two decades: Agent foundation, Federation solidarity, Chief Advisory leadership, and 3-Time Diamond Brigade Club distinction.'}
          </p>
        </div>

        {/* Cards: Horizontal Snap-Swipe on Mobile, Grid on Tablet/Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {items.map((item, idx) => {
            const isDiamond = item.id === 'rec-diamond-brigade';
            return (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group apple-press relative p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover-lift snap-center flex-shrink-0 w-[82vw] xs:w-[300px] sm:w-auto ${
                  isDiamond
                    ? 'bg-charcoal-950/95 backdrop-blur-md text-white border-2 border-amberGold-500 shadow-xl'
                    : 'bg-white/90 backdrop-blur-md hover:bg-cream-100 text-charcoal-900 border border-cream-400 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${
                      isDiamond ? 'text-amberGold-400' : 'text-amberGold-600'
                    } ${currentLang === 'te' ? 'font-telugu text-[10px]' : ''}`}>
                      {item.category[currentLang]}
                    </span>

                    {isDiamond ? (
                      <div className="w-8 h-8 rounded-full bg-amberGold-500/20 text-amberGold-400 flex items-center justify-center">
                        <Gem className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-cream-300 text-charcoal-700 flex items-center justify-center">
                        <Award className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-extrabold mb-1 tracking-tight ${
                    isDiamond ? 'text-white' : 'text-charcoal-950'
                  } ${currentLang === 'te' ? 'font-telugu text-xl' : ''}`}>
                    {item.designationOrAward}
                  </h3>

                  <p className={`text-xs font-semibold mb-3 ${
                    isDiamond ? 'text-amberGold-300' : 'text-charcoal-600'
                  } ${currentLang === 'te' ? 'font-telugu' : ''}`}>
                    {item.context[currentLang]}
                  </p>

                  <p className={`text-xs leading-relaxed ${
                    isDiamond ? 'text-cream-300/85' : 'text-charcoal-700'
                  } ${currentLang === 'te' ? 'font-telugu' : ''}`}>
                    {item.description[currentLang]}
                  </p>
                </div>

                {/* Card Bottom: Clean Status Indicator */}
                <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
                  isDiamond ? 'border-charcoal-800' : 'border-cream-300'
                }`}>
                  <span className={`text-[11px] font-semibold flex items-center space-x-1.5 ${
                    isDiamond ? 'text-amberGold-400' : 'text-charcoal-600'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                      {currentLang === 'te' ? 'అధికారిక హోదా' : 'Official Standing'}
                    </span>
                  </span>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isDiamond ? 'bg-charcoal-900 text-amberGold-400' : 'bg-cream-300 text-charcoal-600'
                  }`}>
                    Kadapa Div.
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden flex items-center justify-center space-x-2 text-[11px] font-bold text-[#8C857B] mt-4">
          <span className="text-[#F59E0B] animate-pulse">‹</span>
          <span>{currentLang === 'te' ? 'హోదాలు చూడటానికి స్వైప్ చేయండి' : 'Swipe horizontally to view all distinctions'}</span>
          <span className="text-[#F59E0B] animate-pulse">›</span>
        </div>

      </div>
    </section>
  );
};
