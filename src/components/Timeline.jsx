import React from 'react';
import { Award, Building2, Check, Hammer, Sparkles, Trophy } from 'lucide-react';
import { milestones } from '../data/aboutContent';
import SectionReveal from './SectionReveal';

/** Maps the `icon` key in aboutContent.js to a lucide icon component. */
const ICONS = {
  hammer: Hammer,
  building: Building2,
  sparkles: Sparkles,
  award: Award,
  trophy: Trophy,
};

function MilestoneCard({ item, index }) {
  const Icon = ICONS[item.icon] ?? Sparkles;
  const isEven = index % 2 === 0;

  return (
    <SectionReveal
      as="li"
      delay={index * 90}
      className="relative md:grid md:grid-cols-2 md:gap-12 md:items-center"
    >
      {/* Rail node — centred on desktop, left-aligned on mobile */}
      <span
        aria-hidden="true"
        className="absolute left-[-2.125rem] top-8 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-about-sage ring-4 ring-about-sage-light z-10"
      />

      {/* Card */}
      <article
        className={`group bg-white rounded-2xl md:rounded-[1.5rem] border border-gray-100 p-6 sm:p-7 shadow-[0_10px_30px_-24px_rgba(37,37,34,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(37,37,34,0.5)] hover:border-about-sage/30 ${
          isEven ? 'md:col-start-1' : 'md:col-start-2'
        }`}
      >
        <header className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-about-sage-light text-about-sage flex items-center justify-center shrink-0 transition group-hover:bg-about-sage group-hover:text-white">
              <Icon className="w-4 h-4" />
            </span>
            <div>
              <p className="font-serif text-2xl text-about-ink leading-none">
                {item.year}
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-semibold mt-1.5">
                {item.category}
              </p>
            </div>
          </div>

          {/* Milestone number */}
          <span className="font-serif text-3xl text-gray-100 leading-none select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
        </header>

        <h3 className="font-serif text-about-ink text-lg sm:text-xl mt-5">
          {item.title}
        </h3>

        <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-light mt-2.5">
          {item.description}
        </p>

        <p className="inline-flex items-center gap-1.5 mt-5 rounded-full bg-about-sage-light text-about-sage text-[10px] font-semibold px-3 py-1.5">
          <Check className="w-3 h-3 shrink-0" />
          {item.badge}
        </p>
      </article>
    </SectionReveal>
  );
}

export default function Timeline() {
  return (
    <section className="px-6 pb-20 md:pb-28">
      <SectionReveal className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-about-sage">
          <span className="w-5 h-px bg-about-sage/60" />
          Our Journey
          <span className="w-5 h-px bg-about-sage/60" />
        </span>

        <h2 className="font-serif text-about-ink text-3xl sm:text-4xl md:text-5xl leading-tight mt-5">
          Heritage &amp; Key Milestones
        </h2>

        <p className="text-gray-500 text-sm font-light mt-4">
          From artisan roots to nationwide recognition.
        </p>
      </SectionReveal>

      <div className="relative max-w-5xl mx-auto pl-7 md:pl-0">
        {/* Vertical rail */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-0 md:left-1/2 md:-translate-x-1/2 w-px bg-gradient-to-b from-transparent via-about-sage/30 to-transparent"
        />

        <ol className="space-y-8 md:space-y-10">
          {milestones.map((item, index) => (
            <MilestoneCard key={item.year} item={item} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
