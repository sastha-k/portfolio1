import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../../data/portfolioData';

/**
 * Full-Site Batman Live Video Background
 *
 * Source: Local MP4 video (batman/video-1791783490902.mp4)
 * Asset Path: public/videos/batman.mp4
 *
 * Features:
 * - Native HTML5 <video> element with autoPlay, loop, muted, playsInline
 * - Fixed fullscreen layer (fixed inset-0 w-full h-full pointer-events-none z-0) spanning top-to-bottom
 * - object-cover object-center with subtle scale (scale-[1.04]) to eliminate any edge letterboxing
 * - Instant paint with high-res poster fallback (/videos/batman-fallback.jpg)
 * - Full accessibility: respects prefers-reduced-motion (freezes video, displays crisp poster)
 * - Battery/CPU efficiency: pauses video when tab is hidden (document.hidden)
 * - Calibrated multi-layer editorial tint overlay ensuring typography contrast and button clarity
 *   on all devices (desktop, tablet, mobile) while highlighting Batman's glowing eyes and armor.
 */
export default function VideoBackground({ className = '' }) {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const videoSrc = getAssetPath('/videos/batman.mp4');
  const posterSrc = getAssetPath('/videos/batman-fallback.jpg');

  // Check prefers-reduced-motion
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
    } else {
      motionQuery.addListener(handleMotionChange);
    }

    // Pause video when tab is hidden to save CPU/GPU resources
    const handleVisibilityChange = () => {
      if (!videoRef.current) return;
      if (document.hidden) {
        videoRef.current.pause();
      } else if (!prefersReducedMotion) {
        videoRef.current.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReducedMotion]);

  // Ensure autoplay kicks in reliably
  useEffect(() => {
    if (videoRef.current && !prefersReducedMotion) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [prefersReducedMotion]);

  return (
    <div
      className={`fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none ${className}`}
      aria-hidden="true"
      style={{ backgroundColor: '#0d0f14' }}
    >
      {/* 1. Base Static High-Res Poster Fallback (instant paint, zero flash, reduced motion) */}
      <img
        src={posterSrc}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${
          isVideoLoaded && !prefersReducedMotion ? 'opacity-0' : 'opacity-90'
        }`}
        loading="eager"
      />

      {/* 2. Native HTML5 Video Element */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center scale-[1.04] transition-opacity duration-700 ease-out ${
            isVideoLoaded ? 'opacity-90' : 'opacity-0'
          }`}
          style={{
            filter: 'contrast(1.08) brightness(0.95)',
          }}
        />
      )}

      {/* 3. Calibrated Editorial Readability & Tint Overlay:
          Ensures the charcoal body text (#1F1F1F), badges, project cards, and buttons
          remain beautifully legible and clear across the entire site from top to bottom,
          while letting Batman's silhouette, armor, and glowing eyes illuminate the screen.
      */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 25%, rgba(253, 246, 227, 0.85) 0%, rgba(253, 246, 227, 0.62) 42%, rgba(253, 246, 227, 0.38) 78%, rgba(253, 246, 227, 0.22) 100%)',
        }}
      />

      {/* 4. Subtle Bottom Vignette: Guarantees footer text legibility */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(253, 246, 227, 0.88) 0%, rgba(253, 246, 227, 0.45) 55%, transparent 100%)',
        }}
      />
    </div>
  );
}
