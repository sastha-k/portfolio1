import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, personalInfo } from '../data/portfolioData';
import { Briefcase, CheckCircle2, Target, Sparkles, ArrowRight } from 'lucide-react';
import TiltCard from './common/TiltCard';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white border-y border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Work Experience
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Transparent disclosure of candidate status directly aligned with resume.
          </p>
        </motion.div>

        {/* Fresher Readiness Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TiltCard maxTilt={6}>
            <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-7 sm:p-9 shadow-clean-md hover:border-zinc-300 transition-all space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-bold">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-1">
                      {experienceData.status} Level
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900">
                      {experienceData.headline}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open for Entry-Level &amp; Internships</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                {experienceData.summary}
              </p>

              {/* Transparency & Readiness Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold">
                  Professional Profile &amp; Integrity
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experienceData.readinessPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white border border-zinc-200 rounded-2xl flex items-start gap-3 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-xs text-zinc-700 leading-relaxed font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call To Action Box */}
              <div className="pt-4 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-500 font-mono text-center sm:text-left">
                  Target Company: <strong className="text-zinc-900 font-semibold">{personalInfo.targetCompany}</strong> • Role: <strong className="text-zinc-900 font-semibold">{personalInfo.targetRole}</strong>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-blue-600 shadow-sm transition-colors"
                >
                  <span>Discuss Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
