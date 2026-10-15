'use client';

import React from 'react';
import Image from 'next/image';
import { Language } from '@/types';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { RangoliMotif } from './RangoliMotif';

interface HeroSectionProps {
  currentLang: Language;
  onOpenVerificationModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
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
      className="relative w-full pt-16 sm:pt-20 pb-6 px-4 sm:px-8 lg:px-14 bg-[#ECEAE5] text-[#1E1E1E] overflow-hidden flex flex-col justify-start select-none"
    >
      {/* Traditional Minimal Line-Art Rangoli Watermarks (Cultural Depth & Warmth) */}
      <div className="absolute -top-12 -left-12 pointer-events-none">
        <RangoliMotif variant="mandala" size={280} color="#F59E0B" opacity={0.12} />
      </div>
      <div className="absolute top-1/3 -right-20 pointer-events-none hidden lg:block">
        <RangoliMotif variant="mandala" size={320} color="#1E1E1E" opacity={0.06} />
      </div>

      {/* 1. TOP FRAMING LINE */}
      <div className="max-w-7xl mx-auto w-full border-t border-[#C8C5BD] pt-3 flex items-center justify-between z-10">
        {/* Overlapping Two-Circle Trademark (Black & Amber) */}
        <div className="flex items-center -space-x-2">
          <div className="w-5 h-5 rounded-full bg-[#1E1E1E] shadow-sm" />
          <div className="w-5 h-5 rounded-full bg-[#F59E0B] shadow-sm" />
        </div>

        {/* Branch / Division Tagline */}
        <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-wider text-[#6B6A66]">
          <span>{currentLang === 'te' ? 'జమ్మలమడుగు బ్రాంచ్' : 'Jammalamadugu Branch'}</span>
          <span>•</span>
          <span>{currentLang === 'te' ? 'కడప డివిజన్' : 'Kadapa Division'}</span>
        </div>
      </div>

      {/* 2. ROTATED VERTICAL TEXT ALONG RIGHT BORDER */}
      <div className="hidden xl:block absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10.5px] font-mono tracking-[0.28em] text-[#5A5955] uppercase select-none pointer-events-none">
        {currentLang === 'te'
          ? 'జి. శివరామిరెడ్డి గడికోట © 2026'
          : 'G. SIVARAMI REDDY GADIKOTA © 2026'}
      </div>

      {/* 3. MAIN HERO STAGE */}
      <div className="max-w-7xl mx-auto w-full mt-3 sm:mt-5 mb-3 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Clean Editorial Typography */}
        <div className="lg:col-span-6 flex flex-col justify-center relative">
          
          <div className="relative z-10 space-y-3 sm:space-y-4">
            
            {/* Double Quotes & Headline Typography */}
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F59E0B] leading-none select-none -mt-2 sm:-mt-3">
                “
              </span>

              <div className="flex flex-col">
                
                {/* EYEBROW BADGE ABOVE NAME */}
                <div className="mb-2">
                  <span className="inline-flex items-center space-x-1.5 bg-[#F59E0B] text-[#1E1E1E] font-black uppercase text-[10px] sm:text-xs tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E1E1E]" />
                    <span>{currentLang === 'te' ? 'ఎల్.ఐ.సి చీఫ్ అడ్వైజర్' : 'LIC Chief Advisor'}</span>
                  </span>
                </div>

                {/* LINE 1: FULL FATHER'S NAME "G. SIVARAMI REDDY" IN ONE UNBROKEN LINE */}
                <div className="inline-block bg-[#F59E0B] text-[#1E1E1E] px-4 xs:px-5 sm:px-7 lg:px-9 py-1.5 sm:py-2.5 rounded-full shadow-md w-fit max-w-full">
                  <h1 className="text-[19px] xs:text-[23px] sm:text-4xl md:text-5xl lg:text-[52px] font-black uppercase tracking-tight leading-none font-sans whitespace-nowrap m-0 select-none">
                    {currentLang === 'te' ? 'జి. శివరామిరెడ్డి' : 'G. SIVARAMI REDDY'}
                  </h1>
                </div>

                {/* LINE 2: "GADIKOTA." DIRECTLY BENEATH WITH UNBROKEN CONTINUITY */}
                <div className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-tight text-[#1E1E1E] leading-[1.02] mt-1.5 sm:mt-2.5 font-sans whitespace-nowrap">
                  {currentLang === 'te' ? 'గడికోట' : 'GADIKOTA'}
                  <span className="text-[#F59E0B]">.</span>
                </div>

              </div>
            </div>

            {/* Narrative Editorial Sub-Copy */}
            <p className={`text-xs sm:text-base text-[#3A3A38] font-medium max-w-xl pt-1 pl-3 sm:pl-7 border-l-2 border-[#F59E0B] ${
              currentLang === 'te' ? 'font-telugu leading-relaxed' : ''
            }`}>
              {currentLang === 'te'
                ? 'కడప డివిజన్ జమ్మలమడుగు బ్రాంచ్ చీఫ్ అడ్వైజర్ స్థాయి వరకు... శ్రమ, నిజాయితీతో నిర్మితమైన గౌరవప్రదమైన జీవన ప్రస్థానం.'
                : 'Over two decades of uncompromised service, quiet integrity, and earned honour across Jammalamadugu Branch, Kadapa Division.'}
            </p>

            {/* ACTION CTA with Micro-Interaction Spring */}
            <div className="pt-2 pl-3 sm:pl-7 flex items-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => scrollToSection('roots')}
                className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-[#1E1E1E] text-white hover:bg-black text-xs sm:text-sm font-bold shadow-md hover-lift transition-all group"
              >
                <div className="w-6 h-6 rounded-full bg-[#F59E0B] text-[#1E1E1E] flex items-center justify-center font-black group-hover:translate-x-0.5 transition-transform">
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </div>
                <span className={`whitespace-nowrap ${currentLang === 'te' ? 'font-telugu' : ''}`}>
                  {currentLang === 'te' ? 'జి. శివరామిరెడ్డి ప్రస్థానం' : 'G. Sivarami Reddy Legacy'}
                </span>
              </motion.button>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Elevated, Sized-Up Person Portrait with Smooth Minimal Float & Interactive Badges */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center relative mt-4 lg:mt-0">
          
          <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[460px] lg:max-w-[520px] h-[360px] xs:h-[400px] sm:h-[470px] lg:h-[520px] flex items-end justify-center overflow-visible">
            
            {/* 1. Circle Outline Behind Head / Shoulders */}
            <div className="absolute top-0 sm:-top-2 left-2 sm:left-6 w-[250px] xs:w-[280px] sm:w-[350px] lg:w-[410px] h-[250px] xs:h-[280px] sm:h-[350px] lg:h-[410px] rounded-full border-2 border-[#1E1E1E]/80 pointer-events-none z-0" />

            {/* 2. Bold Warm Amber/Yellow Block Behind Torso */}
            <div className="absolute bottom-0 right-2 sm:right-6 w-[200px] xs:w-[220px] sm:w-[270px] lg:w-[320px] h-[220px] xs:h-[250px] sm:h-[310px] lg:h-[360px] rounded-[36px] bg-[#F59E0B] shadow-xl z-0" />

            {/* Floating Mobile Interactive Badges (Rich Micro-Interactions on Tap) */}
            <motion.div
              whileTap={{ scale: 0.92 }}
              className="absolute -top-3 right-4 z-20 px-3 py-1 rounded-full bg-[#1E1E1E] text-[#F59E0B] border border-[#F59E0B]/30 shadow-lg text-[10px] sm:text-xs font-mono font-bold tracking-wider cursor-pointer animate-float-gentle"
            >
              20+ YRS STANDING
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.92 }}
              className="absolute bottom-8 -left-2 z-20 px-3 py-1 rounded-full bg-white text-[#1E1E1E] border border-[#C8C5BD] shadow-lg text-[10px] sm:text-xs font-bold tracking-tight cursor-pointer animate-float-gentle [animation-delay:1.5s]"
            >
              ⭐ 3× DIAMOND BRIGADE
            </motion.div>

            {/* 3. Sivarami Reddy Cutout Portrait: Smooth Minimal Float & Bottom Fade */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-full h-full flex items-end justify-center"
              style={{
                maskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
              }}
            >
              <Image
                src="/images/sivarami_portrait.png"
                alt="G Sivarami Reddy - LIC Chief Advisor"
                width={540}
                height={490}
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.32)] h-[105%] max-h-none w-auto scale-105 sm:scale-110 lg:scale-115 origin-bottom transition-transform duration-300 hover:scale-[1.18]"
              />
            </motion.div>

          </div>

        </div>

      </div>

      {/* 4. BOTTOM FRAMING LINE */}
      <div className="max-w-7xl mx-auto w-full border-b border-[#C8C5BD] mt-4" />
    </section>
  );
};
