'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '@/types';
import { ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';

interface MilestonesAccordionProps {
  currentLang: Language;
  onOpenVerificationModal: () => void;
}

export const MilestonesAccordion: React.FC<MilestonesAccordionProps> = ({
  currentLang,
  onOpenVerificationModal,
}) => {
  const [activeItem, setActiveItem] = useState<number>(1); // Default to item 2 (index 1) like Image 1

  const items = [
    {
      number: '01.',
      title: {
        en: 'Agricultural Foundations & Two-Acre Heritage',
        te: 'రెండు ఎకరాల వ్యవసాయ పునాదులు & శ్రమ సంస్కృతి',
      },
      tags: {
        en: ['Patience & Endurance', 'Seasonal Discipline', 'Rayalaseema Soil'],
        te: ['ఓర్పు & సహనం', 'రుతువుల క్రమశిక్షణ', 'రాయలసీమ మట్టి'],
      },
      description: {
        en: 'Life began in the fertile, honest soil of Andhra Pradesh. The land taught that growth cannot be rushed, and whatever is sown with integrity and tended with consistency will stand unshakeable through every season.',
        te: 'ఆంధ్రప్రదేశ్ నేలల్లో రెండు ఎకరాల వ్యవసాయ నేపథ్యంతో మొదలైన జీవనం. భూమి తొందరపాటుకు లొంగదు; నిజాయితీతో నాటి, క్రమశిక్షణతో పోషించిన విత్తనం మాత్రమే కాలపరీక్షను తట్టుకుని నిలుస్తుందని నేల నేర్పింది.',
      },
    },
    {
      number: '02.',
      title: {
        en: 'The Inception (Early 2000s) — Stepping into LIC',
        te: '2000ల ప్రారంభం — ఎల్.ఐ.సి రంగంలోకి తొలి అడుగులు',
      },
      tags: {
        en: ['Early 2000s Inception', 'Public Insurance', 'Family Stewardship', 'Jammalamadugu'],
        te: ['2000ల ప్రారంభ ప్రవేశం', 'ప్రజా భద్రత', 'కుటుంబ సంక్షేమం', 'జమ్మలమడుగు'],
      },
      description: {
        en: 'A decisive turning point in the early 2000s. Moving from cultivating crops to safeguarding families was an organic progression: both required patient long-term nurturing, reliability, and an unwavering respect for the future.',
        te: '2000ల ప్రారంభంలో ప్రారంభమైన ఈ ప్రయాణంలో... మట్టిని సేద్యం చేయడం నుండి మనుషుల భవిష్యత్తును రక్షించే సేవలోకి మారడం సహజ పరిణామమే అయింది. రెండింటికీ కావలసింది దీర్ఘకాలిక సంరక్షణ, ఆప్యాయత మరియు భరోసా.',
      },
    },
    {
      number: '03.',
      title: {
        en: 'Grassroots Agent Practice — Direct Community Trust',
        te: 'ఏజెంట్‌గా క్షేత్రస్థాయి అంకితభావం & ప్రజల నమ్మకం',
      },
      tags: {
        en: ['Grassroots Presence', 'Direct Household Trust', 'Ethical Advice'],
        te: ['క్షేత్రస్థాయి సేవ', 'గడపగడపకూ భరోసా', 'నైతిక మార్గదర్శకత్వం'],
      },
      description: {
        en: 'Serving at the grassroots across Jammalamadugu, sitting with families, listening to their hopes and fears, and ensuring their financial security was protected by solid policy instruments.',
        te: 'జమ్మలమడుగు పరిసర ప్రాంతాల్లోని ప్రజల ముంగిటకు వెళ్లి, వారి కష్టసుఖాలు తెలుసుకుని, కుటుంబ భద్రతకు రక్షణ కవచంలా నిలిచిన అత్యంత కీలకమైన పునాది కాలం.',
      },
    },
    {
      number: '04.',
      title: {
        en: 'LIAFI Affiliation — National Federation Standards',
        te: 'ఎల్.ఐ.ఎ.ఎఫ్.ఐ (LIAFI) జాతీయ సమాఖ్య అనుబంధం',
      },
      tags: {
        en: ['LIAFI Member', 'Advisor Ethics', 'Federation Solidarity'],
        te: ['సమాఖ్య సభ్యత్వం', 'వృత్తి విలువల పరిరక్షణ', 'సహచర సమైక్యత'],
      },
      description: {
        en: 'Association with the Life Insurance Agents Federation of India (LIAFI), upholding ethical service benchmarks, peer solidarity, and policyholder welfare across the region.',
        te: 'భారతదేశ జీవిత బీమా ప్రతినిధుల ప్రతిష్టాత్మక జాతీయ సమాఖ్యతో అనుబంధం, వృత్తిపరమైన నైతిక విలువల పరిరక్షణ మరియు పాలసీదారుల హక్కుల పరిరక్షణ.',
      },
    },
    {
      number: '05.',
      title: {
        en: '#3 Diamond Brigade & CLIA Leadership — Elite Recognition',
        te: '#3 డైమండ్ బ్రిగేడ్ & సి.ఎల్.ఐ.ఎ (CLIA) నాయకత్వం',
      },
      tags: {
        en: ['#3 Diamond Brigade', 'CLIA Executive', 'Mentorship & Guidance'],
        te: ['#3 డైమండ్ బ్రిగేడ్', 'చీఫ్ అడ్వైజర్ నాయకత్వం', 'యువ ఏజెంట్లకు మార్గదర్శనం'],
      },
      description: {
        en: 'Achieving the distinguished #3 Diamond Brigade honor through exceptional service consistency, alongside appointment as Chief Life Insurance Advisor (CLIA) to train and mentor the next generation of advisors.',
        te: 'అత్యుత్తమ ఫలితాలు మరియు నిరంతర కృషికి గాను విశిష్టమైన "#3 డైమండ్ బ్రిగేడ్" పురస్కారం మరియు యువ సలహాదారులను తీర్చిదిద్దే చీఫ్ లైఫ్ ఇన్సూరెన్స్ అడ్వైజర్ (CLIA) ఉన్నత నాయకత్వ బాధ్యత.',
      },
    },
  ];

  return (
    <section id="milestones" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-200 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block (Matches Image 1 "My Services / How I Bring Ideas to Life") */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amberGold-500" />
              <span>{currentLang === 'te' ? 'సేవా మైలురాళ్లు' : 'Documented Milestones'}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-950 tracking-tight">
              {currentLang === 'te' ? (
                <>
                  మట్టి నుండి <span className="text-amberGold-500">మహోన్నత రక్షణ వరకు</span>
                </>
              ) : (
                <>
                  How Roots Turned Into <span className="text-amberGold-500">Lifelong Protection</span>
                </>
              )}
              <Sparkles className="inline-block w-6 h-6 ml-2 text-amberGold-500 align-baseline" />
            </h2>
          </div>

          <button
            onClick={onOpenVerificationModal}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-amberGold-500 hover:bg-amberGold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-sm hover-lift button-press transition-all self-start md:self-end"
          >
            <span>{currentLang === 'te' ? 'అన్ని రికార్డులను పరిశీలించండి' : 'View All Records'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stacked Accordion Items (Replicating exact card style from Image 1) */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isExpanded = activeItem === index;

            return (
              <div
                key={index}
                onClick={() => setActiveItem(isExpanded ? -1 : index)}
                className={`cursor-pointer rounded-2xl transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-charcoal-950 text-white shadow-xl border border-charcoal-800'
                    : 'bg-white hover:bg-cream-100 text-charcoal-900 border border-cream-400 shadow-sm hover-lift'
                }`}
              >
                <div className="p-6 sm:p-8">
                  {/* Top Row: Number + Title + Arrow Button */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline space-x-4 sm:space-x-8">
                      <span className={`font-mono text-sm sm:text-base font-bold ${
                        isExpanded ? 'text-amberGold-400' : 'text-amberGold-600'
                      }`}>
                        {item.number}
                      </span>
                      <h3 className={`font-bold text-lg sm:text-2xl tracking-tight ${
                        isExpanded ? 'text-white' : 'text-charcoal-900'
                      }`}>
                        {item.title[currentLang]}
                      </h3>
                    </div>

                    {/* Circular Arrow Button (Matches Image 1 orange circle arrow) */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isExpanded
                        ? 'bg-amberGold-500 text-charcoal-950 rotate-45'
                        : 'bg-cream-300 text-charcoal-800 group-hover:bg-amberGold-500'
                    }`}>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Expanded Content (Matches Image 1 expanded card with tags & description) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="mt-6 pt-6 border-t border-charcoal-800 space-y-4"
                      >
                        {/* Pill tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags[currentLang].map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 rounded-full text-xs font-semibold bg-charcoal-800 text-cream-300 border border-charcoal-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className={`text-sm sm:text-base text-cream-300/90 leading-relaxed font-light ${
                          currentLang === 'te' ? 'font-telugu' : ''
                        }`}>
                          {item.description[currentLang]}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
