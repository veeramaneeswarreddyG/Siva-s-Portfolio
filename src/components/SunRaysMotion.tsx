'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SunRaysMotionProps {
  className?: string;
  size?: number;
  opacity?: number;
  duration?: number;
}

export const SunRaysMotion: React.FC<SunRaysMotionProps> = ({
  className = '',
  size = 620,
  opacity = 0.12,
  duration = 85,
}) => {
  return (
    <div
      className={`pointer-events-none select-none flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="w-full h-full rounded-full"
        style={{
          opacity,
          background:
            'repeating-conic-gradient(from 0deg at 50% 50%, rgba(245, 158, 11, 0.42) 0deg 11deg, transparent 11deg 30deg)',
          maskImage:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 35%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 35%, transparent 70%)',
          filter: 'blur(12px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};
