import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Compass, CheckCircle2 } from 'lucide-react';

export default function CanvasFallback() {
  return (
    <div className="w-full h-full min-h-[420px] flex items-center justify-center p-4">
      <div className="w-full max-w-[340px] bg-[#0a0000] border border-[#830000] rounded-3xl shadow-xl overflow-hidden p-6 text-center space-y-4">
        <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-[#BC0202] shadow-md">
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
          <p className="text-xs font-mono text-[#FF0000] font-semibold mt-0.5">{personalInfo.title}</p>
          <p className="text-xs text-white/70 mt-1">{personalInfo.location}</p>
        </div>
        <div className="pt-2 border-t border-[#830000]/40 flex items-center justify-center gap-1.5 text-xs text-white font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0000]" />
          <span>{personalInfo.status}</span>
        </div>
      </div>
    </div>
  );
}
