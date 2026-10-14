'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types';
import { ShieldCheck, Globe, Menu, X, ArrowUpRight } from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
    { id: 'roots', label: { en: 'Origins', te: 'మూలాలు' } },
    { id: 'milestones', label: { en: 'Milestones', te: 'మైలురాళ్లు' } },
    { id: 'about', label: { en: 'About Him', te: 'పరిచయం' } },
    { id: 'recognitions', label: { en: 'Honours', te: 'గౌరవాలు' } },
    { id: 'impact', label: { en: 'Human Impact', te: 'సేవా నిరతి' } },
    { id: 'legacy', label: { en: 'Legacy', te: 'వారసత్వం' } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-200/90 backdrop-blur-md py-3 shadow-md border-b border-cream-400/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo (Matching Image 1: Round icon + Brand Name + Orange dot) */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center space-x-3 text-left group focus-visible:outline-none"
          aria-label="Return to top"
        >
          <div className="w-10 h-10 rounded-full bg-amberGold-500 text-charcoal-950 flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 group-hover:bg-amberGold-400 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-lg sm:text-xl tracking-tight text-charcoal-950 font-sans group-hover:text-amberGold-600 transition-colors">
              Sivarami<span className="text-amberGold-500">.</span>
            </span>
            <span className="hidden sm:block text-[10px] tracking-wider uppercase text-charcoal-600 font-semibold">
              LIC Chief Advisor
            </span>
          </div>
        </button>

        {/* Center Pill Navigation Menu (Matches Image 1: Dark capsule) */}
        <nav
          className="hidden md:flex items-center space-x-1 px-4 py-1.5 rounded-full bg-charcoal-900/90 text-ivory-300 shadow-xl border border-charcoal-800 backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-amberGold-500 text-charcoal-950 font-semibold shadow-sm'
                    : 'text-ivory-300 hover:text-white hover:bg-charcoal-800/80'
                } ${currentLang === 'te' ? 'font-telugu' : ''}`}
              >
                {link.label[currentLang]}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Language Switcher & Archival CTA */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Language Toggle */}
          <button
            onClick={() => onLanguageChange(currentLang === 'en' ? 'te' : 'en')}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-charcoal-900 bg-cream-300/80 hover:bg-cream-400/90 border border-cream-400 transition-all button-press"
            aria-label={`Switch to ${currentLang === 'en' ? 'Telugu' : 'English'}`}
          >
            <Globe className="w-3.5 h-3.5 text-amberGold-600" />
            <span className={currentLang === 'en' ? 'font-telugu text-xs font-bold text-amberGold-700' : 'font-sans'}>
              {currentLang === 'en' ? 'తెలుగు' : 'English'}
            </span>
          </button>

          {/* Archival CTA Button (Matches "Let's Talk" pill from Image 1) */}
          <button
            onClick={onOpenVerificationModal}
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold text-charcoal-950 bg-white hover:bg-cream-100 border border-charcoal-900/20 shadow-sm hover:shadow hover-lift button-press transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amberGold-600" />
            <span>
              {currentLang === 'te' ? 'సత్య ప్రమాణం' : 'Archival Record'}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-charcoal-900 bg-cream-300 hover:bg-cream-400"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-100 border-b border-cream-400 px-6 pt-3 pb-6 mt-2 space-y-2 shadow-2xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors flex items-center justify-between ${
                activeSection === link.id
                  ? 'bg-amberGold-500 text-charcoal-950 font-semibold'
                  : 'text-charcoal-800 hover:bg-cream-200'
              }`}
            >
              <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                {link.label[currentLang]}
              </span>
              {activeSection === link.id && <ArrowUpRight className="w-4 h-4" />}
            </button>
          ))}

          <div className="pt-3 border-t border-cream-300 flex justify-between items-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerificationModal();
              }}
              className="w-full text-center py-2.5 rounded-full bg-charcoal-950 text-white text-xs font-semibold"
            >
              {currentLang === 'te' ? 'అధికారిక రికార్డులను పరిశీలించండి' : 'View Archival Standards'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
