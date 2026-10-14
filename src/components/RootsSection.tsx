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
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Shield,
  Award
} from 'lucide-react';

interface RootsSectionProps {
  currentLang: Language;
}

export const RootsSection: React.FC<RootsSectionProps> = ({ currentLang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const licStories = [
    {
      id: 'sovereign-guarantee',
      icon: ShieldCheck,
      stat: { en: '100% Sovereign Backed', te: '100% ప్రభుత్వ హామీ' },
      badge: { en: 'SECTION 37 • LIC ACT 1956', te: 'సెక్షన్ 37 • పార్లమెంటు చట్టం' },
      title: {
        en: 'The Sovereign Guarantee of the Government of India',
        te: 'భారత ప్రభుత్వ సార్వభౌమ రక్షణ & చట్టబద్ధమైన హామీ',
      },
      tagline: {
        en: 'Your hard-earned savings can never default or be compromised.',
        te: 'మీ సంపాదన ప్రతి పైసా చట్టబద్ధంగా నూరుశాతం సురక్షితం.',
      },
      story: {
        en: 'Unlike private insurance corporations or volatile mutual funds, every single policy issued by LIC carries the legal Sovereign Guarantee of the Government of India under Section 37 of the LIC Act. The sum assured and all declared bonuses are legally pledged by the central government. In an uncertain economic world, LIC is the ultimate haven of total capital safety.',
        te: 'ప్రైవేట్ కంపెనీలు లేదా ఒడిదుడుకులతో కూడిన మార్కెట్ పెట్టుబడులలా కాకుండా... ఎల్.ఐ.సి అందించే ప్రతి పాలసీకి ఎల్.ఐ.సి చట్టం సెక్షన్ 37 ప్రకారం భారత ప్రభుత్వం పూర్తి సార్వభౌమ హామీ ఇస్తుంది. మీరు దాచుకున్న పాలసీ మొత్తం మరియు బోనస్‌కు కేంద్ర ప్రభుత్వమే చట్టబద్ధమైన గ్యారెంటీ. ఎలాంటి ఆర్థిక సంక్షోభంలోనైనా మీ పెట్టుబడి అత్యంత భద్రం.',
      },
      highlights: [
        { en: 'Parliamentary Law', te: 'పార్లమెంటు చట్టం' },
        { en: 'Zero Default Risk', te: 'రిస్క్ లేని భద్రత' },
        { en: 'Statutory Safety', te: 'చట్టబద్ధ రక్షణ' },
      ],
    },
    {
      id: 'claim-settlement',
      icon: HeartHandshake,
      stat: { en: '98.5%+ Settlement Ratio', te: '98.5%+ క్లెయిమ్స్ పరిష్కారం' },
      badge: { en: 'GLOBAL BENCHMARK OF TRUST', te: 'ప్రపంచ స్థాయి అత్యుత్తమ రికార్డు' },
      title: {
        en: 'Unmatched Claim Settlement Record & Humanity',
        te: 'మాట తప్పని నైతికత • తక్షణ & కారుణ్య క్లెయిమ్ పరిష్కారాలు',
      },
      tagline: {
        en: 'Honoring promises with speed, compassion, and zero bureaucracy.',
        te: 'కష్టకాలంలో కుటుంబానికి కొండంత అండగా నిలిచే నైతిక బాధ్యత.',
      },
      story: {
        en: 'An insurance policy is only as honest as its claim settlement. LIC settles thousands of death and maturity claims every day across India, maintaining one of the highest claim settlement ratios on earth (over 98.5%). Through natural calamities, wars, and pandemics, LIC has consistently stood at the doorsteps of Indian households, delivering financial lifelines without delay.',
        te: 'పాలసీ నిజమైన విలువ తెలిసేది ఆపద వచ్చినప్పుడే. భారతదేశంలో ప్రతిరోజూ వేలాది కుటుంబాలకు మెచ్యూరిటీ మరియు డెత్ క్లెయిమ్‌లను అత్యంత వేగంగా పరిష్కరిస్తూ ఎల్.ఐ.సి ప్రపంచంలోనే అత్యుత్తమ 98.5% పైగా సెటిల్మెంట్ రికార్డును సొంతం చేసుకుంది. కరోనా, ప్రకృతి వైపరీత్యాలు ఏవైనా... ఇచ్చిన మాటను గౌరవించి కుటుంబాలను ఆదుకోవడంలో ఎల్.ఐ.సి కి సాటిలేదు.',
      },
      highlights: [
        { en: 'Fast Track Verification', te: 'వేగవంతమైన తనిఖీ' },
        { en: 'Thousands of Cr. Daily', te: 'కోట్ల రూపాయల పంపిణీ' },
        { en: 'Compassionate Service', te: 'మానవీయ సేవ' },
      ],
    },
    {
      id: 'asset-base',
      icon: Landmark,
      stat: { en: '₹50+ Lakh Crores Assets', te: '₹50+ లక్షల కోట్ల ఆస్తులు' },
      badge: { en: 'FINANCIAL COLOSSUS OF BHARAT', te: 'భారతదేశ ఆర్థిక మహాసౌధం' },
      title: {
        en: 'Managing Wealth Bigger Than Most Global Banks',
        te: 'ప్రపంచ ప్రఖ్యాత బ్యాంకుల కంటే పటిష్టమైన మహా సంపద',
      },
      tagline: {
        en: 'An unshakeable financial fortress protecting 25+ Crore policyholders.',
        te: '25 కోట్లకు పైగా పాలసీదారుల జీవిత పొదుపుకు తిరుగులేని రక్షణ.',
      },
      story: {
        en: 'Managing an unprecedented asset base exceeding ₹50 Lakh Crores ($600+ Billion USD) and stewarding over 25 Crore active individual policies, LIC is a monumental institution of national stability. When you choose LIC, you are aligning your household with the strongest, most stable financial titan on the Asian continent.',
        te: '₹50 లక్షల కోట్లకు పైగా సంపదను సమర్థవంతంగా నిర్వహిస్తూ, 25 కోట్లకు పైగా పాలసీదారుల జీవితాలకు భరోసా ఇస్తున్న ఎల్.ఐ.సి ఒక సంస్థ మాత్రమే కాదు... దేశ ఆర్థిక వ్యవస్థకే వెన్నెముక. మీరు ఎల్.ఐ.సి పాలసీ తీసుకున్నప్పుడు, మీ కుటుంబ భవిష్యత్తు ఆసియాలోనే అత్యంత శక్తివంతమైన ఆర్థిక మహాసౌధం నీడలో సురక్షితంగా ఉంటుంది.',
      },
      highlights: [
        { en: '25+ Crore Families', te: '25+ కోట్ల కుటుంబాలు' },
        { en: 'Unrivaled Liquidity', te: 'అపారమైన నిధులు' },
        { en: 'Generational Strength', te: 'తరతరాల బలం' },
      ],
    },
    {
      id: 'nation-building',
      icon: Building2,
      stat: { en: 'People’s Money for People’s Good', te: 'ప్రజాధనం దేశాభివృద్ధికి' },
      badge: { en: 'NATION BUILDING PILLAR', te: 'జాతి నిర్మాణంలో అగ్రగామి' },
      title: {
        en: 'Your Premium Powers India’s Railways, Dams & Highways',
        te: 'మీ ప్రీమియం దేశ నిర్మాణానికి కొండంత ఊతం',
      },
      tagline: {
        en: 'Securing your family today while building the nation for tomorrow.',
        te: 'మీ ఇంటిని కాపాడుతూనే... దేశ ప్రగతికి బాటలు వేసే పవిత్ర పొదుపు.',
      },
      story: {
        en: 'Every rupee you invest in an LIC policy performs a sacred dual mission: it constructs an unassailable financial shield for your children, while simultaneously financing India’s national highways, railway networks, power plants, and agricultural irrigation dams. With LIC, your family’s prosperity and the nation’s growth move hand in hand.',
        te: 'మీరు ఎల్.ఐ.సి లో కట్టే ప్రతి పైసా రెండు విధాలుగా ఉపయోగపడుతుంది: ఒకటి మీ పిల్లల భవిష్యత్తుకు పూర్తి ఆర్థిక రక్షణ కల్పిస్తుంది; రెండవది మన దేశంలోని జాతీయ రహదారులు, రైల్వేలు, సాగునీటి ప్రాజెక్టులు, మరియు విద్యుత్ కేంద్రాల నిర్మాణానికి నిధులు సమకూరుస్తుంది. ఎల్.ఐ.సి లో దాచుకోవడం అంటే మీ ఇంటితో పాటు మన దేశాన్ని నిర్మించడమే.',
      },
      highlights: [
        { en: 'National Highways & Rails', te: 'రైల్వేలు & రహదారులు' },
        { en: 'Clean Drinking Water', te: 'తాగునీటి పథకాలు' },
        { en: 'Rural Electrification', te: 'గ్రామీణ విద్యుదీకరణ' },
      ],
    },
    {
      id: 'generational-bond',
      icon: Users,
      stat: { en: '7 Decades of Devotion', te: '70 ఏళ్ల పవిత్ర అనుబంధం' },
      badge: { en: 'YOGAKSHEMAM VAHAMYAHAM', te: 'యోగక్షేమం వహామ్యహం' },
      title: {
        en: 'Grandparents to Grandchildren: A Bond of 70 Years',
        te: 'తాతల నుండి మనుమల వరకు... 7 దశాబ్దాల ఆత్మీయ విశ్వాసం',
      },
      tagline: {
        en: 'Private startups come and go; LIC remains an eternal companion.',
        te: 'కాలాలు మారినా, తరాలు మారినా... ఎప్పటికీ చెదరని బంధం.',
      },
      story: {
        en: 'Since September 1, 1956, LIC has been the most trusted silent partner in Indian homes. From funding daughters’ higher education to weddings and serene post-retirement pensions, millions of families have achieved dignity through timely LIC maturity payouts. Trust that has been tested across generations is the only trust you can bet your life upon.',
        te: '1956 సెప్టెంబర్ 1 నుండి ప్రతి భారతీయ గడపలో ఎల్.ఐ.సి ఒక కుటుంబ సభ్యుడిగా నిలిచింది. పిల్లల ఉన్నత చదువులు, ఆడబిడ్డల పెళ్లిళ్లు, మరియు వృద్ధాప్యంలో గౌరవప్రదమైన పెన్షన్... తరతరాలుగా కోట్లాది కుటుంబాలు ఎల్.ఐ.సి అందించిన ఆర్థిక భరోసాతోనే తమ కలలను నిజం చేసుకున్నాయి. కాలపరీక్షను తట్టుకున్న ఈ బంధమే మీ కుటుంబానికి శాశ్వత రక్షణ.',
      },
      highlights: [
        { en: 'Education & Marriage', te: 'చదువు & వివాహ నిధి' },
        { en: 'Guaranteed Pension', te: 'గౌరవప్రద పెన్షన్' },
        { en: 'Lifetime Protection', te: 'జీవితాంతం తోడు' },
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? licStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === licStories.length - 1 ? 0 : prev + 1));
  };

  const currentStory = licStories[currentIndex];
  const IconComponent = currentStory.icon;

  const scrollToReachOut = () => {
    const el = document.getElementById('reach-out');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="roots" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#ECEAE5] relative select-none overflow-hidden">
      
      {/* Background ambient watermarks */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header: Inspiring & Customer-Attracting */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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
            <Sparkles className="inline-block w-6 h-6 ml-2 text-[#F59E0B] align-baseline" />
          </h2>

          <p className={`mt-3 text-sm sm:text-base text-[#5A5955] font-medium max-w-2xl mx-auto leading-relaxed ${
            currentLang === 'te' ? 'font-telugu' : ''
          }`}>
            {currentLang === 'te'
              ? 'భారత పార్లమెంటు చట్టంతో నిర్మితమై, 100% ప్రభుత్వ సార్వభౌమ హామీతో... “యోగక్షేమం వహామ్యహం” అనే పవిత్ర ఆశయంతో సాగుతున్న దేశపు అత్యున్నత రక్షణ సంస్థ.'
              : 'Built by the Parliament of India, backed by 100% Sovereign Guarantee under Section 37, and dedicated to one timeless promise: “Yogakshemam Vahamyaham” (Your Welfare Is Our Responsibility).'}
          </p>
        </div>

        {/* SWIPING CAROUSEL STAGE */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Swiping Card Container */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#1C1A18] text-white p-6 sm:p-10 md:p-12 shadow-2xl border-2 border-[#F59E0B]/30 min-h-[440px] sm:min-h-[460px] flex flex-col justify-between">
            
            {/* Top Stat Bar & Category Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F59E0B] text-[#1E1E1E] flex items-center justify-center font-black shadow-md flex-shrink-0">
                    <IconComponent className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#F59E0B] font-bold block">
                      {currentStory.badge[currentLang]}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white">
                      {currentStory.stat[currentLang]}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                    Pillar 0{currentIndex + 1} / 0{licStories.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Narrative Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex + '-content'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="py-6 sm:py-8 space-y-4 my-auto"
              >
                <h3 className={`text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight ${
                  currentLang === 'te' ? 'font-telugu leading-snug' : ''
                }`}>
                  {currentStory.title[currentLang]}
                </h3>

                <p className={`text-xs sm:text-sm font-semibold text-[#F59E0B] ${
                  currentLang === 'te' ? 'font-telugu' : ''
                }`}>
                  {currentStory.tagline[currentLang]}
                </p>

                <p className={`text-sm sm:text-base text-[#D4D0C5] leading-relaxed font-light ${
                  currentLang === 'te' ? 'font-telugu text-sm leading-relaxed' : ''
                }`}>
                  {currentStory.story[currentLang]}
                </p>

                {/* Key Highlight Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentStory.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/15"
                    >
                      {h[currentLang]}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Controls & Navigation */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              
              {/* Progress Dots */}
              <div className="flex items-center space-x-2">
                {licStories.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === dotIdx
                        ? 'w-8 bg-[#F59E0B]'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F59E0B] text-white hover:text-[#1E1E1E] flex items-center justify-center transition-all duration-200 active:scale-95 border border-white/20"
                  aria-label="Previous Story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-[#1E1E1E] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md font-bold"
                  aria-label="Next Story"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

            </div>

          </div>

          {/* Customer Callout Bar Below Carousel: High Conversion */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-[#C8C5BD] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#F59E0B]/20 text-[#1E1E1E] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <h4 className={`font-black text-sm sm:text-base text-[#1E1E1E] ${
                  currentLang === 'te' ? 'font-telugu' : ''
                }`}>
                  {currentLang === 'te'
                    ? 'మీ కుటుంబ భవిష్యత్తుకు కొండంత రక్షణ కల్పించాలనుకుంటున్నారా?'
                    : 'Ready to Secure Your Family with the Sovereign Trust of LIC?'}
                </h4>
                <p className={`text-xs text-[#6B6A66] ${
                  currentLang === 'te' ? 'font-telugu' : ''
                }`}>
                  {currentLang === 'te'
                    ? 'కడప డివిజన్, జమ్మలమడుగు బ్రాంచ్ చీఫ్ అడ్వైజర్‌తో నేరుగా మాట్లాడండి.'
                    : 'Consult directly with Chief Advisor G. Sivarami Reddy, Jammalamadugu Branch.'}
                </p>
              </div>
            </div>

            <button
              onClick={scrollToReachOut}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#1E1E1E] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md hover-lift transition-all flex-shrink-0 whitespace-nowrap"
            >
              <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                {currentLang === 'te' ? 'ఉచిత పాలసీ సలహా కొరకు సంప్రదించండి' : 'Request Policy Advisory'}
              </span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
