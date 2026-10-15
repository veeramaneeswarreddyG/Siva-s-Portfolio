'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressLoader: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-[#F59E0B] to-amber-600 origin-left z-[100] pointer-events-none shadow-[0_0_10px_rgba(245,158,11,0.8)]"
      aria-hidden="true"
    />
  );
};
