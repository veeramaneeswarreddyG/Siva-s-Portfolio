'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Award,
} from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onOpenVerificationModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenVerificationModal,
}) => {
  const content = siteContent.hero;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pillTags = currentLang === 'te'
    ? ['ఏజెంట్', 'ఎల్.ఐ.ఎ.ఎఫ్.ఐ', 'సి.ఎల్.ఐ.ఎ', '#3 డైమండ్ బ్రిగేడ్', 'రెండు ఎకరాల నేల']
    : ['Agent', 'LIAFI', 'CLIA', '#3 Diamond Brigade', 'Two-Acre Soil'];

  return (
    <section
      id="hero"
      className="relative min-h-[98vh] w-full pt-20 sm:pt-24 pb-14 px-4 sm:px-6 lg:px-8 bg-cream-200 overflow-hidden flex flex-col justify-between"
    >
      {/* Warm Ambient Radial & Golden Sunburst Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] bg-sunburst-radial rounded-full blur-3xl opacity-90" />
        <div className="absolute top-12 right-12 w-[450px] h-[450px] bg-amberGold-400/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-warm-dots opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        
        {/* Top Header Block: Eyebrow + Name + Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-cream-300 border border-cream-400 text-charcoal-800 text-xs font-semibold mb-2.5 shadow-sm"
          >
            <div className="w-4 h-4 rounded-full bg-amberGold-500 text-charcoal-950 flex items-center justify-center">
              <Star className="w-2.5 h-2.5 fill-current" />
            </div>
            <span className={currentLang === 'te' ? 'font-telugu' : ''}>
              {content.eyebrow[currentLang]}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-charcoal-950 mb-2 leading-none"
          >
            {currentLang === 'te' ? 'నేను ' : "I'm "}
            <span className="text-amberGold-500 relative inline-block">
              {currentLang === 'te' ? 'జి. శివరామిరెడ్డి' : 'G Sivarami Reddy'}
              <Sparkles className="w-6 h-6 sm:w-9 sm:h-9 text-amberGold-500 absolute -top-3 -right-7 animate-pulse" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`text-sm sm:text-base md:text-lg text-charcoal-600 font-medium ${
              currentLang === 'te' ? 'font-telugu leading-relaxed' : ''
            }`}
          >
            {content.location[currentLang]} • {currentLang === 'te' ? 'మట్టి నుండి మహోన్నతం వరకు' : 'From Soil to Significance'}
          </motion.p>
        </div>

        {/* Hero Composition: Left Content + CINEMATIC ELEVATED BIGGER PORTRAIT + Right Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Rotating Stamp Badge (Top-Right) */}
          <div className="hidden lg:block absolute -top-8 right-2 z-30">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="relative w-28 h-28 rounded-full bg-charcoal-950 text-amberGold-400 p-2.5 shadow-2xl flex items-center justify-center border-2 border-amberGold-500/60"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                <path
                  id="circlePathHeroElevated"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[8.5px] font-bold tracking-[0.16em] uppercase fill-amberGold-400">
                  <textPath href="#circlePathHeroElevated">
                    {currentLang === 'te'
                      ? '• గౌరవం స్వార్జితం • వారసత్వం శాశ్వతం •'
                      : '• HONOUR IS EARNED • LEGACY LEFT BEHIND •'}
                  </textPath>
                </text>
              </svg>
              <div className="w-9 h-9 rounded-full bg-amberGold-500 text-charcoal-950 flex items-center justify-center font-bold">
                <Award className="w-4 h-4" />
              </div>
            </motion.div>
          </div>

          {/* Left Column: Affiliations & Trust Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-3 flex-col justify-center space-y-6 z-20"
          >
            <div>
              <p className={`text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2.5 ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {currentLang === 'te' ? 'అధికారిక అనుబంధాలు' : 'Verified Affiliations'}
              </p>
              <div className="flex items-center space-x-2">
                <span className="w-10 h-10 rounded-full bg-white border border-cream-400 shadow-md flex items-center justify-center text-charcoal-800 font-extrabold text-xs hover-lift">
                  LIC
                </span>
                <span className="w-10 h-10 rounded-full bg-white border border-cream-400 shadow-md flex items-center justify-center text-amberGold-600 font-extrabold text-xs hover-lift">
                  LIAFI
                </span>
                <span className="w-10 h-10 rounded-full bg-white border border-cream-400 shadow-md flex items-center justify-center text-charcoal-900 font-extrabold text-xs hover-lift">
                  CLIA
                </span>
                <span className="w-10 h-10 rounded-full bg-amberGold-500 text-charcoal-950 shadow-md flex items-center justify-center font-extrabold text-xs hover-lift">
                  #3
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-cream-400 shadow-md backdrop-blur-sm">
              <div className="flex items-center space-x-1 text-amberGold-500 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className={`font-bold text-sm text-charcoal-950 ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {currentLang === 'te' ? '2+ దశాబ్దాల ప్రజా విశ్వసనీయత' : '2+ Decades of Trust'}
              </p>
              <p className={`text-xs text-charcoal-500 mt-1 leading-relaxed ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {currentLang === 'te'
                  ? 'కడప జిల్లా, జమ్మలమడుగు పరిసర ప్రాంతాల కుటుంబాల ఆర్థిక భద్రత'
                  : 'Serving generations of families across Kadapa Division'}
              </p>
            </div>
          </motion.div>

          {/* Center Column: CINEMATIC ELEVATED BIGGER PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-center relative z-10"
          >
            {/* Cinematic Elevated Pedestal Frame */}
            <div className="relative w-full max-w-[440px] sm:max-w-[500px] md:max-w-[540px] lg:max-w-[580px] h-[480px] sm:h-[550px] md:h-[600px] lg:h-[640px] flex items-end justify-center">
              
              {/* Golden Ambient Halo (Cinematic Backlight Glow) */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 sm:w-88 h-72 sm:h-88 bg-[radial-gradient(circle_at_center,_rgba(245,166,35,0.45)_0%,_rgba(232,137,19,0.2)_50%,_transparent_75%)] rounded-full blur-2xl pointer-events-none z-0" />

              {/* Elevated Pedestal Arch Frame */}
              <div className="absolute inset-x-2 bottom-0 top-6 rounded-t-[180px] sm:rounded-t-[210px] rounded-b-[44px] bg-gradient-to-b from-amberGold-400/30 via-cream-200 to-cream-300/80 border-2 border-amberGold-500/30 shadow-[0_25px_60px_-15px_rgba(232,137,19,0.25)] z-0" />

              {/* Portrait Image (Elevated, Crisp, Significantly Bigger Size) */}
              <div className="relative w-full h-full z-10 flex items-end justify-center pb-1">
                <Image
                  src="/images/sivarami_portrait.png"
                  alt="G Sivarami Reddy - LIC Chief Advisor"
                  width={560}
                  height={650}
                  priority
                  className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)] max-h-[98%] w-auto transition-transform duration-300 hover:scale-[1.02] filter contrast-105 brightness-105"
                />
              </div>

              {/* Overlapping Action Buttons at Base of Pedestal */}
              <div className="absolute -bottom-6 inset-x-0 flex items-center justify-center space-x-3 z-30">
                <button
                  onClick={() => scrollToSection('roots')}
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-full bg-amberGold-500 hover:bg-amberGold-600 text-charcoal-950 font-extrabold text-xs sm:text-sm shadow-xl hover-lift button-press transition-all"
                >
                  <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                    {currentLang === 'te' ? 'ప్రస్థానాన్ని చూడండి' : 'Explore Journey'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenVerificationModal}
                  className="inline-flex items-center space-x-2 px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-cream-100 text-charcoal-950 border border-charcoal-900/20 font-bold text-xs sm:text-sm shadow-md hover-lift button-press transition-all"
                >
                  <ShieldCheck className="w-4 h-4 text-amberGold-600" />
                  <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                    {currentLang === 'te' ? 'ధృవీకరణ రికార్డు' : 'Archival Record'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pure Language Quote & Pill Badges */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-3 flex-col justify-center space-y-6 z-20"
          >
            {/* Pure Language Quote */}
            <div className="relative p-5 rounded-2xl bg-white/90 border border-cream-400 shadow-md backdrop-blur-sm">
              <span className="text-3xl font-serif text-amberGold-500 absolute -top-3 left-3 select-none leading-none">
                “
              </span>
              <p className={`text-xs sm:text-sm text-charcoal-700 leading-relaxed pt-2 font-medium ${
                currentLang === 'te' ? 'font-telugu leading-relaxed' : ''
              }`}>
                {currentLang === 'te'
                  ? 'ప్రతి ఒక్క కుటుంబానికి ఆర్థిక రక్షణ, నైతిక విలువలు మరియు తరతరాల భరోసా కల్పించడమే నా ధ్యేయం.'
                  : 'Dedicated to the financial security, quiet integrity, and generational peace of mind of every household.'}
              </p>
            </div>

            {/* Pure Language Pill Badges */}
            <div>
              <p className={`text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2.5 ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {currentLang === 'te' ? 'ప్రధాన అర్హతలు' : 'Core Distinctions'}
              </p>
              <div className="flex flex-wrap gap-2">
                {pillTags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                      tIdx % 2 === 0
                        ? 'bg-charcoal-900 text-white'
                        : 'bg-amberGold-500 text-charcoal-950'
                    } ${currentLang === 'te' ? 'font-telugu' : ''}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
