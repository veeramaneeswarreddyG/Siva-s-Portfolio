'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '@/types';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Landmark, 
  Building2, 
  Users,
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Shield,
  Award
} from 'lucide-react';
import { RangoliMotif } from './RangoliMotif';

interface RootsSectionProps {
  currentLang: Language;
}

export const RootsSection: React.FC<RootsSectionProps> = ({ currentLang }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Card 1 or 2 in center

  const cards = [
    {
      id: 'sovereign-guarantee',
      number: '01',
      icon: ShieldCheck,
      shortLabel: {
        en: 'Sovereign Guarantee',
        te: 'సార్వభౌమ హామీ',
      },
      eyebrow: {
        en: 'SECTION 37 • PARLIAMENT ACT',
        te: 'సెక్షన్ 37 • పార్లమెంటు చట్టం',
      },
      title: {
        en: '100% Sovereign Guarantee',
        te: '100% ప్రభుత్వ సార్వభౌమ హామీ',
      },
      description: {
        en: 'Under Section 37 of the LIC Act 1956, every single policy carries the legal Sovereign Guarantee of the Government of India. The sum assured and all declared bonuses are legally pledged by the central government — ensuring total capital safety.',
        te: 'ఎల్.ఐ.సి చట్టం సెక్షన్ 37 ప్రకారం భారత ప్రభుత్వం పూర్తి సార్వభౌమ హామీ ఇస్తుంది. మీ పాలసీ మొత్తం మరియు బోనస్‌కు కేంద్ర ప్రభుత్వమే చట్టబద్ధమైన గ్యారెంటీ. ఎలాంటి ఆర్థిక ఒడిదుడుకుల్లోనైనా మీ పెట్టుబడి నూరుశాతం సురక్షితం.',
      },
      primaryArcColor: '#F59E0B',
      secondaryArcColor: '#1E1E1E',
      tertiaryArcColor: '#4A5568',
    },
    {
      id: 'claim-settlement',
      number: '02',
      icon: HeartHandshake,
      shortLabel: {
        en: 'Claim Settlement',
        te: 'క్లెయిమ్స్ పరిష్కారం',
      },
      eyebrow: {
        en: '98.5%+ CLAIM SETTLEMENT RECORD',
        te: '98.5%+ అత్యుత్తమ పరిష్కారం',
      },
      title: {
        en: 'Unmatched Claim Honour',
        te: 'మాట తప్పని నైతికత & వేగం',
      },
      description: {
        en: 'Maintaining one of the highest claim settlement ratios on earth (over 98.5%), LIC disburses thousands of crores every day across India. Through all hardships, promises are honored with utmost speed and compassion.',
        te: 'ప్రతిరోజూ వేలాది కుటుంబాలకు మెచ్యూరిటీ మరియు డెత్ క్లెయిమ్‌లను వేగంగా పరిష్కరిస్తూ ఎల్.ఐ.సి ప్రపంచంలోనే అత్యుత్తమ 98.5% పైగా సెటిల్మెంట్ రికార్డును సొంతం చేసుకుంది. ఆపదలో కుటుంబాలకు కొండంత అండగా నిలుస్తుంది.',
      },
      primaryArcColor: '#1E1E1E',
      secondaryArcColor: '#F59E0B',
      tertiaryArcColor: '#2D3748',
    },
    {
      id: 'asset-base',
      number: '03',
      icon: Landmark,
      shortLabel: {
        en: 'Public Wealth',
        te: 'మహా ప్రజా సంపద',
      },
      eyebrow: {
        en: '₹50+ LAKH CRORES ASSETS',
        te: '₹50+ లక్షల కోట్ల సంపద',
      },
      title: {
        en: 'Managing ₹50+ Lakh Crores',
        te: 'ప్రపంచ స్థాయి ఆర్థిక మహాసౌధం',
      },
      description: {
        en: 'With an asset management base exceeding ₹50 Lakh Crores ($600+ Billion USD) and over 25 Crore active individual policies, LIC is the financial backbone of India — a fortress of unshakeable wealth.',
        te: '₹50 లక్షల కోట్లకు పైగా సంపదను సమర్థవంతంగా నిర్వహిస్తూ, 25 కోట్లకు పైగా పాలసీదారుల జీవితాలకు భరోసా ఇస్తున్న ఎల్.ఐ.సి దేశ ఆర్థిక వ్యవస్థకే వెన్నెముక. మీ కుటుంబానికి తిరుగులేని ఆర్థిక స్థిరత్వం లభిస్తుంది.',
      },
      primaryArcColor: '#F59E0B',
      secondaryArcColor: '#4A5568',
      tertiaryArcColor: '#1E1E1E',
    },
    {
      id: 'nation-building',
      number: '04',
      icon: Building2,
      shortLabel: {
        en: 'Nation Building',
        te: 'జాతి నిర్మాణం',
      },
      eyebrow: {
        en: 'PEOPLE’S MONEY FOR PEOPLE’S GOOD',
        te: 'ప్రజాధనం దేశాభివృద్ధికి',
      },
      title: {
        en: 'Powering India’s Infrastructure',
        te: 'దేశ ప్రగతికి కొండంత ఊతం',
      },
      description: {
        en: 'Your premium builds India’s national highways, railway corridors, clean water grids, and irrigation dams. Securing your family’s tomorrow while actively constructing the nation’s future.',
        te: 'మీరు కట్టే ప్రతి పైసా మీ పిల్లల భవిష్యత్తును రక్షిస్తూనే... దేశంలోని జాతీయ రహదారులు, రైల్వేలు, సాగునీరు మరియు విద్యుత్ ప్రాజెక్టుల నిర్మాణానికి ఉపయోగపడుతుంది. ఇంటికి భద్రత, దేశానికి ప్రగతి.',
      },
      primaryArcColor: '#1E1E1E',
      secondaryArcColor: '#F59E0B',
      tertiaryArcColor: '#718096',
    },
    {
      id: 'generational-bond',
      number: '05',
      icon: Users,
      shortLabel: {
        en: '70-Year Trust',
        te: '70 ఏళ్ల అనుబంధం',
      },
      eyebrow: {
        en: 'YOGAKSHEMAM VAHAMYAHAM',
        te: 'యోగక్షేమం వహామ్యహం',
      },
      title: {
        en: '70 Years of Family Bonds',
        te: 'తరతరాల ఆత్మీయ విశ్వాసం',
      },
      description: {
        en: 'Since September 1, 1956, LIC has been a family member in Indian homes. From funding daughters’ higher education to weddings and serene retirement pensions, trust tested across generations never fails.',
        te: '1956 నుండి ప్రతి భారతీయ గడపలో ఎల్.ఐ.సి ఒక ఆత్మీయ బంధువులా నిలిచింది. పిల్లల ఉన్నత చదువులు, ఆడబిడ్డల పెళ్లిళ్లు, మరియు వృద్ధాప్య పెన్షన్... తరతరాలుగా నిలిచిన ఈ పవిత్ర బంధమే శాశ్వత రక్షణ.',
      },
      primaryArcColor: '#F59E0B',
      secondaryArcColor: '#1E1E1E',
      tertiaryArcColor: '#4A5568',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const scrollToReachOut = () => {
    const el = document.getElementById('reach-out');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="roots" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-10 bg-[#ECEAE5] relative select-none overflow-hidden">
      
      {/* Background Subtle Gradient Glow & Rangoli Watermarks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-8 left-8 pointer-events-none">
        <RangoliMotif variant="corner" size={100} opacity={0.15} />
      </div>
      <div className="absolute top-8 right-8 pointer-events-none -scale-x-100">
        <RangoliMotif variant="corner" size={100} opacity={0.15} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#3A3A38] mb-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span className={currentLang === 'te' ? 'font-telugu' : ''}>
              {currentLang === 'te'
                ? '1956 నుండి భారత సార్వభౌమ రక్షణ కవచం'
                : 'The Sovereign Trust of India • Established 1956'}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E1E1E] tracking-tight font-sans">
            {currentLang === 'te' ? (
              <>
                ఎల్.ఐ.సి చారిత్రక కథ: <span className="text-[#F59E0B]">కోట్లాది ప్రజల తిరుగులేని నమ్మకం</span>
              </>
            ) : (
              <>
                The LIC Story: <span className="text-[#F59E0B]">Why Millions Trust Us</span>
              </>
            )}
          </h2>

          <RangoliMotif variant="divider" opacity={0.25} className="my-2" />

          <p className={`mt-2 text-sm sm:text-base text-[#5A5955] font-medium max-w-2xl mx-auto leading-relaxed ${
            currentLang === 'te' ? 'font-telugu' : ''
          }`}>
            {currentLang === 'te'
              ? 'భారత పార్లమెంటు చట్టంతో నిర్మితమై, 100% ప్రభుత్వ సార్వభౌమ హామీతో... “యోగక్షేమం వహామ్యహం” అనే పవిత్ర ఆశయంతో సాగుతున్న దేశపు అత్యున్నత రక్షణ సంస్థ.'
              : 'Built by the Parliament of India, backed by 100% Sovereign Guarantee under Section 37, and dedicated to one timeless promise: “Yogakshemam Vahamyaham” (Your Welfare Is Our Responsibility).'}
          </p>
        </div>

        {/* 3D / CENTER-FOCUSED HORIZONTAL CAROUSEL (Exact Match to User Reference) */}
        <div className="relative w-full py-4 overflow-hidden">
          
          {/* Card Strip Viewport */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 min-h-[520px] sm:min-h-[560px]">
            
            {cards.map((card, index) => {
              const isCenter = index === activeIndex;
              const isPrev = index === (activeIndex === 0 ? cards.length - 1 : activeIndex - 1);
              const isNext = index === (activeIndex === cards.length - 1 ? 0 : activeIndex + 1);
              const IconComp = card.icon;

              // Hide cards that are far away from view to keep the 3-5 card focused stage clean
              const isVisible = isCenter || isPrev || isNext;
              if (!isVisible) return null;

              return (
                <motion.div
                  key={card.id}
                  layout
                  drag={isCenter ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, { offset, velocity }) => {
                    if (offset.x < -40 || velocity.x < -300) {
                      handleNext();
                    } else if (offset.x > 40 || velocity.x > 300) {
                      handlePrev();
                    }
                  }}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0.4, scale: 0.9 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.5,
                    scale: isCenter ? 1 : 0.9,
                    y: isCenter ? 0 : 15,
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative rounded-[32px] transition-all duration-300 flex flex-col justify-between cursor-pointer touch-pan-y ${
                    isCenter
                      ? 'w-[calc(100vw-40px)] max-w-[340px] xs:max-w-[360px] sm:max-w-[400px] md:max-w-[420px] h-[520px] sm:h-[560px] bg-white border border-[#E2DFD7] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] z-20 p-5 sm:p-8'
                      : 'hidden md:flex w-[180px] lg:w-[220px] h-[440px] sm:h-[480px] bg-white/70 hover:bg-white/90 border border-[#E2DFD7]/80 shadow-md z-10 p-5 items-center text-center'
                  }`}
                >
                  
                  {/* ====== IF CENTER ACTIVE CARD: Full Rich Visual & Editorial Text ====== */}
                  {isCenter ? (
                    <>
                      {/* Top 55%: Concentric Dotted Orbital Graphic with Colored Arcs (Exact match to reference image) */}
                      <div className="relative w-full h-[220px] sm:h-[240px] flex items-center justify-center">
                        
                        <svg className="w-full h-full max-w-[240px] max-h-[240px]" viewBox="0 0 240 240" fill="none">
                          {/* Outer Dotted Orbit */}
                          <circle cx="120" cy="120" r="95" stroke="#D1CDC4" strokeWidth="1.5" strokeDasharray="3 4" />
                          
                          {/* Middle Dotted Orbit */}
                          <circle cx="120" cy="120" r="68" stroke="#D1CDC4" strokeWidth="1.5" strokeDasharray="3 4" />
                          
                          {/* Inner Dotted Orbit */}
                          <circle cx="120" cy="120" r="42" stroke="#D1CDC4" strokeWidth="1.5" strokeDasharray="3 4" />

                          {/* Outer Arc 1 with Rounded Cap (Golden-Amber) */}
                          <path
                            d="M175 45 A 95 95 0 0 1 215 120"
                            stroke={card.primaryArcColor}
                            strokeWidth="10"
                            strokeLinecap="round"
                          />

                          {/* Middle Arc 2 with Rounded Cap (Charcoal) */}
                          <path
                            d="M60 85 A 68 68 0 0 1 120 52"
                            stroke={card.secondaryArcColor}
                            strokeWidth="9"
                            strokeLinecap="round"
                          />

                          {/* Bottom Arc 3 with Rounded Cap */}
                          <path
                            d="M80 185 A 95 95 0 0 0 155 210"
                            stroke={card.primaryArcColor}
                            strokeWidth="9"
                            strokeLinecap="round"
                          />

                          {/* Inner Arc 4 with Rounded Cap */}
                          <path
                            d="M120 78 A 42 42 0 0 1 162 120"
                            stroke={card.tertiaryArcColor}
                            strokeWidth="8"
                            strokeLinecap="round"
                          />

                          {/* Center Core Badge */}
                          <circle cx="120" cy="120" r="22" fill="#1E1E1E" />
                          <circle cx="120" cy="120" r="21" stroke="#F59E0B" strokeWidth="2" />
                        </svg>

                        {/* Center Icon embedded cleanly */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[#F59E0B]">
                          <IconComp className="w-5 h-5 stroke-[2.5]" />
                        </div>

                      </div>

                      {/* Bottom 45%: Editorial Typography (Matches Reference Image) */}
                      <div className="space-y-2 pt-2">
                        
                        {/* Eyebrow Label */}
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#F59E0B] font-bold block">
                          {card.eyebrow[currentLang]}
                        </span>

                        {/* Card Title */}
                        <h3 className={`text-2xl sm:text-3xl font-black text-[#1E1E1E] tracking-tight leading-snug font-sans ${
                          currentLang === 'te' ? 'font-telugu text-xl' : ''
                        }`}>
                          {card.title[currentLang]}
                        </h3>

                        {/* Card Description */}
                        <p className={`text-xs sm:text-sm text-[#5A5955] leading-relaxed font-light ${
                          currentLang === 'te' ? 'font-telugu text-xs leading-relaxed' : ''
                        }`}>
                          {card.description[currentLang]}
                        </p>

                      </div>
                    </>
                  ) : (
                    /* ====== IF SIDE CARD (Non-Active): Simplified Minimal Preview (Matches Reference Image) ====== */
                    <div className="w-full h-full flex flex-col justify-between items-center py-6">
                      
                      {/* Top Pill Number */}
                      <span className="text-xs font-mono font-bold text-[#8C857B]">
                        {card.number}
                      </span>

                      {/* Center Simplified Icon in circle */}
                      <div className="w-14 h-14 rounded-full bg-[#ECEAE5] text-[#1E1E1E] flex items-center justify-center shadow-sm">
                        <IconComp className="w-6 h-6 stroke-[2]" />
                      </div>

                      {/* Bottom Label (Matches Reference Image "MODEL TRAINING", "COLLECTING DATA") */}
                      <div className="text-center">
                        <span className={`text-[11px] font-bold uppercase tracking-wider text-[#3A3A38] block leading-tight ${
                          currentLang === 'te' ? 'font-telugu text-[10px]' : ''
                        }`}>
                          {card.shortLabel[currentLang]}
                        </span>
                      </div>

                    </div>
                  )}

                </motion.div>
              );
            })}

          </div>

          {/* Mobile Interactive Swipe Hint */}
          <div className="md:hidden flex items-center justify-center space-x-2 text-[11px] font-bold text-[#8C857B] mt-3">
            <span className="text-[#F59E0B] font-bold animate-pulse text-sm">‹</span>
            <span>{currentLang === 'te' ? 'స్వైప్ చేసి కథలను చూడండి' : 'Swipe card left or right to explore'}</span>
            <span className="text-[#F59E0B] font-bold animate-pulse text-sm">›</span>
          </div>

        </div>

        {/* BOTTOM METRICS & NAVIGATION BAR */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#C8C5BD] flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Brand Identity */}
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-full bg-[#1E1E1E] text-[#F59E0B] flex items-center justify-center font-black text-xs shadow-sm">
              LIC
            </div>
            <div>
              <span className="text-sm font-extrabold text-[#1E1E1E] tracking-tight block font-sans">
                {currentLang === 'te' ? 'భారతీయ జీవిత బీమా సంస్థ' : 'Life Insurance Corporation of India'}
              </span>
              <span className={`text-[11px] font-mono text-[#6B6A66] tracking-wider uppercase ${
                currentLang === 'te' ? 'font-telugu text-[10px]' : ''
              }`}>
                {currentLang === 'te' ? 'స్థాపన: 1956 • యోగక్షేమం వహామ్యహం' : 'Est. 1956 • Yogakshemam Vahamyaham'}
              </span>
            </div>
          </div>

          {/* Center Progress Indicators */}
          <div className="flex items-center space-x-2">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 active:scale-90 ${
                  activeIndex === idx
                    ? 'w-8 bg-[#F59E0B]'
                    : 'w-2.5 bg-black/20 hover:bg-black/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right Navigation Arrows & Consultation Action */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#F59E0B] text-[#1E1E1E] flex items-center justify-center transition-all duration-200 border border-[#C8C5BD] shadow-sm active:scale-90"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-[#1E1E1E] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-90 font-bold"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>

            <button
              onClick={scrollToReachOut}
              className="ml-1 sm:ml-2 inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#1E1E1E] hover:bg-black text-white text-xs font-bold shadow-md hover-lift active:scale-95 transition-all"
            >
              <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                {currentLang === 'te' ? 'సంప్రదించండి' : 'Consult Advisor'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
