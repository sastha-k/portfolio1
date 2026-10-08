import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CinematicSectionHeader({
  number,
  title,
  subtitle,
  description,
  align = 'left', // 'left' | 'center'
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();

  // Easing curve for editorial motion
  const editorialEase = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: editorialEase },
    },
  };

  const headingVariants = {
    hidden: {
      clipPath: shouldReduceMotion ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
      opacity: shouldReduceMotion ? 1 : 0.6,
      x: shouldReduceMotion ? 0 : -8,
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: editorialEase },
    },
  };

  const lineVariants = {
    hidden: { scaleX: shouldReduceMotion ? 1 : 0, originX: align === 'center' ? 0.5 : 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, ease: editorialEase },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: editorialEase },
    },
  };

  if (align === 'center') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 ${className}`}
      >
        {/* Step 1: Small Section Number / Kicker */}
        {number && (
          <motion.div variants={numberVariants} className="inline-block">
            <span className="text-xs font-mono text-[#8F0028] font-bold tracking-widest uppercase">
              {number}
            </span>
          </motion.div>
        )}

        {/* Step 2: Large Heading with Horizontal Mask Reveal */}
        <motion.div variants={headingVariants} className="overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight uppercase">
            {title}
          </h2>
        </motion.div>

        {/* Accent Horizontal Rule */}
        <motion.div
          variants={lineVariants}
          className="w-16 h-[2px] bg-[#8F0028] mx-auto my-3"
        />

        {/* Step 3: Content / Subtitle */}
        {(subtitle || description) && (
          <motion.div variants={contentVariants} className="text-[#666666] text-sm sm:text-base font-medium">
            {subtitle && <p className="text-xs font-mono text-[#8F0028] font-bold uppercase mb-1">{subtitle}</p>}
            {description && <p>{description}</p>}
          </motion.div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`pb-8 border-b-2 border-[#181818] mb-12 sm:mb-16 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          {/* Step 1: Small Section Number */}
          {number && (
            <motion.div variants={numberVariants} className="block mb-1">
              <span className="text-xs font-mono text-[#8F0028] font-bold tracking-widest uppercase">
                {number}
              </span>
            </motion.div>
          )}

          {/* Step 2: Large Heading Reveals with Horizontal Mask */}
          <motion.div variants={headingVariants} className="overflow-hidden">
            <h2 className="text-4xl sm:text-6xl font-black text-[#181818] tracking-tightest uppercase">
              {title}
            </h2>
          </motion.div>
        </div>

        {/* Step 3: Content / Description on right */}
        {description && (
          <motion.p
            variants={contentVariants}
            className="text-xs font-mono text-[#666666] max-w-xs text-left sm:text-right uppercase"
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
