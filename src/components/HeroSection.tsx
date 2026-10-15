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
        <RangoliMotif variant="mandala" size={280} color="#F59E0B" opacity={0.45} />
      </div>
      <div className="absolute top-1/3 -right-20 pointer-events-none hidden lg:block">
        <RangoliMotif variant="mandala" size={320} color="#1E1E1E" opacity={0.25} />
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
                  <span className={`inline-flex items-center space-x-1.5 bg-[#F59E0B] text-[#1E1E1E] uppercase text-[10px] sm:text-xs tracking-wider px-3.5 py-1 rounded-full shadow-sm ${
                    currentLang === 'te' ? 'font-telugu font-semibold' : 'font-black'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E1E1E]" />
                    <span>{currentLang === 'te' ? 'ఎల్.ఐ.సి చీఫ్ అడ్వైజర్' : 'LIC Chief Advisor'}</span>
                  </span>
                </div>

                {/* LINE 1: FULL FATHER'S NAME "G. SIVARAMI REDDY" IN ONE UNBROKEN LINE */}
                <div className="inline-block bg-gradient-to-r from-amber-500 via-[#F59E0B] to-amber-500 text-[#1E1E1E] px-4 xs:px-5 sm:px-7 lg:px-9 py-1.5 sm:py-2.5 rounded-full shadow-[0_8px_30px_rgba(245,158,11,0.28)] ring-1 ring-amber-400/40 w-fit max-w-full">
                  <h1 className={`text-[19px] xs:text-[23px] sm:text-4xl md:text-5xl lg:text-[52px] uppercase tracking-tight leading-none whitespace-nowrap m-0 select-none ${
                    currentLang === 'te' ? 'font-telugu-heading font-normal tracking-normal py-0.5' : 'font-sans font-black'
                  }`}>
                    {currentLang === 'te' ? 'జి. శివరామిరెడ్డి' : 'G. SIVARAMI REDDY'}
                  </h1>
                </div>

                {/* LINE 2: "GADIKOTA." DIRECTLY BENEATH WITH UNBROKEN CONTINUITY */}
                <div className={`text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] uppercase tracking-tight text-[#1E1E1E] leading-[1.05] mt-1.5 sm:mt-2.5 whitespace-nowrap ${
                  currentLang === 'te' ? 'font-telugu-heading font-normal tracking-normal' : 'font-sans font-black'
                }`}>
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

            {/* ACTION CTA with Apple Tactile Spring */}
            <div className="pt-2 pl-3 sm:pl-7 flex items-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => scrollToSection('roots')}
                className="apple-press inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-[#1E1E1E] text-white hover:bg-black text-xs sm:text-sm font-bold shadow-md hover-lift transition-all group active:scale-95"
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
          
          <div className="relative w-full max-w-[360px] xs:max-w-[400px] sm:max-w-[460px] lg:max-w-[520px] h-[430px] xs:h-[460px] sm:h-[490px] lg:h-[540px] flex items-end justify-center overflow-visible">
            
            {/* Ambient Warm Golden Halo Glow behind Portrait (Apple style depth) */}
            <div className="absolute inset-0 bg-[#F59E0B]/22 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

            {/* 1. Circle Outline Behind Head / Shoulders */}
            <div className="absolute top-2 sm:-top-2 left-3 sm:left-6 w-[280px] xs:w-[310px] sm:w-[360px] lg:w-[420px] h-[280px] xs:h-[310px] sm:h-[360px] lg:h-[420px] rounded-full border-2 border-[#1E1E1E]/80 pointer-events-none z-0" />

            {/* 2. Bold Warm Amber/Yellow Block Behind Torso */}
            <div className="absolute bottom-0 right-2 sm:right-6 w-[220px] xs:w-[250px] sm:w-[280px] lg:w-[330px] h-[260px] xs:h-[290px] sm:h-[320px] lg:h-[370px] rounded-[36px] bg-[#F59E0B] shadow-xl z-0" />

            {/* Floating Mobile Interactive Badges (Apple Liquid Glass with Micro-Interactions) */}
            <motion.div
              whileTap={{ scale: 0.92 }}
              className="apple-press absolute -top-1 sm:-top-3 right-4 z-20 px-3 py-1 rounded-full bg-[#1E1E1E]/90 backdrop-blur-xl text-[#F59E0B] border border-white/20 shadow-lg text-[10px] sm:text-xs font-mono font-bold tracking-wider cursor-pointer animate-float-gentle"
            >
              20+ YRS STANDING
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.92 }}
              className="apple-press absolute bottom-12 -left-2 z-20 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xl text-[#1E1E1E] border border-white/60 shadow-lg text-[10px] sm:text-xs font-bold tracking-tight cursor-pointer animate-float-gentle [animation-delay:1.5s]"
            >
              ⭐ 3× DIAMOND BRIGADE
            </motion.div>

            {/* 3. Sivarami Reddy Cutout Portrait: Sized-Up, Heroic on Mobile */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-full h-full flex items-end justify-center"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              }}
            >
              <Image
                src="/images/sivarami_portrait.png"
                alt="G Sivarami Reddy - LIC Chief Advisor"
                width={560}
                height={520}
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] h-[110%] max-h-none w-auto scale-115 xs:scale-120 sm:scale-110 lg:scale-115 origin-bottom transition-transform duration-300 hover:scale-[1.22]"
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
