'use client';

import React from 'react';
import { Language } from '@/types';
import { Sparkles } from 'lucide-react';

interface MarqueeStripProps {
  currentLang: Language;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({ currentLang }) => {
  // District & regional hubs requested by user
  const locations = currentLang === 'te'
    ? [
        'జమ్మలమడుగు',
        'కడప',
        'ప్రొద్దుటూరు',
        'కమలాపురం',
        'ఎర్రగుంట్ల',
      ]
    : [
        'JAMMALAMADUGU',
        'KADAPA',
        'PRODDATUR',
        'KAMALAPURAM',
        'YERRAGUNTLA',
      ];

  // Repeat for continuous seamless loop
  const displayItems = [...locations, ...locations, ...locations, ...locations];

  return (
    <div className="w-full bg-[#1A1A18] text-[#F3EBDD] py-3.5 overflow-hidden border-y border-[#2E2E2A] relative z-20">
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="flex items-center space-x-8 animate-marquee group-hover:[animation-play-state:paused]">
          {displayItems.map((name, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-8 text-xs sm:text-sm font-black tracking-[0.22em] uppercase font-sans"
            >
              <span className={`text-[#ECEAE5] hover:text-[#F59E0B] transition-colors ${
                currentLang === 'te' ? 'font-telugu tracking-normal text-sm' : ''
              }`}>
                {name}
              </span>
              <Sparkles className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B] flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
