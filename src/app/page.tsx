'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Language } from '@/types';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MarqueeStrip } from '@/components/MarqueeStrip';
import { Preloader } from '@/components/Preloader';

// Lazy load below-the-fold components entirely for blazing-fast mobile performance
const RootsSection = dynamic(
  () => import('@/components/RootsSection').then((mod) => mod.RootsSection),
  {
    ssr: true,
    loading: () => (
      <div className="w-full min-h-[500px] bg-[#ECEAE5] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#F59E0B] border-t-transparent animate-spin" />
      </div>
    ),
  }
);

const MilestonesAccordion = dynamic(
  () => import('@/components/MilestonesAccordion').then((mod) => mod.MilestonesAccordion),
  {
    ssr: true,
    loading: () => (
      <div className="w-full min-h-[400px] bg-[#ECEAE5]" />
    ),
  }
);

const AboutSection = dynamic(
  () => import('@/components/AboutSection').then((mod) => mod.AboutSection),
  {
    ssr: true,
    loading: () => (
      <div className="w-full min-h-[500px] bg-[#0F0F0E]" />
    ),
  }
);

const RecognitionsShowcase = dynamic(
  () => import('@/components/RecognitionsShowcase').then((mod) => mod.RecognitionsShowcase),
  {
    ssr: true,
    loading: () => (
      <div className="w-full min-h-[400px] bg-[#FAF5EB]" />
    ),
  }
);

const HumanImpactSection = dynamic(
  () => import('@/components/HumanImpactSection').then((mod) => mod.HumanImpactSection),
  {
    ssr: true,
    loading: () => (
      <div className="w-full min-h-[350px] bg-[#FAF5EB]" />
    ),
  }
);

const ReachOutSection = dynamic(
  () => import('@/components/ReachOutSection').then((mod) => mod.ReachOutSection),
  {
    ssr: true,
    loading: () => (
      <div className="w-full min-h-[500px] bg-[#FAF5EB]" />
    ),
  }
);

const MobileActionDock = dynamic(
  () => import('@/components/MobileActionDock').then((mod) => mod.MobileActionDock),
  { ssr: false }
);

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
    <main className="relative min-h-screen bg-cream-200 text-charcoal-950 font-sans selection:bg-amberGold-500 selection:text-white overflow-x-hidden">
      
      {/* Cinematic Initial Preloader */}
      <Preloader />

      {/* Minimal, Collapsible & Recoverable Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
      />

      {/* Hero Section with Floating Cutout Portrait (Rendered Immediately) */}
      <HeroSection currentLang={currentLang} />

      {/* Marquee Ticker Strip: District Hubs */}
      <MarqueeStrip currentLang={currentLang} />

      {/* The LIC Story: Interactive Swiping Carousel (Lazy Loaded) */}
      <RootsSection currentLang={currentLang} />

      {/* Public Concerns & Advisory Solutions: Stepped-Polygon Accordion (Lazy Loaded) */}
      <MilestonesAccordion currentLang={currentLang} />

      {/* About Him Split Section (Lazy Loaded) */}
      <AboutSection currentLang={currentLang} />

      {/* Career Progression & Distinctions: Agent -> LIAFI -> CLIA -> 3x Diamond Brigade Club (Lazy Loaded) */}
      <RecognitionsShowcase currentLang={currentLang} />

      {/* Human Significance & Generational Impact (Lazy Loaded) */}
      <HumanImpactSection currentLang={currentLang} />

      {/* Reach Out & Connect: The Final Section (Lazy Loaded) */}
      <ReachOutSection currentLang={currentLang} />

      {/* Mobile Floating Action Dock (Call, WhatsApp, Lang Switch, Scroll Top) */}
      <MobileActionDock
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      {/* Clean Colophon Footer */}
      <footer className="bg-charcoal-950 text-cream-400 py-8 px-4 pb-20 md:pb-8 border-t border-charcoal-800 text-center text-xs">
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
