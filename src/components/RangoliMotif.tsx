'use client';

import React from 'react';

interface RangoliMotifProps {
  variant?: 'mandala' | 'corner' | 'divider';
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}

export const RangoliMotif: React.FC<RangoliMotifProps> = ({
  variant = 'mandala',
  className = '',
  size = 120,
  color = '#F59E0B',
  opacity = 0.55,
}) => {
  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center my-4 ${className}`}>
        <svg
          width="200"
          height="24"
          viewBox="0 0 200 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity }}
        >
          {/* Symmetrical Left Wing */}
          <line x1="10" y1="12" x2="70" y2="12" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
          <path d="M70 12 C75 7, 85 7, 90 12" stroke={color} strokeWidth="1.25" fill="none" />
          <path d="M70 12 C75 17, 85 17, 90 12" stroke={color} strokeWidth="1.25" fill="none" />
          <circle cx="80" cy="12" r="1.5" fill={color} />

          {/* Center Rangoli Lotus Core */}
          <circle cx="100" cy="12" r="4.5" stroke={color} strokeWidth="1.25" />
          <circle cx="100" cy="12" r="1.5" fill={color} />
          <path d="M100 4 C97 8, 97 10, 100 12 C103 10, 103 8, 100 4 Z" stroke={color} strokeWidth="1" fill="none" />
          <path d="M100 20 C97 16, 97 14, 100 12 C103 14, 103 16, 100 20 Z" stroke={color} strokeWidth="1" fill="none" />
          <path d="M92 12 C96 9, 98 9, 100 12 C98 15, 96 15, 92 12 Z" stroke={color} strokeWidth="1" fill="none" />
          <path d="M108 12 C104 9, 102 9, 100 12 C102 15, 104 15, 108 12 Z" stroke={color} strokeWidth="1" fill="none" />

          {/* Symmetrical Right Wing */}
          <path d="M110 12 C115 7, 125 7, 130 12" stroke={color} strokeWidth="1.25" fill="none" />
          <path d="M110 12 C115 17, 125 17, 130 12" stroke={color} strokeWidth="1.25" fill="none" />
          <circle cx="120" cy="12" r="1.5" fill={color} />
          <line x1="130" y1="12" x2="190" y2="12" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>
    );
  }

  if (variant === 'corner') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={{ opacity }}
      >
        {/* Elegant Traditional South Indian Muggu / Kolam Corner Filigree */}
        
        {/* Outer Graceful Corner Border Curve */}
        <path
          d="M 6 88 C 6 42, 42 6, 88 6"
          stroke={color}
          strokeWidth="1.25"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner Parallel Dotted Harmony Curve */}
        <path
          d="M 12 76 C 12 40, 40 12, 76 12"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="2 3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Corner Flourish Spirals (Curled Finials) */}
        <path
          d="M 88 6 C 94 6, 96 11, 92 14 C 88 17, 83 13, 85 9"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 6 88 C 6 94, 11 96, 14 92 C 17 88, 13 83, 9 85"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Traditional Lotus Blossom Core radiating from corner diagonal */}
        <g transform="translate(14, 14)">
          {/* Central Bindu Dot */}
          <circle cx="24" cy="24" r="2.5" fill={color} />
          <circle cx="24" cy="24" r="5.5" stroke={color} strokeWidth="1" fill="none" />

          {/* Central Diagonally Projecting Lotus Petal */}
          <path
            d="M 24 24 C 20 34, 30 44, 38 48 C 44 30, 34 20, 24 24 Z"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          {/* Left Wing Petal */}
          <path
            d="M 24 24 C 14 26, 12 36, 18 42 C 24 38, 25 30, 24 24 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          {/* Right Wing Petal */}
          <path
            d="M 24 24 C 26 14, 36 12, 42 18 C 38 24, 30 25, 24 24 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />

          {/* Accent Ornamental Dots */}
          <circle cx="43" cy="53" r="1.5" fill={color} />
          <circle cx="16" cy="46" r="1.25" fill={color} />
          <circle cx="46" cy="16" r="1.25" fill={color} />
          <circle cx="50" cy="60" r="1" fill={color} />
        </g>

        {/* Scalloped Radiating Lotus Pearls along curve */}
        <circle cx="20" cy="58" r="1.5" fill={color} />
        <circle cx="28" cy="46" r="1.5" fill={color} />
        <circle cx="46" cy="28" r="1.5" fill={color} />
        <circle cx="58" cy="20" r="1.5" fill={color} />
        <circle cx="70" cy="15" r="1.2" fill={color} />
        <circle cx="15" cy="70" r="1.2" fill={color} />
      </svg>
    );
  }

  // Default: Symmetrical Radial Mandala (8-Fold Traditional South Indian Muggu)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      {/* Center Bindu */}
      <circle cx="80" cy="80" r="2.5" fill={color} />
      <circle cx="80" cy="80" r="7" stroke={color} strokeWidth="1" />
      <circle cx="80" cy="80" r="14" stroke={color} strokeWidth="0.8" strokeDasharray="2 3" />

      {/* 8 Geometric Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 80 80)`}>
          {/* Inner Loop Petal */}
          <path
            d="M80 66 C75 58, 75 50, 80 44 C85 50, 85 58, 80 66 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          {/* Accent Dot */}
          <circle cx="80" cy="38" r="1.5" fill={color} />
          {/* Outer Curved Connecting Wave */}
          <path
            d="M80 44 C88 38, 96 46, 102 58"
            stroke={color}
            strokeWidth="0.8"
            fill="none"
          />
        </g>
      ))}

      {/* Concentric Outer Ring */}
      <circle cx="80" cy="80" r="50" stroke={color} strokeWidth="0.75" strokeDasharray="3 4" />
      <circle cx="80" cy="80" r="65" stroke={color} strokeWidth="1" />

      {/* Outer Radial Dots */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 80 + 72 * Math.cos(rad);
        const y = 80 + 72 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="1.25" fill={color} />;
      })}
    </svg>
  );
};
