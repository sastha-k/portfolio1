import React, { useEffect, useRef } from 'react';

/**
 * Premium Minimal Animated Background
 * 
 * Features:
 * - Subtle ambient drifting gradient mesh (warm ivory + faint burgundy & champagne gold tones)
 * - Ultra-lightweight floating micro-dots with faint proximity lines
 * - Smooth lerp mouse-following ambient glow
 * - High performance: zero external dependencies, requestAnimationFrame, DPI-aware
 * - Full accessibility: respects prefers-reduced-motion, pointer-events-none, z-0
 */
export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // DPI scaling for crisp dots on Retina displays
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Smooth mouse coordinates with linear interpolation (lerp)
    const mouse = {
      x: width / 2,
      y: height * 0.35,
      targetX: width / 2,
      targetY: height * 0.35,
      radius: Math.min(width, height) * 0.45,
      active: false,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = width / 2;
      mouse.targetY = height * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Determine particle count based on screen width (ultra-lightweight)
    const isMobile = width < 768;
    const particleCount = isMobile ? 22 : 45;

    // Color palette matching the editorial portfolio
    const palette = [
      { r: 143, g: 0, b: 40, baseAlpha: 0.14 },    // subtle burgundy
      { r: 196, g: 154, b: 108, baseAlpha: 0.16 }, // champagne gold
      { r: 100, g: 85, b: 75, baseAlpha: 0.10 },   // warm slate taupe
    ];

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const color = palette[i % palette.length];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 0.9 + 0.8, // 0.8px to 1.7px (micro dots)
        color,
        pulseSpeed: 0.01 + Math.random() * 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Smoothly interpolate mouse glow position
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Soft diffuse ambient cursor glow (subtle warm champagne & wine)
      const glowGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius
      );
      glowGrad.addColorStop(0, 'rgba(143, 0, 40, 0.038)');
      glowGrad.addColorStop(0.45, 'rgba(212, 175, 55, 0.018)');
      glowGrad.addColorStop(1, 'rgba(252, 248, 242, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw subtle constellation connections between close particles
      const maxDistance = isMobile ? 65 : 85;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.035;
            ctx.strokeStyle = `rgba(143, 0, 40, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Update & draw floating micro-dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap around edges seamlessly
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        // Delicate breathing pulse in opacity
        const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulsePhase);
        const alpha = p.color.baseAlpha + pulse * 0.05;

        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${Math.max(0.04, alpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // If reduced motion is preferred, render single calm static frame
    if (prefersReducedMotion) {
      render();
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    // Pause when tab is not active to save battery & CPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isRunning = true;
        if (!prefersReducedMotion) {
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
      style={{ willChange: 'transform' }}
    >
      {/* 1. Base Ambient Warm Editorial Gradient Blobs (CSS GPU-Accelerated) */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(247, 238, 225, 0.8) 0%, rgba(252, 248, 242, 0) 70%)',
          animation: 'bgFloatSlow 22s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute top-[35%] left-[-15%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full opacity-45 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(143, 0, 40, 0.035) 0%, rgba(252, 248, 242, 0) 65%)',
          animation: 'bgFloatSlow 28s ease-in-out infinite alternate-reverse',
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(238, 226, 210, 0.7) 0%, rgba(252, 248, 242, 0) 70%)',
          animation: 'bgFloatSlow 25s ease-in-out infinite alternate',
        }}
      />

      {/* 2. Canvas Layer for Micro-Particles & Mouse Glow */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
}
