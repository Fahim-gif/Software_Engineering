import React from 'react';
import { ArrowLeft } from 'lucide-react';

/**
 * Fallback for nav links whose pages are not built yet (Gallery, Videos,
 * Journal, Contact, Collections). Keeps the navigation usable instead of
 * dead-ending on a blank screen.
 */
export default function ComingSoon({ title = 'Coming Soon' }) {
  return (
    <main className="bg-about-bg min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-24 text-center">
      <div className="max-w-md">
        <p className="text-[11px] uppercase tracking-[0.25em] text-about-sage font-semibold">
          In Progress
        </p>

        <h1 className="font-serif text-about-ink text-4xl md:text-5xl mt-4">
          {title}
        </h1>

        <p className="text-sm text-gray-500 font-light mt-4 leading-relaxed">
          This chapter of the Heaven Furniture Mart experience is being crafted.
          In the meantime, read about our heritage or visit the flagship
          showroom on Agrabad Access Road.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a
            href="#/about"
            className="inline-flex items-center gap-2 bg-about-ink text-white px-6 py-3 rounded-full text-xs font-medium hover:bg-about-sage transition duration-300"
          >
            Read Our Story
          </a>
          <a
            href="#/"
            className="inline-flex items-center gap-2 border border-gray-300 text-about-ink px-6 py-3 rounded-full text-xs font-medium hover:border-about-sage hover:text-about-sage transition duration-300"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back Home
          </a>
        </div>
      </div>
    </main>
  );
}
