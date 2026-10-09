import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../../data/portfolioData';

/**
 * Premium Animated Video Background
 * 
 * Features:
 * - Subtle futuristic abstract technology video (deep navy/black with subtle blue & purple movement)
 * - Seamless looping, muted, autoplay, playsInline
 * - Lazy-loaded after initial load to never block critical rendering path
 * - Responsive cover across desktop, tablet, and mobile
 * - Static high-res fallback image for slow connections, error states, and unsupported browsers
 * - Full accessibility: respects prefers-reduced-motion
 * - Dark/transparent overlay for optimal contrast and text readability
 * - Zero pointer interference (pointer-events-none, z-0)
 */
export default function VideoBackground() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const videoWebm = getAssetPath('/background-tech.webm');
  const videoMp4 = getAssetPath('/background-tech.mp4');
  const fallbackImg = getAssetPath('/background-tech-fallback.jpg');

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

    // Lazy defer video attach to not block initial page load / hydration
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

  // Handle play/pause on visibility & reduced motion
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
    >
      {/* 1. Base Static Fallback Image (always present, guarantees instant render without flash) */}
      <img
        src={fallbackImg}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          isVideoLoaded && !prefersReducedMotion ? 'opacity-0' : 'opacity-100'
        }`}
        loading="eager"
      />

      {/* 2. Optimized Seamless Looping Video Layer */}
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

      {/* 3. Atmosphere Overlay:
          Delivers high contrast and crystal-clear text readability while allowing the
          subtle blue and purple tech video motion to illuminate the background with depth.
      */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 35% 40%, rgba(252, 248, 242, 0.74) 0%, rgba(252, 248, 242, 0.68) 55%, rgba(245, 236, 224, 0.52) 100%)',
          backdropFilter: 'blur(1px)',
        }}
      />
    </div>
  );
}
