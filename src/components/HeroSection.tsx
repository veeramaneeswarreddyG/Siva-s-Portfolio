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
      className="relative w-full pt-16 sm:pt-20 pb-4 px-4 sm:px-8 lg:px-14 bg-[#ECEAE5] text-[#1E1E1E] overflow-hidden flex flex-col justify-start select-none"
    >
      {/* 1. TOP FRAMING LINE WITH OVERLAPPING CIRCLE TRADEMARK */}
      <div className="max-w-7xl mx-auto w-full border-t border-[#C8C5BD] pt-3 flex items-center justify-between z-10">
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

      {/* 2. ROTATED VERTICAL TEXT ALONG RIGHT BORDER */}
      <div className="hidden xl:block absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10.5px] font-mono tracking-[0.28em] text-[#5A5955] uppercase select-none pointer-events-none">
        {currentLang === 'te'
          ? 'శివరామిరెడ్డి గడికోట © 2026'
          : 'SIVARAMI REDDY GADIKOTA © 2026'}
      </div>

      {/* 3. MAIN HERO STAGE: Moved up right under header rule, no huge empty gap */}
      <div className="max-w-7xl mx-auto w-full mt-3 sm:mt-5 mb-3 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Clean Editorial Typography - Positioned Up */}
        <div className="lg:col-span-6 flex flex-col justify-center relative">
          
          {/* Subtle Ghosted Number "01" in Background */}
          <div className="absolute -left-4 sm:-left-8 -bottom-6 text-[130px] sm:text-[170px] lg:text-[210px] font-black text-[#1E1E1E]/[0.05] select-none pointer-events-none leading-none z-0">
            01
          </div>

          <div className="relative z-10 space-y-3 sm:space-y-4">
            
            {/* Double Quotes & Two-Line Name Layout */}
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F59E0B] leading-none select-none -mt-2 sm:-mt-3">
                “
              </span>

              <div className="flex flex-col">
                
                {/* LINE 1: "SIVARAMI REDDY" IN ONE LINE INSIDE AMBER CAPSULE */}
                <div className="inline-block bg-[#F59E0B] text-[#1E1E1E] px-5 sm:px-7 lg:px-8 py-1.5 sm:py-2.5 rounded-full shadow-md w-fit">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-black uppercase tracking-tight leading-none font-sans whitespace-nowrap m-0">
                    {currentLang === 'te' ? 'శివరామిరెడ్డి' : 'SIVARAMI REDDY'}
                  </h1>
                </div>

                {/* NESTLED SUB-BADGE */}
                <div className="mt-2 mb-1 ml-1">
                  <span className="inline-block bg-[#F59E0B] text-[#1E1E1E] font-black uppercase text-[10px] sm:text-xs tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    {currentLang === 'te' ? 'చీఫ్ అడ్వైజర్' : 'LIC Chief Advisor'}
                  </span>
                </div>

                {/* LINE 2: "GADIKOTA." IN THE DOWNLINE WITH PERFECT SPACING */}
                <div className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-tight text-[#1E1E1E] leading-[1.02] font-sans">
                  {currentLang === 'te' ? 'గడికోట' : 'GADIKOTA'}
                  <span className="text-[#F59E0B]">.</span>
                </div>

              </div>
            </div>

            {/* Narrative Editorial Sub-Copy */}
            <p className={`text-sm sm:text-base text-[#3A3A38] font-medium max-w-xl pt-1 pl-3 sm:pl-7 border-l-2 border-[#F59E0B] ${
              currentLang === 'te' ? 'font-telugu leading-relaxed' : ''
            }`}>
              {currentLang === 'te'
                ? 'రెండు ఎకరాల వ్యవసాయ నేల నుండి కడప డివిజన్ జమ్మలమడుగు బ్రాంచ్ చీఫ్ అడ్వైజర్ స్థాయి వరకు... శ్రమ, నిజాయితీతో నిర్మితమైన గౌరవప్రదమైన జీవన ప్రస్థానం.'
                : 'From two-acre agricultural roots to LIC Chief Advisor, Jammalamadugu Branch. Decades of uncompromised service, quiet integrity, and earned honour.'}
            </p>

            {/* BOTTOM CTAs */}
            <div className="pt-2 pl-3 sm:pl-7 flex flex-wrap items-center gap-3.5">
              
              {/* Circular Arrow Button */}
              <button
                onClick={() => scrollToSection('roots')}
                className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-[#1E1E1E] text-white hover:bg-black text-xs sm:text-sm font-bold shadow-md hover-lift transition-all group"
              >
                <div className="w-6 h-6 rounded-full bg-[#F59E0B] text-[#1E1E1E] flex items-center justify-center font-black group-hover:translate-x-0.5 transition-transform">
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </div>
                <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                  {currentLang === 'te' ? 'ప్రస్థానాన్ని చూడండి' : 'Explore The Legacy'}
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

        {/* RIGHT COLUMN: Person Image Shifted Up, Elevated & Sized Up Proportionally */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center relative">
          
          {/* Calibrated Container that fits cleanly in the viewport without pushing image below screen */}
          <div className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[520px] h-[400px] sm:h-[470px] lg:h-[520px] flex items-end justify-center overflow-visible">
            
            {/* 1. Circle Outline Behind Head / Shoulders */}
            <div className="absolute top-0 sm:-top-2 left-2 sm:left-6 w-[280px] sm:w-[350px] lg:w-[410px] h-[280px] sm:h-[350px] lg:h-[410px] rounded-full border-2 border-[#1E1E1E]/80 pointer-events-none z-0" />

            {/* 2. Bold Warm Amber/Yellow Block Behind Torso */}
            <div className="absolute bottom-0 right-2 sm:right-6 w-[220px] sm:w-[270px] lg:w-[320px] h-[250px] sm:h-[310px] lg:h-[360px] rounded-[36px] bg-[#F59E0B] shadow-xl z-0" />

            {/* 3. Person Portrait: Big, Prominent, Lifted Up & Fully Visible */}
            <div className="relative z-10 w-full h-full flex items-end justify-center">
              <Image
                src="/images/sivarami_portrait.png"
                alt="G Sivarami Reddy - LIC Chief Advisor"
                width={540}
                height={490}
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.32)] h-[105%] max-h-none w-auto scale-105 sm:scale-110 lg:scale-115 origin-bottom transition-transform duration-300 hover:scale-[1.18]"
              />
            </div>

            {/* 4. Editorial Caption Under Graphic */}
            <div className="absolute -bottom-6 right-6 text-right pointer-events-none">
              <p className={`text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#3A3A38] leading-tight ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {currentLang === 'te'
                  ? 'ధృవీకరించబడిన సేవలు • జమ్మలమడుగు బ్రాంచ్'
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
      <div className="max-w-7xl mx-auto w-full border-b border-[#C8C5BD] mt-4" />
    </section>
  );
};
