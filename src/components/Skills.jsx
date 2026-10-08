import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Skills() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const editorialEase = [0.16, 1, 0.3, 1];

  // Exact 9 skills specified by user
  const skillsList = [
    { num: '01', name: 'React', category: 'Frontend Architecture' },
    { num: '02', name: 'Flutter', category: 'Cross-Platform Mobile' },
    { num: '03', name: 'Java', category: 'Object-Oriented Programming' },
    { num: '04', name: 'Python', category: 'Programming & Scripting' },
    { num: '05', name: 'Figma', category: 'UI/UX Prototyping' },
    { num: '06', name: 'UI/UX', category: 'Human-Centered Design' },
    { num: '07', name: 'Design Systems', category: 'Design Architecture' },
    { num: '08', name: 'Google AI Studio', category: 'Multimodal AI Prototyping' },
    { num: '09', name: 'Prompt Engineering', category: 'Generative AI Workflows' },
  ];

  const secondaryTools = ['Adobe XD', 'Canva', 'Wireframing', 'Prototyping', 'User Research', 'HTML/CSS'];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-transparent border-b border-[#F2E5D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F2E5D1] mb-12">
          <div>
            <span className="text-xs font-mono text-[#8F0028] font-bold tracking-widest uppercase block mb-1">
              02 — CAPABILITIES &amp; STACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1F1F1F] tracking-tight uppercase">
              SKILLS
            </h2>
          </div>
          <p className="text-xs font-mono text-[#666666] max-w-xs text-left sm:text-right uppercase">
            Compact technical stack &amp; design disciplines.
          </p>
        </div>

        {/* Compact Interactive Skill Rows/Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsList.map((skill, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : (idx % 3) * 0.05,
                  ease: editorialEase,
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group px-5 py-4 rounded-xl border transition-all duration-200 cursor-default flex items-center justify-between gap-3 text-left ${
                  isHovered
                    ? 'bg-white border-[#8F0028]/50 shadow-md shadow-[#8F0028]/5 -translate-y-0.5'
                    : 'bg-white/80 border-[#F2E5D1] hover:bg-white shadow-xs'
                }`}
              >
                {/* Number & Skill Name */}
                <div className="flex items-center gap-3.5">
                  <span
                    className={`font-mono text-xs font-bold transition-colors duration-200 ${
                      isHovered ? 'text-[#8F0028]' : 'text-[#8A8A8A]'
                    }`}
                  >
                    {skill.num}
                  </span>

                  <span
                    className={`font-black text-base sm:text-lg tracking-tight uppercase transition-colors duration-200 ${
                      isHovered ? 'text-[#8F0028]' : 'text-[#1F1F1F]'
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>

                {/* Category Tag & Arrow */}
                <div className="flex items-center gap-2">
                  <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#666666] bg-[#FAF4EB] border border-[#F2E5D1]">
                    {skill.category}
                  </span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 transition-all duration-200 ${
                      isHovered
                        ? 'text-[#8F0028] opacity-100 translate-x-0.5 -translate-y-0.5'
                        : 'text-[#8A8A8A] opacity-0'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Competencies Row */}
        <div className="mt-10 pt-6 border-t border-[#F2E5D1] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <span className="text-xs font-mono text-[#8F0028] font-bold uppercase tracking-wider">
            ADDITIONAL PROFICIENCIES:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {secondaryTools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-white border border-[#F2E5D1] rounded-md text-xs font-mono font-medium text-[#1F1F1F]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
