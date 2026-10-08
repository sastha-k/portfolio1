import React, { useState, useEffect, useCallback } from 'react';
import LoadingScreen from './components/common/LoadingScreen';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleLoadingFinish = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Subtle Interactive Custom Cursor */}
      <CustomCursor />

      {/* 2D Minimal Loading Screen */}
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}

      <div className="min-h-screen bg-[#FCF8F2] text-[#1F1F1F] font-sans selection:bg-[#8F0028] selection:text-[#FCF8F2] relative">
        {/* Minimal Editorial Scroll Progress Bar */}
        <div
          className="fixed top-0 left-0 h-[2px] bg-[#8F0028] z-[60] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Minimal Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </>
  );
}
