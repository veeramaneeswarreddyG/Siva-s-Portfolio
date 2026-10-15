'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Language } from '@/types';
import { 
  CheckCircle2, 
  Landmark, 
  ShieldCheck, 
  Flame, 
  HeartHandshake, 
  Coins,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { RangoliMotif } from './RangoliMotif';

interface RootsSectionProps {
  currentLang: Language;
}

interface FactCard {
  id: string;
  year: { en: string; te: string };
  badge: { en: string; te: string };
  icon: React.ElementType;
  image: string;
  headline: { en: string; te: string };
  shortSummary: { en: string; te: string };
  fullExplanation: { en: string; te: string };
  keyFact: { en: string; te: string };
}

export const RootsSection: React.FC<RootsSectionProps> = ({ currentLang }) => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // 100% Authentic, customer-attracting LIC story milestones with perfect bilingual translation
  const facts: FactCard[] = [
    {
      id: 'fact-1956-founding',
      year: { en: '1956', te: '1956' },
      badge: {
        en: 'PARLIAMENT ACT',
        te: 'పార్లమెంటు చట్టం',
      },
      icon: Landmark,
      image: '/images/lic_founding_1956.jpg',
      headline: {
        en: 'On September 1, 1956, Parliament united 245 companies under the LIC Act.',
        te: 'సెప్టెంబర్ 1, 1956న భారత పార్లమెంటు 245 ప్రైవేట్ సంస్థలను విలీనం చేసి ఎల్.ఐ.సి ని స్థాపించింది.',
      },
      shortSummary: {
        en: 'To end private company defaults, India nationalized insurance to guarantee absolute safety of public savings.',
        te: 'ప్రైవేట్ కంపెనీల దివాళాలకు ముగింపు పలికి, ప్రజల కష్టార్జితానికి పూర్తి భద్రత కల్పించేందుకు జాతీయ సంస్థగా ఆవిర్భవించింది.',
      },
      fullExplanation: {
        en: 'By amalgamating 245 private firms with ₹5 Crore initial capital, India created an untouchable sanctuary of public trust that has guarded families for 7 decades.',
        te: '245 ప్రైవేట్ సంస్థలను ప్రభుత్వ అజమాయిషీలోకి తెచ్చి, ₹5 కోట్ల ప్రాథమిక మూలధనంతో ప్రారంభమైన ఎల్.ఐ.సి నేడు కోట్లాది భారతీయ కుటుంబాలకు తిరుగులేని ఆర్థిక రక్షణ కవచం.',
      },
      keyFact: {
        en: '245 Insurers Merged • ₹5 Cr Seed Capital • 100% Public Trust',
        te: '245 సంస్థల విలీనం • రూ. 5 కోట్ల మూలధనం • నూరుశాతం ప్రభుత్వ భరోసా',
      },
    },
    {
      id: 'fact-section-37',
      year: { en: 'SEC 37', te: 'సెక్షన్ 37' },
      badge: {
        en: 'SOVEREIGN GUARANTEE',
        te: 'సార్వభౌమ హామీ',
      },
      icon: ShieldCheck,
      image: '/images/lic_sovereign_guarantee.jpg',
      headline: {
        en: 'Section 37 guarantees 100% sovereign protection by the Government of India.',
        te: 'ఎల్.ఐ.సి చట్టం సెక్షన్ 37 ప్రకారం ప్రతి రూపాయికీ భారత ప్రభుత్వమే పూర్తి గ్యారెంటీ.',
      },
      shortSummary: {
        en: 'Both Sum Assured and declared bonuses are legally backed by the Consolidated Fund of India by statutory law.',
        te: 'పాలసీ హామీ మొత్తం మరియు బోనస్‌కు భారత రాజ్యాంగబద్ధ పార్లమెంటు చట్టమే స్వయంగా సార్వభౌమ హామీ ఇస్తుంది.',
      },
      fullExplanation: {
        en: 'Unlike private insurers, Section 37 makes the Government of India legally accountable for every policyholder rupee. Your money carries sovereign treasury security.',
        te: 'ప్రపంచంలో ఏ ప్రైవేట్ సంస్థ ఇవ్వలేని చట్టబద్ధ రక్షణ ఇది. బ్యాంకులు లేదా ప్రైవేట్ సంస్థలు చేతులెత్తేసినా, ఎల్.ఐ.సి చెల్లింపులు కేంద్ర ప్రభుత్వ హామీతో నూరుశాతం రక్షించబడతాయి.',
      },
      keyFact: {
        en: 'Statutory Act • Sum Assured & Bonus Protected • Zero Default Risk',
        te: 'పార్లమెంటు చట్టబద్ధం • బోనస్ & మూలధన భద్రత • సున్నా నష్టభయం',
      },
    },
    {
      id: 'fact-vedic-motto',
      year: { en: 'MOTTO', te: 'ధ్యేయం' },
      badge: {
        en: 'SACRED PROMISE',
        te: 'పవిత్ర ధ్యేయం',
      },
      icon: Flame,
      image: '/images/lic_protective_hands.jpg',
      headline: {
        en: 'Two caring hands sheltering the eternal flame: “Yogakshemam Vahamyaham”.',
        te: 'రెండు రక్షక హస్తాలు దీపశిఖను కాపాడే పవిత్ర చిహ్నం — “యోగక్షేమం వహామ్యహం”.',
      },
      shortSummary: {
        en: 'Derived from Bhagavad Gita 9.22, meaning “Your Welfare Is Our Responsibility”.',
        te: 'భగవద్గీత 9వ అధ్యాయం 22వ శ్లోకం నుండి స్వీకరించబడిన నిత్య జీవన ధర్మం.',
      },
      fullExplanation: {
        en: 'LIC’s emblem symbolizes a sacred covenant: preserving family dignity through life’s unexpected storms with unflinching reliability and compassion.',
        te: 'తుఫానుల్లోనూ కొడిగట్టని దీపంలా, కుటుంబాల ఆర్థిక గౌరవాన్ని తరతరాలుగా కాపాడటమే ఈ పవిత్ర దీపశిఖ మరియు రక్షక హస్తాల శాశ్వత ధ్యేయం.',
      },
      keyFact: {
        en: 'Bhagavad Gita 9.22 • 7 Decades of Fidelity • Family Welfare',
        te: 'భగవద్గీత 9.22 శ్లోకం • 7 దశాబ్దాల విశ్వసనీయత • కుటుంబ సంక్షేమం',
      },
    },
    {
      id: 'fact-claim-settlement',
      year: { en: '98.5%+', te: '98.5%+' },
      badge: {
        en: 'CLAIM INTEGRITY',
        te: 'క్లెయిమ్ విశ్వసనీయత',
      },
      icon: HeartHandshake,
      image: '/images/lic_claim_settlement.jpg',
      headline: {
        en: 'World-class 98.5%+ claim settlement ratio with swift doorstep disbursement.',
        te: '98.5% పైగా తిరుగులేని క్లెయిమ్ చెల్లింపు నిష్పత్తి — కష్టకాలంలో నిలిచే ఆత్మీయ భరోసా.',
      },
      shortSummary: {
        en: 'Over 2 Crore claims settled every year with deep empathy, providing immediate financial relief.',
        te: 'ఏటా 2 కోట్లకు పైగా క్లెయిమ్‌లను వేగంగా పరిష్కరిస్తూ, ఆపదలో ఉన్న కుటుంబాలకు అండగా నిలుస్తోంది.',
      },
      fullExplanation: {
        en: 'A policy is measured at the moment of crisis. LIC leads the world in speedy, hassle-free settlement, ensuring families receive their rightful funds with highest dignity.',
        te: 'ఆపద సమయంలో కుటుంబానికి ఎటువంటి శ్రమ లేకుండా క్లెయిమ్ అందించడమే ఎల్.ఐ.సి ప్రధాన ధర్మం. ఇంటి ముంగిటకే సేవలందిస్తూ బంధువులా ఆదుకుంటుంది.',
      },
      keyFact: {
        en: '₹2+ Lakh Cr Claims Annually • 250M+ Families • Hassle-Free Process',
        te: 'ఏటా ₹2+ లక్షల కోట్ల క్లెయిమ్‌లు • 25 కోట్ల పాలసీదారులు • త్వరిత పరిష్కారం',
      },
    },
    {
      id: 'fact-sovereign-scale',
      year: { en: '₹50L CR', te: '₹50L కోట్లు' },
      badge: {
        en: 'NATION BUILDER',
        te: 'జాతి సంపద',
      },
      icon: Coins,
      image: '/images/lic_sovereign_scale.jpg',
      headline: {
        en: 'Managing ₹50+ Lakh Crores, returning 95% of surplus profits back to policyholders.',
        te: '₹50 లక్షల కోట్లకు పైగా సంపద నిర్వహణ — 95% లాభాలు బోనస్ రూపంలో ప్రజలకే వాపస్.',
      },
      shortSummary: {
        en: 'India’s largest financial pillar, channelizing public savings to build highways, power, and high bonus returns.',
        te: 'దేశ నిర్మాణంలో కీలక పాత్ర పోషిస్తూనే, తన ఆర్జనలో 95% వాటాను పాలసీదారులకే బోనస్ రూపంలో పంచుతోంది.',
      },
      fullExplanation: {
        en: 'Every rupee invested in LIC not only secures your loved ones but also fuels Indian national infrastructure while multiplying safely through compounding sovereign bonuses.',
        te: 'ఎల్.ఐ.సి లో ప్రతి రూపాయి మీ కుటుంబానికి రక్షణ కల్పిస్తూనే, దేశాభివృద్ధికి తోడ్పడుతుంది మరియు లాభదాయకమైన వార్షిక బోనస్‌లతో సంపదను పెంచుతుంది.',
      },
      keyFact: {
        en: '₹50+ Lakh Crore AUM • 95% Profit to Families • Sovereign Nation Builder',
        te: '₹50+ లక్షల కోట్ల నిధులు • 95% లాభాలు ప్రజలకే • తిరుగులేని ఆర్థిక శక్తి',
      },
    },
  ];

  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  // Exactly 2 duplicates for mathematically seamless 50% translation without glitch on desktop
  const marqueeItems = [...facts, ...facts];

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const scrollLeft = mobileScrollRef.current.scrollLeft;
      const cardWidth = mobileScrollRef.current.offsetWidth * 0.84;
      const idx = Math.round(scrollLeft / cardWidth);
      if (idx !== activeMobileIdx && idx >= 0 && idx < facts.length) {
        setActiveMobileIdx(idx);
      }
    }
  };

  const scrollToMobileCard = (idx: number) => {
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.offsetWidth * 0.84;
      mobileScrollRef.current.scrollTo({
        left: idx * cardWidth,
        behavior: 'smooth',
      });
      setActiveMobileIdx(idx);
    }
  };

  return (
    <section id="roots" className="py-14 sm:py-18 px-4 sm:px-6 lg:px-10 bg-[#ECEAE5] relative select-none overflow-hidden">
      
      {/* Background Subtle Gradient Glow & High-Visibility Rangoli Watermarks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 pointer-events-none hidden md:block">
        <RangoliMotif variant="corner" size={72} opacity={0.38} />
      </div>
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 pointer-events-none hidden md:block -scale-x-100">
        <RangoliMotif variant="corner" size={72} opacity={0.38} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Pure Bilingual Section Header */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#3A3A38] mb-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span className={currentLang === 'te' ? 'font-telugu' : ''}>
              {currentLang === 'te'
                ? '1956 నుండి భారత సార్వభౌమ రక్షణ కవచం'
                : 'The Sovereign Trust of India • Established 1956'}
            </span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#1E1E1E] tracking-tight ${
            currentLang === 'te' ? 'font-telugu-heading font-normal tracking-normal py-0.5' : 'font-sans font-black'
          }`}>
            {currentLang === 'te' ? (
              <>
                మీకు తెలుసా? <span className="text-[#F59E0B] font-normal">చారిత్రక మైలురాళ్లు</span>
              </>
            ) : (
              <>
                Do You know? <span className="text-[#F59E0B] font-serif italic">Historic Milestones</span>
              </>
            )}
          </h2>

          <p className={`mt-2 text-xs sm:text-sm text-[#5A5955] font-medium max-w-xl ${
            currentLang === 'te' ? 'font-telugu leading-relaxed' : ''
          }`}>
            {currentLang === 'te'
              ? 'ప్రజల సంక్షేమం కోసం స్థాపించబడిన ఎల్.ఐ.సి చారిత్రక రక్షణ ప్రస్థానం.'
              : 'Discover the sovereign journey of India’s most trusted institution.'}
          </p>
        </div>

        {/* 1. MOBILE NATIVE SWIPE CAROUSEL (Touch-friendly, no stutter, with next-card peek preview) */}
        <div className="md:hidden relative w-full mt-2">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 px-1"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {facts.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.id}
                  className="snap-center flex-shrink-0 w-[84vw] max-w-[320px] rounded-2xl bg-white border border-[#E2DFD7] shadow-[0_6px_22px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden"
                >
                  {/* Top Image */}
                  <div className="relative w-full h-[180px] overflow-hidden rounded-t-2xl bg-charcoal-900 flex-shrink-0">
                    <Image
                      src={card.image}
                      alt={card.headline[currentLang]}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#1E1E1E]/90 text-[#F59E0B] border border-white/20 text-[10px] font-mono font-bold tracking-wider uppercase">
                      <IconComp className="w-3 h-3 text-[#F59E0B]" />
                      <span className={currentLang === 'te' ? 'font-telugu' : ''}>{card.badge[currentLang]}</span>
                    </div>

                    <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-md bg-[#F59E0B] text-[#1E1E1E] text-[10px] font-mono font-black shadow-sm">
                      {card.year[currentLang]}
                    </div>
                  </div>

                  {/* Card Bottom */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className={`text-sm font-bold text-[#1E1E1E] tracking-tight leading-snug line-clamp-2 min-h-[2.5rem] ${
                        currentLang === 'te' ? 'font-telugu font-semibold' : ''
                      }`}>
                        {card.headline[currentLang]}
                      </h3>

                      <p className={`mt-2 text-xs text-[#5A5955] leading-relaxed line-clamp-3 min-h-[3.6rem] ${
                        currentLang === 'te' ? 'font-telugu text-[12px]' : ''
                      }`}>
                        {card.shortSummary[currentLang]}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-black/5 flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                      <span className={`text-[11px] font-semibold text-[#1E1E1E] truncate ${
                        currentLang === 'te' ? 'font-telugu text-[11px]' : ''
                      }`}>
                        {card.keyFact[currentLang]}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Swipe Indicators & Arrow Controls */}
          <div className="flex items-center justify-between px-1 mt-2">
            <div className="flex items-center space-x-1.5">
              {facts.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => scrollToMobileCard(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeMobileIdx === dotIdx ? 'w-6 bg-[#F59E0B]' : 'w-1.5 bg-[#C8C5BD]'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => scrollToMobileCard(Math.max(0, activeMobileIdx - 1))}
                disabled={activeMobileIdx === 0}
                className="p-1.5 rounded-full bg-white border border-[#E2DFD7] text-[#1E1E1E] shadow-sm disabled:opacity-30 disabled:pointer-events-none active:scale-90 transition-all"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-4 h-4 text-[#1E1E1E]" />
              </button>
              <button
                onClick={() => scrollToMobileCard(Math.min(facts.length - 1, activeMobileIdx + 1))}
                disabled={activeMobileIdx === facts.length - 1}
                className="p-1.5 rounded-full bg-white border border-[#E2DFD7] text-[#1E1E1E] shadow-sm disabled:opacity-30 disabled:pointer-events-none active:scale-90 transition-all"
                aria-label="Next card"
              >
                <ChevronRight className="w-4 h-4 text-[#1E1E1E]" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. DESKTOP/TABLET CONTINUOUS MARQUEE CAROUSEL (Smooth 60FPS with pause on hover) */}
        <div className="hidden md:block relative w-full py-8 sm:py-10 overflow-hidden no-scrollbar">
          <div
            className={`carousel-track flex items-center gap-6 w-max animate-marquee hover:[animation-play-state:paused] will-change-transform ${
              hoveredCardId ? 'has-card-hover' : ''
            }`}
            style={{
              animationDuration: '40s',
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            {marqueeItems.map((card, idx) => {
              const cardKey = `${card.id}-${idx}`;
              const IconComp = card.icon;

              return (
                <div
                  key={cardKey}
                  onMouseEnter={() => setHoveredCardId(cardKey)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="carousel-card relative w-[300px] sm:w-[350px] h-[450px] sm:h-[470px] rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2DFD7] shadow-[0_4px_16px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col flex-shrink-0 overflow-hidden"
                >
                  {/* Top Image: Fixed Height & Aspect */}
                  <div className="relative w-full h-[185px] sm:h-[200px] overflow-hidden rounded-t-2xl bg-charcoal-900 flex-shrink-0">
                    <Image
                      src={card.image}
                      alt={card.headline[currentLang]}
                      fill
                      priority={idx < 4}
                      sizes="(max-width: 640px) 300px, 350px"
                      className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1E1E1E]/90 text-[#F59E0B] border border-white/20 text-[10px] font-mono font-bold tracking-wider uppercase">
                      <IconComp className="w-3 h-3 text-[#F59E0B]" />
                      <span className={currentLang === 'te' ? 'font-telugu' : ''}>{card.badge[currentLang]}</span>
                    </div>

                    {/* Top Right Year Pill: Fully Translated */}
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-md bg-[#F59E0B] text-[#1E1E1E] text-[10px] font-mono font-black shadow-sm">
                      {card.year[currentLang]}
                    </div>
                  </div>

                  {/* Card Bottom: Headline, Summary & Pinned Footer - 100% Uniform & Even Across Every Card */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Short Hook Headline (2 lines max, uniform height) */}
                      <h3 className={`text-sm sm:text-base font-bold text-[#1E1E1E] tracking-tight leading-snug line-clamp-2 min-h-[2.5rem] sm:min-h-[2.85rem] ${
                        currentLang === 'te' ? 'font-telugu font-semibold leading-snug' : ''
                      }`}>
                        {card.headline[currentLang]}
                      </h3>

                      {/* Summary Text (3 lines max, uniform height) */}
                      <p className={`mt-2.5 text-xs text-[#5A5955] leading-relaxed font-normal line-clamp-3 min-h-[3.75rem] sm:min-h-[4rem] ${
                        currentLang === 'te' ? 'font-telugu text-[12px] leading-relaxed' : ''
                      }`}>
                        {card.shortSummary[currentLang]}
                      </p>
                    </div>

                    {/* Key Historic Fact Highlight: Perfectly aligned baseline across all cards */}
                    <div className="mt-auto pt-3 border-t border-black/5 flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                      <span className={`text-[11px] font-semibold text-[#1E1E1E] truncate ${
                        currentLang === 'te' ? 'font-telugu text-[11px]' : ''
                      }`}>
                        {card.keyFact[currentLang]}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
