'use client';

import React, { useEffect, useState } from 'react';

export const MotionBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Subtle desktop cursor luminescence tracking with throttling
    let rafId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      // Butter-smooth lerp interpolation (Apple style smooth follow)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: Math.round(currentX), y: Math.round(currentY) });
      rafId = requestAnimationFrame(updatePosition);
    };

    // Only enable mouse tracker on pointer devices
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      rafId = requestAnimationFrame(updatePosition);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      {/* 1. Base Subtle Ambient Tint */}
      <div className="absolute inset-0 bg-[#FAF7F2]" />

      {/* 2. Floating Luminous Light Orbs (Hardware-accelerated translate3d) */}
      
      {/* Orb 1: Warm Golden Amber (Top Left Drifter) */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[520px] sm:w-[720px] h-[520px] sm:h-[720px] rounded-full bg-gradient-to-br from-[#F59E0B]/18 via-[#FBBF24]/10 to-transparent blur-[90px] sm:blur-[130px] animate-orb-1"
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
        }}
      />

      {/* Orb 2: Champagne Gold (Center Right Drifter) */}
      <div 
        className="absolute top-[35%] -right-[15%] w-[480px] sm:w-[680px] h-[480px] sm:h-[680px] rounded-full bg-gradient-to-bl from-[#FCD34D]/16 via-[#F59E0B]/08 to-transparent blur-[85px] sm:blur-[120px] animate-orb-2"
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
        }}
      />

      {/* Orb 3: Soft Terracotta Peach (Bottom Left Drifter) */}
      <div 
        className="absolute bottom-[10%] -left-[10%] w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-gradient-to-tr from-[#EA580C]/10 via-[#F59E0B]/12 to-transparent blur-[95px] sm:blur-[130px] animate-orb-3"
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
        }}
      />

      {/* Orb 4: Center Breathing Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-r from-[#F59E0B]/08 via-[#FEF3C7]/20 to-[#F59E0B]/06 blur-[100px] sm:blur-[150px] animate-pulse-glow"
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'opacity, transform',
        }}
      />

      {/* 3. Interactive Desktop Cursor Luminescence Halo */}
      {isClient && mousePos.x > 0 && (
        <div 
          className="hidden md:block absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#F59E0B]/10 via-[#FBBF24]/06 to-transparent blur-[80px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-out pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            willChange: 'left, top',
          }}
        />
      )}

      {/* 4. Apple-grade Tactile Silk Grain Filter (SVG Turbulence) */}
      <div 
        className="absolute inset-0 opacity-[0.028] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 5. Minimal Vignette Frame */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.035)_100%)] pointer-events-none" />
    </div>
  );
};
