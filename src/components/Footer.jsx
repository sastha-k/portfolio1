import React from 'react';
import { ArrowUp, Download, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fafafa] border-t border-zinc-200/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <img
                src={personalInfo.logo || "/logo.png"}
                alt={`${personalInfo.name} Logo`}
                className="w-9 h-9 object-contain"
              />
            </div>
            <div className="text-left">
              <div className="text-sm font-extrabold text-zinc-900">
                {personalInfo.name}
              </div>
              <div className="text-xs font-mono text-zinc-500">
                {personalInfo.title} • {personalInfo.degree} ({personalInfo.batch})
              </div>
            </div>
          </div>

          {/* Center Resume Verification Notice */}
          <div className="text-xs text-zinc-500 font-mono text-center flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Verified Resume Content • Clean Minimal 3D Portfolio</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumePdf}
              download="Sastha_K_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-800 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors shadow-sm"
              aria-label="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200/60 text-center text-xs text-zinc-400 font-mono">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Target: {personalInfo.targetCompany}.
        </div>
      </div>
    </footer>
  );
}
