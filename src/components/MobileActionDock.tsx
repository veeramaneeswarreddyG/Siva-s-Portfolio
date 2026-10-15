'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types';
import { Phone, MessageCircle, Globe, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileActionDockProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const MobileActionDock: React.FC<MobileActionDockProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling past the hero (e.g. 260px)
      if (window.scrollY > 260) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = currentLang === 'te'
    ? 'నమస్తే శివరామిరెడ్డి గారు, నేను ఎల్.ఐ.సి పాలసీ మరియు ఆర్థిక భద్రత సలహా కొరకు మిమ్మల్ని సంప్రదించాలనుకుంటున్నాను.'
    : 'Hello Sivarami Reddy garu, I would like to consult with you regarding LIC policies and financial security advisory.';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed bottom-4 inset-x-4 z-40 md:hidden pointer-events-auto"
        >
          <div className="relative max-w-md mx-auto bg-[#181816]/90 backdrop-blur-2xl border border-white/20 rounded-full p-2 shadow-[0_16px_45px_rgba(0,0,0,0.45)] flex items-center justify-between before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none">
            
            {/* 1. Direct Call CTA Button (Radiant Apple Pill) */}
            <a
              href="tel:8919358526"
              className="apple-press relative z-10 flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-amber-400 via-[#F59E0B] to-amber-500 text-[#1E1E1E] font-black text-xs shadow-[0_4px_16px_rgba(245,158,11,0.35)] active:scale-95 transition-transform"
              aria-label="Call Sivarami Reddy directly"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E1E1E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1E1E1E]" />
              </span>
              <Phone className="w-3.5 h-3.5 fill-[#1E1E1E]" />
              <span className={`whitespace-nowrap font-bold ${currentLang === 'te' ? 'font-telugu' : ''}`}>
                {currentLang === 'te' ? 'నేరుగా కాల్' : 'Call Advisor'}
              </span>
            </a>

            {/* 2. WhatsApp Direct Advisory */}
            <a
              href={`https://wa.me/918919358526?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-press relative z-10 p-2.5 mx-1 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center active:scale-90 transition-transform"
              aria-label="Send WhatsApp Message"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </a>

            {/* 3. Language Quick Switch */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'te' : 'en')}
              className="apple-press relative z-10 p-2.5 mx-1 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center active:scale-90 transition-transform font-bold text-xs"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#F59E0B] mr-1" />
              <span className={currentLang === 'en' ? 'font-telugu text-[11px]' : 'text-[11px]'}>
                {currentLang === 'en' ? 'తెలుగు' : 'EN'}
              </span>
            </button>

            {/* 4. Scroll To Top */}
            <button
              onClick={scrollToTop}
              className="apple-press relative z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center active:scale-90 transition-transform"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4 text-[#C8C5BD]" />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
