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
  Building2, 
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ReachOutSectionProps {
  currentLang: Language;
}

export const ReachOutSection: React.FC<ReachOutSectionProps> = ({ currentLang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Policy Guidance',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', inquiryType: 'Policy Guidance', message: '' });
    }, 4500);
  };

  return (
    <section id="reach-out" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-100 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amberGold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Arched Amber Container with Portrait & Floating Tags (Matches Image 1 Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[40px] bg-gradient-to-b from-amberGold-500 via-amberGold-600 to-amberGold-700 p-4 shadow-2xl flex items-end justify-center">
              
              {/* Inner Decorative Arch Border */}
              <div className="absolute inset-3 rounded-[32px] border border-amberGold-400/40 pointer-events-none z-20" />

              {/* Portrait Image Cutout */}
              <div className="relative z-10 w-full h-[95%] flex items-end justify-center">
                <Image
                  src="/images/sivarami_portrait.png"
                  alt="G Sivarami Reddy - Chief Advisor"
                  width={360}
                  height={440}
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Floating Pill Tags (Matches Image 1 style with verified details from Image 2) */}
              <div className="absolute -bottom-4 inset-x-2 z-30 flex flex-wrap justify-center gap-1.5 pointer-events-none">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-charcoal-950 text-white shadow-xl border border-charcoal-800 animate-float-gentle">
                  Agent • LIAFI • CLIA
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amberGold-400 text-charcoal-950 shadow-xl border border-amberGold-300 animate-float-gentle [animation-delay:1s]">
                  #3 Diamond Brigade
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-charcoal-900 text-amberGold-400 shadow-xl border border-charcoal-700">
                  Jammalamadugu Branch
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white text-charcoal-950 shadow-xl border border-cream-400">
                  Kadapa Division
                </span>
              </div>

              {/* Top-Right Badge: Since 2011 */}
              <div className="absolute -top-3 -right-3 z-30 px-3.5 py-1 rounded-full bg-white text-charcoal-950 text-xs font-extrabold shadow-xl border border-cream-400 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amberGold-600" />
                <span>Since: 2011</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Contact Information & Reach Out Form (Matches Image 1 Right) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Brand & Eyebrow */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-charcoal-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amberGold-500" />
                <span>{currentLang === 'te' ? 'సంప్రదించండి' : 'Reach Out Directly'}</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-charcoal-900 font-sans">
                  G Sivarami Reddy<span className="text-amberGold-500">.</span>
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-950 tracking-tight">
              {currentLang === 'te' ? 'నేరుగా సంప్రదించండి ' : 'Connect With '}
              <span className="text-amberGold-500">
                {currentLang === 'te' ? 'జి. శివరామిరెడ్డి' : 'G Sivarami Reddy'}
              </span>
              <Sparkles className="inline-block w-6 h-6 ml-2 text-amberGold-500 align-baseline" />
            </h2>

            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal-600">
              Chief Advisor • Jammalamadugu Branch • Kadapa Division
            </p>

            {/* Business Card Verified Detail Badges (From Image 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              
              {/* Phone / WhatsApp */}
              <a
                href="tel:8919358526"
                className="p-3.5 rounded-xl bg-white border border-cream-400 hover:border-amberGold-500 shadow-sm hover-lift flex items-center space-x-3 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-cream-200 group-hover:bg-amberGold-500 text-charcoal-950 flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5 text-amberGold-600 group-hover:text-charcoal-950" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                    Cell / Phone
                  </span>
                  <span className="block text-sm font-extrabold text-charcoal-950 group-hover:text-amberGold-600">
                    8919358526
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:gadikotalic@gmail.com"
                className="p-3.5 rounded-xl bg-white border border-cream-400 hover:border-amberGold-500 shadow-sm hover-lift flex items-center space-x-3 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-cream-200 group-hover:bg-amberGold-500 text-charcoal-950 flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-amberGold-600 group-hover:text-charcoal-950" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                    E-mail Address
                  </span>
                  <span className="block text-xs sm:text-sm font-extrabold text-charcoal-950 truncate group-hover:text-amberGold-600">
                    gadikotalic@gmail.com
                  </span>
                </div>
              </a>

              {/* Office Address */}
              <div className="sm:col-span-2 p-3.5 rounded-xl bg-white border border-cream-400 shadow-sm flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-cream-200 text-amberGold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                    {currentLang === 'te' ? 'కార్యాలయ చిరునామా' : 'Reach Out Address'}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-900 leading-snug">
                    6-98, Akula Street, Kamalapuram (V&M), Kadapa Dist.
                  </p>
                  <p className="text-[11px] text-charcoal-500 mt-0.5 font-medium">
                    Jammalamadugu Branch • Kadapa Division, Andhra Pradesh
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Reach Out / Message Box Form */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-cream-400 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal-950 mb-3 flex items-center space-x-1.5">
                <MessageSquare className="w-4 h-4 text-amberGold-600" />
                <span>
                  {currentLang === 'te' ? 'నేరుగా సందేశం లేదా సలహా కోరండి' : 'Request Advisory or Submit Record'}
                </span>
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold text-center flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>
                    {currentLang === 'te'
                      ? 'ధన్యవాదాలు! మీ సందేశం విజయవంతంగా చేరింది. మేము త్వరలోనే సంప్రదిస్తాము.'
                      : 'Thank you! Your message has been sent. We will get in touch shortly.'}
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
                      className="px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-charcoal-950 focus:outline-none focus:border-amberGold-500 font-medium"
                    />
                    <input
                      type="tel"
                      required
                      placeholder={currentLang === 'te' ? 'మీ ఫోన్ నంబర్' : 'Your Phone Number'}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-charcoal-950 focus:outline-none focus:border-amberGold-500 font-medium"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="px-3 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-charcoal-800 focus:outline-none focus:border-amberGold-500 font-medium"
                    >
                      <option value="Policy Guidance">Policy Advisory / బీమా మార్గదర్శకత్వం</option>
                      <option value="Claim Assistance">Claim Guidance / క్లెయిమ్ సహాయం</option>
                      <option value="Archival Contribution">Archival Record / కుటుంబ రికార్డు సమర్పణ</option>
                      <option value="General Consultation">General Inquiry / సాధారణ సంప్రదింపు</option>
                    </select>

                    <button
                      type="submit"
                      className="flex-1 py-2.5 px-5 rounded-xl bg-amberGold-500 hover:bg-amberGold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover-lift button-press transition-all"
                    >
                      <span>{currentLang === 'te' ? 'సందేశం పంపండి' : 'Connect Directly'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Official Business Card Motto (Image 2 Footer) */}
            <div className="pt-2 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cream-200 border border-cream-400 shadow-sm">
                <span className="text-amberGold-600 font-serif">❧</span>
                <span className="font-telugu font-extrabold text-sm sm:text-base text-charcoal-950 tracking-wide">
                  బీమా చేయండి - ధీమాగా ఉండండి!
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
