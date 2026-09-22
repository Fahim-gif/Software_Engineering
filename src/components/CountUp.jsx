import React, { useEffect, useRef, useState } from 'react';

export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 1600,
  separator = false,
  className = '',
  decimals = 0,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = Number(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !Number.isFinite(numericValue)) {
      return undefined;
    }

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setDisplayValue(numericValue);
      return undefined;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(numericValue * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, isVisible, numericValue]);

  const formatValue = (amount) => {
    const valueToFormat = Number.isFinite(amount) ? amount : 0;
    const formatted = separator
      ? new Intl.NumberFormat('en-US', {
          maximumFractionDigits: decimals,
          minimumFractionDigits: decimals,
        }).format(valueToFormat)
      : valueToFormat.toLocaleString('en-US', {
          maximumFractionDigits: decimals,
          minimumFractionDigits: decimals,
        });

    return formatted;
  };

  const content = Number.isFinite(numericValue)
    ? `${prefix}${formatValue(displayValue)}${suffix}`
    : `${prefix}${suffix}`;

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {content}
    </span>
  );
}
