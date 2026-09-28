import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import TiltCard from './common/TiltCard';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#fafafa]">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Education
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Exact academic qualification from resume.
          </p>
        </motion.div>

        {/* Education Card */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TiltCard maxTilt={6}>
                <div className="bg-white border border-zinc-200 rounded-3xl p-7 sm:p-9 shadow-clean-md hover:border-zinc-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                        <GraduationCap className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 mt-0.5">
                          {edu.field}
                        </p>
                        <p className="text-xs font-mono text-zinc-500 mt-1">
                          {edu.status}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-mono font-bold self-start">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 pt-2 border-t border-zinc-100">
                    {edu.focus}
                  </p>

                  <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-zinc-500 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-emerald-600 font-mono font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Active Enrollment • B.Tech IT</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
