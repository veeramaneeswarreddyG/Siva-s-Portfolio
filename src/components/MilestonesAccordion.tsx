'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import { RangoliMotif } from './RangoliMotif';

interface MilestonesAccordionProps {
  currentLang: Language;
  onOpenVerificationModal?: () => void;
}

export const MilestonesAccordion: React.FC<MilestonesAccordionProps> = ({
  currentLang,
}) => {
  // Default to item index 1 (02.) expanded, matching user reference image
  const [activeItem, setActiveItem] = useState<number>(1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const cardShapePolygon =
    'polygon(0 22px, 14px 10px, var(--tab-w) 10px, calc(var(--tab-w) + 14px) 0px, calc(100% - 18px) 0px, calc(100% - 6px) 5px, calc(100% - 1px) 14px, 100% 22px, 100% calc(100% - 10px - 22px), calc(100% - 1px) calc(100% - 10px - 14px), calc(100% - 6px) calc(100% - 10px - 5px), calc(100% - 18px) calc(100% - 10px), calc(var(--tab-w) + 14px) calc(100% - 10px), var(--tab-w) 100%, 14px 100%, 0 calc(100% - 14px))';

  const items = [
    {
      number: '01.',
      question: {
        en: 'Why choose LIC insurance over physical assets like land or gold?',
        te: 'భూమి లేదా బంగారం కంటే ఎల్.ఐ.సి భరోసాను ఎందుకు ప్రాధాన్యతగా ఎంచుకోవాలి?',
      },
      tags: {
        en: ['Immediate Liquidity', 'Distress Sale Protection', 'Sovereign Guarantee'],
        te: ['తక్షణ ఆర్థిక వెసులుబాటు', 'ఆస్తుల పరిరక్షణ', 'సార్వభౌమ రక్షణ'],
      },
      answer: {
        en: 'Gold and agricultural land cannot be liquidated overnight without heavy distress discounts during sudden family emergencies. An LIC policy guarantees immediate, irrevocable financial security to the family within days — preserving your ancestral property from forced distress sales.',
        te: 'ఆకస్మిక ఆపదలో భూమి లేదా నగలు వెంటనే ద్రవ్యరూపంలోకి మారవు; ఒత్తిడిలో తక్కువ ధరకు అమ్ముకోవాల్సి వస్తుంది. కానీ ఎల్.ఐ.సి క్లెయిమ్ కొద్ది రోజుల్లోనే కుటుంబానికి తక్షణ ఆర్థిక భరోసా అందించి, పూర్వీకుల ఆస్తులు చేజారకుండా కాపాడుతుంది.',
      },
    },
    {
      number: '02.',
      question: {
        en: 'How is our money protected against market crashes and recessions?',
        te: 'మార్కెట్ పతనాలు మరియు ఆర్థిక మాంద్యం సమయాల్లో మా సంపాదన ఎలా సురక్షితం?',
      },
      tags: {
        en: ['Section 37 Guarantee', 'Zero Speculation', 'Capital Protection'],
        te: ['సెక్షన్ 37 హామీ', 'ప్రభుత్వ రక్షణ', 'నూరుశాతం మూలధన భద్రత'],
      },
      answer: {
        en: 'Unlike speculative private or market-linked schemes, every LIC policy carries the Sovereign Guarantee of the Government of India under Section 37 of the LIC Act. The sum assured and all declared bonuses are 100% legally guaranteed, keeping family savings completely insulated from market downturns.',
        te: 'ప్రైవేట్ లేదా ఊహాజనిత మార్కెట్ పెట్టుబడులలా కాకుండా, ఎల్.ఐ.సి చట్టం సెక్షన్ 37 ప్రకారం భారత ప్రభుత్వం పూర్తి సార్వభౌమ హామీ ఇస్తుంది. మీ పాలసీ హామీ మొత్తం మరియు బోనస్ ప్రతి పైసా చట్టబద్ధంగా నూరుశాతం సురక్షితం.',
      },
    },
    {
      number: '03.',
      question: {
        en: 'What happens if drought or crop failure halts premium payments?',
        te: 'కరువు లేదా పంట నష్టాల కారణంగా ప్రీమియం చెల్లించలేకపోతే పాలసీ రద్దవుతుందా?',
      },
      tags: {
        en: ['Grace Periods', 'Special Revival Schemes', 'Policy Loan Facility'],
        te: ['గ్రేస్ పీరియడ్', 'పునరుద్ధరణ పథకాలు', 'పాలసీ రుణ సదుపాయం'],
      },
      answer: {
        en: 'Coming from an agricultural background, I understand seasonal hardship. We guide families through grace period extensions, official revival campaigns with interest concessions, and low-interest policy loans to ensure hard-earned coverage never lapses during difficult seasons.',
        te: 'వ్యవసాయ నేపథ్యం నుండి వచ్చిన వ్యక్తిగా కరువు కష్టాలు నాకు తెలుసు. గ్రేస్ పీరియడ్, వడ్డీ రాయితీతో కూడిన ప్రత్యేక రివైవల్ ప్రచారాలు మరియు పాలసీ రుణ సదుపాయాల ద్వారా పాలసీ రద్దు కాకుండా ఆదుకుంటాం.',
      },
    },
    {
      number: '04.',
      question: {
        en: 'When tragedy strikes, how fast are claims settled without bureaucratic delays?',
        te: 'కుటుంబంలో అనుకోని విషాదం జరిగినప్పుడు, క్లెయిమ్ పరిష్కారం ఆలస్యం కాకుండా ఎలా జరుగుతుంది?',
      },
      tags: {
        en: ['Doorstep Service', 'Direct Jammalamadugu Liaison', 'Dignified Handover'],
        te: ['ఇంటివద్దే సేవలు', 'బ్రాంచ్ అనుసంధానం', 'త్వరిత పరిష్కారం'],
      },
      answer: {
        en: 'We never abandon grieving families to navigate paperwork alone. We personally visit homes to gather documents, coordinate directly with Jammalamadugu Branch and Kadapa Divisional Office, and ensure settlement cheques reach the nominees with dignity, speed, and zero friction.',
        te: 'బాధలో ఉన్న కుటుంబాలను ఆఫీసుల చుట్టూ తిప్పం. స్వయంగా ఇంటి వద్దే పత్రాలు సేకరించి, జమ్మలమడుగు బ్రాంచ్ & కడప డివిజన్ అధికారులతో సమన్వయం చేసి క్లెయిమ్ మొత్తాన్ని త్వరితగతిన అందిస్తాం.',
      },
    },
    {
      number: '05.',
      question: {
        en: 'Why choose a Chief Life Insurance Advisor (CLIA) over direct online portals?',
        te: 'ఆన్‌లైన్ పాలసీల కంటే చీఫ్ లైఫ్ ఇన్సూరెన్స్ అడ్వైజర్ (CLIA) మార్గదర్శకత్వం ఎందుకు ముఖ్యం?',
      },
      tags: {
        en: ['2+ Decades Standing', 'Lifelong Servicing', 'Institutional Ethics'],
        te: ['రెండు దశాబ్దాల అనుభవం', 'నిరంతర సేవ', 'నమ్మకమైన తోడు'],
      },
      answer: {
        en: 'An online algorithm cannot visit a hospital bed or stand beside a family at midnight. Over two decades of continuous presence in Jammalamadugu means you are not buying an isolated paper policy; you have an institutional ally who actively services and defends your financial security for life.',
        te: 'ఆన్‌లైన్ వెబ్‌సైట్లు కష్టకాలంలో ఇంటికి వచ్చి నిలబడలేవు. రెండు దశాబ్దాలుగా జమ్మలమడుగులో సంపాదించుకున్న విశ్వసనీయతతో... మీరు కేవలం పాలసీ కొనడం లేదు, జీవితాంతం ఒక బాధ్యతాయుతమైన సంరక్షకుడిని పొందుతున్నారు.',
      },
    },
  ];

  return (
    <section id="milestones" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#ECEAE5] relative select-none overflow-hidden">
      {/* Subtle traditional Rangoli corner watermark */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 pointer-events-none -scale-x-100 hidden sm:block">
        <RangoliMotif variant="corner" size={68} opacity={0.35} />
      </div>
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 pointer-events-none hidden sm:block">
        <RangoliMotif variant="corner" size={68} opacity={0.35} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#3A3A38] mb-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                {currentLang === 'te' ? 'ప్రజా సవాళ్లు & వాస్తవ పరిష్కారాలు' : 'Public Concerns & Advisory Solutions'}
              </span>
            </div>
            
            <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#1E1E1E] tracking-tight ${
              currentLang === 'te' ? 'font-telugu-heading font-normal tracking-normal py-0.5' : 'font-sans font-black'
            }`}>
              {currentLang === 'te' ? (
                <>
                  ప్రజలు అడిగే సవాళ్లు & <span className="text-[#F59E0B]">స్పష్టమైన సమాధానాలు</span>
                </>
              ) : (
                <>
                  Challenges People Face & <span className="text-[#F59E0B]">Honest Answers</span>
                </>
              )}
            </h2>
          </div>

          <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#6B6A66] self-start md:self-end">
            {currentLang === 'te' ? 'కడప డివిజన్ • జమ్మలమడుగు' : 'Kadapa Division • Jammalamadugu'}
          </div>
        </div>

        {/* Stacked Accordion: Stepped Shape Matching User Reference Image */}
        <div className="space-y-4 sm:space-y-5">
          {items.map((item, index) => {
            const isExpanded = activeItem === index;
            const isHovered = hoveredItem === index;

            return (
              <motion.div
                key={index}
                whileTap={{ scale: 0.99 }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className="[--tab-w:56px] sm:[--tab-w:130px] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
                style={{
                  clipPath: cardShapePolygon,
                  backgroundColor: isExpanded ? '#F59E0B' : (isHovered ? '#F59E0B' : '#E2DFD7'),
                  padding: '1.5px',
                }}
              >
                <div
                  onClick={() => setActiveItem(isExpanded ? -1 : index)}
                  className={`cursor-pointer transition-all duration-300 p-5 sm:p-7 md:p-8 ${
                    isExpanded
                      ? 'bg-[#1C1A18] text-white shadow-xl'
                      : 'bg-white hover:bg-[#FBF9F5] text-[#1E1E1E]'
                  }`}
                  style={{
                    clipPath: cardShapePolygon,
                  }}
                >
                  
                  {/* Row Top: Number + Dotted Guide + Question Title + Orange Action Circle */}
                  <div className="flex items-center justify-between gap-3 sm:gap-6">
                    
                    <div className="flex items-center flex-1 min-w-0 pr-1">
                      
                      {/* Number in Amber Gold (Matches Reference "01.", "02.") */}
                      <span className="font-mono text-sm sm:text-base font-extrabold text-[#F59E0B] flex-shrink-0 tracking-wider">
                        {item.number}
                      </span>

                      {/* Dotted Connecting Guide Line (Matches Reference Dotted Line) */}
                      <div
                        className={`hidden sm:block w-8 md:w-16 border-b-2 border-dotted mx-3 md:mx-5 flex-shrink-0 ${
                          isExpanded ? 'border-white/25' : 'border-[#C8C5BD]'
                        }`}
                      />

                      {/* Question Title (Fully readable on all screen sizes, never truncated) */}
                      <h3
                        className={`font-black text-xs xs:text-sm sm:text-base md:text-lg tracking-tight leading-snug break-words ml-2.5 sm:ml-0 font-sans ${
                          isExpanded ? 'text-white' : 'text-[#1E1E1E]'
                        } ${currentLang === 'te' ? 'font-telugu leading-snug' : ''}`}
                      >
                        {item.question[currentLang]}
                      </h3>
                    </div>

                    {/* Orange Circular Action Button with Up-Right Arrow (Matches Reference) */}
                    <div
                      className={`w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-full bg-[#F59E0B] text-[#1E1E1E] flex items-center justify-center flex-shrink-0 font-black shadow-sm transition-transform duration-300 ${
                        isExpanded ? 'rotate-90 scale-105' : 'group-hover:scale-105'
                      }`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.75]" />
                    </div>

                  </div>

                  {/* Expanded Content: Pill Badges + In-Depth Reassuring Answer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="mt-5 pt-5 border-t border-white/10 space-y-3"
                      >
                        {/* Pill Tags (Matches Reference Row 02 Pills) */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags[currentLang].map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/10 text-white/90 border border-white/15 ${
                                currentLang === 'te' ? 'font-telugu' : ''
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Detailed Answer Narrative */}
                        <p
                          className={`text-xs sm:text-sm md:text-[15px] text-[#D8D4CA] leading-relaxed font-light pt-1 ${
                            currentLang === 'te' ? 'font-telugu leading-relaxed text-sm' : ''
                          }`}
                        >
                          {item.answer[currentLang]}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
