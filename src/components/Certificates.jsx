import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificatesList } from '../data/portfolioData';
import CertificateCard from './CertificateCard';
import CertificateViewer from './CertificateViewer';
import { Award, ShieldCheck, FileText } from 'lucide-react';

export default function Certificates() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Exact categories specified by user
  const categories = [
    'All',
    'AI',
    'Cybersecurity',
    'Development',
    'Training',
    'Participation',
    'Internship',
    'Other'
  ];

  // Filter certificates based on active category
  const filteredCertificates =
    activeCategory === 'All'
      ? certificatesList
      : certificatesList.filter((c) => c.category === activeCategory);

  const handleOpenCert = (cert) => {
    const idx = certificatesList.findIndex((c) => c.id === cert.id);
    if (idx !== -1) {
      setSelectedIndex(idx);
    }
  };

  const handlePrevCert = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : certificatesList.length - 1));
  };

  const handleNextCert = () => {
    setSelectedIndex((prev) => (prev < certificatesList.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="certificates" className="py-24 bg-[#fafafa] border-y border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching user specification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          {/* Section Label: CERTIFICATIONS */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
            <Award className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>CERTIFICATIONS</span>
          </div>

          {/* Heading: Certificates & Achievements */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Certificates &amp; Achievements
          </h2>

          {/* Short Description */}
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Continuous learning through certifications, training and practical experience.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>17 Verified Credentials • Cisco Networking Academy &amp; University Programs</span>
          </div>
        </motion.div>

        {/* Filter / Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === 'All'
                ? certificatesList.length
                : certificatesList.filter((c) => c.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-zinc-900 text-white shadow-sm ring-2 ring-zinc-900/10'
                    : 'bg-white text-zinc-600 border border-zinc-200/90 hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-300'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    isActive ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificates Gallery: Desktop 3 / row, Tablet 2 / row, Mobile 1 / row */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <CertificateCard
                  cert={cert}
                  onView={handleOpenCert}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom PDF Download Banner */}
        <div className="mt-16 bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 flex items-center justify-center sm:justify-start gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Complete Certificates Dossier</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 font-mono">
              View or download the complete 15-page certified document in certificatesastha(1).pdf
            </p>
          </div>

          <a
            href="/certificates/certificatesastha.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white font-semibold text-xs sm:text-sm hover:bg-blue-600 shadow-sm hover:shadow transition-all duration-200 shrink-0"
          >
            <span>Open certificatesastha.pdf</span>
            <FileText className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Full-Screen Lightbox Modal with Prev/Next Controls */}
      {selectedIndex !== null && (
        <CertificateViewer
          cert={certificatesList[selectedIndex]}
          currentIndex={selectedIndex}
          totalCount={certificatesList.length}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrevCert}
          onNext={handleNextCert}
        />
      )}
    </section>
  );
}
