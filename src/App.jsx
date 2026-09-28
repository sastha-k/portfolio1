import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/common/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      {/* Animated Loading Screen */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white relative">
        {/* Top Scroll Progress Bar */}
        <div
          className="fixed top-0 left-0 h-[3px] bg-blue-600 z-[60] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Sections strictly adhering to structure */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Certificates />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
