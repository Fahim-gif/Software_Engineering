import React from 'react';
import SectionReveal from './SectionReveal';

/** Centered editorial intro: label, headline, supporting paragraph. */
export default function StorySection() {
  return (
    <section className="px-6 pt-10 pb-14 md:pt-16 md:pb-20">
      <SectionReveal className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-about-sage">
          <span className="w-5 h-px bg-about-sage/60" />
          Our Story &amp; Heritage
          <span className="w-5 h-px bg-about-sage/60" />
        </span>

        <h2 className="font-serif text-about-ink text-3xl sm:text-4xl md:text-5xl leading-[1.18] mt-5">
          Designed. Crafted.{' '}
          <span className="italic text-about-sage">Customized.</span>
        </h2>

        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-light max-w-2xl mx-auto mt-6">
          Founded in 2020 by Managing Director Abul Kalam Bhuiyan on Agrabad
          Access Road, Chattogram, Heaven Furniture Mart crafts custom luxury
          furniture built around what you actually want, not pulled off a shelf.
        </p>
      </SectionReveal>
    </section>
  );
}
