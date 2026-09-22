import React, { useEffect, useRef, useState } from 'react';
import { stats } from '../data/aboutContent';

/** Animates 0 → `to` once the card scrolls into view. */
function useCountUp(to, active, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setValue(to);
      return undefined;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo for a premium settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, active, duration]);

  return value;
}

function StatItem({ stat, active, index }) {
  const value = useCountUp(stat.to, active);
  const display = stat.separator ? value.toLocaleString('en-US') : String(value);

  // Hairline separators: 2-up on mobile, 4-up from md.
  const separators = [
    index % 2 === 1 ? 'border-l' : '',
    index >= 2 ? 'border-t' : '',
    'md:border-t-0',
    index > 0 ? 'md:border-l' : 'md:border-l-0',
  ].join(' ');

  return (
    <div className={`text-center px-2 py-6 sm:py-8 border-gray-100 ${separators}`}>
      <p className="font-serif text-about-ink text-3xl sm:text-4xl lg:text-5xl leading-none tabular-nums">
        {stat.prefix}
        {display}
        <span className="text-about-sage">{stat.suffix}</span>
      </p>
      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-gray-500 font-medium mt-3 leading-relaxed">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setActive(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 pb-16 md:pb-24">
      <div
        ref={ref}
        className="max-w-6xl mx-auto bg-white rounded-[1.5rem] md:rounded-[2rem] border border-black/5 shadow-[0_12px_40px_-28px_rgba(37,37,34,0.4)] px-4 sm:px-8 py-2 sm:py-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} active={active} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
