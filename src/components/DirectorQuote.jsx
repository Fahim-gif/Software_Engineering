import React from 'react';
import { director } from '../data/aboutContent';
import SectionReveal from './SectionReveal';

/**
 * Managing Director statement.
 * Desktop: portrait left / quote right. Mobile: portrait stacks above the text.
 */
export default function DirectorQuote({ image }) {
  return (
    <section className="px-6 pb-16 md:pb-24">
      <SectionReveal className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-about-cream via-[#F6F2EC] to-about-lavender shadow-[0_14px_44px_-30px_rgba(37,37,34,0.5)]">
          {/* Oversized decorative quote mark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-4 md:right-12 font-serif text-[10rem] md:text-[16rem] leading-none text-about-sage/10 select-none"
          >
            &rdquo;
          </span>

          <div className="relative grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] gap-8 md:gap-12 items-center p-6 sm:p-10 md:p-12">
            {/* Portrait — replace via src/assets/images/index.js */}
            <div className="mx-auto w-full max-w-[280px] md:max-w-none">
              <div className="relative rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src={image}
                  alt={`${director.name}, ${director.role} of Heaven Furniture Mart`}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>

            <blockquote className="text-center md:text-left">
              <p className="font-serif text-about-ink text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-[1.55] italic font-normal">
                &ldquo;{director.quote}&rdquo;
              </p>

              {/* Signature-style flourish */}
              <div className="mt-8 flex flex-col items-center md:items-start">
                <span className="font-serif italic text-2xl text-about-sage/70 leading-none">
                  {director.name.split(' ')[0]}
                </span>
                <span className="block w-24 h-px bg-about-sage/40 mt-2" />

                <footer className="mt-4">
                  <p className="font-semibold text-sm text-about-ink not-italic">
                    {director.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-about-sage font-medium mt-1 not-italic">
                    {director.role}
                  </p>
                </footer>
              </div>
            </blockquote>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
