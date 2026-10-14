'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types';
import { Globe, Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenVerificationModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenVerificationModal,
  activeSection,
}) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic scroll listener: shrink on scroll down, expand on scroll up or at top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 60) {
        // At the very top: fully expanded
        setIsShrunk(false);
      } else {
        // Scrolling down: shrink navbar into compact logo + Request a Call pill
        if (currentScrollY > lastScrollY + 4) {
          setIsShrunk(true);
        } 
        // Scrolling up: expand navbar back to show all section links
        else if (currentScrollY < lastScrollY - 4) {
          setIsShrunk(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: { en: 'Home', te: 'హోమ్' } },
    { id: 'roots', label: { en: 'Origins', te: 'మూలాలు' } },
    { id: 'milestones', label: { en: 'Milestones', te: 'మైలురాళ్లు' } },
    { id: 'about', label: { en: 'About', te: 'పరిచయం' } },
    { id: 'recognitions', label: { en: 'Honours', te: 'గౌరవాలు' } },
    { id: 'reach-out', label: { en: 'Reach Out', te: 'సంప్రదించండి' } },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3 sm:py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center">
        
        {/* Dynamic Nav Capsule: Expands or Shrinks on Scroll */}
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-out rounded-full shadow-lg border backdrop-blur-md ${
            isShrunk
              ? 'w-auto min-w-[280px] sm:min-w-[340px] px-3.5 py-1.5 sm:py-2 bg-cream-100/95 border-cream-400 shadow-xl'
              : 'w-full px-4 sm:px-6 py-2 sm:py-2.5 bg-cream-100/90 border-cream-300/80'
          }`}
        >
          
          {/* Logo / Name (Always visible in both shrunk and expanded states) */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center space-x-2.5 group focus-visible:outline-none flex-shrink-0"
            aria-label="Return to top"
          >
            <div className="w-8 h-8 rounded-full bg-amberGold-500 text-charcoal-950 flex items-center justify-center font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
              SRG
            </div>
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-charcoal-950 font-sans group-hover:text-amberGold-600 transition-colors">
              {currentLang === 'te' ? 'జి. శివరామిరెడ్డి' : 'Sivarami'}
              <span className="text-amberGold-500">.</span>
            </span>
          </button>

          {/* Center Links: Visible when expanded, collapses when shrunk */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isShrunk
                ? 'max-w-0 opacity-0 pointer-events-none'
                : 'max-w-[650px] opacity-100 hidden md:flex items-center space-x-1 mx-2'
            }`}
          >
            <nav className="flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-charcoal-950 text-amberGold-400 shadow-sm'
                        : 'text-charcoal-700 hover:text-charcoal-950 hover:bg-cream-200'
                    } ${currentLang === 'te' ? 'font-telugu' : ''}`}
                  >
                    {link.label[currentLang]}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Action: Language Toggle + Request a Call Button */}
          <div className="flex items-center space-x-2 flex-shrink-0 ml-2">
            
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'te' : 'en')}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full text-xs font-bold text-charcoal-900 bg-cream-200 hover:bg-cream-300 border border-cream-400 transition-all button-press"
              aria-label={`Switch to ${currentLang === 'en' ? 'Telugu' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5 text-amberGold-600" />
              <span className={currentLang === 'en' ? 'font-telugu text-xs font-bold text-amberGold-700' : 'font-sans text-xs'}>
                {currentLang === 'en' ? 'తెలుగు' : 'EN'}
              </span>
            </button>

            {/* "Request a Call" Button: Redirects to #reach-out (Always visible!) */}
            <button
              onClick={() => scrollTo('reach-out')}
              className="inline-flex items-center space-x-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold bg-amberGold-500 hover:bg-amberGold-600 text-charcoal-950 shadow-sm hover-lift button-press transition-all whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                {currentLang === 'te' ? 'కాల్ చేయండి' : 'Request a Call'}
              </span>
            </button>

            {/* Mobile Hamburger (Only visible on small screens when expanded) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-charcoal-900 bg-cream-200 hover:bg-cream-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-sm mx-auto mt-2 px-4">
          <div className="bg-cream-100 border border-cream-300 rounded-2xl p-4 shadow-xl space-y-1.5 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-amberGold-500 text-charcoal-950 font-bold'
                    : 'text-charcoal-800 hover:bg-cream-200'
                }`}
              >
                <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                  {link.label[currentLang]}
                </span>
                {activeSection === link.id && <ArrowUpRight className="w-3.5 h-3.5" />}
              </button>
            ))}

            <div className="pt-2 border-t border-cream-300">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo('reach-out');
                }}
                className="w-full text-center py-2.5 rounded-full bg-amberGold-500 text-charcoal-950 text-xs font-bold flex items-center justify-center space-x-1.5"
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
