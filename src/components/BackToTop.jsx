import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Back-to-top control. Fades in after the user scrolls past `showAfter`.
 * Used standalone and inside FloatingWidgets.
 */
export default function BackToTop({ showAfter = 320, className = '' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`p-3 bg-white rounded-full shadow-lg border border-gray-100 text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      } ${className}`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
