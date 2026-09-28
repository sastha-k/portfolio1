import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import TiltCard from './common/TiltCard';
import {
  FolderGit2,
  CheckCircle,
  X,
  Layers,
  ArrowUpRight,
  ExternalLink,
  PenTool,
  Maximize2
} from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-white border-y border-zinc-200/80">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Curated UI/UX Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Featured Design Projects
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            From the resume: user-centered mobile applications, comprehensive redesigns, and fintech dashboards. Click or hover for interactive depth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard maxTilt={8} className="h-full">
                <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl overflow-hidden hover:border-zinc-400 hover:shadow-clean-xl transition-all duration-300 flex flex-col justify-between h-full group">
                  
                  {/* Image Preview Area */}
                  <div>
                    <div
                      className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-zinc-900/85 backdrop-blur-md text-white border border-white/20 shadow-sm">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="p-2 rounded-xl bg-white/90 backdrop-blur-md text-zinc-800 shadow-md inline-flex items-center gap-1 text-xs font-semibold">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Inspect</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <div>
                        <h3
                          onClick={() => setSelectedProject(project)}
                          className="text-xl font-bold text-zinc-900 hover:text-blue-600 cursor-pointer transition-colors"
                        >
                          {project.title}
                        </h3>
                        <div className="text-xs font-mono font-medium text-blue-600 mt-1">
                          {project.tagline}
                        </div>
                      </div>

                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {project.resumeDescription}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-zinc-200/80">
                        {project.keyPoints.slice(0, 2).map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-600">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tool Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tools.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-zinc-700 bg-white border border-zinc-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-200/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-zinc-900 hover:text-blue-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Case Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono text-zinc-400">Resume Project</span>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-zinc-100 text-zinc-700 shadow-sm transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="h-64 sm:h-72 w-full bg-zinc-100 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-900/80 text-white backdrop-blur-md">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-zinc-900">
                    {selectedProject.title}
                  </h3>
                  <div className="text-sm font-mono text-blue-600 font-semibold mt-1">
                    {selectedProject.tagline}
                  </div>
                </div>

                <p className="text-zinc-700 text-sm leading-relaxed">
                  {selectedProject.resumeDescription}
                </p>

                {/* Key Points */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-500 mb-3">
                    Design Scope &amp; User Experience Solutions
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.keyPoints.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-500 mb-2">
                    Key Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.deliverables.map((deliv, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-50 text-blue-800 font-medium border border-blue-200/60"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-500 mb-2">
                    Design Tools &amp; Methods
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-100 text-zinc-800 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">
                    Source: Resume Project Portfolio
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
