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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-zinc-950/80 backdrop-blur-md overflow-y-auto">
        
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
          className="bg-white rounded-[24px] max-w-5xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-zinc-200 relative z-10 flex flex-col"
        >
          {/* Top Bar with Navigation Controls & Close */}
          <div className="p-4 sm:p-6 border-b border-zinc-100 flex items-center justify-between gap-4 sticky top-0 bg-white/95 backdrop-blur-md z-20">
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200/60">
                  {cert.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Certificate {currentIndex + 1} of {totalCount}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold text-zinc-900 leading-tight truncate" title={cert.title}>
                {cert.title}
              </h3>
            </div>

            {/* Top Right Controls: Previous / Next / Close */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={onPrev}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold transition-colors"
                title="Previous Certificate (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <button
                onClick={onNext}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold transition-colors"
                title="Next Certificate (Right Arrow)"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors ml-1"
                aria-label="Close Modal (Escape)"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Full Certificate Image View Area - Preserving Original Proportions */}
          <div className="p-3 sm:p-6 md:p-8 bg-zinc-100/70 flex items-center justify-center min-h-[320px] sm:min-h-[480px] relative">
            <div className="relative max-w-full rounded-xl overflow-hidden shadow-lg border border-zinc-200 bg-white">
              <img
                src={cert.previewImage}
                alt={cert.title}
                className="max-h-[62vh] w-auto max-w-full object-contain mx-auto block"
              />
            </div>
          </div>

          {/* Certificate Metadata & Footer Actions */}
          <div className="p-5 sm:p-7 space-y-4 bg-white border-t border-zinc-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              {cert.issuer && (
                <div className="flex items-start gap-2.5 p-3.5 bg-zinc-50 rounded-xl border border-zinc-100">
                  <Building2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">
                      Issuing Organization
                    </span>
                    <span className="font-semibold text-zinc-800 text-xs sm:text-sm">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              )}

              {cert.date && (
                <div className="flex items-start gap-2.5 p-3.5 bg-zinc-50 rounded-xl border border-zinc-100">
                  <Calendar className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">
                      Date / Period
                    </span>
                    <span className="font-semibold text-zinc-800 text-xs sm:text-sm">
                      {cert.date}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {cert.details && (
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed bg-blue-50/40 p-3.5 rounded-xl border border-blue-100/80">
                {cert.details}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {cert.certId ? `ID: ${cert.certId}` : 'Verified Authentic Document'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 text-xs font-semibold hover:bg-zinc-100 transition-colors"
                >
                  Close
                </button>

                {cert.isPdf ? (
                  <a
                    href={cert.fullDocument}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-blue-600 shadow-sm transition-all duration-200"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Open Original PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <a
                    href={cert.fullDocument}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-blue-600 shadow-sm transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Original Certificate</span>
                  </a>
                )}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
