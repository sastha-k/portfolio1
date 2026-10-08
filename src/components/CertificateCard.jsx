import React from 'react';
import { Calendar, Building2, ArrowUpRight, ShieldCheck, Eye } from 'lucide-react';

export default function CertificateCard({ cert, onView }) {
  if (!cert) return null;
  return (
    <div
      onClick={() => onView(cert)}
      className="group relative bg-white border border-[#F2E5D1] hover:border-[#8F0028] rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col justify-between h-full cursor-pointer text-left"
    >
      <div>
        {/* Certificate Image Frame with Hover Image Zoom 1.03 and Slight Image Sharpening */}
        <div className="relative w-full aspect-[4/3] bg-[#FAF4EB] overflow-hidden p-4 border-b border-[#F2E5D1] flex items-center justify-center">
          <img
            src={cert.previewImage}
            alt={cert.title}
            className="max-w-full max-h-full object-contain rounded-md shadow-xs transition-all duration-500 ease-out group-hover:scale-[1.03] contrast-[1.02] group-hover:contrast-[1.06] group-hover:saturate-[1.03]"
            loading="lazy"
          />

          {/* Category Pill Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-[#1F1F1F] text-[#FCF8F2] tracking-wider pointer-events-none">
              {cert.category}
            </span>
          </div>

          {/* Hover View Certificate Action Overlay */}
          <div className="absolute inset-0 bg-[#1F1F1F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
            <span className="px-4 py-2 rounded-lg bg-[#8F0028] text-white text-xs font-bold uppercase tracking-wider shadow-md inline-flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5" />
              <span>VIEW CERTIFICATE</span>
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-2.5">
          <h3
            className="font-bold text-[#1F1F1F] text-base leading-snug group-hover:text-[#8F0028] transition-colors line-clamp-2"
            title={cert.title}
          >
            {cert.title}
          </h3>

          {cert.issuer && (
            <div className="flex items-start gap-1.5 text-xs text-[#666666]">
              <Building2 className="w-3.5 h-3.5 text-[#8F0028] mt-0.5 shrink-0" />
              <span className="line-clamp-2">{cert.issuer}</span>
            </div>
          )}

          {cert.date && (
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#8A8A8A]">
              <Calendar className="w-3.5 h-3.5 text-[#8F0028] shrink-0" />
              <span>{cert.date}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 pb-5 pt-3 border-t border-[#F2E5D1] flex items-center justify-between">
        <span className="text-xs font-bold text-[#8F0028] group-hover:underline inline-flex items-center gap-1">
          <span>Inspect Document</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>

        <div className="flex items-center gap-1 text-[11px] font-mono text-[#666666] font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#8F0028]" />
          <span>Verified</span>
        </div>
      </div>
    </div>
  );
}
