'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Language } from '@/types';
import { Globe, Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenVerificationModal?: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeSection,
}) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Ultra-smooth 60/120fps scroll listener with requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          if (currentY < 40) {
            setIsShrunk(false);
          } else if (currentY > lastScrollY.current + 8) {
            setIsShrunk(true);
          } else if (currentY < lastScrollY.current - 8) {
            setIsShrunk(false);
          }

          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: { en: 'Home', te: 'హోమ్' } },
    { id: 'roots', label: { en: 'LIC Story', te: 'ఎల్.ఐ.సి కథ' } },
    { id: 'milestones', label: { en: 'Q&A', te: 'సందేహాలు' } },
    { id: 'about', label: { en: 'About', te: 'పరిచయం' } },
    { id: 'recognitions', label: { en: 'Honours', te: 'గౌరవాలు' } },
    { id: 'reach-out', label: { en: 'Reach Out', te: 'సంప్రదించండి' } },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-2.5 sm:py-3.5 pointer-events-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center pointer-events-auto">
        
        {/* Liquid Glass Capsule with Snappy Smooth Transitions */}
        <div
          className={`relative flex items-center justify-between rounded-full backdrop-blur-2xl border transition-all duration-200 ease-out shadow-[0_8px_30px_rgb(0,0,0,0.06)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/60 before:to-transparent before:pointer-events-none ${
            isShrunk
              ? 'w-auto px-3 py-1.5 bg-white/75 border-white/80 shadow-md'
              : 'w-full px-4 sm:px-6 py-2 bg-white/65 border-white/60'
          }`}
        >
          
          {/* Logo / Monogram (Always visible) */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center space-x-2 group focus-visible:outline-none flex-shrink-0 relative z-10"
            aria-label="Return to top"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F59E0B] text-[#1E1E1E] flex items-center justify-center font-black text-xs shadow-sm group-hover:scale-105 transition-transform">
              SRG
            </div>
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-[#1E1E1E] font-sans group-hover:text-amber-600 transition-colors">
              {currentLang === 'te' ? 'శివరామి' : 'Sivarami'}
              <span className="text-[#F59E0B]">.</span>
            </span>
          </button>

          {/* Center Links (Fades & collapses crisply in 200ms without stutter) */}
          <div
            className={`transition-all duration-200 ease-out flex items-center overflow-hidden relative z-10 ${
              isShrunk
                ? 'opacity-0 scale-95 max-w-0 pointer-events-none mx-0'
                : 'opacity-100 scale-100 max-w-[620px] hidden md:flex items-center space-x-1 mx-2'
            }`}
          >
            <nav className="flex items-center space-x-0.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#1E1E1E] text-[#F59E0B] shadow-sm'
                        : 'text-[#3A3A38] hover:text-[#1E1E1E] hover:bg-black/5'
                    } ${currentLang === 'te' ? 'font-telugu' : ''}`}
                  >
                    {link.label[currentLang]}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Action: Language Toggle + Request a Call Button */}
          <div className="flex items-center space-x-2 flex-shrink-0 ml-2 relative z-10">
            
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'te' : 'en')}
              className="flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold text-[#1E1E1E] bg-black/5 hover:bg-black/10 border border-black/10 transition-all active:scale-95"
              aria-label={`Switch to ${currentLang === 'en' ? 'Telugu' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className={currentLang === 'en' ? 'font-telugu text-xs font-bold text-amber-700' : 'font-sans text-xs'}>
                {currentLang === 'en' ? 'తెలుగు' : 'EN'}
              </span>
            </button>

            {/* "Request a Call" Button: Smooth scroll to #reach-out */}
            <button
              onClick={() => scrollTo('reach-out')}
              className="inline-flex items-center space-x-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-black bg-[#F59E0B] hover:bg-amber-500 text-[#1E1E1E] shadow-sm hover:scale-[1.02] active:scale-95 transition-all whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                {currentLang === 'te' ? 'కాల్ చేయండి' : 'Request a Call'}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-[#1E1E1E] bg-black/5 hover:bg-black/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer (Liquid Glass Styled) */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-sm mx-auto mt-2 px-4 pointer-events-auto">
          <div className="bg-white/85 backdrop-blur-2xl border border-white/80 rounded-2xl p-4 shadow-xl space-y-1.5 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-3 py-2 text-xs font-bold rounded-xl transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#F59E0B] text-[#1E1E1E] font-bold'
                    : 'text-[#3A3A38] hover:bg-black/5'
                }`}
              >
                <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                  {link.label[currentLang]}
                </span>
                {activeSection === link.id && <ArrowUpRight className="w-3.5 h-3.5" />}
              </button>
            ))}

            <div className="pt-2 border-t border-black/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo('reach-out');
                }}
                className="w-full text-center py-2.5 rounded-full bg-[#F59E0B] text-[#1E1E1E] text-xs font-bold flex items-center justify-center space-x-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{currentLang === 'te' ? 'కాల్ కొరకు అభ్యర్థించండి' : 'Request a Call (8919358526)'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
