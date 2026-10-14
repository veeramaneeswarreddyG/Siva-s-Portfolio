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
      className="relative min-h-[96vh] w-full pt-20 sm:pt-24 pb-12 px-4 sm:px-8 lg:px-14 bg-[#ECEAE5] text-[#1E1E1E] overflow-hidden flex flex-col justify-between select-none"
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

      {/* 2. ROTATED VERTICAL TEXT ALONG RIGHT BORDER */}
      <div className="hidden xl:block absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10.5px] font-mono tracking-[0.28em] text-[#5A5955] uppercase select-none pointer-events-none">
        {currentLang === 'te'
          ? 'శివరామిరెడ్డి గడికోట © 2026'
          : 'SIVARAMI REDDY GADIKOTA © 2026'}
      </div>

      {/* 3. MAIN HERO STAGE */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10 py-6 sm:py-8">
        
        {/* LEFT COLUMN: Clean Editorial Massive Typography (No Icon Doodles) */}
        <div className="lg:col-span-6 flex flex-col justify-center relative">
          
          {/* Subtle Ghosted Number "01" in Background */}
          <div className="absolute -left-4 sm:-left-8 -bottom-10 text-[140px] sm:text-[190px] lg:text-[240px] font-black text-[#1E1E1E]/[0.05] select-none pointer-events-none leading-none z-0">
            01
          </div>

          <div className="relative z-10 space-y-4">
            
            {/* Double Quotes & Two-Line Name Layout */}
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#F59E0B] leading-none select-none -mt-2 sm:-mt-4">
                “
              </span>

              <div className="flex flex-col">
                
                {/* LINE 1: "SIVARAMI REDDY" IN ONE LINE INSIDE AMBER CAPSULE */}
                <div className="inline-block bg-[#F59E0B] text-[#1E1E1E] px-5 sm:px-8 lg:px-9 py-2 sm:py-3 rounded-full shadow-md w-fit">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none font-sans whitespace-nowrap m-0">
                    {currentLang === 'te' ? 'శివరామిరెడ్డి' : 'SIVARAMI REDDY'}
                  </h1>
                </div>

                {/* NESTLED SUB-BADGE */}
                <div className="mt-2.5 mb-1.5 ml-1">
                  <span className="inline-block bg-[#F59E0B] text-[#1E1E1E] font-black uppercase text-[10px] sm:text-xs tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    {currentLang === 'te' ? 'చీఫ్ అడ్వైజర్' : 'LIC Chief Advisor'}
                  </span>
                </div>

                {/* LINE 2: "GADIKOTA." IN THE DOWNLINE WITH PERFECT SPACING */}
                <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#1E1E1E] leading-[1.05] font-sans">
                  {currentLang === 'te' ? 'గడికోట' : 'GADIKOTA'}
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

            {/* BOTTOM CTAs */}
            <div className="pt-3 pl-3 sm:pl-8 flex flex-wrap items-center gap-4">
              
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

        {/* RIGHT COLUMN: Much Bigger, Commanding Hero Image Composition */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center relative">
          
          {/* Scaled-up Container (Maximized size & presence) */}
          <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[580px] xl:max-w-[620px] h-[520px] sm:h-[600px] lg:h-[680px] xl:h-[720px] flex items-end justify-center">
            
            {/* 1. Large Circle Outline Behind Portrait (Scaled up) */}
            <div className="absolute top-2 sm:top-0 left-2 sm:left-4 w-[340px] sm:w-[440px] lg:w-[500px] h-[340px] sm:h-[440px] lg:h-[500px] rounded-full border-2 border-[#1E1E1E]/80 pointer-events-none z-0" />

            {/* 2. Bold Warm Amber/Yellow Block (Scaled up) */}
            <div className="absolute bottom-0 right-2 sm:right-4 w-[260px] sm:w-[340px] lg:w-[400px] h-[320px] sm:h-[420px] lg:h-[480px] rounded-[44px] bg-[#F59E0B] shadow-xl z-0" />

            {/* 3. Hero Cutout Portrait: Extra Big, Crystal Clear & Cinematic */}
            <div className="relative z-10 w-full h-full flex items-end justify-center">
              <Image
                src="/images/sivarami_portrait.png"
                alt="G Sivarami Reddy - LIC Chief Advisor"
                width={620}
                height={740}
                priority
                className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.32)] max-h-full w-auto transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* 4. Editorial Caption Under Graphic */}
            <div className="absolute -bottom-8 right-4 text-right pointer-events-none">
              <p className={`text-[10px] sm:text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#3A3A38] leading-tight ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {currentLang === 'te'
                  ? 'ధృవీకరించబడిన సేవలు • జమ్మలమడుగు బ్రాంచ్'
                  : 'Selected & Honoured Life Advisory'}
              </p>
              <p className={`text-[9.5px] sm:text-[10.5px] font-mono text-[#6B6A66] uppercase tracking-wider ${
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
