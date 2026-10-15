'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant minimum duration of 2.1s so the entire letter wave finishes one full cinematic cycle
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C0B0A] select-none pointer-events-auto overflow-hidden"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,rgba(12,11,10,0.98)_70%)] pointer-events-none" />

          {/* Loader Characters Track */}
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

          {/* Cinematic Name & Honorific Signature at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
            className="relative z-10 flex flex-col items-center mt-10 sm:mt-12 space-y-3 px-4 max-w-lg text-center"
          >
            {/* Golden Divider with Floating Diamond */}
            <div className="flex items-center space-x-3 w-48 sm:w-64 opacity-80">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B]/60 to-transparent" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B]/60 to-transparent" />
            </div>

            {/* Name: GADIKOTA SIVARAMI REDDY with generous cinematic letter-spacing */}
            <h2 className="font-serif text-sm sm:text-base md:text-lg font-bold text-[#FAF5EB] tracking-[0.35em] sm:tracking-[0.55em] uppercase text-center pl-[0.35em] sm:pl-[0.55em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              GADIKOTA SIVARAMI REDDY
            </h2>

            {/* Designation & Location with matching letter spacing */}
            <p className="font-mono text-[9px] sm:text-[10px] text-[#C19A55] tracking-[0.25em] sm:tracking-[0.4em] uppercase text-center pl-[0.25em] sm:pl-[0.4em]">
              LIC Chief Life Insurance Advisor • Jammalamadugu
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
