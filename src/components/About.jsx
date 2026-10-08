import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Target, MapPin, Languages, CheckCircle2 } from 'lucide-react';

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const editorialEase = [0.16, 1, 0.3, 1];

  return (
    <section id="about" className="py-24 sm:py-32 bg-transparent border-b border-[#F2E5D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ============================================================== */}
          {/* Left Column (5 cols): "01 — ABOUT" & Heading                   */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 text-left">
            <span className="text-xs font-mono text-[#8F0028] font-bold tracking-widest uppercase block">
              01 — ABOUT
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1F1F1F] tracking-tight leading-[1.15] uppercase">
              Engineering digital interfaces with human-centered intent.
            </h2>

            <p className="text-sm sm:text-base text-[#1F1F1F]/70 leading-relaxed font-normal">
              Combining technical problem solving with a deep appreciation for typography, visual hierarchy, and seamless user journeys.
            </p>

            <div className="w-12 h-1 bg-[#8F0028]" />
          </div>

          {/* ============================================================== */}
          {/* Right Column (7 cols): Introduction & Small Information Cards  */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Short Introduction Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: editorialEase }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#F2E5D1] shadow-xs space-y-3"
            >
              <h3 className="text-lg font-bold text-[#1F1F1F]">
                Bridging Design &amp; Technology
              </h3>
              <p className="text-sm text-[#1F1F1F]/80 leading-relaxed">
                {personalInfo.objective}
              </p>
            </motion.div>

            {/* Small Information Blocks / Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Education Block */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1, ease: editorialEase }}
                className="p-5 rounded-xl bg-white border border-[#F2E5D1] shadow-xs space-y-2 text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAF4EB] text-[#8F0028] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8F0028] font-bold uppercase tracking-wider block">
                    EDUCATION
                  </span>
                  <p className="font-bold text-sm text-[#1F1F1F] mt-0.5">{personalInfo.degree}</p>
                  <p className="text-xs text-[#666666]">Batch {personalInfo.batch} • Undergraduate</p>
                </div>
              </motion.div>

              {/* Target Role & Company Block */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.15, ease: editorialEase }}
                className="p-5 rounded-xl bg-white border border-[#F2E5D1] shadow-xs space-y-2 text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAF4EB] text-[#8F0028] flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8F0028] font-bold uppercase tracking-wider block">
                    TARGET ROLE &amp; COMPANY
                  </span>
                  <p className="font-bold text-sm text-[#1F1F1F] mt-0.5">{personalInfo.targetRole}</p>
                  <p className="text-xs text-[#666666]">Committed to enterprise UI rigor at {personalInfo.targetCompany}</p>
                </div>
              </motion.div>

              {/* Location Block */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.2, ease: editorialEase }}
                className="p-5 rounded-xl bg-white border border-[#F2E5D1] shadow-xs space-y-2 text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAF4EB] text-[#8F0028] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8F0028] font-bold uppercase tracking-wider block">
                    LOCATION &amp; CONTACT
                  </span>
                  <p className="font-bold text-sm text-[#1F1F1F] mt-0.5">{personalInfo.location}</p>
                  <p className="text-xs text-[#666666]">{personalInfo.email}</p>
                </div>
              </motion.div>

              {/* Languages Block */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.25, ease: editorialEase }}
                className="p-5 rounded-xl bg-white border border-[#F2E5D1] shadow-xs space-y-2 text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAF4EB] text-[#8F0028] flex items-center justify-center">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8F0028] font-bold uppercase tracking-wider block">
                    LANGUAGES
                  </span>
                  <p className="font-bold text-sm text-[#1F1F1F] mt-0.5">English &amp; Tamil</p>
                  <p className="text-xs text-[#666666]">Professional Working &amp; Native Fluency</p>
                </div>
              </motion.div>

            </div>

            {/* Core Strengths Compact List */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3, ease: editorialEase }}
              className="p-6 rounded-2xl bg-white border border-[#F2E5D1] shadow-xs space-y-4 text-left"
            >
              <span className="text-xs font-mono text-[#8F0028] font-bold uppercase tracking-wider block">
                CORE ATTRIBUTES &amp; DISCIPLINES
              </span>

              <div className="divide-y divide-[#F2E5D1]">
                {personalInfo.strengths.map((st, idx) => (
                  <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-left">
                    <span className="font-bold text-sm text-[#1F1F1F]">{st.title}</span>
                    <span className="text-xs text-[#666666]">{st.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
