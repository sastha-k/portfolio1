import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import TiltCard from './common/TiltCard';
import {
  Layers,
  Palette,
  Compass,
  Layout,
  FileCode2,
  Smartphone,
  CheckCircle2,
  PenTool,
  Wand2
} from 'lucide-react';

const iconMap = {
  "UI Design": Palette,
  "UX Design": Compass,
  "Wireframing": Layout,
  "Prototyping": Layers,
  "User Research": Compass,
  "Design Systems": Layers,
  "HTML/CSS Basics": FileCode2,
  "Flutter Basics": Smartphone,
  "Figma": PenTool,
  "Adobe XD": Layout,
  "Canva": Wand2
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((c) => c.category)];

  const displayedGroups =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Design Competencies &amp; Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Skills &amp; Design Tools
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Sourced strictly from my resume. Hover over any card for interactive 3D perspective feedback.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-12">
          {displayedGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-5">
              <div className="border-b border-zinc-200/80 pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-zinc-900">
                  {group.category}
                </h3>
                <span className="text-xs font-mono text-zinc-500">
                  {group.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {group.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.name] || Layers;

                  return (
                    <TiltCard key={sIdx} maxTilt={10}>
                      <div className="bg-white border border-zinc-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-clean-lg transition-all duration-200 flex flex-col justify-between h-full group">
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/80 text-zinc-700 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors shadow-sm">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-50 text-zinc-500 border border-zinc-200">
                              {skill.category}
                            </span>
                          </div>

                          <h4 className="font-bold text-zinc-900 text-base mb-1.5 group-hover:text-blue-600 transition-colors">
                            {skill.name}
                          </h4>

                          <p className="text-zinc-600 text-xs leading-relaxed">
                            {skill.description}
                          </p>
                        </div>

                        <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Resume Verified</span>
                        </div>
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
