'use client';

import React from 'react';
import { Language } from '@/types';
import { Sparkles } from 'lucide-react';

interface MarqueeStripProps {
  currentLang: Language;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({ currentLang }) => {
  const items = currentLang === 'te'
    ? [
        'రెండు ఎకరాల వ్యవసాయ నేపథ్యం',
        'ఎల్.ఐ.సి చీఫ్ అడ్వైజర్',
        'జమ్మలమడుగు',
        'AGENT',
        'LIAFI',
        'CLIA',
        '#3 డైమండ్ బ్రిగేడ్',
        'మట్టి నుండి మహోన్నతం వరకు',
        'గౌరవం స్వార్జితం • వారసత్వం శాశ్వతం',
      ]
    : [
        'TWO-ACRE FARMING ROOTS',
        'LIC CHIEF ADVISOR',
        'JAMMALAMADUGU',
        'AGENT FOUNDATION',
        'LIAFI FEDERATION',
        'CLIA LEADERSHIP',
        '#3 DIAMOND BRIGADE',
        'FROM SOIL TO SIGNIFICANCE',
        'HONOUR IS EARNED • LEGACY IS LEFT BEHIND',
      ];

  return (
    <div className="w-full bg-charcoal-950 text-cream-200 py-4 overflow-hidden border-y border-charcoal-800 relative z-20">
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="flex items-center space-x-8 animate-marquee group-hover:[animation-play-state:paused]">
          {items.concat(items).map((text, idx) => (
            <div key={idx} className="flex items-center space-x-6 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-sans">
              <span className="text-ivory-100">{text}</span>
              <Sparkles className="w-3.5 h-3.5 text-amberGold-500 fill-amberGold-500 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
