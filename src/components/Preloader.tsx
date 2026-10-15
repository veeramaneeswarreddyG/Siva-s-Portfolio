'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2.1s duration for one full wave cycle before smooth cinematic exit
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0C0B0A] select-none pointer-events-auto overflow-hidden"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,rgba(12,11,10,0.98)_70%)] pointer-events-none" />

          {/* Center Screen: Loader Characters Track */}
          <div className="relative z-10 flex items-center justify-center pl-[0.45em]">
            <span className="loader-char l-1">L</span>
            <span className="loader-char l-2">O</span>
            <span className="loader-char l-3">A</span>
            <span className="loader-char l-4">D</span>
            <span className="loader-char l-5">I</span>
            <span className="loader-char l-6">N</span>
            <span className="loader-char l-7">G</span>
            <span className="loader-char l-8">.</span>
            <span className="loader-char l-9">.</span>
          </div>

          {/* Absolute Very Bottom: Single-Line Name & Designation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
            className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 flex flex-col items-center justify-center px-4 pointer-events-none"
          >
            {/* Subtle Gold Hairline Accent */}
            <div className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B]/50 to-transparent mb-3" />

            {/* Name on ONE Single Line */}
            <h2 className="font-serif text-xs sm:text-sm md:text-base font-bold text-[#FAF5EB] tracking-[0.25em] sm:tracking-[0.42em] whitespace-nowrap uppercase text-center pl-[0.25em] sm:pl-[0.42em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              GADIKOTA SIVARAMI REDDY
            </h2>

            {/* Designation Directly Below It */}
            <p className="font-mono text-[9px] sm:text-[11px] text-[#C19A55] tracking-[0.18em] sm:tracking-[0.32em] whitespace-nowrap uppercase text-center pl-[0.18em] sm:pl-[0.32em] mt-2">
              LIC Chief Life Insurance Advisor • Jammalamadugu
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
