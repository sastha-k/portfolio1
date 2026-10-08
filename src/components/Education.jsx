import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const shouldReduceMotion = useReducedMotion();
  const editorialEase = [0.16, 1, 0.3, 1];

  return (
    <section id="education" className="py-24 sm:py-32 bg-transparent border-b border-[#F2E5D1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono text-[#8F0028] font-bold tracking-widest uppercase block">
            ACADEMIC FOUNDATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1F1F1F] tracking-tight uppercase">
            EDUCATION
          </h2>
          <div className="w-12 h-1 bg-[#8F0028] mx-auto mt-3" />
        </div>

        {/* Education Card */}
        <div className="space-y-6">
          {(educationData || []).map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: shouldReduceMotion ? 1 : 0,
                y: shouldReduceMotion ? 0 : 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : idx * 0.1, ease: editorialEase }}
              className="bg-white border border-[#F2E5D1] hover:border-[#8F0028]/40 rounded-2xl p-7 sm:p-9 shadow-xs hover:shadow-md transition-all duration-300 text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF4EB] text-[#8F0028] flex items-center justify-center shrink-0 border border-[#F2E5D1]">
                    <GraduationCap className="w-6 h-6 text-[#8F0028]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1F1F1F] tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[#8F0028] mt-0.5">
                      {edu.field}
                    </p>
                    <p className="text-xs font-mono text-[#666666] mt-1">
                      {edu.status}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF4EB] border border-[#F2E5D1] text-[#8F0028] text-xs font-mono font-bold self-start">
                  <Calendar className="w-3.5 h-3.5 text-[#8F0028]" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-[#666666] text-sm leading-relaxed mb-6 pt-4 border-t border-[#F2E5D1] font-medium">
                {edu.focus}
              </p>

              <div className="pt-4 border-t border-[#F2E5D1] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-[#666666] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#8F0028]" />
                  <span>{edu.location}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[#8F0028] font-mono font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8F0028]" />
                  <span>Active Undergraduate Student • B.Tech IT</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
