'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { RangoliMotif } from './RangoliMotif';

interface AboutSectionProps {
  currentLang: Language;
  onOpenVerificationModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
}) => {
  const stats = [
    {
      value: { en: '2+ Decades', te: '2+ దశాబ్దాలు' },
      label: { en: 'Continuous Public Advisory', te: 'నిరంతర ప్రజా సేవ' },
    },
    {
      value: { en: '3× Club', te: '3 సార్లు' },
      label: { en: 'Diamond Brigade Club Honoree', te: 'డైమండ్ బ్రిగేడ్ విశిష్ట గౌరవం' },
    },
    {
      value: { en: 'Kadapa Div.', te: 'కడప డివిజన్' },
      label: { en: 'Jammalamadugu Branch Standing', te: 'జమ్మలమడుగు బ్రాంచ్ కేంద్రం' },
    },
    {
      value: { en: 'CLIA & LIAFI', te: 'నాయకత్వ హోదాలు' },
      label: { en: 'Leadership & Federation Ethics', te: 'సంస్థాగత నాయకత్వం & నైతికత' },
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-950 text-white relative overflow-hidden select-none">
      
      {/* Traditional Minimal Line-Art Rangoli Watermark on Dark Canvas */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none hidden lg:block">
        <RangoliMotif variant="mandala" size={320} color="#F59E0B" opacity={0.18} />
      </div>
      <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 pointer-events-none rotate-180 hidden md:block">
        <RangoliMotif variant="corner" size={72} color="#F59E0B" opacity={0.38} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic High-Resolution Conversational Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] aspect-[932/1024] rounded-2xl sm:rounded-[28px] overflow-hidden border-2 border-amberGold-500/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] group bg-charcoal-900">
              
              {/* Full-Fill Conversational Photo (Lazy Loaded) */}
              <Image
                src="/images/sivarami_conversational.jpg"
                alt="G Sivarami Reddy in Conversation"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                loading="lazy"
                className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Inner refined gold hairline frame */}
              <div className="absolute inset-2.5 rounded-[22px] border border-white/20 pointer-events-none z-10" />

              {/* Chief Advisor Badge in Top Corner Only */}
              <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-amberGold-500 text-charcoal-950 text-xs font-black shadow-xl flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-charcoal-950" />
                <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                  {currentLang === 'te' ? 'చీఫ్ అడ్వైజర్' : 'Chief Advisor'}
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Pure Language Facts */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amberGold-400">
              <span className="w-2 h-2 rounded-full bg-amberGold-500" />
              <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                {currentLang === 'te' ? 'జీవిత పరిచయం' : 'About The Advisor'}
              </span>
            </div>

            {/* Title: Father's Name in Unbroken Continuity on New Line (No Sparkles) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              <span className={`block text-cream-300 text-lg sm:text-xl font-medium mb-1 ${
                currentLang === 'te' ? 'font-telugu-heading tracking-normal' : ''
              }`}>
                {currentLang === 'te' ? 'పరిచయం' : 'About'}
              </span>
              <span className={`block text-amberGold-500 whitespace-nowrap ${
                currentLang === 'te' ? 'font-telugu-heading font-normal tracking-normal py-0.5' : 'font-sans font-black'
              }`}>
                {currentLang === 'te' ? 'జి. శివరామిరెడ్డి' : 'G. Sivarami Reddy'}
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className={`space-y-4 text-cream-300 text-sm sm:text-base leading-relaxed font-light ${
              currentLang === 'te' ? 'font-telugu leading-relaxed' : ''
            }`}>
              <p>
                {currentLang === 'te'
                  ? 'కడప జిల్లా కమలాపురం గ్రామీణ నేపథ్యంతో మొదలైన ఆయన ప్రయాణం, కష్టపడే తత్వానికీ, అంకితభావానికీ నిలువెత్తు నిదర్శనం. వ్యవసాయంలో నేర్చుకున్న ఓర్పు మరియు క్రమశిక్షణ ఆయన సేవా ప్రస్థానానికి బలమైన పునాదిగా నిలిచాయి.'
                  : 'Rooted in the fertile soil of Kamalapuram, Kadapa district, G. Sivarami Reddy was shaped by patient dedication and consistent discipline long before earning executive titles.'}
              </p>
              <p>
                {currentLang === 'te'
                  ? 'ఇచ్చిన మాటకు కట్టుబడి ఉండే నైతికతను ఆయన తన ఎల్.ఐ.సి వృత్తిలోనూ ఆచరించారు. జమ్మలమడుగు బ్రాంచ్ కేంద్రంగా వేలాది కుటుంబాల భవిష్యత్తుకు భరోసానిచ్చారు.'
                  : 'Moving into public insurance advisory, he brought an unshakeable agrarian discipline into protecting households across Jammalamadugu Branch, Kadapa Division.'}
              </p>
            </div>

            {/* Stat Boxes Grid with Tactile Micro-Interactions */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-3.5 sm:p-4 rounded-xl bg-charcoal-900 border border-charcoal-800 transition-colors hover:border-amberGold-500/50 cursor-pointer"
                >
                  <div className={`font-extrabold text-base sm:text-lg text-amberGold-400 font-sans ${
                    currentLang === 'te' ? 'font-telugu' : ''
                  }`}>
                    {s.value[currentLang]}
                  </div>
                  <div className={`text-xs text-cream-400/80 mt-0.5 leading-snug ${
                    currentLang === 'te' ? 'font-telugu' : ''
                  }`}>
                    {s.label[currentLang]}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  const el = document.getElementById('reach-out');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-amberGold-500 hover:bg-amberGold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover-lift button-press transition-all shadow-md"
              >
                <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                  {currentLang === 'te' ? 'సలహా కొరకు సంప్రదించండి' : 'Connect for Advisory'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
