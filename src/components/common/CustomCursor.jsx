import React, { useEffect, useState } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'button' | 'link' | 'view'
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Snappy, physical spring configuration for responsive tracking without trails
  const springConfig = { damping: 32, stiffness: 420, mass: 0.3 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Disable custom cursor on mobile/tablet or touch screens
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      window.innerWidth < 1024 ||
      'ontouchstart' in window;

    setIsTouchDevice(isTouch);
    if (isTouch || shouldReduceMotion) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const viewTarget = target.closest('[data-cursor="view"], .project-image-view');
      const buttonTarget = target.closest('button, [role="button"], input[type="submit"], .cursor-pointer-btn');
      const linkTarget = target.closest('a, .editorial-link, .editorial-hover-link, [data-cursor="link"]');

      if (viewTarget) {
        setCursorType('view');
      } else if (buttonTarget) {
        setCursorType('button');
      } else if (linkTarget) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, visible, shouldReduceMotion]);

  if (isTouchDevice || shouldReduceMotion || !visible) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Dynamic Cursor Surface */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-center justify-center select-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width:
            cursorType === 'view'
              ? 54
              : cursorType === 'button'
              ? 36
              : cursorType === 'link'
              ? 22
              : 8,
          height:
            cursorType === 'view'
              ? 54
              : cursorType === 'button'
              ? 36
              : cursorType === 'link'
              ? 22
              : 8,
          backgroundColor:
            cursorType === 'view'
              ? '#8F0028'
              : cursorType === 'button'
              ? 'rgba(143, 0, 40, 0.1)'
              : cursorType === 'link'
              ? 'rgba(143, 0, 40, 0.08)'
              : '#8F0028',
          borderColor:
            cursorType === 'view'
              ? '#8F0028'
              : cursorType === 'button'
              ? '#8F0028'
              : cursorType === 'link'
              ? '#8F0028'
              : 'transparent',
          borderWidth:
            cursorType === 'button'
              ? '1.5px'
              : cursorType === 'link'
              ? '1.5px'
              : '0px',
          borderRadius: '9999px',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 350 }}
      >
        {/* VIEW indicator text on project image hover */}
        {cursorType === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18 }}
            className="text-[10px] font-mono font-black text-[#FCF8F2] tracking-wider uppercase"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
