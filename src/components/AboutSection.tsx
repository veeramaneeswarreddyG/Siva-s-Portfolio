'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  onOpenVerificationModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onOpenVerificationModal,
}) => {
  const stats = [
    {
      value: '2+ Decades',
      valueTe: '2+ దశాబ్దాలు',
      label: { en: 'Continuous Public Advisory', te: 'నిరంతర ప్రజా సేవ' },
    },
    {
      value: '#3 Rank',
      valueTe: '#3 ర్యాంకు',
      label: { en: 'Diamond Brigade Merit Standing', te: 'డైమండ్ బ్రిగేడ్ విశిష్ట గౌరవం' },
    },
    {
      value: '2 Acres',
      valueTe: '2 ఎకరాలు',
      label: { en: 'Agricultural Farming Roots', te: 'రైతు పునాది & శ్రమ సంస్కృతి' },
    },
    {
      value: 'CLIA & LIAFI',
      valueTe: 'CLIA & LIAFI',
      label: { en: 'Leadership & Federation Ethics', te: 'సంస్థాగత నాయకత్వం & నైతికత' },
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-950 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amberGold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Inside Arched Card with Floating Badges (Matches Image 1 bottom left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[36px] bg-gradient-to-b from-amberGold-500 via-amberGold-600 to-amberGold-700 p-3 shadow-2xl flex items-end justify-center overflow-visible">
              
              {/* Inner frame */}
              <div className="absolute inset-2 rounded-[30px] border border-amberGold-400/40 pointer-events-none z-20" />

              {/* Portrait */}
              <div className="relative z-10 w-full h-[95%] flex items-end justify-center">
                <Image
                  src="/images/sivarami_portrait.png"
                  alt="Sivarami Reddy Gadikota"
                  width={340}
                  height={420}
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Floating Pill Tags (Matches Image 1 floating pills over portrait) */}
              <div className="absolute -bottom-3 -left-3 z-30 px-3.5 py-1.5 rounded-full bg-charcoal-900 text-amberGold-400 text-xs font-bold border border-amberGold-500/50 shadow-xl flex items-center space-x-1.5 animate-float-gentle">
                <span className="w-2 h-2 rounded-full bg-amberGold-400" />
                <span>{currentLang === 'te' ? 'రెండు ఎకరాల మూలాలు' : 'Two-Acre Soil'}</span>
              </div>

              <div className="absolute -top-3 -right-3 z-30 px-3.5 py-1.5 rounded-full bg-white text-charcoal-950 text-xs font-bold shadow-xl border border-cream-400 flex items-center space-x-1.5 animate-float-gentle [animation-delay:1.5s]">
                <ShieldCheck className="w-3.5 h-3.5 text-amberGold-600" />
                <span>LIC Chief Advisor</span>
              </div>

              <div className="absolute top-1/2 -left-6 z-30 px-3 py-1 rounded-full bg-charcoal-950 text-white text-[11px] font-semibold border border-charcoal-800 shadow-xl hidden sm:flex items-center space-x-1">
                <span>Jammalamadugu</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Facts (Matches Image 1 bottom right) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amberGold-400">
              <span className="w-2.5 h-2.5 rounded-full bg-amberGold-500" />
              <span>{currentLang === 'te' ? 'జీవిత పరిచయం' : 'About The Advisor'}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {currentLang === 'te' ? 'ఎవరు ఈ ' : 'Who is '}
              <span className="text-amberGold-500">
                {currentLang === 'te' ? 'శివరామిరెడ్డి గాడికోట?' : 'Sivarami Reddy?'}
              </span>
              <Sparkles className="inline-block w-6 h-6 ml-2 text-amberGold-500 align-baseline" />
            </h2>

            {/* Narrative Paragraphs */}
            <div className={`space-y-4 text-cream-300 text-sm sm:text-base leading-relaxed font-light ${
              currentLang === 'te' ? 'font-telugu' : ''
            }`}>
              <p>
                {currentLang === 'te'
                  ? 'బిరుదులు, పదవుల కంటే ముందే... నేలను నమ్ముకున్న ఒక సాధారణ రైతు పుత్రుడు. రెండు ఎకరాల వ్యవసాయ నేపథ్యంతో మొదలైన ఆయన ప్రయాణం, కష్టపడే తత్వానికీ, అంకితభావానికీ నిలువెత్తు నిదర్శనం.'
                  : 'Before titles and executive advisory roles, Sivarami Reddy Gadikota was rooted in the fertile red earth of Andhra Pradesh, connected to a two-acre agricultural heritage.'}
              </p>
              <p>
                {currentLang === 'te'
                  ? 'వ్యవసాయంలో నేర్చుకున్న ఓర్పు, క్రమశిక్షణ, మరియు ఇచ్చిన మాటకు కట్టుబడి ఉండే నైతికతను ఆయన తన ఎల్.ఐ.సి వృత్తిలోనూ ఆచరించారు. 2000ల ప్రారంభం నుండి జమ్మలమడుగు కేంద్రంగా ఎన్నో కుటుంబాల భవిష్యత్తుకు భరోసానిచ్చారు.'
                  : 'The soil taught him that meaningful growth cannot be rushed. Moving into the Life Insurance Corporation of India in the early 2000s, he carried that exact agrarian discipline into protecting households across Jammalamadugu.'}
              </p>
            </div>

            {/* Stat Boxes Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-charcoal-900 border border-charcoal-800">
                  <div className="font-extrabold text-lg sm:text-xl text-amberGold-400 font-sans">
                    {currentLang === 'te' ? s.valueTe : s.value}
                  </div>
                  <div className="text-xs text-cream-400/80 mt-1">
                    {s.label[currentLang]}
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenVerificationModal}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-amberGold-500 hover:bg-amberGold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover-lift button-press transition-all shadow-lg"
              >
                <span>{currentLang === 'te' ? 'సత్య ప్రమాణాల సమీక్ష' : 'Inspect Verified Records'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
