'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';

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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smart collapsible and recoverable scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show near the top
      if (currentScrollY < 60) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // If scrolling down by more than 8px, collapse/hide
        if (currentScrollY > lastScrollY + 8 && currentScrollY > 100) {
          setIsVisible(false);
          setMobileMenuOpen(false); // Close mobile drawer if open
        } 
        // If scrolling up by more than 8px, recover/show
        else if (currentScrollY < lastScrollY - 8) {
          setIsVisible(true);
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
    { id: 'legacy', label: { en: 'Legacy', te: 'వారసత్వం' } },
    { id: 'reach-out', label: { en: 'Reach Out', te: 'సంప్రదించండి' } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled
          ? 'py-2.5 sm:py-3'
          : 'py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-100/90 backdrop-blur-md shadow-lg border border-cream-400/60'
            : 'bg-cream-100/60 backdrop-blur-sm border border-cream-300/40'
        }`}>
          
          {/* Minimal Brand Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center space-x-2.5 group focus-visible:outline-none"
            aria-label="Return to top"
          >
            <div className="w-8 h-8 rounded-full bg-amberGold-500 text-charcoal-950 flex items-center justify-center font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
              SRG
            </div>
            <span className="font-bold text-sm sm:text-base tracking-tight text-charcoal-950 font-sans group-hover:text-amberGold-600 transition-colors">
              {currentLang === 'te' ? 'జి. శివరామిరెడ్డి' : 'Sivarami'}<span className="text-amberGold-500">.</span>
            </span>
          </button>

          {/* Minimal Desktop Nav Capsule */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
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

          {/* Minimal Right Actions: Language Switch & Reach Out CTA */}
          <div className="flex items-center space-x-2">
            
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'te' : 'en')}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full text-xs font-bold text-charcoal-900 bg-cream-200 hover:bg-cream-300 border border-cream-400/80 transition-all button-press"
              aria-label={`Switch to ${currentLang === 'en' ? 'Telugu' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5 text-amberGold-600" />
              <span className={currentLang === 'en' ? 'font-telugu text-xs font-bold text-amberGold-700' : 'font-sans text-xs'}>
                {currentLang === 'en' ? 'తెలుగు' : 'EN'}
              </span>
            </button>

            {/* Reach Out CTA Pill */}
            <button
              onClick={() => scrollTo('reach-out')}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amberGold-500 hover:bg-amberGold-600 text-charcoal-950 shadow-sm hover-lift button-press transition-all"
            >
              <span>{currentLang === 'te' ? 'సంప్రదించండి' : 'Reach Out'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
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

      {/* Clean Mobile Drawer */}
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
                  onOpenVerificationModal();
                }}
                className="w-full text-center py-2 rounded-full bg-charcoal-950 text-white text-xs font-semibold"
              >
                {currentLang === 'te' ? 'సత్య ప్రమాణాలు పరిశీలించండి' : 'Archival Verification Protocol'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
