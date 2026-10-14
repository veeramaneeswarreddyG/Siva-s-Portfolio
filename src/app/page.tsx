'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types';
import { Navigation } from '@/components/Navigation';
import { HeroCinematic } from '@/components/HeroCinematic';
import { ChapterOne } from '@/components/ChapterOne';
import { ChapterTwo } from '@/components/ChapterTwo';
import { ChapterThree } from '@/components/ChapterThree';
import { ChapterFour } from '@/components/ChapterFour';
import { ChapterFive } from '@/components/ChapterFive';
import { ChapterSix } from '@/components/ChapterSix';
import { ChapterSeven } from '@/components/ChapterSeven';
import { ArchivalVerificationModal } from '@/components/ArchivalVerificationModal';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState('hero');

  // Intersection observer to track the active chapter in view
  useEffect(() => {
    const chapterIds = [
      'hero',
      'chapter-01',
      'chapter-02',
      'chapter-03',
      'chapter-04',
      'chapter-05',
      'chapter-06',
      'chapter-07',
    ];

    const handleScrollObserver = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (const id of chapterIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveChapter(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    handleScrollObserver(); // Initial check

    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  return (
    <main className="relative min-h-screen bg-soil-900 text-ivory-200 selection:bg-gold-500 selection:text-soil-900">
      {/* Global Navigation Header & Progress Indicator */}
      <Navigation
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
        activeChapter={activeChapter}
      />

      {/* Cinematic Prologue: The Opening Frame */}
      <HeroCinematic currentLang={currentLang} />

      {/* Chapter 01: The Beginning (Two-Acre Farming Heritage) */}
      <ChapterOne currentLang={currentLang} />

      {/* Chapter 02: The Roots (Enduring Character Virtues) */}
      <ChapterTwo currentLang={currentLang} />

      {/* Chapter 03: The Turning Point (Entry into LIC in the Early 2000s) */}
      <ChapterThree
        currentLang={currentLang}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
      />

      {/* Chapter 04: The Years of Work (Scroll-Driven Timeline & Verified Milestones) */}
      <ChapterFour
        currentLang={currentLang}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
      />

      {/* Chapter 05: The Honour Earned (Recognition Centerpiece & Diamond Brigade Honor) */}
      <ChapterFive
        currentLang={currentLang}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
      />

      {/* Chapter 06: The Human Impact (Silent Stewardship, Privacy & Generational Care) */}
      <ChapterSix currentLang={currentLang} />

      {/* Chapter 07: The Legacy (Full Circle Horizon & Family Tribute) */}
      <ChapterSeven
        currentLang={currentLang}
        onOpenVerificationModal={() => setIsVerificationModalOpen(true)}
      />

      {/* Archival Standards & Verification Modal */}
      <ArchivalVerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
        currentLang={currentLang}
      />
    </main>
  );
}
