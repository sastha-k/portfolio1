import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../../data/portfolioData';

/**
 * Beautiful Cream and Beige Coastal Animated Video Background
 * 
 * Palette:
 * - Cream: #F5F0E8
 * - Warm Beige: #E8DCCB
 * - Soft Sand: #D8C3A5
 * - Existing Maroon Accent: #A0002D / #8F0028
 * - Text: #222222 / #1F1F1F
 * 
 * Features:
 * - Subtle, realistic beach and ocean video with gentle waves and warm sunlight caustics
 * - Warm cream, ivory, and beige palette (no dark backgrounds, no harsh bright blues)
 * - Seamless looping, autoplay, muted, playsInline
 * - Non-blocking lazy deferred mounting so page load is instant
 * - High-res static cream coastal fallback image for slow connections and initial paint
 * - Full accessibility: respects prefers-reduced-motion (disables video, shows static fallback)
 * - Subtle cream atmosphere overlay ensuring text remains 100% readable
 * - Fully responsive across desktop, tablet, and mobile
 * - Zero pointer interference (pointer-events-none, z-0)
 */
export default function VideoBackground() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const videoWebm = getAssetPath('/background-coastal.webm');
  const videoMp4 = getAssetPath('/background-coastal.mp4');
  const fallbackImg = getAssetPath('/background-coastal-fallback.jpg');

  // Check prefers-reduced-motion & defer loading until after mount
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

    // Lazy defer video mount to prevent blocking critical initial paint
    const timer = setTimeout(() => {
      setShouldPlayVideo(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  // Handle tab visibility & reduced motion pause/play
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [prefersReducedMotion]);

  const handleCanPlay = () => {
    setIsVideoLoaded(true);
    if (videoRef.current && !prefersReducedMotion) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleError = () => {
    setIsVideoError(true);
  };

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* 1. Base Static Cream Coastal Fallback Image (always present for instant paint) */}
      <img
        src={fallbackImg}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          isVideoLoaded && !prefersReducedMotion ? 'opacity-0' : 'opacity-100'
        }`}
        loading="eager"
      />

      {/* 2. Seamless Looping Realistic Coastal Video Layer */}
      {shouldPlayVideo && !prefersReducedMotion && !isVideoError && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          poster={fallbackImg}
          onCanPlay={handleCanPlay}
          onError={handleError}
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>
      )}

      {/* 3. Subtle Cream & Warm Beige Atmosphere Overlay:
          Delivers crystal-clear text readability over sand while letting the
          coastal waves and warm sunlight caustics illuminate the background.
      */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 35%, rgba(245, 240, 232, 0.68) 0%, rgba(245, 240, 232, 0.46) 55%, rgba(232, 220, 203, 0.28) 100%)',
          backdropFilter: 'blur(0.5px)',
        }}
      />
    </div>
  );
}
