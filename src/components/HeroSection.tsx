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
  CheckCircle2, 
  Award,
  Users
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

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-cream-200 overflow-hidden flex flex-col justify-between"
    >
      {/* Warm Ambient Radial Backdrop (Matches Image 1) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-sunburst-radial rounded-full blur-3xl opacity-90" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-amberGold-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-warm-dots opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        
        {/* Top Header Block: Eyebrow + Big Name + Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          
          {/* Eyebrow Pill (Matches Image 1 "Award-Winning Product Designer") */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cream-300 border border-cream-400 text-charcoal-800 text-xs font-semibold mb-4 shadow-sm"
          >
            <div className="w-5 h-5 rounded-full bg-amberGold-500 text-charcoal-950 flex items-center justify-center">
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span>
              {currentLang === 'te' 
                ? 'గౌరవనీయులైన ఎల్.ఐ.సి చీఫ్ అడ్వైజర్ • జమ్మలమడుగు' 
                : 'LIC Chief Advisor • Jammalamadugu'}
            </span>
          </motion.div>

          {/* Main Headline: "I'm Sivarami Reddy" */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-charcoal-950 mb-3"
          >
            {currentLang === 'te' ? 'నేను ' : "I'm "}
            <span className="text-amberGold-500 relative inline-block">
              {currentLang === 'te' ? 'శివరామిరెడ్డి' : 'Sivarami Reddy'}
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amberGold-500 absolute -top-3 -right-6 animate-pulse" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-charcoal-600 font-medium"
          >
            {currentLang === 'te'
              ? 'జమ్మలమడుగు, ఆంధ్రప్రదేశ్ • మట్టి నుండి మహోన్నతం వరకు సాగిన జీవన ప్రస్థానం'
              : 'LIC Chief Advisor based in Jammalamadugu, AP • From Soil to Significance'}
          </motion.p>
        </div>

        {/* Hero Composition: Left Content + Center Portrait + Right Content + Rotating Stamp */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Top-Right Rotating Circular Stamp Badge (Matches Image 1 spinning stamp!) */}
          <div className="hidden lg:block absolute -top-8 right-0 z-30">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="relative w-28 h-28 rounded-full bg-charcoal-950 text-amberGold-400 p-2 shadow-2xl flex items-center justify-center border-2 border-amberGold-500/60"
            >
              {/* Circular SVG Text */}
              <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9px] font-bold tracking-[0.16em] uppercase fill-amberGold-400">
                  <textPath href="#circlePath">
                    • HONOUR IS EARNED • LEGACY LEFT BEHIND
                  </textPath>
                </text>
              </svg>
              {/* Center Icon */}
              <div className="w-10 h-10 rounded-full bg-amberGold-500 text-charcoal-950 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
            </motion.div>
          </div>

          {/* Left Column (Matches Image 1: Social/Verified Icons + Reviews/Trust Box) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-3 flex-col justify-center space-y-8 z-20"
          >
            {/* Verified Affiliations */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-3">
                {currentLang === 'te' ? 'అధికారిక గుర్తింపులు' : 'Verified Affiliations'}
              </p>
              <div className="flex items-center space-x-2.5">
                <div 
                  className="w-9 h-9 rounded-full bg-white border border-cream-400 shadow-sm flex items-center justify-center text-charcoal-800 font-bold text-xs hover-lift"
                  title="Life Insurance Corporation of India"
                >
                  LIC
                </div>
                <div 
                  className="w-9 h-9 rounded-full bg-white border border-cream-400 shadow-sm flex items-center justify-center text-amberGold-600 font-bold text-xs hover-lift"
                  title="Life Insurance Agents Federation of India"
                >
                  LIAFI
                </div>
                <div 
                  className="w-9 h-9 rounded-full bg-white border border-cream-400 shadow-sm flex items-center justify-center text-charcoal-900 font-bold text-xs hover-lift"
                  title="Chief Life Insurance Advisor"
                >
                  CLIA
                </div>
                <div 
                  className="w-9 h-9 rounded-full bg-amberGold-500 text-charcoal-950 shadow-sm flex items-center justify-center font-bold text-xs hover-lift"
                  title="#3 Diamond Brigade"
                >
                  #3
                </div>
              </div>
            </div>

            {/* Trust Metric Box (Matches Image 1 "350+ Reviews (4.9 of 5)") */}
            <div className="p-4 rounded-2xl bg-white/80 border border-cream-400 shadow-sm backdrop-blur-sm">
              <div className="flex items-center space-x-1 text-amberGold-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="font-bold text-sm text-charcoal-950">
                {currentLang === 'te' ? '2+ దశాబ్దాల విశ్వసనీయత' : '2+ Decades of Trust'}
              </p>
              <p className="text-xs text-charcoal-500 mt-0.5">
                {currentLang === 'te'
                  ? 'జమ్మలమడుగు మరియు పరిసర ప్రాంతాల కుటుంబాల భరోసా'
                  : 'Serving generations of families across Jammalamadugu'}
              </p>
            </div>
          </motion.div>

          {/* Center Column: Portrait Image (Image 2) with Curved Sunburst Base */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-center relative z-10"
          >
            {/* Arched Background Backplate */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] flex items-end justify-center">
              
              {/* Backing Circle / Egg Arch */}
              <div className="absolute inset-x-4 bottom-0 top-12 rounded-t-[140px] rounded-b-[40px] bg-gradient-to-b from-amberGold-400/25 via-cream-300 to-cream-400/60 border border-amberGold-500/20 shadow-inner z-0" />

              {/* Foreground Cutout Portrait (Transparent PNG from user image 2) */}
              <div className="relative w-full h-full z-10 flex items-end justify-center">
                <Image
                  src="/images/sivarami_portrait.png"
                  alt="Sivarami Reddy Gadikota - LIC Chief Advisor"
                  width={420}
                  height={500}
                  priority
                  className="object-contain object-bottom drop-shadow-2xl max-h-[95%] w-auto transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>

              {/* Overlapping Hero Action Buttons (Matches Image 1 "Portfolio" & "Hire Me" buttons) */}
              <div className="absolute -bottom-5 inset-x-0 flex items-center justify-center space-x-3 z-30">
                <button
                  onClick={() => scrollToSection('roots')}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-amberGold-500 hover:bg-amberGold-600 text-charcoal-950 font-bold text-xs sm:text-sm shadow-lg hover-lift button-press transition-all"
                >
                  <span>{currentLang === 'te' ? 'ప్రస్థానాన్ని చూడండి' : 'Explore Journey'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenVerificationModal}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white hover:bg-cream-100 text-charcoal-900 border border-charcoal-900/20 font-bold text-xs sm:text-sm shadow-md hover-lift button-press transition-all"
                >
                  <ShieldCheck className="w-4 h-4 text-amberGold-600" />
                  <span>{currentLang === 'te' ? 'ధృవీకరణ రికార్డు' : 'Archival Record'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Matches Image 1: Quote bubble + Pill tags) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-3 flex-col justify-center space-y-6 z-20"
          >
            {/* Speech / Value Quote */}
            <div className="relative p-5 rounded-2xl bg-white/80 border border-cream-400 shadow-sm backdrop-blur-sm">
              <span className="text-3xl font-serif text-amberGold-500 absolute -top-3 left-3 select-none leading-none">
                “
              </span>
              <p className={`text-xs text-charcoal-700 leading-relaxed pt-2 font-medium ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                {currentLang === 'te'
                  ? 'గౌరవం అనేది స్వార్జితం. ప్రతి ఒక్క కుటుంబానికి నమ్మకమైన రక్షణ కవచంలా నిలబడటమే నా జీవన ధ్యేయం.'
                  : 'Dedicated to the financial security, quiet integrity, and generational peace of mind of every household.'}
              </p>
            </div>

            {/* Pill Tags (Matches Image 1 tags like "Prototype", "Dashboard", etc.) */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 mb-2">
                {currentLang === 'te' ? 'ప్రధాన ఆధారాలు' : 'Core Distinctions'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-charcoal-900 text-white shadow-sm">
                  Agent
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amberGold-500 text-charcoal-950 shadow-sm">
                  LIAFI
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-charcoal-900 text-white shadow-sm">
                  CLIA
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amberGold-500 text-charcoal-950 shadow-sm">
                  #3 Diamond Brigade
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cream-300 text-charcoal-800 border border-cream-400">
                  Two-Acre Soil
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
