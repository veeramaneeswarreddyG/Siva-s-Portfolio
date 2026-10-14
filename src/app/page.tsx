'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MarqueeStrip } from '@/components/MarqueeStrip';
import { RootsSection } from '@/components/RootsSection';
import { MilestonesAccordion } from '@/components/MilestonesAccordion';
import { AboutSection } from '@/components/AboutSection';
import { RecognitionsShowcase } from '@/components/RecognitionsShowcase';
import { HumanImpactSection } from '@/components/HumanImpactSection';
import { LegacyClosing } from '@/components/LegacyClosing';
import { ArchivalVerificationModal } from '@/components/ArchivalVerificationModal';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for navigation highlight
  useEffect(() => {
    const sectionIds = ['hero', 'roots', 'milestones', 'about', 'recognitions', 'impact', 'legacy'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  return (
    <main className="relative min-h-screen bg-cream-200 text-charcoal-950 font-sans selection:bg-amberGold-500 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Section (Replicating Image 1 structure with Image 2 Transparent Portrait) */}
      <HeroSection
        currentLang={currentLang}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
      />

      {/* Marquee Ticker Strip directly below Hero */}
      <MarqueeStrip currentLang={currentLang} />

      {/* Origins & Agricultural Roots (Two-Acre Heritage & 4 Virtues) */}
      <RootsSection currentLang={currentLang} />

      {/* Numbered Interactive Accordion ("How Roots Turned Into Lifelong Protection") */}
      <MilestonesAccordion
        currentLang={currentLang}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
      />

      {/* "About Me" Split Section ("Who is Sivarami Reddy?") */}
      <AboutSection
        currentLang={currentLang}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
      />

      {/* Recognitions & Citations Grid (#3 Diamond Brigade, CLIA, LIAFI, Agent) */}
      <RecognitionsShowcase
        currentLang={currentLang}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
      />

      {/* Human Impact & Confidentiality Notice */}
      <HumanImpactSection currentLang={currentLang} />

      {/* Legacy & Closing Documentary Statement */}
      <LegacyClosing
        currentLang={currentLang}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
      />

      {/* Archival Verification & Family Contribution Modal */}
      <ArchivalVerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
        currentLang={currentLang}
      />

    </main>
  );
}
