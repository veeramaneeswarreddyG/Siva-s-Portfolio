'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Language } from '@/types';
import { 
  CheckCircle2, 
  Landmark, 
  ShieldCheck, 
  Flame, 
  HeartHandshake, 
  Coins 
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

  // Exactly 2 duplicates for mathematically seamless 50% translation without glitch
  const marqueeItems = [...facts, ...facts];

  const isAnyCardHovered = hoveredCardId !== null;

  return (
    <section id="roots" className="py-14 sm:py-18 px-4 sm:px-6 lg:px-10 bg-[#FAF7F0]/40 backdrop-blur-[1px] relative select-none overflow-hidden">
      
      {/* Background Subtle Gradient Glow & Rangoli Watermarks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-8 left-8 pointer-events-none hidden md:block">
        <RangoliMotif variant="corner" size={100} opacity={0.15} />
      </div>
      <div className="absolute top-8 right-8 pointer-events-none hidden md:block -scale-x-100">
        <RangoliMotif variant="corner" size={100} opacity={0.15} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Pure Bilingual Section Header: No pause button, no arrows, no mixed English */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
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
              ? 'ప్రజల సంక్షేమం కోసం స్థాపించబడిన ఎల్.ఐ.సి చారిత్రక రక్షణ ప్రస్థానం. వివరాలు చూడటానికి కార్డ్ పై కర్సర్ ఉంచండి.'
              : 'Discover the sovereign journey of India’s most trusted institution. Hover on any card to explore.'}
          </p>
        </div>

        {/* ULTRA-SMOOTH GPU-ACCELERATED CAROUSEL (ZERO SCROLLBAR, ZERO LAG) */}
        <div className="relative w-full py-2 overflow-hidden no-scrollbar">
          <div
            className={`flex items-start gap-5 sm:gap-6 w-max will-change-transform ${
              isAnyCardHovered ? '[animation-play-state:paused]' : 'animate-marquee'
            }`}
            style={{
              animationDuration: '42s',
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            {marqueeItems.map((card, idx) => {
              const cardKey = `${card.id}-${idx}`;
              const isHovered = hoveredCardId === cardKey;
              const isSiblingDimmed = isAnyCardHovered && !isHovered;
              const IconComp = card.icon;

              return (
                <div
                  key={cardKey}
                  onMouseEnter={() => setHoveredCardId(cardKey)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => setHoveredCardId(isHovered ? null : cardKey)}
                  className={`group apple-press relative w-[290px] xs:w-[320px] sm:w-[350px] rounded-2xl bg-white/95 backdrop-blur-md border transition-all duration-300 ease-out cursor-pointer flex flex-col flex-shrink-0 ${
                    isHovered
                      ? 'scale-[1.03] shadow-[0_20px_45px_rgba(245,158,11,0.22)] border-[#F59E0B] z-30 opacity-100'
                      : isSiblingDimmed
                      ? 'scale-[0.98] opacity-40 border-[#E2DFD7] z-10'
                      : 'shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-lg border-[#E2DFD7] z-10 opacity-100'
                  }`}
                  style={{
                    transformOrigin: 'center center',
                  }}
                >
                  
                  {/* Top Image: Rounded Corners */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl bg-charcoal-900">
                    <Image
                      src={card.image}
                      alt={card.headline[currentLang]}
                      fill
                      priority={idx < 4}
                      sizes="(max-width: 640px) 300px, 350px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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

                  {/* Card Bottom: Headline & Full Explanation */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Short Hook Headline */}
                      <h3 className={`text-sm sm:text-base font-bold text-[#1E1E1E] tracking-tight leading-snug group-hover:text-amber-600 transition-colors ${
                        currentLang === 'te' ? 'font-telugu font-semibold leading-snug' : ''
                      }`}>
                        {card.headline[currentLang]}
                      </h3>

                      {/* Summary Text */}
                      <p className={`mt-2 text-xs text-[#5A5955] leading-relaxed font-normal ${
                        currentLang === 'te' ? 'font-telugu text-[12px] leading-relaxed' : ''
                      }`}>
                        {card.shortSummary[currentLang]}
                      </p>
                    </div>

                    {/* EXPANDED IN-DEPTH EXPLANATION: Shown Smoothly on Hover */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isHovered ? 'max-h-[260px] opacity-100 mt-3 pt-3 border-t border-[#C8C5BD]/60' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className={`text-xs text-[#3A3A38] leading-relaxed font-normal ${
                        currentLang === 'te' ? 'font-telugu leading-relaxed text-xs' : ''
                      }`}>
                        {card.fullExplanation[currentLang]}
                      </p>

                      {/* Key Historic Fact Highlight */}
                      <div className="mt-3 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                        <span className={`text-[11px] font-semibold text-[#1E1E1E] ${
                          currentLang === 'te' ? 'font-telugu text-[11px]' : ''
                        }`}>
                          {card.keyFact[currentLang]}
                        </span>
                      </div>
                    </div>

                    {/* Subtly animated prompt when card is not hovered */}
                    {!isHovered && (
                      <div className="mt-3 pt-2 border-t border-black/5 flex items-center justify-between text-[11px] font-mono text-[#8C857B]">
                        <span className={currentLang === 'te' ? 'font-telugu text-[11px]' : ''}>
                          {currentLang === 'te' ? 'వివరాలు చూడండి' : 'Hover to learn more'}
                        </span>
                        <span className="text-[#F59E0B] font-bold">→</span>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Interactive Pill Indicator (Apple style) */}
        <div className="md:hidden flex items-center justify-center mt-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 backdrop-blur-md text-[11px] font-bold text-[#5A5955]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className={currentLang === 'te' ? 'font-telugu' : ''}>
              {currentLang === 'te' ? 'కార్డ్ తాకి వివరాలు చూడండి' : 'Tap any card to expand full story'}
            </span>
            <span className="text-[#F59E0B] font-bold">›</span>
          </div>
        </div>

      </div>
    </section>
  );
};
