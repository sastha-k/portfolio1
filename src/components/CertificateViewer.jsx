import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Building2, Calendar, ShieldCheck, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

export default function CertificateViewer({ cert, currentIndex, totalCount, onClose, onPrev, onNext }) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1F1F1F]/75 backdrop-blur-sm overflow-y-auto">
        
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          key={cert.id}
          initial={{ scale: 0.96, opacity: 0, y: 8 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 8 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FCF8F2] rounded-2xl max-w-5xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border-2 border-[#8F0028] relative z-10 flex flex-col text-[#1F1F1F]"
        >
          {/* Top Bar with Navigation Controls & Close */}
          <div className="p-4 sm:p-6 border-b border-[#F2E5D1] flex items-center justify-between gap-4 sticky top-0 bg-[#FCF8F2] z-20">
            <div className="space-y-1 min-w-0 text-left">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-[#8F0028] text-white">
                  {cert.category}
                </span>
                <span className="text-xs font-mono text-[#666666]">
                  Certificate {currentIndex + 1} of {totalCount}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-[#1F1F1F] leading-tight truncate uppercase" title={cert.title}>
                {cert.title}
              </h3>
            </div>

            {/* Top Right Controls: Previous / Next / Close */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={onPrev}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white hover:bg-[#FAF4EB] text-[#1F1F1F] border border-[#F2E5D1] text-xs font-bold uppercase transition-colors cursor-pointer"
                title="Previous Certificate"
              >
                <ChevronLeft className="w-4 h-4 text-[#8F0028]" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <button
                onClick={onNext}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white hover:bg-[#FAF4EB] text-[#1F1F1F] border border-[#F2E5D1] text-xs font-bold uppercase transition-colors cursor-pointer"
                title="Next Certificate"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4 text-[#8F0028]" />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white hover:bg-[#8F0028] hover:text-white text-[#1F1F1F] border border-[#F2E5D1] transition-colors ml-1 cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Image View Area */}
          <div className="p-4 sm:p-8 bg-[#FAF4EB] flex items-center justify-center min-h-[320px] sm:min-h-[460px] border-b border-[#F2E5D1]">
            <div className="relative max-w-full rounded-xl overflow-hidden shadow-md border border-[#F2E5D1] bg-white p-2">
              <img
                src={cert.previewImage}
                alt={cert.title}
                className="max-h-[62vh] w-auto max-w-full object-contain mx-auto block rounded-lg"
              />
            </div>
          </div>

          {/* Certificate Metadata & Details */}
          <div className="p-5 sm:p-7 space-y-4 bg-[#FCF8F2] text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              {cert.issuer && (
                <div className="flex items-start gap-2.5 p-3.5 bg-white rounded-xl border border-[#F2E5D1]">
                  <Building2 className="w-4 h-4 text-[#8F0028] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#666666] font-bold block">
                      ISSUING ORGANIZATION
                    </span>
                    <span className="font-bold text-[#1F1F1F] text-xs sm:text-sm mt-0.5 block">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              )}

              {cert.date && (
                <div className="flex items-start gap-2.5 p-3.5 bg-white rounded-xl border border-[#F2E5D1]">
                  <Calendar className="w-4 h-4 text-[#8F0028] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#666666] font-bold block">
                      DATE OF ISSUANCE / PERIOD
                    </span>
                    <span className="font-bold text-[#1F1F1F] text-xs sm:text-sm mt-0.5 block font-mono">
                      {cert.date}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {cert.details && (
              <div className="p-4 bg-white rounded-xl border border-[#F2E5D1] space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#8F0028] font-bold block">
                  VERIFICATION SCOPE &amp; DETAILS
                </span>
                <p className="text-xs text-[#1F1F1F]/80 leading-relaxed font-normal">
                  {cert.details}
                </p>
              </div>
            )}

            {/* Footer Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#8F0028] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#8F0028]" />
                <span>100% Resume Authenticated</span>
              </div>

              <div className="flex items-center gap-2">
                {cert.fullDocument && (
                  <a
                    href={cert.fullDocument}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#8F0028] text-white text-xs font-bold uppercase hover:bg-[#A81038] transition-colors"
                  >
                    <span>OPEN FULL DOCUMENT</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-white border border-[#F2E5D1] text-[#1F1F1F] text-xs font-bold uppercase hover:bg-[#FAF4EB] transition-colors cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
