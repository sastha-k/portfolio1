import React from 'react';
import { Calendar, Building2, ArrowRight, ShieldCheck, Eye } from 'lucide-react';
import TiltCard from './common/TiltCard';

export default function CertificateCard({ cert, onView }) {
  return (
    <TiltCard maxTilt={4} className="h-full">
      <div className="bg-white border border-zinc-200/90 rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between h-full group">
        
        <div>
          {/* Certificate Preview Image - Preserving Original Ratio, Non-Stretched */}
          <div
            className="relative w-full h-56 sm:h-60 bg-zinc-50/90 overflow-hidden cursor-pointer flex items-center justify-center p-3.5 border-b border-zinc-100 group/img"
            onClick={() => onView(cert)}
          >
            {/* Ambient background subtle grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

            <img
              src={cert.previewImage}
              alt={cert.title}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-md shadow-xs group-hover:scale-[1.02] transition-transform duration-300 ease-out"
              loading="lazy"
            />

            {/* Category Pill (Top Left) */}
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-white/95 backdrop-blur-md text-zinc-800 border border-zinc-200/80 shadow-xs inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>{cert.category}</span>
              </span>
            </div>

            {/* Hover Inspect Overlay */}
            <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
              <span className="px-3.5 py-1.5 rounded-xl bg-white text-zinc-900 text-xs font-semibold shadow-md inline-flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Eye className="w-3.5 h-3.5 text-blue-600" />
                <span>View Certificate</span>
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-5 sm:p-6 space-y-3">
            <h3
              onClick={() => onView(cert)}
              className="font-bold text-zinc-900 text-base sm:text-lg leading-snug group-hover:text-blue-600 cursor-pointer transition-colors line-clamp-2"
              title={cert.title}
            >
              {cert.title}
            </h3>

            {/* Issuing Organization */}
            {cert.issuer && (
              <div className="flex items-start gap-2 text-xs text-zinc-600">
                <Building2 className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                <span className="font-medium text-zinc-700 line-clamp-2">{cert.issuer}</span>
              </div>
            )}

            {/* Date / Period if available */}
            {cert.date && (
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{cert.date}</span>
              </div>
            )}
          </div>
        </div>

        {/* Card Footer Action */}
        <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-zinc-100 flex items-center justify-between">
          <button
            onClick={() => onView(cert)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-900 hover:text-blue-600 transition-colors group/btn"
          >
            <span>View Certificate</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified</span>
          </div>
        </div>

      </div>
    </TiltCard>
  );
}
