'use client';

import React, { useEffect } from 'react';
import { RecognitionItem, Language } from '@/types';
import { X, Award, ShieldCheck, FileText, CheckCircle, ExternalLink } from 'lucide-react';

interface CertificateLightboxProps {
  item: RecognitionItem | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  item,
  isOpen,
  onClose,
  currentLang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-midnight-950/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-midnight-900 border border-gold-500/50 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-ivory-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Archival Gold Borders */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-gold-400/50" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-gold-400/50" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-gold-400/50" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-gold-400/50" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-ivory-400 hover:text-gold-400 hover:bg-midnight-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center space-x-2 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
          <Award className="w-4 h-4" />
          <span>{item.category[currentLang]}</span>
        </div>

        {/* Designation Name */}
        <h3
          id="certificate-modal-title"
          className="font-serif text-2xl sm:text-3xl text-ivory-100 font-semibold mb-2"
        >
          {item.designationOrAward}
        </h3>

        <p className="text-xs sm:text-sm font-serif italic text-gold-300/80 mb-6">
          {item.context[currentLang]}
        </p>

        {/* Simulated Archival Document Parchment Preview */}
        <div className="relative p-6 sm:p-8 rounded-xl bg-midnight-950/80 border border-gold-600/30 my-6 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full border border-gold-500/40 bg-gold-950/40 flex items-center justify-center text-gold-400">
            <FileText className="w-8 h-8" />
          </div>

          <div>
            <p className="font-serif text-sm uppercase tracking-wider text-gold-300">
              {currentLang === 'te' ? 'అధికారిక రికార్డు పత్రం' : 'Official Archival Record'}
            </p>
            <p className="text-xs text-ivory-400/80 mt-1 max-w-md mx-auto">
              {item.certificatePlaceholderText?.[currentLang] ||
                (currentLang === 'te'
                  ? 'జమ్మలమడుగు కార్యాలయ రికార్డుల్లో ధృవీకరించబడిన వివరాలు.'
                  : 'Documented in the official historical registers of Jammalamadugu.')}
            </p>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-900/60 border border-forest-600/40 text-[11px] text-ivory-300">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>{item.verificationDetails[currentLang]}</span>
          </div>
        </div>

        {/* Narrative Description */}
        <div className="space-y-4">
          <p className={`text-xs sm:text-sm text-ivory-300 leading-relaxed ${
            currentLang === 'te' ? 'font-telugu' : 'font-sans'
          }`}>
            {item.description[currentLang]}
          </p>
        </div>

        {/* Strict Truth Disclaimer Footnote */}
        <div className="mt-8 pt-4 border-t border-midnight-800 flex items-center justify-between text-[11px] text-ivory-400/70">
          <span className="font-mono">Verification: Strict Truth Policy</span>
          <button
            onClick={onClose}
            className="text-gold-400 hover:text-gold-300 font-serif tracking-wider uppercase text-xs"
          >
            {currentLang === 'te' ? 'ముగించు' : 'Dismiss'}
          </button>
        </div>
      </div>
    </div>
  );
};
