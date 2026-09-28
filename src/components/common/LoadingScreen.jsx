import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoaded(true);
            if (onFinish) onFinish();
          }, 250);
          return 100;
        }
        return prev + Math.floor(Math.random() * 22 + 15);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fafafa]"
        >
          {/* 3D Minimal Wireframe Cube */}
          <div className="relative w-20 h-20 mb-8 flex items-center justify-center perspective-[800px]">
            <motion.div
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                rotateZ: [0, 180],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-14 h-14 border-2 border-zinc-900/80 rounded-xl relative shadow-sm"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-2 flex items-center justify-center p-1">
                <img
                  src={personalInfo.logo || "/logo.png"}
                  alt={`${personalInfo.name} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Title & Status */}
          <div className="text-center space-y-2">
            <h2 className="text-sm font-bold tracking-wider text-zinc-900 font-mono">
              SASTHA K // UI/UX PORTFOLIO
            </h2>
            <div className="text-xs font-mono text-zinc-500 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>Loading 3D Experience... {progress}%</span>
            </div>
          </div>

          {/* Minimalist Progress Bar */}
          <div className="w-48 h-1 bg-zinc-200 rounded-full mt-6 overflow-hidden">
            <motion.div
              className="h-full bg-zinc-900"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
