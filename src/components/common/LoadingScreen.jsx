import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoaded(true);
            if (onFinishRef.current) onFinishRef.current();
          }, 150);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25 + 20);
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FCF8F2] text-[#1F1F1F]"
        >
          {/* Minimal 2D Editorial Logo Mark */}
          <div className="w-14 h-14 rounded-2xl bg-[#8F0028] p-3 flex items-center justify-center mb-6 shadow-md">
            <img
              src={personalInfo.logo}
              alt="Sastha K Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Typography Lockup */}
          <div className="text-center space-y-1 mb-8">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tightest uppercase text-[#1F1F1F]">
              {personalInfo.name}
            </h1>
            <p className="text-xs font-mono tracking-widest text-[#8F0028] uppercase font-bold">
              DEVELOPER × UI/UX DESIGNER
            </p>
          </div>

          {/* Clean Editorial Progress Line */}
          <div className="w-48 h-1 bg-[#F2E5D1] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#8F0028]"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
