import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function PortraitCard3D() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const mobile =
        typeof window !== 'undefined' &&
        (window.matchMedia('(pointer: coarse)').matches ||
          window.innerWidth < 1024 ||
          'ontouchstart' in window);
      setIsMobile(mobile);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Mouse parallax motion values (normalized [-1, 1])
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft responsive spring for delicate cursor response
  const springConfig = { damping: 30, stiffness: 220, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Very subtle mouse parallax strictly clamped to 3px
  const parallaxX = useTransform(smoothX, [-1, 1], [-3, 3]);
  const parallaxY = useTransform(smoothY, [-1, 1], [-3, 3]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(Math.max(-1, Math.min(1, x)));
    mouseY.set(Math.max(-1, Math.min(1, y)));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  // Organic snake-like wave keyframes (6–8s duration, fluid S-curve)
  const waveVariants = {
    animate: shouldReduceMotion
      ? { x: 0, y: 0, rotate: 0 }
      : isMobile
      ? {
          // Mobile: significantly reduced gentle wave
          x: [-1.8, 0, 1.8, 0, -1.8],
          y: [-1, 1, -1, 1, -1],
          rotate: [-0.4, 0, 0.4, 0, -0.4],
        }
      : {
          // Desktop: full organic snake-like curved wave
          x: [-5.5, 0, 5.5, 0, -5.5],
          y: [-2.5, 2.5, -2, 2, -2.5],
          rotate: [-1.4, 0, 1.4, 0, -1.4],
        },
  };

  // Outer frame complementary organic motion
  const outerFrameVariants = {
    animate: shouldReduceMotion
      ? { x: 0, y: 0, rotate: -2 }
      : isMobile
      ? {
          x: [0.8, -0.8, 0.8, -0.8, 0.8],
          y: [0.5, -0.5, 0.5, -0.5, 0.5],
          rotate: [-2.3, -2, -1.7, -2, -2.3],
        }
      : {
          x: [2, -2, 2, -2, 2],
          y: [1.5, -1.5, 1, -1, 1.5],
          rotate: [-2.8, -1.8, -0.8, -1.8, -2.8],
        },
  };

  return (
    // Page load entrance: opacity 0 -> 1, scale 0.96 -> 1, 800ms ease-out
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] aspect-[4/5] mx-auto select-none"
    >
      {/* Container with mouse tracking */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full"
      >
        {/* Outer Background Frame: animates with subtle complementary organic wave */}
        <motion.div
          variants={outerFrameVariants}
          animate="animate"
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.15,
          }}
          className="absolute inset-1 sm:inset-2 rounded-3xl bg-[#F2E5D1]/70 border border-[#8F0028]/15 pointer-events-none transition-colors duration-300"
        />

        {/* Snake-like / Organic Wave Card Wrapper: side-to-side, curved bending, 7s loop */}
        <motion.div
          variants={waveVariants}
          animate="animate"
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full h-full"
        >
          {/* Main Photo Card in Modern Rounded Frame with Mouse Parallax (X: 3px, Y: 3px) */}
          <motion.div
            style={{
              x: shouldReduceMotion || isMobile ? 0 : parallaxX,
              y: shouldReduceMotion || isMobile ? 0 : parallaxY,
            }}
            className={`relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 border transition-all duration-300 ease-out ${
              isHovered
                ? 'border-[#8F0028]/45 shadow-2xl shadow-[#8F0028]/12'
                : 'border-[#F2E5D1] shadow-xl shadow-[#8F0028]/5'
            }`}
          >
            {/* Actual Professional User Portrait Photo Container */}
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF4EB]">
              {/* Photo Image: zoom 1.02 on hover, 100% stable crop & face */}
              <motion.img
                src={personalInfo.photo || '/sastha.jpeg'}
                alt={personalInfo.name}
                animate={{
                  scale: isHovered && !shouldReduceMotion ? 1.02 : 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                loading="eager"
              />

              {/* Gentle bottom gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Card Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                <div>
                  <p className="font-bold text-sm tracking-tight">{personalInfo.name}</p>
                  <p className="text-[11px] font-mono text-[#F2E5D1] tracking-wider uppercase">
                    Developer • UI/UX Designer
                  </p>
                </div>

                {/* Small Burgundy Dot: subtle pulse opacity 0.7 -> 1 -> 0.7, slow 2.5s loop */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: [0.7, 1, 0.7] }
                  }
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-2.5 h-2.5 rounded-full bg-[#8F0028] border-2 border-white shadow-xs"
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Status Tag (Top-Right): seamlessly follows the wave motion */}
          <div className="absolute -top-3 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F2E5D1] shadow-md flex items-center gap-2 pointer-events-none z-10">
            <motion.span
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: [0.7, 1, 0.7] }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-2 h-2 rounded-full bg-[#8F0028]"
            />
            <span className="text-[11px] font-mono font-bold text-[#1F1F1F] tracking-tight">
              Target: {personalInfo.targetCompany}
            </span>
          </div>

          {/* "AVAILABLE FOR ROLES" BADGE: Anchored inside wave wrapper so it naturally follows the card */}
          <motion.div
            animate={
              shouldReduceMotion
                ? { y: 0 }
                : { y: [-1.5, 1.5, -1.5] }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-3 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F2E5D1] shadow-md flex items-center gap-2 pointer-events-none z-10 text-xs"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#8F0028]" />
            <span className="text-[11px] font-mono text-[#666666] font-medium">
              Available for Roles
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
