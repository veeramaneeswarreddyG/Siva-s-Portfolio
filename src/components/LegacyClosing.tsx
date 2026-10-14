'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { ShieldCheck, ArrowRight, Heart } from 'lucide-react';

interface LegacyClosingProps {
  currentLang: Language;
  onOpenVerificationModal: () => void;
}

export const LegacyClosing: React.FC<LegacyClosingProps> = ({
  currentLang,
  onOpenVerificationModal,
}) => {
  const ch = siteContent.chapters.chapter7;

  return (
    <footer id="legacy" className="bg-charcoal-950 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amberGold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amberGold-400 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-amberGold-500" />
          <span>{currentLang === 'te' ? 'శాశ్వత వారసత్వం' : 'The Enduring Legacy'}</span>
        </div>

        {/* Closing Statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-12 max-w-4xl mx-auto leading-tight ${
            currentLang === 'te' ? 'font-telugu leading-relaxed' : ''
          }`}
        >
          {ch.closingStatement[currentLang]}
        </motion.blockquote>

        {/* Identity Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 sm:p-12 rounded-3xl bg-charcoal-900 border border-charcoal-800 shadow-2xl max-w-2xl mx-auto mb-16 space-y-6"
        >
          {/* Circular Monogram */}
          <div className="w-16 h-16 mx-auto rounded-full bg-amberGold-500 text-charcoal-950 flex items-center justify-center font-bold text-xl shadow-lg">
            SRG
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
              {ch.subjectName[currentLang]}
            </h3>
            <p className="text-sm font-bold text-amberGold-400 uppercase tracking-widest mt-1">
              {ch.designation[currentLang]}
            </p>
            <p className="text-xs text-cream-400/80 uppercase tracking-wider mt-0.5">
              {ch.location[currentLang]}
            </p>
          </div>

          <div className="w-24 h-[1px] bg-charcoal-700 mx-auto" />

          <p className={`text-xs sm:text-sm text-cream-300/80 leading-relaxed max-w-lg mx-auto ${
            currentLang === 'te' ? 'font-telugu' : ''
          }`}>
            {ch.tributeNote[currentLang]}
          </p>

          <div>
            <button
              onClick={onOpenVerificationModal}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white hover:bg-cream-100 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover-lift button-press transition-all shadow-md"
            >
              <ShieldCheck className="w-4 h-4 text-amberGold-600" />
              <span>
                {currentLang === 'te' ? 'సత్య ప్రమాణాలు & రికార్డులు' : 'Archival Verification Protocol'}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Colophon */}
        <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-500 gap-4">
          <p>
            © {new Date().getFullYear()} Sivarami Reddy Gadikota Digital Legacy Archive.
          </p>
          <p className="font-semibold text-amberGold-400/90">
            Honour is Earned. Legacy is Left Behind.
          </p>
        </div>

      </div>
    </footer>
  );
};
