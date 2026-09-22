import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionReveal from './SectionReveal';

/**
 * Large rounded showroom image with a floating glass caption bar.
 * Image is passed in from the page so it stays swappable in one place.
 */
export default function ShowroomCard({
  image,
  badge = 'HFM',
  title = 'Agrabad Flagship Showroom',
  caption = 'Agrabad Access Road, Chattogram · Over 5,000 sq ft of bespoke living spaces',
  href = '#/contact',
}) {
  return (
    <section className="px-6 pb-16 md:pb-24">
      <SectionReveal className="max-w-6xl mx-auto">
        <figure className="group relative rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_18px_50px_-24px_rgba(37,37,34,0.45)] border border-black/5">
          <div className="aspect-[16/11] sm:aspect-[16/9] lg:aspect-[16/8]">
            <img
              src={image}
              alt="Interior of the Heaven Furniture Mart flagship showroom in Agrabad, Chattogram"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
          </div>

          {/* Gradient keeps the caption readable over any photograph */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

          {/* Floating caption bar */}
          <figcaption className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-[1.25rem] border border-white/70 shadow-lg px-4 py-3.5 sm:px-6 sm:py-4 flex items-center gap-3 sm:gap-4">
              <span className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-about-sage-light text-about-sage font-serif text-xs sm:text-sm font-bold flex items-center justify-center tracking-wide">
                {badge}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-about-ink text-sm sm:text-base leading-tight truncate">
                  {title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-gray-500 leading-snug mt-0.5 line-clamp-2">
                  {caption}
                </p>
              </div>

              <a
                href={href}
                aria-label="Visit the Agrabad flagship showroom"
                className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-about-ink text-white flex items-center justify-center transition duration-300 hover:bg-about-sage hover:rotate-45"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </figcaption>
        </figure>
      </SectionReveal>
    </section>
  );
}
