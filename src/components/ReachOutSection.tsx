'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  PhoneCall
} from 'lucide-react';
import { RangoliMotif } from './RangoliMotif';

interface ReachOutSectionProps {
  currentLang: Language;
}

export const ReachOutSection: React.FC<ReachOutSectionProps> = ({ currentLang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Policy Guidance',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', inquiryType: 'Policy Guidance' });
    }, 4500);
  };

  const pillTags = currentLang === 'te'
    ? [
        'ఏజెంట్ • ఎల్.ఐ.ఎ.ఎఫ్.ఐ • సి.ఎల్.ఐ.ఎ',
        '#3 డైమండ్ బ్రిగేడ్',
        'జమ్మలమడుగు బ్రాంచ్',
        'కడప డివిజన్',
      ]
    : [
        'Agent • LIAFI • CLIA',
        '#3 Diamond Brigade',
        'Jammalamadugu Branch',
        'Kadapa Division',
      ];

  return (
    <section id="reach-out" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-100 relative overflow-hidden border-t border-cream-300">
      
      {/* Background radial glow & Rangoli Motifs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amberGold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-6 right-6 pointer-events-none -scale-x-100">
        <RangoliMotif variant="corner" size={90} opacity={0.16} />
      </div>
      <div className="absolute bottom-6 left-6 pointer-events-none">
        <RangoliMotif variant="corner" size={90} opacity={0.16} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Big, Crystal-Clear Thumbs-Up Portrait (100% Bright & Natural) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[400px] h-[440px] xs:h-[490px] sm:h-[570px] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-amberGold-500/40 bg-cream-200 group">
              
              {/* Thumbs-Up Image: Fully Bright, Natural & Clear (Lazy Loaded) */}
              <Image
                src="/images/sivarami_thumbsup.jpg"
                alt="G Sivarami Reddy"
                fill
                loading="lazy"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 brightness-100 contrast-100"
              />

              {/* Floating Pill Badges Overlapping at Bottom of Card */}
              <div className="absolute bottom-5 inset-x-3 z-20 flex flex-wrap justify-center gap-1.5 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-charcoal-950/95 text-white shadow-2xl border border-charcoal-700 animate-float-gentle backdrop-blur-sm">
                  {pillTags[0]}
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amberGold-500 text-charcoal-950 shadow-2xl border border-amberGold-300 animate-float-gentle [animation-delay:1s]">
                  {pillTags[1]}
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-charcoal-950 shadow-2xl border border-cream-300">
                  {pillTags[2]}
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amberGold-400 text-charcoal-950 shadow-2xl">
                  {pillTags[3]}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Contact Information & Direct Hotline Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Eyebrow */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-charcoal-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amberGold-500" />
                <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                  {currentLang === 'te' ? 'నేరుగా సంప్రదించండి' : 'Reach Out Directly'}
                </span>
              </div>

              <span className="text-xs font-bold text-charcoal-900 font-sans whitespace-nowrap">
                {currentLang === 'te' ? 'జి. శివరామిరెడ్డి' : 'G. Sivarami Reddy'}<span className="text-amberGold-500">.</span>
              </span>
            </div>

            {/* Headline: Father's Name on its own dedicated unbroken line (No Sparkles) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal-950 tracking-tight">
              <span className={`block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#5A5955] ${
                currentLang === 'te' ? 'font-telugu-heading tracking-normal' : ''
              }`}>
                {currentLang === 'te' ? 'సలహాల కొరకు సంప్రదించండి' : 'Connect With'}
              </span>
              <span className={`block text-[#F59E0B] whitespace-nowrap mt-1 ${
                currentLang === 'te' ? 'font-telugu-heading tracking-normal py-0.5' : ''
              }`}>
                {currentLang === 'te' ? 'జి. శివరామిరెడ్డి గారితో' : 'G. Sivarami Reddy'}
              </span>
            </h2>

            <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal-600 ${
              currentLang === 'te' ? 'font-telugu' : ''
            }`}>
              {currentLang === 'te'
                ? 'చీఫ్ అడ్వైజర్ • జమ్మలమడుగు బ్రాంచ్ • కడప డివిజన్'
                : 'Chief Advisor • Jammalamadugu Branch • Kadapa Division'}
            </p>

            {/* Direct Contact Cards with Tactile Micro-Interactions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              
              {/* Phone / Call */}
              <motion.a
                whileTap={{ scale: 0.96 }}
                href="tel:8919358526"
                className="p-3.5 rounded-xl bg-white border border-cream-400 hover:border-amberGold-500 shadow-sm hover-lift flex items-center space-x-3 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-cream-200 group-hover:bg-amberGold-500 text-charcoal-950 flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5 text-amberGold-600 group-hover:text-charcoal-950" />
                </div>
                <div>
                  <span className={`block text-[11px] font-bold uppercase tracking-wider text-charcoal-500 ${
                    currentLang === 'te' ? 'font-telugu text-[10px]' : ''
                  }`}>
                    {currentLang === 'te' ? 'ఫోన్ నంబర్' : 'Cell / Phone'}
                  </span>
                  <span className="block text-sm font-extrabold text-charcoal-950 group-hover:text-amberGold-600">
                    8919358526
                  </span>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                whileTap={{ scale: 0.96 }}
                href="mailto:gadikotalic@gmail.com"
                className="p-3.5 rounded-xl bg-white border border-cream-400 hover:border-amberGold-500 shadow-sm hover-lift flex items-center space-x-3 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-cream-200 group-hover:bg-amberGold-500 text-charcoal-950 flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-amberGold-600 group-hover:text-charcoal-950" />
                </div>
                <div className="overflow-hidden">
                  <span className={`block text-[11px] font-bold uppercase tracking-wider text-charcoal-500 ${
                    currentLang === 'te' ? 'font-telugu text-[10px]' : ''
                  }`}>
                    {currentLang === 'te' ? 'ఈ-మెయిల్ చిరునామా' : 'Email Address'}
                  </span>
                  <span className="block text-xs sm:text-sm font-extrabold text-charcoal-950 truncate group-hover:text-amberGold-600">
                    gadikotalic@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* Office Address */}
              <div className="sm:col-span-2 p-3.5 rounded-xl bg-white border border-cream-400 shadow-sm flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-cream-200 text-amberGold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className={`block text-[11px] font-bold uppercase tracking-wider text-charcoal-500 ${
                    currentLang === 'te' ? 'font-telugu text-[10px]' : ''
                  }`}>
                    {currentLang === 'te' ? 'కార్యాలయ & నివాస చిరునామా' : 'Reach Out Address'}
                  </span>
                  <p className={`text-xs sm:text-sm font-bold text-charcoal-900 leading-snug ${
                    currentLang === 'te' ? 'font-telugu' : ''
                  }`}>
                    {currentLang === 'te'
                      ? '6-98, ఆకుల వీధి, కమలాపురం (గ్రామం & మండలం), కడప జిల్లా.'
                      : '6-98, Akula Street, Kamalapuram (V&M), Kadapa Dist.'}
                  </p>
                  <p className={`text-[11px] text-charcoal-500 mt-0.5 font-medium ${
                    currentLang === 'te' ? 'font-telugu' : ''
                  }`}>
                    {currentLang === 'te'
                      ? 'జమ్మలమడుగు బ్రాంచ్ • కడప డివిజన్, ఆంధ్రప్రదేశ్'
                      : 'Jammalamadugu Branch • Kadapa Division, Andhra Pradesh'}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Request a Call / Advisory Form */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-cream-400 shadow-sm">
              <p className={`text-xs font-bold uppercase tracking-wider text-charcoal-950 mb-3 flex items-center space-x-1.5 ${
                currentLang === 'te' ? 'font-telugu' : ''
              }`}>
                <PhoneCall className="w-4 h-4 text-amberGold-600" />
                <span>
                  {currentLang === 'te' ? 'కాల్ లేదా సలహా కొరకు అభ్యర్థించండి' : 'Request a Callback / Consultation'}
                </span>
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold text-center flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                    {currentLang === 'te'
                      ? 'ధన్యవాదాలు! మీ అభ్యర్థన విజయవంతంగా చేరింది. మేము త్వరలోనే సంప్రదిస్తాము.'
                      : 'Thank you! Your call request has been received. We will get in touch shortly.'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder={currentLang === 'te' ? 'మీ పేరు' : 'Your Name'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-sm sm:text-xs text-charcoal-950 focus:outline-none focus:border-amberGold-500 font-medium ${
                        currentLang === 'te' ? 'font-telugu' : ''
                      }`}
                    />
                    <input
                      type="tel"
                      required
                      placeholder={currentLang === 'te' ? 'మీ ఫోన్ నంబర్' : 'Your Phone Number'}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-sm sm:text-xs text-charcoal-950 focus:outline-none focus:border-amberGold-500 font-medium"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className={`px-3 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-sm sm:text-xs text-charcoal-800 focus:outline-none focus:border-amberGold-500 font-medium ${
                        currentLang === 'te' ? 'font-telugu' : ''
                      }`}
                    >
                      {currentLang === 'te' ? (
                        <>
                          <option value="Policy Guidance">పాలసీ సలహా & మార్గదర్శకత్వం</option>
                          <option value="Claim Assistance">క్లెయిమ్ సహాయం & పరిష్కారం</option>
                          <option value="Archival Contribution">కుటుంబ రికార్డు సమర్పణ</option>
                          <option value="General Consultation">సాధారణ సంప్రదింపు</option>
                        </>
                      ) : (
                        <>
                          <option value="Policy Guidance">Policy Advisory Consultation</option>
                          <option value="Claim Assistance">Claim Guidance & Assistance</option>
                          <option value="Archival Contribution">Archival Record Contribution</option>
                          <option value="General Consultation">General Callback</option>
                        </>
                      )}
                    </select>

                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      whileHover={{ scale: 1.02 }}
                      type="submit"
                      className="flex-1 py-2.5 px-5 rounded-xl bg-amberGold-500 hover:bg-amberGold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover-lift transition-all"
                    >
                      <span className={currentLang === 'te' ? 'font-telugu' : ''}>
                        {currentLang === 'te' ? 'కాల్ రిక్వెస్ట్ పంపండి' : 'Request Callback'}
                      </span>
                      <Send className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </form>
              )}
            </div>

            {/* Official Motto */}
            <div className="pt-2 text-center">
              <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-cream-200 border border-cream-400 shadow-sm">
                <span className="text-amberGold-600 font-serif">❧</span>
                <span className={`font-extrabold text-sm sm:text-base text-charcoal-950 tracking-wide ${
                  currentLang === 'te' ? 'font-telugu' : 'font-sans'
                }`}>
                  {currentLang === 'te'
                    ? 'బీమా చేయండి — ధీమాగా ఉండండి!'
                    : 'Be Insured — Live with Confidence!'}
                </span>
                <span className="text-amberGold-600 font-serif">☙</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
