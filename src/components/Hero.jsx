import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Download, MapPin, CheckCircle2 } from 'lucide-react';
import PortraitCard3D from './3d/PortraitCard3D';
import MagneticButton from './common/MagneticButton';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const editorialEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="hero"
      className="relative min-h-[82vh] lg:min-h-[86vh] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#FCF8F2] border-b border-[#F2E5D1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Balanced Horizontal 45/55 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ============================================================== */}
          {/* Left Column (Approx 45%): Clean Product Typography & Actions   */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 text-left">
            
            {/* Small Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: editorialEase }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#F2E5D1] text-[#8F0028] text-xs font-mono font-bold tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8F0028]" />
              <span>DEVELOPER • UI/UX DESIGNER</span>
            </motion.div>

            {/* Main Heading: "Hi, I'm Sastha." + Subtitle */}
            <div className="space-y-1.5">
              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: editorialEase }}
                className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#1F1F1F] tracking-tight leading-tight"
              >
                Hi, I'm Sastha.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: editorialEase }}
                className="text-xl sm:text-2xl font-bold text-[#8F0028] tracking-tight"
              >
                Developer &amp; UI/UX Designer
              </motion.p>
            </div>

            {/* Short 2-3 Line Introduction */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: editorialEase }}
              className="text-sm sm:text-base text-[#1F1F1F]/75 max-w-lg leading-relaxed font-normal"
            >
              B.Tech Information Technology student passionate about building modern digital products and creating clean, user-focused experiences. Specializing in frontend architecture, mobile apps, and scalable design systems.
            </motion.p>

            {/* Action Buttons: "View Projects" and "Download Resume" */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: editorialEase }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              {/* View Projects */}
              <MagneticButton>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8F0028] text-[#FCF8F2] text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#5E001B] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <span>View Projects</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>
              </MagneticButton>

              {/* Download Resume */}
              <MagneticButton>
                <a
                  href={personalInfo.resumePdf}
                  download="Sastha_K_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border-2 border-[#8F0028] text-[#8F0028] text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#8F0028] hover:text-[#FCF8F2] transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
                >
                  <span>Download Resume</span>
                  <Download className="w-4 h-4" />
                </a>
              </MagneticButton>
            </motion.div>

            {/* Metadata Status Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#666666]"
            >
              <span className="flex items-center gap-1.5 text-[#1F1F1F] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8F0028]" />
                <span>Available for Opportunities</span>
              </span>
              <span>•</span>
              <span className="text-[#8F0028] font-bold">
                Target: {personalInfo.targetCompany}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8F0028]" />
                <span>{personalInfo.location}</span>
              </span>
            </motion.div>

          </div>

          {/* ============================================================== */}
          {/* Right Column (Approx 55%): Modern Product Card Composition     */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: editorialEase }}
            className="lg:col-span-6 xl:col-span-7 w-full flex justify-center lg:justify-end"
          >
            <PortraitCard3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
