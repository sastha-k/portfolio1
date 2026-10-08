import React from 'react';
import { ArrowUp, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import MagneticButton from './common/MagneticButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-transparent border-t border-[#F2E5D1] py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#F2E5D1]">
          
          {/* Brand Info with White S Logo */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#8F0028] p-2 flex items-center justify-center flex-shrink-0 shadow-xs">
              <img
                src={personalInfo.logo}
                alt="S"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <div className="text-base font-black text-[#1F1F1F] uppercase tracking-tight">
                <span className="text-[#8F0028]">SAS</span>tha K
              </div>
              <div className="text-xs font-mono font-bold text-[#8F0028] uppercase tracking-wider">
                Developer • UI/UX Designer
              </div>
            </div>
          </div>

          {/* Social / Email / Resume Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono font-bold uppercase tracking-wider text-[#1F1F1F]">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#8F0028] transition-colors"
            >
              {personalInfo.email}
            </a>
            <span>•</span>
            <a
              href={personalInfo.resumePdf}
              download="Sastha_K_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8F0028] transition-colors inline-flex items-center gap-1"
            >
              <span>Download Resume</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Back to Top */}
          <MagneticButton>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#F2E5D1] text-xs font-mono font-bold text-[#1F1F1F] hover:border-[#8F0028] hover:text-[#8F0028] transition-all cursor-pointer shadow-xs self-start md:self-auto group"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#8F0028] transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </MagneticButton>
        </div>

        {/* Bottom Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <div>
            &copy; {new Date().getFullYear()} Sastha K. All rights reserved.
          </div>
          <div className="text-[#8F0028] font-bold">
            Target: {personalInfo.targetCompany} • Batch {personalInfo.batch}
          </div>
        </div>

      </div>
    </footer>
  );
}
