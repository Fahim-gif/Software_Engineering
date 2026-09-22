import React from 'react';

/**
 * Reusable banner hero for inner pages.
 * (The landing page keeps its own typographic `Hero.jsx` — this one is the
 * image-backed variant used by About and any future inner page.)
 *
 * @param {string} title     Large serif headline, e.g. "ABOUT US"
 * @param {string} subtitle  Small uppercase line under the rule
 * @param {string} image     Background image URL (see src/assets/images/index.js)
 */
export default function PageHero({ title, subtitle, image, alt = '' }) {
  return (
    <section className="relative w-full h-[280px] sm:h-[340px] lg:h-[400px] overflow-hidden">
      {/* Background image — replace via src/assets/images/index.js */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark transparent overlay for legibility */}
      <div className="absolute inset-0 bg-[#1A1A17]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A17]/70 via-transparent to-[#1A1A17]/30" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-14">
        <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[0.18em] uppercase">
          {title}
        </h1>

        <span className="block w-14 h-px bg-white/50 my-5 animate-draw" />

        <p className="text-[10px] sm:text-xs text-white/75 uppercase tracking-[0.35em] font-light">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
