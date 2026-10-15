'use client';

import React from 'react';

export const MotionBackground: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-[#FAF7F0]"
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      {/* 1. Luminous Solar Sunrise Core (Top-Left Bright Morning Radiance) */}
      <div 
        className="absolute -top-[20%] -left-[15%] w-[700px] sm:w-[950px] lg:w-[1200px] h-[700px] sm:h-[950px] lg:h-[1200px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95)_0%,rgba(254,243,199,0.7)_25%,rgba(251,191,36,0.22)_45%,rgba(245,158,11,0.08)_65%,transparent_80%)] blur-[50px] sm:blur-[70px] animate-sun-pulse"
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'opacity, transform',
        }}
      />

      {/* 2. Minimal Ethereal Sunrays (Diagonal Morning Light Shafts) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-85 animate-sunrays"
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'opacity, transform',
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Luminous Warm Sunlight Beam Gradients */}
          <linearGradient id="sunbeam-wide" x1="0%" y1="0%" x2="65%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="25%" stopColor="#FFFBEB" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#FEF3C7" stopOpacity="0.18" />
            <stop offset="85%" stopColor="#F59E0B" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="sunbeam-bright" x1="10%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#FEF3C7" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#FDE68A" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="sunbeam-soft" x1="0%" y1="10%" x2="60%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#FDE68A" stopOpacity="0.22" />
            <stop offset="80%" stopColor="#F59E0B" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>

          {/* Soft Atmospheric Blur for Natural Sunlight Diffusion */}
          <filter id="sunray-diffusion" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        <g filter="url(#sunray-diffusion)">
          {/* Ray 1: Gentle Upper Beam */}
          <polygon points="-50,-30 180,-30 820,950 510,950" fill="url(#sunbeam-soft)" />

          {/* Ray 2: Dominant Center Sunbeam */}
          <polygon points="100,-40 360,-40 1300,950 960,950" fill="url(#sunbeam-bright)" />

          {/* Ray 3: Warm Slender Ray */}
          <polygon points="260,-30 420,-30 1520,890 1280,890" fill="url(#sunbeam-wide)" />

          {/* Ray 4: Low Angle Early Beam */}
          <polygon points="-80,60 120,60 680,950 420,950" fill="url(#sunbeam-soft)" />

          {/* Ray 5: Distant Ambient Ray */}
          <polygon points="380,-40 560,-40 1620,740 1390,740" fill="url(#sunbeam-bright)" />
        </g>
      </svg>

      {/* 3. Subtle Warm Daylight Ambient Tint (Clean, Uplifting, Bright) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-transparent to-amber-100/20 pointer-events-none"
      />

      {/* 4. Delicate Floating Golden Sunlight Motes (Subtle Living Atmosphere) */}
      <div className="absolute top-[18%] left-[28%] w-2 h-2 rounded-full bg-amber-200/60 blur-[0.5px] animate-float-gentle" />
      <div className="absolute top-[32%] left-[45%] w-1.5 h-1.5 rounded-full bg-amber-300/50 blur-[0.5px] animate-float-gentle [animation-delay:2s]" />
      <div className="absolute top-[48%] left-[62%] w-2.5 h-2.5 rounded-full bg-amber-100/70 blur-[0.5px] animate-float-gentle [animation-delay:4s]" />
      <div className="absolute top-[68%] left-[30%] w-1.5 h-1.5 rounded-full bg-amber-200/50 blur-[0.5px] animate-float-gentle [animation-delay:3s]" />
      <div className="absolute top-[22%] left-[75%] w-2 h-2 rounded-full bg-amber-200/40 blur-[0.5px] animate-float-gentle [animation-delay:5s]" />
    </div>
  );
};
