import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import MagneticButton from './common/MagneticButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['hero', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-[#FCF8F2]/95 backdrop-blur-md border-b border-[#F2E5D1] shadow-xs py-3 sm:py-3.5'
          : 'bg-[#FCF8F2] border-b border-[#F2E5D1]/80 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: White S Logo on subtle Burgundy Seal */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group select-none"
        >
          {/* White S Logo with Transparent Background */}
          <div className="w-9 h-9 rounded-lg bg-[#8F0028] hover:bg-[#5E001B] p-1.5 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-xs">
            <img
              src="/logo.png"
              alt="S"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-sm tracking-tight text-[#1F1F1F] uppercase hidden sm:inline">
            <span className="font-black text-[#8F0028]">SAS</span>tha K
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-semibold tracking-wider transition-colors duration-200 editorial-hover-link ${
                  isActive
                    ? 'text-[#8F0028] font-bold'
                    : 'text-[#1F1F1F]/75 hover:text-[#8F0028]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Download Resume Button with Magnetic Attraction */}
        <div className="hidden sm:flex items-center gap-3">
          <MagneticButton>
            <a
              href={personalInfo.resumePdf}
              download="Sastha_K_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#8F0028] text-[#FCF8F2] hover:bg-[#5E001B] transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#1F1F1F] hover:text-[#8F0028] transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCF8F2] border-b border-[#F2E5D1] px-6 py-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 text-sm font-bold tracking-wider text-[#1F1F1F] hover:text-[#8F0028] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#F2E5D1]">
            <a
              href={personalInfo.resumePdf}
              download="Sastha_K_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#8F0028] text-[#FCF8F2] hover:bg-[#5E001B] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
