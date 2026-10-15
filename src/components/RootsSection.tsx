'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '@/types';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Pause,
  Play,
  CheckCircle2,
  Landmark,
  ShieldCheck,
  Train,
  Flame,
  FileText
} from 'lucide-react';
import { RangoliMotif } from './RangoliMotif';

interface RootsSectionProps {
  currentLang: Language;
}

interface FactCard {
  id: string;
  year: string;
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
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 5 Rich Historic Facts matching RailOne "Do You Know?" style with relevant photography
  const facts: FactCard[] = [
    {
      id: 'fact-1853-railway',
      year: '1853',
      badge: {
        en: 'HERITAGE ORIGINS',
        te: 'చారిత్రక ఆరంభం',
      },
      icon: Train,
      image: '/images/lic_vintage_railway.jpg',
      headline: {
        en: 'First passenger train ran between Bori Bandar to Thane on April 16, 1853.',
        te: 'భారతదేశపు మొట్టమొదటి ప్యాసింజర్ రైలు ఏప్రిల్ 16, 1853న బోరీ బందర్ నుండి థానే వరకు నడిచింది.',
      },
      shortSummary: {
        en: 'The dawn of India’s transport and economic connectivity, which later laid the foundation for national financial institutions.',
        te: 'భారతదేశ రవాణా మరియు ఆర్థిక అనుసంధానానికి నాంది పలికి, భవిష్యత్ జాతీయ ఆర్థిక సంస్థల స్థాపనకు పునాది వేసింది.',
      },
      fullExplanation: {
        en: 'Just as Indian Railways commenced its historic 34-km maiden journey on April 16, 1853, transforming the subcontinent, life insurance emerged in India to safeguard families against unpredictable hardships. Over time, LIC and Indian Railways became twin pillars of sovereign public infrastructure.',
        te: '1853లో కేవలం 34 కిలోమీటర్ల ప్రయాణంతో మొదలైన భారతీయ రైల్వే ఎలాగైతే దేశ రూపురేఖలను మార్చిందో... అదే కాలంలో భారత ప్రజల రక్షణ కోసం బీమా రంగం ఆరంభమైంది. నేడు ఎల్.ఐ.సి మరియు భారతీయ రైల్వేలు దేశ సార్వభౌమ నిర్మాణానికి రెండు ప్రధాన మూలస్తంభాలు.',
      },
      keyFact: {
        en: '34 km route • 400 passengers • 3 steam locomotives',
        te: '34 కి.మీ మార్గం • 400 మంది ప్రయాణికులు • 3 చారిత్రక ఇంజన్లు',
      },
    },
    {
      id: 'fact-1956-founding',
      year: '1956',
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
        en: 'To end private defaults, the Parliament of India nationalized life insurance to guarantee absolute safety of public savings.',
        te: 'ప్రైవేట్ కంపెనీల మోసాలకు ముగింపు పలికి, ప్రజల కష్టార్జితానికి పూర్తి భద్రత కల్పించేందుకు జాతీయ సంస్థగా ఆవిర్భవించింది.',
      },
      fullExplanation: {
        en: 'The Life Insurance Corporation of India was officially born on September 1, 1956, after Parliament passed the historic LIC Act on June 19, 1956. By nationalizing and amalgamating 154 Indian insurers, 16 foreign insurers, and 75 provident societies, India established an untouchable sanctuary of public trust with an initial capital of ₹5 Crore.',
        te: 'భారత పార్లమెంటు ఎల్.ఐ.సి చట్టం ద్వారా 154 భారతీయ సంస్థలు, 16 విదేశీ సంస్థలు, 75 ప్రావిడెంట్ సొసైటీలను విలీనం చేసి ప్రభుత్వ అజమాయిషీలోకి తెచ్చింది. సామాన్య పౌరుడి పైసా కూడా వృథా కాకూడదనే పవిత్ర లక్ష్యంతో ఈ సంస్థ ప్రారంభమైంది.',
      },
      keyFact: {
        en: '245 Insurers Merged • ₹5 Cr Seed Capital • 100% Public Trust',
        te: '245 సంస్థల విలీనం • రూ. 5 కోట్ల ప్రాథమిక మూలధనం • నూరుశాతం ప్రభుత్వ భరోసా',
      },
    },
    {
      id: 'fact-section-37',
      year: '100% SAFE',
      badge: {
        en: 'SOVEREIGN GUARANTEE',
        te: 'సార్వభౌమ హామీ',
      },
      icon: ShieldCheck,
      image: '/images/lic_sovereign_guarantee.jpg',
      headline: {
        en: 'Section 37 of LIC Act gives 100% Sovereign Guarantee by Government of India.',
        te: 'ఎల్.ఐ.సి చట్టం సెక్షన్ 37 ప్రకారం ప్రతి రూపాయికీ భారత ప్రభుత్వమే పూర్తి గ్యారెంటీ.',
      },
      shortSummary: {
        en: 'Both Sum Assured and all declared bonuses are backed by the Consolidated Fund of India by statutory law.',
        te: 'పాలసీ హామీ మొత్తం మరియు బోనస్‌కు భారత రాజ్యాంగబద్ధ పార్లమెంటు చట్టమే స్వయంగా సార్వభౌమ హామీ ఇస్తుంది.',
      },
      fullExplanation: {
        en: 'Section 37 of the LIC Act guarantees that the sum assured and all declared bonuses payable by LIC are legally backed and guaranteed by the Government of India. In the history of Indian finance, no private life insurance firm offers this parliamentary statutory guarantee, making LIC policies as safe as sovereign treasury currency.',
        te: 'ప్రపంచంలో ఏ ప్రైవేట్ ఇన్సూరెన్స్ కంపెనీ ఇవ్వలేని అత్యున్నత చట్టబద్ధ రక్షణ ఇది. ఎల్.ఐ.సి పాలసీదారుడికి అందాల్సిన ప్రతి పైసాకు కేంద్ర ప్రభుత్వమే జవాబుదారీ. బ్యాంకులు లేదా ప్రైవేట్ సంస్థలు చేతులెత్తేసినా, ఎల్.ఐ.సి చెల్లింపులు తిరుగులేని ప్రభుత్వ హామీతో సాగుతాయి.',
      },
      keyFact: {
        en: 'Statutory Act • Sum Assured & Bonus Protected • Zero Default',
        te: 'పార్లమెంటు చట్టబద్ధం • బోనస్ & మూలధన భద్రత • సున్నా నష్టభయం',
      },
    },
    {
      id: 'fact-vedic-motto',
      year: 'MOTTO',
      badge: {
        en: 'SACRED PROMISE',
        te: 'పవిత్ర ధ్యేయం',
      },
      icon: Flame,
      image: '/images/lic_protective_hands.jpg',
      headline: {
        en: 'The sacred emblem: Two caring hands sheltering the eternal flame of security.',
        te: 'రెండు రక్షక హస్తాలు దీపశిఖను కాపాడే పవిత్ర చిహ్నం — “యోగక్షేమం వహామ్యహం”.',
      },
      shortSummary: {
        en: 'Derived from Bhagavad Gita 9.22, meaning “Your Welfare Is Our Responsibility”.',
        te: 'భగవద్గీత 9వ అధ్యాయం 22వ శ్లోకం నుండి స్వీకరించబడిన జీవన ధర్మం.',
      },
      fullExplanation: {
        en: 'The iconic emblem of LIC displays two cupped hands preserving a sacred flame, accompanied by the Sanskrit shloka “Yogakshemam Vahamyaham” (Your Welfare Is Our Responsibility). Derived from the Bhagavad Gita (9.22), it symbolizes LIC’s lifelong covenant to guard every Indian household against life’s storms.',
        te: 'భగవద్గీతలోని “తేషాం నిత్యాభియుక్తానాం యోగక్షేమం వహామ్యహం” అనే శ్లోకం నుండి గ్రహించబడిన ఈ వాక్యం... “మీ సంక్షేమం మా బాధ్యత” అని అర్థం. తుఫానుల్లోనూ కొడిగట్టని దీపంలా, కుటుంబాల ఆర్థిక భద్రతను తరతరాలుగా కాపాడటమే ఈ లోగో సారాంశం.',
      },
      keyFact: {
        en: 'Bhagavad Gita 9.22 • 7 Decades of Fidelity • Family Welfare',
        te: 'భగవద్గీత 9.22 శ్లోకం • 7 దశాబ్దాల విశ్వసనీయత • కుటుంబ రక్షణ',
      },
    },
    {
      id: 'fact-chenab-infra',
      year: 'INFRA',
      badge: {
        en: 'NATION BUILDER',
        te: 'జాతి నిర్మాణం',
      },
      icon: FileText,
      image: '/images/lic_nation_railway.jpg',
      headline: {
        en: 'Chenab Railway Bridge in J&K is the World’s highest rail bridge, powered by sovereign funds.',
        te: 'జమ్మూ కాశ్మీర్‌లోని చీనాబ్ వంతెన ప్రపంచంలోనే అత్యంత ఎత్తైన రైల్వే వంతెన — దేశ నిర్మాణంలో భాగస్వామ్యం.',
      },
      shortSummary: {
        en: 'LIC invests public savings into Indian Railways, highways, power grids, and monumental national bridges.',
        te: 'ఎల్.ఐ.సి నిధులు భారతీయ రైల్వేలు, జాతీయ రహదారులు, విద్యుత్ గ్రిడ్లు మరియు వంతెనల నిర్మాణానికి వెన్నెముకగా నిలుస్తున్నాయి.',
      },
      fullExplanation: {
        en: 'LIC is not merely an insurer; it is India’s greatest sovereign nation-builder. Massive investments from LIC policyholder reserves fund critical national infrastructure — including Indian Railways corridors, high-altitude mountain rail bridges across Jammu & Kashmir, solar solar power projects, and clean drinking water networks across thousands of villages.',
        te: 'ఎల్.ఐ.సి అంటే కేవలం బీమా మాత్రమే కాదు, భారతదేశ ఆర్థిక శక్తికి వెన్నెముక. చీనాబ్ వంటి ప్రపంచ ప్రఖ్యాత రైల్వే వంతెనలు, హైవేలు, విద్యుత్ కేంద్రాలు, గ్రామాలకు తాగునీటి ప్రాజెక్టుల నిర్మాణంలో ఎల్.ఐ.సి అందించే ఆర్థిక సహకారం అపారమైనది.',
      },
      keyFact: {
        en: '359m Above River Bed • 35m Higher Than Eiffel Tower • Sovereign Assets',
        te: 'నదీమట్టానికి 359 మీ. ఎత్తు • ఈఫిల్ టవర్ కంటే 35 మీ. ఎక్కువ • జాతీయ సంపద',
      },
    },
  ];

  // Repeat items for seamless continuous infinite marquee
  const marqueeItems = [...facts, ...facts, ...facts];

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const scrollToReachOut = () => {
    const el = document.getElementById('reach-out');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="roots" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-10 bg-[#ECEAE5] relative select-none overflow-hidden border-b border-[#C8C5BD]/60">
      
      {/* Background Subtle Gradient Glow & Rangoli Watermarks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-8 left-8 pointer-events-none hidden md:block">
        <RangoliMotif variant="corner" size={100} opacity={0.15} />
      </div>
      <div className="absolute top-8 right-8 pointer-events-none hidden md:block -scale-x-100">
        <RangoliMotif variant="corner" size={100} opacity={0.15} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header: Styled after RailOne "Do You know?" with our clean typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#3A3A38] mb-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                {currentLang === 'te'
                  ? '1956 నుండి భారత సార్వభౌమ రక్షణ కవచం'
                  : 'The Sovereign Trust of India • Established 1956'}
              </span>
            </div>
            
            {/* Header Title: "Do You know?" */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E1E1E] tracking-tight font-sans">
              {currentLang === 'te' ? (
                <>
                  మీకు తెలుసా? <span className="text-[#F59E0B] font-serif text-2xl sm:text-4xl">Do You Know?</span>
                </>
              ) : (
                <>
                  Do You know? <span className="text-[#F59E0B] font-serif italic text-2xl sm:text-4xl">Historic Milestones</span>
                </>
              )}
            </h2>

            <p className={`mt-2 text-xs sm:text-sm text-[#5A5955] font-medium max-w-xl ${
              currentLang === 'te' ? 'font-telugu' : ''
            }`}>
              {currentLang === 'te'
                ? 'భారతీయ రైల్వేల ఆరంభం నుండి ఎల్.ఐ.సి సార్వభౌమ రక్షణ వరకు... దేశ చరిత్రలోని విశేషాలు. (వివరాల కోసం కార్డ్ పై కర్సర్ ఉంచండి).'
                : 'From the dawn of Indian transport to the sovereign creation of LIC. Hover or tap any card to view full historical facts.'}
            </p>
          </div>

          {/* Controls: Prev/Next & Pause/Play toggle */}
          <div className="flex items-center space-x-2 self-start md:self-end">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-3 py-1.5 rounded-full bg-white border border-[#C8C5BD] text-xs font-bold text-[#1E1E1E] flex items-center space-x-1.5 shadow-sm hover:bg-[#F59E0B] hover:border-[#F59E0B] transition-all active:scale-95"
              aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-[#1E1E1E]" /> : <Pause className="w-3.5 h-3.5 fill-[#1E1E1E]" />}
              <span className="text-[11px] font-mono uppercase">{isPaused ? 'RESUME' : 'PAUSE'}</span>
            </button>

            <button
              onClick={handlePrev}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#F59E0B] text-[#1E1E1E] flex items-center justify-center transition-all duration-200 border border-[#C8C5BD] shadow-sm active:scale-90"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={handleNext}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-[#1E1E1E] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-90 font-bold"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* CONTINUOUS AUTO-MOVING CAROUSEL WITH INTERACTIVE HOVER EXPANSION */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!hoveredCardId) setIsPaused(false);
          }}
          className="relative w-full py-4 overflow-x-auto scrollbar-none snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div
            className={`flex items-start gap-5 sm:gap-6 w-max ${
              isPaused ? '' : 'animate-marquee hover:[animation-play-state:paused]'
            }`}
            style={{
              animationDuration: '45s',
            }}
          >
            {marqueeItems.map((card, idx) => {
              const isHovered = hoveredCardId === `${card.id}-${idx}`;
              const IconComp = card.icon;

              return (
                <div
                  key={`${card.id}-${idx}`}
                  onMouseEnter={() => {
                    setHoveredCardId(`${card.id}-${idx}`);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredCardId(null);
                    setIsPaused(false);
                  }}
                  onClick={() => {
                    setHoveredCardId(isHovered ? null : `${card.id}-${idx}`);
                    setIsPaused(true);
                  }}
                  className={`group relative rounded-2xl bg-white border transition-all duration-400 ease-out cursor-pointer flex flex-col snap-start flex-shrink-0 ${
                    isHovered
                      ? 'w-[340px] xs:w-[380px] sm:w-[420px] scale-[1.02] shadow-[0_20px_50px_rgba(0,0,0,0.18)] border-[#F59E0B] z-30'
                      : 'w-[280px] xs:w-[310px] sm:w-[330px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-lg border-[#E2DFD7] z-10'
                  }`}
                >
                  
                  {/* Top Image: Rounded Corners matching reference image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl bg-charcoal-900">
                    <Image
                      src={card.image}
                      alt={card.headline[currentLang]}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 320px, 420px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1E1E1E]/85 backdrop-blur-md text-[#F59E0B] border border-white/20 text-[10px] font-mono font-black tracking-wider uppercase">
                      <IconComp className="w-3 h-3 text-[#F59E0B]" />
                      <span>{card.badge[currentLang]}</span>
                    </div>

                    {/* Top Right Year Pill */}
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-md bg-[#F59E0B] text-[#1E1E1E] text-[10px] font-mono font-black shadow-sm">
                      {card.year}
                    </div>

                  </div>

                  {/* Card Bottom: Headline & Full In-Depth Explanation (Expands on Hover) */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    
                    <div>
                      {/* Short Hook Headline (Matches RailOne UI card caption) */}
                      <h3 className={`text-sm sm:text-base font-bold text-[#1E1E1E] tracking-tight leading-snug group-hover:text-amber-600 transition-colors ${
                        currentLang === 'te' ? 'font-telugu leading-snug' : ''
                      }`}>
                        {card.headline[currentLang]}
                      </h3>

                      {/* Summary Text (Always visible) */}
                      <p className={`mt-2 text-xs text-[#5A5955] leading-relaxed font-normal ${
                        currentLang === 'te' ? 'font-telugu text-[11px]' : ''
                      }`}>
                        {card.shortSummary[currentLang]}
                      </p>
                    </div>

                    {/* EXPANDED IN-DEPTH EXPLANATION: Shown on Hover / Tap */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isHovered ? 'max-h-[300px] opacity-100 mt-4 pt-3 border-t border-[#C8C5BD]/60' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className={`text-xs text-[#3A3A38] leading-relaxed font-light ${
                        currentLang === 'te' ? 'font-telugu leading-relaxed text-xs' : ''
                      }`}>
                        {card.fullExplanation[currentLang]}
                      </p>

                      {/* Key Historic Fact Highlight */}
                      <div className="mt-3 p-2.5 rounded-xl bg-cream-200 border border-cream-400/80 flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                        <span className={`text-[11px] font-semibold text-[#1E1E1E] ${
                          currentLang === 'te' ? 'font-telugu text-[10px]' : ''
                        }`}>
                          {card.keyFact[currentLang]}
                        </span>
                      </div>

                      {/* Direct CTA inside expanded card */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToReachOut();
                        }}
                        className="mt-3 w-full py-2 rounded-xl bg-[#1E1E1E] hover:bg-black text-[#F59E0B] text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                      >
                        <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                          {currentLang === 'te' ? 'చీఫ్ అడ్వైజర్‌ను సంప్రదించండి' : 'Consult Chief Advisor'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                      </button>
                    </div>

                    {/* Interactive Expand Prompt Indicator */}
                    {!isHovered && (
                      <div className="mt-3 pt-2 border-t border-black/5 flex items-center justify-between text-[11px] font-mono text-[#8C857B]">
                        <span>{currentLang === 'te' ? 'వివరాలు చూడండి' : 'Hover to learn more'}</span>
                        <span className="text-[#F59E0B] font-bold">→</span>
                      </div>
                    )}

                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe / Tap Hint */}
        <div className="md:hidden flex items-center justify-center space-x-2 text-[11px] font-bold text-[#8C857B] mt-2 mb-2">
          <span className="text-[#F59E0B] animate-pulse">‹</span>
          <span>{currentLang === 'te' ? 'కార్డ్ తాకి వివరాలు చూడండి • స్వైప్ చేయండి' : 'Tap any card to view detailed history • Swipe'}</span>
          <span className="text-[#F59E0B] animate-pulse">›</span>
        </div>

        {/* BOTTOM METRICS & ADVISORY LIAISON */}
        <div className="mt-6 pt-5 border-t border-[#C8C5BD] flex flex-col sm:flex-row items-center justify-between gap-4">
          
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

          {/* Right Action: Consult Chief Advisor */}
          <div className="flex items-center space-x-3">
            <button
              onClick={scrollToReachOut}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#1E1E1E] hover:bg-black text-white text-xs font-bold shadow-md hover-lift active:scale-95 transition-all"
            >
              <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                {currentLang === 'te' ? 'శివరామిరెడ్డి గారితో మాట్లాడండి' : 'Connect With Chief Advisor'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
