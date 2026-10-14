'use client';

import React from 'react';
import Image from 'next/image';
import { Language } from '@/types';
import { ChevronRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onOpenVerificationModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenVerificationModal,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] w-full pt-20 sm:pt-24 pb-10 px-4 sm:px-8 lg:px-14 bg-[#ECEAE5] text-[#1E1E1E] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* 1. TOP FRAMING LINE WITH OVERLAPPING CIRCLE TRADEMARK */}
      <div className="max-w-7xl mx-auto w-full border-t border-[#C8C5BD] pt-4 flex items-center justify-between z-10">
        {/* Overlapping Two-Circle Trademark (Black & Amber) */}
        <div className="flex items-center space-x-2.5">
          <div className="flex items-center -space-x-2">
            <div className="w-5 h-5 rounded-full bg-[#1E1E1E] shadow-sm" />
            <div className="w-5 h-5 rounded-full bg-[#F59E0B] shadow-sm" />
          </div>
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#3A3A38]">
            {currentLang === 'te' ? 'అధికారిక లెగసీ ఆర్కైవ్' : 'Official Legacy Archive'}
          </span>
        </div>

        {/* Small Branch Tagline */}
        <div className="hidden sm:flex items-center space-x-2 text-[11px] font-mono uppercase tracking-wider text-[#6B6A66]">
          <span>{currentLang === 'te' ? 'జమ్మలమడుగు బ్రాంచ్' : 'Jammalamadugu Branch'}</span>
          <span>•</span>
          <span>{currentLang === 'te' ? 'కడప డివిజన్' : 'Kadapa Division'}</span>
        </div>
      </div>

      {/* 2. ROTATED VERTICAL TEXT ALONG RIGHT BORDER (Matches Reference "RANDY © 2025") */}
      <div className="hidden xl:block absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10.5px] font-mono tracking-[0.28em] text-[#5A5955] uppercase select-none pointer-events-none">
        {currentLang === 'te'
          ? 'శివరామిరెడ్డి © 2026'
          : 'SIVARAMI © 2026'}
      </div>

      {/* 3. MAIN HERO STAGE */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10 py-4 sm:py-6">
        
        {/* LEFT COLUMN: Editorial Massive Typography & Hand-Drawn SVG Doodles */}
        <div className="lg:col-span-7 flex flex-col justify-center relative">
          
          {/* Subtle Ghosted Number "01" in Background Behind Bottom Area */}
          <div className="absolute -left-4 sm:-left-8 -bottom-10 text-[140px] sm:text-[190px] lg:text-[230px] font-black text-[#1E1E1E]/[0.05] select-none pointer-events-none leading-none z-0">
            01
          </div>

          {/* DOODLE 1: Top-Left Screen with Shield/Gear (Matches Reference Screen Doodle) */}
          <div className="absolute -top-7 left-14 hidden sm:block pointer-events-none z-0 text-[#2C2C2A] rotate-[-6deg]">
            <svg width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-[1.75]">
              <rect x="2" y="2" width="42" height="28" rx="4" />
              <line x1="23" y1="30" x2="23" y2="38" />
              <line x1="15" y1="38" x2="31" y2="38" strokeLinecap="round" />
              {/* Shield & Sprout inside */}
              <path d="M23 8v14M17 12c3 0 6-3 6-3s3 3 6 3" strokeLinecap="round" />
            </svg>
          </div>

          {/* DOODLE 2: Top-Right Clapperboard / Certificate with Sparkles (Matches Reference Film Doodle) */}
          <div className="absolute -top-4 right-16 hidden sm:block pointer-events-none z-0 text-[#2C2C2A] rotate-[10deg]">
            <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-[1.75]">
              <rect x="3" y="10" width="38" height="28" rx="3" />
              <line x1="3" y1="18" x2="41" y2="18" />
              <path d="M11 10L14 18M21 10L24 18M31 10L34 18" />
              {/* Lightbulb / Idea / Sparkle */}
              <circle cx="22" cy="28" r="4" />
              <path d="M22 21v2M29 25l-1.5 1M15 25l1.5 1" strokeLinecap="round" />
            </svg>
          </div>

          {/* DOODLE 3: Pen Tool Bezier Handles (Matches Reference Pen Tool Doodle) */}
          <div className="absolute top-36 right-6 hidden md:block pointer-events-none z-0 text-[#2C2C2A] rotate-[8deg]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-[1.75]">
              <path d="M28 6l6 6-18 18-8 2 2-8L28 6z" strokeLinejoin="round" />
              <circle cx="12" cy="30" r="2" fill="currentColor" />
              <path d="M8 22c6-4 12-4 18 0" strokeDasharray="2 2" strokeLinecap="round" />
            </svg>
          </div>

          {/* DOODLE 4: Camera Icon Under Title (Matches Reference Camera Doodle) */}
          <div className="absolute bottom-20 left-48 hidden sm:block pointer-events-none z-0 text-[#2C2C2A] rotate-[-12deg]">
            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-[1.75]">
              <rect x="2" y="8" width="38" height="24" rx="4" />
              <path d="M12 8l3-5h12l3 5H12z" strokeLinejoin="round" />
              <circle cx="21" cy="20" r="6" />
              <circle cx="33" cy="13" r="1.5" fill="currentColor" />
            </svg>
          </div>

          <div className="relative z-10 space-y-3">
            
            {/* Double Quotes & Massive Title Layout */}
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-serif text-[#F59E0B] leading-none select-none -mt-3 sm:-mt-5">
                “
              </span>

              <div className="flex flex-col">
                
                {/* FIRST WORD: Yellow Capsule Pill (Exact Match to Reference "PORTO") */}
                <div className="inline-block bg-[#F59E0B] text-[#1E1E1E] px-6 sm:px-10 py-1.5 sm:py-2.5 rounded-full shadow-md w-fit">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none font-sans m-0">
                    {currentLang === 'te' ? 'శివరామి' : 'SIVARAMI'}
                  </h1>
                </div>

                {/* NESTLED SUB-BADGE (Exact Match to Reference "Creative Visual") */}
                <div className="-mt-1 sm:-mt-2 mb-1 ml-1 sm:ml-2">
                  <span className="inline-block bg-[#F59E0B] text-[#1E1E1E] font-black uppercase text-[10px] sm:text-xs tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    {currentLang === 'te' ? 'చీఫ్ అడ్వైజర్' : 'Creative Advisor'}
                  </span>
                </div>

                {/* SECOND WORD: Giant Black Text with Amber Dot (Exact Match to Reference "FOLIO.") */}
                <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#1E1E1E] leading-none font-sans">
                  {currentLang === 'te' ? 'రెడ్డి' : 'REDDY'}
                  <span className="text-[#F59E0B]">.</span>
                </div>

              </div>
            </div>

            {/* Narrative Editorial Sub-Copy */}
            <p className={`text-sm sm:text-base md:text-lg text-[#3A3A38] font-medium max-w-xl pt-2 pl-3 sm:pl-8 border-l-2 border-[#F59E0B] ${
              currentLang === 'te' ? 'font-telugu leading-relaxed' : ''
            }`}>
              {currentLang === 'te'
                ? 'రెండు ఎకరాల వ్యవసాయ నేల నుండి కడప డివిజన్ జమ్మలమడుగు బ్రాంచ్ చీఫ్ అడ్వైజర్ స్థాయి వరకు... శ్రమ, నిజాయితీతో నిర్మితమైన గౌరవప్రదమైన జీవన ప్రస్థానం.'
                : 'From two-acre agricultural roots to LIC Chief Advisor, Jammalamadugu Branch. Decades of uncompromised service, quiet integrity, and earned honour.'}
            </p>

            {/* BOTTOM CTAs (Matches Reference "> Randy Fahmi" style button) */}
            <div className="pt-4 pl-3 sm:pl-8 flex flex-wrap items-center gap-4">
              
              {/* Circular Arrow Button (Matches Reference ( > ) Button) */}
              <button
                onClick={() => scrollToSection('roots')}
                className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-[#1E1E1E] text-white hover:bg-black text-xs sm:text-sm font-bold shadow-md hover-lift transition-all group"
              >
                <div className="w-6 h-6 rounded-full bg-[#F59E0B] text-[#1E1E1E] flex items-center justify-center font-black group-hover:translate-x-0.5 transition-transform">
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </div>
                <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                  {currentLang === 'te' ? 'జి. శివరామిరెడ్డి' : 'G. Sivarami Reddy'}
                </span>
              </button>

              {/* Archival Verification Link Button */}
              <button
                onClick={onOpenVerificationModal}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-white hover:bg-[#F7F5F0] text-[#1E1E1E] border border-[#C8C5BD] text-xs sm:text-sm font-bold shadow-sm hover-lift transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                  {currentLang === 'te' ? 'ధృవీకరణ రికార్డు' : 'Archival Verification'}
                </span>
              </button>

            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Layered Portrait + Yellow Block + Circular Ring (Exact Match to Reference Image) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative">
          
          <div className="relative w-full max-w-[360px] sm:max-w-[440px] h-[480px] sm:h-[540px] flex items-end justify-center">
            
            {/* 1. Large Thin Circle Outline Behind Head / Torso (Matches Reference Circle) */}
            <div className="absolute top-2 sm:top-0 left-0 sm:left-2 w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full border-2 border-[#1E1E1E]/80 pointer-events-none z-0" />

            {/* 2. Bold Warm Amber/Yellow Solid Block with Rounded Top (Matches Reference Yellow Box) */}
            <div className="absolute bottom-0 right-1 sm:right-2 w-[220px] sm:w-[270px] h-[270px] sm:h-[330px] rounded-[36px] bg-[#F59E0B] shadow-lg z-0" />

            {/* 3. Sivarami Reddy Cutout Transparent Portrait Popping Out in Front */}
            <div className="relative z-10 w-full h-full flex items-end justify-center">
              <Image
                src="/images/sivarami_portrait.png"
                alt="G Sivarami Reddy - LIC Chief Advisor"
                width={480}
                height={560}
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_25px_rgba(0,0,0,0.28)] max-h-[98%] w-auto transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* 4. Editorial Caption Under Graphic (Matches Reference "Selected Best / Graphic Design Until 2025") */}
            <div className="absolute -bottom-7 right-2 text-right pointer-events-none">
              <p className={`text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#3A3A38] leading-tight ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {currentLang === 'te'
                  ? 'ధృవీకరించబడిన సేవలు • జమ్మలమడుగు'
                  : 'Selected & Honoured Life Advisory'}
              </p>
              <p className={`text-[9.5px] sm:text-[10px] font-mono text-[#6B6A66] uppercase tracking-wider ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {currentLang === 'te'
                  ? 'కడప డివిజన్ • ఆంధ్రప్రదేశ్'
                  : 'Kadapa Division Until 2026'}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* 4. BOTTOM FRAMING LINE */}
      <div className="max-w-7xl mx-auto w-full border-b border-[#C8C5BD] mt-6" />
    </section>
  );
};
