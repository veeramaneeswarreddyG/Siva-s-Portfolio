'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { ShieldCheck, Menu, X, Globe, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenVerificationModal: () => void;
  activeChapter: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentLang,
  onLanguageChange,
  onOpenVerificationModal,
  activeChapter,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nav = siteContent.navigation;

  return (
    <>
      {/* Top scroll progress line */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-forest-500 via-gold-500 to-gold-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Main navigation header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-soil-900/90 backdrop-blur-md border-b border-forest-800/60 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Monogram / Title */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center space-x-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
            aria-label="Return to top"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded border border-gold-500/40 bg-forest-900/60 flex items-center justify-center font-serif text-gold-400 text-xs sm:text-sm font-semibold tracking-wider group-hover:border-gold-500 transition-colors">
              SRG
            </div>
            <div className="hidden sm:block">
              <span className="block text-xs uppercase tracking-widest font-serif text-ivory-200 group-hover:text-gold-400 transition-colors">
                {currentLang === 'te' ? 'శివరామిరెడ్డి గాడికోట' : 'Sivarami Reddy Gadikota'}
              </span>
              <span className="block text-[10px] tracking-wider text-ivory-400/80 uppercase">
                {currentLang === 'te' ? 'ఎల్.ఐ.సి చీఫ్ అడ్వైజర్ • జమ్మలమడుగు' : 'LIC Chief Advisor • Jammalamadugu'}
              </span>
            </div>
          </button>

          {/* Desktop chapter quick selector */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Chapter Navigation">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-serif tracking-wider text-ivory-300 hover:text-gold-400 hover:bg-forest-900/50 border border-transparent hover:border-gold-500/30 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
                aria-expanded={dropdownOpen}
              >
                <span>{nav.tableOfContents[currentLang]}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-gold-400' : ''}`} />
              </button>

              {dropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-56 rounded-lg bg-soil-900/95 border border-forest-800 shadow-2xl py-2 backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {nav.chapters.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => scrollTo(ch.id)}
                      className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between ${
                        activeChapter === ch.id
                          ? 'text-gold-400 bg-forest-900/80 font-medium'
                          : 'text-ivory-300 hover:text-gold-300 hover:bg-forest-900/40'
                      }`}
                    >
                      <span className={currentLang === 'te' ? 'font-telugu' : 'font-sans'}>
                        {ch.label[currentLang]}
                      </span>
                      {activeChapter === ch.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick jump to key chapters */}
            <div className="flex items-center space-x-1 pl-2 border-l border-forest-800/80">
              <button
                onClick={() => scrollTo('chapter-01')}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${
                  activeChapter === 'chapter-01' ? 'text-gold-400 bg-forest-900/60' : 'text-ivory-400 hover:text-ivory-200'
                }`}
              >
                {currentLang === 'te' ? 'మూలం' : 'Roots'}
              </button>
              <button
                onClick={() => scrollTo('chapter-04')}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${
                  activeChapter === 'chapter-04' ? 'text-gold-400 bg-forest-900/60' : 'text-ivory-400 hover:text-ivory-200'
                }`}
              >
                {currentLang === 'te' ? 'ప్రస్థానం' : 'Journey'}
              </button>
              <button
                onClick={() => scrollTo('chapter-05')}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${
                  activeChapter === 'chapter-05' ? 'text-gold-400 bg-forest-900/60' : 'text-ivory-400 hover:text-ivory-200'
                }`}
              >
                {currentLang === 'te' ? 'గౌరవం' : 'Honour'}
              </button>
              <button
                onClick={() => scrollTo('chapter-07')}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${
                  activeChapter === 'chapter-07' ? 'text-gold-400 bg-forest-900/60' : 'text-ivory-400 hover:text-ivory-200'
                }`}
              >
                {currentLang === 'te' ? 'వారసత్వం' : 'Legacy'}
              </button>
            </div>
          </nav>

          {/* Right Action: Language Switcher & Archival Standards Modal Trigger */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Archival Standards Badge */}
            <button
              onClick={onOpenVerificationModal}
              className="flex items-center space-x-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs text-gold-400/90 bg-gold-950/40 border border-gold-600/30 hover:border-gold-500 hover:bg-gold-900/30 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
              title="View Archival Truth Standard & Verification Records"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span className="hidden sm:inline font-serif">
                {currentLang === 'te' ? 'సత్య ప్రమాణం' : 'Archival Truth'}
              </span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'te' : 'en')}
              className="flex items-center space-x-1.5 px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium text-ivory-200 bg-forest-900/70 border border-forest-700/60 hover:border-gold-500/60 hover:text-gold-300 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
              aria-label={`Switch to ${currentLang === 'en' ? 'Telugu' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5 text-gold-400" />
              <span className={currentLang === 'en' ? 'font-telugu text-[13px]' : 'font-sans text-xs'}>
                {nav.languageToggleLabel[currentLang]}
              </span>
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-md text-ivory-300 hover:text-gold-400 hover:bg-forest-900/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-soil-900/98 border-b border-forest-800/80 px-4 pt-3 pb-6 mt-3 space-y-2 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <p className="text-[10px] uppercase tracking-wider text-ivory-400 font-serif mb-2 px-2">
              {nav.tableOfContents[currentLang]}
            </p>
            {nav.chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => scrollTo(ch.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-between ${
                  activeChapter === ch.id
                    ? 'text-gold-400 bg-forest-900/80 font-medium'
                    : 'text-ivory-300 hover:text-gold-300 hover:bg-forest-900/40'
                }`}
              >
                <span className={currentLang === 'te' ? 'font-telugu' : 'font-sans'}>
                  {ch.label[currentLang]}
                </span>
                {activeChapter === ch.id && (
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-forest-800/80 flex items-center justify-between px-2">
              <span className="text-xs text-ivory-400">
                {currentLang === 'te' ? 'అధికారిక రికార్డు' : 'Official Legacy Archive'}
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVerificationModal();
                }}
                className="text-xs text-gold-400 flex items-center space-x-1 underline"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentLang === 'te' ? 'ధృవీకరణ వివరాలు' : 'Verification Status'}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
