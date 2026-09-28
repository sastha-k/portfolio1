import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import {
  User,
  Target,
  GraduationCap,
  Sparkles,
  CheckCircle,
  Languages,
  MapPin,
  Mail,
  ArrowUpRight
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-y border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Profile &amp; Career Objective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            About Me
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Focused on creating clean, intuitive digital experiences through modern design thinking and purposeful prototyping.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Objective Narrative & Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Career Objective Card */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-7 sm:p-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold block">
                Career Objective
              </span>
              <blockquote className="text-zinc-800 text-base sm:text-lg leading-relaxed font-medium">
                "{personalInfo.objective}"
              </blockquote>

              <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-600">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>

            {/* Target Role & Company Spotlight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase text-zinc-500 font-semibold block">Target Role</span>
                <h3 className="font-bold text-zinc-900 text-base">{personalInfo.targetRole}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Passionate about crafting intuitive UI workflows for consumer and enterprise platforms.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase text-zinc-500 font-semibold block">Target Company</span>
                <h3 className="font-bold text-zinc-900 text-base">{personalInfo.targetCompany}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Committed to high design rigor and seamless user journeys fitting enterprise ecosystem scale.
                </p>
              </div>
            </div>

            {/* Languages Section */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Languages className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs font-mono uppercase text-zinc-500 font-bold tracking-wider">
                  Languages
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="p-3 bg-zinc-50 border border-zinc-200/80 rounded-xl">
                    <div className="font-bold text-zinc-900 text-sm">{lang.name}</div>
                    <div className="text-[11px] font-mono text-zinc-500">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Strengths Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="border-b border-zinc-200 pb-3">
              <h3 className="text-lg font-bold text-zinc-900">
                Core Strengths &amp; Attributes
              </h3>
              <p className="text-xs text-zinc-500 font-mono">
                Key professional qualities from resume
              </p>
            </div>

            <div className="space-y-3">
              {personalInfo.strengths.map((strength, idx) => (
                <div
                  key={idx}
                  className="bg-[#fafafa] border border-zinc-200/90 rounded-2xl p-4 sm:p-5 hover:border-zinc-300 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 text-sm">
                        {strength.title}
                      </h4>
                      <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                        {strength.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Verification Card */}
            <div className="p-5 rounded-2xl bg-zinc-900 text-white flex items-center justify-between shadow-sm">
              <div className="space-y-0.5">
                <div className="text-xs font-mono text-zinc-400">Verified Credentials</div>
                <div className="text-sm font-bold">100% Resume Accurate</div>
              </div>
              <a
                href={personalInfo.resumePdf}
                download="Sastha_K_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
              >
                <span>View PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
