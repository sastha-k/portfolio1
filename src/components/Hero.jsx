import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Target, Compass } from 'lucide-react';
import PortraitCard3D from './3d/PortraitCard3D';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#fafafa]">
      {/* Subtle Minimalist Background Grid & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-50/70 to-transparent rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Target Role & Availability Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-medium">
                <Target className="w-3.5 h-3.5 text-blue-600" />
                <span>Target: {personalInfo.targetCompany} • {personalInfo.targetRole}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalInfo.status}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block">
                Portfolio &amp; Design Showcase
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-blue-600">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-zinc-700 tracking-tight">
                {personalInfo.title}
              </p>
            </div>

            {/* Resume-Sourced Introduction */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl">
              {personalInfo.objective}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 text-white font-semibold text-xs sm:text-sm hover:bg-blue-600 shadow-sm hover:shadow transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePdf}
                download="Sastha_K_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-zinc-300 text-zinc-800 font-semibold text-xs sm:text-sm hover:bg-zinc-50 hover:border-zinc-400 shadow-sm transition-all duration-200"
              >
                <Download className="w-4 h-4 text-zinc-600" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Key Resume Meta */}
            <div className="pt-4 border-t border-zinc-200/80">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{personalInfo.location}</span>
                </span>
                <span className="text-zinc-300">•</span>
                <span>{personalInfo.degree} ({personalInfo.batch})</span>
              </div>

              {/* Verified Tools Pill Row */}
              <div className="flex flex-wrap items-center gap-1.5 mt-3">
                {['Figma', 'UI Design', 'UX Design', 'Wireframing', 'Prototyping', 'Adobe XD'].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-zinc-700 bg-white border border-zinc-200 rounded-lg shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Hero: Professional 3D Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 w-full flex justify-center items-center"
          >
            <PortraitCard3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
