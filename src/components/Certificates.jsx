import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { certificatesList } from '../data/portfolioData';
import CertificateCard from './CertificateCard';
import CertificateViewer from './CertificateViewer';
import { ShieldCheck } from 'lucide-react';

export default function Certificates() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const shouldReduceMotion = useReducedMotion();
  const editorialEase = [0.16, 1, 0.3, 1];

  const categories = [
    'All',
    'AI',
    'Cybersecurity',
    'Development',
    'Training',
    'Participation',
    'Internship',
    'Other',
  ];

  const list = certificatesList || [];
  const filteredCertificates =
    activeCategory === 'All'
      ? list
      : list.filter((c) => c && c.category === activeCategory);

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
    <section id="certificates" className="py-24 sm:py-32 bg-[#FCF8F2] border-b border-[#F2E5D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F2E5D1] mb-12">
          <div>
            <span className="text-xs font-mono text-[#8F0028] font-bold tracking-widest uppercase block mb-1">
              04 — CERTIFICATES &amp; CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1F1F1F] tracking-tight uppercase">
              CERTIFICATES
            </h2>
          </div>
          <p className="text-xs font-mono text-[#666666] max-w-xs text-left sm:text-right uppercase">
            100% authenticated credentials from Cisco, TN Apex, and Cadd Cae Computers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#8F0028] text-white shadow-xs'
                  : 'bg-white text-[#1F1F1F]/75 border border-[#F2E5D1] hover:border-[#8F0028]/40 hover:text-[#8F0028]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Gallery: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCertificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{
                opacity: shouldReduceMotion ? 1 : 0,
                y: shouldReduceMotion ? 0 : 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : (idx % 3) * 0.08,
                ease: editorialEase,
              }}
            >
              <CertificateCard cert={cert} onView={handleOpenCert} />
            </motion.div>
          ))}
        </div>

        {/* Verified Notice Footer */}
        <div className="mt-14 p-5 rounded-2xl bg-white border border-[#F2E5D1] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
            <ShieldCheck className="w-4 h-4 text-[#8F0028]" />
            <span>All 17 certificates authenticated directly against original files</span>
          </div>
          <div className="text-xs font-mono text-[#8F0028] font-bold">
            Total Verified: {certificatesList.length} Certificates
          </div>
        </div>

      </div>

      {/* Clean Modal / Lightbox */}
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
