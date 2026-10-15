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
import { ReachOutSection } from '@/components/ReachOutSection';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for navbar highlight
  useEffect(() => {
    const sectionIds = [
      'hero',
      'roots',
      'milestones',
      'about',
      'recognitions',
      'impact',
      'reach-out',
    ];

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
      
      {/* Minimal, Collapsible & Recoverable Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
      />

      {/* Hero Section with Floating Cutout Portrait */}
      <HeroSection currentLang={currentLang} />

      {/* Marquee Ticker Strip: District Hubs */}
      <MarqueeStrip currentLang={currentLang} />

      {/* The LIC Story: Interactive Swiping Carousel */}
      <RootsSection currentLang={currentLang} />

      {/* Public Concerns & Advisory Solutions: Stepped-Polygon Accordion */}
      <MilestonesAccordion currentLang={currentLang} />

      {/* About Him Split Section */}
      <AboutSection currentLang={currentLang} />

      {/* Career Progression & Distinctions: Agent -> LIAFI -> CLIA -> 3x Diamond Brigade Club */}
      <RecognitionsShowcase currentLang={currentLang} />

      {/* Human Significance & Generational Impact */}
      <HumanImpactSection currentLang={currentLang} />

      {/* Reach Out & Connect (The Final Section) */}
      <ReachOutSection currentLang={currentLang} />

      {/* Clean Colophon Footer */}
      <footer className="bg-charcoal-950 text-cream-400 py-8 px-4 border-t border-charcoal-800 text-center text-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            {currentLang === 'te'
              ? '© 2026 జి. శివరామిరెడ్డి అధికారిక డిజిటల్ లెగసీ. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి.'
              : '© 2026 G. Sivarami Reddy Digital Legacy. All Rights Reserved.'}
          </p>
          <p className="font-semibold text-amberGold-400">
            {currentLang === 'te'
              ? 'గౌరవం స్వార్జితం • వారసత్వం శాశ్వతం'
              : 'Honour is Earned • Legacy is Left Behind'}
          </p>
        </div>
      </footer>

    </main>
  );
}
