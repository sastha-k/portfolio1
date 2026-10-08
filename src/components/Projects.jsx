import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import MagneticButton from './common/MagneticButton';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const editorialEase = [0.16, 1, 0.3, 1];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#FCF8F2] border-b border-[#F2E5D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F2E5D1] mb-14">
          <div>
            <span className="text-xs font-mono text-[#8F0028] font-bold tracking-widest uppercase block mb-1">
              03 — SELECTED CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1F1F1F] tracking-tight uppercase">
              PROJECTS
            </h2>
          </div>
          <p className="text-xs font-mono text-[#666666] max-w-xs text-left sm:text-right uppercase">
            Product designs, mobile applications, and algorithmic web systems.
          </p>
        </div>

        {/* Distinct Product Showcase Cards (Varied Compositions) */}
        <div className="space-y-12 sm:space-y-16">
          {projectsData.map((project, idx) => {
            const projectNumber = `0${idx + 1}`;
            // Different composition rhythm based on index:
            // 0: Full-width flagship showcase
            // 1: Left image / Right content
            // 2: Right image / Left content
            // 3: Mobile App spotlight with special device framing
            const isFlagship = idx === 0;
            const isReversed = idx === 2;

            if (isFlagship) {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: editorialEase }}
                  className="group relative rounded-3xl bg-white border border-[#F2E5D1] hover:border-[#8F0028]/40 shadow-xs hover:shadow-xl transition-all duration-300 p-6 sm:p-10 text-left overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Meta */}
                    <div className="lg:col-span-5 space-y-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xl sm:text-2xl font-black text-[#8F0028]">
                          {projectNumber}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold bg-[#FAF4EB] text-[#8F0028] border border-[#F2E5D1]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1F1F] tracking-tight uppercase hover:text-[#8F0028] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#1F1F1F]/75 leading-relaxed font-normal">
                        {project.resumeDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 rounded-md bg-[#FAF4EB] border border-[#F2E5D1] text-[11px] font-mono text-[#1F1F1F]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <MagneticButton>
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8F0028] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5E001B] transition-colors cursor-pointer shadow-xs"
                          >
                            <span>View Project</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </MagneticButton>
                      </div>
                    </div>

                    {/* Right Large Preview */}
                    <div className="lg:col-span-7">
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#FAF4EB] border border-[#F2E5D1] cursor-pointer group-hover:border-[#8F0028]/30 transition-colors"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: editorialEase }}
                className="group relative rounded-3xl bg-white border border-[#F2E5D1] hover:border-[#8F0028]/40 shadow-xs hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-left"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Image Block */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#FAF4EB] border border-[#F2E5D1] cursor-pointer group-hover:border-[#8F0028]/30 transition-colors"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                      />
                    </div>
                  </div>

                  {/* Text Block */}
                  <div className={`lg:col-span-5 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xl sm:text-2xl font-black text-[#8F0028]">
                        {projectNumber}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold bg-[#FAF4EB] text-[#8F0028] border border-[#F2E5D1]">
                        {project.category}
                      </span>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-2xl sm:text-3xl font-black text-[#1F1F1F] tracking-tight uppercase hover:text-[#8F0028] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#1F1F1F]/75 leading-relaxed font-normal">
                      {project.resumeDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md bg-[#FAF4EB] border border-[#F2E5D1] text-[11px] font-mono text-[#1F1F1F]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <MagneticButton>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8F0028] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5E001B] transition-colors cursor-pointer shadow-xs"
                        >
                          <span>View Project</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Case Study Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-[#1F1F1F]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.96, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 12 }}
                transition={{ duration: 0.22, ease: editorialEase }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#FCF8F2] border-2 border-[#8F0028] rounded-2xl max-w-3xl w-full p-6 sm:p-10 space-y-6 shadow-2xl relative my-8 text-left"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between border-b border-[#F2E5D1] pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#8F0028] font-bold uppercase tracking-wider">
                      {selectedProject.category} // CASE STUDY
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#1F1F1F] tracking-tight uppercase mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-white border border-[#F2E5D1] text-[#1F1F1F] hover:text-[#8F0028] transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Image */}
                <div className="rounded-xl overflow-hidden border border-[#F2E5D1] h-60 sm:h-72 bg-white">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#8F0028] font-bold tracking-wider mb-1">
                      PROBLEM &amp; OBJECTIVE
                    </h4>
                    <p className="text-sm text-[#1F1F1F] leading-relaxed">
                      {selectedProject.resumeDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#8F0028] font-bold tracking-wider mb-2">
                      KEY WORKFLOW HIGHLIGHTS
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.keyPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#1F1F1F]/90">
                          <CheckCircle2 className="w-4 h-4 text-[#8F0028] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#8F0028] font-bold tracking-wider mb-2">
                      DELIVERABLES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.deliverables.map((deliv, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-3 py-1 bg-white border border-[#F2E5D1] rounded-md text-xs font-mono font-medium text-[#1F1F1F]"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-[#F2E5D1] flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-lg bg-[#8F0028] text-[#FCF8F2] text-xs font-bold tracking-wider uppercase hover:bg-[#5E001B] transition-colors cursor-pointer"
                  >
                    CLOSE PREVIEW
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
