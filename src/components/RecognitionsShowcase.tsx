'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Language, RecognitionItem } from '@/types';
import { siteContent } from '@/data/content';
import { CertificateLightbox } from './CertificateLightbox';
import { Award, Gem, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

interface RecognitionsShowcaseProps {
  currentLang: Language;
  onOpenVerificationModal: () => void;
}

export const RecognitionsShowcase: React.FC<RecognitionsShowcaseProps> = ({
  currentLang,
  onOpenVerificationModal,
}) => {
  const [selectedItem, setSelectedItem] = useState<RecognitionItem | null>(null);
  const items = siteContent.chapters.chapter5.recognitions;

  return (
    <>
      <section id="recognitions" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-200 relative">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amberGold-500" />
              <span>{currentLang === 'te' ? 'కృషితో సంపాదించిన గౌరవం' : 'Honour Earned'}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-950 tracking-tight">
              {currentLang === 'te' ? (
                <>
                  గుర్తింపుల వెనుక ఉన్న <span className="text-amberGold-500">నిజాయితీ & శ్రమ</span>
                </>
              ) : (
                <>
                  Earned Recognition & <span className="text-amberGold-500">Documented Merit</span>
                </>
              )}
              <Sparkles className="inline-block w-6 h-6 ml-2 text-amberGold-500 align-baseline" />
            </h2>

            <p className="mt-3 text-sm sm:text-base text-charcoal-600 font-medium max-w-xl mx-auto">
              {currentLang === 'te'
                ? 'గౌరవం అనేది కోరుకుంటే రాదు; ఏళ్ల తరబడి కుటుంబాలకు అందించిన నమ్మకానికి ఇది లభించిన ప్రతిఫలం.'
                : 'Honour is not an ornament. It is the visible evidence of promises faithfully kept over two decades.'}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => {
              const isDiamond = item.id === 'rec-diamond-brigade';
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`group relative p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover-lift ${
                    isDiamond
                      ? 'bg-charcoal-950 text-white border-2 border-amberGold-500 shadow-xl'
                      : 'bg-white hover:bg-cream-100 text-charcoal-900 border border-cream-400 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Top Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${
                        isDiamond ? 'text-amberGold-400' : 'text-amberGold-600'
                      }`}>
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
                    }`}>
                      {item.designationOrAward}
                    </h3>

                    <p className={`text-xs font-semibold mb-3 ${
                      isDiamond ? 'text-amberGold-300' : 'text-charcoal-600'
                    }`}>
                      {item.context[currentLang]}
                    </p>

                    <p className={`text-xs leading-relaxed ${
                      isDiamond ? 'text-cream-300/85' : 'text-charcoal-700'
                    } ${currentLang === 'te' ? 'font-telugu' : ''}`}>
                      {item.description[currentLang]}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
                    isDiamond ? 'border-charcoal-800' : 'border-cream-300'
                  }`}>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className={`text-xs font-bold flex items-center space-x-1.5 transition-colors ${
                        isDiamond
                          ? 'text-amberGold-400 hover:text-amberGold-300'
                          : 'text-charcoal-950 hover:text-amberGold-600'
                      }`}
                    >
                      <span>{currentLang === 'te' ? 'పత్రం పరిశీలించండి' : 'Inspect Citation'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isDiamond ? 'bg-charcoal-900 text-amberGold-400' : 'bg-cream-300 text-charcoal-600'
                    }`}>
                      Verified
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Verification Protocol Callout */}
          <div className="mt-12 text-center">
            <button
              onClick={onOpenVerificationModal}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-cream-400 shadow-sm hover:shadow text-xs font-bold text-charcoal-900 hover-lift button-press transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-amberGold-600" />
              <span>
                {currentLang === 'te'
                  ? 'కల్పిత సమాచారం రహిత సత్య ప్రమాణం పరిశీలించండి'
                  : 'Review Non-Fabrication Truth Standards'}
              </span>
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
